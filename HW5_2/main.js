function isAnagram(intext1, intext2) {
  
var length1 = intext1.length,
    length2 = intext2.length;
  
if (length1 != length2) {
  return false;
}
for (i = 0; i < length1; i++) {
  var isfound = false;
  for (j = 0; j < length2; j++) {
    if (intext1[i] == intext2[j]) {
     isfound = true;
     break;
    } 
  } 
  if (isfound != true) {
    return false;
  }
} 
return true;
}

var text1 = prompt('Введите первое слово', '');
var text2 = prompt('Введите второе слово', '');
    
alert(isAnagram(text1, text2));