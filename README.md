# API de recettes

## Présentation

Ce projet consiste à créer une API avec Node.js et Express pour récupérer et gérer des recettes de cuisine grâce à TheMealDB.

Les recettes sont récupérées depuis plusieurs pays (canada et inde) et les données sont transformées pour être plus faciles à utiliser.

## Installation

Pour lancer le projet :

```bash
npm install
node server.js
```

Le serveur est accessible sur : `http://localhost:3000`

## Routes principales

- `GET /api/recettes` : récupérer toutes les recettes.
- `GET /api/recettes/:id` : récupérer une recette avec son identifiant.
- `GET /api/recettes/random` : récupérer une recette au hasard.
- `GET /api/recettes/comparer/:id1/:id2` : comparer deux recettes.
- `GET /api/stats` : obtenir les statistiques des recettes.

## Filtres et tris

Il est possible de :
- Filtrer les recettes par catégorie.
- Rechercher une recette par son nom.
- Combiner plusieurs filtres.
- Trier les recettes par nom ou par pays.

Exemples :
- `/api/recettes?categorie=Chicken`
- `/api/recettes?nom=chicken`
- `/api/recettes?tri=nom`
- `/api/recettes?tri=pays`

## Fonctionnalités

- Transformation et nettoyage des données.
- Calcul du nombre d'ingrédients.
- Statistiques calculées à partir des recettes.
- Mise en cache pour éviter de récupérer plusieurs fois les mêmes données.
- Gestion des erreurs 404 et 500.

## Source

Les recettes utilisées viennent de [TheMealDB](https://www.themealdb.com/api.php).