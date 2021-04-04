// Switch function
function letterSwitch(letter) {
    var message = "";
    switch(letter) {
      case "A":
        message = 1;
        break;
      case "B":
        message = 2;
        break;
      case "C":
        message = 3;
        break;
      case "D":
        message = 4;
        break;
      case "E":
        message = 5;
        break;
      default:
        message =0;
    }
    console.log(message);
  }

  letterSwitch('B');