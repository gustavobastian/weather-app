const api = require("./env")



const weather = function () {
    let Data="noData";
    const getData = async function(location){
        
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=' + api.apiWeather + '&q='+location,
            { mode: 'cors' });        
        
        Data = await (response.json());
        return Data.current;
        
    }
    const getTempC = function(){
        if(this.Data=="noData"){
            return;
        }
        else{
            return this.Data.temp_c;
        }
    }
    const getTempF = function(){
        if(this.Data=="noData"){
            return;
        }
        else{
            return this.Data.temp_F;
        }
    }
    const getHumidity = function(){
        if(this.Data=="noData"){
            return;
        }
        else{
            return this.Data.humidity;
        }
    }

    const getCloud = function(){
        if(this.Data=="noData"){
            return;
        }
        else{
            return this.Data.cloud;
        }
    }
    const getPressureMB = function(){
        if(this.Data=="noData"){
            return;
        }
        else{
            return this.Data.pressure_mb;
        }
    }

    return {
        Data,
        getTempC,
        getTempF,
        getHumidity,
        getCloud,
        getPressureMB,
        getData
    };
};
module.exports={weather}