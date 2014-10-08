$(document).ready(function(){
   $('#new-todo').keypress(function(evt) {
      if(evt.keyCode === 13) {
         newItem();
      }
   });
$("#todo-list").click(function(event){
   event.preventDefault();
   clearComp();
})

function newItem() {
   var text = $.trim($('#new-todo').val());
   if(text.length){ // Stop the enter tasks if the input its blank and the enter key (13) is pressed.
      $('#todo-list').prepend('<li class="change">'+text+'<button class="destroy"></button></li>');
      countItems()
      $('.change').unbind('click');
      $('.change').click(function() {
      var todo = $(this);
      todo.toggleClass('completed'); 
   });
      $('.change').dblclick(function(e){
         e.stopPropagation();
         $(this).val();
      })
      $('.destroy').click(function(){
         $(this).parent().remove();
         destroyItems();
      });
      $('#todo_form')[0].reset();
      $('#new-todo').val('');

      //clearComp();
   }
}

function countItems(){
   var count = $('.change').length;
   $('#footer').css('display', 'block');
   $('#todo-count').html('<strong>'+count+'</strong> items');
}

function destroyItems(){
   var count = $('.change').length;
   // console.log(count);
   $('#todo-count').html('<strong>'+count+'</strong> items');
   if(count == 0)   $('#footer').css('display', '');
}

function clearComp(){
   var clear = $('#clear-completed');
   var count = $("#todo-list li.completed").length;
   $(clear).html('Clear Completed ('+count+')');
   
   console.log(count);

   $('#clear-completed').click(function(){
      var comp = $('.completed');
      if($(this).find(comp)) {
         comp.remove();
         console.log(comp);
      }
})

}

});