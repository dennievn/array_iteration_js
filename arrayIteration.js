var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

function generateHighScore(scores){
	var highestScore = 0; 
	var output;

	for (var i = 0; i < scores.length; i++){ //length of scores array
	//iteration, 'i' is 'bubble solution #' and 'scores[i]' is the array data in the index
	output = "Bubble solution #" + i + " scores: " + scores[i]; 
	console.log(output);
	if (scores[i] > highestScore){ //check for the higher score
		highestScore = scores[i]; //setting new highest score
		}
	}
	return highestScore;
}

// after finding higher scores, we can now push them to a new array index
function getBestResult(highestScore, scores){
	var bestSolution = []; //generating empty array
	//scanning through 'scores' array finding highest score
	for(var i = 0; i < scores.length; i++){
		if(scores[i] === highestScore){
			bestSolution.push(i);//push new array to next available index
		}
	}
	return bestSolution;
}
var highestScore = generateHighScore(scores); //assign returned values into 'highestScore'
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highestScore); 

var bestSolution = getBestResult(scores, highestScore); //assign returned values into 'bestSolution'
console.log("Solution with the highest score: " + bestSolution);
