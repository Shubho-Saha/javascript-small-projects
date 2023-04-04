console.log("This is Javascript class implemention.");
showBooks();

//------------- Function For Showing Books --------------------//
function showBooks() {
    let tableBody = document.getElementById("tableBody");
    let localBook = JSON.parse(localStorage.getItem("books"));
    if (localBook == null) {
        var bookArray = [];
    } else {
        bookArray = localBook;
    }

    let bookString = "";
    bookArray.forEach(function (element, index) {
        bookString += `<tr>
                             <td>${element.name}</td>
                             <td>${element.author}</td>
                             <td>${element.genre}</td>
                             <td><button id="${index}" onclick="deleteButton(this.id)" class="btn btn-danger">Delete</button></td>
                          </tr>`;
    });
    tableBody.innerHTML = bookString;
}

//---------Function For Delete Book--------------------//
function deleteButton(index) {
    // let tableBody = document.getElementById("tableBody");
    let localBook = JSON.parse(localStorage.getItem("books"));
    if (localBook == null) {
        var bookArray = [];
    } else {
        bookArray = localBook;
    }
    bookArray.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(bookArray));
    showBooks();
}

// ----------- Class Constructor------------------//
class Book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}

class Display {
    add(book) {
        let localBook = JSON.parse(localStorage.getItem("books"));

        if (localBook == null) {
            var bookArray = [];
        } else {
            bookArray = localBook;
        }

        bookArray.push(book);
        let bookString = "";

        bookArray.forEach(function (element, index) {
             bookString += `<tr>
                                 <td>${element.name}</td>
                                 <td>${element.author}</td>
                                 <td>${element.genre}</td>
                                 <td><button id="${index}" onclick="deleteButton(this.id)" class="btn btn-danger">Delete</button></td>
                              </tr>`;
            
        });
        tableBody.innerHTML = bookString;
        localStorage.setItem("books", JSON.stringify(bookArray));
        // showBooks();
    }

    validate(book) {
        if (book.name < 3 || book.author < 3 || book.genre == null) {
            let libraryForm = document.getElementById("libraryForm");
            libraryForm.reset();
            return false;
        } else {
            return true;
        }
    }

    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    show(status, message) {
        let msg = document.getElementById("message");
        let alertMessage = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>${status}!</strong> ${message}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
        msg.innerHTML = alertMessage;

        setTimeout(() => {
            msg.innerHTML = "";
        }, 3500);
    }
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let genre;

    let fiction = document.getElementById("fiction");
    let detective = document.getElementById("detective");
    let tragedy = document.getElementById("tragedy");

    if (fiction.checked) {
        genre = fiction.value;
    } else if (detective.checked) {
        genre = detective.value;
    } else if (tragedy.checked) {
        genre = tragedy.value;
    }

    let book = new Book(name, author, genre);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("Success", "Your book has been added successfully.");
    } else {
        display.show("Failed", "Sorry, Book can't be added.");
    }

    e.preventDefault();
}
