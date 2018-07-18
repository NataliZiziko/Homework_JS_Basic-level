function isPalindrome(intext) {
  
var textlength = Math.floor(intext.length / 2);
  
  for (i = 0; i <= textlength; i++) {
    if (intext[i] != intext[intext.length - 1 - i]) {
      return false;
    } 
  }
return true;
}

var text = prompt('Введите слово', '');
    
alert(isPalindrome(text));