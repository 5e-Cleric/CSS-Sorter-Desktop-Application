window.onload = function () {
  document.getElementById("sort").addEventListener("click", function () {
    sort();
  });

  document.getElementById("clear").addEventListener("click", function() {
    document.querySelectorAll(".converterparent textarea").forEach((textarea) => {
        textarea.value = "";
    });
  });


  let buttons = document.querySelectorAll("button:enabled");

  buttons.forEach((button) => {
    button.addEventListener('click', function() { clickEffect(this);});
  });


};
