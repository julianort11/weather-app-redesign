addEventListener("scroll", (e)=>{
    console.log(window.scrollY);
    const header = document.querySelector("header");
    const navbar = document.querySelector("#navbar");
    const input = document.querySelector(".div__icon input");
    const imgIcon = document.querySelector(".div__icon img");
    const h1 = document.querySelector(".div__title h1");
    const spanTitle = document.querySelector(".div__title span");
    const img = document.querySelector(".div__image img");
    const span = document.querySelector(".div__image span");
    const div__footer = document.querySelector("#div__footer");

    if (window.scrollY > 20) {
         navbar.style.height = "220px";
         header.style.height = "220px";
         navbar.style.backgroundImage = "none"; 
         navbar.style.backgroundColor = "var(--card-1)";
         navbar.style.borderRadius = "0px"; 
         navbar.style.justifyContent = "flex-start"; 
         navbar.style.gap = "15px"; 
         input.style.color = "var(--color-2)";
         imgIcon.src = "storage/img/search_black.png"
         h1.style.fontSize = "57px";
         h1.style.color = "var(--color-2)";
         spanTitle.style.color = "var(--color-2)";
         img.style.width = "77.5px";
         img.style.height = "77.5px";
         span.style.display = "none";
         div__footer.style.display = "none";
     } else {
         navbar.removeAttribute("style");
         header.removeAttribute("style");
         input.removeAttribute("style");
         imgIcon.src = "storage/img/search_white.png"
         h1.removeAttribute("style");
         spanTitle.removeAttribute("style");
     
         img.removeAttribute("style");
         span.removeAttribute("style");
         div__footer.removeAttribute("style");
     }
})