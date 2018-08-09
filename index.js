function init() {
    $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv", {
        grid: $(go.Panel, "Grid",
            { gridCellSize: new go.Size(14, 14) }, {
                background:"#fffeff"
            },
            $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
            $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 })
        )
    });

    applyTemplates($, myDiagram);
    callToJSON();




}