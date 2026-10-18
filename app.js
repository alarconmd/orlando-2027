/* ORLANDO 2027 · app.js · lógica 100% offline (sin librerías) */
"use strict";

/* ---------- utilidades ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const money = n => "$" + Math.round(n).toLocaleString("es-US");

/* ---------- estado: grupo + plan (localStorage) ---------- */
let group = {adults:4, kids10:3, kids3:0};
let plan = new Set();
let alts = {}; // fecha -> índice de opción elegida (plan alternativo por día)
try{
  const g = JSON.parse(localStorage.getItem("orlando2027group")||"null"); if(g) group = g;
  const p = JSON.parse(localStorage.getItem("orlando2027plan")||"[]"); plan = new Set(p);
  const al = JSON.parse(localStorage.getItem("orlando2027alts")||"{}"); if(al&&typeof al==="object"&&!Array.isArray(al)) alts = al;
}catch(e){}
let strat = "garantiza"; // filtro global: 🎯 atracción mayor garantizada vs 📊 mayor cantidad de atracciones
try{ const st = localStorage.getItem("orlando2027strat"); if(st==="garantiza"||st==="cantidad") strat = st; }catch(e){}
const fOpen = {act:false, food:false, shows:false, snacks:false}; // panel avanzado de filtros abierto (persiste entre re-renders)
function saveState(){
  localStorage.setItem("orlando2027group", JSON.stringify(group));
  localStorage.setItem("orlando2027plan", JSON.stringify([...plan]));
}
const groupSize = () => group.adults + group.kids10 + group.kids3;
/* costo del grupo para un item con precios {a,c}: 10+ pagan adulto */
function groupCost(item){
  const nA = group.adults + group.kids10;
  return item.a*nA + (item.c==null ? item.a : item.c)*group.kids3;
}
function perPerson(item){ return "Adulto/10+ " + money(item.a) + (item.c!=null ? " · Niño 3-9 " + money(item.c) : " · Niño 3-9 = tarifa adulta"); }

/* ---------- buscador de items para Mi Plan ---------- */
function findItem(id){
  return ACTIVIDADES.find(a=>a.id===id) || COMIDA.find(r=>r.id===id) || null;
}
function togglePlan(id, btn){
  if(plan.has(id)){ plan.delete(id); btn.classList.remove("in-plan"); btn.textContent = "⭐ Mi Plan"; }
  else{ plan.add(id); btn.classList.add("in-plan"); btn.textContent = "✔ En tu plan"; }
  saveState(); updateBadge(); renderMiPlan();
}
function updateBadge(){ const b = $("#plan-count"); if(b) b.textContent = plan.size;
  document.querySelectorAll(".plan-n").forEach(x=>x.textContent = plan.size); }

/* ---------- tabs: barra superior + navegación inferior + hoja "Más" (móvil) ---------- */
const PRIMARY_TABS = ["itinerario","actividades","comida","miplan"];
function selectTab(name){
  document.querySelectorAll(".tab,.mnav-btn").forEach(b=>{
    if(b.dataset && b.dataset.tab===name) b.classList.add("active"); else b.classList.remove("active");
  });
  const more = $("#mnav-more");
  if(more){ if(PRIMARY_TABS.indexOf(name)>=0) more.classList.remove("active"); else more.classList.add("active"); }
  document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
  const panel = $("#tab-"+name);
  if(panel) panel.classList.add("active");
  if(name==="miplan") renderMiPlan();
  const sheet = $("#msheet"); if(sheet) sheet.hidden = true;
  window.scrollTo({top:0,behavior:"smooth"});
  /* tablets (768-999px): barra superior con scroll horizontal → centra la pestaña activa */
  if(window.matchMedia && window.matchMedia("(min-width:768px) and (max-width:999px)").matches){
    const tb = document.querySelector('#tabs .tab[data-tab="'+name+'"]');
    if(tb && tb.scrollIntoView){ try{ tb.scrollIntoView({block:"nearest",inline:"center"}); }catch(e){} }
  }
}
function initTabs(){
  const fab = $("#fab-top");
  if(fab){
    fab.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));
    if(typeof window.addEventListener === "function"){
      window.addEventListener("scroll", ()=>{
        if((window.scrollY||0) > 450) fab.classList.add("show"); else fab.classList.remove("show");
      }, {passive:true});
    }
  }
}

/* ---------- configuración de grupo ---------- */
function initGroup(){
  const a=$("#g-adults"),k10=$("#g-kids10"),k3=$("#g-kids3");
  a.value=group.adults; k10.value=group.kids10; k3.value=group.kids3;
  function refresh(){
    group = {adults:+a.value||0, kids10:+k10.value||0, kids3:+k3.value||0};
    saveState(); renderAll();
  }
  [a,k10,k3].forEach(i=>i.addEventListener("change",refresh));
}

/* ---------- componentes HTML ---------- */
function planBtn(id){
  const on = plan.has(id);
  return `<button class="btn btn-plan ${on?"in-plan":""}" data-plan="${id}">${on?"✔ En tu plan":"⭐ Mi Plan"}</button>`;
}
function crowdDots(n){
  let s=""; for(let i=1;i<=10;i++) s += `<span class="dot ${i<=n?"on":""}"></span>`;
  return `<span class="crowd" title="Multitud esperada ${n}/10">${s}<em>${n}/10</em></span>`;
}
function thrillBar(n){
  let s=""; for(let i=1;i<=5;i++) s += `<span class="dot ${i<=n?"on t":""}"></span>`;
  return `<span class="crowd">${s}</span>`;
}
/* delegación global: Mi Plan, comparador de opciones y plan por día */
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-plan]"); if(b){ togglePlan(b.dataset.plan, b); return; }
  const cmp = e.target.closest("[data-cmp]");
  if(cmp){
    const p = document.getElementById("cmp-"+cmp.dataset.cmp);
    if(p){ p.hidden = !p.hidden; cmp.setAttribute("aria-expanded", String(!p.hidden));
           cmp.textContent = p.hidden ? "⚖️ Comparar con lo recomendado" : "🔼 Ocultar comparación"; }
    return;
  }
  const pk = e.target.closest("[data-pick]");
  if(pk){
    const parts = pk.dataset.pick.split(":"); const date = parts[0], n = +parts[1];
    const i = DIAS.findIndex(x=>x.date===date); if(i<0) return;
    const recoIdx = DIAS[i].options.findIndex(o=>o.reco);
    if(n===recoIdx) delete alts[date]; else alts[date] = n;
    localStorage.setItem("orlando2027alts", JSON.stringify(alts));
    renderItinerario();
    const card = document.querySelectorAll("#tab-itinerario .day-card")[i];
    if(card && card.scrollIntoView) card.scrollIntoView({block:"start",behavior:"smooth"});
    return;
  }
  const sf = e.target.closest("[data-strat]");
  if(sf){ const m = sf.dataset.strat; if(m==="garantiza"||m==="cantidad"){ strat = m; localStorage.setItem("orlando2027strat", strat); renderItinerario(); } return; }
  const rs = e.target.closest("#reset-alts");
  if(rs){ alts = {}; localStorage.setItem("orlando2027alts","{}"); renderItinerario(); return; }
  /* ---------- v8 móvil: navegación, hoja Más, filtros (chips/toggle/reset), acordeón de días ---------- */
  const mr = e.target.closest("#mnav-more");
  if(mr){ const s = $("#msheet"); if(s) s.hidden = !s.hidden; return; }
  const sc = e.target.closest("[data-sheet-close]");
  if(sc){ const s = $("#msheet"); if(s) s.hidden = true; return; }
  const tbs = e.target.closest("[data-tab]");
  if(tbs){ selectTab(tbs.dataset.tab); return; }
  const rr = e.target.closest("[data-reset]");
  if(rr){
    const k = rr.dataset.reset;
    if(k==="act") Object.assign(actF,{park:"",cat:"",age:15,restr:"",thrill:5,sort:"park"});
    if(k==="food") Object.assign(foodF,{zone:"",service:"",protein:0,sort:"protein",q:""});
    if(k==="shows") Object.assign(showF,{park:"",type:"",seat:""});
    if(k==="snacks") Object.assign(snackF,{park:"",tipo:"",hype:false,max:0,q:""});
    renderActividades(); renderComida(); renderShows(); renderSnacks();
    return;
  }
  const ft = e.target.closest("[data-ftoggle]");
  if(ft){
    const bar = ft.closest(".filter-bar");
    if(bar){
      const open = !bar.classList.contains("open");
      const key = (bar.id||"").replace("fb-","");
      fOpen[key] = open;
      if(open) bar.classList.add("open"); else bar.classList.remove("open");
      ft.setAttribute("aria-expanded", String(open));
    }
    return;
  }
  const ap = e.target.closest("[data-apark]");
  if(ap){ actF.park = ap.dataset.apark; renderActividades(); return; }
  const fz = e.target.closest("[data-fzone]");
  if(fz){ foodF.zone = fz.dataset.fzone; renderComida(); return; }
  const skp = e.target.closest("[data-showpark]");
  if(skp){ showF.park = skp.dataset.showpark; renderShows(); return; }
  const shp = e.target.closest("[data-sfhype]");
  if(shp){ snackF.hype = !snackF.hype; renderSnacks(); return; }
  const dh = e.target.closest(".day-head");
  if(dh){ const card = dh.closest(".day-card"); if(card){ if(card.classList.contains("collapsed")) card.classList.remove("collapsed"); else card.classList.add("collapsed"); } return; }
  const tg = e.target.closest("[data-tabgo]");
  if(tg){ e.preventDefault(); const tb = document.querySelector("#tabs .tab[data-tab=\""+tg.dataset.tabgo+"\"]"); if(tb && tb.click) tb.click(); }
});

