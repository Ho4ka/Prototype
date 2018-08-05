function applyTemplates($, myDiagram) {
    myDiagram.nodeTemplate =
        $(
            go.Node,
            'Auto',
            new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'RoundedRectangle', {fill: 'white'},
                new go.Binding('fill', 'color')
            ),
            $(go.TextBlock, 'text', {
                    name: 'textBlock',
                    margin: 5,
                    text: "verticalAlignment: Center",
                    verticalAlignment: go.Spot.Center,
                    stroke: 'white',
                    background: 'black',
                    width: 100, height: 50,
                    textAlign: "center"
                },

                new go.Binding('text', 'text')
            )
        );

    myDiagram.linkTemplate =
        $(go.Link,
            $(go.Shape, {strokeWidth: 3},
                new go.Binding('stroke', 'color')
            ),
            $(go.Shape, {toArrow: 'Standard', stroke: null},
                new go.Binding('fill', 'color')
            )
        );


}