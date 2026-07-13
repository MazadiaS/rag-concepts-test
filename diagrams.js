/* Unique, question-specific educational visuals. */
(() => {
  const C={ink:'#091126',muted:'#606b82',line:'#dce1eb',blue:'#3155f5',blue2:'#2443d8',blueP:'#eef1ff',coral:'#ff6f61',coralP:'#fff0ed',green:'#149c69',greenP:'#ecf8f3',gray:'#f1f3f7',red:'#d74747'};
  const esc=s=>String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
  const theme={blue:[C.blueP,C.blue],coral:[C.coralP,C.coral],green:[C.greenP,C.green],dark:[C.ink,C.ink],gray:['#fff',C.line]};
  const box=(x,y,w,h,title,sub='',kind='gray')=>{const [fill,stroke]=theme[kind];const tc=kind==='dark'?'#fff':kind==='coral'?'#c94f44':kind==='green'?'#0f7953':C.ink;return `<g filter="url(#s)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/><text x="${x+w/2}" y="${y+30}" text-anchor="middle" font-size="14" font-weight="800" fill="${tc}">${esc(title)}</text>${sub?`<text x="${x+w/2}" y="${y+50}" text-anchor="middle" font-size="11.5" fill="${kind==='dark'?'#cdd5ea':C.muted}">${esc(sub)}</text>`:''}</g>`};
  const arrow=(x1,y1,x2,y2,color=C.muted,dash='')=>`<path d="M${x1} ${y1}H${x2}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" ${dash?`stroke-dasharray="${dash}"`:''} marker-end="url(#a)"/>`;
  const label=(x,y,t,color=C.muted,size=11,anchor='middle',weight=700)=>`<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(t)}</text>`;
  const doc=(x,y,w=92,h=112,accent=C.blue)=>`<g filter="url(#s)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="${C.line}"/><path d="M${x+w-30} ${y}h16a14 14 0 0 1 14 14v16z" fill="${C.gray}"/><rect x="${x+17}" y="${y+25}" width="${w-42}" height="7" rx="3.5" fill="${accent}" opacity=".9"/><rect x="${x+17}" y="${y+47}" width="${w-32}" height="5" rx="2.5" fill="#b7c0d1"/><rect x="${x+17}" y="${y+63}" width="${w-40}" height="5" rx="2.5" fill="#c9cfdb"/><rect x="${x+17}" y="${y+79}" width="${w-27}" height="5" rx="2.5" fill="#c9cfdb"/></g>`;
  const db=(x,y,w=112,h=116)=>`<g filter="url(#s)"><ellipse cx="${x+w/2}" cy="${y+18}" rx="${w/2}" ry="18" fill="#26355f"/><rect x="${x}" y="${y+18}" width="${w}" height="${h-36}" fill="${C.ink}"/><ellipse cx="${x+w/2}" cy="${y+h-18}" rx="${w/2}" ry="18" fill="#101a34"/><ellipse cx="${x+w/2}" cy="${y+18}" rx="${w/2}" ry="18" fill="#344675" stroke="#6f88ff"/><circle cx="${x+32}" cy="${y+18}" r="4" fill="#7f95ff"/><circle cx="${x+58}" cy="${y+12}" r="4" fill="${C.coral}"/><circle cx="${x+79}" cy="${y+24}" r="4" fill="#7f95ff"/></g>`;
  const dot=(x,y,color=C.blue,r=7)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
  const svg=(title,body,footer='')=>`<svg viewBox="0 0 820 280" width="100%" style="max-width:820px;height:auto" role="img" aria-label="${esc(title)}" font-family="Inter,Segoe UI,Arial"><title>${esc(title)}</title><defs><filter id="s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#1b2b66" flood-opacity=".08"/></filter><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0l8 4-8 4z" fill="context-stroke"/></marker></defs>${body}<line x1="24" y1="250" x2="796" y2="250" stroke="${C.line}"/>${footer?label(410,274,footer,C.muted,12):''}</svg>`;

  const Q={};

  Q[1]=svg('RAG retrieves matching passages before generating an answer',
    box(24,74,130,76,'Question','new topic','gray')+arrow(166,112,226,112,C.blue)+box(238,64,160,96,'Retrieve','matching passages','blue')+arrow(410,112,470,112,C.coral)+box(482,64,160,96,'Generate','using context','coral')+arrow(654,112,704,112,C.green)+box(710,74,86,76,'Answer','grounded','green'),
    'RAG = retrieval first, generation second');

  Q[2]=svg('RAG is best when answers live in private documents',
    `<g transform="translate(45 60)">${doc(0,0,104,126,C.blue)}${doc(24,18,104,126,C.coral)}</g>`+label(110,46,'YOUR PRIVATE DOCUMENTS',C.muted,12)+box(254,74,182,82,'RAG','can retrieve them','blue')+arrow(190,116,242,116,C.blue)+arrow(448,116,510,116,C.green)+box(522,74,238,82,'Private facts become usable','without model retraining','green')+`<path d="M304 184h82v38h-82z" fill="${C.coralP}" stroke="${C.coral}"/><path d="M321 184v-15a24 24 0 0 1 48 0v15" fill="none" stroke="${C.coral}" stroke-width="5"/>`+label(345,210,'PRIVATE',C.coral,11),
    'Use RAG when the knowledge is outside the base model');

  Q[3]=svg('The complete RAG pipeline in order',
    box(18,80,104,72,'1 · Load','documents','gray')+arrow(130,116,152,116)+box(160,80,104,72,'2 · Chunk','small pieces','blue')+arrow(272,116,294,116)+box(302,80,104,72,'3 · Embed','meaning vectors','blue')+arrow(414,116,436,116)+box(444,80,104,72,'4 · Store','vector DB','dark')+arrow(556,116,578,116,C.coral)+box(586,80,104,72,'5 · Retrieve','closest chunks','coral')+arrow(698,116,720,116,C.green)+box(728,80,74,72,'6 · Gen','answer','green'),
    'Build: load → chunk → embed → store  ·  Ask: retrieve → generate');

  Q[4]=svg('Smaller chunks retrieve more precisely and fit the context window',
    doc(36,58,126,142,C.ink)+label(99,45,'LONG DOCUMENT',C.muted,12)+arrow(180,128,242,128,C.blue)+box(260,48,208,54,'Chunk 1','focused idea','blue')+box(260,112,208,54,'Chunk 2','focused idea','blue')+box(260,176,208,54,'Chunk 3','focused idea','blue')+arrow(486,128,548,128,C.green)+box(566,80,218,96,'Precise retrieval','less noise · fewer tokens','green'),
    'Smaller, focused pieces are easier to retrieve and fit into the prompt');

  Q[5]=svg('A very large chunk retrieves noise and consumes more tokens',
    doc(30,62,132,138,C.coral)+label(96,48,'WHOLE DOCUMENT CHUNK',C.muted,11)+arrow(180,130,240,130,C.coral)+box(258,62,242,138,'One huge chunk','1 useful paragraph + lots of noise','coral')+`<rect x="282" y="126" width="194" height="18" rx="9" fill="#e1e5ed"/><rect x="282" y="126" width="170" height="18" rx="9" fill="${C.coral}"/>`+label(379,158,'token budget nearly full',C.coral,11)+arrow(518,130,574,130,C.red)+box(592,78,190,106,'More cost','less room for useful context','gray'),
    'Large chunks pull unrelated text into the prompt');

  Q[6]=svg('Chunk overlap keeps boundary ideas from being cut apart',
    label(160,38,'CHUNK 1',C.blue,12)+box(34,54,252,76,'The customer reset the','password after calling…','blue')+label(660,38,'CHUNK 2',C.blue,12)+box(534,54,252,76,'…calling support, then','successfully signed in.','blue')+`<path d="M248 146h324v54H248z" fill="${C.coralP}" stroke="${C.coral}" stroke-width="1.5" stroke-dasharray="5 4"/>`+label(410,170,'SHARED OVERLAP',C.coral,12)+label(410,190,'“calling support” appears in both chunks',C.muted,12)+arrow(286,92,522,92,C.coral,'6 5'),
    'Overlap preserves meaning that crosses a chunk boundary');

  Q[7]=svg('An embedding is a list of numbers representing meaning',
    box(30,78,180,84,'“A small kitten”','text','gray')+arrow(226,120,294,120,C.blue)+box(310,68,224,104,'[0.82, −0.14, 0.63, …]','embedding vector','blue')+arrow(550,120,610,120,C.green)+`<rect x="628" y="52" width="156" height="136" rx="16" fill="#fff" stroke="${C.line}"/>${dot(672,95)}${dot(702,114,C.blue,6)}${dot(743,86,C.coral,6)}<path d="M672 95l30 19 41-28" stroke="#aab5d2" fill="none"/>`+label(706,166,'meaning space',C.muted,12),
    'The numbers encode semantic meaning, not individual words');

  Q[8]=svg('Embeddings match meaning even when keywords differ',
    box(24,62,224,76,'“How do I fix my car?”','query','gray')+box(24,154,224,76,'“Automobile repair guide”','document','gray')+arrow(268,100,348,126,C.blue)+arrow(268,192,348,148,C.blue)+`<rect x="364" y="52" width="208" height="160" rx="18" fill="${C.blueP}" stroke="${C.blue}"/>${dot(420,116)}${dot(456,134,C.blue,8)}<circle cx="438" cy="125" r="50" fill="none" stroke="${C.blue}" stroke-dasharray="5 5"/>`+label(468,188,'close in meaning',C.blue2,12)+arrow(590,132,654,132,C.green)+box(670,92,126,80,'Match','no shared keyword','green'),
    '“car” and “automobile” can still land near each other');

  Q[9]=svg('The embedding model converts text into vectors for search',
    doc(28,62,112,136,C.blue)+label(84,48,'TEXT CHUNK',C.muted,11)+arrow(158,130,230,130,C.blue)+box(246,68,246,124,'text-embedding-3-small','text → meaning vector','dark')+`<g transform="translate(278 150)">${[0,1,2,3,4,5].map(i=>`<rect x="${i*29}" y="0" width="19" height="${12+i%3*8}" rx="4" fill="${i===4?C.coral:'#6f88ff'}"/>`).join('')}</g>`+arrow(510,130,574,130,C.green)+box(592,72,194,116,'Similarity search','vectors can be compared','green'),
    'Its job is representation, not answering the question');

  Q[10]=svg('Questions and chunks must use the same embedding model',
    box(26,54,178,72,'Question','same model','blue')+box(26,156,178,72,'Document chunk','same model','blue')+arrow(220,90,294,118,C.blue)+arrow(220,192,294,148,C.blue)+`<rect x="310" y="46" width="244" height="178" rx="18" fill="#fff" stroke="${C.line}"/>${dot(380,108)}${dot(416,128,C.blue,8)}${dot(488,178,C.coral,7)}<circle cx="398" cy="118" r="48" fill="none" stroke="${C.blue}" stroke-dasharray="5 5"/>`+label(432,210,'one shared vector space',C.blue2,12)+arrow(572,135,632,135,C.green)+box(648,94,148,82,'Comparable','distance has meaning','green'),
    'Different embedding models create incompatible coordinate systems');

  Q[11]=svg('A vector database stores embeddings and finds nearby vectors',
    db(44,72,136,136)+label(112,54,'CHROMA COLLECTION',C.muted,11)+`<g>${dot(310,82,C.blue,6)}${dot(350,116,C.blue,7)}${dot(392,92,C.coral,7)}${dot(430,166,'#aab2c2',6)}${dot(338,184,'#aab2c2',6)}<circle cx="366" cy="112" r="66" fill="none" stroke="${C.blue}" stroke-dasharray="5 5"/></g>`+arrow(198,140,274,140,C.blue)+label(366,220,'stored chunk vectors',C.muted,12)+arrow(464,130,538,130,C.green)+box(554,82,230,102,'Nearest results','closest chunks returned','green'),
    'Store vectors once; search by similarity whenever a question arrives');

  Q[12]=svg('Vector search finds semantic similarity that SQL text matching misses',
    box(24,52,280,72,'SQL text table','exact words / filters','gray')+box(24,156,280,72,'Vector database','semantic similarity','blue')+box(388,52,198,72,'“vehicle repair”','keyword mismatch','coral')+box(388,156,198,72,'“fix my car”','meaning match','green')+arrow(318,88,374,88,C.red)+arrow(318,192,374,192,C.green)+`<text x="650" y="103" font-size="34" font-weight="800" fill="${C.red}">×</text><text x="650" y="207" font-size="34" font-weight="800" fill="${C.green}">✓</text>`+label(730,92,'different words',C.muted,11)+label(730,196,'same idea',C.muted,11),
    'SQL is excellent for structured filters; vectors are built for meaning');

  Q[13]=svg('Adding a chunk binds its id document and embedding into a searchable record',
    box(24,62,160,72,'id','chunk_0042','gray')+box(24,154,160,72,'document','chunk text','gray')+box(226,108,190,72,'embedding','[0.2, 0.9, …]','blue')+arrow(194,98,218,126,C.blue)+arrow(194,190,218,154,C.blue)+arrow(430,144,500,144,C.green)+`<rect x="518" y="62" width="270" height="164" rx="16" fill="#fff" stroke="${C.line}"/><rect x="538" y="82" width="230" height="42" rx="9" fill="${C.greenP}"/><text x="553" y="108" font-size="12" font-weight="800" fill="${C.green}">SEARCHABLE RECORD</text><text x="538" y="151" font-size="12" fill="${C.muted}">ID identifies it</text><text x="538" y="176" font-size="12" fill="${C.muted}">Vector finds it</text><text x="538" y="201" font-size="12" fill="${C.muted}">Document returns it</text>`,
    'collection.add(...) makes all three parts searchable together');

  Q[14]=svg('Retrieval embeds the question then finds the closest chunks',
    box(24,86,174,82,'Question','plain text','gray')+arrow(214,127,274,127,C.blue)+box(290,76,172,102,'Embed query','question vector','blue')+arrow(478,127,536,127,C.blue)+`<rect x="552" y="54" width="244" height="148" rx="18" fill="#fff" stroke="${C.line}"/>${dot(604,98,C.blue,7)}${dot(650,128,C.blue,7)}${dot(694,90,'#aab2c2',6)}${dot(738,160,'#aab2c2',6)}<circle cx="628" cy="113" r="55" fill="none" stroke="${C.blue}" stroke-dasharray="5 5"/>`+label(674,224,'closest chunk vectors are returned',C.muted,12),
    'collection.query(...) performs nearest-neighbor retrieval');

  Q[15]=svg('TOP K controls how many closest chunks are returned',
    `<circle cx="136" cy="132" r="84" fill="#fff" stroke="${C.line}"/><path d="M82 174a72 72 0 0 1 108-88" fill="none" stroke="${C.blue}" stroke-width="12" stroke-linecap="round"/><path d="M136 132l49-48" stroke="${C.coral}" stroke-width="5" stroke-linecap="round"/>`+label(136,139,'TOP_K = 8',C.ink,16)+arrow(238,132,304,132,C.blue)+`<g>${Array.from({length:10},(_,i)=>{const x=326+(i%5)*83,y=72+Math.floor(i/5)*82,sel=i<8;return `<rect x="${x}" y="${y}" width="64" height="58" rx="11" fill="${sel?C.blueP:'#fff'}" stroke="${sel?C.blue:C.line}"/><text x="${x+32}" y="${y+35}" text-anchor="middle" font-size="12" font-weight="800" fill="${sel?C.blue:C.muted}">${i+1}</text>`}).join('')}</g>`+label(530,228,'8 nearest chunks selected',C.blue2,12),
    'Higher K gives more context; lower K is more selective');

  Q[16]=svg('TOP K of one can miss supporting context',
    box(24,76,186,94,'TOP_K = 1','only one chunk','coral')+arrow(226,123,282,123,C.coral)+box(300,52,210,72,'Chunk A','policy rule','blue')+box(300,154,210,72,'Chunk B','important exception','gray')+arrow(526,88,592,116,C.red)+`<path d="M526 190h58" stroke="${C.line}" stroke-width="2" stroke-dasharray="5 5"/>`+box(608,76,186,94,'Incomplete answer','exception was missed','coral'),
    'Some answers require multiple complementary chunks');

  Q[17]=svg('Generation uses retrieved chunks and the question to write an answer',
    box(24,50,198,70,'Retrieved chunks','source context','blue')+box(24,160,198,70,'Question','user intent','gray')+arrow(238,86,308,120,C.blue)+arrow(238,196,308,150,C.blue)+box(326,76,206,108,'gpt-4o-mini','reads context + question','dark')+arrow(550,130,610,130,C.green)+box(628,82,166,96,'Answer','written response','green'),
    'Retrieval finds the evidence; generation turns it into language');

  Q[18]=svg('Grounding in retrieved sources reduces hallucination',
    box(24,54,198,76,'Model memory','may guess','gray')+box(24,160,198,76,'Retrieved context','verifiable source','blue')+arrow(238,92,330,112,C.red,'6 5')+arrow(238,198,330,158,C.green)+`<rect x="348" y="60" width="212" height="142" rx="18" fill="#fff" stroke="${C.line}"/><text x="454" y="93" text-anchor="middle" font-size="13" font-weight="800" fill="${C.ink}">ANSWER</text><rect x="378" y="116" width="152" height="6" rx="3" fill="#b7c0d1"/><rect x="378" y="136" width="132" height="6" rx="3" fill="#c8cfda"/><rect x="378" y="156" width="148" height="6" rx="3" fill="#c8cfda"/>`+arrow(578,132,638,132,C.green)+box(654,92,140,80,'Grounded','fewer guesses','green'),
    'Tell the model to use the retrieved evidence, not improvise');

  Q[19]=svg('Updating RAG means reprocessing documents not retraining the model',
    doc(24,70,108,130,C.coral)+label(78,55,'NEW DOCUMENT',C.muted,11)+arrow(148,135,204,135,C.blue)+box(220,92,126,86,'Re-chunk','new text','blue')+arrow(362,135,414,135,C.blue)+box(430,92,126,86,'Re-embed','new vectors','blue')+arrow(572,135,624,135,C.green)+db(644,76,126,126)+`<path d="M708 50v-24m-12 12h24" stroke="${C.green}" stroke-width="4" stroke-linecap="round"/>`+label(707,224,'UPDATED STORE',C.green,11),
    'No foundation-model retraining is needed when facts change');

  Q[20]=svg('Fine tuning changes behavior while RAG supplies knowledge',
    `<rect x="24" y="52" width="354" height="170" rx="20" fill="${C.blueP}" stroke="${C.blue}"/><text x="54" y="86" font-size="16" font-weight="850" fill="${C.blue2}">RAG</text><text x="54" y="116" font-size="12" fill="${C.muted}">Adds current or private facts</text><text x="54" y="145" font-size="12" fill="${C.muted}">Answers from retrieved sources</text><text x="54" y="174" font-size="12" fill="${C.muted}">Update by changing the index</text><rect x="54" y="190" width="128" height="18" rx="9" fill="${C.blue}" opacity=".18"/>`+`<rect x="442" y="52" width="354" height="170" rx="20" fill="${C.coralP}" stroke="${C.coral}"/><text x="472" y="86" font-size="16" font-weight="850" fill="#c94f44">FINE-TUNING</text><text x="472" y="116" font-size="12" fill="${C.muted}">Changes style or behavior</text><text x="472" y="145" font-size="12" fill="${C.muted}">Teaches response patterns</text><text x="472" y="174" font-size="12" fill="${C.muted}">Requires a training process</text><rect x="472" y="190" width="170" height="18" rx="9" fill="${C.coral}" opacity=".22"/>`,
    'Choose based on whether you need new facts or new behavior');

  Q[21]=svg('Using an LLM to write code is not automatically RAG',
    box(24,76,216,100,'Coding with an LLM','prompt → generated code','gray')+`<text x="286" y="142" font-size="38" font-weight="900" fill="${C.red}">≠</text>`+box(342,76,216,100,'RAG application','retrieve → generate','blue')+arrow(576,126,638,126,C.green)+box(654,86,142,80,'Needs retrieval','from a knowledge base','green'),
    'RAG is defined by its retrieval pipeline, not how its code was authored');

  Q[22]=svg('Irrelevant answers often begin with wrong retrieval',
    box(24,82,164,84,'User question','clear intent','gray')+arrow(204,124,264,124,C.blue)+box(280,72,182,104,'Retrieval','wrong chunks selected','coral')+arrow(478,124,538,124,C.red)+box(554,82,164,84,'Generation','uses bad context','gray')+arrow(734,124,774,124,C.red)+`<circle cx="786" cy="124" r="18" fill="${C.coralP}" stroke="${C.coral}"/><text x="786" y="130" text-anchor="middle" font-size="20" font-weight="900" fill="${C.red}">!</text>`+`<path d="M370 188v34H226" fill="none" stroke="${C.green}" stroke-width="2" marker-end="url(#a)"/>`+label(370,210,'debug here first: query, embeddings, TOP_K',C.green,12),
    'Bad context in → irrelevant answer out');

  window.QUESTION_DIAGRAMS=Q;
})();
