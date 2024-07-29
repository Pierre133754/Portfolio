import "./Bod.scss"
import Projet from "./Projet"
import me from "../assets/me2.png"
import P3 from "../assets/P3.png"
import P4 from "../assets/P4.png"
import P5 from "../assets/P5.png"
import P6 from "../assets/P6.png"

function Bod() {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var img;
    var imgBuffer = 1;
    localStorage.setItem("p", 0);
    localStorage.setItem("z", 9);
    localStorage.setItem("m", JSON.stringify([0,0,0,0]));

    return (
        <> 
            <section id="bod" className="bod">
                <div className="bodTry">
                    <img src={me} alt="me" id="me" className="bodTryImg" 
                    onMouseDown={(e) => (
                            e.preventDefault(),
                            localStorage.setItem("p", 0),
                            img = document.querySelector("#me"),
                            img.style.zIndex = localStorage.getItem("z"),
                            localStorage.setItem("z",+localStorage.getItem("z")+1),
                            img.style.position = "fixed",
                            pos3 = e.clientX,
                            pos4 = e.clientY,
                            (imgBuffer == 1) ? (
                                ((scrollY > 0 ) ? (
                                    img.style.top = (img.offsetTop - scrollY) + "px",
                                    imgBuffer = 0
                                ) : "")
                            ) : "",
                            document.onmouseup = (e) => {
                                e.preventDefault();
                                pos1 = pos3 - e.clientX;
                                pos2 = pos4 - e.clientY;
                                pos3 = e.clientX;
                                pos4 = e.clientY;
                                img.style.top = (img.offsetTop - pos2) + "px";
                                img.style.left = (img.offsetLeft - pos1) + "px";
                                document.onmouseup = null;
                                document.onmousemove = null;
                                localStorage.setItem("p", 1);
                            },
                            document.onmousemove = (e) => {
                                e.preventDefault();
                                pos1 = pos3 - e.clientX;
                                pos2 = pos4 - e.clientY;
                                pos3 = e.clientX;
                                pos4 = e.clientY;
                                img.style.top = (img.offsetTop - pos2) + "px";
                                img.style.left = (img.offsetLeft - pos1) + "px";
                            }
                        )
                    }></img>
                </div>
                <div className="bodProjets">
                    <Projet 
                    title="Site de location avec React" 
                    img={P5} name="P5" 
                    desc="Site de location créer avec sass et react en utilisant des components et usestate pour apprendre react et ses technologies principales."
                    link="https://github.com/Pierre133754/OCprojet5"
                    techs={["React", "Sass"]}
                    ></Projet>
                    <Projet 
                    title="API Backend d'un site de notation de livres" 
                    img={P6} name="P6" 
                    desc="API Backend d'un site de notation de livre, fais avec Nodejs, et mongoDB pour la base de données"
                    link="https://github.com/Pierre133754/OCprojet6"
                    techs={["Nodejs", "MongoDB"]}
                    ></Projet>
                    <Projet 
                    title="Frontend avec javascript" 
                    img={P3} name="P3" 
                    desc="Frontend d'un portfolio fait avec des demandes fetch en javascript natif a une API et des elements du DOM crées dynamiquement avec javascript"
                    link="https://github.com/Pierre133754/OCprojet3"
                    techs={["Javascript", "DOM"]}
                    ></Projet>
                    <Projet 
                    title="Optimisation d'un site de photographie" 
                    img={P4} name="P4" 
                    desc="Optimisation du SEO d'un site de photographie a l'aide de google lightouse, WebAIM wave, optimisation d'images et de scripts, ajouts de meta pour réseaux sociaux et réferencement local avec schema.org"
                    link="https://github.com/Pierre133754/OCprojet4realreal"
                    techs={["Lighthouse", "SEO"]}
                    ></Projet>
                </div>
            </section>
        </>
    )
}



export default Bod