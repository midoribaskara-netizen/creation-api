import express from 'express'
import { chercherRecettes, chercherRecette } from '../services/themealdb.service.js'

const router = express.Router()

router.get('/', async (req, res)  => {
    const recettes = await chercherRecettes()
    const categorie = req.query.categorie

    if(categorie) {
        const recettesFiltres = recettes.filter((recette) => {
            return recette.categorie === categorie
        })

        return res.json(recettesFiltres)
    }

    const tri = req.query.tri
    if (tri === 'nom') {
        recettes.sort((a,b) => {
            return a.nom.localeCompare(b.nom)
        })
    }

    res.json(recettes)
})

router.get('/random', async(req, res) => {
    const recettes = await chercherRecettes()
    const index = Math.floor(Math.random() * recettes.length)
    const recette = recettes[index]

    res.json(recette)
})

router.get('/comparer/:id1/:id2', async (req, res) => {
    const id1 = req.params.id1
    const id2 = req.params.id2

    const recette1 = await chercherRecette(id1)
    const recette2 = await chercherRecette(id2)

    if(!recette1 || !recette2) {
        return res.status(404).json({
            message : 'une ou plusieurs recettes sont introuvables'
        })
    }

    res.json({
            recette1: recette1,
            recette2: recette2
        })
})

router.get('/:id', async (req, res) => {
    const recette = await chercherRecette(req.params.id)

    if (!recette) {
        return res.status(404).json({
            message: 'Recette introuvable'
        })
    }
    res.json(recette)
})

export default router