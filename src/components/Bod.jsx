import "./Bod.scss"
import Projet from "./Projet"
import me from "../assets/me2.png"
import P3 from "../assets/P3.png"
import P32 from "../assets/P32.png"
import P33 from "../assets/P33.png"
import P34 from "../assets/P34.png"
import P4 from "../assets/P4.png"
import P5 from "../assets/P5.png"
import P52 from "../assets/P52.png"
import P53 from "../assets/P53.png"
import P54 from "../assets/P54.png"
import P6 from "../assets/P6.png"
import P62 from "../assets/P62.png"
import P63 from "../assets/P63.png"
import P64 from "../assets/P64.png"

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
                                img.style.top = (img.offsetTop - scrollY) + "px",
                                imgBuffer = 0
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
                    img={[P5, P52, P53, P54]} name="P5" 
                    desc="Site de location créé avec sass et react en utilisant des components et usestates pour apprendre react et ses technologies principales."
                    link="https://github.com/Pierre133754/OCprojet5"
                    techs={["React", "Sass"]}
                    ></Projet>
                    <Projet 
                    title="API Backend d'un site de notation de livres" 
                    img={[P6, P62, P63, P64]} name="P6" 
                    desc="API Backend d'un site de notation de livre, fait avec Nodejs, et mongoDB pour la base de données"
                    link="https://github.com/Pierre133754/OCprojet6"
                    techs={["Nodejs", "MongoDB"]}
                    ></Projet>
                    <Projet 
                    title="Frontend avec javascript" 
                    img={[P3, P32, P33, P34]} name="P3" 
                    desc="Frontend d'un portfolio fait avec des demandes fetch en javascript natif a une API et des éléments du DOM créés dynamiquement avec javascript"
                    link="https://github.com/Pierre133754/OCprojet3"
                    techs={["Javascript", "DOM"]}
                    ></Projet>
                    <Projet 
                    title="Optimisation d'un site de photographie" 
                    img={[P4]} name="P4" 
                    desc="Optimisation du SEO d'un site de photographie a l'aide de google lightouse, WebAIM wave, optimisations d'images et de scripts, ajouts de meta pour réseaux sociaux et référencement local avec schema.org"
                    link="https://github.com/Pierre133754/OCprojet4realreal"
                    techs={["Lighthouse", "SEO"]}
                    ></Projet>
                </div>
            </section>
        </>
    )
}



export default Bod