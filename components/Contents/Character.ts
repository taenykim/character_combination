export default class Character {
  group = ''
  group_KOR = ''
  name = ''
  name_KOR = ''
  selected = false
  image = ''
  synergys: string[] = []
  synergys_KOR: string[] = []
  constructor(
    group: string,
    name: string,
    selected: boolean,
    group_KOR: string,
    name_KOR: string,
    synergys: string[],
    synergys_KOR: string[]
  ) {
    this.group = group
    this.name = name
    this.selected = selected
    this.group_KOR = group_KOR
    this.name_KOR = name_KOR
    this.synergys = synergys
    this.synergys_KOR = synergys_KOR
  }
}
