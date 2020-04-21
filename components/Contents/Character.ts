export default class Character {
  group = ''
  group_KOR = ''
  name = ''
  name_KOR = ''
  selected = false
  image = ''
  synergy: string[] = []
  constructor(
    group: string,
    name: string,
    selected: boolean,
    group_KOR: string,
    name_KOR: string,
    synergy: string[]
  ) {
    this.group = group
    this.name = name
    this.selected = selected
    this.group_KOR = group_KOR
    this.name_KOR = name_KOR
    this.synergy = synergy
  }
}
