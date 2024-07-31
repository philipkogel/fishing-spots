import { useState, useEffect } from 'react';
import { Marker } from '../types/api';

const useMarkers = () => {
  const [data, setData] = useState<Marker[]>([]);

  const getMarkers = () => {
    fetch('data/seed.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }

  useEffect(()=>{
    getMarkers()
  },[])

  return { data };
}

export default useMarkers;