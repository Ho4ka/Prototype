
const nodeColor = '#A6B1B8';
const lineColor = '#222222';


function createNode(key, location = { x:0, y: 0 }){
    return { key, text: key, color: nodeColor, location: `${location.x} ${location.y}` };
};

function createLink(from, to, port, toPort){
    return { from , to, text: port, textToPort: toPort, color: lineColor }
};

function addNode() {
    let name = document.getElementById('nodeName').value;
    let location = document.getElementById('nodeLocation').value;
    location = location.split(' ');
    location = {x:location[0], y: location[1]};
    myDiagram.model.addNodeData(createNode(name, location));
}

function addLink() {
    let from = document.getElementById('firstBlock').value
    let to = document.getElementById('secondBlock').value
    myDiagram.model.addLinkData(createLink(from, to));

}

function createNodeOnDblClk(e) {
    let location = {x: e.clientX, y: e.clientY};
    myDiagram.model.addNodeData(createNode("node ", location));
}

function renameNode(nodeKey, newName){
    myDiagram.startTransaction("rename node");

    const node = myDiagram.findNodeForKey(nodeKey);
    node.findObject('textBlock').text = newName;

    myDiagram.commitTransaction("rename node");
}

function rename() {
    let name = document.getElementById('renameNode').value;
    let selectedCollection = myDiagram.selection;
    let it = selectedCollection.iterator;
    while (it.next()) {
        let node = it.value;
        renameNode(node.key ,name);
    }
}

function callToJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let json = JSON.parse(this.responseText);
            let nodes = json.components;
            let connections = json.connections;

            nodes.forEach((node) => {
                let nodeName = node.name;
                let location = node.position;
                myDiagram.model.addNodeData(createNode(nodeName, location));

            })

            connections.forEach((connect) => {
                let from = connect.source.componentId;
                let to = connect.target.componentId;
                let port = connect.source.port;
                let toPort = connect.target.port;

                nodes.forEach((node)=> {
                     if (from === node.id) {
                         from = node.name;
                     } else if (to === node.id) {
                         to = node.name;
                     }
                })

                myDiagram.model.addLinkData(createLink(from, to, port, toPort));

            })
        }
    };
    xmlhttp.open("GET", "https://api.myjson.com/bins/qgf50", true);
    xmlhttp.send();
}