const container = document.querySelector('div');
const btn = document.querySelector('button')
const lightBtn = document.querySelector('.light-btn');
const darkBtn = document.querySelector('.dark-btn');
const wrd = document.querySelector('h1');

lightBtn.addEventListener('click', () => {
   if(wrd.classList.contains('wrd-light')){
        
        wrd.classList.add('wrd-dark');
        container.classList.add('dark');

        wrd.textContent = "Ini darkmode";

        lightBtn.disabled = true;
        darkBtn.disabled = false;
   }
});


darkBtn.addEventListener('click', () => {
    if(wrd.classList.contains('wrd-dark')){
        wrd.classList.remove('wrd-dark');
        container.classList.remove('dark');

        wrd.textContent = "Ini lightmode";

        darkBtn.disabled = true;
        lightBtn.disabled = false;
    }
})