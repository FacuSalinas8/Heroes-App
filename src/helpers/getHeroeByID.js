import { heroes } from "../data/heroes"

export const getHeroeByID = (id='') => { 
    return heroes.find(hero => hero.id === id)
}