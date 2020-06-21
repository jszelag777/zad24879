console.log(`Ustaw tło elementów HTML`);

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    p1.classList.toggle('background-red');
    p2.classList.toggle('background-yellow');
}

let btn = document.getElementById('btn');

btn.addEventListener('click', setBackground);