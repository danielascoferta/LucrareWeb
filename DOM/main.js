window.onload = function(){
    let x = document.getElementById('x');
    let y =document.getElementById('y');
    let butonSuma = document.getElementById('suma');
    let rezultat = document.getElementById('rezultat');
    let suma = 0;
    
    var newL = document.createElement('li');
    newL.innerHTML = '1';
    console.log(newL);
    document.getElementById("myButton1").value="New Button Text";
   
    butonSuma.onclick = function(){
       suma = Number(this.x) + Number(this.y);
        rezultat.innerHTML = suma;
        console.log(1);
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
    
    var foo = [ ];

    for (var i = 1; i <= 10; i++) {
        foo.push(i);
        document.write(foo.push(i));
        console.log(foo.push(i));
    }

    function ColorFont(){
        document.querySelector('body').style.background = 'gray';
    }
    setTimeout(ColorFont, 5000);
    
}




  

