// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

// YOUR CODE HERE
// Create a custom filtering function
function selectedTeam(person) {
    return person.madeTeam;
}
  
// filter() uses the custom function as its argument
var teamPlaying = roster.filter(selectedTeam);
var numb = teamPlaying.length;  
// Test
console.log(teamPlaying);
console.log(`Number Playing: ${teamPlaying.length}`);
  