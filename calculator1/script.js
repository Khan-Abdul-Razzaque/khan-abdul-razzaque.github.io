let input = document.getElementById('inputBox'); // The entered number and the calculated value will show here.
let buttons = document.querySelectorAll('button'); // Selecting all the numbers and operators in just one variable.
let string = ""; // This variable will store the calculated value.
let solution = ""; // This variable will store the calculated value entered using the keyboard.
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        button.style.boxShadow = "1px 1px 2px rgba(134, 134, 134, 0.604)"
        setTimeout(() => {
            button.style.boxShadow = "-1px -1px 2px rgba(134, 134, 134, 0.604)"
        }, 100);

        if (e.target.innerHTML == '=') {
            // If the user hits the equal "=" button.
            string = eval(solution);
            input.innerHTML = string;
            solution = "";
            string = "";
        }
        else if (e.target.innerHTML == 'AC') {
            // If the user hits the "AC" button.
            solution = "";
            string = "";
            input.innerHTML = "0";
        }
        else if (e.target.innerHTML == 'DEL') {
            // If the user hits the "DEL" button.
            string = string.substring(0, string.length - 1);
            solution = solution.substring(0, solution.length - 1);
            input.innerHTML = string;
            if (string == "") {
                input.innerHTML = "0";
            }
        }
        else if (e.target.innerHTML == 'x') {
            // If the user hits the "x" button.
            solution = solution + "*";
            string = string + e.target.innerHTML;
            input.innerHTML = string;
        }
        else {
            // If the user hits any of the remaining buttons.
            solution += e.target.innerHTML;
            string += e.target.innerHTML;
            input.innerHTML = string;
        }
    })
})