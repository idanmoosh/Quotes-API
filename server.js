const { query } = require('express');
const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.get('/api/quotes/random' ,(req,res,next)=>{
   const randomQuote={quote: getRandomElement(quotes)}

   res.send(randomQuote);
})
app.get('/api/quotes',(req,res,next)=>{
    let author=req.query.person
    if(author){
        let authorQuotes=[]
        for (let i=0;i<quotes.length;i++){
            if(quotes[i].person===author){
                authorQuotes.push(quotes[i])
            }
        }
        res.send({quotes: authorQuotes})
    }else{ res.send({quotes:quotes})
}
})

app.use(express.static('public'));

app.listen(PORT, ()=>{})