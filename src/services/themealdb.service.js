const BASE = 'https://www.themealdb.com/api/json/v1/1'

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
    const response = await fetch(BASE + '/search.php?s=chicken')
    const donnees = await response.json()

    if (!donnees.meals) {
        return []
    }

    return donnees.meals.map(nettoyer)
}