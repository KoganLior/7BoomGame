import eventEmmiter from 'events'
import dividedBy7 from '../../common/dividedBy7.js'
import numberHas7 from '../../common/has7.js'

class Player extends evenEmmiter{
    constructor(name="player",age=18){
        super()
        this.name=name
        this.age=age
    }
    checkNumber(number){
        if(numberHas7(number)||dividedBy7(number)){
            console.log(`${this.name}: Boom !`)
        }
        else{
            console.log(`${this.name}: ${number} !`)
        }
    }
}

export default Player
