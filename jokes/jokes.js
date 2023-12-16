const uri = 'https://icanhazdadjoke.com/';
let xhr = new XMLHttpRequest();

var isLoading = false;

const getJoke = () => {
    if (!isLoading) {
        isLoading = true;
        xhr.open('GET', uri);
        xhr.setRequestHeader('Accept', 'text/plain')    
        xhr.send();
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    //const el = document.getElementById('overlayBtn');
    const joke = document.querySelector('#joke');
    const refreshBtn = document.querySelector('#refreshBtn');
    
    if (joke) {
        getJoke();
        xhr.addEventListener('load', function() {
            joke.innerHTML = `<h1>${this.responseText}</h1>`;
            isLoading = false;
        }); 
    }

    if (refreshBtn) {
        //el.addEventListener('click', swapper, false);
        refreshBtn.addEventListener('click', function(){
            getJoke();
        });        
    }

    setInterval(() => {
        getJoke();    
    }, 30000);
});








