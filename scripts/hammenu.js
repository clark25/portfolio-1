function openMenu() {
  var collapsenav = document.getElementById("collapsenav");
  var hambutton = document.getElementById("hambutton");
  var navbar = document.getElementById("navbar");

  collapsenav.classList.toggle('active');
  hambutton.classList.toggle('active');
  navbar.classList.toggle('active');
}