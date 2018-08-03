const nodeColor = '#f5ef78';
const lineColor = '#61b3ed';

function createNode(key, location = { x:0, y: 0 }){
    return { key, color: nodeColor, location: `${location.x} ${location.y}` };
};

function createLink(from, to){
    return { to , from, color: lineColor}
};

