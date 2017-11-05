var usd = 26.7;
var eur = 31.1;
var rus = 0.425;
var final_rus = sum / rus;
var final_usd = sum / usd;
var final_eur = sum / eur;
var sum = +prompt("Какую сумму вы хотите поменять?", '0');
alert( "Сегодня курс таакой:" +  "\n" + "USD: " + usd + "\n" + "EUR: " + eur + "\n" + "RUS: " + rus );
var money = prompt("В какую валюту хотите поменять деньги?").toLowerCase();
if (money == "rus" || money == "RUS" || money == "рубли") {
  alert ( "Вы получите: " + final_rus);
  console.log(final_rus);
 if (money == "usd" || money == "USD" || money == "доллар" || money == "$" ) {
   alert ( "Вы получите: " + final_usd);
  if (money == "eur" || money == "EUR" || money == "евро") {
     alert ( "Вы получите: " + final_eur);
       confirm("Выдействительно хотите поменять " + sum + "гривен на " + final_rus + money);
      if ( confirm == true ) {
     alert("Спасибо, приходите ещё!");
   } else {
     alert("до встречи в следующий раз!");
   }
  } else {
    alert("Неверный ввод");
  }
 }else {
   alert("Неправильная валюта");
 }
} else {
  alert("Неправильно");
}
