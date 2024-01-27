const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll(".error");
const button = document.querySelector("button");
//button.disabled = true;
let counter;


form.addEventListener("submit", (event)=>{
    counter = 0;
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].validity.valid){
            counter++;
        }
    }
    if (counter !== 6){
        button.title = "Please correct and complete the forms!"
        event.preventDefault();
    }
    else{
        
    }
})

inputs.forEach((input) => {
    input.addEventListener("input", () =>{
        let span = input.nextElementSibling;
        if (!input.validity.valid){
            showError(input, span);
        }
        else{
            span.textContent = "";
        }
    })
});


function showError(input, span){
    if(input.validity.typeMismatch){
        span.style.position = "relative";
        span.style.bottom = "21px";
        span.style.left = "5px";
        span.style.color = "red";
        span.textContent = "You forgot the @!";
    }
    else if (input.validity.tooShort){
        span.style.position = "relative";
        span.style.bottom = "21px";
        span.style.left = "5px";
        span.style.color = "red";
        span.textContent = "Too short! minimum length is 5!";
    }
    else if (input.validity.tooLong){
        span.style.position = "relative";
        span.style.bottom = "21px";
        span.style.left = "5px";
        span.style.color = "red";
        span.textContent = "Too long! maximum length is 20!";
    }
    else if (input.validity.valueMissing){
        span.style.position = "relative";
        span.style.bottom = "21px";
        span.style.left = "5px";
        span.style.color = "red";
        span.textContent = "This value is required!";
    }
}