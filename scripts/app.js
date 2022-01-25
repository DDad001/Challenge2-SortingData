import MakeElement from './CreatingElement.js';
import {getPeople, People} from './fetch.js';
//Create variables
let person = [];
let CreateNewElement = document.getElementById('CreateNewElement');
let IdAsc = document.getElementById('IdAsc');
let IdDesc = document.getElementById('IdDesc');
let FirstNameAsc = document.getElementById('FirstNameAsc');
let FirstNameDesc = document.getElementById('FirstNameDesc');
let LastNameAsc = document.getElementById('LastNameAsc');
let LastNameDesc = document.getElementById('LastNameDesc');
let EmailAsc = document.getElementById('EmailAsc');
let EmailDesc = document.getElementById('EmailDesc');
let HeightAsc = document.getElementById('HeightAsc');
let HeightDesc = document.getElementById('HeightDesc');
let AgeAsc = document.getElementById('AgeAsc');
let AgeDesc = document.getElementById('AgeDesc');
let selector = document.getElementById('selector');

getPeople();
// let test2 = [];
// setTimeout(OrderByFirstNameAsc, 1000)

// function OrderByFirstNameAsc()
// {
//     let orderFirstNameAsc = People.map(obj => obj.FirstName.split(' ')[1]).sort();

//      for(let i = 0; i < orderFirstNameAsc.length; i++)
//      {
//      if(People[i].FirstName.split(" ")[1] == orderFirstNameAsc[idx]){    
//      test2.push(People[i]);
//      }
//      }
// }
// console.log(OrderByFirstNameAsc());

IdAsc.addEventListener('click',function(){
    getIdAsc();
});

IdDesc.addEventListener('click',function(){
    getIdDesc();
});

FirstNameAsc.addEventListener('click',function(){
    getFirstNameAsc();
});

FirstNameDesc.addEventListener('click',function(){
    getFirstNameDesc();
});

LastNameAsc.addEventListener('click',function(){
    getLastNameAsc();
});

LastNameDesc.addEventListener('click',function(){
    getLastNameDesc();
});

EmailAsc.addEventListener('click',function(){
    getEmailAsc();
});

EmailDesc.addEventListener('click',function(){
    getEmailDesc();
});

HeightAsc.addEventListener('click',function(){
    getHeightAsc();
});

HeightDesc.addEventListener('click',function(){
    getHeightDesc();
});

AgeAsc.addEventListener('click',function(){
    getAgeAsc();
});

AgeDesc.addEventListener('click',function(){
    getAgeDesc();
});


//First Did it the Angel way then Scott Showed me a way shorter way, so i did i the scott way. Thanks Scott!!!
// Ascending order starts here

function getIdAsc()
{
    CreateNewElement.innerHTML = "";
    let id = People.sort((a,b) => a.Id - b.Id);
    id.forEach(person => {
        MakeElement(person)
    });
}

function getIdDesc()
{
    CreateNewElement.innerHTML = "";
    let id = People.sort((a,b) => a.Id - b.Id);
    id.reverse().forEach(person => {
        MakeElement(person)
    });
}

function getFirstNameAsc()
{
    CreateNewElement.innerHTML = "";
    let First = People.sort((a,b) => a.FirstName.localeCompare(b.FirstName));
    First.forEach(person => {
        MakeElement(person)
    });
}

function getLastNameAsc()
{
    CreateNewElement.innerHTML = "";
    let last = People.sort((a,b) => a.LastName.localeCompare(b.LastName));
    last.forEach(person => {
        MakeElement(person)
    });
}

function getEmailAsc()
{
    CreateNewElement.innerHTML = "";
    let email = People.sort((a,b) => a.Email.localeCompare(b.Email));
    email.forEach(person => {
        MakeElement(person)
    });
}

function getHeightAsc()
{
    CreateNewElement.innerHTML = "";
    let height = People.sort((a,b) => a.Height.localeCompare(b.Height));
    height.forEach(person => {
        MakeElement(person)
    });
}

function getAgeAsc()
{
    CreateNewElement.innerHTML = "";
    let age = People.sort((a,b) => a.Age - b.Age);
    age.forEach(person => {
        MakeElement(person)
    });
}

// Ascending order stops here


// Descending order starts here
selector.addEventListener('change',function(){

    if(selector.value == 1)
    {
        for(let i = 0; i<=10; i++)
        {
           MakeElement(person)
        }
    }
});

function getFirstNameDesc()
{
    CreateNewElement.innerHTML = "";
    let First = People.sort((a,b) => a.FirstName.localeCompare(b.FirstName));
    First.reverse().forEach(person => {
        MakeElement(person)
    });
}

function getLastNameDesc()
{
    CreateNewElement.innerHTML = "";
    let last = People.sort((a,b) => a.LastName.localeCompare(b.LastName));
    last.reverse().forEach(person => {
        MakeElement(person)
    });
}

function getEmailDesc()
{
    CreateNewElement.innerHTML = "";
    let email = People.sort((a,b) => a.Email.localeCompare(b.Email));
    email.reverse().forEach(person => {
        MakeElement(person)
    });
}

function getHeightDesc()
{
    CreateNewElement.innerHTML = "";
    let height = People.sort((a,b) => a.Height.localeCompare(b.Height));
    height.reverse().forEach(person => {
        MakeElement(person)
    });
}

function getAgeDesc()
{
    CreateNewElement.innerHTML = "";
    let age = People.sort((a,b) => a.Age - b.Age);
    age.reverse().forEach(person => {
        MakeElement(person)
    });
}
// Descending order stops here


