$(document).ready(function() {
  var addButton = $("#add-button"); 
  var taskInput = $("#task-input"); 
  var successTaskButton = $(".success-task-button");

  addButton.on("click", function() { 
    var task = taskInput.val(); 
    if (task == "") {
      
      alert("Fill the task"); 
    } else {
      $("#all-tasks").append(
        '<div class="input-group mb-3 full-task"><input type="text" class="form-control single-task-input" value="' +
          task +
          '" disabled><div class="input-group-append"><button class="btn btn-outline-secondary success-task-button" type="button"><i class="fas fa-check"></i></button><button class="btn btn-outline-secondary remove-task-button" type="button"><i class="fas fa-times"></i></button></div></div >'
      );
      taskInput.val(""); 
    }
  });

  $("body").on("click", ".success-task-button", function() {

    var fullTask = $(this).parents()[1];
    var singleInput = $(fullTask).find(".single-task-input");
    singleInput.css("background-color", "lightpink");
    singleInput.css("color", "gray");
    singleInput.css("text-align", "center");

    var groupButton = $(this).parents()[0];
    $(groupButton).remove();
  });

  $("body").on("click", ".remove-task-button", function() {
    alert("Task deleted");
    var fullTask = $(this).parents()[1];
    $(fullTask).remove();
  });
});
