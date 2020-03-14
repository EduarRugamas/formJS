var input = document.getElementsByClassName('campos');

 for(var i = 0; i < input.length; i ++){
    input[i].addEventListener('keyup', function(){
       if(this.value.length>=1) {
           this.nextElementSibling.classList.add('fijar');
       }else{
        this.nextElementSibling.classList.remove('fijar');
       }
    });
 }


var getData = function(){

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    parseInt (producto) = document.getElementById('producto');


    console.log(" hola mundo " + nombre + cantidad)
} 
