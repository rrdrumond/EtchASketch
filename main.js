const container = document.createElement("div");
const body = document.querySelector("body");
let div ;
const main  = document.createElement("main");
const title = document.createElement("h1");
let buttonBlack = document.createElement("button");
let butttoncolour = document.createElement("button");
const buttonQ = document.createElement("button");
const buttonDelete = document.createElement("button");
const divTitle = document.createElement("div");
const sqrt = document.createElement("div");
const reset = document.createElement("button");
const divBtn = document.createElement("div");
let row ;
let quanty = "";



container.classList = ("container");
main.classList = ("main");
title.classList=("title");
buttonBlack.classList = ("black");
butttoncolour.classList= ("colour");
buttonQ.classList= ("quanty");
buttonDelete.classList= ("delete");
divTitle.classList= ("divTitle");
sqrt.classList= ("sqrt");
reset.classList= ("reset");
divBtn.classList=("divBtn");





title.textContent = ("Etch a Sketch");
buttonBlack.textContent= ("Black Colour");
butttoncolour.textContent= ("Colour");
buttonQ.textContent= ("Enter how many square´s do you want!");
buttonDelete.textContent= ("Delete");
reset.textContent= ("Reset");




body.appendChild(main);
main.appendChild(buttonQ);
main.appendChild(container);
container.appendChild(divTitle);
container.appendChild(sqrt)
divTitle.appendChild(title);
main.appendChild(divBtn)
divBtn.appendChild(butttoncolour);
divBtn.appendChild(buttonBlack);
divBtn.appendChild(buttonDelete);
divBtn.appendChild(reset);





function createDiv(){
    row = document.createElement("div");
    row.classList = ("row");
    sqrt.appendChild(row);
    for(let i = 0; i< quanty; i++){
    div =document.createElement("div");
    div.classList = ("div");
    row.appendChild(div);
    }
return;
};

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
};




function initial(){
    quanty = 16;
    for (let i = 0; i < quanty; i++){
        createDiv();  
    };
    
    const divs = document.querySelectorAll(".div");
    console.log(divs);
    
   
    
    const colour = document.querySelector(".colour");
    
    colour.addEventListener("click", function(){
        
        divs.forEach(div => {
            div.addEventListener("mouseover", function(){
                div.style.backgroundColor =generateColor();
            });
        });
    });
    
    
    const negro = document.querySelector(".black");
    
    negro.addEventListener("click", function(){
        
        divs.forEach(div => {
            div.addEventListener("mouseover", function(){
                div.style.backgroundColor ="Black";
            });
        });
    });
    
    
    const white = document.querySelector(".delete");
    
    white.addEventListener("click", function(){
        
        divs.forEach(div => {
            div.addEventListener("mouseover", function(){
                div.style.backgroundColor= "White";
            })
        });
    });
};


initial();




buttonQ.addEventListener("click", function(){
    sqrt.replaceChildren(row);
    
    quanty = prompt("Enter quanty");
    
    if(quanty > 100 || quanty <= 15){
        sqrt.removeChild(row);
        alert("Enter a valid quanty above 16 and under 100");
        return initial();
        
    }else if(quanty % 2 != 0){
        sqrt.removeChild(row);
         (alert("Please enter a even number"));
         return initial();
        
    }
    sqrt.removeChild(row);
    
    
    
    for (let i = 0; i < quanty; i++){
        createDiv();
    };
    function generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
        
    };
    
    
    
    
    
    const divs = document.querySelectorAll(".div");
    console.log(divs);
    
    const colour = document.querySelector(".colour");
    
    colour.addEventListener("click", function(){
    
        divs.forEach(div => {
            div.addEventListener("mouseover", function(){
                div.style.backgroundColor =generateColor();
            });
        });
    });
    
    
    const negro = document.querySelector(".black");
    
    negro.addEventListener("click", function(){
    
        divs.forEach(div => {
            div.addEventListener("mouseover", function(){
                div.style.backgroundColor ="Black";
            });
        });
    });
    
    
    const white = document.querySelector(".delete");
    
    white.addEventListener("click", function(){
        
        divs.forEach(div => {
            div.addEventListener("mouseover", function(){
                div.style.backgroundColor= "White";
            })
        });
        function generateColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            
            return color;
            
        };
        
    });
    
    
});


function remove(){
    for (let i = 0; i < quanty; i++){
        sqrt.removeChild(sqrt.firstChild);
    }
    return
};

const butonReset = document.querySelector(".reset");

butonReset.addEventListener("click", function(){
     remove();
    quanty= 16;
    initial();
    
});





