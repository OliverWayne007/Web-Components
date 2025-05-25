import { html , css , LitElement } from 'lit'

// https://jsonplaceholder.typicode.com/users/1

export class UserDetails extends LitElement
{
    static properties = 
    {
        username: { type: String } , 
        email: { type: String }
    };

    static styles = css`
    p
    {
        margin: 19px;
        background-color: yellow;
        border: 2px solid red;
        color: black;

    }
    div
    {
        margin: 10px;
        padding: 10px;
        border: 2px solid blue;
    }
    `

    constructor()
    {
        super();
    }

    render()
    {
        return html`
        <div>
            <slot></slot>
            <p> <b> Username: ${this.username} </b> </p>
            <p> <b> Email: ${this.email} </b> </p>
        </div>
        `;
    }
}

window.customElements.define("user-details" , UserDetails);