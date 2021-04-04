var sentence = "I yam what I yam and always will be what I yam";
var sentence_arr = sentence.split(" ");
var word_count = {};

function count(word){
    if (word in word_count){
        word_count[word] += 1;
    }
    else {
        word_count[word] = 1; 
    }
}

sentence_arr.forEach(count);

console.log(word_count);