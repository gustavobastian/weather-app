import { apiWeather,apiGif } from "./env";

import {weather} from './weatherService.js';
import {cityForm} from './cityForm.js';
import {headerList} from './header.js';

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

/*
let footer=document.createElement('div')
footer.className="footer";
footer.id="footer";
let myFooter=document.createElement('p')
myFooter.innerText="By Gustavo Bastian(2023)"
footer.appendChild(myFooter)
mainContent.appendChild(footer);
*/
document.body.appendChild(mainContent);

let localW=weather();
let localHeader=headerList();

async function  cityform(localW){
    let myCity=cityForm();
    myCity.createForm(localW);
}

cityform(localW);


