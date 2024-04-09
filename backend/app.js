const express = require('express');
const app = express();

app.use('/api/book', (req, res) => {
    const book = 
    {
        userId: "userIdExemple",
        title: "Titre du livre",
        author: "Auteur du livre",
        imageUrl: "URL de l'image",
        year: 2020,
        genre: "Genre du livre",
        ratings: [
            {
                userId: "userIdExemple",
                grade: 4
            }
        ],
        averageRating: 4.5
     };

    // Envoie l'objet book en réponse
    res.status(200).json(book);
});

module.exports = app;
