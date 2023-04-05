const headerList= function(){
    let content=document.getElementById("headerPlace")        
    let contentHeader=document.createElement('div')
    contentHeader.className="headerContent";
    let textHeader=document.createElement('p')
    textHeader.innerText="The Weather app"
    contentHeader.appendChild(textHeader);
    content.appendChild(contentHeader);
    return content;
}

module.exports={headerList}
