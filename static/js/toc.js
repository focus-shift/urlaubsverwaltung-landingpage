(()=>{var o=[...document.querySelectorAll(".wissensbasis-content h2, .wissensbasis-content h3")];window.addEventListener("DOMContentLoaded",()=>{let e=new IntersectionObserver(t=>{t.forEach(r=>{let n=r.target.getAttribute("id");r.intersectionRatio>0?document.querySelector(`a[href="#${n}"]`).setAttribute("aria-current","location"):document.querySelector(`a[href="#${n}"]`).removeAttribute("aria-current")})});o.forEach(t=>{e.observe(t)})});window.addEventListener("click",function(e){if(e.target.tagName==="A"&&e.target.parentNode.classList.contains("toc-menu-item")){let t=document.querySelector("#"+e.target.href.split("#")[1]);t&&(t.scrollIntoView({behavior:"smooth"}),e.preventDefault())}});})();