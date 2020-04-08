
let linkList = document.querySelectorAll(".conditionalDisplay");
console.log(linkList);
carrouselHidden = false;
let carrousel = document.querySelector("#carouselExampleControls")
let mainText = document.querySelector("#mainText")
let navCollapse = document.getElementById("navbarNavDropdown")




console.log(navCollapse)

if (isMobileDevice() == false) {
    carrousel.classList.toggle("hide")
   
} 

if (isMobileDevice() == true) {
  
    

    let infoDiv = document.createElement("div")
    infoDiv.className = "infoDiv"
    
    let infobasicaTitulo = document.createElement("h2")
    infobasicaTitulo.className = "infobasicaTitulo"
    infobasicaTitulo.innerHTML = `P.P.: P.I.: Métodos Psicofisiológicos <br />
    Código 777 Cat.   Iorio, Alberto Andres <br />
    Dictado 1° y 2° cuatrimestre  <br />`


    let infobasicaCuerpo = document.createElement("h2")
    infobasicaCuerpo.className = "infobasicaCuerpo"
    infobasicaCuerpo.innerHTML = `Proximamente -- Calendario Académico`


    infoDiv.appendChild(infobasicaTitulo);
    infoDiv.appendChild(infobasicaCuerpo);

    mainText.appendChild(infoDiv);


}



