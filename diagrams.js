/* Concept diagrams (inline SVG, self-contained, static) keyed by question topic.
   Palette: navy #232f3e, orange #ff9900, blue #0972d3, green #037f51. */
window.DIAGRAMS = {

"RAG-Concept": '\
<svg viewBox="0 0 470 120" width="100%" style="max-width:540px;height:auto" font-family="Segoe UI,Arial" font-size="12.5">\
<rect x="6" y="42" width="74" height="40" rx="8" fill="#eef1f5" stroke="#d5dbdb"/>\
<text x="43" y="66" text-anchor="middle" font-weight="700" fill="#16191f">Question</text>\
<text x="92" y="67" text-anchor="middle" font-size="20" fill="#5f6b7a">&#8594;</text>\
<rect x="106" y="36" width="118" height="52" rx="8" fill="#e8f2fe" stroke="#0972d3"/>\
<text x="165" y="58" text-anchor="middle" font-weight="700" fill="#0b5cad">1 &#183; Retrieve</text>\
<text x="165" y="76" text-anchor="middle" fill="#0b5cad">find matching text</text>\
<text x="236" y="67" text-anchor="middle" font-size="20" fill="#5f6b7a">&#8594;</text>\
<rect x="250" y="36" width="118" height="52" rx="8" fill="#fff3e0" stroke="#ff9900"/>\
<text x="309" y="58" text-anchor="middle" font-weight="700" fill="#8a5a00">2 &#183; Generate</text>\
<text x="309" y="76" text-anchor="middle" fill="#8a5a00">AI writes answer</text>\
<text x="380" y="67" text-anchor="middle" font-size="20" fill="#5f6b7a">&#8594;</text>\
<rect x="394" y="42" width="70" height="40" rx="8" fill="#e6f5ee" stroke="#037f51"/>\
<text x="429" y="66" text-anchor="middle" font-weight="700" fill="#037f51">Answer</text>\
</svg>',

"Pipeline": '\
<svg viewBox="0 0 470 128" width="100%" style="max-width:560px;height:auto" font-family="Segoe UI,Arial" font-size="11.5" font-weight="700">\
<text x="140" y="16" text-anchor="middle" font-size="11" font-weight="400" fill="#5f6b7a">Build once</text>\
<rect x="6" y="24" width="64" height="32" rx="7" fill="#e8f2fe" stroke="#0972d3"/><text x="38" y="44" text-anchor="middle" fill="#0b5cad">Load</text>\
<text x="76" y="44" text-anchor="middle" font-size="15" fill="#9aa3af">&#8594;</text>\
<rect x="84" y="24" width="64" height="32" rx="7" fill="#e8f2fe" stroke="#0972d3"/><text x="116" y="44" text-anchor="middle" fill="#0b5cad">Chunk</text>\
<text x="154" y="44" text-anchor="middle" font-size="15" fill="#9aa3af">&#8594;</text>\
<rect x="162" y="24" width="64" height="32" rx="7" fill="#e8f2fe" stroke="#0972d3"/><text x="194" y="44" text-anchor="middle" fill="#0b5cad">Embed</text>\
<text x="232" y="44" text-anchor="middle" font-size="15" fill="#9aa3af">&#8594;</text>\
<rect x="240" y="24" width="64" height="32" rx="7" fill="#e8f2fe" stroke="#0972d3"/><text x="272" y="44" text-anchor="middle" fill="#0b5cad">Store</text>\
<text x="300" y="86" text-anchor="middle" font-size="11" font-weight="400" fill="#5f6b7a">Ask anytime</text>\
<rect x="162" y="92" width="90" height="32" rx="7" fill="#fff3e0" stroke="#ff9900"/><text x="207" y="112" text-anchor="middle" fill="#8a5a00">Retrieve</text>\
<text x="258" y="112" text-anchor="middle" font-size="15" fill="#9aa3af">&#8594;</text>\
<rect x="266" y="92" width="90" height="32" rx="7" fill="#fff3e0" stroke="#ff9900"/><text x="311" y="112" text-anchor="middle" fill="#8a5a00">Generate</text>\
</svg>',

"Chunking": '\
<svg viewBox="0 0 470 128" width="100%" style="max-width:540px;height:auto" font-family="Segoe UI,Arial" font-size="12">\
<text x="55" y="16" text-anchor="middle" font-size="11" fill="#5f6b7a">long document</text>\
<rect x="10" y="22" width="90" height="92" rx="6" fill="#eef1f5" stroke="#d5dbdb"/>\
<line x1="20" y1="40" x2="90" y2="40" stroke="#b8c0cc"/><line x1="20" y1="58" x2="90" y2="58" stroke="#b8c0cc"/>\
<line x1="20" y1="76" x2="90" y2="76" stroke="#b8c0cc"/><line x1="20" y1="94" x2="90" y2="94" stroke="#b8c0cc"/>\
<text x="120" y="72" font-size="18" fill="#9aa3af">&#8594;</text>\
<rect x="150" y="18" width="150" height="30" rx="6" fill="#e8f2fe" stroke="#0972d3"/><text x="225" y="37" text-anchor="middle" fill="#0b5cad">chunk 1</text>\
<rect x="150" y="52" width="150" height="30" rx="6" fill="#e8f2fe" stroke="#0972d3"/><text x="225" y="71" text-anchor="middle" fill="#0b5cad">chunk 2</text>\
<rect x="150" y="86" width="150" height="30" rx="6" fill="#e8f2fe" stroke="#0972d3"/><text x="225" y="105" text-anchor="middle" fill="#0b5cad">chunk 3</text>\
<rect x="150" y="45" width="150" height="8" fill="#ff9900" opacity="0.55"/>\
<rect x="150" y="79" width="150" height="8" fill="#ff9900" opacity="0.55"/>\
<text x="315" y="60" font-size="11" fill="#8a5a00">orange =</text>\
<text x="315" y="75" font-size="11" fill="#8a5a00">overlap</text>\
</svg>',

"Embeddings": '\
<svg viewBox="0 0 470 140" width="100%" style="max-width:540px;height:auto" font-family="Segoe UI,Arial" font-size="12">\
<rect x="6" y="54" width="70" height="32" rx="7" fill="#eef1f5" stroke="#d5dbdb"/><text x="41" y="74" text-anchor="middle" font-weight="700">"kitten"</text>\
<text x="86" y="74" font-size="16" fill="#9aa3af">&#8594;</text>\
<text x="166" y="48" text-anchor="middle" font-size="10.5" fill="#5f6b7a">numbers = meaning</text>\
<rect x="106" y="54" width="120" height="32" rx="7" fill="#e8f2fe" stroke="#0972d3"/><text x="166" y="74" text-anchor="middle" fill="#0b5cad">[0.8, 0.2, 0.9 &#8230;]</text>\
<text x="232" y="74" font-size="16" fill="#9aa3af">&#8594;</text>\
<rect x="252" y="12" width="212" height="118" rx="8" fill="#fbfcfd" stroke="#d5dbdb"/>\
<text x="358" y="28" text-anchor="middle" font-size="10.5" fill="#5f6b7a">meaning map (similar = close)</text>\
<circle cx="320" cy="60" r="6" fill="#0972d3"/><text x="332" y="64" fill="#0b5cad">cat</text>\
<circle cx="342" cy="78" r="6" fill="#0972d3"/><text x="354" y="82" fill="#0b5cad">kitten</text>\
<circle cx="432" cy="112" r="6" fill="#d91515"/><text x="424" y="116" text-anchor="end" fill="#d91515">car</text>\
</svg>',

"VectorDB": '\
<svg viewBox="0 0 470 140" width="100%" style="max-width:520px;height:auto" font-family="Segoe UI,Arial" font-size="12">\
<rect x="120" y="10" width="230" height="120" rx="8" fill="#fbfcfd" stroke="#d5dbdb"/>\
<text x="235" y="26" text-anchor="middle" font-size="10.5" fill="#5f6b7a">vector database (stored chunks)</text>\
<circle cx="160" cy="52" r="6" fill="#b8c0cc"/><circle cx="200" cy="98" r="6" fill="#b8c0cc"/>\
<circle cx="305" cy="44" r="6" fill="#b8c0cc"/><circle cx="330" cy="104" r="6" fill="#b8c0cc"/><circle cx="285" cy="112" r="6" fill="#b8c0cc"/>\
<circle cx="235" cy="72" r="42" fill="none" stroke="#0972d3" stroke-dasharray="4 3"/>\
<circle cx="215" cy="64" r="7" fill="#0972d3"/><circle cx="255" cy="82" r="7" fill="#0972d3"/>\
<line x1="40" y1="72" x2="116" y2="72" stroke="#ff9900" stroke-width="2"/>\
<polygon points="110,66 122,72 110,78" fill="#ff9900"/>\
<text x="22" y="60" text-anchor="middle" font-weight="700" fill="#8a5a00">query</text>\
<text x="235" y="126" text-anchor="middle" font-size="10.5" fill="#0b5cad">blue = nearest (most similar)</text>\
</svg>',

"Retrieval": '\
<svg viewBox="0 0 470 120" width="100%" style="max-width:540px;height:auto" font-family="Segoe UI,Arial" font-size="12">\
<rect x="6" y="44" width="80" height="34" rx="7" fill="#fff3e0" stroke="#ff9900"/><text x="46" y="65" text-anchor="middle" font-weight="700" fill="#8a5a00">question</text>\
<text x="96" y="66" font-size="16" fill="#9aa3af">&#8594;</text>\
<text x="185" y="20" text-anchor="middle" font-size="10.5" fill="#5f6b7a">all chunks</text>\
<rect x="116" y="28" width="38" height="30" rx="6" fill="#e8f2fe" stroke="#0972d3"/><text x="135" y="47" text-anchor="middle" fill="#0b5cad" font-weight="700">&#10003;</text>\
<rect x="162" y="28" width="38" height="30" rx="6" fill="#e8f2fe" stroke="#0972d3"/><text x="181" y="47" text-anchor="middle" fill="#0b5cad" font-weight="700">&#10003;</text>\
<rect x="208" y="28" width="38" height="30" rx="6" fill="#e8f2fe" stroke="#0972d3"/><text x="227" y="47" text-anchor="middle" fill="#0b5cad" font-weight="700">&#10003;</text>\
<rect x="254" y="28" width="38" height="30" rx="6" fill="#f2f3f3" stroke="#d5dbdb"/>\
<rect x="116" y="66" width="38" height="30" rx="6" fill="#f2f3f3" stroke="#d5dbdb"/>\
<rect x="162" y="66" width="38" height="30" rx="6" fill="#f2f3f3" stroke="#d5dbdb"/>\
<rect x="208" y="66" width="38" height="30" rx="6" fill="#f2f3f3" stroke="#d5dbdb"/>\
<rect x="254" y="66" width="38" height="30" rx="6" fill="#f2f3f3" stroke="#d5dbdb"/>\
<text x="316" y="66" font-size="16" fill="#9aa3af">&#8594;</text>\
<rect x="336" y="40" width="128" height="42" rx="7" fill="#e8f2fe" stroke="#0972d3"/>\
<text x="400" y="58" text-anchor="middle" font-weight="700" fill="#0b5cad">TOP_K = 3</text>\
<text x="400" y="73" text-anchor="middle" fill="#0b5cad" font-size="11">closest chunks kept</text>\
</svg>',

"Generation": '\
<svg viewBox="0 0 470 118" width="100%" style="max-width:540px;height:auto" font-family="Segoe UI,Arial" font-size="12">\
<rect x="6" y="16" width="120" height="34" rx="7" fill="#e8f2fe" stroke="#0972d3"/><text x="66" y="37" text-anchor="middle" fill="#0b5cad" font-weight="700">found chunks</text>\
<rect x="6" y="66" width="120" height="34" rx="7" fill="#fff3e0" stroke="#ff9900"/><text x="66" y="87" text-anchor="middle" fill="#8a5a00" font-weight="700">question</text>\
<line x1="130" y1="38" x2="188" y2="53" stroke="#9aa3af" stroke-width="1.5"/><line x1="130" y1="80" x2="188" y2="65" stroke="#9aa3af" stroke-width="1.5"/>\
<rect x="190" y="36" width="120" height="46" rx="8" fill="#232f3e"/><text x="250" y="56" text-anchor="middle" fill="#fff" font-weight="700">LLM</text><text x="250" y="72" text-anchor="middle" fill="#cfd6e4" font-size="10.5">gpt-4o-mini</text>\
<text x="322" y="64" font-size="16" fill="#9aa3af">&#8594;</text>\
<rect x="342" y="36" width="122" height="46" rx="8" fill="#e6f5ee" stroke="#037f51"/><text x="403" y="63" text-anchor="middle" fill="#037f51" font-weight="700">written answer</text>\
</svg>',

"RAG-vs": '\
<svg viewBox="0 0 470 128" width="100%" style="max-width:540px;height:auto" font-family="Segoe UI,Arial" font-size="12">\
<rect x="10" y="16" width="215" height="100" rx="10" fill="#e8f2fe" stroke="#0972d3"/>\
<text x="117" y="38" text-anchor="middle" font-weight="800" fill="#0b5cad">RAG</text>\
<text x="117" y="66" text-anchor="middle" font-size="28">&#128214;</text>\
<text x="117" y="90" text-anchor="middle" fill="#0b5cad">open book &#183; look it up</text>\
<text x="117" y="106" text-anchor="middle" font-size="10.5" fill="#5f6b7a">easy to add new facts</text>\
<rect x="245" y="16" width="215" height="100" rx="10" fill="#fff3e0" stroke="#ff9900"/>\
<text x="352" y="38" text-anchor="middle" font-weight="800" fill="#8a5a00">Fine-tuning</text>\
<text x="352" y="66" text-anchor="middle" font-size="28">&#129504;</text>\
<text x="352" y="90" text-anchor="middle" fill="#8a5a00">study &#183; memorize style</text>\
<text x="352" y="106" text-anchor="middle" font-size="10.5" fill="#5f6b7a">retrain to change it</text>\
</svg>'
};
