import { type Component } from 'vue'
export interface ICustomCard {
  title: string
  description: string
  active:boolean
  sectionHeaders: ISectionHeader[]
  cardPic: string
  color: string
}
export interface IMainCard {
  title: string
  description?: string
  active: boolean
  sectionHeaders?: ISectionHeader[]
  cardPic?: string
  color?: string
  path?: string
}

export interface ISectionHeader {
  title: string
  description: string
  img?: string
  childComponent?: Component
}
