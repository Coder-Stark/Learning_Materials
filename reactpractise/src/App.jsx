import React from 'react'
import ChildComponent from '../components/childComponent'
import {ThemeProvider} from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
        <div style={{padding: '20px'}}>
            <ChildComponent/>
        </div>
    </ThemeProvider>
  )
}

export default App