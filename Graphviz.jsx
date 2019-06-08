import * as d3 from 'd3';
import { graphviz, GraphvizOptions } from 'd3-graphviz';
import { useEffect } from 'react';
import { useSteps } from "mdx-deck";

export function Graphviz(props) {
  // let count = 0;
  const id = "graphviz";
  const defaultOptions = {
    fit: true,
    height: 500,
    width: 500,
    zoom: false,
  };
  // constructor(props) {
  //     super(props);
  //     id = "graphviz" + count;
  //     count++;
  // }
  const renderGraph = (i) => {
    // console.log("step", step);
    let g = graphviz('#' + id)
        .transition(() => {
          if (i == 0)
            return null;
          return d3.transition("main")
            .ease(d3.easeLinear)
            .delay(500)
            .duration(200);
        })
        .options(options())
        .renderDot(props.dot[i])
        .on("end", () => {
          console.log("endd");
          if (i == 0)
            renderGraph(1);
        });
  };

  const options = () => {
    if (!props.options) {
      return defaultOptions
    }

    const options = defaultOptions;
    for(const option of Object.keys(props.options)) {
      options[option] = props.options[option];
    }

    return options;
  };

  useEffect(() => {
    renderGraph(0);
  }, []);

  return (
    <div id={id} />
  );
}
