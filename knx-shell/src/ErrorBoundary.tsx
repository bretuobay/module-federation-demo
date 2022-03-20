import React from "react";
type ComponentState = { error: any };
export default class ErrorBoundary extends React.Component<{}, ComponentState> {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  componentDidCatch(error) {
    this.setState({ error: `${error.name}: ${error.message}` });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <h1>Could not load KONUX widget :(</h1>
          <p>{error}</p>
        </div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}
