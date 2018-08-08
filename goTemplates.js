function applyTemplates($, myDiagram) {
    myDiagram.grid.visible = true;


    myDiagram.add(
        $(go.Part, "Vertical",
            $(go.TextBlock, { text: "a Text Block", width: 200, height:25, alignment: go.Spot.Left,background: "lightblue"}),
            $(go.TextBlock, { text: "a Text Block", width: 200, height:25, alignment: go.Spot.Left, background: "lightblue"}),
            $(go.TextBlock, { text: "a Text Block", width: 200, height:25, alignment: go.Spot.Left, background: "lightblue" }),
            $(go.TextBlock, { text: "a Text Block", width: 200, height:25, alignment: go.Spot.Left, background: "lightblue" })
        ));


    myDiagram.add(
        $(go.Part,
            $(go.Panel, "Table",
                { defaultAlignment: go.Spot.Left },
                $(go.RowColumnDefinition, { column: 0, width: 170 }),
                $(go.RowColumnDefinition, { column: 1, width: 15 }),
                $(go.Panel, "Auto",
                    { row: 0, column: 0, stretch: go.GraphObject.Horizontal  },
                    $(go.Shape, "Rectangle", { fill: "lightblue" }),
                    $(go.TextBlock, "Auto Panel")
                ),
                $(go.TextBlock,  { row: 0, column: 2 }),
                $(go.Panel, "Auto",
                    { row: 1, column: 0, stretch: go.GraphObject.Horizontal },
                    $(go.Shape, "Rectangle", { fill: "lightblue" }),
                    $(go.TextBlock, "Auto Panel")
                ),
                $(go.TextBlock,  { row: 1, column: 2 }),
                $(go.Panel, "Auto",
                    { row: 2, column: 0, stretch: go.GraphObject.Horizontal  },
                    $(go.Shape, "Rectangle", { fill: "lightblue" }),
                    $(go.TextBlock, "Auto Panel")
                ),
                $(go.TextBlock, { row: 2, column: 2 }),
                $(go.Panel, "Auto",
                    { row: 3, column: 0, stretch: go.GraphObject.Horizontal },
                    $(go.Shape, "Rectangle", { fill: "yellow" }),
                    $(go.TextBlock, "Auto Panel")
                ),
                $(go.TextBlock, { row: 3, column: 2 })
            )
        ));

    myDiagram.nodeTemplate =
        $(
            go.Node,
            'Auto',
            new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'Rectangle', {fill: '#222222'},
                new go.Binding('fill', 'color')
            ),
            $(go.TextBlock,  {
                    name: 'textBlock',
                    font: "bold 10pt serif",
                    margin: 5,
                    text: "verticalAlignment: Top",
                    verticalAlignment: go.Spot.Top,
                    stroke: '#222222',
                    background: '#F9FAFB',
                    width: 200, height: 80,
                    textAlign: "left",
                },
                new go.Binding('text', 'text')
            ),


        );

    myDiagram.linkTemplate =
        $(go.Link,
            $(go.Shape, {strokeWidth: 2},
                new go.Binding('stroke', 'color')
            ),
            $(go.Panel, "Auto",  // this whole Panel is a link label
                $(go.Shape, "Rectangle", { fill: "#F4F6F7", stroke: "gray" }),
                $(go.TextBlock,{
                        margin: 5,
                        font: "bold 10pt serif",
                        width: 130, height: 30,
                        verticalAlignment: go.Spot.Center,
                        textAlign: "center",
                        text: 'Output  \n  Input ' },
                    new go.Binding("text", "text"))
            ),
         
            $(go.Shape, {toArrow: 'RoundedTriangle', stroke: null},
                new go.Binding('fill', 'color')
            )
        );


}