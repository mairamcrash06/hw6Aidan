function filterAndPrintBooks(books) {
    let booksWithU = books.filter(book => book.toLowerCase().includes('у'));

    let booksWithoutU = books.filter(book => !book.toLowerCase().includes('у'));

    booksWithU = booksWithU.map(book => book + " книга с буквой «у»")

    for (let i = 0; i < booksWithU.length; i++) {
        console.log(booksWithU[i]);
    }

    console.log("Остальные книги:");

    for (let i = 0; i < booksWithoutU.length; i++) {
        console.log(booksWithoutU[i]);
    }
}

const books = [
    'Узкий круг',
    'Ульям Шекспир',
    'Висячие сады',
    'Умар сахаба',
    'Сальвадор Дали',
    'Путь Шиноби'
];

filterAndPrintBooks(books);



////////
const input = document.getElementById("input")
const increment = document.getElementById("incr")
const decrement = document.getElementById("decr")
let count = 0

increment.addEventListener("click", () => {
    count++
    input.value = count
})


decrement.addEventListener("click", () => {
    count--
    input.value = count
})