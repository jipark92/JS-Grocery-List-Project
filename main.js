const itemTitle = document.querySelector('.item-title');
const info = document.querySelector('.info');
const textInput = document.querySelector('.text');
const submitBtns = document.querySelector('.submit-btn');
const list = document.querySelector('.list');
const groceryList = document.querySelector('.grocery-container');
const editBtn = document.querySelector('.edit-btn');
const deleteBtn = document.querySelector('.delete-btn');


let editElement;
let editFlag = false;
let editID = "";



// submit input text.
function submitButton(){
    submitBtns.addEventListener('click', () => {
        console.log(textInput.value);
        itemTitle.textContent = textInput.value;
        groceryList.style.visibility = "visible";
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
