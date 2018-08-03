
function applyTemplates($, myDiagram){
    myDiagram.nodeTemplate =
        $(
            go.Node,
            'Auto',
            new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'RoundedRectangle', { fill: 'white' },
                new go.Binding('fill', 'color')
            ),
            $(go.TextBlock, 'text', { margin: 10 },
                new go.Binding('text', 'key')
            )
        );

    myDiagram.linkTemplate =
        $(go.Link,
            $(go.Shape, { strokeWidth: 3 },
                new go.Binding('stroke', 'color')
            ),
            $(go.Shape, { toArrow: 'Standard', stroke: null},
                new go.Binding('fill', 'color')
            )
        );
}