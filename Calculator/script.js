let string = "";
let i = 0
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = 'Answer = ' + eval(string);
            document.querySelector('input').value = string;
            string = "";
            i = 0
        }
        else if (e.target.innerHTML == "+/-") {
            if (i == 0) {
                if (string.charAt(0) == "-") {
                    string = "+" + string.substring(1, string.length)
                    document.querySelector('input').value = string;
                }
                else {
                    string = "+" + string
                    document.querySelector('input').value = string;
                }
                i = 1
            }
            else {
                if (string.charAt(0) == "+") {
                    string = "-" + string.substring(1, string.length)
                    document.querySelector('input').value = string;
                }
                else {
                    string = "-" + string
                    document.querySelector('input').value = string;
                }
                i = 0
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
            i = 0
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1)
            document.querySelector('input').value = string
        }
        else {
            if (e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '/' || e.target.innerHTML == '*') {
                string = string + ' ' + e.target.innerHTML + ' ';
                document.querySelector('input').value = string; 
            }
            else {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
    })
})