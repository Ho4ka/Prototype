function init() {
    $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv");
    let nodeDataArray = [
        createNode('Alpha', {x: 200, y:200}),
        createNode('Beta', {x: 400, y:200}),
        createNode('Zeta', {x: 600, y:200})
    ];
    let linkDataArray = [
        createLink('Alpha', 'Beta'),
        createLink('Beta', 'Zeta')
    ];

    nodeDataArray.forEach( node => { myDiagram.model.addNodeData(node); });

    setTimeout(() => {
        myDiagram.model.addNodeData(createNode('QQQ', {x:800, y:200}));
    }, 1000)

    applyTemplates($, myDiagram);
}