/* ---------- cuenta regresiva (header) ---------- */
function renderCountdown(){
  const el = $("#countdown"); if(!el) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const dias = Math.round((new Date(VIAJE.inicio+"T12:00:00")-today)/86400000);
  let viaje;
  if(dias>0) viaje = `🛫 Faltan <strong>${dias} día${dias===1?"":"s"}</strong> para el viaje (31 dic 2026)`;
  else if(dias>-12) viaje = `🎢 ¡Viaje en curso! Día ${Math.min(12,1-dias)} de 12`;
  else viaje = `✅ Viaje completado — ¡a planear el siguiente!`;
  const next = VENCIMIENTOS.map(v=>({f:v.f,label:v.label,d:Math.round((new Date(v.f+"T12:00:00")-today)/86400000)}))
    .filter(v=>v.d>=0).sort((a,b)=>a.d-b.d)[0];
  el.innerHTML = `${viaje} · ${next?`próximo vencimiento: <strong>${esc(next.label)}</strong> — ${next.d===0?"<strong>¡ES HOY!</strong>":`en ${next.d} día${next.d===1?"":"s"}`} <span class="muted">(${esc(next.f)})</span>`:"sin vencimientos pendientes"} — <a href="#" data-tabgo="prep">ver checklist completo 📋</a>`;
}

/* ---------- TAB: DÍA A DÍA ---------- */
/* v5: recomendaciones de comida del parque que toca ese día */
function dayFoodHTML(d){
  const ids = (typeof COMIDA_DIA==="object" && COMIDA_DIA[d.date]) || [];
  const items = ids.map(id=>COMIDA.find(r=>r.id===id)).filter(Boolean);
  if(!items.length) return "";
  return `<div class="day-food"><h4>🍴 Dónde comer hoy <small>· toca 🚶 para abrir la ruta a pie en Google Maps</small></h4><ul class="tight">`
    + items.map(r=>`<li>${SERVICE_ICON[r.service]||"🍴"} <strong>${esc(r.name)}</strong> <span class="mut">${esc(parkChip(r))} · ${esc(r.note)}</span> ${walkLink(r)}${resLink(r)}</li>`).join("")
    + `</ul></div>`;
}

