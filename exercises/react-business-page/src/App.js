import React from 'react'
import Nav from './components/Nav.js'
import Header from './components/Heading.js'
import Info from './components/Info.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'
import './styles.css'


function App() {
    return (
        <div className='main-mund-nav'>
            <Header />
            <Nav />
            <Info />
            <div className ='content'>
            <Content link='https://www.everlane.com/?utm_source=pepperjam&utm_medium=8-9711&utm_campaign=73861&clickId=2613461022' image='https://assets.vogue.com/photos/5bc76aef24d46d2d66995abf/master/pass/everlane-renew-womens.jpg' title='Everlane' />
            <Content link='https://www.thereformation.com/categories/dresses' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfg1MapPmE-2Fvuvyq5CN7xndj5JFN7vaoK1mUgB-3CvEyc1M4_A' title='The Reformation' />
            <Content link='https://www.everlane.com/?utm_source=pepperjam&utm_medium=8-9711&utm_campaign=73861&clickId=2613461022' image='https://assets.vogue.com/photos/5bc76aef24d46d2d66995abf/master/pass/everlane-renew-womens.jpg' title='Everlane' />
            <Content link='https://www.everlane.com/?utm_source=pepperjam&utm_medium=8-9711&utm_campaign=73861&clickId=2613461022' image='https://assets.vogue.com/photos/5bc76aef24d46d2d66995abf/master/pass/everlane-renew-womens.jpg' title='Everlane' />
            <Content link='https://www.patagonia.com/home/' image='https://img.huffingtonpost.com/asset/5a6f922d2d000049009431e2.jpeg?ops=scalefit_960_noupscale' title='Patagonia' />
            </div>

            <Footer />


        </div>

    )



}

export default App

