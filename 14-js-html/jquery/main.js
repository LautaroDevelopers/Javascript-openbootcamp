// $(selector).accion()

// $("li").show();
// $("h1").hide();

// $(document.ready(() => {

// }))

$(() => {
  // info: Selectores:
  // note: id="hide" -> $("#hide")
  // note: class="hide" -> $(".hide")
  $("#hide").click(() => {
    // $("h1").hide();
    $("h1").fadeOut();
  });

  $("#show").click(() => {
    // $("h1").show();
    $("h1").fadeIn();
  });

  $("li").dblclick(() => {
    $("h1").css("color", "red");
  });

  $("#add").click(() => {
    $("ul").prepend("<li>Elemento nuevo</li>");
  });

  $("li").mouseenter((elem) => {
    elem.target.style.color = "red";
  });

  $("li").mouseleave((elem) => {
    elem.target.style.color = "black";
  });
});
