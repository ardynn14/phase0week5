function makanTerusRekursif(waktu) {
    // var count = 0;
    // console.log(waktu)
    if ( waktu < 1 ){
      return 0
    }else{
      // count++
      return 1 + makanTerusRekursif(waktu-15)
    }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0