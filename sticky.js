"user strict";
window.addEventListener('load', function() {
    let addButton = document.querySelector(".add-btn");
    let colorButton = document.querySelector(".color-btn");

    let noteHtml = document.querySelector(".note").innerHTML;

    let delButtonListner = function(){
        document.querySelector(".notes").removeChild(this.parentNode.parentNode);
    };

    let colorButtonListner = function(){
        this.parentNode.parentNode.style.backgroundColor = this.value;
    };

    let addButtonListner = function() {
        let cln = document.createElement('div');
        cln.innerHTML = noteHtml;
        cln.classList.add('note');
        document.querySelector(".notes").appendChild(cln);
        cln.querySelector(".add-btn").addEventListener('click', addButtonListner);
        cln.querySelector(".del-btn").addEventListener('click', delButtonListner);
        cln.querySelector(".color-btn").addEventListener('click', colorButtonListner);
    };

    addButton.addEventListener('click', addButtonListner);
    colorButton.addEventListener('change', colorButtonListner);
});
