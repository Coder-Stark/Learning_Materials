import React, { useContext } from 'react'
import {ThemeContext} from '../src/contexts/ThemeContext'

function ChildComponent() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div style={{padding: '20px', backgroundColor: theme === 'dark' ? '#333': '#fff', color: theme === 'dark' ? '#fff' : '#000'}}>
        <h3>Child Component</h3>
        <p>Current Theme: {theme}</p>
        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  )
}

export default ChildComponent