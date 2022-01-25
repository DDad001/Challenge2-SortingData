export default function MakeElement(person)
{
    let div = document.createElement('div');
    div.className = "col-2";

    let li = document.createElement('li');
    li.className = "text-center pt-3 pb-1";
    li.textContent = person.Id;

    let div2 = document.createElement('div');
    div2.className = "col-2";

    let li2 = document.createElement('li')
    li2.className = "text-center pt-3 pb-1";
    li2.textContent = person.FirstName;

    let div3 = document.createElement('div');
    div3.className = "col-2";

    let li3 = document.createElement('li')
    li3.className = "text-center pt-3 pb-1";
    li3.textContent = person.LastName;

    let div4 = document.createElement('div');
    div4.className = "col-2";

    let li4 = document.createElement('li')
    li4.className = "text-center pt-3 pb-1";
    li4.textContent = person.Email;

    let div5 = document.createElement('div');
    div5.className = "col-2";

    let li5 = document.createElement('li')
    li5.className = "text-center pt-3 pb-1";
    li5.textContent = person.Height;

    let div6 = document.createElement('div');
    div6.className = "col-2";

    let li6 = document.createElement('li')
    li6.className = "text-center pt-3 pb-1";
    li6.textContent = person.Age;

    let hr = document.createElement('hr');
    hr.className = "hrStyle";

    div.appendChild(li);
    div2.appendChild(li2);
    div3.appendChild(li3);
    div4.appendChild(li4);
    div5.appendChild(li5);
    div6.appendChild(li6);
    
    CreateNewElement.appendChild(div);
    CreateNewElement.appendChild(div2);
    CreateNewElement.appendChild(div3);
    CreateNewElement.appendChild(div4);
    CreateNewElement.appendChild(div5);
    CreateNewElement.appendChild(div6);  
    CreateNewElement.appendChild(hr);

}
