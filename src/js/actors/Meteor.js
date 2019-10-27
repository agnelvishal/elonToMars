import Actor from './Actor.js'
import config from '../config.js'
import { randInteger } from '../utils.js'


export default class Meteor extends Actor {
  constructor (canvasWidth, canvasHeight) {
    super()

    this.sprite = 'meteor'
    this.speedMod = randInteger(5, 55) / 10
     this.x = randInteger(200, 800)
     this.y = randInteger(60, 80)
    //this.x = random()
    //this.y = random()
  }

  nextFrame () {
    this.x -= config.settings.meteorSpeed * this.speedMod
    this.y += (config.settings.meteorSpeed * this.speedMod) + randInteger(1, 6)     
  }
}
