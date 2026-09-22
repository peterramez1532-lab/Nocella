const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
const mobileMenu = document.getElementById("mobileMenu");

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(()=>toast.classList.remove("show"),2200);
}

document.querySelectorAll(".add-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    cartCount.textContent = Number(cartCount.textContent)+1;
    const name = btn.closest(".product").dataset.name;
    showToast(`${name} added to your cart ♥`);
  });
});

document.getElementById("cartBtn").addEventListener("click",()=>{
  const count = Number(cartCount.textContent);
  showToast(count ? `Your cart has ${count} item${count>1?"s":""}.` : "Your chocolate cart is empty ♥");
});

document.getElementById("searchBtn").addEventListener("click",()=>{
  const q = prompt("What chocolate are you looking for?");
  if(q) showToast(`Searching for "${q}"...`);
});

document.getElementById("viewAllBtn").addEventListener("click",()=>{
  document.querySelectorAll(".product").forEach((p,i)=>{
    p.style.display = "block";
    p.animate([{opacity:.3,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],{duration:450,delay:i*60,fill:"both"});
  });
  showToast("Showing our full collection ♥");
});

document.getElementById("storyBtn").addEventListener("click",()=>{
  showToast("Our story: made with love, one chocolate at a time.");
});

document.getElementById("menuBtn").addEventListener("click",()=>mobileMenu.classList.add("open"));
document.getElementById("closeMenu").addEventListener("click",()=>mobileMenu.classList.remove("open"));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));

document.getElementById("newsletter").addEventListener("submit",(e)=>{
  e.preventDefault();
  e.target.reset();
  showToast("Welcome to the Nocella family ♥");
});

document.querySelectorAll(".desktop-nav a").forEach(a=>{
  a.addEventListener("click",()=>{
    document.querySelectorAll(".desktop-nav a").forEach(x=>x.classList.remove("active"));
    a.classList.add("active");
  });
});
