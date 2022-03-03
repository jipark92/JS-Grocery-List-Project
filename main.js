// let itemTitle = document.querySelector('.item-title');

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

        //create delete-btn class
        const btns = document.createElement('button');
        btns.setAttribute('class', 'delete-btn');
        btns.textContent = 'delete';
        

        //append 
        itemBtn.appendChild(btns);
       

        //add to num
        num++;
        console.log(num)

        //delete
        btns.addEventListener('click',()=>{
            itemBtn.removeChild(btns);
            itemText.removeChild(elementZero);
            console.log('clicked');
        })
        
        
    } else {
        num = 0;
    }
});








//empty string input on website load
window.addEventListener('DOMContentLoaded', ()=>{
    inputBox.value = "";
})










// let num = 0;



// // // submit input text.
// function submitButton(){
//     submitBtns.addEventListener('click', () => {
//         console.log(textInput.value);
//         itemTitle.textContent = textInput.value;
//         groceryList.style.visibility = "visible";
        
//         if (textInput.value === "") {
//             alert('Error: empty text');
//             num = -1;
//             groceryList.style.visibility = "hidden";
//             // deleteBtn.style.visibility = "hidden";
//             // editBtn.style.visibility = "hidden";
//         }
//         num++;
//         console.log(num);
//         if (num === 1){
//             const element = document.createElement('div');  
//             element.setAttribute('class', 'item-title1'); 
//             itemsCont.appendChild(element);
//             itemTitle.textContent = textInput.value;
//         } 
//         // else if (num === 2) {
//         //     const paragraph = document.createElement('div');  
//         //     paragraph.setAttribute('class', 'item-title2'); 
//         //     itemsCont.appendChild(paragraph);
//         //     itemTitle.textContent = textInput.value;
//         // } else {
            
//         // }
//     });
// }
// submitButton();



// //delete button
// function deleteButton() {
//     deleteBtn.addEventListener('click', () => {
//        itemTitle.textContent = "";
//        deleteBtn.remove();
//        editBtn.remove();
//     })
// }
// deleteButton();


// //edit button
// // function editButton() {
// //     editBtn.addEventListener('click', () => {
// //        itemTitle.textContent = "";
// //        deleteBtn.remove();
// //        editBtn.remove();
// //     })
// // }
// // editButton();


// //empty string input on website load
// window.addEventListener('DOMContentLoaded', ()=>{
//     textInput.value = "";
// } )

