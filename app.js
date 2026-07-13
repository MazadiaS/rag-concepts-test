/* ============================================================
   AI/ML Concepts Test — PRO (scenario / best-answer style)
   Answers are saved to a Google Sheet via an Apps Script Web App.
   >>> AFTER you deploy the Apps Script (see SETUP.md), paste its URL here: <<<
   ============================================================ */
const WEBHOOK_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

const STORAGE_KEY = "aiml_concepts_test_pro_state_v1";
let POINTS_PER_Q = 0; // set after questions load (100 / number of questions)

let QUESTIONS = [];
let PASS_MARK = 60;
const state = { name: "", group: "", answers: {}, finished: false };

/* pretty labels for the topic breakdown */
const TOPIC_LABELS = {
  "RAG-Concept": "What is RAG",
  "Pipeline": "RAG Pipeline",
  "Chunking": "Chunking",
  "Embeddings": "Embeddings",
  "VectorDB": "Vector Database (ChromaDB)",
  "Retrieval": "Retrieval & TOP_K",
  "Generation": "Generation (LLM)",
  "RAG-vs": "RAG vs Fine-tuning"
};

/* ---------- helpers ---------- */
const $ = (id) => document.getElementById(id);
const show = (id) => {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
};

/* ---------- boot ---------- */
async function boot() {
  // load questions
  try {
    const res = await fetch("questions.json");
    const data = await res.json();
    QUESTIONS = data.questions;
    PASS_MARK = data.passing || 60;
    POINTS_PER_Q = 100 / QUESTIONS.length;
    if ($("q-count")) $("q-count").textContent = QUESTIONS.length;
    $("answered-count").textContent = `0 / ${QUESTIONS.length} answered`;
  } catch (e) {
    alert("Could not load questions.json. Make sure it is in the same folder.");
    return;
  }

  // restore saved progress (so a refresh doesn't lose work)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try { Object.assign(state, JSON.parse(saved)); } catch (e) {}
  }

  // wire welcome screen
  const nameEl = $("student-name"), groupEl = $("student-group");
  nameEl.value = state.name || "";
  groupEl.value = state.group || "";
  const checkReady = () => {
    $("start-btn").disabled = !(nameEl.value.trim() && groupEl.value.trim());
  };
  nameEl.addEventListener("input", checkReady);
  groupEl.addEventListener("input", checkReady);
  checkReady();

  $("start-btn").addEventListener("click", () => {
    state.name = nameEl.value.trim();
    state.group = groupEl.value.trim();
    save();
    renderQuestions();
    show("test");
  });

  // submit flow
  $("submit-btn").addEventListener("click", openConfirm);
  $("confirm-cancel").addEventListener("click", () => $("confirm-modal").classList.remove("show"));
  $("confirm-submit").addEventListener("click", submitTest);
}

/* ---------- render the questions ---------- */
function renderQuestions() {
  const wrap = $("questions");
  wrap.innerHTML = "";
  QUESTIONS.forEach((q) => {
    const div = document.createElement("div");
    div.className = "q";
    div.id = "q" + q.id;
    const topicLabel = TOPIC_LABELS[q.topic] || q.topic;
    let html = `<div class="qnum">Question ${q.id} · ${topicLabel}</div>
                <div class="qtext">${q.q}</div>`;
    q.options.forEach((opt, i) => {
      const checked = state.answers[q.id] === i ? "checked" : "";
      const sel = state.answers[q.id] === i ? "selected" : "";
      html += `<label class="opt ${sel}" data-q="${q.id}" data-i="${i}">
                 <input type="radio" name="q${q.id}" value="${i}" ${checked}/>
                 <span class="letter">${String.fromCharCode(65 + i)})</span>
                 <span>${opt}</span>
               </label>`;
    });
    div.innerHTML = html;
    wrap.appendChild(div);
  });

  // one click handler for all options (only toggles CSS + state — no re-render)
  wrap.querySelectorAll(".opt").forEach((el) => {
    el.addEventListener("click", () => {
      const qid = +el.dataset.q, idx = +el.dataset.i;
      state.answers[qid] = idx;
      document.querySelectorAll(`#q${qid} .opt`).forEach((o) => o.classList.remove("selected"));
      el.classList.add("selected");
      const radio = el.querySelector("input");
      if (radio) radio.checked = true;
      save();
      updateAnswered();
    });
  });
  updateAnswered();
}

