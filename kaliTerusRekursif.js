function kaliTerusRekursif(angka) {
    var a = angka.toString()
  
    if ( a.length === 1){
      return angka
    }else{
      var b = Number(a[0]) * kaliTerusRekursif(a.substr(1))
    }
    return kaliTerusRekursif(b)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6