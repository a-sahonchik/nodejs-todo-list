import React from 'react'
import './styles.css'
import LOGO from './logo.png'

export const App = (): JSX.Element => {
  return <div id="header">
            <img src={LOGO} alt="Todo application logo" width="135" height="110" />
            <h1>React TypeScript Webpack Template</h1>
        </div>
}
