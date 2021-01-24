import imgandtext1 from "./imgandtext";
import winesDisplay from "./winesSection"

import myName from './test';


const home = document.getElementById ("home");
home.addEventListener('click', ()=>{
  removeContent();  
  imgandtext1 ();
})
const wines = document.getElementById ("wines");
wines.addEventListener('click', ()=> {
	removeContent();
  winesDisplay ();
})
const contact = document.getElementById ("contact");
contact.addEventListener('click', () =>{

})
const history = document.getElementById ("history");
history.addEventListener ('click', () => {

})

function removeContent () {
const container = document.getElementById("content");
while (container.firstChild) {
container.removeChild(container.lastChild);
}
}


