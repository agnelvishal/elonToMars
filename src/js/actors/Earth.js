import Actor from './Actor.js'
import config from '../config.js'
import { randInteger } from '../utils.js'

export default class Earth extends Actor {
  constructor (canvasWidth) {
    super()

    this.sprite = 'earth'
    this.speedMod = randInteger(6, 14) / 10
    this.x = canvasWidth
    this.y = randInteger(20, 80)
  }

  nextFrame () {
    this.x -= config.settings.earthSpeed * this.speedMod
  }
}
