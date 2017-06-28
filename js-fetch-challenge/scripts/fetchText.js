ready().then(() => {
  // your code, here
  links_list = document.getElementsByTagName("a");

  let page1link = links_list[0];
  let page2link = links_list[1];
  let page3link = links_list[2];

  page1link.addEventListener("click", function(event) {
    event.preventDefault();
    url = page1link.getAttribute("href");
    fetchText(url);
  });

  page2link.addEventListener("click", function(event) {
    event.preventDefault();
    url = page2link.getAttribute("href");
    fetchText(url);
  });

  page3link.addEventListener("click", function(event) {
    event.preventDefault();
    url = page3link.getAttribute("href");
    fetchText(url);
  });
});

let fetchText = (url) =>{
  fetch(`${url}`)
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.text())
  .then(body => {
    console.log(body);
    let main = document.getElementById('main');
    main.innerHTML = body
    // $('#main').append(body);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));

}
