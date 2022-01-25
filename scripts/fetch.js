let People = [];
 function getPeople()
{
    fetch("../data/data.json")
    .then(response => response.json())
    .then(data => {
        People = data.People;
        console.log(People);
    })
}

export{getPeople, People}