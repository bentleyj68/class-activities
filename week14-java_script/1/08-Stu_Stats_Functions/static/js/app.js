var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function mean(userList) {
    var sum = 0;
    for (var i = 0; i < userList.length; i++) {
      sum += userList[i];
    };
    return sum / userList.length;
}

function variance(userList) {
    var avg = mean(userList);
    var sum = 0;
    for (var i = 0; i < userList.length; i++) {
      sum += (userList[i] - avg)**2;
    };
    return sum / userList.length;
}

function std_dev(userList) {
    var vari 
    math.sq
}

console.log(mean(movieScore));
console.log(variance(movieScore));
console.log(std_dev(movieScore));