

const currentWeather= function(imageService){
    
    async function upGradeValues(data,mode,location){
        console.log("inside current")  
        console.log(JSON.stringify(data));

        
        
        //variables for background
        let localTemperature=data.temp_c;

        let content=document.getElementById('weatherPlace')
        content.innerHTML=" ";
        content.className="weatherPlace";

        let mylocation=location.split(",");

        let locationElement=document.createElement('div')
        locationElement.nameClass="temperature";
        let locationText=document.createTextNode(mylocation[0].toUpperCase())
        locationElement.appendChild(locationText);

        let temperature=document.createElement('div')
        temperature.nameClass="temperature";
        let temperatureText;

        if(mode==0)
            temperatureText=document.createTextNode("TEMP:"+data.temp_c+"ºC")
        else    
            temperatureText=document.createTextNode("TEMP:"+data.temp_f+"ºC")

        temperature.appendChild(temperatureText);

        let pressure=document.createElement('div')
        pressure.nameClass="temperature";
        let pressureText=document.createTextNode("AtmPress: "+data.pressure_mb+" mb")
        pressure.appendChild(pressureText);

        let condition=document.createElement('div')
        condition.nameClass="temperature";
        let conditionText=document.createTextNode("Condition: "+data.condition.text)
        condition.appendChild(conditionText);


        let latestUpdate=document.createElement('div')
        latestUpdate.nameClass="temperature";
        let latestUpdateText=document.createTextNode("Latest update: "+data.last_updated)
        latestUpdate.appendChild(latestUpdateText);

        content.appendChild(locationElement);
        content.appendChild(temperature);
        content.appendChild(pressure);
        content.appendChild(condition);
        content.appendChild(latestUpdate);

        let contentGeneral=document.getElementById('mainContent')
        if(localTemperature<0){
            contentGeneral.style.backgroundColor="white";
        }
        if(localTemperature>=0 && localTemperature<=25){
            contentGeneral.style.backgroundColor="rgb(0, 255, 234)";
        }
        if(localTemperature>25){
            contentGeneral.style.backgroundColor="red";
        }

        let contentImage=document.getElementById('imgPlace')
        contentImage.innerHTML=" ";
        let dataImage =await imageService.getImage(data.condition.text);
        console.log(JSON.stringify(dataImage));
        contentImage.src=(dataImage).data.images.original.url;
        contentImage.style.height="200px";
        contentImage.style.marginTop="20px";
        
    }

    return{
        upGradeValues
    }

}

module.exports={currentWeather};