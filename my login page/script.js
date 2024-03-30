let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
let section1 = document.querySelector('.section1');
let section2 = document.querySelector('.section2');
let Name = document.getElementById('name');
let para = document.getElementById('para2');
let container = document.querySelector('.container');

btn2.addEventListener('click', () => {
    section1.classList.toggle("transform");
    section2.classList.toggle("transform");
    setTimeout(() => {
        if (!section1.classList.contains('transform')) {
            Name.style.display = "none";
            para.style.display = "inline";
            btn1.innerHTML = "SIGN IN";
            btn2.innerHTML = "SIGN UP";
            heading1.innerHTML = "Sign In";
            heading2.innerHTML = "Hello Friend!";
        }
        else {
            Name.style.display = "inline";
            para.style.display = "none";
            btn1.innerHTML = "SIGN UP";
            btn2.innerHTML = "SIGN IN";
            heading1.innerHTML = "Create Account";
            heading2.innerHTML = "Welcome Back!";
        }
    }, 150);
    if (!section1.classList.contains('transform')) {
        section2.style.borderRadius = "115px 35px 35px 115px";
    }
    else {
        section2.style.borderRadius = "35px 115px 115px 35px";
    }
})