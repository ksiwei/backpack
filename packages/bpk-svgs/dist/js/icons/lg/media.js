import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M20.5 8h-5.91l3.521-3.521a.867.867 0 0 0-1.225-1.225L12.141 8h-.916L6.479 3.254a.867.867 0 0 0-1.225 1.225L8.775 8H3.5C2.675 8 2 8.675 2 9.5v9c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5zM18 17.6c0 .221-.209.4-.467.4H4.467C4.209 18 4 17.821 4 17.6v-7.2c0-.221.209-.4.467-.4h13.067c.257 0 .466.179.466.4v7.2zm2.5-2.6h-1c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h1c.275 0 .5.225.5.5s-.225.5-.5.5zm-.5-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>;
  }

}