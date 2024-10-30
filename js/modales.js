const infoModal = [
    {
        id: 1,
        title: "Implantología",
        img: "images/implantologia.webp",
        info: "Los implantes dentales son una técnica de rehabilitación que permite reemplazar un diente o varios dientes perdidos, mediante la colocación quirúrgica de un implante de titanio grado médico, que ejercen en el hueso maxilar-madibular la función de la raiz dental.",
        text: "Es un procedimiento",
        text2: "Con una tasa de éxito de hasta el 95%",
        text3: "de excelente durabilidad en el tiempo ",
        text4: "ideal para restituir las funciones masticatorias, fonéticas y estéticas del paciente. "
    },
    {
        id: 2,
        title: "Ortodoncia",
        img: "images/ortodoncia.webp",
        info: "La especilidad de ortodoncia es la encargada de corregir la malposicion de los dientes, arcadas dentales y mordidas, con el fin de obtener una oclusion ideal mediante la colocación de aparatos y dispositivos correctivos.",
        text: "Existen actualmente muchas técnicas ortodonticas para la alineación dental. En Clínica de implantes manejamos todas las técnicas actuales que son:",
        text2: "Ortodoncia convecional",
        text3: "Ortodoncia de autoligado",
        text4: "Ortodoncia invisible con alineadores transparentes"
    
    },
    {
        id: 3,
        title: "Periodoncia",
        img: "images/periodoncia.webp",
        info: "La periodoncia es el área de la Odontología que se encarga del estudio, prevención y tratamiento de aquellas patologías que afectan a los tejidos que protegen, rodean y sujetan los dientes: encía, hueso alveolar, ligamento periodontal y cemento radicular.",
        text: "Existen dos tipos de enfermedades periodontales como:",
        text2: "Gingivitis.",
        text3: "Periodontitis",
        text4: "Las lesiones periodontales se producen por la acumulación de bacterias, que ocasionan alteraciones del periodonto. Si no son tratadas, estas dolencias avanzan progresivamente, pudiendo provocar la caída de los dientes y diversas afecciones en nuestro organismo.",
    },
    {
        id: 4,
        title: "Endodoncia",
        img: "images/endodoncia.webp",
        info: "Es un procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando así su pérdida. Para ello, se extrae la pulpa dental y la cavidad resultante, se rellena y sella con material inerte y biocompatible.",
        text: "Aunque la caries es la principal causante de la inflamación e infección de los nervios dentales, también existen otras razones por las que recurrir a este tratamiento: traumatismos, fracturas, abrasión, desgaste. Las cuales están asociadas a síntomas específicos:",
        text2: "Sensibilidad dental al frío",
        text3: "Inflamación de la encía",
        text4: "Molestias al masticar o cambio del color del diente"
    
     },

    {
        id: 5,
        title: "Protesis",
        img: "images/protesis.webp",
        info: "Las prótesis dentales son estructuras que nos permiten reemplazar los dientes que han perdido gran parte de estructura dental o que se han perdido por completo. ",
        text: "Dentro de este grupo encontramos las prótesis dentales removibles, prótesis dentales fijas y las prótesis totales.",
        text2: "Las prótesis fijas son coronas de forma exacta al diente a reemplazar que se sujetan sobre tejido dental restante, raíces sanas o con tratamiento de conducto e implantes.",
        text3: "Los materiales pueden variar y de este depende una más alta naturalidad.",
        text4: "Las prótesis totales buscan reemplazar la totalidad de los dientes perdidos en una arcada o ambas.",
     },
     {
        id: 6,
        title: "Cirugia Bucal y Maxilofacial",
        img: "images/cirugia-oral.webp",
        info: "La cirugía oral hace referencia a cualquier procedimiento quirúrgico en la boca, maxilar y  mandíbula o alrededor de estas, generalmente hecho por un especialista dental capacitado para realizar ciertos tipos de cirugías orales.",
        text: "Los tipos de cirugía más comunes:",
        text2: "Cirugía dental de implantes dentales",
        text3: "Cirugía dental en las encías",
        text4: "Cirugía de terceros molares (muelas del juicio), frenilectomías y apicectomías."
    },
]

 let modalBtns =  document.querySelectorAll('.btn-mas');
 const modalServices = document.getElementById('modalServices');
 
 for(let i = 0; i < modalBtns.length; i++){
     modalBtns[i].addEventListener('click', (e)=>{
         let containerServices = document.getElementById('containerServices');
         containerServices.innerHTML = '';
         let evento = e.currentTarget.id;
         modalServices.classList.add('showServices');
      infoModal.filter(info => info.id == evento).map(info =>{
         containerServices.innerHTML += `
         <h2 id="titleService">${info.title}</h2>
         <img src=${info.img} alt="" id="imgService">
         <p id="textServices">${info.info}</p>
         <p id="textServices">${info.text}</p>
         <ul id="ul-info">
               <li>${info.text2}</li>
               <li>${info.text3}</li>
               <li>${info.text4}</li>
               
              
               </ul>
         <a href="https://api.whatsapp.com/send?phone=525573891519" target="_blank">Agendar cita</a>
         `
         
      })
        
        
       
         
         
     })
 }
 
 modalServices.addEventListener("click", ()=>{
     if(modalServices.classList.contains('showServices')){
         modalServices.classList.remove('showServices')
     }
 })