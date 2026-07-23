const syms=["α","β","γ","Δ","π","∑","∫","√","∞","≤","≥","≠","±","×","÷","°","→","←","↔"];
const k=document.getElementById("keys"),t=document.getElementById("t");
syms.forEach(s=>{let b=document.createElement("button");b.textContent=s;b.onclick=()=>{const st=t.selectionStart,en=t.selectionEnd;t.setRangeText(s,st,en,"end");t.focus();};k.appendChild(b);});