//Itera thru links de display condicional; maneja su rendering.
for (let index = 0; index < linkList.length; index++) {
   
    linkList[index].addEventListener("click", (event) => {

      

        //HOME

        
        if (event.target.innerHTML == "Home" && carrouselHidden == true) {
            carrousel.classList.toggle("hide")
            mainText.innerHTML = "";
            carrouselHidden = false;
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (isMobileDevice() == true) {
            carrouselConcealer();
            mainText.innerHTML = "";

            let infoDiv = document.createElement("div")
            infoDiv.className = "infoDiv"
            
            let infobasicaTitulo = document.createElement("h2")
            infobasicaTitulo.className = "infobasicaTitulo"
            infobasicaTitulo.innerHTML = `P.P.: P.I.: Métodos Psicofisiológicos <br />
            Código 777 Cat.   Iorio, Alberto Andres <br />
            Dictado 1° y 2° cuatrimestre  <br />`


            let infobasicaCuerpo = document.createElement("h2")
            infobasicaCuerpo.className = "infobasicaCuerpo"
            infobasicaCuerpo.innerHTML = `Proximamente -- Calendario Académico`


            infoDiv.appendChild(infobasicaTitulo);
            infoDiv.appendChild(infobasicaCuerpo);

            mainText.appendChild(infoDiv);
            navCollapse.classList = "collapse navbar-collapse"
       
       }

        
        ///////////////////////////////
        ////LA CATEDRA////////////////
        /////////////////////////////

       //INFO BASICA
        if (event.target.id == "info") {
            carrouselConcealer();
            mainText.innerHTML = "";

            let infoDiv = document.createElement("div")
            infoDiv.className = "infoDiv"
            
            let infobasicaTitulo = document.createElement("h2")
            infobasicaTitulo.className = "infobasicaTitulo"
            infobasicaTitulo.innerHTML = `P.P.: P.I.: Métodos Psicofisiológicos <br />
            Código 777 Cat.   Iorio, Alberto Andres <br />
            Dictado 1° y 2° cuatrimestre  <br />`


            let infobasicaCuerpo = document.createElement("h2")
            infobasicaCuerpo.className = "infobasicaCuerpo"
            infobasicaCuerpo.innerHTML = `Proximamente -- Calendario Académico`


            infoDiv.appendChild(infobasicaTitulo);
            infoDiv.appendChild(infobasicaCuerpo);

            mainText.appendChild(infoDiv);
            navCollapse.classList = "collapse navbar-collapse"

        }

        //PROGRAMA
        if (event.target.id == "programa") {
            
            if (isMobileDevice() == false) {

                carrouselConcealer();
                mainText.innerHTML = "";

                let programaDiv = document.createElement("div")
                programaDiv.className = "infoDiv"
                
                let programa = document.createElement("div")
                programa.className = "pdf"
                programa.innerHTML =  `<object width="100%" data="programa.pdf"></object>`
                

                programaDiv.appendChild(programa)
                mainText.appendChild(programaDiv);
          }

          else if (isMobileDevice() == true){

            progLink = document.createElement("a")
            progLink.setAttribute("href", "./programa.pdf")
            progLink.setAttribute("download", "./programa.pdf")
            progLink.click()
            

          }

        


            navCollapse.classList = "collapse navbar-collapse"
           

        }

        //TP
        if (event.target.id == "trabajoPractico") {
            carrouselConcealer();
            mainText.innerHTML = "";
           
            let tpDiv = document.createElement("div")
            tpDiv.className = "tpDiv"

            let tpIntro = document.createElement("h3")
            tpIntro.className = "h3__style"
            tpIntro.innerHTML = "La práctica posee un trabajo práctico, dividido en tres entregas, cuya aprobación es requisito para aprobar la materia. El mismo comprende la reseña bibliográfica de un tema a elección (confección del estado del arte), la elaboración de un proyecto de investigación original, y su exposición en una sesión de posters."

            let tp1 = document.createElement("p")
            tp1.className = "tpLinks"
            tp1.innerHTML = `<a href="TP1.docx"> Instrucciones Trabajo Práctico 1 </a>`
            
            
            let tp2 = document.createElement("p")
            tp2.className = "tpLinks"
            tp2.innerHTML = `<a href="TP2.docx"> Instrucciones Trabajo Práctico 2 </a>`

            tpDiv.appendChild(tpIntro)
            tpDiv.appendChild(tp1);
            tpDiv.appendChild(tp2);

            mainText.appendChild(tpDiv)
            navCollapse.classList = "collapse navbar-collapse"

        }

        //NOSOTROS
        if (event.target.id == "nosotros") {
            createMemPage()
            navCollapse.classList = "collapse navbar-collapse"
        }


        if (event.target.id == "teo__dexperimental") {

            createLinks(
                "Clase teórica de diseño experimental",
                ["Diseño Experimental"],
                ["drive.google.com/open?id=1WCFEiZXmxUEzMEdhyNq_8iO308xzoaWT"],
                ["drive.google.com/file/d/1gLZULAkNb2n_Z_yOEFIOExqdnsqdbDM8/view?usp=sharing"],
                ["Experimental Design booklet"]
            )
            navCollapse.classList = "collapse navbar-collapse"
        }


        if (event.target.id == "teo__estadistica") {

            createLinks(
                "Clase teórica de estadistica",
                ["Clase 1", "Clase 2"],
                ["drive.google.com/open?id=1vjuVXe5fdXKDGsJ58p9PPLmLUp7MprnA", "drive.google.com/open?id=1-qtA15ZWHEK-Rgto-k1JeUTjWKabSyTh"],
                ["drive.google.com/open?id=1vZF1A1P7TPI3gcbBAUfrrch3uuYNLzPU"], ["Estadistica (Mini)"]

            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "teo__EEG") {
            
            createLinks(
                "Clase de electroencefalografía & potenciales relacionados a eventos.",
                ["Clase 1", "Clase 2"],
                ["drive.google.com/open?id=1zzkmfUUtlvUiJ2EN1MO4V35ZCANzPOwZ","drive.google.com/open?id=1R8EjS1lDAiOCNUMSeYnwvkNKkLzJYtOQ"],
                ["drive.google.com/open?id=1f5_u7Ihd3BTq5WmSTI7e9J4NHJC-2F2M"],
                ["EEG booklet"]
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "teo__SCR") {

            createLinks(
                "Clase de Actividad Electrodérmica",
                ["Clase 1"],
                ["drive.google.com/open?id=1HulGhi7IslZj9fjVOMocPdtt7S9V00-c"],
                ["drive.google.com/open?id=1ama2ab7WYwNFHxJo9GK1LnpGfmDIZrYQ"],
                ["SCR booklet"]
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "teo__fMRI") {

            createLinks(
                "Clase de Resonancia Magnética Funcional",
                ["Clase 1"],
                ["drive.google.com/open?id=1wwgfyT0oju3A5eHy_DgCm-dJFRAu7Grn"],
                [],
                []
            )
            navCollapse.classList = "collapse navbar-collapse"
        }


        if (event.target.id == "teo__eyetracking") {
            
            createLinks(
                "Clase de Eyetracking & Electromiografía",
                ["Clase 1"],
                ["drive.google.com/open?id=1UC5HcgJ3-tPe6E8MrW5Jxq5U0lkHt1Ci"],
                ["drive.google.com/open?id=1lRoSjFsOL8nqBd_bKYxfLpGfxkWxggT4", "drive.google.com/open?id=1vEqNBffeFLSfeTg4UC1BokYx7PVuvP7R"],
                ["Eyetracking booklet", "Facial expressions booklet"]
                
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "teo__poster") {
            createLinks(
                "Clase de Poster",
                ["Clase 1"],
                ["drive.google.com/open?id=1ydHdIZAPnayz35daHb9tJYbo7fx1c0vC"],
                ["drive.google.com/open?id=19e-D9ZCw7qBSmt_oUv7IrEkh9aVoCSlp"],
                ["Como hacer un buen poster"]
            )
            navCollapse.classList = "collapse navbar-collapse"
        }


        if (event.target.id == "pr__intro") {
            createLinks(
                "Clase introductoria",
                ["Clase 1"],
                ["drive.google.com/open?id=16m24cUpXIVsOUiJBdub-RxAmvfnBN51e"],
                ["drive.google.com/open?id=18s5LHhdku8weAttKyOUOo87pu_pKabvt"],
                ["Como insertarse en la investigación"]
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "pr__paper") {
            createLinks(
                "Clase de paper",
                ["Clase 1", "Como hacer el TP"],
                ["drive.google.com/open?id=14HH_seJarnpW0pbWA6zHlaDU2GhAKl0H", "drive.google.com/open?id=1GBeo5llXbDfIWS-oA0CP2XlYjMRParXd"],
                ["drive.google.com/open?id=1dfCd-bOKYTkLKYpKMD5gEL-W4ScAZG8u"],
                ["Como obtener papers."]
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "pr__estadistica") {
            createLinks(
                "Clase práctica de estadistica",
                ["Clase 1"],
                ["drive.google.com/open?id=1IHxc1DVz9_pzvMhrsX8Hwvm_6Ewo3aUI"],
                [], []

            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "pr__scr") {
            createLinks(
                "Clase práctica de Actividad Electrodérmica",
                ["Clase 1"],
                ["drive.google.com/open?id=1FsynfouPeV9ZceK1mLyy3xtiIipZ3hWG"],
                [], []
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "pr__eeg") {
            createLinks(
                "Clase práctica de EEG",
                ["Clase 1"],
                ["drive.google.com/open?id=19E9BJg19_GbXRRXbYqcL4I8-zoEUGO2O]"],
                [
                "drive.google.com/open?id=1f5_u7Ihd3BTq5WmSTI7e9J4NHJC-2F2M",
                "drive.google.com/open?id=1KT3zLqa7bvPNUfbl3VwGpYNpHe02Pmv5", 
                "drive.google.com/open?id=1bTrAGA7N_MzJIwFfqTnlaYgPlz9zBYPv",
                "drive.google.com/open?id=1pXEaYlMX1lmjyG7s0PQK5LOnECrMz1iC",
                "drive.google.com/open?id=1w9AEqDfU0hHXdj55ciZPqSEYvPYegwED",
                "drive.google.com/open?id=1169xeIy5TAPMmfjWjR5lepC5kOTAlWKk"
                ],
                [
                    "Eeg booklet",
                    "Paper ondas alfa",
                    "Paper ondas beta",
                    "Paper ondas delta",
                    "Paper ondas gamma",
                    "Paper ondas theta"
                ]
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "pr__erp") {
            createLinks(
                "Clase Práctica de potenciales evocados",
                ["Clase 1"],
                ["drive.google.com/open?id=1nHCkDUlIn85E7498p_4eU_kVSsFeS4OG"],
                [], []
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "pr__fmri") {
            createLinks(
                "Clase práctica de fMRI",
                ["Clase 1"],
                ["drive.google.com/open?id=1nV_BCWuUc3UcKeFMSf07rAIrNifpQTxK"],
                [] , []

            )
            navCollapse.classList = "collapse navbar-collapse"
        }

        if (event.target.id == "pr__animales") {
            createLinks(
            "Clase de modelos animales",
            ["Parte 1", "Parte 2"],
            ["drive.google.com/open?id=1Y2_hDF5fCaDsSLcyM940CHLqXOY6PdDR", "drive.google.com/open?id=1Mrl_wuHC0e1DY--c51WoluIuS7W9707w"],
            [], []
            )
            navCollapse.classList = "collapse navbar-collapse"
        }

    })

    
}


let carrouselConcealer = () => {

    if (carrouselHidden == false ){

        carrousel.classList.add("hide")
        carrouselHidden = true
   
    }

}


// Recibe arrays de titulos, links, y los spawnea automáticamente. Pastear los links SIN http(s)
let createLinks = (clase, titulObligatorio, obligatorios, optativos, titulOptativo) => {

carrouselConcealer();
mainText.innerHTML = "";

let teoDiv = document.createElement("div")
teoDiv.className = "tpDiv"

let teoIntro = document.createElement("h3")
teoIntro.className = "h3__style"
teoIntro.innerHTML = `${clase}`

let TeoOblig  = document.createElement("h4")
TeoOblig.className = "h4__style"
TeoOblig.innerHTML = "Lectura Obligatoria"


let teoOpcional = document.createElement("h4")
teoOpcional.className = "h4__style"
teoOpcional.innerHTML = "Lectura Complementaria"

teoDiv.appendChild(teoIntro)
teoDiv.appendChild(TeoOblig)

for (let i = 0; i < obligatorios.length; i++) {

    let linkNuevo = document.createElement('p')
    linkNuevo.className = "tpLinks"
    linkNuevo.innerHTML = `<a href="http://${obligatorios[i]}"> ${titulObligatorio[i]} </a>`
    teoDiv.appendChild(linkNuevo)
}

if (optativos.length > 0 ){

teoDiv.appendChild(teoOpcional)

for (let i = 0; i < optativos.length; i++) {
    let linkNuevo = document.createElement('p')
    linkNuevo.className = "tpLinks"
    linkNuevo.innerHTML = `<a href="http://${optativos[i]}"> ${titulOptativo[i]} </a>`
    teoDiv.appendChild(linkNuevo)
}
}

mainText.appendChild(teoDiv)

}

let createMemPage = () => {
    carrouselConcealer();
            mainText.innerHTML = "";

            let miembros = [
                { 
                    nombre : "Alberto Iorio",
                    img : "iorio.jpg",
                    desc : ` Doctor en Medicina, Neurobiología y conducta. Grupo de Neurociencias en Humanos - Laboratorio de Biología del Comportamiento - IByME CONICET Grupo de Neurociencias en Humanos - Departamento Biocomportamental - Instituto de Investigaciones - FP UBA.`,
                    Id: "Iorio"
                },
                { 
                    nombre : "Mario Andreau",
                    img : "mario.jpg",
                    desc : `Jorge Mario Andreau finalizó sus estudios de grado en Psicología el año 2002. Becado por el gobierno Japonés, realizó estudios de Maestría y Doctorado en la Universidad de Kyoto. Finalizó su doctorado en el año 2011. Su tesis doctoral versó sobre la actividad de las neuronas de la corteza prefrontal de monos macacos, durante tareas de recuperación de memoria. En el año 2012, realizó un Fellowship en la Universidad de Bonn (Alemania), utilizando el método Patch-Clamp para el estudio de la dinámica del calcio en astrocitos y células gliales NG2, en ratones transgénicos.  Desde su regreso al país, se desempeña como investigador en el Instituto de Investigaciones de la Facultad de Psicología y Psicopedagogía de la USAL y en el Instituto de Biología y Medicina Experimental (IBYME), en donde realiza investigaciones con la metodología de Electroencefalograma (EEG) y potenciales relacionados con eventos (ERP). El Dr. Andreau es además profesor titular de las cátedras de Neurociencias I, II y III de la Universidad del Salvador y Director del Instituto de Investigación de la Facultad de Psicología y Psicopedagogía de la USAL desde Octubre de 2016.`,
                    Id: "Mario"
                },
                {
                    nombre : "Mariano Ramborger",
                    img : "mariano.jfif",
                    desc :  "Mariano Ramborger se recibió como licenciado en Psicología en el año 2014, en la Universidad de Buenos Aires. Comenzó sus estudios de doctorado en el Centro de Estudios Farmacológicos y Botánicos (CEFyBO), es investigando sobre los efectos epigenéticos del estrés prenatal.",
                    Id: "Mariano"
                },
                {
                    nombre : "Valeria Pedrón",
                    img : "vale.jfif",
                    desc : "Placeholder",
                    Id: "Valeria"
                },
                {
                    nombre : "Javier Muñiz",
                    img : "javi.jpg",
                    desc : `Javier Andrés Muñiz estudió en la Universidad Nacional de Quilmes y obtuvo el título de Lic. en Biotecnología en el año 2013.
                    Durante su carrera de grado realizó una pasantía en el laboratorio de Citoarquitectura y Plasticidad Neuronal (ININCA-CONICET).
                    Luego, en el 2014, realizo el doctorado en el Instituto de Investigaciones Farmacológicas (ININFA-UBA-CONICET), de la Facultad de Farmacia y Bioquímica, obteniendo en el 2019 el titulo de Doctor de la Universidad de Buenos Aires en el área de ciencias medicas.
                    Actualmente se encuentra realizando un post-doc en el IBYME-INGEBI sobre el estudio de procesos fisiológicos y patogénicos mediados por proteínas que alteran el transporte en desordenes neurodegenerativos.`,
                    Id: "Javier"
                },
                {
                    nombre : "Carolina Shimabukuro",
                    img : "./caro.jpg",
                    desc : `Lic. en Psicología (UBA), comenzó investigando comunicación interespecífica entre personas y perros domésticos, y luego se abocó a la neurociencia cognitiva en humanos. Realizó su maestría en Neural & Behavioural Sciences en Tübingen, Alemania, donde se dedicó a estudiar el rol del lóbulo parietal en la percepción visual utilizando técnicas como eye-tracking, fMRI, y TMS.`,
                    Id: "Carolina"
                }

            ]
           

            for (let i = 0; i < miembros.length; i++) {
                
                let divPic = document.createElement("div")
                let divImg = document.createElement("img")
                let divA = document.createElement("a")
                
                divPic.className = "divPic"

                divImg.src = miembros[i].img

                divA.innerText = miembros[i].nombre
                divA.className = "nameLink"
                divA.Id = miembros[i].Id

                 divPic.addEventListener("click", (event) =>   {
                   
                    expandMiembro(miembros[i])
                })

                divPic.addEventListener("mouseenter", (event) => {
                    divA.classList.toggle("embolden")
                })
                divPic.addEventListener("mouseleave", (event) => {
                    divA.classList.toggle("embolden")
                })
                
                

                divPic.appendChild(divImg)
                divPic.appendChild(divA)
                mainText.appendChild(divPic)


            }
}




let expandMiembro = (miembro) => {
    carrouselConcealer();
    mainText.innerHTML = ""

    let memDiv = document.createElement("div")
    memDiv.className = "memDiv"

    let memPic = document.createElement("img")
    memPic.className = "memPic"
    memPic.src = miembro.img

    let memName = document.createElement("h2")
    memName.innerText = miembro.nombre

    let memDesc = document.createElement("p")
    memDesc.className = "memDesc"
    memDesc.innerText = miembro.desc

  
    memDiv.onclick = createMemPage
      

    memDiv.appendChild(memPic)
    memDiv.appendChild(memName)
    memDiv.appendChild(memDesc)
    mainText.appendChild(memDiv)

    document.querySelector('.content').scrollIntoView()
    
}


function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};