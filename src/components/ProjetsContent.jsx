export default function ProjetsContent({projet}) {

    return (
        <>
        {projet.first ? <>
            <h2>Projet 3</h2>
            <p>Frontend d'un portfolio fait avec des demandes fetch en javascript natif a une API et des éléments du DOM créés dynamiquement avec javascript</p>
            <a href="https://github.com/Pierre133754/OCprojet3" target="_blank">lien vers le projet</a>
        </> : ''}
        {projet.second ? <>
            <h2>Projet 4</h2>
            <p>Optimisation du SEO d'un site de photographie a l'aide de google lightouse, WebAIM wave, optimisations d'images et de scripts, ajouts de meta pour réseaux sociaux et référencement local avec schema.org</p>
            <a href="https://github.com/Pierre133754/OCprojet4realreal" target="_blank">lien vers le projet</a>
        </> : ''}
        {projet.third ? <>
            <h2>Projet 5</h2>
            <p>Site de location créé avec sass et react en utilisant des components et usestates pour apprendre react et ses technologies principales.</p>
            <a href="https://github.com/Pierre133754/OCprojet5" target="_blank">lien vers le projet</a>
        </> : ''}
        {projet.fourth ? <>
            <h2>Projet 6</h2>
            <p>API Backend d'un site de notation de livre, fait avec Nodejs, et mongoDB pour la base de données</p>
            <a href="https://github.com/Pierre133754/OCprojet6" target="_blank">lien vers le projet</a>
        </> : ''}
        </>
    )
}