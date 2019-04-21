$(document).ready(function() {


	$("#end_container").hide();



	var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		
	
	
	var gemOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">"); 

	var gemTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gemTwo + ">"); 

	var gemThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gemThree + ">");
	
	var gemFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gemFour + ">");
		
	
	
	
	
	var wins = 0;
		console.log("wins: " + wins);

	var losses = 0;
		console.log("losses: " + losses);

	var score = 0;
		console.log("score: " + score);


	



			
	
	
		function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		gemOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gemThree + ">");
	
		gemFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			
			
			
			
			
			if(newScore === compPick) {
				wins++ ;
				$(".wins").html("Wins: " + wins);
				console.log("Wins: " + wins);
				reset();

			}

			else if (newScore > compPick) {
				losses++ ;
				$(".losses").html("Losses: " + losses);
				console.log("Losses: " + losses);
				reset();



			}



			

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		
		
		
		
		
		if(newScore === compPick) {
			wins ++ ;
			$(".wins").html("Wins: " + wins);
			console.log("Wins: " + wins);
			reset();


		}

		else if(newScore > compPick) {
			losses ++ ;
			$(".losses").html("Losses: " + losses);
			console.log("Losses: " + losses);
			reset();


		}

		if(losses > wins) {
			$("#end_container").show();


		}else if(wins > losses){

		$(".wallpaper").css("background-image","url(assets/images/avengers.jpg)");

		}

		



	});

	


//Time stone restarts the game..........
	function restart (){
		$('.button').click(function() {
			location.reload();
		});

		




	};
	
	
	restart();






}); 



    
 



 





















































