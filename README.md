# Mongo Course

## Contributeurs du groupe 8
* Alexy DE BARROS
* Yani BOUGARA
* Olivier DELMAS

## Installation et Démarrage

### Prérequis
- Docker

### Lancement de l'application
- On commence par lancer docker
```bash
docker exec -it mongo mongosh "mongodb://root:root@localhost:27017"
```
- Ensuite on lance le serveur Express
```bash
npm run dev
```
- Ou si on met le projet en production
```bash
npm run build
npm run start
```

## Structure de la Base de Données

### Schéma de la Collection

| Champ | Type | Description |
|-------|------|-------------|
| Title | String | Titre du document |
| Author | String | Auteur du document |
| Edition | String | Édition du document |
| Type | String | Type de document |
| Lang | String | Langue du document |
| Summary | String | Résumé du document |
| ISBN | String | Numéro ISBN |
| ParutionDate | Date | Date de parution |
| CreatedAt | Date | Date de création |
| UpdatedAt | Date | Date de dernière modification |