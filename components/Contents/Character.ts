export default class Character {
  group = ''
  group_KOR = ''
  name = ''
  name_KOR = ''
  selected = false
  image = ''
  constructor(group, name, selected, group_KOR, name_KOR) {
    this.group = group
    this.name = name
    this.selected = selected
    this.group_KOR = group_KOR
    this.name_KOR = name_KOR
  }
}
