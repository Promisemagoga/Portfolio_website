//Get the button
let mybutton = document.getElementById("myBtn");

//when user scroolls down 20px from the top of the docoment, show the button
window.onscroll = function() {
    scrollFunction()
};


function scrollFunction(){
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display ="none";
    }
}

//when the user clicks thebutton,scroll to the top of the document
function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function menu(){
    var x = document.getElementById("myTopnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}



// function readMore() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("readMoreBtn");

//     if (dots.style.display === "none"){
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
       
//     }else{
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }