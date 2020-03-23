// queries
const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const btnReset = document.querySelector('.reset');

var initialSizeForHeader = 25;
var initialSizeForDes = 14;
var initialSizeForName = 17;
var initialSizeForCName = 18;

var pDesSize = 14;
var pNameSize = 17;
var titleSize = 25;
var cNameSize = 18;

/*increase font size*/
function textIncrease() {
  pDesSize++;
  pNameSize++;
  titleSize++;
  cNameSize++;

  document.getElementById("title").style.fontSize = titleSize+"px";
  /*for (var i = 1 ; i <= 15 ; i++) {
    document.getElementsByClassName("p-name")[i].style.fontSize = pNameSize + "px";
    document.getElementsByClassName("p-desc")[i].style.fontSize = pDesSize + "px";
    document.getElementsByClassName("c-name")[i].style.fontSize = cNameSize + "px";
  }*/
  document.getElementsByClassName("p-name")[0].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[1].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[2].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[3].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[4].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[5].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[6].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[7].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[8].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[9].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[10].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[11].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[12].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[13].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[14].style.fontSize = pNameSize + "px";

  document.getElementsByClassName("p-desc")[0].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[1].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[2].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[3].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[4].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[5].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[6].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[7].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[8].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[9].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[10].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[11].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[12].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[13].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[14].style.fontSize = pDesSize + "px";

  document.getElementsByClassName("c-name")[0].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[1].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[2].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[3].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[4].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[5].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[6].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[7].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[8].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[9].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[10].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[11].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[12].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[13].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[14].style.fontSize = cNameSize + "px";
}

/*decrease font size*/
function textDecrease() {
  pDesSize--;
  pNameSize--;
  titleSize--;
  cNameSize--;

    document.getElementById("title").style.fontSize = titleSize + "px";
 /* for (var i = 1 ; i <= 15 ; i++) {
    document.getElementsByClassName("p-name")[i].style.fontSize = pNameSize + "px";
    document.getElementsByClassName("p-desc")[i].style.fontSize = pDesSize + "px";
    document.getElementsByClassName("c-name")[i].style.fontSize = cNameSize + "px";
  }*/

  document.getElementsByClassName("p-name")[0].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[1].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[2].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[3].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[4].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[5].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[6].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[7].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[8].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[9].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[10].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[11].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[12].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[13].style.fontSize = pNameSize + "px";
  document.getElementsByClassName("p-name")[14].style.fontSize = pNameSize + "px";

  document.getElementsByClassName("p-desc")[0].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[1].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[2].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[3].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[4].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[5].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[6].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[7].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[8].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[9].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[10].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[11].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[12].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[13].style.fontSize = pDesSize + "px";
  document.getElementsByClassName("p-desc")[14].style.fontSize = pDesSize + "px";

  document.getElementsByClassName("c-name")[0].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[1].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[2].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[3].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[4].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[5].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[6].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[7].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[8].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[9].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[10].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[11].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[12].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[13].style.fontSize = cNameSize + "px";
  document.getElementsByClassName("c-name")[14].style.fontSize = cNameSize + "px";
}

/*reset font size to default*/
function textReset() {
  document.getElementById("title").style.fontSize = initialSizeForHeader + "px";
  /*for (var i = 1 ; i <= 15 ; i++) {
    document.getElementsByClassName("p-name")[i].style.fontSize = initialSizeForName + "px";
    document.getElementsByClassName("p-desc")[i].style.fontSize = initialSizeForDes + "px";
    document.getElementsByClassName("c-name")[i].style.fontSize = initialSizeForCName + "px";
  }*/

  document.getElementsByClassName("p-name")[0].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[1].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[2].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[3].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[4].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[5].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[6].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[7].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[8].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[9].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[10].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[11].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[12].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[13].style.fontSize = initialSizeForName + "px";
  document.getElementsByClassName("p-name")[14].style.fontSize = initialSizeForName + "px";

  document.getElementsByClassName("p-desc")[0].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[1].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[2].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[3].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[4].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[5].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[6].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[7].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[8].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[9].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[10].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[11].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[12].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[13].style.fontSize = initialSizeForDes + "px";
  document.getElementsByClassName("p-desc")[14].style.fontSize = initialSizeForDes + "px";

  document.getElementsByClassName("c-name")[0].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[1].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[2].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[3].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[4].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[5].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[6].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[7].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[8].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[9].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[10].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[11].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[12].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[13].style.fontSize = initialSizeForCName + "px";
  document.getElementsByClassName("c-name")[14].style.fontSize = initialSizeForCName + "px";

  pDesSize = 14;
  pNameSize = 17;
  titleSize = 25;
  cNameSize = 18;
}

// Event listeners for buttons
btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);
btnReset.addEventListener('click', textReset);
