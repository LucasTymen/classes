
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon ('Francisco Romero','Cardiovascular')
console.log(surgeonRomero)

const surgeonJackson = new Surgeon ('Ruth Jackson','Orthopedics')
console.log(surgeonJackson)

const surgeonAlZahrawi = new Surgeon('Al-Zahrawi', 'Neurology');
console.log(surgeonAlZahrawi)
// courses :
/*
An instance is an object that contains the property names and methods of a
class, but with unique property values
*/