function renderItinerario(){
  const altDays = DIAS.filter(d=>{ const r=d.options.findIndex(o=>o.reco); return typeof alts[d.date]==="number" && alts[d.date]!==r && d.options[alts[d.date]]; });
  const chips = `<span class="chip">⚖️ En cada día: compara la opción recomendada con la alternativa y elige tu plan (✅) — se guarda en este navegador</span>`
    + (altDays.length?`<span class="chip chip-alt">🔀 Plan alternativo elegido: ${altDays.map(d=>esc(d.label)).join(" · ")}</span><button class="btn btn-chip" id="reset-alts">↺ Volver a los recomendados</button>`:"");
  let h = `<div class="intro-card"><h2>🗓️ Itinerario día a día</h2>
    <p>${esc(META.rango)}</p><p>🏨 ${esc(META.hotel)}</p><p>🌡️ ${esc(META.clima)}</p>
    <p class="gold-rule">💵 ${esc(META.reglaOro)}</p>
    <div class="plan-chips">${chips}</div>
    <div class="strat-filter"><span class="sf-label">🧭 Estrategia de día (8 días de parque):</span>
      <button class="btn btn-strat ${strat==="garantiza"?"on":""}" data-strat="garantiza">🎯 Atracción mayor garantizada</button>
      <button class="btn btn-strat ${strat==="cantidad"?"on":""}" data-strat="cantidad">📊 Mayor cantidad de atracciones</button>
      <span class="sf-hint">Cada modo ordena sus ventanas de MENOR a MAYOR ocupación proyectada: la atracción con fila se ataca cuando la ocupación baja y el pico se absorbe con shows/indoor.</span></div></div>`;
  const mobDays = !!(window.matchMedia && window.matchMedia("(max-width:767px)").matches);
  DIAS.forEach((d,i)=>{
    const hours = Object.entries(d.hours).map(([k,v])=>`<tr><td>${esc(PARQUES[k]||k)}</td><td>${esc(v)}</td></tr>`).join("");
    const events = (d.events||[]).map(e=>`<li>${esc(e)}</li>`).join("");
    const warns = (d.warnings||[]).map(w=>`<li>${esc(w)}</li>`).join("");
    const recoIdx = d.options.findIndex(o=>o.reco);
    const pick = (typeof alts[d.date]==="number" && d.options[alts[d.date]]) ? alts[d.date] : recoIdx;
    const multi = d.options.length>1;
    const opts = d.options.map((o,i)=>{
      const chosen = i===pick;
      return `
      <div class="option ${o.reco?"reco":""} ${chosen?"chosen":""}">
        <h4>${o.reco?"⭐ RECOMENDADO":""}${chosen?`<span class="chosen-tag">${o.reco?"ACTIVO":"PLAN ELEGIDO"}</span>`:""} · ${esc(o.title)}</h4>
        <p>${esc(o.summary)}</p>
        <ol>${(o.steps||[]).map(s=>`<li>${esc(s)}</li>`).join("")}</ol>
        ${multi?`<div class="opt-actions">
          ${!chosen?`<button class="btn btn-pick" data-pick="${d.date}:${i}">✅ Usar este plan</button>`
                   :(o.reco?"":`<button class="btn btn-pick" data-pick="${d.date}:${recoIdx}">↩ Volver al recomendado</button>`)}
          ${o.reco?"":`<button class="btn btn-cmp" data-cmp="${d.date}" aria-expanded="false">⚖️ Comparar con lo recomendado</button>`}
        </div>`:""}
      </div>`;
    }).join("");
    const altOpt = d.options.find((o,i)=>i!==recoIdx && o.vs);
    const panel = (multi && altOpt) ? `
      <div class="cmp-panel" id="cmp-${d.date}" hidden>
        <div class="cmp-col reco">
          <h5>⭐ ${esc(d.options[recoIdx].title)}</h5>
          <h6 class="pro-t">✅ Por qué es la base del día</h6>
          <p class="tip">${esc(altOpt.vs.baseReco)}</p>
        </div>
        <div class="cmp-col alt">
          <h5>🔀 ${esc(altOpt.title)}</h5>
          <h6 class="pro-t">👍 Qué ganas si cambias</h6>
          <ul class="tight pro">${altOpt.vs.aFavor.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
          <h6 class="warn-t">⚠️ Qué pierdes si cambias</h6>
          <ul class="tight warn">${altOpt.vs.enContra.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
        </div>
        <div class="cmp-foot">🗓️ <strong>Cuándo tiene sentido cambiar:</strong> ${esc(altOpt.vs.cambiaSi)}
          <button class="btn btn-pick" data-pick="${d.date}:${d.options.indexOf(altOpt)}">🔀 Elegir el plan alternativo</button></div>
      </div>` : "";
    const occ = d.ocupacion ? `
      <div class="occ-full ${d.ocupacion.pct>=80?"occ-hi":d.ocupacion.pct>=65?"occ-mid":"occ-lo"}">
        <div class="occ-head"><strong>📊 Ocupación proyectada: ${d.ocupacion.pct}%</strong>
          <span class="occ-rango">rango ${esc(d.ocupacion.rango)} · crowd ${d.crowd}/10</span>
          <span class="occ-meter"><i style="width:${d.ocupacion.pct}%"></i></span></div>
        <p class="tip">${esc(d.ocupacion.porQue)}</p>
        <p class="muted small">Modelado con el histórico 2022-2026 (sin aforos reales de 2027): re-verificar 7-10 días antes con apps de aforo (queue-times) o la app del parque.</p>
      </div>` : "";
    const stg = d.estrategias ? d.estrategias[strat] : null;
    const sbox = stg ? `
      <div class="strat-box">
        <h5>🧭 ${strat==="garantiza"?"🎯 Atracción mayor garantizada":"📊 Mayor cantidad de atracciones"} <small>· ventanas de MENOR a MAYOR ocupación proyectada</small></h5>
        <p class="tip">${esc(stg.desc)}</p>
        <ol class="strat-win">${stg.pasos.slice().sort((a,b)=>a.occ-b.occ).map(w=>`
          <li><div class="win-top"><span class="win-h">⏱️ ${esc(w.h)}</span><span class="win-occ ${w.occ>=80?"occ-hi":w.occ>=65?"occ-mid":"occ-lo"}">📊 ${w.occ}%</span></div>
            <ul class="tight">${w.items.map(it=>`<li>${esc(it)}</li>`).join("")}</ul></li>`).join("")}
        </ol>
      </div>` : "";
    h += `<article class="day-card${d.date===HOY_ISO?" hoy":""}${mobDays&&i>0?" collapsed":""}">
      <header class="day-head"><h3>${esc(d.label)}</h3><span class="theme">${esc(d.theme)}</span>${crowdDots(d.crowd)}${d.date===HOY_ISO?`<span class="chip chip-hoy">📍 HOY</span>`:""}<span class="day-chev" aria-hidden="true">▾</span></header>
      <div class="day-grid">${occ}
        <div><h5>🕐 Horarios estimados</h5><table class="mini-table">${hours}</table></div>
        <div>${events?`<h5>📌 Eventos</h5><ul class="tight">${events}</ul>`:""}
             ${warns?`<h5 class="warn-t">⚠️ Alertas</h5><ul class="tight warn">${warns}</ul>`:""}
             ${d.weather?`<h5>🌡️☀️🌧️ Clima del día <small>(promedio 2022-26 · re-verificar 7-10 días antes)</small></h5><p class="tip">Máx ${d.weather.hi}°C (${d.weather.hiF}°F) · Mín ${d.weather.lo}°C (${d.weather.loF}°F) · 🌅 ${d.weather.sr} → 🌇 ${d.weather.ss} · 🌧️ ${d.weather.rain}: ${d.weather.mm} mm de media, prob. ${d.weather.prob} %${d.weather.mmWet>0?` (si llueve ≈ ${d.weather.mmWet} mm)`:``}</p>`:""}
             ${d.transport?`<h5>🚌 Transporte desde el hotel</h5><p class="tip">${esc(d.transport)}</p>`:""}
              ${d.planB?`<h5>🌧️ Plan B · lluvia o frío</h5><p class="tip">${esc(d.planB)}</p>`:""}</div>
      </div>
      ${sbox}
      ${dayFoodHTML(d)}
      <div class="options">${opts}${panel}</div>
    </article>`;
  });
  $("#tab-itinerario").innerHTML = h;
}

/* ---------- TAB: CLAVES ---------- */
function renderInfo(){
  let h = `<div class="intro-card"><h2>ℹ️ Claves del viaje</h2>
    <p>Las ${CLAVES.length} reglas que hacen (o rompen) un viaje de 7 personas a Orlando en Nochevieja.</p></div><div class="claves-grid">`;
  h += CLAVES.map(c=>`<div class="clave-card"><h4>${esc(c.t)}</h4><p>${esc(c.d)}</p></div>`).join("");
  h += `</div><div class="intro-card"><h3>📋 Checklist de reservas</h3><ul class="tight">
    <li><strong>Esta semana:</strong> NYE ya NO lleva reservas Disney (el plan Disney empieza el 3 de ene) — solo OpenTable si quieren mesa en Mythos o Toothsome.</li>
    <li><strong>Cada día a las 6:00 AM (60 días antes):</strong> resto de cenas Disney: Cinderella's Royal Table, Space 220, Homecomin', Liberty Tree, Tusker House.</li>
    <li><strong>30-60 días antes:</strong> Universal (Mythos, Bigfire, Toadstool) y Springs (Raglan Road, Boathouse) vía app/OpenTable.</li>
    <li><strong>Entradas Disney:</strong> comprar con anticipación (precio dinámico, NYE es lo más caro del año). Considerar Lightning Lane en MK/HS.</li>
    <li><strong>Antes de viajar:</strong> descargar apps, verificar cobertura del pase Universal, comprar hand warmers y power banks.</li>
  </ul></div>`;
  $("#tab-info").innerHTML = h;
}


