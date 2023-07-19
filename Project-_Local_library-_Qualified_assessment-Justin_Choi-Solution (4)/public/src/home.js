function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

/*use of arrow functions*/
function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  books.forEach(book => {
    if (!book.borrows[0].returned) borrowedBooks++;
  });
  return borrowedBooks;
}

/*genre of books and five common genres must be included to this function including the use of .map*/
function getMostCommonGenres(books) {
    const genresOfBooks = books.map((book) => book.genre);
    const fiveCommonGenres = [];
  genresOfBooks.map((genre) => {
      const location = fiveCommonGenres.findIndex((element) => element.name === genre);
      if (location >= 0) {
        fiveCommonGenres[location].count = fiveCommonGenres[location].count + 1;
      } else {
        fiveCommonGenres.push({ name: genre, count: 1 });
      }
    });
    fiveCommonGenres.sort((a, b) => b.count - a.count);
    if (fiveCommonGenres.length > 5) {
      return fiveCommonGenres.slice(0, 5);
    }
  return fiveCommonGenres;
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  const borrows = books.reduce((acc, book) => {
    popularBooks.push({name: book.title, count: book.borrows.length});
  });
  return topFive(popularBooks);
}

/*sort must be used in this function*/
function topFive(array) {
  let popularBooks = array
  .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
  .slice(0,5);
  return popularBooks;
}

/*do not forget the tick marks*/
function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject ={name : authorName, count : count};
    popularAuthors.push(authorObject);
  }
  return topFive(popularAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
