import { deepClone } from "somewhere";

// used in the generated cesk-management advice functions (see ceskify.js)
// the cesk-advice updates the cesk state at each step
//  this function copies each state and transition into the history object

export const stepFactory = (history, ceskState, aran) => ({
  serial,
  args,
  advice
}) => {
  // debugger;

  const node = aran.nodes[serial];
  const src = Astring.generate(node);

  history.states[history.states.length - 1].after = {
    advice,
    src
  };
  const before = deepClone({
    i: history.states.length,
    before: {
      advice,
      src
    },
    ceskState,
    node
  });
  history.states.push(before);

  history.transitions[history.transitions.length - 1].after = before;
  const newTransition = deepClone({
    i: history.transitions.length,
    advice,
    line: {
      src: studentCode.split("\n")[node.loc.start.line - 1],
      num: node.loc.start.line
    },
    args,
    before,
    serial,
    node,
    src
  });
  history.transitions.push(newTransition);
};