/* ---------- TAB: ACTIVIDADES (filtros multidimensionales) ---------- */
const actF = {park:"", cat:"", age:15, restr:"", thrill:5, sort:"park"};
function actFiltersHTML(){
  const parks = [...new Set(ACTIVIDADES.map(a=>a.park))];
  const cats = [...new Set(ACTIVIDADES.flatMap(a=>a.cat))];
  const restrs = [...new Set(ACTIVIDADES.map(a=>a.restr).filter(Boolean))];
  const chips = [{k:"",l:"Todos",n:ACTIVIDADES.length}].concat(parks.map(p=>({k:p,l:PARQUES[p]||p,n:ACTIVIDADES.filter(a=>a.park===p).length})));
  return `<div class="filter-bar${fOpen.act?" open":""}" id="fb-act">
    <div class="f-tools">
      <button class="btn btn-ghost btn-xs" data-ftoggle aria-expanded="${fOpen.act}">⚙️ Filtros</button>
      <button class="btn btn-ghost btn-xs" data-reset="act">↺ Limpiar</button>
    </div>
    <div class="qparks"><span class="qp-label">📍 Parque:</span>${chips.map(c=>`<button class="qchip ${actF.park===c.k?"on":""}" data-apark="${esc(c.k)}">${esc(c.l)} <b>${c.n}</b></button>`).join("")}</div>
    <div class="f-adv">
      <label>Tipo <select data-f="cat"><option value="">Todos</option>${cats.map(c=>`<option ${actF.cat===c?"selected":""} value="${esc(c)}">${esc(c)}</option>`).join("")}</select></label>
      <label>Apto desde <select data-f="age">${[0,3,5,7,10,13,15].map(a=>`<option ${actF.age===a?"selected":""} value="${a}">${a===0?"cualquier edad":a+" años"}</option>`).join("")}</select></label>
      <label>Restricción <select data-f="restr"><option value="">Todas</option><option value="none" ${actF.restr==="none"?"selected":""}>Sin restricción</option>${restrs.map(r=>`<option ${actF.restr===r?"selected":""} value="${esc(r)}">${esc(r)}</option>`).join("")}</select></label>
      <label>Emoción máx <select data-f="thrill">${[1,2,3,4,5].map(t=>`<option ${actF.thrill===t?"selected":""} value="${t}">${t}/5</option>`).join("")}</select></label>
      <label>Ordenar <select data-f="sort">
        <option value="park" ${actF.sort==="park"?"selected":""}>Por parque</option>
        <option value="costAsc" ${actF.sort==="costAsc"?"selected":""}>Costo grupo ↑</option>
        <option value="costDesc" ${actF.sort==="costDesc"?"selected":""}>Costo grupo ↓</option>
        <option value="thrill" ${actF.sort==="thrill"?"selected":""}>Emoción ↓</option>
      </select></label>
    </div>
  </div>`;
}
function actCard(a){
  const gc = groupCost(a);
  return `<article class="card">
    <div class="card-top"><h4>${esc(a.name)}</h4>${planBtn(a.id)}</div>
    <div class="chips"><span class="chip park">${esc(PARQUES[a.park]||a.park)}</span>${a.cat.map(c=>`<span class="chip">${esc(c)}</span>`).join("")}</div>
    <div class="chips link-chips">${walkLink(a)}</div>
    <p>${esc(a.desc)}</p>
    <div class="facts">
      <span>👶 ${a.minAge===0?"Toda edad":"Desde "+a.minAge+" años"}</span>
      <span>📏 ${a.restr?esc(a.restr):"Sin restricción"}</span>
      <span>🎢 ${thrillBar(a.thrill)}</span>
      <span>⏱️ ~${a.dur} min</span>
      <span>🌅 ${esc(a.best||"")}</span>
    </div>
    <div class="cost"><strong>👥 Grupo: ${money(gc)}</strong> · ${esc(a.note||"")} <span class="pp">(${perPerson(a)})</span></div>
    ${a.tips?`<p class="tip">💡 ${esc(a.tips)}</p>`:""}
  </article>`;
}
function renderActividades(){
  let list = ACTIVIDADES.filter(a=>
    (!actF.park || a.park===actF.park) &&
    (!actF.cat || a.cat.includes(actF.cat)) &&
    a.minAge<=actF.age &&
    (!actF.restr || (actF.restr==="none" ? !a.restr : a.restr===actF.restr)) &&
    a.thrill<=actF.thrill);
  if(actF.sort==="costAsc") list.sort((x,y)=>groupCost(x)-groupCost(y));
  else if(actF.sort==="costDesc") list.sort((x,y)=>groupCost(y)-groupCost(x));
  else if(actF.sort==="thrill") list.sort((x,y)=>y.thrill-x.thrill);
  $("#tab-actividades").innerHTML = `<div class="intro-card"><h2>🎢 Actividades y atracciones</h2>
    <p>${ACTIVIDADES.length} opciones con filtros por parque, tipo, edad, restricción física y emoción. Costos calculados para TU grupo (${groupSize()} personas). Marca ⭐ para armar tu plan.</p></div>`
    + actFiltersHTML()
    + `<p class="count">${list.length} resultados · 🚶 abre la ruta a pie en Google Maps</p><div class="cards">${list.map(actCard).join("")}</div>`;
  $("#tab-actividades").querySelectorAll("[data-f]").forEach(sel=>{
    sel.addEventListener("change", e=>{
      const k = e.target.dataset.f;
      actF[k] = (k==="age"||k==="thrill") ? +e.target.value : e.target.value;
      renderActividades();
    });
  });
}


