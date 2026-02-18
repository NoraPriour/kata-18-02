let tableau = [
  { name: "Lina", age: 22, active: true },
  { name: "Sarah", age: 17, active: true },
  { name: "Emma", age: 30, active: false }
]



function getActiveAdult(users) {
    let resultat = []
    users.forEach((elt) => {
        if (elt.age >= 18 && elt.active) {
            resultat.push(elt)
        }
    }) 

    return resultat
}

console.log(getActiveAdult(tableau))