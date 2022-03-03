const info = document.querySelector('.info');
const inputBox = document.querySelector('.input-box');
const submitBtns = document.querySelector('.submit-btn');
const list = document.querySelector('.list');
const groceryList = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
const itemText = document.querySelector('.text');
const itemBtn = document.querySelector('.btn');
const errorText = document.querySelector('.error');
const container = document.querySelector('.container');
const buttons = document.querySelector('button');
let num = 0;

// submit text and list it
submitBtns.addEventListener('click', ()=>{
    if (inputBox.value === ''){
        function alert (){
            container.style.boxShadow= "5px 5px 25px red";
            buttons.style.backgroundColor = "red";
            clearBtn.style.backgroundColor = "red";
            errorText.textContent = "Error: No Text";
            errorText.style.color = "red";
            //remove red color style
            setTimeout(()=>{
                container.style.boxShadow= "5px 5px 25px #10B981";
                buttons.style.backgroundColor = "#10B981";
                clearBtn.style.backgroundColor = "#10B981";
                errorText.textContent = "";
            },500)
        }
        alert();
    }else if (num === 0) {
        //  create item-title
        const elementZero = document.createElement('div');
        elementZero.setAttribute('class', 'item-title');
     
        //select item-title
        let itemZero = document.querySelector('.item-title');

        //append 
       itemText.appendChild(elementZero);

        //add text
        elementZero.textContent = inputBox.value;

        //create delete-btn
        const btns = document.createElement('button');
        btns.setAttribute('class', 'delete-btn');
        btns.textContent = 'delete';
        
        //append button
        itemBtn.appendChild(btns);
       
        //add to num
        num++;

        //delete
        btns.addEventListener('click',()=>{
            itemBtn.removeChild(btns);
            itemText.removeChild(elementZero);
            console.log('clicked');
        })

        //clear button
        function clearAll () {
            clearBtn.addEventListener('click', ()=>{
                itemBtn.removeChild(btns);
                itemText.removeChild(elementZero);
                inputBox.textContent = "";
             })
        }
        clearAll();
    } else {
        num--;
    }
});

//empty string input on website load
window.addEventListener('DOMContentLoaded', ()=>{
    inputBox.value = "";
})