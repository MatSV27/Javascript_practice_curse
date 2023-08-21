// Primera parte 
// console.log("Hello World");

// const p = document.querySelector('p');
// const paragraph = document.getElementsByClassName(' paragraph');
// const food = document.getElementById('food');
// const input = document.querySelector('input');
// console.log({p,paragraph,food,input});

// console.log(input.value)

// p.innerHTML = 'MC >> COD <a href="">Shikihermanos, nosotros sí rompimos el internet</a>';
// p.innerText = 'A la safaera' // con el innerText se agrega solo texto, no como el innerhtml que puede agregar etiquetas como el <a> o <p> osea todo codigo en html
// p.getAttribute('food');
// console.log(p.getAttribute('food'));
// console.log(p.getAttribute('class'));
// p.setAttribute('food','El carbonero');
// console.log(p.getAttribute('food'));

// p.classList.add('drink');
// p.classList.remove('empty');

// input.value = "27";


// console.log(document.createElement('h1'));

// const img = document.createElement('img');
// img.setAttribute('src','https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/ee/latest/20200720153035/Luxray.png/200px-Luxray.png');
// console.log(img);
// food.append(img);

//Segunda parte
const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btncalcular');
const result= document.querySelector('#result');    

// btn.addEventListener('click', btnclick);

form.addEventListener('submit',btnclick);

function btnclick(event){
    console.log({event})
    event.preventDefault();
    result.innerText = "Result:" + input1.value + input2.value; 
}

