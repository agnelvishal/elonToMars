import Actor from './Actor.js'
import config from '../config.js'
import { randInteger } from '../utils.js'


export default class Meteor extends Actor {
  constructor (canvasWidth, canvasHeight) {
    super()

    this.sprite = 'meteor'
    this.speedMod = randInteger(6, 14) / 10
     this.x = randInteger(20, 80)
     this.y = randInteger(20, 80)
    //this.x = random()
    //this.y = random()
  }

  nextFrame () {
    this.x -= config.settings.meteorSpeed * this.speedMod
    this.y += config.settings.meteorSpeed * this.speedMod
  }
}
