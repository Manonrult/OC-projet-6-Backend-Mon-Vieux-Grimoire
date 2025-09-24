const express = require('express');

const app = express();

app.use(express.json()); //extraire le corps JSON pour gérer la requête POST 

/**Gestion erreurs de Cors */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //accéder API depuis n'importe quelle origine 
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.post('/api/books', (req, res, next) =>{
  console.log(req.body)
  res.status(201).json({message:'Objet créé'});
})
app.get('/api/books', (req, res, next) => {
  const books=[ 
  {
    userId:String,
    title:String,
    author:String,
    imageUrl:String,
    year:Number,
    genre: String,
    ratings:[
      {
        userId:String,
        grade:Number
      }
    ]
    averageRating:Number
  }
]
res.status(200).json(books)
});

module.exports = app;
