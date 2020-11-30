let timer = document.getElementById("compteur");

let totalSeconde = 60;

setTimeout("totalSeconde", 1000);

while (totalSeconde >= 0) {
    console.log(totalSeconde);
    timer.innerHTML = totalSeconde.toString();

    totalSeconde--;
}