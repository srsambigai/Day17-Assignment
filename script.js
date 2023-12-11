
async function restElements(){
    try{
    var parentContainer=document.body.appendChild(document.createElement('div'));
    parentContainer.setAttribute("class","container");
    parentContainer.style.display="flex";
    parentContainer.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
    parentContainer.style.position= "absolute";
    parentContainer.style.top="50%";
    parentContainer.style.left="50%";
    parentContainer.style.transform="translate(-50%,-50%)";
    parentContainer.style.height="550px";
    parentContainer.style.width="700px";
    parentContainer.style.overflow="auto";
    
        let response = await fetch("https://restcountries.com/v3.1/all");
    let result = await response.json();
     result.forEach((countryinfo, index) => {
         var countryName=countryinfo.name.common;
         var countryCapital=countryinfo.capital;
         var countryRegion=countryinfo.region;
         var countryCode=countryinfo.flag; 
         var countryFlag=countryinfo.flags.svg;
         console.log(countryinfo.flags.svg);
        let countryContainer = parentContainer.appendChild(document.createElement("div"));
         countryContainer.setAttribute("class", "card");
         countryContainer.style.display="flex";
countryContainer.style.background="#837E7C";
//countryContainer.style.position= "absolute";
countryContainer.style.height="400px";
countryContainer.style.width="450px";
countryContainer.style.margin="50px";
countryContainer.style.padding="100px"
          var headerchild= countryContainer.appendChild(document.createElement("div"));
     headerchild.setAttribute("class","card-header");
     headerchild.style.background="Black";
     headerchild.style.position="absolute";
     headerchild.style.height="45px";
     headerchild.style.width="190px";
     headerchild.style.top="5px";
     headerchild.style.left="5px";
     headerchild.textContent=countryName;
     headerchild.style.fontSize="14px";
     headerchild.style.textAlign="center";
     headerchild.style.fontWeight="bold";
     headerchild.style.color="white";
     
     
     //vertical-align: top; padding: 0px 0px 0px 7px;
     var displaychild= countryContainer.appendChild(document.createElement("div"));
displaychild.setAttribute("class","card-body");
displaychild.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
displaychild.style.position="absolute";
displaychild.style.height="340px";
displaychild.style.width="190px";
displaychild.style.top="55px";
displaychild.style.left="5px";
var flagimage=displaychild.appendChild(document.createElement("img"));
flagimage.setAttribute("class","fimage");
flagimage.setAttribute("src",countryFlag);
flagimage.style.height="150px";
flagimage.style.width="160px";

var cap=displaychild.appendChild(document.createElement("label"));
cap.setAttribute("class","capital");
cap.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
cap.style.position="absolute";
cap.style.height="20px";
cap.style.width="80px";
cap.style.top="180px";
cap.textContent="Country Capital :";
cap.style.fontSize="10px";
cap.style.color="white";
var rescap=displaychild.appendChild(document.createElement("label"));
rescap.setAttribute("class","rescapital");
rescap.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
rescap.style.position="absolute";
rescap.style.height="20px";
rescap.style.width="90px";
rescap.style.top="180px";
rescap.style.left="90px";
rescap.textContent=countryCapital;
rescap.style.fontSize="10px";
rescap.style.color="white";

var reg=displaychild.appendChild(document.createElement("label"));
reg.setAttribute("class","region");
reg.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
reg.style.position="absolute";
reg.style.height="20px";
reg.style.width="80px";
reg.style.top="210px";
reg.textContent="Region: ";
reg.style.fontSize="10px";
reg.style.color="white";
var resreg=displaychild.appendChild(document.createElement("label"));
resreg.setAttribute("class","resregion");
resreg.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
resreg.style.position="absolute";
resreg.style.height="20px";
resreg.style.width="90px";
resreg.style.top="210px";
resreg.style.left="90px";
resreg.textContent=countryRegion;
resreg.style.fontSize="10px";
resreg.style.color="white";

var code=displaychild.appendChild(document.createElement("label"));
code.setAttribute("class","code");
code.setAttribute("value","Country Code :");
code.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
code.style.position="absolute";
code.style.height="20px";
code.style.width="80px";
code.style.top="240px";
code.textContent="Country Code :";
code.style.fontSize="10px";
code.style.color="white";
var rescode=displaychild.appendChild(document.createElement("label"));
rescode.setAttribute("class","code");
//code.setAttribute("value","Country Code :");
rescode.style.background="linear-gradient(90deg, #3A3B3C,#52595D)";
rescode.style.position="absolute";
rescode.style.height="20px";
rescode.style.width="90px";
rescode.style.top="240px";
rescode.style.left="90px";
rescode.textContent=countryCode;
rescode.style.fontSize="10px";
rescode.style.color="white";

var weatherButton=displaychild.appendChild(document.createElement("button"))
weatherButton.setAttribute("class","weather");
weatherButton.setAttribute("onClick","window.open('http://127.0.0.1:5500/restweather1.html?city="+countryCapital+"')");

weatherButton.style.position="absolute";
//weatherButton.style.content="Click for Weather";
weatherButton.style.height="30px";
weatherButton.style.width="100px";
weatherButton.style.top="300px";
weatherButton.style.left="40px";
weatherButton.textContent="Click for Weather";
weatherButton.style.fontSize="10px";
weatherButton.style.color="white";
weatherButton.style.background="Black";
 });
 }catch(error){
     console.log("Error while fetching api: ", error);
 }
  
}


restElements();