/* ---------- TAB: COMIDA & PROTEÍNA ---------- */
const foodF = {zone:"", service:"", protein:0, sort:"protein", q:""};
function proteinStars(n){ return "🥩".repeat(n) + `<em class="pnum">${n}/5</em>`; }
/* v5: iconos de servicio + ubicación explícita del parque + Google Maps a pie + link oficial de reserva */
const SERVICE_ICON = {"Rápido":"🥡","Mesa":"🍽️","Buffet":"🥘","Familiar":"👨‍👩‍👧","Café/Snack":"☕"};
const PARKS_CERRADOS = ["USF","IoA","Epic","Volcano","MK","EPCOT","HS","AK","SeaWorld"];
function parkChip(r){ const p = PARQUES[r.park]||r.park; return PARKS_CERRADOS.includes(r.park) ? "📍 Dentro de "+p : "📍 "+p; }
function gmapsWalk(r){ return "https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(r.name+", "+(PARQUES[r.park]||"Orlando")+", Orlando, FL")+"&travelmode=walking"; }
function walkLink(r){ return `<a class="chip walk" href="${gmapsWalk(r)}" target="_blank" rel="noopener" title="Abrir la ruta a pie en Google Maps">🚶 Ir caminando</a>`; }
function resLink(r){ const u = (typeof RES_URLS==="object" && RES_URLS[r.id]); return u ? `<a class="chip res" href="${u}" target="_blank" rel="noopener" title="Reservar en la página oficial (si tienes la app instalada, se abre directo en ella)">📅 Reservar</a>` : ""; }

const SNACK_LBL = {cafe:"☕ Café",helado:"🍦 Helado",postre:"🍰 Postre/Dulce",snack:"🍿 Snack salado",bebida:"🥤 Bebida dulce"};
const HOY_ISO = (()=>{ const n=new Date(); return n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0"); })();

function foodFiltersHTML(){
  const zones = [...new Set(COMIDA.map(r=>r.zone))];
  const services = [...new Set(COMIDA.map(r=>r.service))];
  const chips = [{k:"",l:"Todas",n:COMIDA.length}].concat(zones.map(z=>({k:z,l:z,n:COMIDA.filter(r=>r.zone===z).length})));
  return `<div class="filter-bar${fOpen.food?" open":""}" id="fb-food">
    <div class="f-tools">
      <input type="search" data-f="q" value="${esc(foodF.q)}" placeholder="🔎 nombre o plato…">
      <button class="btn btn-ghost btn-xs" data-ftoggle aria-expanded="${fOpen.food}">⚙️ Filtros</button>
      <button class="btn btn-ghost btn-xs" data-reset="food">↺ Limpiar</button>
    </div>
    <div class="qparks"><span class="qp-label">📍 Zona:</span>${chips.map(c=>`<button class="qchip ${foodF.zone===c.k?"on":""}" data-fzone="${esc(c.k)}">${esc(c.l)} <b>${c.n}</b></button>`).join("")}</div>
    <div class="f-adv">
      <label>Servicio <select data-f="service"><option value="">Todos</option>${services.map(s=>`<option ${foodF.service===s?"selected":""} value="${esc(s)}">${esc(s)}</option>`).join("")}</select></label>
      <label>Proteína mín <select data-f="protein">${[0,3,4,5].map(p=>`<option ${foodF.protein===p?"selected":""} value="${p}">${p===0?"cualquiera":p+"/5"}</option>`).join("")}</select></label>
      <label>Ordenar <select data-f="sort">
        <option value="protein" ${foodF.sort==="protein"?"selected":""}>Proteína/$ ↓</option>
        <option value="costAsc" ${foodF.sort==="costAsc"?"selected":""}>Costo grupo ↑</option>
        <option value="costDesc" ${foodF.sort==="costDesc"?"selected":""}>Costo grupo ↓</option>
        <option value="zone" ${foodF.sort==="zone"?"selected":""}>Por zona</option>
      </select></label>
    </div>
  </div>`;
}
function foodCard(r){
  const gc = groupCost(r);
  return `<article class="card ${r.protein>=5?"top-protein":""}">
    <div class="card-top"><h4>${r.protein>=5?"🏆 ":""}${esc(r.name)}</h4>${planBtn(r.id)}</div>
    <div class="chips"><span class="chip park">${esc(parkChip(r))}</span><span class="chip">${SERVICE_ICON[r.service]||"🍴"} ${esc(r.service)}</span>${r.sub?`<span class="chip sub">${SNACK_LBL[r.sub]||esc(r.sub)}</span>`:""}<span class="chip protein">${proteinStars(r.protein)}</span><span class="chip">${esc(r.zone)}</span>${r.hype?`<span class="chip hype">⭐ Viral</span>`:""}</div>
    <div class="chips link-chips">${walkLink(r)}${resLink(r)}</div>
    <p class="pnote">${esc(r.proteinNote)}</p>
    <div class="facts">
      <span>🍽️ ${esc(r.dishes)}</span>
      <span>💺 ${esc(r.seating)}</span>
      <span>📅 ${esc(r.res)}</span>
    </div>
    <div class="cost"><strong>👥 Grupo: ~${money(gc)}</strong> · ${esc(r.note)} <span class="pp">(${perPerson(r)})</span></div>
    ${r.tips?`<p class="tip">💡 ${esc(r.tips)}</p>`:""}
  </article>`;
}
function renderComida(){
  let list = COMIDA.filter(r=>
    (!foodF.zone || r.zone===foodF.zone) &&
    (!foodF.service || r.service===foodF.service) &&
    r.protein>=foodF.protein &&
    (!foodF.q || (r.name+" "+r.dishes).toLowerCase().includes(foodF.q.toLowerCase())));
  if(foodF.sort==="costAsc") list.sort((x,y)=>groupCost(x)-groupCost(y));
  else if(foodF.sort==="costDesc") list.sort((x,y)=>groupCost(y)-groupCost(x));
  else if(foodF.sort==="zone") list.sort((x,y)=>x.zone.localeCompare(y.zone));
  else list.sort((x,y)=>y.protein-x.protein || groupCost(x)-groupCost(y));
  $("#tab-comida").innerHTML = `<div class="intro-card"><h2>🍗 Comida & análisis proteína/$</h2>
    <p>${COMIDA.length} restaurantes puntuados por proteína por dólar (🥩1-5). Los 🏆 son los campeones proteína/$. Costos estimados para tu grupo de ${groupSize()}. Recuerda: 10+ paga adulto en casi todo.</p></div>`
    + foodFiltersHTML()
    + `<p class="count">${list.length} resultados · 🥡 rápido · 🍽️ mesa · 🥘 buffet · 👨‍👩‍👧 familiar · ☕ café/snack — 🚶 abre la ruta a pie en Google Maps · 📅 abre la reserva oficial</p><div class="cards">${list.map(foodCard).join("")}</div>`;
  $("#tab-comida").querySelectorAll("[data-f]").forEach(el=>{
    const ev = el.type==="search" ? "input" : "change";
    el.addEventListener(ev, e=>{
      const k = e.target.dataset.f;
      foodF[k] = k==="protein" ? +e.target.value : e.target.value;
      renderComida();
      /* el re-render destruye el input: recupera foco y cursor para seguir escribiendo */
      if(k==="q"){ const s = document.querySelector('#tab-comida [data-f="q"]'); if(s){ s.focus(); try{ s.setSelectionRange(s.value.length, s.value.length); }catch(err){} } }
    });
  });
}


/* ---------- TAB: CAFÉ · HELADO · SNACKS (v6: filtros multi-nivel estilo apps pro) ---------- */
const snackF = {park:"", tipo:"", hype:false, max:0, q:""};
const SNACK_ORDER = ["MK","EPCOT","HS","AK","USF","IoA","Epic","Volcano","CityWalk","Springs","Otros"];
function snackAll(){ return COMIDA.filter(r=>r.service==="Café/Snack"); }
function snackFiltered(){
  const q = snackF.q.trim().toLowerCase();
  return snackAll()
    .filter(r=>!snackF.park || r.park===snackF.park)
    .filter(r=>!snackF.tipo || r.sub===snackF.tipo)
    .filter(r=>!snackF.hype || r.hype)
    .filter(r=>!snackF.max || r.a<=snackF.max)
    .filter(r=>!q || (r.name+" "+r.dishes+" "+(r.tips||"")).toLowerCase().includes(q));
}
function snackFiltersHTML(){
  const all = snackAll();
  const parks = SNACK_ORDER.filter(k=>all.some(r=>r.park===k))
    .map(k=>({k, label:k==="Otros"?"🌆 Orlando fuera de parques (hype local)":(PARQUES[k]||k), n:all.filter(r=>r.park===k).length}));
  const types = Object.keys(SNACK_LBL).map(t=>({t,n:all.filter(r=>r.sub===t).length})).filter(x=>x.n>0);
  return `<div class="filter-bar snack-bar${fOpen.snacks?" open":""}" id="fb-snacks">
    <div class="f-tools">
      <input type="search" data-sf="q" value="${esc(snackF.q)}" placeholder="🔎 butterbeer, cookie, poutine…">
      <button class="btn btn-ghost btn-xs" data-ftoggle aria-expanded="${fOpen.snacks}">⚙️ Filtros</button>
      <button class="btn btn-ghost btn-xs" data-reset="snacks">↺ Limpiar</button>
    </div>
    <div class="qparks"><span class="qp-label">📍 Atajo:</span><button class="qchip ${!snackF.park?"on":""}" data-spark="">Todos</button>${parks.map(p=>`<button class="qchip ${snackF.park===p.k?"on":""}" data-spark="${p.k}">${esc(p.label)} <b>${p.n}</b></button>`).join("")}<button class="qchip ${snackF.hype?"on":""}" data-sfhype>⭐ Solo viral</button></div>
    <div class="f-adv">
      <label>📍 Lugar <select data-sf="park"><option value="">Todos los lugares (${all.length})</option>${parks.map(p=>`<option value="${p.k}" ${snackF.park===p.k?"selected":""}>${esc(p.label)} (${p.n})</option>`).join("")}</select></label>
      <label>🍭 Tipo <select data-sf="tipo"><option value="">Todo tipo</option>${types.map(t=>`<option value="${t.t}" ${snackF.tipo===t.t?"selected":""}>${SNACK_LBL[t.t]} (${t.n})</option>`).join("")}</select></label>
      <label>💲 Máx/persona <select data-sf="max">${[[0,"cualquiera"],[6,"hasta $6"],[8,"hasta $8"],[10,"hasta $10"],[14,"hasta $14"]].map(([v,l])=>`<option value="${v}" ${snackF.max===v?"selected":""}>${l}</option>`).join("")}</select></label>
    </div>
  </div>`;
}
function renderSnacks(){
  const list = snackFiltered();
  const all = snackAll();
  const secs = SNACK_ORDER.map(k=>{
    const items = list.filter(r=>r.park===k); if(!items.length) return "";
    const label = k==="Otros" ? "🌆 Orlando fuera de parques · joyas locales con hype" : "📍 "+(PARQUES[k]||k);
    return `<h3 class="sect">${esc(label)} <span class="muted small">(${items.length})</span></h3><div class="cards">${items.map(foodCard).join("")}</div>`;
  }).join("");
  const nHype = all.filter(r=>r.hype).length;
  const nExt = all.filter(r=>r.park==="Otros").length;
  $("#tab-snacks").innerHTML = `<div class="intro-card"><h2>☕ Café · helado · postres · snacks</h2>
    <p><strong>${all.length} lugares verificados</strong>: los parques de Disney y Universal, Epic, CityWalk, Disney Springs y <strong>${nExt} joyas externas con hype local</strong> (The Glass Knife, Se7en Bites, Donut King, Kelly's…). ${nHype} llevan el sello <span class="chip hype">⭐ Viral</span>.</p>
    <p>Combina filtros: <strong>📍 parque donde estás</strong> (o usa los atajos de un toque) + 🍭 tipo + 💲 precio + ⭐ hype + 🔎 búsqueda. Cada tarjeta incluye 🚶 ruta a pie en Google Maps. Puntúan bajo en 🥩 a propósito: son antojo y energía, no sustitutos de comida.</p></div>`
    + snackFiltersHTML()
    + `<p class="count">${list.length} resultados${snackF.hype?" · solo ⭐ viral":""}</p>${secs||'<div class="intro-card"><p>Sin resultados con estos filtros: quita alguno o toca ↺ Limpiar.</p></div>'}`;
  const panel = $("#tab-snacks");
  panel.querySelectorAll("[data-sf]").forEach(el=>{
    const k = el.dataset.sf;
    el.addEventListener(k==="q"?"input":"change", e=>{
      snackF[k] = (k==="hype") ? e.target.checked : (k==="max" ? +e.target.value : e.target.value);
      renderSnacks();
      if(k==="q"){ const s = document.querySelector('[data-sf="q"]'); if(s){ s.focus(); s.setSelectionRange(s.value.length,s.value.length); } }
    });
  });
  panel.querySelectorAll("[data-spark]").forEach(b=>b.addEventListener("click",()=>{ snackF.park = b.dataset.spark; renderSnacks(); }));
  const rs = null; /* reset unificado en data-reset="snacks" (delegación global) */
}

/* ---------- TAB: SHOWS ---------- */
const showF = {park:"", type:"", seat:""};
function renderShows(){
  const parks = [...new Set(SHOWS.map(s=>s.park))];
  const types = [...new Set(SHOWS.map(s=>s.type))];
  let list = SHOWS.filter(s=>
    (!showF.park || s.park===showF.park) &&
    (!showF.type || s.type===showF.type) &&
    (!showF.seat || (showF.seat==="si" ? s.seat.startsWith("SÍ") : !s.seat.startsWith("SÍ"))));
  const cards = list.map(s=>`<article class="card">
    <h4>${esc(s.name)}</h4>
    <div class="chips"><span class="chip park">${esc(PARQUES[s.park]||s.park)}</span><span class="chip">${esc(s.type)}</span>
    <span class="chip ${s.seat.startsWith("SÍ")?"seat-yes":"seat-no"}">${s.seat.startsWith("SÍ")?"💺 Con asiento":"🧍 De pie"}</span></div>
    <div class="chips link-chips">${walkLink(s)}</div>
    <div class="facts"><span>🕐 ${esc(s.times)}</span>${s.dur?`<span>⏱️ ${s.dur} min</span>`:""}<span>⏰ Llegar: ${esc(s.arrive)}</span><span>🪑 ${esc(s.seat)}</span></div>
    <p class="tip">💡 ${esc(s.note)}</p></article>`).join("");
  $("#tab-shows").innerHTML = `<div class="intro-card"><h2>🎭 Shows, teatro y música en vivo</h2>
    <p>Horarios TÍPICOS (confirmar el mismo día en la app). Los de teatro = descanso sentado gratis: oro puro en días de 14 horas. Conciertos gratis incluidos en EPCOT, Springs y CityWalk.</p></div>
    <div class="filter-bar${fOpen.shows?" open":""}" id="fb-shows">
      <div class="f-tools">
        <button class="btn btn-ghost btn-xs" data-ftoggle aria-expanded="${fOpen.shows}">⚙️ Filtros</button>
        <button class="btn btn-ghost btn-xs" data-reset="shows">↺ Limpiar</button>
      </div>
      <div class="qparks"><span class="qp-label">📍 Parque:</span><button class="qchip ${!showF.park?"on":""}" data-showpark="">Todos</button>${parks.map(p=>`<button class="qchip ${showF.park===p?"on":""}" data-showpark="${esc(p)}">${esc(PARQUES[p]||p)}</button>`).join("")}</div>
      <div class="f-adv">
        <label>Tipo <select data-f="type"><option value="">Todos</option>${types.map(t=>`<option ${showF.type===t?"selected":""} value="${esc(t)}">${esc(t)}</option>`).join("")}</select></label>
        <label>Asiento <select data-f="seat"><option value="">Todos</option><option value="si" ${showF.seat==="si"?"selected":""}>Con asiento (descanso)</option><option value="no" ${showF.seat==="no"?"selected":""}>De pie</option></select></label>
      </div>
    </div>
    <p class="count">${list.length} resultados · 🚶 abre la ruta a pie en Google Maps</p><div class="cards">${cards}</div>`;
  $("#tab-shows").querySelectorAll("[data-f]").forEach(sel=>sel.addEventListener("change", e=>{ showF[e.target.dataset.f]=e.target.value; renderShows(); }));
}

/* ---------- TAB: NYE ---------- */
function renderNYE(){
  const comp = NYE.comparacion.map(c=>`<div class="option ${c.p.includes("✅")?"reco":""}"><h4>${esc(c.p)}</h4>
    <ul class="tight pro">${c.puntos.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>
    <h5 class="warn-t">En contra</h5><ul class="tight warn">${c.contra.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`).join("");
  const cenas = NYE.cenas.map(c=>`<article class="card"><h4>${esc(c.name)}</h4>
    <p>${esc(c.v)}</p>
    <div class="chips link-chips">${c.place?`<a class="chip walk" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(c.place)}&travelmode=walking" target="_blank" rel="noopener" title="Abrir la ruta a pie en Google Maps">🚶 Ir caminando</a>`:""}${c.book?`<a class="chip res" href="${esc(c.book)}" target="_blank" rel="noopener" title="Reservar en la página oficial (si tienes la app instalada, se abre directo en ella)">📅 Reservar</a>`:""}</div>
    <div class="facts"><span>💵 ${esc(c.pp)} pp</span><span>👥 ${esc(c.grupo)}</span><span>📅 ${esc(c.res)}</span></div>
    <p class="tip">💡 ${esc(c.note)}</p></article>`).join("");
  const tl = NYE.timeline.map(t=>`<tr><td class="tl-time">${esc(t[0])}</td><td>${esc(t[1])}</td></tr>`).join("");
  $("#tab-nye").innerHTML = `<div class="intro-card"><h2>🎆 Estrategia Nochevieja · Jue 31 dic</h2><p>${esc(NYE.intro)}</p></div>
    <h3 class="sect">⚖️ IoA vs USF · medianoche gratis en CityWalk</h3><div class="options">${comp}</div>
    <h3 class="sect">🍽️ Dónde cenar (OpenTable / app Universal — sin la batalla de reservas de Disney)</h3><div class="cards">${cenas}</div>
    <h3 class="sect">🕐 Cronograma del día</h3><table class="timeline">${tl}</table>
    <div class="day-grid">
      <div class="intro-card"><h4>🔥 Dónde calentarse (Universal)</h4><ul class="tight">${NYE.calor.map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div>
      <div class="intro-card"><h4>🧤 Tips de supervivencia</h4><ul class="tight">${NYE.tips.map(t=>`<li>${esc(t)}</li>`).join("")}</ul></div>
    </div>`;
}

/* ---------- TAB: COMPRAS ---------- */
function renderCompras(){
  const outlets = COMPRAS.map(c=>`<article class="card">
    <h4>${esc(c.name)}</h4>
    <div class="chips"><span class="chip park">${esc(c.zone)}</span><span class="chip">${esc(c.tam)}</span></div>
    <div class="facts"><span>🕐 ${esc(c.horas)}</span><span>🏬 ${esc(c.tiendas)}</span></div>
    <p class="pnote">🔑 ${esc(c.key)}</p><p class="tip">💡 ${esc(c.tip)}</p></article>`).join("");
  const cal = SHOPPING_DIAS.map(d=>`<tr><td>${esc(d.fecha)}</td><td>${esc(d.nivel)}</td><td>${esc(d.nota)}</td></tr>`).join("");
  $("#tab-compras").innerHTML = `<div class="intro-card"><h2>🛍️ Compras, outlets y hard discounts</h2>
    <p>Las liquidaciones post-navidad alcanzan su PICO entre el 1 y el 6 de enero (markdowns extra sobre clearance). El plan: <strong>martes 5 ene = día de compras duro</strong>, outlets vacíos tras el fin de semana.</p></div>
    <h3 class="sect">📅 Calendario de descuentos duros</h3>
    <table class="mini-table full"><tr><th>Fecha</th><th>Nivel</th><th>Nota</th></tr>${cal}</table>
    <h3 class="sect">🏬 Los 4 destinos</h3><div class="cards">${outlets}</div>
    <div class="intro-card"><h4>🎯 Estrategia recomendada (5 ene)</h4><ul class="tight">
      <li>9:30 llegada a Vineland → Disney Character Warehouse PRIMERO (se agota lo mejor).</li>
      <li>Comparar siempre con app SIMON+ (cupones extra apilables con clearance).</li>
      <li>13:00 almuerzo proteico barato (Bolay/Chipotle) → 15:00 International Premium Outlets.</li>
      <li>19:00 cena Cafe Mineiro: rodizio ilimitado, premio del día.</li>
      <li>Regla de oro: si no es ≥40% de descuento sobre precio normal, no es hard discount.</li>
      <li>Sin auto: 2 Uber/Lyft al primer outlet (~$12-18 por vehículo) y de ahí a I-Drive (~$10); I-Drive queda a ~2 mi del hotel, ideal para una segunda vuelta rápida.</li>
    </ul></div>`;
}

/* ---------- TAB: MI PLAN ---------- */
function renderMiPlan(){
  const items = [...plan].map(findItem).filter(Boolean);
  const acts = items.filter(i=>ACTIVIDADES.includes(i));
  const foods = items.filter(i=>COMIDA.includes(i));
  const total = items.reduce((s,i)=>s+groupCost(i),0);
  const row = i=>`<li class="plan-row"><span>${esc(i.name)} <em class="pp">(${esc(PARQUES[i.park]||i.zone)})</em></span>
    <span><strong>${money(groupCost(i))}</strong> <button class="btn btn-plan in-plan" data-plan="${i.id}">✖</button></span></li>`;
  $("#tab-miplan").innerHTML = `<div class="intro-card"><h2>⭐ Mi Plan · ${groupSize()} personas</h2>
    <p>Tus selecciones se guardan en este navegador (offline, sin cuenta). Costos estimados para tu grupo configurado arriba.</p></div>
    ${items.length===0?`<div class="intro-card"><p>Aún no has agregado nada. Ve a 🎢 Actividades o 🍗 Comida y marca ⭐ Mi Plan.</p></div>`:""}
    ${acts.length?`<h3 class="sect">🎢 Actividades (${acts.length})</h3><ul class="plan-list">${acts.map(row).join("")}</ul>`:""}
    ${foods.length?`<h3 class="sect">🍗 Comida (${foods.length})</h3><ul class="plan-list">${foods.map(row).join("")}</ul>`:""}
    ${items.length?`<div class="total-bar">Total estimado de tu selección: <strong>${money(total)}</strong> · ~${money(total/Math.max(1,groupSize()))} por persona
      <button class="btn btn-ghost" id="btn-clear-plan">🗑️ Vaciar plan</button>
      <button class="btn" onclick="window.print()">🖨️ Imprimir</button></div>`:""}`;
  const clr = $("#btn-clear-plan");
  if(clr) clr.addEventListener("click", ()=>{ if(confirm("¿Vaciar todo el plan?")){ plan.clear(); saveState(); updateBadge(); renderMiPlan(); }});
}

/* ---------- TAB: PREPARACIÓN (vencimientos + checklist + mapas) ---------- */
let checks = {};
try{ const c = JSON.parse(localStorage.getItem("orlando2027check")||"{}"); if(c&&typeof c==="object"&&!Array.isArray(c)) checks = c; }catch(e){}
function renderPrep(){
  const today = new Date(); today.setHours(0,0,0,0);
  const venc = VENCIMIENTOS.map(v=>{
    const d = Math.round((new Date(v.f+"T12:00:00")-today)/86400000);
    const cls = d<0?"v-past":d===0?"v-today":d<=14?"v-soon":"";
    const when = d<0?`hace ${-d} días`:d===0?"¡HOY!":`en ${d} días`;
    return `<tr class="${cls}"><td class="tl-time">${esc(v.f)}</td><td>${esc(v.label)}</td><td class="v-when">${when}</td></tr>`;
  }).join("");
  let total=0, done=0;
  const secs = PREVIAJE.map(s=>{
    const items = s.items.map(it=>{
      total++; const on = !!checks[it.id]; if(on) done++;
      return `<label class="chk-row ${on?"done":""}"><input type="checkbox" data-chk="${it.id}" ${on?"checked":""}>
        <span class="chk-t">${esc(it.t)}</span>${it.w?`<span class="chk-when">${esc(it.w)}</span>`:""}</label>`;
    }).join("");
    const dn = s.items.filter(i=>checks[i.id]).length;
    return `<h3 class="sect">${esc(s.sec)} <span class="sec-progress">${dn}/${s.items.length}</span></h3>${items}`;
  }).join("");
  const mapas = MAPAS.map(m=>`<article class="card"><h4>🗺️ ${esc(m.name)}</h4><p class="muted">${esc(m.note)}</p>
    <p><a href="${esc(m.url)}" target="_blank" rel="noopener">Abrir mapas oficiales ↗</a></p></article>`).join("");
  $("#tab-prep").innerHTML = `<div class="intro-card"><h2>📋 Preparación del viaje</h2>
    <p>Todo lo que hay que reservar, comprar, verificar y empacar — con fechas exactas. Progreso: <strong>${done}/${total}</strong> tareas completadas. Los checkboxes se guardan en este navegador.</p></div>
    <h3 class="sect">⏳ Vencimientos en orden cronológico</h3><table class="timeline full">${venc}</table>
    ${secs}
    <h3 class="sect">🗺️ Mapas oficiales (descargar el PDF y guardarlo offline en el teléfono)</h3><div class="cards">${mapas}</div>
    <button class="btn btn-ghost" id="btn-reset-check">↺ Reiniciar checklist</button>`;
  $("#tab-prep").querySelectorAll("[data-chk]").forEach(c=>c.addEventListener("change",()=>{
    if(c.checked) checks[c.dataset.chk] = true; else delete checks[c.dataset.chk];
    localStorage.setItem("orlando2027check", JSON.stringify(checks)); renderPrep();
  }));
  const rst = $("#btn-reset-check");
  if(rst) rst.addEventListener("click",()=>{ if(confirm("¿Reiniciar todo el checklist?")){ checks={}; localStorage.setItem("orlando2027check","{}"); renderPrep(); }});
}

/* ---------- TAB: PRESUPUESTO (totalizador editable) ---------- */
let budget = {};
try{ const b = JSON.parse(localStorage.getItem("orlando2027budget")||"{}"); if(b&&typeof b==="object"&&!Array.isArray(b)) budget = b; }catch(e){}
/* v7: programas de ahorro activados (suscripciones, apps de fidelidad, bundles) */
let saves = {};
try{ const s = JSON.parse(localStorage.getItem("orlando2027save")||"{}"); if(s&&typeof s==="object"&&!Array.isArray(s)) saves = s; }catch(e){}
function renderPresupuesto(){
  let total = 0;
  const secs = PRESUPUESTO.map(s=>{
    const rows = s.items.map(it=>{
      const v = budget[it.id]; const amt = (typeof v==="number" && isFinite(v)) ? v : it.amt; total += amt;
      return `<div class="bud-row"><div><strong>${esc(it.label)}</strong><div class="bud-note">${esc(it.note)}</div></div>
        <input type="number" min="0" step="10" data-bud="${it.id}" value="${amt}"></div>`;
    }).join("");
    return `<h3 class="sect">${esc(s.sec)}</h3>${rows}`;
  }).join("");
  const svN = AHORRO.reduce((n,s)=>n+s.items.length,0);
  let pot = 0, act = 0, cnt = 0;
  const svSecs = AHORRO.map(s=>{
    const cards = s.items.map(it=>{
      pot += it.save;
      if(saves[it.id]){ act += it.save; cnt++; }
      return `<article class="card"><div class="card-top"><h4>${esc(it.prog)}</h4>
        <label class="save-toggle"><input type="checkbox" data-save="${it.id}" ${saves[it.id]?"checked":""}> Activado</label></div>
        <div class="chips"><span class="chip">${esc(it.costo)}</span>${it.save>0?`<span class="chip hype">💰 Ahorra ~$${it.save}</span>`:`<span class="chip">✅ Ya incluido</span>`}</div>
        <p class="pnote">${esc(it.d)}</p>
        ${it.url?`<div class="chips link-chips"><a class="chip res" href="${esc(it.url)}" target="_blank" rel="noopener" title="Abrir el registro oficial">🔗 Registrarse</a></div>`:""}
      </article>`;
    }).join("");
    return `<h3 class="sect">${esc(s.sec)}</h3><div class="cards">${cards}</div>`;
  }).join("");
  $("#tab-presupuesto").innerHTML = `<div class="intro-card"><h2>💰 Presupuesto total del viaje</h2>
    <p>Estimaciones EDITABLES para ${groupSize()} personas (montos = total del grupo; no incluye vuelos ni hotel salvo que los agregues). Todo se guarda en este navegador: ajusta a los precios reales a medida que reserves.</p></div>
    ${secs}
    <h3 class="sect">🏷️ Ahorro inteligente: suscripciones, apps y programas de fidelidad</h3>
    <div class="intro-card"><p>Todo aquí es gratis o se paga solo: baja costos SIN bajar calidad (mismo parque, misma cena, menor precio). Marca <strong>Activado</strong> cuando completes cada registro. Potencial total: <strong>~${money(pot)}</strong> · activado hasta ahora: <strong>~${money(act)}</strong> (${cnt}/${svN} programas).</p></div>
    ${svSecs}
    <div class="total-bar">Total estimado del viaje: <strong>${money(total)}</strong> · ~${money(total/Math.max(1,groupSize()))} por persona${act?` · con el ahorro activado: <strong>≈ ${money(Math.max(0,total-act))}</strong>`:""}
      <button class="btn btn-ghost" id="btn-reset-budget">↺ Restablecer estimaciones</button>
      <button class="btn" onclick="window.print()">🖨️ Imprimir</button></div>`;
  $("#tab-presupuesto").querySelectorAll("[data-bud]").forEach(inp=>inp.addEventListener("change",()=>{
    const v = +inp.value; if(isFinite(v)&&v>=0) budget[inp.dataset.bud] = v; else delete budget[inp.dataset.bud];
    localStorage.setItem("orlando2027budget", JSON.stringify(budget)); renderPresupuesto();
  }));
  $("#tab-presupuesto").querySelectorAll("[data-save]").forEach(c=>c.addEventListener("change",()=>{
    if(c.checked) saves[c.dataset.save] = true; else delete saves[c.dataset.save];
    localStorage.setItem("orlando2027save", JSON.stringify(saves)); renderPresupuesto();
  }));
  const rb = $("#btn-reset-budget");
  if(rb) rb.addEventListener("click",()=>{ if(confirm("¿Restablecer todas las estimaciones?")){ budget={}; saves={}; localStorage.setItem("orlando2027budget","{}"); localStorage.setItem("orlando2027save","{}"); renderPresupuesto(); }});
}

/* ---------- arranque ---------- */
function renderAll(){
  $("#group-total").textContent = `= ${groupSize()} personas (${group.adults+group.kids10} pagan tarifa adulta)`;
  renderItinerario(); renderActividades(); renderComida(); renderSnacks(); renderShows();
  renderNYE(); renderCompras(); renderInfo(); renderMiPlan(); renderPrep(); renderPresupuesto(); renderCountdown(); updateBadge();
}
$("#btn-print").addEventListener("click", ()=>window.print());
initTabs(); initGroup(); renderAll();


