function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r}, ${g}, ${b}`;
    return color;

}




function createPost(){
  const rgb = randomColor();

   let refernce =  document.querySelector("#id1");


   let element = document.createElement("div");
   element.innerHTML= refernce.value;
   element.style.color=randomColor();

   
   let parentElemnt = document.querySelector("#container");
   parentElemnt.insertBefore(element, parentElemnt.children[2]);

   refernce.value="";
   
}
