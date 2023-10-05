let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger");
let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");

ham.style.display = "none";

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidehide");
  if (sidebar.classList.contains("sidehide")) {
    cross.style.display = "none";
    ham.style.display = "block";
  }else{
    cross.style.display = "block";
    ham.style.display = "none";

  }
});
// moreabout.addEventListener(() =>{
// document.write.DocumentTimeline(2);
// });
