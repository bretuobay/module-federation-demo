import React from "react";
type ComponentState = { error: any };
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" } as ComponentState;
  }

  componentDidCatch(error) {
    this.setState({ error: `${error.name}: ${error.message}` });
  }

  render() {
    const { error } = this.state as ComponentState;
    if (error) {
      return <div>{error}</div>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}
