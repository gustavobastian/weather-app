import { apiWeather } from "./env";
import { apiGif } from "./env";

import './style.css'; 


let mainContent=document.createElement('div')
mainContent.id="mainContent"
mainContent.className="mainContent";

let myTitle2=document.createElement('p')
myTitle2.innerText="apiWe: "+apiWeather

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





