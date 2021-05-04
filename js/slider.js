const exampleBefore = document.querySelector('.example__before');
const input = document.querySelector('#myRange');
const before = document.querySelector('#before');
const after = document.querySelector('#after');

input.addEventListener('input', (event) => {
	exampleBefore.style.width = event.target.value + '%';
})

after.addEventListener('click', (event) => {
	exampleBefore.style.width = '100%';
})

before.addEventListener('click', (event) => {
	exampleBefore.style.width = '0%';
})
