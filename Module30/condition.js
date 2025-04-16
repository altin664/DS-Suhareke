var input = document.getElementById('input_id')
var input = document.getElementById('btn_id')
var input = document.getElementById('input_Id')
var input = document.getElementById('text_id')

//button.onclick = function(){
  //  text.innerHTML = input.value;
//}

var input = document.querySelector('#input1_id')
var input = document.querySelector('#input2_id')
var input = document.querySelector('#btn2_id')
var input = document.querySelector('#answer')

btn2.addEventListener("click",function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
});

button.onclick = function (){
    if(input.value > 10)
    {
        text.innerHTML="Input value is greater then 10";
    }
    else if( input.value < 10){
        text.innerHTML = "Input value is less than 10";

    }
    else{
        text.innerHTML = "Input value is equal to 10";
    }
    
};