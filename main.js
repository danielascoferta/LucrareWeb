window.onload = function(){
    let x = document.getElementById('x');
    let y =document.getElementById('y');
    let suma = 0;
    //document.getElementById("rezulat").innerHTML = sumXY();

    var newL = document.createElement('li');
    newL.innerHTML = '1';
    console.log(newL);
    
}

function sumXY(){
    this.suma = Number(this.x) + Number(this.y);
    }

function Paragraph(){
    for(let i = 1; i < 10; i++){
        newPar.textContainer = "Paragraful NR + i";
    
    }
}
function myFunction() {
    var para = document.createElement("P");
    para.innerText = "Paragraf nou.";
    document.body.appendChild(para);
  }

