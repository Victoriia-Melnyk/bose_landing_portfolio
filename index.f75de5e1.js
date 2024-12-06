"use strict";
window.addEventListener("hashchange", ()=>{
    if (window.location.hash === "#menu") document.body.classList.add("page__body--with-menu");
    else document.body.classList.remove("page__body--with-menu");
});
const form = document.getElementById("myForm");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    form.reset();
});

//# sourceMappingURL=index.f75de5e1.js.map