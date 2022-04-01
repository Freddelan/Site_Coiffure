var titre = new Typed(".typed", {
  strings: ["Coucou, Gwendoline, c est, moi!"],
  typeSpeed: 80,
  backSpeed: 80,
  typewrite: 30,
  smartBackspace: true, // this is a default
  loop: true,
});

$("#gwen2").on({
  click: function () {
    $("#gwen2").attr("src", "photos_coiffure/gwen9.jpg");
  },
});
