function changeVocals(str) {
    var ch1 = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var ch2 = ' bbcdefghjjklmnppqrstvvwxyzBBCDFFGHJJKLMNPPQRSTVVWXYZ';
    var temp = '';
  
    for ( var x = 0; x < str.length; x++ ){
      // console.log(str[x])
      for ( var y = 0; y < ch1.length; y++ ){
        // console.log(ch1[y])
          if ( str[x] === ch1[y] ){
            temp += ch2[y]
          }
        }
      } 
    return temp
  }
  
  function reverseWord(str){
  var temp = '';
  
  for ( var x = str.length-1; x >= 0; x--){
      temp += str[x]
    }
    return temp
  }
  
  function setLowerUpperCase (str) {
    var upper = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = ' abcdefghijklmnopqrstuvwxyz';
    var temp = '';
  
    for ( var x = 0; x < str.length; x++ ){
      for ( var y = 0; y < upper.length; y++ ){
        if ( str[x] === upper[y]){
          temp += lower[y]
        }else if( str[x] === lower[y]){
          temp += upper[y]
        }
      }
    }
    return temp
  }
  
  function removeSpaces(str) {
    var result = '';
  
    for ( var x = 0; x < str.length; x++ ){
        if ( str[x] === ' ' ){
          result += ''
        }else{
          result += str[x]
        }
    }
    return result
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
   var a = changeVocals(name);
   var b = reverseWord(a);
   var c = setLowerUpperCase(b);
   var d = removeSpaces(c)
   return d
    }
  }
  
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'