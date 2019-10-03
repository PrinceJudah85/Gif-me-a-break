const baseUrl = 'https://api.giphy.com/v1/gifs/search'
//Base URL for the Search Endpoint.
const trending = 'https://api.giphy.com/v1/gifs/trending'
//Base URL for the Trending Endpoint.
const random = 'https://api.giphy.com/v1/gifs/random'
//Base URL for the Random Endpoint.
const apiKeyFirst = '?api_key=KgGG3E7r4Fy1eahbJNPVG6PQ17iZaUmu&q='
const apiKeySecond = '&limit=25&offset=0&rating=G&lang=en'
// API Key got 2 halfs. The first containing the actual API Key, the second had some other additional parameters.

// *** One of the challenges of this project was figuring out where in the URL does the search input go. Turns out it went somewhere after the apiKey and the end of the full link. ***

const button1 = document.querySelector(`#button-search`)
// Variable that points to the button element inside the 'Search' container in HTML.
const input = document.querySelector(`#search`)
// Variable that points to the search bar container / input element in HTML.
const button2 = document.querySelector(`#button-trending`)
// Variable that points to the button element inside the 'Trending' container in HTML.
const button3 = document.querySelector(`#button-random`)
// Variable that points to the button element inside the 'Random' container in HTML.
const button4 = document.querySelector(`#react-button`)
//Variable that points to the button element inside the 'Footer' container in HTML.
const searchBlock = document.querySelector(`#search-block`)
// Variable that points to the 'Search' container in HTML.
const trendingBlock = document.querySelector(`#trending-block`)
// Variable that points to the 'Trending' container in HTML.
const randomBlock = document.querySelector(`#random-block`)
// Variable that points to the 'Random' container in HTML.

let searchGIF = (results) => {
  // this function pulls the results from the axios call for the 'Search' results.
  searchBlock.innerHTML = "";
  // this allows multiple searches without having to reload the page. 

  for (let j = 0; j < 3; j++) {
    // this 'for loop' pulls 5 gif results from the 25 that the page initially loads.
    let i = Math.floor(Math.random() * 25);
    // this function, inside the 'searchGIF' function, filters thru the results of the axios call and selects 5 random Gifs from the 25 that are initially loaded on the page. 
    let searchWindow = document.createElement('div');
    // this variable creates a 'div' container where the content will be displayed.
    searchWindow.innerHTML =
      `<img src='${results[i].images.fixed_height.url}'>`
    // the content that will be added to the newly made 'div'.
    searchBlock.append(searchWindow)
    //the actual addition of said content to said container.
  }
}

let trendingGIF = (results) => {
  //this function pulls the results from the axios call for the 'Trending' results.
  trendingBlock.innerHTML = "";
  // this allows multiple searches without having to reload the page. 
  for (let j = 0; j < 3; j++) {
    // this 'for loop' pulls 5 gif results from the 25 that the page initially loads.
    let i = Math.floor(Math.random() * 25);
    // this function, inside the 'TrendingGIF' function, filters thru the results of the axios call and selects 5 random Gifs from the 25 that are initially loaded on the page. 
    let trendingWindow = document.createElement('div');
    // this variable creates a 'div' container where the content will be displayed. 
    trendingWindow.className = `gifRow`
    trendingWindow.innerHTML = `
    <img src='${results[i].images.fixed_height.url}'/>`
    //the content that will be added to the newly made 'div'.
    trendingBlock.append(trendingWindow)
    //the actual addition of said content to said container. 
  }
}

let randomGIF = (results) => {
  //this function pulls the results from the axios call for the 'Random' results
  // this allows multiple searches without having to reload the page. 
  let randomWindow = document.createElement('div');
  // this variable creates a 'div' container where the content will be displayed. 
  randomWindow.className = "gif-row";
  randomWindow.innerHTML =
    `<img src ='${results}'>`
  // the content that will be added to the newly made 'div'
  randomBlock.append(randomWindow)
  //the actual addition of said content to said container
}

button1.addEventListener("click", async () => {
  let response = await axios.get(`${baseUrl}${apiKeyFirst}${input.value}${apiKeySecond}`);
  searchGIF(response.data.data)
})
//the button event listener that activates the axios call for the 'searchGIF' content. 

button2.addEventListener("click", async () => {
  let response = await axios.get(`${trending}${apiKeyFirst}${apiKeySecond}`);
  trendingGIF(response.data.data)
})
//the button event listener that activates the axios call for the 'trendingGIF' content.

button3.addEventListener("click", async () => {
  randomBlock.innerHTML = "";
  for (i = 0; i < 3; i++) {
    let response = await axios.get(`${random}${apiKeyFirst}${apiKeySecond}`);
    randomGIF(response.data.data.images.fixed_height.url)
  }
})
button4.addEventListener("click", function () {
  let popUp = `<h3>'...But not before Drinks!")'</h3>`;
})
//the buton event listener that activates the axios call for the 'randomGIF' content.

// ********* Add Event Listener for Button click ******
// When button is clicked, First createElment (div). Take new div just created thru innerHTML new <H1> tag, with EDITS. then append to the <header>