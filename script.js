document.getElementById("year").textContent=new Date().getFullYear();
const btn=document.getElementById("menuBtn"),menu=document.getElementById("menu");
btn.addEventListener("click",()=>menu.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));