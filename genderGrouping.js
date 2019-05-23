function genderClass(person){
 var result = {};
 var nilaiTot = 0;

 for ( var x = 0; x < person.length; x++ ){
  //  console.log(persons[x].gender)
  if ( result[person[x].gender] === undefined ){
    result[person[x].gender] = [];
  }
  var temp = {'first name' : person[x]["first_name"], last_name : person[x].last_name, email : person[x].email, age : person[x].age }
  result[person[x].gender].push(temp)

  nilaiTot += person[x].score
 } 
 result['Avg'] = nilaiTot / person.length
 return result
}

console.log(genderClass([
  {
  id: 1,
  "first name": "Andy",
  last_name: "Klouz",
  email: "andy0@gmail.com",
  gender: "Male",
  age: 33,
  score: 80
},
{
  id: 2,
  "first name": "Refi",
  last_name: "Castagne",
  email: "refi@gmail.com",
  gender: "Male",
  age: 22,
  score: 75
}, {
  id: 3,
  "first name": "Irvy",
  last_name: "Florence",
  email: "irvy@gmail.com",
  gender: "Male",
  age: 24,
  score: 78
}, {
  id: 4,
  "first name": "Karin",
  last_name: "Petkens",
  email: "karin@gmail.com",
  gender: "Female",
  age: 25,
  score: 98
}, {
  id: 5,
  "first name": "Shadow",
  last_name: "Manuely",
  email: "shadow@gmail.com",
  gender: "Male",
  age: 21,
  score: 76
},
{
  id: 6,
  "first name": "Anita",
  last_name: "Manuely",
  email: "anita@gmail.com",
  gender: "waria",
  age: 21,
  score: 76
},
]))

// var result =
// {
//     Male: [
//             {
//             'first name': 'Andy',
//             last_name: 'Klouz',
//             email: 'andy0@gmail.com',
//             age: 33,
//         },
//         {
//             'first name': 'Refi',
//             last_name: 'Castagne',
//             email: 'refi@gmail.com',
//             age: 22
//         },
//         {
//             'first name': 'Irvy',
//             last_name: 'Florence',
//             email: 'irvy@gmail.com',
//             age: 24
//         },
//         {
//             'first name': 'Shadow',
//             last_name: 'Manuely',
//             email: 'shadow@gmail.com',
//             age: 21
//         }],
//     Female:
//         [{
//             'first name': 'Karin',
//             last_name: 'Petkens',
//             email: 'karin@gmail.com',
//             age: 25
//         },
//     ],
//     avg: 1231
// }