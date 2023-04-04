console.log("This is liabrary project");

//Constructor
function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
}

//Display Constructor
function Display() {}

//Methods to add book to library list
Display.prototype.add = function (book) {
    // console.log("Adding books");
    let tableBody = document.getElementById("tableBody");
    let bookString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.genre}</td>
                     </tr>`;

    tableBody.innerHTML += bookString;
};

//Function to clear the Library Form
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
};

//Implementing Validate Function
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.author.length < 3 || book.genre == null) {
        return false;
    } else {
        return true;
    }
};

//Alert Messages
Display.prototype.show = function (type, Messages) {
    let msg = document.getElementById("message");
    msg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>${type}!</strong> ${Messages}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;

    setTimeout(() => {
        msg.innerHTML = "";
    }, 3500);
};

//Adding submit even listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    // console.log("you have submitted library from");
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
    // console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("Success", `Your book was added successfully`);
    } else {
        //Show error to the user
        display.show("Warning", `Sorry, Your book can't be added`);
    }

    e.preventDefault();
}
