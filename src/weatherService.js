const api = require("./env")



const weather = function () {
    let Data="noData";
    const getData = async function(location){
        
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=' + api.apiWeather + '&q='+location,
            { mode: 'cors' });        
        
        Data = await (response.json());
        return Data.current;
        
    }    

    return {
        Data,        
        getData
    };
};
module.exports={weather}