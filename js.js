


console.log("Conectando..........");






//Bloque de funciones

const listarFamilia  = (resultado) =>{
    
    const  listar = document.querySelector("#familia");
    const  listarmama = document.querySelector("#mama1");
    const listarmama1 = document.querySelector("#mama2");
    const listarpapa1 = document.querySelector("#papa1");
    const listarpapa2 = document.querySelector("#papa2");
    const listarhermano1 = document.querySelector("#hermano1");
    const listarhermano2 = document.querySelector("#hermano2");
    const listarhermano3 = document.querySelector("#hermano3");
    const listarhermano4 = document.querySelector("#hermano4");
    const listarhermano5 = document.querySelector("#hermano5"); 
    const listarhermano6 = document.querySelector("#hermano6");
    const listarhermano7 = document.querySelector("#hermano7");
    const listarhermano8 = document.querySelector("#hermano8"); 

   
    console.log(listar);
    // Destructuring Objeto
    //console.log(resultado);
    const {  integrantesfamilia, mama , mama2 , papa , papa2 , hermano1 , hermano2 , hermano3 , hermano4  , hermano5 , hermano6  , hermano7 , hermano8} = resultado;
    console.log(integrantesfamilia, mama);
/// madre
    mama.forEach(element=> {
        
        listarmama.innerHTML +=  `
                                <h2> ${element}</h2>
                             `
    });
    mama2.forEach(element=> {
        
        listarmama1.innerHTML +=  `
                                <h2> ${element}</h2>
                             `
    });
///padre 
    papa.forEach(element=> {
        
        listarpapa1.innerHTML +=  `
                                <h2> ${element}</h2>
                             `
    });
    papa2.forEach(element=> {
        
        listarpapa2.innerHTML +=  `
                                <h2> ${element}</h2>
                             `
    });
  
 /// hermana mayor   
 hermano1.forEach(element=> {
        
    listarhermano1.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
}); 
hermano2.forEach(element=> {
        
    listarhermano2.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
});

/// hermano mayor
hermano3.forEach(element=> {
        
    listarhermano3.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
});
hermano4.forEach(element=> {
        
    listarhermano4.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
});
// hermano menor
hermano5.forEach(element=> {
        
    listarhermano5.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
});
hermano6.forEach(element=> {
        
    listarhermano6.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
});
//// yo 
hermano7.forEach(element=> {
        
    listarhermano7.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
});
hermano8.forEach(element=> {
        
    listarhermano8.innerHTML +=  `
                            <h2> ${element}</h2>
                         `
});




 /// titulo
    integrantesfamilia.forEach(element=> {
        
        listar.innerHTML +=  `
                              <center><h1> ${element}</h1></center>
                             `
    });
    


};


const  leerJSON = async () => {
    try {

        const respuesta = await fetch("familia.json");
        const resultado = await respuesta.json();

        listarFamilia(resultado);
        
    } catch (error) {
        console.log("Error: " + error);
    }

};






//  1Paso traer  el JSON a  JS
document.addEventListener("DOMContentLoaded", leerJSON);