function getpersonaje() {
    const personajeInput=document.getElementById("personajeName")
    const personajeInformacion=document.getElementById("personajeInfo")
    const Name=personajeInput.value.toLowerCase();
    fetch(`http://localhost:3000/character/${Name}`)
    .then(response=>response.json())
    .then(data=>{
        const {name, image,gender,species,status,origin}=data
        personajeInformacion.innerHTML=
        `<h2>Nombre: ${name}</h2>
        <img src="${image}" alt="${name}"/>
        <p>Genero :${gender}</p>
        <p>Especie: ${species}</p>
        <p>Estado: ${status}</p>
        <p>Origen: ${origin.name}</p>`
})
.catch(error=>personajeInformacion.innerHTML="Imposible obtener el personaje"
)
}