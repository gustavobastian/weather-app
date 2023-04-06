import { apiWeather,apiGif } from "./env";

import {weather} from './weatherService.js';
import {cityForm} from './cityForm.js';
import {headerList} from './header.js';
import {currentWeather} from './currentWeather.js';
import {imgService} from './imgService';
import './style.css'; 


let mainContent=document.createElement('div')
mainContent.id="mainContent"
mainContent.className="mainContent";

let headerPlace=document.createElement('div');
headerPlace.id="headerPlace";
mainContent.appendChild(headerPlace);

let innerPlace=document.createElement('div');
innerPlace.id="innerPlace";
mainContent.appendChild(innerPlace);

let imgPlace=document.createElement('img');
imgPlace.id="imgPlace";
mainContent.appendChild(imgPlace);

let weatherPlace=document.createElement('div');
weatherPlace.id="weatherPlace";
mainContent.appendChild(weatherPlace);



document.body.appendChild(mainContent);

let localW=weather();
let localHeader=headerList();
let imageService=imgService();
let update=currentWeather(imageService);



async function intialCondition(){


    let myCity= cityForm(update);
    myCity.createForm(localW);
    let mode=0;//mode = 0 ºC

    let localdata = await(localW.getData(location));
    
    update.upGradeValues(localdata,mode,"london")

    let content=document.getElementById('imgPlace')
    content.innerHTML=" ";
    let dataImage =await imageService.getImage("hot");
    console.log(JSON.stringify(dataImage));
    content.src=(dataImage).data.images.original.url;
    content.style.height="200px";
    content.style.marginTop="20px";
    
    

}

intialCondition();
