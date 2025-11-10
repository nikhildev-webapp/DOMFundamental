let countValue = document.getElementById('countValue');
let count = 0;
const CountDown = () => {
    count--;
    countValue.textContent = count;
}

const CountUp = () => {
    count++;
    countValue.textContent = count;
}

const reset = () => {
    count = 0
    countValue.textContent = count;
}