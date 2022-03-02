const itemTitle = document.querySelector('.item-title');
const info = document.querySelector('.info');
const textInput = document.querySelector('.text');
const submitBtns = document.querySelector('.submit-btn');
const list = document.querySelector('.list');
const groceryList = document.querySelector('.grocery-container');
const editBtn = document.querySelector('.edit-btn');
const deleteBtn = document.querySelector('.delete-btn');
const itemsCont = document.querySelector('.items');



let num = 0;



// submit input text.
function submitButton(){
    submitBtns.addEventListener('click', () => {
        console.log(textInput.value);
        itemTitle.textContent = textInput.value;
        groceryList.style.visibility = "visible";
        
        if (textInput.value === "") {
            alert('Error: empty text');
            num = -1;
            groceryList.style.visibility = "hidden";
            // deleteBtn.style.visibility = "hidden";
            // editBtn.style.visibility = "hidden";
        }
        num++;
        console.log(num);
        // if (num === 1){
        //     const paragraph = document.createElement('p');  
        //     paragraph.setAttribute('class', 'item-title1'); 
        //     itemsCont.appendChild(paragraph);
        //     itemTitle.textContent = textInput.value;
        // } 
    });
}
submitButton();



//delete button
function deleteButton() {
    deleteBtn.addEventListener('click', () => {
       itemTitle.textContent = "";
       deleteBtn.remove();
       editBtn.remove();
    })
}
deleteButton();


//edit button
// function editButton() {
//     editBtn.addEventListener('click', () => {
//        itemTitle.textContent = "";
//        deleteBtn.remove();
//        editBtn.remove();
//     })
// }
// editButton();


//empty string input on website load
window.addEventListener('DOMContentLoaded', ()=>{
    textInput.value = "";
} )