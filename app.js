window.onload=()=>{
    const buttons  = document.querySelectorAll('.numbers');
    const screen = document.querySelector('.screen');
    const equals = document.querySelector('#btn-equals');


    // Clear the screen on load
    function clearErrorIfNeeded(){
        if(screen.value === 'Enter a value' || screen.value === 'Invalid Expression'){
            screen.value = '';
        }
    }

    // Add event listeners to each button
    buttons.forEach(button=>{
        button.addEventListener('click',(e)=>{
            clearErrorIfNeeded()
            if(e.target.innerHTML === 'C'){
                screen.value=''
            }else{
                screen.value=screen.value+e.target.innerHTML;
            }

        })
    })

    equals.addEventListener('click',(e)=>{
        if(!screen.value){
            screen.value='Enter a value';
        }else{
            try{
                screen.value=eval(screen.value);
            }catch(err){
                screen.value='Invalid Expression';
            }
        }
    })
    
}