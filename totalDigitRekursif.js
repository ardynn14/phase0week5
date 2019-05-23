function totalDigitRekursif(angka) {
    var a = angka.toString()
    if ( a.length === 0){
      return 0
    }else{
      return Number(a[0]) + totalDigitRekursif(a.substr(1))
    }
  }
  
   
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5