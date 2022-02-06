/**
 * Used for custom validations
 * @param {String} hero
 * @param {Number} time
 * @param {String} classSlug
 */
class HeroData {
  constructor (hero, time, classSlug) {
    this.hero = hero
    this.time = time
    this.classSlug = classSlug
  }
}

export {
  HeroData
}
