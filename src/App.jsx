import { useEffect } from 'react'

import loader from './assets/loader-cog.svg'
import './App.css'

function App() {


  // Unsplash API
  const count = 3;
  const apiKey = 'nVCPp2bosPtaXsv8fhMSsGqiMbuBfPfSESvMRch-O28';
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  useEffect(() => {
    // Get photos from Unsplash API using fetch and 'than catch' syntax

    fetch(apiUrl).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log('Error fetching data', error);
    });




  }, [])

  return (
    <>
      <h1>Unsplash API - Infinity Scroll</h1>
      {/*  Loader */}
      <div className="loader" id="loader">
        <img src={loader} alt="Loading" />
      </div>
      {/*  Image Container  */}
      <div className="image-container" id="image-container">
      </div>
    </>
  )
}

export default App
