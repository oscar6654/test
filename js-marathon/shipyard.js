// import * as CrewMember from 'CrewMember';
// import * as Spaceship from 'Spaceship';
// import { CrewMember } from 'CrewMember';
// import { Spaceship } from 'Spaceship';
let rocket = {
  fuel: 0,
  addFuel: function(amnt)
  {
    this.fuel+= amnt;
    console.log(this.fuel);
  },
  fire: function()
  {
    if(this.fuel > 0)
    {
      this.fuel--;
      console.log(this.fuel);
    }
    else {
      console.log("engine failed to fire");
      return false
    }
  }
}



class CrewMember{
 constructor(name){
   this.name = name;
   this.trained = false;
 }
}

class Spaceship{
  constructor(name)
  {
    this.name = name;
    this.crew = [];
    this.propulsion = null;
    this.mountPropulsion = function(obj)
    {
      this.propulsion = obj;
      console.log("Engines were mounted");
    }
  }
  loadCrew(crew){
    for(let i = 0; i < crew.length; i++)
    {
      this.crew.push(crew[i].name);
      console.log("added "+crew[i].name+ " "+ crew[i].trained);
    }

  }
  captain(){
    let randomNumber = Math.floor(Math.random() * this.crew.length);
    console.log(this.crew[randomNumber]);
    return this.crew[randomNumber]
  }
  takeoff()
  {
    if(this.propulsion == null)
    {
      console.log("FIRING IT NOW!!");
    }
    else if(this.propulsion.fire())
    {
      console.log("FIRE");
    }
    else {
      {
        console.log("NOPE");
      }
    }
  }
}

let launchpad = (ourShip,crewMembers,rocket) => {
  console.log("we are at the launchapd");
  console.log("another message");
  console.log("this is the new captain");
  ourShip.loadCrew(crewMembers);
  ourShip.captain();
  ourShip.mountPropulsion(rocket);
  ourShip.propulsion.addFuel(2000);
  ourShip.takeoff();
};

let trainCrew = (array) =>{
  let crewmembers = [];
  for(let i = 0; i < array.length; i++)
  {
    crewmembers.push(new CrewMember(array[i]));
    console.log(new CrewMember(array[i]));
  }
  for (let i = 0; i< crewmembers.length; i++)
  {
    crewmembers[i].trained = true;
  }
  return crewmembers
}
let crewNames = ['Oscar','Ivy','Nancy','Billy']
let ourShip = new Spaceship("Oscar");
// trainCrew(crewNames);

launchpad(ourShip,trainCrew(crewNames),rocket);
let crewMembers = new CrewMember("Bekah");
