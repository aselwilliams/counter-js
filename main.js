let counter = document.querySelector('#counter');
let buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        let targetClass =e.currentTarget.classList;
        if (targetClass.contains('increase')) {
            count++;
        } else if (targetClass.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }
       counter.innerText = count; 
       
       if (count > 0) {
        counter.style.color = '#4c7440';
    } else if (count < 0) {
        counter.style.color = '#ff0008';
    } else {
        counter.style.color = '#1c1c24';
    }
    })  
})