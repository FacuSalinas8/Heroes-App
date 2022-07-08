import { heroes } from "../data/heroes";

export const getHeroeByPublisher = (publisher) =>{

    const validPublisher = ['DC Comics','Marvel Comics'];

    //Si el publisher está incluido en el validPublisher entonces si entra
    //en este caso ponemos la condicion negada para tirar un throw
    //en el caso que no coincida
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} no válido`)
    }

    return heroes.filter(hero => hero.publisher === publisher);
}