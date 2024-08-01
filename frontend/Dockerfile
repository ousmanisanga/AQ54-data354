# Utilisation de l'image de base Node.js
FROM node:20.15.0

# Définir le répertoire de travail dans le conteneur
WORKDIR /src

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet
COPY . .

# Construire le projet
RUN npm run build

# Démarrage de l'application
CMD ["npm", "start"]
