$(document).ready(function(){
  //$(".card").hide ();



  
  
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