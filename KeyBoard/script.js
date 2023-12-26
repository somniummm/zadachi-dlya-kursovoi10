let target = document.querySelectorAll('.key');
let caps = document.querySelector('.keycaps');
let input = document.querySelector('input');
let capsActive = false;

caps.onclick = () => {
    capsActive = !capsActive;
}

for (let i = 0; i < target.length; i++) {
    target[i].onclick = () => {
        if (capsActive) {
            input.value += target[i].innerHTML.toUpperCase();
        }
        else{
            input.value += target[i].innerHTML;
        }
    }
}