$(function () {
  $('.add-todo').on('click', function () {
    var newTodo = $('.todo').first().clone().appendTo('.todo-list');
    newTodo.find('.todo-text').val('');
    newTodo.appendTo('.todo-list');
  });
});
