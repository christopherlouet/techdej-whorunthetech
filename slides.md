---
theme: seriph
background: ./VLaKsTkmVhk.webp
title: Who run the tech ? | L'événement 100% Tech, 100% Expertes
hideInToc: true
info: false
author: Christopher Louët
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
---

# Who run the tech ?

## L'événement 100% Tech, 100% Expertes

JEUDI 28 NOVEMBRE 2024

Une journée inédite de conférences techniques et d'ateliers animés par des femmes, expertes, qui font carrière dans la tech !

<style>
h1 {
  background-color: #FFF;
  background-image: none;
}

p {
  color: #FFF;
  font-weight: bold;
  opacity: 0.7;
}

.slidev-layout h1 + p {
  opacity: 0.8;
}
</style>

---
transition: slide-left
hideInToc: true
---

# Menu

<Toc minDepth="1" maxDepth="1"></Toc>

<br />

Rediffusion : https://www.youtube.com/playlist?list=PL4MHvaRnrWwH001ITEES9RksFgOGHUEhE

---
transition: slide-left
---

# Transformez vos Pipelines avec les GitLab Composants : Retour d’Expérience et Astuces de Pros

* Alice Simon
* Ingénieure DevOps

Gitlab components

* Fonctionnalité Gitlab introduite en version 17 (mai 2024)
* Unité de configuration de pipeline réutilisable
* Remplace les Gitlab CI/CD templates

Présentation des avantages

* basé sur des inputs
* propre pipeline
* possibilité de les ajouter dans un catalogue CI/CD
* composants créés par Gitlab

---
transition: slide-left
---

### Aperçu d'une pipeline classique

<br/>

<p align="center" width="100%">
    <img alt="Pipeline Gitlab" src="/1/pipeline.png"/>
</p>

<br/>
<br/>

## But : remplacer un job par un composant

---
transition: slide-left
---

## Détail pour la création d'un composant Gitlab

<br/>

<p align="center" width="100%">
    <img alt="Structure d'un composant gitlab" src="/1/composant_fichiers.png"/>
</p>

<br/>


Démo sur un composant gitlab

* health check sur une application Web
* comment l'intégrer dans le catalogue CI/CD

---
transition: slide-left
---

# Révolutionnez votre expérience utilisateur avec les Progressive Web Apps

* Khadija ABDELOUALI
* Développeuse Full-Stack

<br/>

PWA : Progressive Web Apps

But : Avoir tous les avantages d'une application mobile et web

Introduit officiellement en 2015

Exemples : Uber, Pinterest, Spotify

---
transition: slide-left
---

Avantages

* Déploiement facile de l'application sur un serveur
* Pas besoin de mettre à jour l'application dans le store
* Compatibilité avec Windows/Mac/linux et Android/iOS
* Réduire les coûts de développement
* Plus facile de trouver des développeurs Web que mobile
* Green IT : consomme moins d'énergie qu'une application web native
* Beaucoup plus légère qu'une application mobile (jusqu'à 99% !)

Explication sur comment créer une application PWA

