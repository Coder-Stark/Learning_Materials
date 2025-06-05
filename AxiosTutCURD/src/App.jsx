import React from 'react'
import AxiosGET from './components/AxiosGET'
import AxiosPOST from './components/AxiosPOST'
import AxiosPUTDELETE from './components/AxiosPUTDELETE'

function App() {
  return (
    <>
    <div>Axios API Call</div>
    {/* <AxiosGET/> */}
    {/* <AxiosPOST/> */}
    <AxiosPUTDELETE/>
    </>
  )
}

export default App