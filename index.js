function init() {
    $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv");

    applyTemplates($, myDiagram);
    callToJSON();

    myDiagram.addDiagramListener("ChangedSelection", (event) => {
    });


}