$(document).ready(function(){
  //$(".card").hide ();

// Initialize Firebase
var config = {
  apiKey: "AIzaSyARvIGxvt3fdLueKbI6y0K8OPK5IIVcUss",
  authDomain: "fir-c8408.firebaseapp.com",
  databaseURL: "https://fir-c8408.firebaseio.com",
  projectId: "fir-c8408",
  storageBucket: "fir-c8408.appspot.com",
  messagingSenderId: "305536823044"
};
firebase.initializeApp(config);
var dataBase = firebase.database()
$("#submit").on("click", function () {

    var reviews = {
        videoName: "test",
        guestReview: $("#textarea").val().trim(),
        timeStamp: new Date().toString()
    };

    //console.log(reviews);

    dataBase.ref().push(reviews)
   
})

  
  
  $('a[href="home.html"]').on("click", function(){
    
    $("body").css("background-image","url(assets/images/scad.png)");
    //$("h1").hide ();
		//$(".card").show();
  });
  
  
});
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }