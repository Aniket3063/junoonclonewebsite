import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Container from '../components/MainContent/Container'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Container/>
        <Footer />
    </div>
  )
}

export default HomePage