import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/DC/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
        
            <NavBar/>
            <div className="container">
                <Routes>
                    {/* Como es un router HIJO no hace falta el slash "/" */}
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    {/* :heroId se puede poner cualquier nombre */}
                    <Route path="hero/:heroId" element={<HeroScreen />} />

                    <Route path="/" element={<DcScreen />} />
                </Routes>
            </div>

        </>
    )
}
