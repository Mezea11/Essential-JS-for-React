const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// Get books
function getBooks() {
  return data; // returns all data inside the data object array
}

// Get book by id
function getBook(id) {
  return data.find((d) => d.id === id); // this func searches entire array of books and checks if book by id exists in the array
}

// Destructuring the first book

const book = getBook(1); // gets book by id (2 in this case)

const { title, author, publicationDate, pages, genres, hasMovieAdaptation } =
  book; // stores specific data from the book we got by id

console.log(title, author, publicationDate, genres);

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // uses rest operator to first print out first and second genre, then the rest of the items in the genre array

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy", "comedy"]; // Uses spread operator to clone existing array and mutate it to a new one, containing new genres

newGenres;

// Spread operator
const updatedBook = {
  ...book,
  // adding new property
  moviePublicationDate: "2001-12-12",
  // overwriting existing property
  pages: 1210,
}; // spread operator used to push new parameters into the object (string and int), updates the array instead of creating a new one

updatedBook;

// Arrow functions
// Arrow function, easier way of creating the above function
const getYear = (str, a, b) => str.split("-")[0]; // allows us to pass in multiple parameters. this is a function expression!

const getYear2 = (str, a, b) => {
  return str.split("-")[0];
};
console.log(getYear(publicationDate));

// Create traditional func to get year, split publicationDate string and get the first part of the index
/* function getYear(str) {
  return str.split("-")[0];
} */

// Template literal
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`; // Backtick to create template literal. then inside the template literal we can bring in javascript variables and contatinate them without using +
summary;

//Ternary operator
//                  condition      result if true        result if false
const pagesRange = pages > 1000 ? "over a thousand" : "less than one thousand";
pagesRange;
console.log(`the book has ${pagesRange} pages`);
