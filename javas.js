
$(document).ready(()=> { 
    $('.login').on('click', () => { $('.card').toggle(); });
});



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

