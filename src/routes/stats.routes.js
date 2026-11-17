import express from 'express'
import { chercherRecette, chercherRecettes } from '../services/themealdb.service.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const recettes = await chercherRecettes()
    const totalRecettes = recettes.length

    let totalIngredients = 0

    for (const recette of recettes) {
        totalIngredients = totalIngredients + recette.nbIngredients 
    }

    let moyenneIngredients = 0

    if (totalRecettes > 0) {
        moyenneIngredients = totalIngredients / totalRecettes
    }

    res.json({
        totalRecettes: totalRecettes,
        totalIngredients: totalIngredients,
        moyenneIngredients: moyenneIngredients
    })
})

export default router 