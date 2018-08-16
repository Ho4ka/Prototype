function applyTemplates($, myDiagram) {
    myDiagram.grid.visible = true;

    const row1Template = $(go.Panel, "Auto",
        {row: 0, column: 0, height: 110, width: 250},
        $(go.Shape, "Rectangle", {fill: "#B9C6CD", strokeWidth: 0}),
        $(go.TextBlock,
            {
                margin: 5,
                font: "bold 10pt sans-serif",
                stroke: "#111213",
                alignment: go.Spot.TopLeft,
                verticalAlignment: go.Spot.TopLeft
            },
            new go.Binding('text', 'text'))
    );

    // This is the actual HTML context menu:
    var cxElement = document.getElementById("contextMenu");
    // Since we have only one main element, we don't have to declare a hide method,
    // we can set mainElement and GoJS will hide it automatically
    var myContextMenu = $(go.HTMLInfo, {
        show: showContextMenu,
        mainElement: cxElement
    });

    myDiagram.contextMenu = myContextMenu;
    // We don't want the div acting as a context menu to have a (browser) context menu!
    cxElement.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        return false;
    }, false);

    function showContextMenu(obj, myDiagram, tool) {
        // Show only the relevant buttons given the current state.
        var cmd = myDiagram.commandHandler;
        document.getElementById("cut").style.display = cmd.canCutSelection() ? "block" : "none";
        document.getElementById("copy").style.display = cmd.canCopySelection() ? "block" : "none";
        document.getElementById("paste").style.display = cmd.canPasteSelection() ? "block" : "none";
        document.getElementById("delete").style.display = cmd.canDeleteSelection() ? "block" : "none";
        // Now show the whole context menu element
        cxElement.style.display = "block";
        // we don't bother overriding positionContextMenu, we just do it here:
        var mousePt = myDiagram.lastInput.viewPoint;
        cxElement.style.left = mousePt.x + "px";
        cxElement.style.top = mousePt.y + "px";
    }

    // This is the general menu command handler, parameterized by the name of the command.
    function cxcommand(event, val) {
        if (val === undefined) val = event.currentTarget.id;
        var diagram = myDiagram;
        switch (val) {
            case "cut":
                diagram.commandHandler.cutSelection();
                break;
            case "copy":
                diagram.commandHandler.copySelection();
                break;
            case "paste":
                diagram.commandHandler.pasteSelection(diagram.lastInput.documentPoint);
                break;
            case "delete":
                diagram.commandHandler.deleteSelection();
                break;
        }
        diagram.currentTool.stopTool();
    }

    myDiagram.nodeTemplate = $(go.Node, "Table",
        {contextMenu: myContextMenu},
        {isShadowed: true, shadowColor: "#828283", shadowOffset: new go.Point(1, 1)},

        new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
        row1Template,
    );

    myDiagram.linkTemplate =
        $(go.Link,  {contextMenu: myContextMenu},{isShadowed: true, shadowColor: "#828283", shadowOffset: new go.Point(1, 1)},
            $(go.Shape, {strokeWidth: 2},
                new go.Binding('stroke', 'color')
            ),
            $(go.Panel, "Table",
                $(go.Panel, "Auto",
                    {row: 0, column: 0, width: 170, height: 20, stretch: go.GraphObject.Horizontal},
                    $(go.Shape, "Rectangle", {fill: "#edeff0", strokeWidth: 0}),
                    $(go.TextBlock, {text: 'From: ', margin: 3, alignment: go.Spot.Left, font: "bold 9pt sans-serif"}),
                    $(go.TextBlock, {
                        margin: 3,
                        alignment: go.Spot.Center,
                        font: "bold 8pt sans-serif"
                    }, new go.Binding('text', 'text')),
                ),
                $(go.Panel, "Auto",
                    {row: 1, column: 0, height: 20, stretch: go.GraphObject.Horizontal},
                    $(go.Shape, "Rectangle", {fill: "#faf9fa", strokeWidth: 0}),
                    $(go.TextBlock, {text: 'To :', margin: 3, alignment: go.Spot.Left, font: "bold 9pt sans-serif"}),
                    $(go.TextBlock, {
                        margin: 3,
                        alignment: go.Spot.Center,
                        font: "bold 8pt sans-serif"
                    }, new go.Binding('text', 'textToPort'))
                )
            ),

            $(go.Shape, {toArrow: 'RoundedTriangle', stroke: null},
                new go.Binding('fill', 'color')
            )
        );


}