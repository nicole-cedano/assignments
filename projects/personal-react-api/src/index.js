import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import InfoProvider from './context/InfoProvider.js'

ReactDOM.render(
<BrowserRouter>
<InfoProvider>
<App />
</InfoProvider>
</BrowserRouter>, 
document.getElementById('root'))



