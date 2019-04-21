


//Count down and answer Var.
var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



// Game starts.......

$(document).ready(function(){


	



    //This will hide the game and the end results......
    $("#mid_game_container").hide();
    $("#end_container").hide();
	
	


    //Once you hit the start button the start menu will hide and the game will be playable.. Also the background will change
	$("#start_button").on("click", function(){

		$("#start_container").hide();
	
		$("#mid_game_container").show();
        
        startCountdown();
        
        $("body").css("background-image","url(assets/images/surtur.jpg)");

       
        return;
        
       
	});



	
	    function countdown(){

		
		count--;

		
    	$('#timer_number').html(count + " Seconds");

    	

    	
			// User finishes before time is up and clicks done
			$("#done_button").on("click", function(){

			//This will set the count back to 0 
			count = 0; 
            
            
            return;

			});


			// This will finish the game and collect the inputs and will hide the game questions.......
			if(count == -1){

				
				timeUp();

				
				$("#mid_game_container").hide();

			}


	}


	
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	function timeUp(){
	
        // Checked values of Radio Buttons
		
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10= $('input:radio[name="q10"]:checked').val();


		// This determins the answer count correct or not......
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Chris Hemsworth"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Hela"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "surtur"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Anthony Hopkins"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Loki"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Hulk"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Hela"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Taika Waititi"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "Taika Waititi"){
			correctCount++;
		}
		else{
			wrongCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "The Tesseract"){
			correctCount++;
		}
		else{
			wrongCount++;
		}




        // this will display the answers to the html.......
        $('#correct_answers').html(correctCount);
        $('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);
		
		
        // this will make the last container show with the scores and the destuction of Asgard.........
        $("#end_container").show();
		


		

	}

});