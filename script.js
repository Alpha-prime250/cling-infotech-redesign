const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',e=>{if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
  const el=e.target,t=+el.dataset.count,s=performance.now(),d=1600,plus=t<100000?'+':'';
  (function f(n){const p=Math.min((n-s)/d,1),v=Math.round(t*(1-Math.pow(1-p,3)));
   el.textContent=v.toLocaleString('en-US')+(p===1?plus:'');if(p<1)requestAnimationFrame(f)})(s)}),{threshold:.6});
 document.querySelectorAll('[data-count]').forEach(el=>io.observe(el));
}
