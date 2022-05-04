import React, {useState, useEffect} from 'react';

const Api = (props) => {
    const[data, setData] = useState([]);
    
    useEffect(() => {
        const url = "http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=079acff974c1fd22b8ba95693cf1fe47";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(setData(json));
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
  
return (
    <>
        { props.driver(data) }
        <h1>Weather Data</h1>
    </>
  )
}

export default Api