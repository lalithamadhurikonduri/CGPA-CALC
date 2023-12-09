


let result = document.getElementById("result");
let btn = document.getElementById("submit");
let form =  document.getElementById("myForm");


function marksCalculation(grade){
    let marks = 0;
    console.log(grade,typeof(grade),"^^^^^^^^^^^");
    if(grade==="A+"){
        marks = 10
    }
    else if(grade==="A"){
        marks = 9
    }
    else if(grade==="B"){
        marks = 8
    }
    else if(grade==="C"){
        marks = 7
    }
    else if(grade==="D"){
        marks = 6
    }
    else if(grade==="E"){
        marks = 5
    }
    else if(grade==="F"){
        marks = 0
    }
    else{
        marks = -1;
    }

    return marks;
}

let error  = false;

form.addEventListener("submit",function(event){
    event.preventDefault();

    let total_product = 0,total_cre = 0;

    for(let i=0;i<8;i++){

        let credits = document.getElementById(`cre${i+1}`);
        let credict_float= parseFloat(credits.value);
        total_cre+=(credict_float);
    }

    for(let i=0;i<8;i++){

        let grade = document.getElementById(`gra${i+1}`).value;
        let credits = document.getElementById(`cre${i+1}`);
        let credict_float= parseFloat(credits.value);
        let gradeValue = marksCalculation(grade);

        if(gradeValue===-1){
            error = true;
            break;
        }
        else{
            total_product+=(gradeValue*credict_float);
        }
    }
    let sgpa = total_product/total_cre;

    if(error===false){
        console.log("lalitha");
        console.log(result);
        result.textContent = "YOUR SGPA is "+sgpa;
        function clearResult() {
            document.getElementById("result").innerText = "SGPA: ";
          }
          
          function displaySGPAMessage(sgpa) {
            const messageContainer = document.getElementById("sgpa-message");
          
            // Clear previous messages
            messageContainer.innerHTML = "";
          
            // Display corresponding message
            const messageElement = document.createElement("p");
            if (sgpa >= 9) {
              messageElement.textContent = "Excellent!";
            } else if (sgpa >= 7) {
              messageElement.textContent = "Very Good!";
            } else if (sgpa >= 5) {
              messageElement.textContent = "Well Done!";
            } else {
              messageElement.textContent = "Better Luck Next Time!";
            }
          
            messageContainer.appendChild(messageElement);
          }
    }
    else{
        console.log("lalitha");
        result.textContent ="please enter valid data";
    }
    var resultElement = document.getElementById("result");
    var clearButton = document.getElementById("clearButton");

    // Add a click event listener to the clear button
    clearButton.addEventListener("click", function() {
        // Set the content of the result element to an empty string
        resultElement.innerHTML = "";
    });
    





}) 