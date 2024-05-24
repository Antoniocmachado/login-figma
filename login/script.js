const form = document.getElementById('form__login');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 
const emailRegex = /\S+@\S+\.\S+/;
                  
// /^\w\+(\[-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

 
// configurar bortão para não enviar nada vazio
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('vazio');   
    emailValidate();
    mainPasswordValidate();
    // nameValidate();
});

// função para setar o error:
function setError(index){
    campos[index].style.border = '0.2px solid #e90505';
    spans[index].style.display = 'block';
}

// função para limpar o error:
function removeError(index){
    campos[index].style.border = '0.2px solid #0183d9';;
    spans[index].style.display = '';   
}
function emailValidate(){
    if(!emailRegex.test(campos[0].value))
    {
        setError(0);	
        // console.log('invalido');
     }  
     else
    {
        removeError(0); 	
    //    console.log('VALIDO');
     }	
}
function mainPasswordValidate(){
    if(campos[1].value.length < 8)
    {
        setError(1);	
        // console.log('Invalidado');
     }
     else
    {
        removeError(1); 	
        // console.log('VALIDO');
        //  comparePassword();
     }	
}
// function nameValidate(){
//    if (campo[0].value.length < 3)
//    {
//         setError(0);
//        /*consoloe.log('Nome deve ter no minimo 3 caracteres');*/	
//     }
//     else
//    {
//       removeError(0); 
    //   console.log('Nome validado ok);
//     }    
// }



