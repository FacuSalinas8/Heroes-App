import React from 'react';
import {Link} from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className='col '>
            <div className="card  shadow p-2 mb-4 bg-body rounded 
                            animate__animated animate__fadeIn animate__delay-0.1s">
                <div className="row no-gutters ">
                    <div className="col-4">
                        
                        <img src={`/assets/${id}.jpg`} 
                            className="card-img-top rounded" 
                            alt={superhero}/>
                    </div>
                    
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-description">{alter_ego}</p>

                            {
                                (alter_ego !== characters) && 
                                <p className="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                <button className="btn btn-info">
                                    Más info
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
