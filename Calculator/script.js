let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let solution = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (string == "") {
                solution = input.value;
                string = "Answer = " + eval(solution);
            }
            else {
                string = "Answer = " + eval(solution);
                input.value = string;
                solution = "";
                string = "";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            solution = "";
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            solution = solution.substring(0, solution.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'x') {
            solution = solution + "*";
            string = string + e.target.innerHTML;
            input.value = string;
        }
        else {
            solution += e.target.innerHTML;
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})