// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
var buttonUp = d3.select(".upvote");
var buttonDown = d3.select(".downvote");

// Select the counter h1 element
var counter = d3.select(".counter");

var data_store = [];

// Use D3 `.on` to attach a click handler for the upvote
buttonUp.on("click", function() {
  numb = parseInt(counter.text());
  numb += 1;
  counter.text(numb);
  data_store.push({current_vote:numb, type:"Upvote"});
});
// Use d3 `.on` to attach a click handler for the downvote
buttonDown.on("click", function() {
  numb = parseInt(counter.text());
  numb -= 1;
  counter.text(numb);
  data_store.push({current_vote:numb, type:"Upvote"});
});