const api = require("./env")



const imgService = function () {
    let Data="noData";
    const getImage = async function(word){
        
        const response = await fetch('https://api.giphy.com/v1/stickers/translate?api_key=jrrd2bk04YAL9YbBmxprv1p9dnNdRUhE&s='+word,
        { mode: 'cors' });        
        
        Data = await (response.json());
        return Data;
        
    }
    return{
        getImage
    }
}

module.exports={imgService}
