const nameOfClass = document.querySelector(".headingContainer").getAttribute("class");

console.log("nameOfClass: " , nameOfClass);

const description = document.querySelector(".headingContainer").getAttribute("description");

console.log("Description: " , description);

document.querySelector(".headingContainer-h1").innerText = `${description}`;


// ------------------------------------------------ CREATING A WEB COMPONENT -------------------------------------------------------

const template = document.createElement("template");

template.innerHTML = `
<style>
h2
{
    color: red;
}
h3
{
    color: darkViolet;
}
</style>

<div class = "user-card" > 
    <h3 class = "user-card-h3" > </h3>
</div>

`;

class UserCard extends HTMLElement
{
    constructor()
    {
        super();

        this.attachShadow( { mode: "open" } );

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // this.innerHTML = `
        // <style>
        //     h2
        //     {
        //         color: red;
        //     }
        //     h3
        //     {
        //         color: blue;
        //     }
        // </style>
        // <h3> My name is ${this.getAttribute("name")} </h3>
        // `;   

        this.shadowRoot.querySelector(".user-card-h3").innerText = `My name is : ${this.getAttribute("name")}`;
    }
}

customElements.define("user-card" , UserCard);