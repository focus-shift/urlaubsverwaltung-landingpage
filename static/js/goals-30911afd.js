window.addEventListener("click",function(t){if(typeof plausible=="function"){const{goal:i,goalTrigger:e}=t.target.dataset;i&&plausible(i,{props:{trigger:e}})}});
