const nodeColor = '#f5ef78';
const lineColor = '#61b3ed';

function createNode(key, location = { x:0, y: 0 }){
    return { key, text: key, color: nodeColor, location: `${location.x} ${location.y}` };
};

function createLink(from, to){
    return { to , from, color: lineColor}
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