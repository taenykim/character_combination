export default class Character {
  group = ''
  name = ''
  selected = false
  image = ''
  constructor(group, name, selected) {
    this.group = group
    this.name = name
    this.selected = selected
  }
}
