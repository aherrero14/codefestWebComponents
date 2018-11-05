import { Component, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;
  @State() bloqueadoDesdeElHijo: boolean = false;

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return <div class="webcomponent"> 
      <p>Hello, World! I'm {this.format()}</p>
      <p style={{ display: this.bloqueadoDesdeElHijo ? 'inline' : 'none' }}>Input password has been blocked!</p>
      <br/>
      <my-child-component title-password-component="Password"></my-child-component>
    </div>;
  }

  @Listen('onClickEmitter')
  showMessage(event) {
    console.log(event.detail);
    this.bloqueadoDesdeElHijo = true;
  }  
}