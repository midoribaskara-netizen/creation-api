import express from 'express'
import { chercherRecettes, chercherRecette } from '../services/themealdb.service.js'

const router = express.Router()

router.get('/', async (req, res)  => {
    const recettes = await chercherRecettes()

    res.json(recettes)
})

router.get('/:id', async (req, res) => {
    const recette = await chercherRecette(req.params.id)

    res.json(recette)
})

export default router