function updateAnswered() {
  const n = Object.keys(state.answers).length;
  $("answered-count").textContent = `${n} / ${QUESTIONS.length} answered`;
}

/* ---------- submit + grade ---------- */
function openConfirm() {
  const n = Object.keys(state.answers).length;
  const missing = QUESTIONS.length - n;
  $("confirm-summary").textContent = missing
    ? `You answered ${n} of ${QUESTIONS.length}. ${missing} are still blank (they will be marked wrong).`
    : `You answered all ${QUESTIONS.length} questions.`;
  $("confirm-modal").classList.add("show");
}

function grade() {
  let correct = 0;
  const perTopic = {};
  const review = [];
  QUESTIONS.forEach((q) => {
    const chosen = state.answers[q.id];
    const isCorrect = chosen === q.answer;
    if (isCorrect) correct++;
    perTopic[q.topic] = perTopic[q.topic] || { correct: 0, total: 0 };
    perTopic[q.topic].total++;
    if (isCorrect) perTopic[q.topic].correct++;
    review.push({ q, chosen, isCorrect });
  });
  const score = +(correct * POINTS_PER_Q).toFixed(1);
  return { correct, score, perTopic, review };
}

async function submitTest() {
  $("confirm-modal").classList.remove("show");
  const r = grade();
  state.finished = true;
  save();

  $("results-student").textContent = `${state.name} · ${state.group}`;
  const passed = r.score >= PASS_MARK;
  const pf = $("pass-fail");
  pf.textContent = passed ? "PASS" : "FAIL";
  pf.className = "pass-fail " + (passed ? "pass" : "fail");
  $("score-big").textContent = r.score;

  const tb = $("topic-breakdown");
  tb.innerHTML = "";
  const seen = [];
  QUESTIONS.forEach((q) => { if (seen.indexOf(q.topic) === -1) seen.push(q.topic); });
  seen.forEach((t) => {
    const p = r.perTopic[t];
    const label = TOPIC_LABELS[t] || t;
    tb.innerHTML += `<div class="section-score"><div class="label">${label}</div>
                     <div class="value">${p.correct} / ${p.total}</div></div>`;
  });

  const rev = $("review");
  rev.innerHTML = "";
  r.review.forEach(({ q, chosen, isCorrect }) => {
    const yourTxt = chosen == null ? "(blank)" : `${String.fromCharCode(65 + chosen)}) ${q.options[chosen]}`;
    const rightTxt = `${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}`;
    rev.innerHTML += `<div class="item ${isCorrect ? "correct" : "wrong"}">
        <div class="qt">${q.id}. ${q.q}</div>
        <div class="line">Your answer: <span class="${isCorrect ? "right" : "you-wrong"}">${yourTxt}</span></div>
        ${isCorrect ? "" : `<div class="line">Correct: <span class="right">${rightTxt}</span></div>`}
        <div class="explain">${q.explain}</div></div>`;
  });

  show("results");

  $("save-status").textContent = "Saving your result…";
  const ok = await sendToSheet(r);
  $("save-status").textContent = ok
    ? "✅ Your result was saved."
    : "⚠️ Could not confirm save (your score is still shown above). Tell your mentor.";
}

async function sendToSheet(r) {
  if (!WEBHOOK_URL || WEBHOOK_URL.indexOf("PASTE_YOUR") === 0) {
    console.warn("WEBHOOK_URL not set — skipping save.");
    return false;
  }
  const answersStr = QUESTIONS.map((q) => {
    const c = state.answers[q.id];
    return q.id + ":" + (c == null ? "-" : String.fromCharCode(65 + c));
  }).join(",");

  const seen = [];
  QUESTIONS.forEach((q) => { if (seen.indexOf(q.topic) === -1) seen.push(q.topic); });
  const topicsStr = seen.map((t) => t + " " + r.perTopic[t].correct + "/" + r.perTopic[t].total).join(" | ");

  const payload = {
    name: state.name, group: state.group,
    score: r.score, correct: r.correct, total: QUESTIONS.length,
    percent: Math.round((r.correct / QUESTIONS.length) * 100),
    topics: topicsStr,
    answers: answersStr,
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

boot();
