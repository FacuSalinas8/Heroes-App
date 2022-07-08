import React from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
// import { DcScreen } from '../components/DC/DcScreen';
// import { MarvelScreen } from '../components/marvel/MarvelScreen';
// import { SearchScreen } from '../components/search/SearchScreen';
// import { NavBar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                {/* el login es publico */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>}
                />
                
                {/* <Route path="/login" element={<LoginScreen />}  */}

                {/* el resto es privado */}
                <Route path="/*" element={
                    //high order component
                    <PrivateRoute>
                        {/* Children Component */}
                        <DashboardRoutes/>
                    </PrivateRoute>
                    }
                />

                {/* <Route path="/*" element={<DashboardRoutes/>} /> */}
            </Routes>

        </BrowserRouter>

    )
}
