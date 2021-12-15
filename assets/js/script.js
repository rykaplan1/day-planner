const today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do'));

for (let i = 9; i <= 17; i++) {
  let hour;
  let timeClass;
  let event = '';

  if (i < 12) {
    hour = `${i}AM`;
  } else if (i === 12) {
    hour = '12PM'
  } else {
    hour = `${i - 12}PM`;
  }

  if (i < today.hour()) {
    timeClass = "past";
  } else if (i === today.hour()) {
    timeClass = "present";
  } else {
    timeClass = "future";
  }

  if (localStorage.getItem(i)) {
    event = localStorage.getItem(i);
  }

  const rowHTML = `
  <div class="row time-block">
    <div class="hour col-1" data-hour="${i}"><br>${hour}</div>
    <textarea class="description col-10 ${timeClass}">${event}</textarea>
    <div class="saveBtn col-1"><i class="fas fa-save"></i></div>
  </div>
`;
  $(".container").append(rowHTML); 
}

$("textarea").click(function(){
  $(this).siblings('.saveBtn').css('color', 'white');
});

$(".saveBtn").click(function(){
  const saveHour = $(this).siblings('.hour').data('hour');
  const event = $(this).siblings('textarea').val();
  localStorage.setItem(saveHour, event);
  $(this).css('color', 'lightgray');
});
