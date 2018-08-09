function applyTemplates($, myDiagram) {
    myDiagram.grid.visible = true;

    const row1Template = $(go.Panel, "Auto",
        {row: 0, column: 0, height: 40, stretch: go.GraphObject.Horizontal},
        $(go.Shape, "Rectangle", {fill: "lightblue"}),
        $(go.TextBlock, "Auto Panel", new go.Binding('text', 'text'))
    );

    const row2Template = $(go.Panel, "Auto",
        {row: 1, column: 0, stretch: go.GraphObject.Horizontal},
        $(go.Shape, "Rectangle", {fill: "lightblue"}),
        $(go.TextBlock, "Auto Panel")
    );

    const row3Template = $(go.Panel, "Auto",
        {row: 2, column: 0, stretch: go.GraphObject.Horizontal},
        $(go.Shape, "Rectangle", {fill: "lightblue"}),
        $(go.TextBlock, "Auto Panel")
    );

    const row4Template = $(go.Panel, "Auto",
        {row: 3, column: 0, stretch: go.GraphObject.Horizontal},
        $(go.Shape, "Rectangle", {fill: "yellow"}),
        $(go.TextBlock, "Auto Panel")
    );


    myDiagram.nodeTemplate = $(go.Node, "Table",
        {defaultAlignment: go.Spot.Left, isShadowed: true},

        new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.RowColumnDefinition, {column: 0, width: 170}),
        row1Template,
        row2Template,
        row3Template,
        row4Template
    );


    myDiagram.linkTemplate =
        $(go.Link,
            { isShadowed: true },
            $(go.Shape, {strokeWidth: 2},
                new go.Binding('stroke', 'color')
            ),
            $(go.Panel, "Table",
                $(go.Panel, "Auto",
                    {row: 0, column: 0, height: 40, stretch: go.GraphObject.Horizontal},
                    $(go.Shape, "Rectangle", {fill: "lightblue"}),
                    $(go.TextBlock, "Auto Panel", new go.Binding('text', 'text'))
                ),
                $(go.Panel, "Auto",
                    {row: 1, column: 0, height: 40, stretch: go.GraphObject.Horizontal},
                    $(go.Shape, "Rectangle", {fill: "lightblue"}),
                    $(go.TextBlock, "Auto Panel", new go.Binding('text', 'text'))
                )
                ),



            // $(go.Panel, "Auto",  // this whole Panel is a link label
            //     $(go.Shape, "Rectangle", {fill: "#F4F6F7", stroke: "gray"}),
            //     $(go.TextBlock, {
            //             margin: 5,
            //             font: "bold 10pt serif",
            //             width: 130, height: 30,
            //             verticalAlignment: go.Spot.Center,
            //             textAlign: "center",
            //             text: 'Output  \n  Input '
            //         },
            //         new go.Binding("text", "text"))
            // ),

            $(go.Shape, {toArrow: 'RoundedTriangle', stroke: null},
                new go.Binding('fill', 'color')
            )
        );


}