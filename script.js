
let linkList = document.querySelectorAll(".conditionalDisplay");
console.log(linkList);
carrouselHidden = false;
let carrousel = document.querySelector("#carouselExampleControls")
let mainText = document.querySelector("#mainText")


//Itera thru links de display condicional; maneja su rendering.
for (let index = 0; index < linkList.length; index++) {
   
    linkList[index].addEventListener("click", (event) => {

      

        //HOME
        if (event.target.innerHTML == "Home" && carrouselHidden == true) {
            carrousel.classList.toggle("hide")
            mainText.innerHTML = "";
            carrouselHidden = false;
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
            infobasicaCuerpo.innerHTML = `Acá iria la información que queremos mostrar`


            infoDiv.appendChild(infobasicaTitulo);
            infoDiv.appendChild(infobasicaCuerpo);

            mainText.appendChild(infoDiv);

        }

        //PROGRAMA
        if (event.target.id == "programa") {
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

        }

        //NOSOTROS
        if (event.target.id == "nosotros") {
            carrouselConcealer();
            mainText.innerHTML = "";


            // Mario
             
            let divPicMario = document.createElement("div")
            let divImgMario = document.createElement("img")
            let divTxtMario = document.createElement("p")
            divPicMario.className = "divPic"

            divImgMario.src = `foto.png`
            divTxtMario.innerHTML = "Descripción 1"

            divPicMario.appendChild(divImgMario);
            divPicMario.appendChild(divTxtMario);
            mainText.appendChild(divPicMario);

            // Mariano

            let divPicMariano = document.createElement("div")
            let divImgMariano = document.createElement("img")
            let divTxtMariano = document.createElement("p")
            divPicMariano.className = "divPic"

            divImgMariano.src = `foto.png`
            divTxtMariano.innerHTML = "Descripción 2"

            divPicMariano.appendChild(divImgMariano);
            divPicMariano.appendChild(divTxtMariano);
            mainText.appendChild(divPicMariano);

            // Vale 

            let divPicVale = document.createElement("div")
            let divImgVale = document.createElement("img")
            let divTxtVale = document.createElement("p")
            divPicVale.className = "divPic"

            divImgVale.src = `foto.png`
            divTxtVale.innerHTML = "Descripción 3"

            divPicVale.appendChild(divImgVale);
            divPicVale.appendChild(divTxtVale);
            mainText.appendChild(divPicVale);

            // Javi

            let divPicJavi = document.createElement("div")
            let divImgJavi = document.createElement("img")
            let divTxtJavi = document.createElement("p")
            divPicJavi.className = "divPic"

            divImgJavi.src = `foto.png`
            divTxtJavi.innerHTML = "Descripción 4"

            divPicJavi.appendChild(divImgJavi);
            divPicJavi.appendChild(divTxtJavi);
            mainText.appendChild(divPicJavi);

            // Caro

            let divPicCaro = document.createElement("div")
            let divImgCaro = document.createElement("img")
            let divTxtCaro = document.createElement("p")
            divPicCaro.className = "divPic"

            divImgCaro.src = `foto.png`
            divTxtCaro.innerHTML = "Descripción 2"

            divPicCaro.appendChild(divImgCaro);
            divPicCaro.appendChild(divTxtCaro);
            mainText.appendChild(divPicCaro);


            
            
        


        }

         ///////////////////////////////
        ////Teóricos////////////////
        /////////////////////////////




        // if (event.target.id == "teo__intro") {

        //     createLinks(
        //         "Clase de introducción",
        //         []
        //     )

            
        // }


        if (event.target.id == "teo__dexperimental") {

            createLinks(
                "Clase teórica de diseño experimental",
                ["Diseño Experimental"],
                ["drive.google.com/open?id=1WCFEiZXmxUEzMEdhyNq_8iO308xzoaWT"],
                ["drive.google.com/file/d/1gLZULAkNb2n_Z_yOEFIOExqdnsqdbDM8/view?usp=sharing"],
                ["Experimental Design booklet"]
            )

        }


        if (event.target.id == "teo__estadistica") {

            createLinks(
                "Clase teórica de estadistica",
                ["Clase 1", "Clase 2"],
                ["drive.google.com/open?id=1vjuVXe5fdXKDGsJ58p9PPLmLUp7MprnA", "drive.google.com/open?id=1-qtA15ZWHEK-Rgto-k1JeUTjWKabSyTh"],
                ["drive.google.com/open?id=1vZF1A1P7TPI3gcbBAUfrrch3uuYNLzPU"], ["Estadistica (Mini)"]

            )
        }

        if (event.target.id == "teo__EEG") {
            
            createLinks(
                "Clase de electroencefalografía & potenciales relacionados a eventos.",
                ["Clase 1", "Clase 2"],
                ["drive.google.com/open?id=1zzkmfUUtlvUiJ2EN1MO4V35ZCANzPOwZ","drive.google.com/open?id=1R8EjS1lDAiOCNUMSeYnwvkNKkLzJYtOQ"],
                ["drive.google.com/open?id=1f5_u7Ihd3BTq5WmSTI7e9J4NHJC-2F2M"],
                ["EEG booklet"]
            )
        }

        if (event.target.id == "teo__SCR") {

            createLinks(
                "Clase de Actividad Electrodérmica",
                ["Clase 1"],
                ["drive.google.com/open?id=1HulGhi7IslZj9fjVOMocPdtt7S9V00-c"],
                ["drive.google.com/open?id=1ama2ab7WYwNFHxJo9GK1LnpGfmDIZrYQ"],
                ["SCR booklet"]
            )
        }

        if (event.target.id == "teo__fMRI") {

            createLinks(
                "Clase de Resonancia Magnética Funcional",
                ["Clase 1"],
                ["drive.google.com/open?id=1wwgfyT0oju3A5eHy_DgCm-dJFRAu7Grn"],
                [],
                []
            )
        }


        if (event.target.id == "teo__eyetracking") {
            
            createLinks(
                "Clase de Eyetracking & Electromiografía",
                ["Clase 1"],
                ["drive.google.com/open?id=1UC5HcgJ3-tPe6E8MrW5Jxq5U0lkHt1Ci"],
                ["drive.google.com/open?id=1lRoSjFsOL8nqBd_bKYxfLpGfxkWxggT4", "drive.google.com/open?id=1vEqNBffeFLSfeTg4UC1BokYx7PVuvP7R"],
                ["Eyetracking booklet", "Facial expressions booklet"]
                
            )
        }

        if (event.target.id == "teo__poster") {
            createLinks(
                "Clase de Poster",
                ["Clase 1"],
                ["drive.google.com/open?id=1ydHdIZAPnayz35daHb9tJYbo7fx1c0vC"],
                ["drive.google.com/open?id=19e-D9ZCw7qBSmt_oUv7IrEkh9aVoCSlp"],
                ["Como hacer un buen poster"]
            )
        }


        if (event.target.id == "pr__intro") {
            createLinks(
                "Clase introductoria",
                ["Clase 1"],
                ["drive.google.com/open?id=16m24cUpXIVsOUiJBdub-RxAmvfnBN51e"],
                ["drive.google.com/open?id=18s5LHhdku8weAttKyOUOo87pu_pKabvt"],
                ["Como insertarse en la investigación"]
            )
        }

        if (event.target.id == "pr__paper") {
            createLinks(
                "Clase de paper",
                ["Clase 1", "Como hacer el TP"],
                ["drive.google.com/open?id=14HH_seJarnpW0pbWA6zHlaDU2GhAKl0H", "drive.google.com/open?id=1GBeo5llXbDfIWS-oA0CP2XlYjMRParXd"],
                ["drive.google.com/open?id=1dfCd-bOKYTkLKYpKMD5gEL-W4ScAZG8u"],
                ["Como obtener papers."]
            )
        }

        if (event.target.id == "pr__estadistica") {
            createLinks(
                "Clase práctica de estadistica",
                ["Clase 1"],
                ["drive.google.com/open?id=1IHxc1DVz9_pzvMhrsX8Hwvm_6Ewo3aUI"],
                [], []

            )
        }

        if (event.target.id == "pr__scr") {
            createLinks(
                "Clase práctica de Actividad Electrodérmica",
                ["Clase 1"],
                ["drive.google.com/open?id=1FsynfouPeV9ZceK1mLyy3xtiIipZ3hWG"],
                [], []
            )
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
        }

        if (event.target.id == "pr__erp") {
            createLinks(
                "Clase Práctica de potenciales evocados",
                ["Clase 1"],
                ["drive.google.com/open?id=1nHCkDUlIn85E7498p_4eU_kVSsFeS4OG"],
                [], []
            )
        }

        if (event.target.id == "pr__fmri") {
            createLinks(
                "Clase práctica de fMRI",
                ["Clase 1"],
                ["drive.google.com/open?id=1nV_BCWuUc3UcKeFMSf07rAIrNifpQTxK"],
                [] , []

            )
        }

        if (event.target.id == "pr__animales") {
            createLinks(
            "Clase de modelos animales",
            ["Parte 1", "Parte 2"],
            ["drive.google.com/open?id=1Y2_hDF5fCaDsSLcyM940CHLqXOY6PdDR", "drive.google.com/open?id=1Mrl_wuHC0e1DY--c51WoluIuS7W9707w"],
            [], []
            )
        }



        // if (event.target.id == "pr__scr") {
        //     createLinks(
        //         "Clase práctica de Actividad Electrodérmica",
        //         [""]
        //     )
        // }





        //let createLinks = (clase, titulObligatorio, obligatorios, optativos, titulOptativo) => {

         ///////////////////////////////
        ////Prácticos////////////////
        /////////////////////////////


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