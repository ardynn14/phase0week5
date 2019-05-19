function hapusSimbol(str) {
    var word = '1234567890 abcdefghijklmnopqrstuvwxyz'
    var result = '';
    for ( var x = 0; x < str.length; x++ ){
      for ( var y = 0; y < word.length; y++ ){
        if ( str[x] === word[y] ){
          result += str[x]
        }else{
          result += ''
        }
      }
    }
    return result
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100