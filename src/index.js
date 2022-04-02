import LogicFlow from "@logicflow/core";
import { SelectionSelect, Group } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import SelectGroup from "./SelectGroup";
import RedNode from "./RedNode";

import data from "./data";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  background: {
    backgroundImage: "url(../asserts/img/grid.svg)",
    backgroundRepeat: "repeat"
  },
  keyboard: {
    enabled: true
  },
  stopMoveGraph: true,
  plugins: [SelectionSelect, Group]
});
lf.setDefaultEdgeType("bezier");
lf.register(SelectGroup);
lf.register(RedNode);

lf.render(data);

lf.on("selection:selected", (data) => {
  setTimeout(() => {
    const { nodes } = lf.getSelectElements();
    const { startPoint, endPoint } = lf.extension.selectionSelect;
    lf.clearSelectElements();
    if (nodes.some((node) => node.type === "ivrGroupNode")) {
      return;
    }
    // startPoint 和 endPoint 是dom坐标，需要转换成canvas坐标绘制
    const { transformModel } = lf.graphModel;
    const [x1, y1] = transformModel.HtmlPointToCanvasPoint([
      startPoint.x,
      startPoint.y
    ]);
    const [x2, y2] = transformModel.HtmlPointToCanvasPoint([
      endPoint.x,
      endPoint.y
    ]);
    const width = x2 - x1;
    const height = y2 - y1;
    if (width < 175 && height < 40) {
      // 分组节点太小容易丢失，而且没必要这么小，没法缩小。。。
      return;
    }
    lf.addNode({
      type: "select-group",
      x: x1 + width / 2,
      y: y1 + height / 2,
      width,
      height,
      children: nodes.map((item) => item.id)
    });
    // lf.closeSelectionSelect();
  });
});
