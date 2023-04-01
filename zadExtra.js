//  DANE WEJŚCIOWE
const people = [
    {
      firstName: "Bartolomeo",
      lastName: "Lozano",
    },
    {
      firstName: "Mateo",
      lastName: "Loza",},
      {
        firstName: "Kora",
        lastName: "Karambol",
      },
      {
        firstName: "Piotrek",
        lastName: "Putkamam",
      },
  ];

//1//
function getNickname(name,surname){
  const partOfName=name.split("").reverse().slice(-3).join('').toLowerCase()
  const partOfLastname=surname.split("").slice(-3).reverse().join('')
const newName=partOfName+partOfLastname 
return newName[0].toUpperCase()+newName.slice(1)
}

const people2=people.map((person)=>({
firstName:person.firstName,
lastName:person.lastName,
nickName:getNickname(person.firstName, person.lastName)

  }))

  
//2//
const  introduceYourself= function (){
console.log(`Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie ${this.nickname}`)
}

const people3=people2.map(function(person){
return {
  ... person,
 introduceYourself
}
})


people3.forEach((person)=>person. introduceYourself())


  //  3
const colors = ["red", "green", "yellow", "blue", "pink", "orange"];


function getFavouriteColor(num = 5) { const letterCount =this.firstName.length + this.lastName.length + this.nickName.length
    if (num < 1) {
      return "Podałeś za małą liczbę, liczba nie może być mniejsza niż 1";
    } else if (num > 30) {
      return "Podałeś za dużą liczbę, liczba nie może być większa niż 30";
    } else {
      const indexColor = Math.abs(letterCount - num) % colors.length;
      console.log("indexColor", indexColor);
      return colors[indexColor];
    }
  }
  const people4 = people3.map(function (person) {
    return {
      ...person,
      getFavouriteColor,
    };
  });
  
people4.forEach((person) => {
  {
    console.log(person.getFavouriteColor());
  }
});

//4//

function getColor2 (num=5, person){
 let allLetters=0
  if(num<1){return("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1")}
else if (num>30){return("Podałeś za dużą liczbę, liczba nie może być większa niż 30")}
for (key in person){
  allLetters+=person[key].length
}

const indexColor=(Math.abs(allLetters - num))%colors.length

 return `Ulubiony kolor ${person.firstName} ${person.lastName} to ${colors[indexColor]}`
}

console.log(getColor2(5,people3[0]))

// //5//

function isPrime(num){
  if(num<2){return false}
 for (let i=2; i<=num;i++){
  if(num%i===0){return false}
  return true
 }
}


function checkIfElite(){
  const isElite=Math.round(Math.random()*100)
if ((isElite%3===0 && isElite%5===0)|| isPrime(isElite)===true){
return isElite===true
}
}

const filteredPeople=people4.filter((person, elite)=>{
  elite=checkIfElite()
const lastLetterOfName=person.firstName.slice(-1)
return (((lastLetterOfName==='a'||lastLetterOfName==='k') &&
person.lastName.length>6 &&
person.nickName.includes('a'))||
elite===true)}).map(function(person){
  let newObj=[]
  for(let key in person){
    const newKey=person[key]
    const newValue=key
    if(typeof newKey!=='function'){
       newObj={...newObj, [newKey]:newValue}
   
    }
  }return newObj} ).reduce(function(acc,curr){
    return {...acc,...curr
  },0})

 const newArr= Object.entries (filteredPeople)


console.log(newArr.sort())