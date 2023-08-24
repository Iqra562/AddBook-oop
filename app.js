// select all  input fields 
const titleInputField = document.getElementById("title");
const authorInputField = document.getElementById("author");
const isbnInputField = document.getElementById("isbn");
const bookFormSubmitBtn = document.getElementById("book-form");
const tableBody = document.getElementById("book-list");
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
const bookFormInputObj = new getBookFormInput(titleValue,authorValue,isbnValue);
ui.addBook(bookFormInputObj);
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
function getBookFormInput(title,author,isbn){
this.title= title;
this.author =author;
this.isbn= isbn;
}