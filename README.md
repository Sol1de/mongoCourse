# Mongo Course

## Contributeurs du groupe 8
* Alexy DE BARROS
* Yani BOUGARA
* Olivier DELMAS

## Installation et Démarrage

### Prérequis
- Docker
- Node

### Lancement du projet
- On commence par lancer docker
```bash
docker compose up --build
```
- On installe ensuite les dépendances du projet
```bash
npm install
```
- Puis on lance le serveur express
```bash
npm run dev
```
- Ou si on met le projet en production
```bash
npm run build
npm run start
```
- Pour seeder la base de donnée
```bash
npm run seed
```

## Troubleshooting

### Authentication failed
Si lors du demarrage de votre démarrage du projet vous ne parvenez pas à vous connecter à mongoDb,
il vous faut dabord terminer puis supprimer vos conteneurs et les volumes associés
```bash
docker compose down -v
```
Vous aurez aussi besoin de terminé votre serveur express. Par la suite demarrez à nouveau votre docker puis relancé votre serveur express
```bash
docker compose up --build
npm run dev
```
il ne vous restera plus qu'a seed votre database
```bash
npm run seed
```
Et voila votre problème devrait être résolu !

## Structure de la Base de Données

### Schéma de la Collection

| Champ | Type | Description |
|-------|------|-------------|
| Title | String | Titre du document |
| Author | String | Auteur du document |
| Edition | String | Édition du document |
| Type | Enum | Type de document |
| Lang | String | Langue du document |
| Summary | String | Résumé du document |
| ISBN | String | Numéro ISBN |
| ParutionDate | Date | Date de parution |
| CreatedAt | Date | Date de création |
| UpdatedAt | Date | Date de dernière modification |