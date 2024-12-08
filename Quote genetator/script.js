// https://quotes-api-self.vercel.app/quote

//darkthemecode

let moon =  document.querySelector("#moonImg");
moon.addEventListener('click',()=>{
    document.body.classList.toggle("darkTheme")
    if(document.body.classList.contains("darkTheme")){
        moon.src = "/assets/sun.png";
    }else{
        moon.src = "/assets/Moon-png-photo-free-download-750x730.png";

    }
})


document.querySelector("#QuoteBtn").addEventListener('click', getQuote)

const quote = document.querySelector("#newQuote");
const apiUrl = "https://quotes-api-self.vercel.app/quote";


async function getQuote() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quote.innerHTML = data.quote;
    document.querySelector("#newQuoteAuther").innerHTML = data.author;

}



function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=`
        + quote.innerHTML 
        + " -----by :"
        + document.querySelector("#newQuoteAuther").innerHTML 
        ,"tweet window","width:600,height:300");
}
