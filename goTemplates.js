function applyTemplates($, myDiagram) {
    myDiagram.grid.visible = true;

    const row1Template = $(go.Panel, "Auto",
        {row: 0, column: 0, height: 110, width:250},
        $(go.Shape, "Rectangle", {fill:"#B9C6CD",strokeWidth: 0}),
        $(go.TextBlock,
            {
            margin:5 ,
            font: "bold 10pt sans-serif",
            stroke: "#111213",
            alignment: go.Spot.TopLeft,
             verticalAlignment: go.Spot.TopLeft
            },
            new go.Binding('text', 'text'))
    );

    //
    // const row2Template = $(go.Panel, "Auto",
    //     {row: 1, column: 0, stretch: go.GraphObject.Horizontal},
    //     $(go.Shape, "Rectangle", {fill: "#E4E8EB",strokeWidth: 0}),
    //     $(go.TextBlock,{margin:4,alignment: go.Spot.Left,font: "bold 8pt sans-serif"}),
    //
    // );
    //
    // const row3Template = $(go.Panel, "Auto",
    //     {row: 2, column: 0, stretch: go.GraphObject.Horizontal},
    //     $(go.Shape, "Rectangle", {fill: "#FFFFFF",strokeWidth: 0}),
    //     $(go.TextBlock,{margin:4,alignment: go.Spot.Left,font: "bold 8pt sans-serif"})
    // );
    //
    // const row4Template = $(go.Panel, "Auto",
    //     {row: 3, column: 0, stretch: go.GraphObject.Horizontal},
    //     $(go.Shape, "Rectangle", {fill: "#E4E8EB",strokeWidth: 0}),
    //     $(go.TextBlock,{margin:3,alignment: go.Spot.Left,font: "bold 8pt sans-serif"})
    // );
    //
    // const row5Template = $(go.Panel, "Auto",
    //     {row: 4, column: 0, stretch: go.GraphObject.Horizontal},
    //     $(go.Shape, "Rectangle", {fill: "#FFFFFF",strokeWidth: 0}),
    //     $(go.TextBlock,{margin:3,alignment: go.Spot.Left,font: "bold 8pt sans-serif", margin:9})
    // );
    //

    myDiagram.nodeTemplate = $(go.Node, "Table",
        { isShadowed: true,shadowColor: "#828283",shadowOffset: new go.Point(1,1)},


        new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
        // $(go.RowColumnDefinition, {column: 0, width: 250}),
        row1Template,
        // row2Template,
        // row3Template,
        // row4Template,
        // row5Template
    );


    myDiagram.linkTemplate =
        $(go.Link,{isShadowed: true,shadowColor: "#828283",shadowOffset: new go.Point(1,1)},
            $(go.Shape, {strokeWidth: 2},
                new go.Binding('stroke', 'color')
            ),
            $(go.Panel, "Table",
                $(go.Panel, "Auto",
                    {row: 0, column: 0, width:170, height: 20, stretch: go.GraphObject.Horizontal},
                    $(go.Shape, "Rectangle", {fill: "#edeff0",strokeWidth: 0}),
                    $(go.TextBlock, "From :",{margin:3,alignment: go.Spot.Left,font: "bold 8pt sans-serif"}, new go.Binding('text', 'text')),
                    $(go.Picture, { source: "triangle3.jpg",
                        width: 15, height: 15, margin: 4,alignment: go.Spot.Right},
                    ),
                ),
                $(go.Panel, "Auto",
                    {row: 1, column: 0, height: 20, stretch: go.GraphObject.Horizontal},
                    $(go.Shape, "Rectangle", {fill: "#faf9fa",strokeWidth: 0}),
                    $(go.TextBlock, "To :",{margin:3,alignment: go.Spot.Left,font: "bold 8pt sans-serif"}, new go.Binding('text', 'text')),
                    $(go.Picture, { source: "triangle3.jpg",
                        width: 15, height: 15, margin: 4,alignment: go.Spot.Right },
                    ),
                )
                ),

            $(go.Shape, {toArrow: 'RoundedTriangle', stroke: null},
                new go.Binding('fill', 'color')
            )
        );


}