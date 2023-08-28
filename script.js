function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

const book1 = new Book("Book 1", "James Prausw", 2013);
const book2 = new Book("Book 2", "Machina Exter", 2023)

console.log(book1.getSummary())
console.log(book2.getSummary())