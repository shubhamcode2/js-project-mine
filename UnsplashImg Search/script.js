// xEwVHXO5FLjipzmqK5pZ5JWWlepbmMJLUUILejkeflQ
// https://api.unsplash.com/search/photos?page=1&query=office&client_id=xEwVHXO5FLjipzmqK5pZ5JWWlepbmMJLUUILejkeflQ


const accessKey = "xEwVHXO5FLjipzmqK5pZ5JWWlepbmMJLUUILejkeflQ";
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#searchBox");
const searchResult = document.querySelector("#searchResult");
const showMore = document.querySelector("#showMoreBtn");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = ` https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })
     showMore.style.display= "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1; 
    searchImage();
});

showMore.addEventListener('click',()=>{
    page++;
    searchImage();
})