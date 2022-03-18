import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path="/" element={<SearchScreen />} />
                <Route path="/search" element={<SearchScreen />} />
            </Routes >
        </BrowserRouter>
    )
}
