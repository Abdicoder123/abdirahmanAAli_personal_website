//API key is N5ox5stCaonYp1XTnq8u4xqUbCBR8jB4

const containsAPIkey = "N5ox5stCaonYp1XTnq8u4xqUbCBR8jB4";

//Global Constants
//var limit ;
//var rating;


// API url
let api_url= `http://api.giphy.com/v1/gifs/search?api_key=${containsAPIkey}&q=puppy`; 
//console.log(api_url);

// This function is one that gets results from the API and it uses the fetch method with my custom HTTP request.
async function getResults(event){
    event.preventDefault();
    try{
        let response = await fetch(api_url);

        console.log("response is: ", response);

        let responceData = await response.json();

        console.log("responseData is: ", responseData);

        displayGif(responseData);
    } catch (e) {
        console.log();}
    }

    //fetch(api_url)
        //.then(responce => responce.json)
        //.then(data => console.log(data))
        
window.onload = () => {
    console.log("Hey");
    const searchForm = document.querySelector(".searchForm");
    searchForm.addEventListener("submit", getResults);

}
// Image is not displaying at all ?
function displayGif (responseData){
    responseData.data.forEach(element => {
    gifResults.innerHTML =+ `<img src = "${gif.images.original.url}">`
    });
}

// I am using DOM to create references to each of the items
//const searchForm = document.querySelector(".searchForm");
const gifSearch = document.querySelector("#gifSearch");
const submitButton = document.querySelector("#submitButton");
const gifResults = document.querySelector(".gifResults");
