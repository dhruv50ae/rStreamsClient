import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client.init({
        clientId:
          "963151505353-0745rrpgg77hlak1b74usm5i5h1t75ud.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}
