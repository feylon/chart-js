let form = document.querySelector("form");
let f = document.querySelector("#f");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let step = document.querySelector("#step");
let color = document.querySelector("#color");
let container = document.querySelector(".container");
let checkbox = document.querySelector("#flexSwitchCheckChecked")
form.addEventListener("submit",()=>{
    event.preventDefault();
    let my_color = color.value;
    let xValues = [];
    let yValues = [];
     my_color = color.value;
    container.innerHTML = '';
    container.innerHTML = ` <canvas id="myChart" style="width:300px;max-width:1000px;height:100px"></canvas>
    `
  
    let data = JSON.parse(localStorage.getItem("data"));
    
    generateData(f.value,parseFloat(start.value),parseFloat(end.value),parseFloat(step.value));
      
          function generateData(value, i1, i2, step ) {
            xValues.splice(0,xValues.length);
            yValues.splice(0,yValues.length)
            
          try {
            for (let x = i1; x <= i2; x += step) {
                yValues.push(eval(funksiya(value)));
                xValues.push(x);
              }
          } catch (error) {
            alert("Aniqlanmagan qiymat kiritildi");return
          }
        }
        new Chart("myChart", {
            type: "line",
            data: {
              labels: xValues,
              datasets: [{
                fill: document.querySelector("#check").checked,
                pointRadius: 1,
                borderColor: my_color,
                data: yValues
              }]
            },    
            options: {
              legend: {display: false},
              title: {
                display: false,
                text: "y = x * 2 + 7",
                fontSize: 18
              }
            }
          });
    
   




        }




    
);       
let button = document.querySelector("button");
button.addEventListener("click",()=>{
    
})


checkbox.addEventListener("change",()=>{
    console.log("ozgardi");

    if(checkbox.checked){
        document.body.classList.add("bg-dark");
        document.body.classList.add("text-light");
        document.querySelector(".form-check-label").innerHTML = `<i class="far fa-moon"></i>`;
    }else
    {
        document.body.classList.remove("bg-dark");
        document.body.classList.remove("text-light");
        document.querySelector(".form-check-label").innerHTML =`<i class="far fa-moon"></i>`;
    }

})


function funksiya(s)
{while(s.includes("Arccos("))
s = s.replace("Arccos(","Math.acos("); // Arccos(x)"


while(s.includes("Arcsin("))
s = s.replace("Arcsin(","Math.asin("); // Arcsin(x)"


while(s.includes("Arctan("))
s = s.replace("Arctan(","Math.atan("); // Arctan(x)


/*Arklar oilasi*/

while(s.includes("e"))
s = s.replace("e","Math.E"); // E = 2.71...


while(s.includes("Pi"))
s = s.replace("Pi","Math.PI"); // Pi = 3.14...



while(s.includes("x^("))
s = s.replace("x^(","Math.pow(x,"); // Daraja : "x^(daraja qiymati)"


while(s.includes("Atan("))
s = s.replace("Atan(","Math.atan("); // Atan(x)


while(s.includes("Sin("))
s = s.replace("Sin(","Math.sin("); // Sin(x)


while(s.includes("Cos("))
s = s.replace("Cos(","Math.cos("); // Cos(x)

 s= s.replace("Tan(x","Math.tan(x");// Tan(x)
return s;}

