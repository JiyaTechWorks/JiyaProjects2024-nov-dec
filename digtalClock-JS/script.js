function clock() {
  const hours = document.getElementById("hours");
  const mins = document.getElementById("minutes");
  const secs = document.getElementById("seconds");
  const millisec = document.getElementById("milliseconds");

  let date = new Date();
  let currentHr = date.getHours();
  let currentMin = date.getMinutes();
  let currentSec = date.getSeconds();
  let currentMs = date.getMilliseconds();

  hours.value = currentHr;
  mins.value = currentMin;
  secs.value = currentSec;
  millisec.value = currentMs;

  console.log(date);
  console.log(currentHr);
  console.log(currentMin);
  console.log(currentSec);
}


setInterval(clock,1000);
