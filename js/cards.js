const questionContainer = document.getElementById("container-question");
const answer = document.getElementById("answer");
const items = document.querySelectorAll(".item-frecuentes");
const cancelar = document.getElementById('cancelar');

const question = [
  
     {
        id: "A",
        title: "¿Cada cuando se debe ir al dentista?",
        texto: "Lo recomendable es hacer una visita, al menos, una vez al año para revisar el estado de los dientes y de los tejidos orales. En algunos casos, como personas con problemas periodontales o enfermedades como la diabetes, se recomienda realizar una visita cada seis meses."
     },
     {
        id: "B",
        title: "¿Cuál es el mejor tratamiento de ortodoncia?",
        texto: "Los tratamientos con brackets metálicos, como con brackets cerámicos y ortodoncia invisible son igual de efectivos.  El empleo de un tipo u otro de ortodoncia dependerá de las necesidades estéticas del paciente aunque, en algunos casos, puede estar determinado por las necesidades del tratamiento, como en caso de grandes apiñamientos donde está indicado el uso de brackets."

     },
     {
        id: "C",
        title: "¿Existe alguna limitación de edad en los tratamientos con ortodoncia?",
        texto: "Se puede hacer ortodoncia cuando ya se tienen los dientes permanentes. La ortodoncia se utiliza para mejorar no sólo la estética de la boca también la funcionalidad ya que la ortodoncia no solo permite la alineación dental sino que también mejora la oclusión, logrando un mejor contacto entre las piezas dentales. De esta forma se evitan problemas como el desgaste dental, se mejora la higiene dental y se reducen las alteraciones de la articulación de la mandíbula."

     },
     {
       id: "D",
       title: "¿Si soy diabético puedo ponerme un implante?",
       texto: "Un diabético tiene problemas con las heridas abiertas, ya que tienden a tener peor cicatrización y mayor riesgo de infección. Lo importante antes de hacer un implante o cualquier intervención quirúrgica que el paciente tenga su glucosa en nivdeles optimos. Después, se puede realizar cualquier procedimiento instaurando una profilaxis antibiótica, además de realizar el procedimiento con plasma rico en factores de crecimiento. Esto va a aportar a la herida quirúrgica/implante un mayor número de células que favorecen la cicatrización y disminuyen el riesgo de infección."
     },
     {
        id: "E",
        title: "¿Si estoy embarazada, ¿puedo realizarme algún tratamiento dental?",
        texto: "El segundo trimestre es el momento en el que se puede realizar algún tratamiento de urgencia, siendo el primer y tercer trimestre los más críticos en cuanto al tratamiento dental. Lo ideal es hablar con el dentista si se está buscando el embarazo para hacer una revisión dental y si fuera necesario, realizar cualquier tratamiento antes de quedarse en estado."
        
     },
     {
        id: "F",
        title: "¿Por qué tengo mal aliento? ¿Tiene tratamiento?",
        texto: "El mal aliento o halitosis está asociado a una carga bacteriana importante que se aloja entre los dientes y las encías. También se puede deber a un acúmulo de placa y restos de alimentos entre los dientes. Por lo tanto, suele estar relacionado con una higiene bucal pobre o poco efectiva. Además, es necesario cepillar la lengua porque también interviene en procesos de descomposición de los alimentos. El tratamiento de la halitosis consistirá en realizar una limpieza bucal profunda además de recomendar un colutorio y pasta dentífrica especiales, así como una técnica de cepillado específica."
     },
     {
        id: "G",
        title: "Si tengo un dolor dental y desaparece al poco tiempo, ¿debería acudir al dentista?",
        texto: "Siempre que se tiene dolor dental se debe acudir al dentista a pesar de que éste desaparezca al poco tiempo. Normalmente es indicativo de que algo está ocurriendo y lo importante es averiguar si ha sido algo casual o está comenzando alguna patología (caries, infección, erupción de una muela del juicio…)."

     },
     {
        id: "H",
        title: "¿Se puede evitar el miedo al dentista?",
        texto: "El miedo a la consulta con el dentista, u odontofobia, es un miedo irracional que algunas personas manifiestan en la consulta del odontólogo. La confianza en los profesionales de la clínica dental, una adecuada comunicación con el paciente y la información sobre las características del tratamiento son factores que ayudan a superar este tipo de miedos. El manejo del paciente por parte del odontólogo y su experiencia en estos casos es un factor que también marca la diferencia. En los casos más graves o en tratamientos odontológicos prolongados, como cirugías, puede emplearse la sedación consciente, con óxido nitroso."
     },


]

let textoInfo = document.getElementById('textoInfo');

for(let i = 0; i < items.length; i++){
     items[i].addEventListener('click', (e) =>{
        questionContainer.style.transform = "rotateY(180deg)";
        answer.classList.add('show-target');
        textoInfo.innerHTML = "";
        let eventoId = e.currentTarget.id;
        question.filter(quest => quest.id === eventoId).map( quest => {
           textoInfo.innerHTML += `
           <h2>${quest.title}</h2>
           <p>
             ${quest.texto} 
           </p>
           `
        })

     })
}

cancelar.addEventListener('click', () =>{
    questionContainer.style.transform = "rotateY(0)";
    answer.classList.remove('show-target');
})