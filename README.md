# API de recettes

## Présentation

Ce projet consiste à créer une API avec Node.js et Express pour récupérer et gérer des recettes de cuisine grâce à TheMealDB.

Les recettes sont récupérées depuis plusieurs pays (Canada et Inde) et les données sont transformées pour être plus faciles à utiliser.

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

## Gestion des erreurs

Il est possible de tester les erreurs directement avec les routes :

- **Erreur 404** : essayer de récupérer une recette avec un identifiant qui n'existe pas, par exemple `/api/recettes/00000`.
- **Erreur 500** : elle apparaît lorsqu'une erreur interne se produit pendant le fonctionnement du serveur. Elle renvoie un message `Erreur interne du serveur`.

## Utilisation de l'IA

L'IA a été utilisée comme un outil d'aide pendant le développement du projet. Elle m'a permis de mieux comprendre certaines étapes et d'obtenir des explications sur le code et ma permis de m'expliquer mes erreurs quand j'avais des bug incompréhensible.

## Source

Les recettes utilisées viennent de [TheMealDB](https://www.themealdb.com/api.php).