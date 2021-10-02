var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');
var timerEl = $("#timer-container");
var projectTypeEl = $("#project-type");
var rateEl = $("#rate");

var printSkills = function (name, date, rateInput,  projectTypeInput) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listDetail = listDetail.concat(',  ', rateInput);
  listDetail = listDetail.concat(',  ', projectTypeInput);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();
  var rateInput = rateEl.val();
  var projectTypeInput = projectTypeEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput, rateInput,  projectTypeInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);



// Add Datepicker widget here
//
$( "#datepicker" ).datepicker();

$( function() {
  $( "#dialog" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
    // Add Autocomplete widget here
    //
    $( function() {
      var availableTags = [
        "donation",
        "acting",
        "public speaking"
      ];
      $( "#skill-name" ).autocomplete({
        source: availableTags
      });
    } );
  });
} );
setInterval(function(){
  timerEl.text(moment().format("LL h:m:sa"));
}, 1000);
