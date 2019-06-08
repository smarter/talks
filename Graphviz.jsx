import { graphviz, GraphvizOptions } from 'd3-graphviz';
import * as React from 'react';

export class Graphviz extends React.Component {
    constructor(props) {
        super(props);
        this.id = "graphviz" + Graphviz.count;
        Graphviz.count++;
    }

    render() {
        return (
            <div id={this.id} />
        );
    }

    componentDidMount() {
        this.renderGraph();
    }

    componentDidUpdate() {
        this.renderGraph();
    }

    renderGraph() {
        graphviz('#' + this.id)
            .options(this.options())
            .renderDot(this.props.dot);
    }

    options() {
        if (!this.props.options) {
            return Graphviz.defaultOptions
        }

        const options = Graphviz.defaultOptions;
        for(const option of Object.keys(this.props.options)) {
            options[option] = this.props.options[option];
        }

        return options;
    }
}
Dog.count = 0;
Dog.defaultOptions = {
  fit: true,
  height: 500,
  width: 500,
  zoom: false,
};

