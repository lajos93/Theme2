$( document ).ready(function() {
	if($('body').hasClass('home')){
	function getTimeRemaining(endtime) {

     // Date.parse() function is native JavaScript that converts a time string into a value in milliseconds.
     var t = Date.parse(endtime) - Date.parse(new Date());

     // Convert the milliseconds to days, hours, minutes, and seconds.
     var seconds = Math.floor((t / 1000) % 60);
     var minutes = Math.floor((t / 1000 / 60) % 60);
     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    
     // Return the data as a reusable object
     return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
     };
  }

  function initializeClock(id, endtime, title) {
     var clock = document.getElementById(id);
     var banner = document.getElementById('headline');

     //This will cause the clock to only display once the initializeClock function is called:
     clock.style.display = 'inline-block';

     // Getting a reference to HTML elements
     var hoursSpan = clock.querySelector('.hours');
     var minutesSpan = clock.querySelector('.minutes');
     var secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
        var t = getTimeRemaining(endtime);

        // Update only the numbers in <span> instead of rebuilding the whole clock
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2); // Add Leading Zeros
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); // Add Leading Zeros
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); // Add Leading Zeros

        if (t.total <= 0) {
           clearInterval(timeinterval);
           location.reload();
        }
     }

     updateClock(); // Run function once at first to avoid delay
     var timeinterval = setInterval(updateClock, 1000);
  }

  //Each element in the schedule array represents a start date, end date and a title
  var n = new Date();
  var day = n.getDate();
  var month = n.getMonth() + 1;
  var year = n.getFullYear();
  var schedule = [
     [month + '/' + day + '/' + year + ' 00:00:00 GMT+0100', month + '/' + day + '/' + year + ' 12:00:00 GMT+0100', 'Question 1 in:'],    
     [month + '/' + day + '/' + year + ' 12:00:00 GMT+0100', month + '/' + day + '/' + year + ' 14:00:00 GMT+0100', 'Question 3 in:'],      
     [month + '/' + day + '/' + year + ' 14:00:00 GMT+0100', month + '/' + day + '/' + year + ' 16:00:00 GMT+0100', 'Question 4 in:'],      
     [month + '/' + day + '/' + year + ' 16:00:00 GMT+0100', month + '/' + day + '/' + year + ' 18:00:00 GMT+0100', 'Question 5 in:'],      
     [month + '/' + day + '/' + year + ' 18:00:00 GMT+0100', month + '/' + day + '/' + year + ' 20:00:00 GMT+0100', 'Question 6 in:'],
     [month + '/' + day + '/' + year + ' 20:00:00 GMT+0100', month + '/' + day + '/' + year + ' 22:00:00 GMT+0100', 'Question 6 in:'],  
     [month + '/' + day + '/' + year + ' 22:00:00 GMT+0100', month + '/' + day + '/' + year + ' 23:59:59 GMT+0100', 'Question 6 in:'],   
  ];

  // Iterate over each element in the schedule
  for(var i=0; i<schedule.length; i++){
     var startDate = schedule[i][0];
     var endDate = schedule[i][1];
     var title = schedule[i][2];

     // Put dates in milliseconds for easy comparisons
     var startMs = Date.parse(startDate);
     var endMs = Date.parse(endDate);
     var currentMs = Date.parse(new Date());
     
     // If current date is between start and end dates, display clock
     if(endMs > currentMs && currentMs >= startMs ){
        initializeClock('clockdiv', endDate, title);
     }

   }  
  }
});