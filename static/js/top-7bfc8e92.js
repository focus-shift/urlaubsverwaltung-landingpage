(function(){const e=document.querySelector("a[href='#top']"),t=e.parentNode,n=document.querySelector("#top");t.classList.remove("hidden"),t.classList.add("transform","transition-transform","translate-y-full"),window.addEventListener("scroll",function(){window.scrollY>window.innerHeight?t.classList.remove("translate-y-full"):t.classList.add("translate-y-full")},{passive:!0}),e.addEventListener("click",function(o){n.scrollIntoView({behavior:"smooth"}),o.preventDefault()})})();