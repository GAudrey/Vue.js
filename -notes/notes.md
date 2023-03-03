- CDN Vue.js : https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
- npm init vue@latest . -> crée le dossier dans le dossier courant ouvert

- Vue -> composition
- {{  }} -> appeler une variable en Vue
- Test End-to-End : test utilisateur, pas un test unitaire !

- npx degit https://github.com/TRIPTYK-ACADEMY/vue-training-boilerplate . -> boiler plate

- Extension Vue language features (Volar)
- Extension Vetur -> réindentation à la sauvegarde


**Exo 1 - Catspam**

Créer une petite application qui au click sur le bouton "spam" va ajouter une ou plusieurs images selon le nombre de click déjà effectué.
Exemple :
- Click 1 : Ajouter une image
- Click 2 : Ajouter deux images
- Click 3 : Ajouter trois images
- Click N : Ajouter N images

Vous pouvez également ajouter un événement sur les images qui fera la même chose qu'au click sur le bouton "spam"

Photo : https://cdn.discordapp.com/attachments/493767680256638979/977567817501134878/20220521_154521.jpg

**Exo 2 - Debt analysis**

Créer une application pour gérer vos dépenses et revenus.
Dans cette application, vous allez afficher deux formulaires avec le nom et le montant pour l'entrée/sortie. Si un des champs du formulaire n'est pas rempli, il ne sera pas possible d'ajouter une entrée/sortie.

Lister également les entrées et sorties juste en-dessous des formulaires avec la possibilité de supprimer l'entrée/sortie.
En-dessous du listing, afficher le résultat du calcul des "revenus - dépenses". Si celui-ci est négatif, l'afficher en rouge.

**Exo 3 - Darwin Awards**

Vous avez une API qui vous est mise à disposition. Celle-ci contient des lauréats des Darwin Awards.
Pour lancer l'API, éxécutez la commande suivante: json-server --watch db.json -p 8000

Dans cette application, vous allez mettre en place une recherche sur cette API. Créer un input dans l'App.vue qui lorsque celui-ci aura au minimum 3 caractères, effectuera une recherche dans l'API via la requête suivante: http://localhost:8000/darwins?q=VOTRERECHERCHE

Afficher le résultat dans un component Result.vue avec le nom, la cause de la mort et la description pour chaque résultat reçu.

Ajouter également un bouton "Réinitialiser la recherche" dans le cas où on a un résultat qui supprime la recherche et le résultat