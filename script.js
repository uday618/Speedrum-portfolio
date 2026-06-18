console.log("Welcome ! day 6 java script is successfully connected.");
const currenthour = new Date().getHours();
let greetingMessage = "";

if (currenthour < 12) {
  greetingMessage = "Good morning!";
} else if (currenthour < 18) {
  greetingMessage = "Good afternoon!";
} else {
  greetingMessage = "Good evening!";
}

console.log(greetingMessage);
document.getElementById("live-greeting").innerText = greetingMessage;