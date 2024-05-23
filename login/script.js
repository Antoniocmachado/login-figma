const form = document.getElementById('form__login');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 
const emailRegex = /^\w\+(\[-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //console.log('vazio');
   
    emailValidade();
    mainPasswordValidade();
    // nameValidate();
});
// função para setar o error:
function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

// função para limpar o error:
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = '';
}

function emailValidade(){
    if(!emailRegex.test(campos[0].value))
    {
        setError(0);	
        //console.log('validado');
     }
     else
    {
      removeError(0); 	
       //console.log('NÃO VALIDADO');
     }	
}
function mainPasswordValidade(){
    if(campos[1].value.length < 8)
    {
        setError(1);	
         //console.log('validado');
     }
     else
    {
        removeError(1); 	
        //console.log('NÃO VALIDADO');
         comparePassword();
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

// configurar bortão para não enviar nada vazio

