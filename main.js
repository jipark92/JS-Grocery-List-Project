// let itemTitle = document.querySelector('.item-title');

const info = document.querySelector('.info');

const inputBox = document.querySelector('.input-box');

const submitBtns = document.querySelector('.submit-btn');
const list = document.querySelector('.list');
const groceryList = document.querySelector('.grocery-container');

const deleteBtn = document.querySelector('.delete-btn');
const itemsCont = document.querySelector('.items');


let num = 0;


submitBtns.addEventListener('click', ()=>{

    
    if (inputBox.value === ''){
        alert('error');

    }else if (num === 0) {
        //  create item-title
        const elementZero = document.createElement('div');
        elementZero.setAttribute('class', 'item-title');
     
        //select item-title
        let itemZero = document.querySelector('.item-title');
        //append 
        itemsCont.appendChild(elementZero);


        //add text
        elementZero.textContent = inputBox.value;

       

        //create delete-btn class
        const btns = document.createElement('button');
        btns.setAttribute('class', 'delete-btn');
        btns.textContent = 'delete';

        //append 
        itemsCont.appendChild(btns);
      


        num++;
        

    } 
    // else if (num === 1) {
    //     let element = document.createElement('div');
    //     element.setAttribute('class', 'item-title1');
    //     list.appendChild(element);
    //     const itemOne = document.querySelector('.item-title1');
    //     itemOne.textContent = inputBox.value;
    //     let buttons = document.createElement('button').setAttribute('class','delete-btn')
    //     list.appendChild(buttons);

    // } 

})




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

