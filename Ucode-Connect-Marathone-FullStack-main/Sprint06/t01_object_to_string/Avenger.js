exports.Avenger = class {
  constructor(name, alias, gender, age, powers) {
      this.name = name;
      this.alias = alias;
      this.gender = gender;
      this.age = age;
      this.powers = powers;
  }

  toString() {
      let str = '';
      str += this.name.toString();
      str += ' ';
      str += this.name.toString();
      str += ' ';
      str += this.age.toString();
      return str;
  }
  // avenger(){
  //       Avenger.toString = () => [
  //         `name: ${this.name}`,
  //         `gender: ${this.gender}`,
  //         `age: ${this.age}`
  //       ].join('\n');
  //       return Avenger
  //     }
}


function avenger(option){
  let Avenger = () => ([
    `${option.alias.toUpperCase()}`,
    `${option.powers.join('\n')}`
  ]).join('\n')
      Avenger.toString = () => [
        `name: ${option.name}`,
        `gender: ${option.gender}`,
        `age: ${option.age}`
      ].join('\n');
      return Avenger
}



/*
  Task name: Object to string
*/


module.exports.Avenger = avenger
const {Avenger} = require("./Avenger");

const stark = new Avenger({
  name: 'Tony Stark',
  alias: 'Iron Man',
  gender: 'man',
  age: 38,
  powers: ["intelligence", "durability", "magnetism"]
})

const natasha = new Avenger({
  name: 'Natasha Romanoff',
  alias: 'Black Widow',
  gender: 'woman',
  age: 35,
  powers: ["agility", "martial arts"]
})

const examine = (avenger) => {
  console.count('Avenger');
  console.group('*** Avenger introduced ***');
  console.log(avenger.toString());
  console.groupEnd();
  console.group('*** Avenger called ***');
  console.log(avenger());
  console.groupEnd();
  console.group('*** Avenger\'s internals ***');
  console.log(avenger, '\n');
  console.groupEnd();
}

examine(stark);

examine(natasha);

