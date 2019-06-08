import * as d3 from 'd3';
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
        this.renderGraph(0);
    }

    // componentDidUpdate() {
    //     this.renderGraph(1);
    // }

  renderGraph(i) {
    let g = graphviz('#' + this.id)
        .transition(() => {
          if (i == 0)
            return null;
          return d3.transition("main")
            .ease(d3.easeLinear)
            .delay(500)
            .duration(200);
        })
        .options(this.options())
        .renderDot(this.props.dot[i])
        .on("end", () => {
          console.log("endd");
          if (i == 0)
            this.renderGraph(1);
        });
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
Graphviz.count = 0;
Graphviz.defaultOptions = {
  fit: true,
  height: 500,
  width: 500,
  zoom: false,
};
