import "./Projet.scss"
import Spin from "./Spin";

function Projet(props) {
    var ppos1 = 0, ppos2 = 0, ppos3 = 0, ppos4 = 0;
    var projet, projetBod, projetBarControls, projetBar;
    var MIstate = 0, MAstate = 0, Cstate = 0;
    var currentX, currentY;
    var scroll1 = 0, scroll2 = 0;
    var MIposX, MIposY;
    var pos, posI;
    let openModal = () => (
        currentX = projet.style.left,
        currentY = projet.style.top,
        document.querySelector("."+props.name+" .meatImg").style.display = "none",
        document.querySelector("."+props.name+" .spin").style.display = "block",
        projet.style.left = "calc(50% - 500px)",
        projet.style.top = "calc(50% - 400px)",
        projet.style.position = "fixed",
        projet.style.zIndex = "99999",
        projet.style.width = "1000px",
        projet.style.maxHeight = "800px",
        document.querySelector(".modal"+props.name).style.display = "block",
        MAstate = 1
    )
    let closeModal = () => (
        document.querySelector("."+props.name+" .meatImg").style.display = "block",
        document.querySelector("."+props.name+" .spin").style.display = "none",
        projet.style.left = currentX,
        projet.style.top = currentY,
        projet.style.position = "absolute",
        projet.style.zIndex = localStorage.getItem("z"),
        localStorage.setItem("z",+localStorage.getItem("z")+1),
        projet.style.width = "500px",
        projet.style.maxHeight = "500px",
        document.querySelector(".modal"+props.name).style.display = "none",
        MAstate = 0
    )
    let place = () => {
        pos = JSON.parse(localStorage.getItem("m"));
        posI = pos.indexOf(0);
        pos[posI] = 1;
        localStorage.setItem("m", JSON.stringify(pos));
        return posI
    }
    let deplace = () => {
        pos = JSON.parse(localStorage.getItem("m"));
        pos[posI] = 0;
        localStorage.setItem("m", JSON.stringify(pos));
    }
    return (
        <>
        <div className="projetFill">
            <div className={"projet "+props.name} onMouseDown={(e) => (
                e.preventDefault(),
                projet = document.querySelector("."+props.name),
                MAstate == 0 ? (
                    projet.style.zIndex = localStorage.getItem("z"),
                    localStorage.setItem("z",+localStorage.getItem("z")+1)
                ) : ""
            )}>
                <div className="projetBar" onMouseDown={(e) => (
                    e.preventDefault(),
                    MAstate == 0 ? (
                        MIstate == 0 ? (
                            projet = document.querySelector("."+props.name),
                            ppos3 = e.clientX,
                            ppos4 = e.clientY,
                            scroll1 = scrollY,
                            document.onmouseup = (e) => {
                                e.preventDefault();
                                document.onmouseup = null;
                                document.onmousemove = null;
                                document.onscroll = null;
                            },
                            document.onmousemove = (e) => {
                                e.preventDefault();
                                ppos1 = ppos3 - e.clientX;
                                ppos2 = ppos4 - e.clientY;
                                ppos3 = e.clientX;
                                ppos4 = e.clientY;
                                projet.style.top = (projet.offsetTop - ppos2) + "px";
                                projet.style.left = (projet.offsetLeft - ppos1) + "px";
                            },
                            document.onscroll = (e) => {
                                e.preventDefault();
                                scroll2 = scroll1 - scrollY;
                                scroll1 = scrollY;
                                projet.style.top = (projet.offsetTop - scroll2) + "px";
                            }
                        ) : ""
                    ) : "",
                    MIstate == 1 ? (
                        projetBod.style.display = "block",
                        projetBarControls.style.display = "flex",
                        projet.style.width = "500px",
                        projet.style.position = "absolute",
                        projet.style.left = MIposX,
                        projet.style.top = MIposY,
                        projet.style.zIndex = localStorage.getItem("z"),
                        deplace(),
                        MIstate = 0
                    ) : ""
                )}>
                    <h2 className="projetBarTitle">{props.title}</h2>
                    <div className="projetBarControls">
                        <button aria-label="Minimize"
                        onClick={(e) => (
                            e.preventDefault(),
                            projetBod = document.querySelector("."+props.name+" .projetBody"),
                            projetBarControls = document.querySelector("."+props.name+" .projetBarControls"),
                            projet = document.querySelector("."+props.name),
                            projetBar = document.querySelector("."+props.name+" .projetBar"),
                            MAstate == 1 ? closeModal() : "",
                            MIstate == 0
                            ? (
                                MIposX = projet.style.left,
                                MIposY = projet.style.top,
                                projetBod.style.display = "none",
                                projetBarControls.style.display = "none",
                                projet.style.width = "300px",
                                projet.style.position = "fixed",
                                projet.style.top = (window.innerHeight - projet.offsetHeight) + "px",
                                projet.style.left = (place()*315) + "px",
                                projet.style.zIndex = "999",
                                MIstate = 1
                            )
                            : ""
                        )}></button>
                        <button aria-label="Maximize" 
                        onClick={(e) => (
                            e.preventDefault(),
                            projet = document.querySelector("."+props.name),
                            MAstate == 0 ? openModal() : closeModal()
                        )}></button>
                        <button aria-label="Close" 
                        onClick={(e) => (
                            e.preventDefault(),
                            projet = document.querySelector("."+props.name),
                            MAstate == 1 ? closeModal() : "",
                            projet.style.display = "none"
                        )}></button>
                    </div>
                </div>
                <div className="projetBody">
                    <div className="meat">
                        <Spin imgs={props.img}></Spin>
                        <img src={props.img[0]} className="meatImg" alt="Photo du projet"></img>
                        <p className="meatDesc">{props.desc}</p>
                        <div className="meatCards">
                            <div className="meatCardsTechs">
                                {props.techs.map((tech) => (
                                    <div key={tech}><p>{tech}</p></div>
                                ))}
                            </div>
                            <div className="meatCardsLink"><a href={props.link} target="_blank">Lien vers le projet</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"projetModal modal"+props.name}></div>
        </>
    )
}

export default Projet