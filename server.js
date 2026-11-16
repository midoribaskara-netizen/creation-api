import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
    res.json({ message: 'Bonjour !'})
})

app.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000')
})
