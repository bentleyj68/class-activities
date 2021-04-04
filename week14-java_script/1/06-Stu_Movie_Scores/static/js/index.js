// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

for (var j = 0; j < movieScores.length; j++) {
  var score = movieScores[j];
  
  sum += score;
  
  if (score > 7) { goodMovieScores.push(score); }
  else if (score >= 5) { okMovieScores.push(score); } 
  else { badMovieScores.push(score); }
   
}

var average_movie_score = sum / movieScores.length;
console.log(`Number of good movies, ${goodMovieScores.length}` );
console.log(`Number of ok movies, ${okMovieScores.length}` );
console.log(`Number of bad movies, ${badMovieScores.length}` );
console.log(`Average, ${sum / movieScores.length}` );