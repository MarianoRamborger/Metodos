
let linkList = document.querySelectorAll(".conditionalDisplay");
console.log(linkList);
carrouselHidden = false;
let carrousel = document.querySelector("#carouselExampleControls")
let mainText = document.querySelector("#mainText")



for (let index = 0; index < linkList.length; index++) {
   
    linkList[index].addEventListener("click", (event) => {

        console.log(event.target)

        if (event.target.innerHTML == "Home" && carrouselHidden == true) {
            carrousel.classList.toggle("hide")
            mainText.innerHTML = "";
            carrouselHidden = false;
        }
        
       
       
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


        if (event.target.id == "trabajoPractico") {
            carrouselConcealer();
            mainText.innerHTML = "";


            
            let tpDiv = document.createElement("div")
            tpDiv.className = "tpDiv"

            let tp1 = document.createElement("p")
            tp1.className = "tpLinks"
            tp1.innerHTML = `<a href="TP1.docx"> Instrucciones Trabajo Práctico 1 </a>`
            
            
            let tp2 = document.createElement("p")
            tp2.className = "tpLinks"
            tp2.innerHTML = `<a href="TP2.docx"> Instrucciones Trabajo Práctico 2 </a>`

            tpDiv.appendChild(tp1);
            tpDiv.appendChild(tp2);

            mainText.appendChild(tpDiv)

        }


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

    })

    
}

let carrouselConcealer = () => {

    if (carrouselHidden == false ){

        carrousel.classList.add("hide")
        carrouselHidden = true
   
    }

}