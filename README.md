#Password Generator

See the deployed link here: https://rachelkline.github.io/PasswordGenerator/

![alt text](VISUAL.png)

In this homework assignment we were tasked to create an application that generates a random password based on user-selected criteria. We were given a completed HTML and CSS, and were tasked to create a Javascript file to make the program work as expected.

In order to do this, I needed to write a function that would generate the password. I was given some code at the bottom and top of the page and I had to write my code in the middle. I completed this task by first writing out the generatePassword function. I then created four arrays that held the character sets and one empty array called "chosen." Then, I wrote my prompts that would be generated when the user clicked the "generate password" button. I set a 'while' loop for the password length in order to make sure the user chose a number between 8 and 128, and if they did not they would recieve a message instructing them to do so.

Next I established prompts and variables for the user to choose what kinds of characters they want. These variables I then concatenated with the empty 'chosen' array, so that whatever character sets the user chose would all go into that array. Lastly, I set the for loop that would choose the random characters. The loop would be triggered by the given addEventListener code when the user clicks the button.