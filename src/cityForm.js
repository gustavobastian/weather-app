const api = require("./env")
const weather = require("./weatherService.js")

const cityForm= function(update){
    let city=" ";
    let state=" ";
    let country=" ";
    let localdata;
    let localUpdate=update;

    function createForm(localW){                
        
        let content=document.getElementById("innerPlace")
        
        let contentForm=document.createElement('div')
        contentForm.className="contentForm";


        let localCity = document.createElement('div')
        localCity.className="cityClass";
        let cityText= document.createElement('p');
        cityText.textContent="City:";
        localCity.appendChild(cityText);

        let localState = document.createElement('div')
        localState.className="cityClass";
        let stateText= document.createElement('p');
        stateText.textContent="State:";
        localState.appendChild(stateText);

        let localCountry =document.createElement('div');
        localCountry.className="cityClass";
        let countryText= document.createElement('p');
        countryText.textContent="Country:";
        localCountry.appendChild(countryText);

        let sendButton =document.createElement('button');
        sendButton.className="sendButton";
        sendButton.id="sendButton";
        sendButton.innerText="SEND";


        let localCityInput = document.createElement('input')
        localCityInput.className="cityClass";
        localCityInput.type="text";
        localCityInput.id="localCityInput";
 

        let localStateInput = document.createElement('input')
        localStateInput.className="cityClass";
        localStateInput.type="text";
        localStateInput.id="localStateInput";
        
        let localCountryInput =document.createElement('input');
        localCountryInput.className="cityClass";
        localCountryInput.type="text";
        localCountryInput.id="localCountryInput";


        contentForm.appendChild(localCity)
        contentForm.appendChild(localState)
        contentForm.appendChild(localCountry)
        contentForm.appendChild(sendButton)
        contentForm.appendChild(localCityInput)
        contentForm.appendChild(localStateInput)
        contentForm.appendChild(localCountryInput)

        content.appendChild(contentForm)

        //adding event listeners

        let localSendButton = document.getElementById('sendButton');
        localSendButton.addEventListener("click", () => {
            (async () => {
                let location = city + "," + state + "," + country;
                if (city == null || city == " ") {
                    location = "london";
                }
                localdata = await (localW.getData(location));
                localUpdate.upGradeValues(localdata, 0, location)
            })();
        }
        )

        let localCityInputListener = document.getElementById('localCityInput');
        localCityInputListener.addEventListener("change",()=>{
            city=localCityInputListener.value;           
        })

        let localStateInputListener = document.getElementById('localStateInput');
        localStateInputListener.addEventListener("change",()=>{
                    state=localStateInputListener.value;            
        })

        let localCountryInputListener = document.getElementById('localCountryInput');
        localCountryInputListener.addEventListener("change",()=>{
            country=localCountryInputListener.value;            
        })

    }   
    
    return {
        createForm,
        localdata
    }
}

module.exports={cityForm};