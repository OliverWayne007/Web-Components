import { LitElement, css, html } from 'lit'

import { UserDetails } from './components/user-details';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class UserCard extends LitElement 
{
  static properties = 
  {
    userData: { type: Object } , 
    clicked: { type: Boolean }
  };

  static styles = css`
    h1
    {
      margin: 20px;
      color: green;
    }
    button
    {
      border: 3px solid blue;
      background-color: red;
      font-weight: bold;
      font-size: 50px;
      padding: 10px;
      border-radius: 5px;
    }
  `;

  constructor()
  {
    super();
    this.clicked = false;
    this.userData = null;
  }

  connectedCallback()
  {
    super.connectedCallback();
    // this.getUserDetails();
  }

  async getUserDetails()
  {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
    const userData = await response.json();
    this.userData = userData;
  }

  onButtonClick()
  {
    this.clicked = true;
    this.getUserDetails();
  }
  
  render()
  {
    if( !this.clicked )
    {
      return html`
        <button @click = ${() => { this.onButtonClick() }}> Display User </button>
      `;
    }
    if( !this.userData )
    {
      return html`
      <h1> Loading..... </h1>
      `;
    }
    return html`
    <h1> User: ${this.userData.name} </h1>
    <div>
      <user-details username=${this.userData.username} email=${this.userData.email} >
        <h2> Details of ${this.userData.name}:  </h2>
      </user-details>
    </div>
    `;
  }
}

window.customElements.define('user-card', UserCard);