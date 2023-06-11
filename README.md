# Countdown Timer

This JavaScript code provides a countdown timer until New Year's Eve. It calculates and displays the remaining time in days, hours, minutes, and seconds until the specified date and time.

## How It Works

The code functions as follows:

1. The `updateCountdown()` function is called every second to update the countdown timer.
2. Inside the function, the current date and time are obtained using `new Date().getTime()`.
3. The time remaining until the specified date and time (`countDownDate`) is calculated by subtracting the current date and time from it.
4. The remaining time is then converted into days, hours, minutes, and seconds.
5. The corresponding elements in the HTML document are updated with the calculated values using `document.getElementById()`.
6. If the remaining time is less than 0, indicating that New Year's Eve has passed, the countdown is stopped, and the message "HAPPY NEW YEAR!" is displayed.

## Technologies Used

- JavaScript
- HTML
- CSS

## Customization

You can customize the countdown timer by modifying the following:

- Adjust the `countDownDate` variable to set the desired target date and time.
- Customize the HTML structure and styling to match your project's design.

## Credits

This countdown timer was developed to provide an engaging way to anticipate and celebrate the arrival of the New Year.
