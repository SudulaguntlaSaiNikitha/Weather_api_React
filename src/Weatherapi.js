import React,{useState,useEffect} from 'react'
import axios from 'axios'
  // import wed from './wed.jpeg'
// import sun from './sun.png'
const Weatherapi = () => {

    const myStyle={
       marginLeft:'350px',marginRight:'350px',marginTop:'30px'
   }
//    https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__480.jpg
   const [data,setData]=useState({})
   const [cityName,setCityName]=useState("")

const getWeatherDetails = (cityName)=>
{
    if(cityName) return(
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ cityName+"&appid=9e79ee7e5a6ae9af7d2ef4721dbeb43c").then((res)=>{
  setData(res.data)
console.log(res.data)
} ).catch((err) => {
    console.log("err",err)
   }))
}
// axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ cityName+"&appid=9e79ee7e5a6ae9af7d2ef4721dbeb43c").then((res)=>{
//     //    setData(res)


useEffect(()=>
{
    getWeatherDetails("Delhi")
},[])

const handleSearch=()=>
{
    getWeatherDetails(cityName)
}
 
    // const url='https://api.openweathermap.org/data/2.5/weather?q=London&appid=9e79ee7e5a6ae9af7d2ef4721dbeb43c'
  return (
    <div style={myStyle}>
        <center>
      <div className='card' style={{boxShadow:'2px 2px 2px 2px black'} }>
      <span style={{marginTop:'20px'}} ></span>
        <center><div className='card-title' style={{marginRight:'15px'}}>
            <h1>Weather App</h1>
        </div></center>
        <span style={{marginTop:'20px'}} ></span>
        <div className='card-body'>
            <input type='text' style={{height:'40px',width:'250px',borderRadius:'7px'}} 
            onChange={(e)=> setCityName(e.target.value)} placeholder=" enter city name"  />
            <span style={{marginLeft:'10px'}}></span>
            <button type='button' onClick={handleSearch} className='p-2 btn btn-primary'style={{fontSize:'20px'}}>Search</button>
        </div>
        <span style={{marginTop:'20px'}} ></span>
      
        </div>
      <div className='card' style={{boxShadow:'2px 2px 2px 2px black'} }>
     <center>
        
        <p style={{fontSize:'30px',fontWeight:'20px'}}>Temperature:{((data?.main?.temp)-273.15).toFixed(2)}°C </p>
        <p style={{fontSize:'30px',fontWeight:'10px'}}>Place:{data?.name}</p>
        <p style={{fontSize:'30px',fontWeight:'10px'}}>Humidity:{data?.main?.humidity} %</p>
        <p style={{fontSize:'30px',fontWeight:'10px'}}>Wind Speed:{data?.wind?.speed} %</p>

        </center>
      </div>
      </center> 
    </div>
  )
}

export default Weatherapi
