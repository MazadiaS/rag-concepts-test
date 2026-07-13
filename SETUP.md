# AI/ML Concepts Test — PRO — Setup Guide

A 20-question **scenario / best-answer** web test (harder). Each question has four options that all look correct; students must choose the BEST one. Results land in **your Google Sheet**.

Topics: MCP & APIs · RAG · Fine-tuning / LoRA / QLoRA · LangChain & LangGraph · Embeddings / Tokenization / Vector DBs · ML workflow · CNN / RNN.

Files:
- `index.html`, `styles.css`, `app.js`, `questions.json` → the website
- `Code.gs` → the Google Apps Script that writes to your Sheet
- `SETUP.md` → this file

---

## Part A — Make the Google Sheet (5 min)

1. Go to **sheets.google.com** → **Blank spreadsheet**.
2. Rename the first tab to **`Results`** (right-click the tab → Rename).
3. Top menu: **Extensions → Apps Script**.
4. Delete the existing code, open `Code.gs` from this folder, **copy all of it, paste it in.**
5. Click **Save**.
6. Click **Deploy → New deployment**.
   - Gear ⚙️ next to "Select type" → **Web app**.
   - **Execute as:** *Me*.
   - **Who has access:** **Anyone**.  ← required, or students can't submit.
   - **Deploy** → **Authorize access** (pick your account, allow).
7. Copy the **Web app URL** (`https://script.google.com/macros/s/AKfyc..../exec`).

> Test it: open that URL — you should see *"AI/ML Concepts test endpoint is live."*

## Part B — Connect the site to your Sheet (1 min)

1. Open **`app.js`**.
2. Replace the placeholder at the top with your Web app URL:
   ```js
   const WEBHOOK_URL = "https://script.google.com/macros/s/AKfyc..../exec";
   ```
3. Save, then push the change (GitHub Pages redeploys in ~1 min).

## Part C — Already online

This test is published with GitHub Pages at:
`https://mazadias.github.io/aiml-concepts-test-pro/`

Share that single link with students. (To test locally: `python3 -m http.server 8000` in this folder.)

---

## Test details
- **20 scenario questions**, single best answer, worth 100 / 20 = **5 points each** = 100 total. Pass mark **60**.
- Correct answers are evenly spread A/B/C/D (5 each) with no two in a row — no guessable pattern.
- This is the harder companion to the standard/easy test at `aiml-concepts-test`.
