const hide = document.getElementById('fixed-nav');
const close=document.getElementById("close");
const open=document.getElementById('secondlogo')

close.addEventListener('click',(event)=>{
    hide.style.visibility='hidden';
    enableScroll()
})

open.addEventListener('click',(event)=>{
    hide.style.visibility='visible';
    disableScroll()
})



function disableScroll() {
    document.body.classList.add("stop-scrolling");
    }

    function enableScroll() {
document.body.classList.remove("stop-scrolling");
    }