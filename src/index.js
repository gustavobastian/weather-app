import { apiWeather,apiGif } from "./env";

import {weather} from './weatherService.js';
import {cityForm} from './cityForm.js';

import './style.css'; 


let mainContent=document.createElement('div')
mainContent.id="mainContent"
mainContent.className="mainContent";

let headerPlace=document.createElement('div');
headerPlace.id=headerPlace;
mainContent.appendChild(headerPlace);

let innerPlace=document.createElement('div');
innerPlace.id="innerPlace";
mainContent.appendChild(innerPlace);

let myTitle2=document.createElement('p')


myTitle2.innerText="apiWe: "

let myTitle3=document.createElement('p')
myTitle3.innerText="ApiGif: "+apiGif

mainContent.appendChild(myTitle2)
mainContent.appendChild(myTitle3)

let footer=document.createElement('div')
footer.className="footer";
footer.id="footer";
let myFooter=document.createElement('p')
myFooter.innerText="By Gustavo Bastian(2023)"
footer.appendChild(myFooter)
mainContent.appendChild(footer);
document.body.appendChild(mainContent);

async function  myfunction(){
    let localW=weather();
    let localdata=await(localW.getData("santo tome, santa fe, argentina"));
    console.log(localdata);
};

async function  cityform(){
    let myCity=cityForm();
    myCity.createForm();
}

myfunction();

cityform();


