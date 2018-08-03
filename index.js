function init() {
    $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv");
    let nodeDataArray = [
        createNode('Block-1', {x: 200, y:200}),
        createNode('Block-2', {x: 400, y:200}),
        createNode('Block-3', {x: 600, y:200})
    ];
    let linkDataArray = [
        createLink('Block-1', 'Block-2'),
        createLink('Block-2', 'Block-3'),
        createLink('Block-3', 'Block-4')

    ];

    nodeDataArray.forEach( node => { myDiagram.model.addNodeData(node); });
    linkDataArray.forEach( link => { myDiagram.model.addLinkData(link) });

    setTimeout(() => {
        myDiagram.model.addNodeData(createNode('Block-4', {x:800, y:200}));
    }, 1000)

    applyTemplates($, myDiagram);



}