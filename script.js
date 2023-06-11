function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = countDownDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(myfunc);
        document.getElementById("end").innerHTML = "HAPPY NEW YEAR!";
    }
}

const countDownDate = new Date("Jan 1, 2024 11:59:59").getTime();
const myfunc = setInterval(updateCountdown, 1000);