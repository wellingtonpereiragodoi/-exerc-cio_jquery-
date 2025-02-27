$(document).ready(function () {
  loadTasks();

  $("#addTaskBtn").on("click", function () {
    var taskText = $("#taskInput").val();
    if (taskText.trim() !== "") {
      addTask(taskText);
      saveTasks();
      $("#taskInput").val("");
    }
  });

  $(document).on("click", "li", function () {
    $(this).toggleClass("completed");
    saveTasks();
  });

  $(document).on("click", "span", function (e) {
    e.stopPropagation();
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
        saveTasks();
      });
  });

  function addTask(text) {
    $("#taskList").append("<li><span>&times;</span>" + text + "</li>");
  }

  function loadTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
      $("#taskList").html(tasks);
    }
  }

  function saveTasks() {
    var tasks = $("#taskList").html();
    localStorage.setItem("tasks", tasks);
  }
});
