const book_name = document.querySelector("#book_name");
const auth_name = document.querySelector("#auth_name");
const page_num = document.querySelector("#page_num");
const date_start = document.querySelector("#date_start");
const date_finish = document.querySelector("#date_finish");
const stat = document.querySelector("#status_q");
const submitter = document.querySelector("#submit_button");
const table = document.querySelector('table');

const bookStat = document.querySelector('#bookStat');
const pageStat = document.querySelector('#pageStat');
const average = document.querySelector(`#average`);

let avg;
let result;
let arrLength
let pagesArray = [];

function arrayAvg(num){
    pagesArray.push(num);
    arrLength = Number(pagesArray.length);
    
    result = pagesArray.reduce((a, b) => {
        return a+b;
    });
    avg = result / arrLength;
    console.log(`avg is ${avg}`);
}


let booksRead = 0;
let pagesRead = 0;


function createRow(title, author, page, start, finish, status){
    let newRow = document.createElement('tr');
    let titleCell = document.createElement('td');
    titleCell.textContent = title;
    let authorCell = document.createElement('td');
    authorCell.textContent = author;
    let pageCell = document.createElement('td');
    pageCell.textContent = page;
    let startCell = document.createElement('td');
    startCell.textContent = start;
    let finishCell = document.createElement('td');
    finishCell.textContent = finish;
    let statCell = document.createElement('td');
    statCell.textContent = status;

    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pageCell);
    newRow.appendChild(startCell);
    newRow.appendChild(finishCell);
    newRow.appendChild(statCell);
    table.appendChild(newRow);
}

function updateStats(){
    bookStat.textContent = booksRead;
    pageStat.textContent = pagesRead;
    average.textContent = avg;

}

function statMaker(pages){
    booksRead++;
    pagesRead = Number(pagesRead) + Number(pages);



    updateStats();

}

function addBookToLibrary(title, author, pages, status) {
    let bookX = new Book(title, author, pages, status);
    myLibrary.push(bookX);
    console.log(myLibrary);
}


submitter.addEventListener('click', function(){
    let bookNameInput = book_name.value;
    let authorNameInput = auth_name.value;
    let pageNumInput = page_num.value;
    let dateStartInput = date_start.value;
    let dateFinishInput = date_finish.value;
    let statusInput = stat.value;
    arrayAvg(Number(page_num.value));


    addBookToLibrary(bookNameInput, authorNameInput, pageNumInput, statusInput);
    statMaker(pageNumInput);

        createRow(book_name.value, auth_name.value, page_num.value, date_start.value, date_finish.value, stat.value);
            book_name.value = '', auth_name.value = '', page_num.value = '', date_start.value = '', date_finish.value = '', stat.value = 'off';
        arrayLoop();
        event.preventDefault()
    });
    
    

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
}


function arrayLoop(){
    for(i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}





