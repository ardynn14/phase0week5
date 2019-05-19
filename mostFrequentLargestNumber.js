function sorting(arrNumber) {
    for ( var x = 0 ; x < arrNumber.length; x++ ){
      for ( var y = 0; y < arrNumber.length-x; y++ ){
        if ( arrNumber[y] > arrNumber[y+1] ){
          var temp = arrNumber[y]
          arrNumber[y] = arrNumber[y+1]
          arrNumber[y+1] = temp
        }
      }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    if ( arrNumber.length === 0 ) return "''"
    var count = 0;
    for ( var x = 0; x < arrNumber.length; x++ ){
      if ( arrNumber[arrNumber.length-1] === arrNumber[x]){
        count += 1
      }
    }
    return 'angka paling besar adalah ' + arrNumber[arrNumber.length-1] + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''