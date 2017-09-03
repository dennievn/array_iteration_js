var costs  = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .26, .29];
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
function getBestResult(scores, highestScore){
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
console.log("Solutions with the highest score: " + bestSolution);

function getMostEffective (scores, costs, highestScore){
	var cost = 100; //starts high, but lower everytime we find a lower solution
	var index; //index of lowest cost solution
	
	for (var i = 0; i < scores.length; i++){
		if (scores[i] == highestScore){ //check if the score has the high score
			if(cost > costs[i]){ //if current cost is > than solution costs
				index = i; //keeping track of what solution it is
				cost = costs[i]; //store as the lowest cost
			}
		}
	}
	return index;
}
var mostCostEffective = getMostEffective(scores, costs, highestScore);
//mostCostEffective contains the index(Bubble Solution #)
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");