const registerEmployee = () => {

 let usernameRef = document.querySelector("#username");
 let passwordRef = document.querySelector("#password");
 let emailRef = document.querySelector("#email");
 let mobileRef = document.querySelector("#mobile");

 const templString = 
     `<div id ="parent">
      <span class="m-2">${usernameRef.value}</span>
      <span class="m-2">${passwordRef.value}</span>
      <span class="m-2">${emailRef.value}</span>
      <span class="m-2">${mobileRef.value}</span>
      <span style="margin: 16px; cursor: pointer;">&#10060;</span>
   </div>`;

   let DynamicEl = document.createElement("template");
   DynamicEl.innerHTML = templString;

   let parentEl = document.querySelector("#parent");
   parentEl.insertBefore(DynamicEl.content, parent.firstChild);

   const formRef = document.querySelector("#form");
    formRef.reset();

}