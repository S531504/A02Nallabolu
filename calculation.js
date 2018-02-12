function k(valNum){
weightConverter(valNum);
document.getElementById("outputGrams").innerHTML = weightConverter(valNum);
}


function weightConverter(valNum) {
    // document.getElementById("outputGrams").innerHTML = (valNum / 0.0022046);
    return valNum/0.0022046;
  }
      
