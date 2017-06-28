let Spaceship = class Spaceship{
  constructor(name)
  {
    this.name = name;
    this.crew = [];
  }
  loadCrew(crew){
    this.crew.push(crew);
    console.log("added "+crew);
  }
  captain(){
    let randomNumber = Math.floor(Math.random() * this.crew.length);
    console.log(this.crew[randomNumber]);
    return this.crew[randomNumber]
  }
}
export{ Spaceship }
