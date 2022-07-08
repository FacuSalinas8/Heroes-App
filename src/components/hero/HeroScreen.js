import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeByID } from '../../helpers/getHeroeByID';

export const HeroScreen = () => {
    
    const {heroId} = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroeByID(heroId), [heroId])

    const handleReturn = ()=> {
        navigate(-1);//-1 sirve para volver una pag atrás
    }

    //Si el heroe no existe, regresa el usuario al home
    if(!hero){
        return <Navigate to='/'/>
    }
    
    return (
        <div className='row mt-5 shadow p-3 mb-5 bg-body rounded
                        animate__animated animate__fadeInLeft'>
            
            <div className='col-4'>
                <img 
                    src={`/assets/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className='img-thumbnail'
                    />
            </div>

            <div className='col-8'>
                <h3>{hero.superhero}</h3>
                <ul className='list-group '>
                    <li className='list-group-item'>
                        <b>Alter ego:</b> {hero.alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Personajes:</b> {hero.characters}
                    </li>
                    <li className='list-group-item'>
                        <b>Primera aparición:</b> {hero.first_appearance}
                    </li>
                    <li className='list-group-item'>
                    <b>Editorial:</b> {hero.publisher}
                    </li>
                </ul>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn btn-warning mt-5" 
                            onClick={handleReturn} 
                    >
                        Regresar
                    </button>
                </div>
            </div>

        </div>
    )
}
