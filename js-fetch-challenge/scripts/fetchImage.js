ready().then(() => {
  // your code, here
  fetch("/images/logo.png")
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => {
    let image = response.url
    console.log(image);
    // let imageElement = document.createElement('img')
    // imageElement.src = image
    // console.log(imageElement);
    let main = document.getElementById('main');
    main.innerHTML = `<img src=${image}>`;
    // $('#main').append(`<img src=${image}>`);
    // main.appendChild(imageElement)
    // $('#main').append(`<img src="${imageElement}">`)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
});
