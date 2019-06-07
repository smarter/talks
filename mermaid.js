import React from "react";
import ReactDOM from "react-dom";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  flowchart: {
    curve: "basis"
  }
});

const defaultConf = JSON.parse(JSON.stringify(mermaid.mermaidAPI.getConfig()));

export class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.initialize(defaultConf);
    if (this.props.params !== undefined)
      mermaid.initialize(this.props.params);
    mermaid.init();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}
