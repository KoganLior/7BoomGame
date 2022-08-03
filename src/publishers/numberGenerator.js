import eventEmmiter from 'events'
class NumberGenerator extends eventEmmiter{
  constructor(limit) {
    super()
    this.generator=this.getNextNumber(limit)
    
  }

  *getNextNumber(limit) {
    for (let i = 1; i <= limit; i++) {
          yield i;
      }
    }
  }
  generatePrimeNumbers() {
        let currentNumber=this.generator.next().value
        //checks if the generator has finished yeilding
        if(!currentNumber){
            return console.log("Game over")
        }

        this.emit("Number",currentNumber)
   
}

export default NumberGenerator

