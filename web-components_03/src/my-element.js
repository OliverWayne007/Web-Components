import { LitElement, css, html } from 'lit'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement 
{

  static styles = css`
  div
  {
    border: 2px solid red;
    padding: 10px;
    border-radius: 6px;
    margin: 5px;
  }

  header
  {
    border: 2px solid blue;
    margin: 10px;
    padding: 10px;
    border-radius: 6px;
  }

  section
  {
    border: 2px solid yellow;
    margin: 10px;
    padding: 10px;
    border-radius: 6px;
  }

  footer
  {
    border: 2px solid green;
    margin: 10px;
    padding: 10px;
    border-radius: 6px;
  }

  `;

  constructor() 
  {
    super();
  }

  render() 
  {
    return html`
    <div>
     <!-- This is where the user content goes -->
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot></slot>    
      </section>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
    `
  }

}

window.customElements.define('my-element', MyElement)
