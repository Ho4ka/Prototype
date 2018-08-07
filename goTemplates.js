function applyTemplates($, myDiagram) {
    myDiagram.grid.visible = true;
    myDiagram.nodeTemplate =
        $(
            go.Node,
            'Auto',
            new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'Rectangle', {fill: '#222222'},
                new go.Binding('fill', 'color')
            ),
            $(go.TextBlock, 'text',"A Title", { font: "bold 24pt sans-serif", stroke: "green" }, {
                    name: 'textBlock',
                    font: "bold 14pt serif",
                    margin: 7,
                    text: "verticalAlignment: Center",
                    verticalAlignment: go.Spot.Center,
                    stroke: '#222222',
                    background: '#F9FAFB',
                    width: 150, height: 80,
                    textAlign: "center",

                },

                new go.Binding('text', 'text')
            )
        );

    myDiagram.linkTemplate =
        $(go.Link,
            $(go.Shape, {strokeWidth: 2},
                new go.Binding('stroke', 'color')
            ),
            $(go.Panel, "Auto",  // this whole Panel is a link label
                $(go.Shape, "Rectangle", { fill: "#E4E8EB", stroke: "gray" }),
                $(go.TextBlock,{
                        margin: 13,
                        width: 80, height: 30,
                        verticalAlignment: go.Spot.Center,
                        textAlign: "center",
                        text: 'Output  \n  Input ' },
                    new go.Binding("text", "text"))
            ),
            $(go.TextBlock, "output",
                { segmentIndex: 0,
                    font: "bold 12pt serif",segmentOffset: new go.Point(NaN, NaN),
                    segmentOrientation: go.Link.OrientUpright }),
            $(go.TextBlock, "input",
                { segmentIndex: -1, font: "bold 12pt serif", segmentOffset: new go.Point(NaN, NaN),
                    segmentOrientation: go.Link.OrientUpright }),
            $(go.Shape, {toArrow: 'RoundedTriangle', stroke: null},
                new go.Binding('fill', 'color')
            ),
            $(go.Shape,   // the "from" end arrowhead
                { fromArrow: "Chevron" })
        );


}