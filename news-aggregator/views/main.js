fetch('http://localhost:4567/articles')
.then(response => {
  if (response.ok) {
    return response;
  } else {
    let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
    throw(error);
    }
  })
  // .then(response => response.json())
  // .then(Data => {
  //   console.log(Data)
  //   Data.books.forEach((book) => {
  //     $('#books').append(`<li>${book.name}</li>`);
  //   })
  // })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
