const BASE = 'https://www.themealdb.com/api/json/v1/1'
let cache = null

function nettoyer(recette) {
    const ingredients = []

    for (let i = 1; i <= 20; i++) {
        const nom = recette['strIngredient' + i]
        const quantite = recette ['strMeasure' + i]

        if (nom && nom.trim() !=='') {
            ingredients.push({
                nom: nom,
                quantite: quantite
            })
        }
    }

    return {
        id: recette.idMeal,
        nom: recette.strMeal,
        categorie: recette.strCategory,
        pays: recette.strArea,
        image: recette.strMealThumb,
        ingredients: ingredients,
        nbIngredients: ingredients.length
    }
}

export async function chercherRecettes() {
    if (cache) {
        return cache
    }

    const pays = ['Canada', 'India']
    const recettes = []
  
    for (let i = 0; i < pays.length; i++) {
        const response = await fetch(BASE + '/filter.php?a=' + pays[i])
        const donnees = await response.json()


            if(donnees.meals) {
                for (let j = 0; j < donnees.meals.length; j++){
                const responseRecette = await fetch(BASE + '/lookup.php?i=' + donnees.meals[j].idMeal)
                const details = await responseRecette.json()

                if (details.meals) {
                    recettes.push(nettoyer(details.meals[0]))
                }
            }
        }
    }
    cache = recettes
    return cache
}

export async function chercherRecette(id) {
    const response = await fetch(BASE + '/lookup.php?i=' + id)
    const donnees = await response.json()

    if (!donnees.meals) {
        return null
    }

    return nettoyer(donnees.meals[0])
}