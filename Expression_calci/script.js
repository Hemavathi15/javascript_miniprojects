let resultdiv = document.createElement('div');
document.querySelector('.container').appendChild(resultdiv);
resultdiv.id = 'result';

let button = document.getElementsByClassName('btn')[0]; // Assuming there's only one button with class 'btn'
button.addEventListener('click', cal);

let answer=0;
let arr= []
let a=0,b=0
function cal() {
    console.log("function");
    let str = document.getElementsByClassName("input")[0]; // Assuming there's only one input with class 'input'
    let exp = str.value;
    console.log(exp);
    if (exp.includes('+')) {
         arr = exp.split('+');
        answer=Number(arr[0])+Number(arr[1])
    }
    else if (exp.includes('-')) {
        arr = exp.split('-');
       answer=Number(arr[0])-Number(arr[1])
   }
   else if (exp.includes('*')) {
    arr = exp.split('*');
   answer=Number(arr[0])*Number(arr[1])
}
else if (exp.includes('/')) {
    arr = exp.split('/');
   answer=Number(arr[0])/Number(arr[1])
}
resultdiv.innerHTML=answer 
}
