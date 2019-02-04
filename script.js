$(document).ready(function() {// to musi być zawsze?
  var addButton = $("#add-button"); //przypisujemy zmiennej addButton id z html, $ oznacza ze weszło to do funkcji jQuery?
  var taskInput = $("#task-input"); 
  var successTaskButton = $(".success-task-button");

  addButton.on("click", function() { // na kliknięcie wywoła się funkcja, nie musimy jej wcześniej jakoś stworzyć?
    var task = taskInput.val(); // Zbieramy wartoć z taskInput, nie musimy wcześniej stworzyć zmiennej task?
    if (task == "") {
      // Sprawdz czy wartoć taskInput jest pusta
      alert("Uzupenij poprawnie zadanie"); // Jeżeli tak to doda się pole do którego zostanie dodana wartość wpisana
    } else {
      $("#all-tasks").append(//czemu #all-taska nie wpisujemy jak np addButton?
        '<div class="input-group mb-3 full-task"><input type="text" class="form-control single-task-input" value="' +
          task +
          '" disabled><div class="input-group-append"><button class="btn btn-outline-secondary success-task-button" type="button"><i class="fas fa-check"></i></button><button class="btn btn-outline-secondary remove-task-button" type="button"><i class="fas fa-times"></i></button></div></div >'
      );
      taskInput.val(""); //czyści
    }
  });

  $("body").on("click", ".success-task-button", function() {// a tak mogło by być? succes-task-button.on("click", function()......)
    alert("Zadanie wykonano");

    var fullTask = $(this).parents()[1];//this parents nie rozumiem do końca :()
    var singleInput = $(fullTask).find(".single-task-input");
    singleInput.css("background-color", "lightpink");
    singleInput.css("color", "gray");
    singleInput.css("text-align", "center");

    var groupButton = $(this).parents()[0];//skąd 0 i 1
    $(groupButton).remove();
  });

  $("body").on("click", ".remove-task-button", function() {//czemu ta klasa nie jest wczesniej przypisana przez var?
    //Kliknicie w dynamicznie dodany element
    alert("Zadanie usunieto");
    var fullTask = $(this).parents()[1];// 
    $(fullTask).remove();
  });
});
//kiedy maja byc te dolary??