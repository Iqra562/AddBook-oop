// select all  input fields 
const titleInputField = document.getElementById("title");
const authorInputField = document.getElementById("author");
const isbnInputField = document.getElementById("isbn");
const bookFormSubmitBtn = document.getElementById("book-form");
const tableBody = document.getElementById("book-list");
const container = document.querySelector('.container');
// console.log({titleInputField,authorInputField,isbnInputField,bookFormSubmitBtn})

// add eventlistener on submit btn 
bookFormSubmitBtn.addEventListener('submit', bookFormSubmitHandler )
function bookFormSubmitHandler(event){
event.preventDefault();
const titleValue = titleInputField.value;
const authorValue = authorInputField.value;
const isbnValue = isbnInputField.value;

// console.log({
//     titleValue,
//     authorValue,
//     isbnValue
// })
const ui = new UI();
if(!titleValue){
    ui.showAlert('title is empty',"error");
    return;
    }
    if(!authorValue){
    ui.showAlert('author is empty',"error");
    return;
    }
    if(!isbnValue){
    ui.showAlert('isbn is empty',"error");
    return;
    };
const bookFormInputObj = new getBookFormInput(titleValue,authorValue,isbnValue);
ui.addBook(bookFormInputObj);
ui.resetFields();
ui.showAlert('book is added successfully');

// console.log(tableBody)
}
// oop functions
function UI(){}
UI.prototype.addBook = function(bookFormInputObj){
    const tableRow=document.createElement('tr');
    tableRow.innerHTML = `
    <td>${bookFormInputObj.title}</td>
    <td>${bookFormInputObj.author}</</td>
    <td>${bookFormInputObj.isbn}</</td>
    <td><a href="#" class="delete">X<a></td>
    
    `
    tableBody.appendChild(tableRow);

}
UI.prototype.resetFields = function(){
    titleInputField.value="";
    authorInputField.value="";
    isbnInputField.value = "";

}
function getBookFormInput(title,author,isbn){
    this.title= title;
    this.author =author;
    this.isbn= isbn;
}
UI.prototype.showAlert = function(message = "", className = "success"){
    const createDiv = document.createElement('div');
    createDiv.className = `alert, ${className}`;
    createDiv.innerText = message;
    container.insertBefore(createDiv,bookFormSubmitBtn);
    setTimeout(function(){
        createDiv.remove();
    },2000);

}
tableBody.addEventListener('click', addDeleteFunction);
function addDeleteFunction(event){
event.preventDefault();
const currentELement = event.target;
// console.log(currentELement)
if(currentELement.className === "delete"){
const deleteRow = currentELement.parentElement.parentElement;
if(confirm("Are you sure?")){
deleteRow.remove();
const ui = new UI();
ui.showAlert('book is removed successfully','error')

}
}

}