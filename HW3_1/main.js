var logAdmin = prompt('Введите логин', '');

if (logAdmin == 'Админ') {
    var passAdmin = prompt('Введите пароль', ''); 
    if (passAdmin == 'Чёрный Властелин') { 
        alert('Добро пожаловать!');    
    } else if (passAdmin == null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }
} else if (logAdmin == null) {
  alert('Вход отменён');
} else {
  alert('Я вас не знаю');
}