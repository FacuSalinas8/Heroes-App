import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroeByName } from '../../helpers/getHeroeByName';
import { HeroCard } from '../hero/HeroCard';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //Desestructuro porque necesito q, ahí es donde está el hero
  const {q=''} =queryString.parse(location.search);

  const [{searchHero},handleInputChange]=useForm({
    searchHero: q
});
  //Utilizo el Memo para que no llame getHeroeByName apenas escribo una letra
  const heroesFilterName=useMemo(() => getHeroeByName(q),[q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchHero}`);
  }


  return (
    <>
      {/* <h1>Búsqueda</h1> */}
            {/* <hr/> */}
      <div className="row mt-3">
        <div className="col-4">
          <h2>Buscar</h2>
          <hr/>
          <form className="form-horizontal d-grid gap-2" onSubmit={handleSearch}>
            
            <input type="text" className="form-control" placeholder="Buscar Heroe"
                  name="searchHero" autoComplete="off"
                  value = {searchHero} onChange={handleInputChange}/>
            
            <button type="submit" className="btn btn-outline-info mt-2">
              Buscar
            </button>

          </form>
        </div>


        <div className="col-8">
          <h2>Resultados</h2>
          <hr/>
          {(heroesFilterName.length===0)
            &&<div className="alert alert-danger">No hay resultados</div>
          }

          {heroesFilterName.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero} //Mando todas las propiedades sin nombrar a una por una
                    
                    />
                ))}
        </div>

      </div>
    </>
  )
}
