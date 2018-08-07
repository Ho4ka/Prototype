function init() {
    $ = go.GraphObject.make;
    myDiagram = $(go.Diagram, "myDiagramDiv");
    // let nodeDataArray = [
    //     createNode('Block-1', {x: 200, y:200}),
    //     createNode('Block-2', {x: 400, y:200}),
    //     createNode('Block-3', {x: 600, y:200})
    // ];
    // let linkDataArray = [
    //     createLink('Block-1', 'Block-2'),
    //     createLink('Block-2', 'Block-3'),
    //     createLink('Block-3', 'Block-4')
    //
    // ];

    // nodeDataArray.forEach( node => { myDiagram.model.addNodeData(node); });
    // linkDataArray.forEach( link => { myDiagram.model.addLinkData(link) });

    applyTemplates($, myDiagram);


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let json = JSON.parse(this.responseText);
            let nodes = json.components;

            nodes.forEach((node) => {
                let nodeName = node.name;
                let location = node.position;

                myDiagram.model.addNodeData(createNode(nodeName, location));

            })

            // Can be reduce() ???  (note for my self)
            for (let i = 0; i < nodes.length; i++) {
                let from = nodes[i].name;
                let to = nodes[i + 1].name;
                myDiagram.model.addLinkData(createLink(from, to));
            }
        }
    };
    xmlhttp.open("GET", "https://api.myjson.com/bins/1e4w3s", true);
    xmlhttp.send();

    myDiagram.addDiagramListener("ChangedSelection", (event) => {
    });


}