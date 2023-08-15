
// function deleteMe(){
//         document.getElementById('myResult').value =(''); 
// }
// function calculator(newValue){
//         document.getElementById('myResult').value += newValue;

// }

// function answer(){
//         let a = document.getElementById('myResult').value;
//         let b = eval(a);
//         document.getElementById('myResult').value = b
// }

const myResult = document.getElementById('myResult')

function deleteMe(){
        myResult.value =(''); 
}
function calculator(newValue){
        myResult.value += newValue;

}

function answer(){
        let a = myResult.value;
        let b = eval(a);
        myResult.value = b
}