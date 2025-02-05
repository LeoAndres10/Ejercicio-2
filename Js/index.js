function calcularNota(){

    let nota1= document.getElementById("primerParcial").value;
    let nota2= document.getElementById("segundoParcial").value;
    let nota3= document.getElementById("tercerParcial").value;

    if (nota1 === "") {
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese la nota 1",
           
            
          });
    } else if(nota2 === "") {
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese la nota 2",    
          
          });
    }else if(nota3=== ""){
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese la nota 3",    
          
          });
    }
    else{
        let n1=parseInt(nota1);
        let n2=parseInt(nota2);
        let n3=parseInt(nota3);
        if(n1>30){
            Swal.fire({
                icon: "error",
                title: "Oops... La primer nota no puede exceder de 30%",    
              
              }); 
        }
        else if(n2>30){
            Swal.fire({
                icon: "error",
                title: "Oops... La segunda nota no puede exceder de 30%",    
              
              }); 
        } 
        else if(n3>40){
            Swal.fire({
                icon: "error",
                title: "Oops... La tercer nota no puede exceder de 40%",    
              
              }); 
        }else{
            let resultado=(n1+n2+n3);
            if(resultado>=0 && resultado<=59){
                Swal.fire({
                    icon: "error",
                    title: "Oops... Alumno Reprobado",    
                  
                  }); 
            }
            else if(resultado>=60 && resultado<=70){
                Swal.fire({
                    icon: "success",
                    title: "Bueno!",
                    draggable: true
                  });
            }
            else if(resultado>=80 && resultado<=89){
                Swal.fire({
                    title: "Muy Bueno!",
                    icon: "success",
                    draggable: true
                  });
            }
            else if(resultado>=90 && resultado<=100){
                Swal.fire({
                    title: "Excelente!",
                    icon: "success",
                    draggable: true
                  });
            }
        }
    }
}
function limpiar() {
    document.getElementById("primerParcial").value = ""
    document.getElementById("segundoParcial").value = ""
    document.getElementById("tercerParcial").value = ""
}
