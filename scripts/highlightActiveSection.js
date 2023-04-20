function highlightActiveSection() {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll(".navbar a");

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionBottom = sectionTop + sectionHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionBottom
    ) {
      var sectionId = section.getAttribute("id");
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightActiveSection);