* Création d'un fichier manifest et d'un service worker (fichier javascript
* Utiliser un plugin du Framework Angular, React, VueJS

---
transition: slide-left
---

Google propose l'outil Lighthouse :

* pour faire des audits sur une application Web classique
* et également sur une application PWA, contenant le fichier manifest
* but : avoir un score de 100% une fois que tout est bien configuré

<br/>

<p align="center" width="100%">
    <img alt="Aperçu d'un rapport lighthouse" src="/2/lighthouse.png"/>
</p>

---
transition: slide-left
---

# Quand le code devient poésie…

* Chloé Guilbaud
* Ingénieure Conceptrice Développeuse

<br/>

Talk suite à une remarque : **ton code c'est de la poésie en fait**

* code simple
* maintenable, basé sur un socle technique très solide
* testable
* évolutif
* capacité à refléter le métier

---
transition: slide-left
---

Secret

* Appliquer des pattern de conception
* Domaine-Driven Design (DDD)
* L'architecture hexagonale 

<br/>
<br/>

Domaine-Driven Design

* Favorise une collaboration entre métiers et développeurs
* Améliore la communication grâce à un langage commun
* Comprendre ce que l'entreprise fait et comment elle le fait

---
transition: slide-left
---

Architecture hexagonale

* Input/output
* Modèle port/adptateur
* Port : définit l'interface ou le contrat
* Adaptateur : vient remplir ce contrat
* Exemple : base de données

But : ne pas changer le code métier si on change d'adaptateur

---
transition: slide-left
---

<p align="center" width="100%">
    <img alt="Aperçu d'un rapport lighthouse" src="/3/architecture_hexagonale.png"/>
</p>

---
transition: slide-left
---

# Les apps écologiques, c’est pas automatique ?

* Johanna Duigou
* Développeuse d'application mobile
* Collectif Green code initiative

<br/>

Introduction avec l'exemple d'Apollo 11

* En 1969, il faut 14 ko mémoire à l'ordinateur de bord pour nous envoyer sur la lune
* Aujourd'hui, une application comme TikTok consomme 100 Mo

---
transition: slide-left
---

Remarques sur les applications mobiles

* La majorité des émissions de gaz à effet de serre provient de la fabrication des smartphones/tablettes
* Rien n'est fait sur l'usage de la batterie par les applications.
* 70% de notre temps de connexion sur les apps mobiles.
* Objectif : rendre les applications mobile plus vert

Code smell

* Introduction Sonar
* Exemple long method, méthode avec beaucoup trop de paramètres
* Green anti-patterns, impact sur l'empreinte carbone de l'application
* Objectif : optimiser le code

---
transition: slide-left
---

Présentation de 8 catégories pour optimiser le code, dans une démarche d'écoconception

Exemples

* Resources utilisées, même lorsqu'elles ne sont plus nécessaires
* Images volumineuses
* Trop d'animations et effets visuels

Solutions

* Référentiel de bonnes pratiques par Green code initiative
* Référentiel du collectif Green IT.fr

<br/>

Présentation approche DevGreenOps : DevOps + Green

Détail d'une analyse statique avec Sonar.

---
transition: slide-left
---

<p align="center" width="100%">
    <img alt="Aperçu d'un rapport lighthouse" src="/4/devgreenops.png"/>
</p>

---
transition: slide-left
---

# Décodons nos pipelines : comprendre pour mieux déployer

* Hafsa ELMAIZI
* Développeuse Backend 

<br />

Pourquoi décoder nos pipelines ?

* Comprendre pour responsabiliser les devs
* Alignement des équipes
* Résoudre des problèmes dans des pipelines sans attendre le retour d'un DevOps
* Optimiser le développement
* Vision globale du cycle de vie d'un projet

---
transition: slide-left
---

Description et utilité d'un pipeline

<p align="center" width="100%">
    <img alt="Pipeline CI/CD" src="/5/pipeline_cicd.png"/>
</p>


Stages classiques d'une Pipeline CI/CD

* CI : source, build, test
* CD : deploy, déploiement continue ou livraison continue

---
transition: slide-left
---

<img alt="Pipeline CI/CD" src="/5/outils.png"/>

---
transition: slide-left
---

Revue de tests automatisés

* Tests unitaires
* Tests d'intégration
* Tests e2e
* Tests de sécurité/charge/performance

DevOps et pratiques CI/CD

* Méthodologie DevOps
* Collaboration améliorée
* Livraison rapide et fiable

---
transition: slide-left
---

<img alt="Pipeline CI/CD" src="/5/gitlab_cicd.png"/>

---
transition: slide-left
---

Pipeline gitlab CI/CD

* Fichier .gitlab-ci.yml
* Templates de pipeline
* Notions de règles (à appliquer sur une branche, etc...)
* Partage de données entre pipelines (Artifacts ou cache)
* Parallélisation

<br />

Sécurité dans les pipelines avec l"approche DevSecOps

* Niveau de variables
* Secrets
* Analyse statique (SAST)
* Analyse des dépendances (SCA)
* Scan de sécurité des containers (Exemple: trivy)

---
transition: slide-left
---

<img alt="Pipeline CI/CD" src="/5/avantages_bonnes_pratiques.png"/>

---
transition: slide-left
---

<img alt="Caractéristiques d'un bon pipeline" src="/5/bon_pipeline.png"/>

---
transition: slide-left
---

# Redécouvrir la coopération : Atelier de Mob Programming

* Marjorie Aubert,
* Manon Carbonnel
* Développeuses

<br />

Mob programming (Software teaming)

* Rassembler les personnes nécessaires au succès d'une tâche autour d'un seul poste de travail
* Comprendre pourquoi la personne a pris une décision pour mieux coder
* Pas obligé d'être expert pour avancer
* Tout le monde peut progresser en même temps

---
transition: slide-left
---

Roles présents dans le mob programming

* Driver : exécuter ce que l'on lui transmet comme informations
* Navigateur/Navigatrice : médiateur qui aide le driver en lui proposant d'exécuter une action en fonction de tout ce qui a été dit
* Mob : personnes qui soumettent les idées

Exemple avec le jeu **Baba is you**

* Permet de mieux illustrer l'enjeu de la collaboration des équipes et de la communication
* Ressentir le côté fun du mob programming
* Permet de voir le problème différemment et apprendre de nouvelles choses

Exemple avec un projet en typescript

* À partir d'une valeur, trouver la couleur la plus proche entre rouge, vert ou bleu
* Permet d'illustrer quelles sont les étapes pour une session classique de mob programming

---
transition: slide-left
---

<p align="center" width="100%">
    <img alt="Règles" src="/6/regles.png"/>
</p>

---
transition: slide-left
---

## Sécurité psychologique

<br />

* Droit à l'erreur
* Partager ses échecs
* Favoriser la parole des personnes moins privilégiées
