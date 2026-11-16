import express from 'express'
import { chercherRecettes } from './src/services/themealdb.service.js'

const app = express()

app.get('/hello', (req, res) => {
    res.json({ message: 'Bonjour !'})
})

app.get('/test-recettes', async (req, res) => {
    const recettes = await chercherRecettes()

    res.json(recettes)
})

app.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000')
})
