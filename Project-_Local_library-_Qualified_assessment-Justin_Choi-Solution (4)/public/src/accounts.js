/*use of arrow functions in all of the sections*/
function findAccountById(accounts, id) {
  const found = accounts.find(account => account.id == id)
  return found;
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return sorted;
}
 
function getTotalNumberOfBorrows(account, books) {
    const {id: accountId} = account;
    return books.reduce((accumulator, book) => {
      return (
            accumulator + book.borrows 
            .filter(borrow => borrow.id === accountId)
            .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
        );
    },
                        0)
}

/*using the feature of .map*/
function getBooksPossessedByAccount(account, books, authors) {
  const inPossesion = [];
  books.map((book) => {
    book.borrows.map((borrow) => {
      authors.map((author) => {
        if (author.id === book.authorId) book["author"] = author;
      });
      if (borrow.returned === false && borrow.id === account.id) {
        inPossesion.push(book);
      }
    })
  })
  return inPossesion;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
