// var dt = new Date();
// document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()+1).slice(-2)) +":"+ (("0"+dt.getMinutes()+1).slice(-2));

$(document).ready(()=> { 
    $('.login').on('click', () => { $('.card').toggle(); });
});

// var today = new Date();
// document.getElementById('time').innerHTML=today;


$(document).ready(function(){
    function getdate(){ 
    
       var today = new Date();
       var h = today.getHours();
       var m = today.getMinutes();
       var s = today.getSeconds();
        if(s<10){
            s = "0"+s;
        }

       $(".myres00").text(h+" : "+m+" : "+s);
        setTimeout(function(){getdate()}, 500);
        } 

  getdate();
});

function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    if(document.getElementById("_name").value)
        x=document.getElementById("_name").value;
    alert(x);
    console.log(x);
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) ) {
        // text = "Input not valid";
    } else {
        alert("Input not valid");
    }

    if(x == null)
        alert("Input not valid");

    // document.getElementById("_message").innerHTML = text;
}

// function changeValue() {
//     document.getElementById("demo").innerHTML = ++value;
//   }
  
//   var timerInterval = null;
//   function start() {
//     value = 0;
//     timerInterval = setInterval(changeValue, 1000);  
//   }


 
 
// var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

