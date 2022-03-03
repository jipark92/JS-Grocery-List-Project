function groceryList() {
    const inputBox = document.querySelector('.input-box');
    const submitBtns = document.querySelector('.submit-btn');
    const clearBtn = document.querySelector('.clear-btn');
    const itemText = document.querySelector('.text');
    const itemBtn = document.querySelector('.btn');
    const errorText = document.querySelector('.error');
    const container = document.querySelector('.container');
    const buttons = document.querySelector('button');
    let num = 0;

    submitBtns.addEventListener('click', (e)=>{
        e.preventDefault();
        if (num === 0 && inputBox.value) {
            const elementZero = document.createElement('div');
            elementZero.setAttribute('class', 'item-title');
        
            let itemZero = document.querySelector('.item-title');

            itemText.appendChild(elementZero);

            elementZero.textContent = inputBox.value;
            inputBox.value = ""

            const btns = document.createElement('button');
            btns.setAttribute('class', 'delete-btn');
            btns.textContent = 'delete';
            
            itemBtn.appendChild(btns);
        
            num++;
            console.log(num)
            
            btns.addEventListener('click',()=>{
                itemBtn.removeChild(btns);
                itemText.removeChild(elementZero);
                console.log('clicked');
            });

            function clearAll () {
                clearBtn.addEventListener('click', ()=>{
                    if (true){
                        itemBtn.removeChild(btns);
                        itemText.removeChild(elementZero);
                        inputBox.value = "";
                    } else {
                        return;
                    }                    
                })
            };
            clearAll();
        } else {
            num = 0;
            e.preventDefault();
            if (!inputBox.value){
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
                    },300)
                };
                alert();
        }
    }});
    window.addEventListener('DOMContentLoaded', ()=>{
        inputBox.value = "";
    })
};
groceryList();