import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M19.565 21H4.435c-.9 0-1.578-.817-1.409-1.699l.064-.334c.523-2.728 2.075-4.18 4.343-5.825l.962-.698A2.323 2.323 0 0 1 9.762 12h4.48c.489 0 .966.155 1.361.441l.965.7c2.268 1.645 3.82 3.097 4.343 5.825l.064.334c.168.883-.51 1.7-1.41 1.7zM12 3.007c-2.234 0-4.046 1.791-4.046 4s1.811 4 4.046 4 4.046-1.791 4.046-4-1.812-4-4.046-4z" /></svg>;
  }

}