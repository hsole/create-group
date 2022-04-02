export default {
  nodes: [
    {
      id: "a1",
      type: "red-node",
      x: 100,
      y: 100,
      text: "hello"
    },
    {
      id: "a2",
      type: "red-node",
      x: 260,
      y: 100,
      text: "world"
    },
    {
      id: "c1",
      type: "red-node",
      x: 450,
      y: 100,
      text: "hello world",
      properties: {
        fill: "rgb(253, 208, 162)"
      }
    },
    {
      id: "c2",
      type: "red-node",
      x: 300,
      y: 240,
      text: "hello world",
      properties: {
        fill: "rgb(253, 208, 162)"
      }
    },
    {
      id: "d2",
      type: "red-node",
      x: 200,
      y: 340,
      text: "oh oh oh",
      properties: {
        fill: "rgb(226, 217, 110)"
      }
    },
    {
      id: "d4",
      type: "red-node",
      x: 400,
      y: 340,
      text: "keep on",
      properties: {
        fill: "rgb(226, 217, 110)"
      }
    },
    {
      id: "g4",
      type: "select-group",
      x: 300,
      y: 340,
      width: 500,
      height: 100,
      children: ["d2", "d4"],
      properties: {
        isFold: false
      }
    }
  ],
  edges: [
    {
      id: "e1",
      type: "bezier",
      sourceNodeId: "c2",
      targetNodeId: "d2"
    }
  ]
};
