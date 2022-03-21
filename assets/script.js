var currentDayEl = $('#currentDay')
var timeblockContainerEl = $('.container')
var hour1El = moment().hour(9).format('HH');
var hour2El = moment().hour(10).format('HH');
var hour3El = moment().hour(11).format('HH');
var hour4El = moment().hour(12).format('HH');
var hour5El = moment().hour(13).format('HH');
var hour6El = moment().hour(14).format('HH');
var hour7El = moment().hour(15).format('HH');
var hour8El = moment().hour(16).format('HH');
var hour9El = moment().hour(17).format('HH');
var description1El = $('.description1');
var description2El = $('.description2');
var description3El = $('.description3');
var description4El = $('.description4');
var description5El = $('.description5');
var description6El = $('.description6');
var description7El = $('.description7');
var description8El = $('.description8');
var description9El = $('.description9');
var saveButtonEl =  $('.saveBtn');



// Displays current Date
currentDayEl.text(moment().format('dddd, MMMM Do YYYY'));

// This function changes background color by adding class
function backgroundColor() {
    var currentTime = moment().format('HH');

    if (hour1El < currentTime) {
        description1El.addClass('past');
    } else if (hour1El === currentTime) {
        description1El.addClass('present');
    } else if (hour1El > currentTime) {
        description1El.addClass('future');
    }

    if (hour2El < currentTime) {
        description2El.addClass('past');
    } else if (hour2El === currentTime) {
        description2El.addClass('present');
    } else if (hour2El > currentTime) {
        description2El.addClass('future');
    }

    if (hour3El < currentTime) {
        description3El.addClass('past');
    } else if (hour3El === currentTime) {
        description3El.addClass('present');
    } else if (hour3El > currentTime) {
        description3El.addClass('future');
    }

    if (hour4El < currentTime) {
        description4El.addClass('past');
    } else if (hour4El === currentTime) {
        description4El.addClass('present');
    } else if (hour4El > currentTime) {
        description4El.addClass('future');
    }
    
    if (hour5El < currentTime) {
        description5El.addClass('past');
    } else if (hour5El === currentTime) {
        description5El.addClass('present');
    } else if (hour5El > currentTime) {
        description5El.addClass('future');
    }
    
    if (hour6El < currentTime) {
        description6El.addClass('past');
    } else if (hour6El === currentTime) {
        description6El.addClass('present');
    } else if (hour6El > currentTime) {
        description6El.addClass('future');
    }
    
    if (hour7El < currentTime) {
        description7El.addClass('past');
    } else if (hour7El === currentTime) {
        description7El.addClass('present');
    } else if (hour7El > currentTime) {
        description7El.addClass('future');
    }
    
    if (hour8El < currentTime) {
        description8El.addClass('past');
    } else if (hour8El === currentTime) {
        description8El.addClass('present');
    } else if (hour8El > currentTime) {
        description8El.addClass('future');
    }
    
    if (hour9El < currentTime) {
        description9El.addClass('past');
    } else if (hour9El === currentTime) {
        description9El.addClass('present');
    } else if (hour9El > currentTime) {
        description9El.addClass('future');
    }
}

// Function to get and render events from local storage
function renderSavedEvents() {
    var lastSavedEvent1 = localStorage.getItem('event1');
    $('.description1').text(lastSavedEvent1);

    var lastSavedEvent2 = localStorage.getItem('event2');
    $('.description2').text(lastSavedEvent2);

    var lastSavedEvent3 = localStorage.getItem('event3');
    $('.description3').text(lastSavedEvent3);

    var lastSavedEvent4 = localStorage.getItem('event4');
    $('.description4').text(lastSavedEvent4);

    var lastSavedEvent5 = localStorage.getItem('event5');
    $('.description5').text(lastSavedEvent5);

    var lastSavedEvent6 = localStorage.getItem('event6');
    $('.description6').text(lastSavedEvent6);

    var lastSavedEvent7 = localStorage.getItem('event7');
    $('.description7').text(lastSavedEvent7);

    var lastSavedEvent8 = localStorage.getItem('event8');
    $('.description8').text(lastSavedEvent8);

    var lastSavedEvent9 = localStorage.getItem('event9');
    $('.description9').text(lastSavedEvent9);
}

// Click event to save inputs to local storage
saveButtonEl.on('click', function(event) {
    event.preventDefault();
    var textInput1 = $('.description1').val().trim();
    localStorage.setItem('event1', textInput1);

    var textInput2 = $('.description2').val().trim();
    localStorage.setItem('event2', textInput2);

    var textInput3 = $('.description3').val().trim();
    localStorage.setItem('event3', textInput3);

    var textInput4 = $('.description4').val().trim();
    localStorage.setItem('event4', textInput4);

    var textInput5 = $('.description5').val().trim();
    localStorage.setItem('event5', textInput5);

    var textInput6 = $('.description6').val().trim();
    localStorage.setItem('event6', textInput6);

    var textInput7 = $('.description7').val().trim();
    localStorage.setItem('event7', textInput7);

    var textInput8 = $('.description8').val().trim();
    localStorage.setItem('event8', textInput8);

    var textInput9 = $('.description9').val().trim();
    localStorage.setItem('event9', textInput9);

    renderSavedEvents();
})

// Initiate functions at page open
backgroundColor();
renderSavedEvents();
