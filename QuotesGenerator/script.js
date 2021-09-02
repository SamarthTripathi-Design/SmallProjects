const text = document.getElementById("quote");
const author=document.getElementById("author");

const getNewQuotes = async () =>
{
    var url="https://type.fit/api/quotes";
    const response = await fetch(url);
    console.log(typeof response);
    
    const allQuotes = await response.json();
    console.log( allQuotes);

     const indx = Math.floor(Math.random()*allQuotes.length);
     console.log( indx);

    const quote=allQuotes[indx].text;
    console.log( quote);

    const auth=allQuotes[indx].author;
    console.log( auth);

    if(auth==null)
    {
        author="Anonymous";
    }

    text.innerHTML=quote;
    author.innerHTML="- "+auth
}

getNewQuotes();