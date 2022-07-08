import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    
    
    return (
        <div>
            <h1>DC</h1> 
            <hr/>
            {/* Llamo al componente mandando de parametro */}
            <HeroList publisher='DC Comics'/>

        </div>

    )
}
