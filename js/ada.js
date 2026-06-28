(function(){'use strict';function injectWidget(){const btn=document.createElement('button');btn.id='ada-widget-btn';btn.setAttribute('aria-label','Accessibility options');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls','ada-panel');btn.innerHTML=`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="4" r="2"/><path d="M10 22v-6m4 6v-6m-6-4l2-4h4l2 4m-8 0H6m12 0h-2"/></svg>`;document.body.appendChild(btn);const panel=document.createElement('div');panel.id='ada-panel';panel.setAttribute('role','region');panel.setAttribute('aria-label','Accessibility options panel');panel.innerHTML=`
      <h3>ACCESSIBILITY</h3>
      <div class="ada-control">
        <span>Text Size</span>
        <div class="ada-btn-group">
          <button class="ada-btn" data-ada="font-normal" aria-label="Normal text size">A</button>
          <button class="ada-btn" data-ada="font-large" aria-label="Large text size">A+</button>
          <button class="ada-btn" data-ada="font-xlarge" aria-label="Extra large text size">A++</button>
        </div>
      </div>
      <div class="ada-control">
        <span>Contrast</span>
        <div class="ada-btn-group">
          <button class="ada-btn" data-ada="contrast-normal" aria-label="Normal contrast">Normal</button>
          <button class="ada-btn" data-ada="contrast-high" aria-label="High contrast">High</button>
        </div>
      </div>
      <div class="ada-control">
        <span>Links</span>
        <div class="ada-btn-group">
          <button class="ada-btn" data-ada="links-normal" aria-label="Normal links">Normal</button>
          <button class="ada-btn" data-ada="links-underline" aria-label="Underline all links">Underline</button>
        </div>
      </div>
      <div class="ada-control">
        <span>Motion</span>
        <div class="ada-btn-group">
          <button class="ada-btn" data-ada="motion-normal" aria-label="Normal motion">Normal</button>
          <button class="ada-btn" data-ada="reduce-motion" aria-label="Reduce motion">Reduce</button>
        </div>
      </div>
      <div class="ada-control">
        <span>Color</span>
        <div class="ada-btn-group">
          <button class="ada-btn" data-ada="color-normal" aria-label="Normal color">Color</button>
          <button class="ada-btn" data-ada="grayscale" aria-label="Grayscale mode">Grayscale</button>
        </div>
      </div>
      <button class="ada-reset" id="ada-reset">Reset All</button>
    `;document.body.appendChild(panel);let state=loadState();applyState(state);markActive(state);btn.addEventListener('click',()=>{const open=panel.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));if(open){panel.querySelector('.ada-btn').focus();}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel.classList.contains('open')){panel.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus();}});document.addEventListener('click',e=>{if(!panel.contains(e.target)&&e.target!==btn){panel.classList.remove('open');btn.setAttribute('aria-expanded','false');}});panel.querySelectorAll('.ada-btn[data-ada]').forEach(b=>{b.addEventListener('click',()=>{const action=b.getAttribute('data-ada');state=handleAction(action,state);saveState(state);applyState(state);markActive(state);});});document.getElementById('ada-reset').addEventListener('click',()=>{state=defaultState();saveState(state);applyState(state);markActive(state);});}
function defaultState(){return{font:'normal',contrast:'normal',links:'normal',motion:'normal',color:'normal'};}
function loadState(){try{const s=localStorage.getItem('fr_ada');return s?Object.assign(defaultState(),JSON.parse(s)):defaultState();}catch(e){return defaultState();}}
function saveState(s){try{localStorage.setItem('fr_ada',JSON.stringify(s));}catch(e){}}
function handleAction(action,state){const s=Object.assign({},state);if(action.startsWith('font-'))s.font=action.replace('font-','');else if(action.startsWith('contrast-'))s.contrast=action.replace('contrast-','');else if(action.startsWith('links-'))s.links=action.replace('links-','');else if(action==='reduce-motion')s.motion='reduce';else if(action==='motion-normal')s.motion='normal';else if(action==='grayscale')s.color='grayscale';else if(action==='color-normal')s.color='normal';return s;}
function applyState(s){const b=document.body;b.classList.remove('ada-font-large','ada-font-xlarge');if(s.font==='large')b.classList.add('ada-font-large');if(s.font==='xlarge')b.classList.add('ada-font-xlarge');b.classList.remove('ada-contrast-high');if(s.contrast==='high')b.classList.add('ada-contrast-high');b.classList.remove('ada-links-underline');if(s.links==='underline')b.classList.add('ada-links-underline');b.classList.remove('ada-reduce-motion');if(s.motion==='reduce')b.classList.add('ada-reduce-motion');b.classList.remove('ada-grayscale');if(s.color==='grayscale')b.classList.add('ada-grayscale');}
function markActive(s){const panel=document.getElementById('ada-panel');if(!panel)return;panel.querySelectorAll('.ada-btn').forEach(b=>b.classList.remove('active'));const map={[`font-${s.font}`]:true,[`contrast-${s.contrast}`]:true,[`links-${s.links}`]:true,[s.motion==='reduce'?'reduce-motion':'motion-normal']:true,[s.color==='grayscale'?'grayscale':'color-normal']:true,};panel.querySelectorAll('.ada-btn[data-ada]').forEach(b=>{if(map[b.getAttribute('data-ada')])b.classList.add('active');});}
function initConsent(){const banner=document.getElementById('consent-banner');const accept=document.getElementById('consent-accept');const decline=document.getElementById('consent-decline');const settings=document.getElementById('consent-settings');const details=document.getElementById('consent-details');const save=document.getElementById('consent-save');const toggle=document.getElementById('analytics-toggle');if(!banner)return;const stored=localStorage.getItem('fr_consent');if(!stored){setTimeout(()=>{banner.classList.add('show');const firstBtn=banner.querySelector('button');if(firstBtn)firstBtn.focus();},1200);}else{const c=JSON.parse(stored);if(c.analytics)loadAnalytics();}
if(accept)accept.addEventListener('click',()=>{setConsent({essential:true,analytics:true});banner.classList.remove('show');loadAnalytics();});if(decline)decline.addEventListener('click',()=>{setConsent({essential:true,analytics:false});banner.classList.remove('show');});if(settings)settings.addEventListener('click',()=>{const open=!details.hidden;details.hidden=open;settings.setAttribute('aria-expanded',String(!open));settings.textContent=open?'Customize':'Hide Options';});if(save)save.addEventListener('click',()=>{const analytics=toggle?toggle.checked:false;setConsent({essential:true,analytics});banner.classList.remove('show');if(analytics)loadAnalytics();});}
function setConsent(prefs){localStorage.setItem('fr_consent',JSON.stringify({...prefs,ts:Date.now()}));}
function loadAnalytics(){console.log('[FR] Analytics consent granted');}
function initMain(){const toggle=document.getElementById('nav-toggle');const mobileMenu=document.getElementById('mobile-menu');if(toggle&&mobileMenu){toggle.addEventListener('click',()=>{const isOpen=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!isOpen));mobileMenu.classList.toggle('open');document.body.style.overflow=isOpen?'':'hidden';});mobileMenu.querySelectorAll('a').forEach(link=>{link.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');mobileMenu.classList.remove('open');document.body.style.overflow='';});});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobileMenu.classList.contains('open')){toggle.setAttribute('aria-expanded','false');mobileMenu.classList.remove('open');document.body.style.overflow='';toggle.focus();}});}
const currentPage=window.location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link=>{const href=link.getAttribute('href');if(href===currentPage||(currentPage===''&&href==='index.html')){link.classList.add('active');link.setAttribute('aria-current','page');}});document.querySelectorAll('.photo-slider').forEach(slider=>{const track=slider.querySelector('.photo-slider__track');const slides=slider.querySelectorAll('.photo-slider__slide');const wrap=slider.closest('.section')||slider.parentElement;const prevBtn=wrap.querySelector('.slider-btn--prev');const nextBtn=wrap.querySelector('.slider-btn--next');if(!track||!slides.length)return;let current=0;const visibleCount=()=>window.innerWidth<=480?1:window.innerWidth<=768?2:4;function goto(idx){const max=Math.max(0,slides.length-visibleCount());current=Math.max(0,Math.min(idx,max));const slideW=slides[0].offsetWidth+3;track.style.transform=`translateX(-${current * slideW}px)`;}
if(prevBtn)prevBtn.addEventListener('click',()=>goto(current-1));if(nextBtn)nextBtn.addEventListener('click',()=>goto(current+1));let auto=setInterval(()=>goto(current+1>slides.length-visibleCount()?0:current+1),4200);slider.addEventListener('mouseenter',()=>clearInterval(auto));slider.addEventListener('mouseleave',()=>{auto=setInterval(()=>goto(current+1>slides.length-visibleCount()?0:current+1),4200);});});if('IntersectionObserver'in window){const counters=document.querySelectorAll('[data-count]');const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const el=e.target;const target=parseInt(el.getAttribute('data-count'),10);const suffix=el.getAttribute('data-suffix')||'';const dur=1600;const start=performance.now();(function step(now){const p=Math.min((now-start)/dur,1);const eased=1-Math.pow(1-p,3);el.textContent=Math.floor(eased*target)+suffix;if(p<1)requestAnimationFrame(step);})(performance.now());cObs.unobserve(el);}});},{threshold:0.5});counters.forEach(c=>cObs.observe(c));}
const contactForm=document.getElementById('contact-form');if(contactForm){contactForm.addEventListener('submit',async e=>{e.preventDefault();const btn=contactForm.querySelector('[type="submit"]');const orig=btn.textContent;btn.textContent='Sending…';btn.disabled=true;await new Promise(r=>setTimeout(r,1400));const msg=document.getElementById('form-success');if(msg){msg.style.display='block';msg.focus();}
contactForm.reset();btn.textContent=orig;btn.disabled=false;});}}
document.addEventListener('DOMContentLoaded',()=>{setTimeout(()=>{injectWidget();initConsent();initMain();},50);});})();