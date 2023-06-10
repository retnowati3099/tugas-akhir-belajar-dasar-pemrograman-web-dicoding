// membuat tulisan berjalan ketika hover
var i = 0;
var text = "Learn Code";
const typeWriter = () => {
  console.log(i);
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 10);
  }
};

// meremove tulisan berjalan ketika mouse keluar dari area yang dihover
const hideText = () => {
  document.getElementById("typing").innerHTML = "";
  i = 0;
};

// mengubah humberger menjadi silang dan menampilkan daftar menu
const menuFunction = () => {
  document.getElementById("hamburger").classList.toggle("change");
  document.getElementById("navbar").classList.toggle("show-navbar");
};



// membuat navigation bar memiliki box shadow di bagian bawah ketika scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    document.getElementById("header").classList.add("bottom-shadow");
  } else {
    document.getElementById("header").classList.remove("bottom-shadow");
  }
});
