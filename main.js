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

    // submit text and list it
    submitBtns.addEventListener('click', ()=>{
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
        }else if (num === 0 && inputBox.value) {
            //  create item-title
            const elementZero = document.createElement('div');
            elementZero.setAttribute('class', 'item-title');
        
            // select item-title
            let itemZero = document.querySelector('.item-title');

            //append 
            itemText.appendChild(elementZero);

            //add text
            elementZero.textContent = inputBox.value;
            inputBox.value = ""

            //create delete-btn
            const btns = document.createElement('button');
            btns.setAttribute('class', 'delete-btn');
            btns.textContent = 'delete';
            
            //append button
            itemBtn.appendChild(btns);
        
            //add to num
            num++;
            console.log(num)
            //delete
            btns.addEventListener('click',()=>{
                itemBtn.removeChild(btns);
                itemText.removeChild(elementZero);
                console.log('clicked');
            });

            //clear button
            function clearAll () {
                clearBtn.addEventListener('click', ()=>{
                    if (true){
                        itemBtn.removeChild(btns);
                    } else {
                        return;
                    }
                    itemText.removeChild(elementZero);
                    inputBox.value = "";
                })
            };
            clearAll();
        } else {
            num = 0;
        }
    });

    //empty string input on website load
    window.addEventListener('DOMContentLoaded', ()=>{
        inputBox.value = "";
    })
};
groceryList();