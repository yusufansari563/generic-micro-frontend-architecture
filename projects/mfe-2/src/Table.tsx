import React, { useState, useEffect } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { NodeService } from "./service/NodeServices";

export default function Table() {
  const [nodes, setNodes] = useState([]);
  const columns = [
    { field: "name", header: "Name", expander: true },
    { field: "size", header: "Type" },
    { field: "type", header: "Size" },
  ];

  useEffect(() => {
    NodeService.getTreeTableNodes().then((data: any) => setNodes(data));
  }, []);

  return (
    <div className="card">
      <TreeTable value={nodes} tableStyle={{ minWidth: "50rem" }}>
        {columns.map((col, i) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            expander={col.expander}
          />
        ))}
      </TreeTable>
    </div>
  );
}
