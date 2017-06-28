// your code, here
let person = {
  firstName: 'Oscar',
  lastName: 'Chng',
  hometown: 'Philippines',
  occupation: 'Programmer',
  catchPhrase: 'Hello',
  name() {
    return `${this.firstName} ${this.lastName} lives in ${this.hometown} and is a ${this.occupation}. ${this.catchPhrase}`
  }
}

console.log(person.name());
