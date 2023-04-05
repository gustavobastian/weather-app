const cityForm= function(){

    function createForm(){
        console.log("here");
        let content=document.getElementById("innerPlace")
        
        let contentForm=document.createElement('div')
        contentForm.className="contentForm";


        let localCity = document.createElement('div')
        localCity.className="cityClass";
        let cityText= document.createElement('p');
        cityText.textContent="city";
        localCity.appendChild(cityText);

        let localState = document.createElement('div')
        localState.className="cityClass";
        let stateText= document.createElement('p');
        stateText.textContent="state";
        localState.appendChild(stateText);

        let localCountry =document.createElement('div');
        localCountry.className="cityClass";
        let countryText= document.createElement('p');
        countryText.textContent="country";
        localCountry.appendChild(countryText);

        contentForm.appendChild(localCity)
        contentForm.appendChild(localState)
        contentForm.appendChild(localCountry)
        content.appendChild(contentForm)
    }   
    
    return {
        createForm
    }
}

module.exports={cityForm};