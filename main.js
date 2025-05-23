const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});
