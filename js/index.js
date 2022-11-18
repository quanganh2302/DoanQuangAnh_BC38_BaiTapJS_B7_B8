var numbers = [];
var arrayNumberSize = 0;
var positiveNumber = [];
var arrayPositiveSize =0;
var i,j = "";
var noPositiveNumber = false;


function input(){
    var newNumber = document.getElementById("inputNumber").value;
    numbers.push(newNumber);
    document.getElementById("printArray").innerHTML=numbers;
    arrayNumberSize = numbers.length;
    positiveNumber = [];
    // clear lại "positiveNumber"
    for(i=0; i < arrayNumberSize  ; i++){
        if(numbers[i] >= 0){
            positiveNumber.push(numbers[i]);
        }else{
            continue;
        }
    }
    arrayPositiveSize = positiveNumber.length;
}

// Ex1
function calcPositiveNumber(){
    var totalPositiveNumber = 0;
    for(i=0; i < arrayPositiveSize ; i++){
        totalPositiveNumber += positiveNumber[i]*1;
    }
    document.getElementById("totalPositiveNumber").innerHTML = totalPositiveNumber;
}
// Ex2

function countPositiveNumber(){
    if(noPositiveNumber === true){
        document.getElementById("countPositiveNumber").innerHTML = "Bạn không nhập số dương";
    }else{
        document.getElementById("countPositiveNumber").innerHTML = positiveNumber.length;
}
}
//Ex3
function minNumber(){

    var min = numbers[0];
    for(i=0; i < arrayNumberSize ; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    document.getElementById("minNumber").innerHTML = min;

}
//Ex 4
function minPositiveNumber(){
    var min = positiveNumber[0];
    for(i=0; i < arrayPositiveSize ; i++){
        if(positiveNumber[i] < min){
            min = positiveNumber[i];
        }
    }
    document.getElementById("minPositiveNumber").innerHTML = min;
}

//Ex 5
function findNumber(){
    var evenNumber;
    for(i=0; i< arrayNumberSize; i++){
        if((numbers[i] % 2) === 0){
            evenNumber = numbers[i];
        }else{
            continue;
        }
    }
    document.getElementById("lastEvenNumber").innerHTML = evenNumber;
}


//Ex 6
function changePosition() {
    var posi1= document.getElementById("position1").value*1;
    var posi2= document.getElementById("position2").value*1;
    var temp;
    temp = numbers[posi1];
    numbers[posi1] = numbers[posi2];
    numbers[posi2] = temp;
    document.getElementById("changePosition").innerHTML = numbers;

}

// Ex7
function sorted(){
var key = 0;
for (i=1; i < arrayNumberSize; i++) {
    key = numbers[i];
    j = i;
    while ((j>0) && (numbers[j-1]>key)){
        numbers[j] = numbers[j-1];
        j=j-1;
        numbers[j] = key;
    }
}
document.getElementById("sorted").innerHTML = numbers;
}

// // Ex 8
// function findFirstPrime(){
//     var integer ;
//     for(i=0; i< arrayNumberSize; i++){
//         if(numbers[i]>0){
//             if(numbers[i]<2){
//                 document.getElementById("findFirstPrime").innerHTML ="Không có số nguyên tố trong dãy số bạn nhập";
//             }else{
//                 for(j=0; j < numbers[i]*1; j++){
//                     integer = numbers[i]*1;
//                     if((numbers[i]*1%j) === 0){
//                         break;
//                     }
//                 }document.getElementById("findFirstPrime").innerHTML = integer*1;
//             }
//         }else{
//             document.getElementById("findFirstPrime").innerHTML ="Không có số nguyên tố trong dãy số bạn nhập";
//         }
//     }
// }

// Ex 9 

function countInteger(){
    var Integer = 0;
    for(i=0; i< arrayNumberSize; i++){
        if(Number.isInteger(numbers[i]*1)  === true ){
            Integer++;
        }
    }
    document.getElementById("countInteger").innerHTML = Integer;
}



// Ex 10
function compareNumber(){
  var negativeNumber = numbers.length - positiveNumber.length;
  if(negativeNumber >  positiveNumber.length){
    document.getElementById("compareNumber").innerHTML = "Số âm > Số dương";
  } else if(negativeNumber <  positiveNumber.length){
    document.getElementById("compareNumber").innerHTML = "Số dương > Số âm";
  } else{
    document.getElementById("compareNumber").innerHTML = "Số dương = Số âm";
  }
}


