import * as d3 from 'd3';
import { graphviz, GraphvizOptions } from 'd3-graphviz';
import { useEffect, useState } from 'react';
import { useSteps, useDeck } from "@mdx-deck/components";

export function Graphviz(props) {
  // let count = 0;
  const id = "graphviz";
  const defaultOptions = {
    fit: true,
    zoom: false,
  };

  const deckState = useDeck();

  const [index, setIndex] = useState(-1)
  if (index == -1)
    setIndex(deckState.index);

  const step = useSteps(props.dot.length - 1);
  // console.log("step: ", step, " index: ", index, " deckState.index: ", deckState.index);
  const active = index == deckState.index;
  
  const renderGraph = () => {
    let g = graphviz('#' + id)
        .transition(() => {
          if (step == 0)
            return null;
          return d3.transition("main")
            .ease(d3.easeLinear)
            .duration(400);
        })
        .options(options())
        .renderDot(props.dot[step])
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
    // console.log("about to run: ", props.dot, " active: ", active);
    if (active)
      renderGraph();
  }, [step, props.dot]);

  return (
    <div id={id} />
  );
}
