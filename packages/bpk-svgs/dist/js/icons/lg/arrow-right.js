import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M6 3.8v16.3c0 1.6 1.7 2.4 2.9 1.4l8.6-8.2c.8-.7.8-2 0-2.7L8.9 2.5C7.7 1.4 6 2.3 6 3.8z" /></svg>;
  }

}