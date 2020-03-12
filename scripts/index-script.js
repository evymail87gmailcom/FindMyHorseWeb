console.log("Hello world from web script")

function addHeader(){
    var header = document.createElement("h1");
    header.className = "header"; // assign name for css file
    var text = document.createTextNode("Welcome");
    header.appendChild(text);
    document.body.appendChild(header); // add header to body
}
 
addHeader(); 

function addMenu() {
    var menu = document.createElement("div");
    menu.className = "menu";
    document.body.appendChild(menu);

    //create menu button
    var menubutton = document.createElement("button");
    menubutton.className = "menubutton";
    menu.appendChild(menubutton);

    //div with links
    var dropDownContent = document.createElement("div");
    dropDownContent.className = "dropDownContent";
    menubutton.appendChild(dropDownContent);

    var links = [
        ["Home", "/horse-robot-web/index.html"],
        ["Sensors", "/horse-robot-web/sensors.html"],
        ["Circut", "/horse-robot-web/circut.html"],
        ["The process", "/horse-robot-web/process.html"]
    ];
    for (var i = 0; i < links.length; i++) {
        var list = document.createElement("li");                // create list item
        var link = document.createElement("a");                 // create link item
        link.href = links[i][1];                                // add link adress to menuItem links
        link.appendChild(document.createTextNode(links[i][0])); // create textnode inside link starting on place 0
        list.appendChild(link)                                  // add list in link
        dropDownContent.appendChild(list);
    }
}

addMenu();
//getDataFromNode();
getDataFromNodeTest();
function addMain(){
    var main = document.createElement("div");
    main.className = "main"; // assign name for css file
    var text = document.createTextNode("Main div");
    main.appendChild(text);
    document.body.appendChild(main); // add div to body
}

addMain();


function addFooter(){
    var footer = document.createElement("div");
    footer.className = "footer"; // assign name for css file
    var text = document.createTextNode("© 2020 EM PROJECTS");
    footer.appendChild(text);
    document.body.appendChild(footer); // add div to body
}

addFooter();

function addStats() {
    var stats = document.createElement("div");
    stats.className = "stats";
    document.body.appendChild(stats);
    var text = document.createTextNode("status");
    stats.appendChild(text);
}

function getDataFromNodeTest(testVar) {

    var blink = document.createTextNode(testVar);

    main.appendChild(blink);
}

function getDataFromNode(numberOfSteps,soundLevel,distanceToObject,gasValues) {
    addStats();
    var steps = document.createTextNode(numberOfSteps);
    var sound = document.createTextNode(soundLevel);
    var distance = document.createTextNode(distanceToObject);
    var gas = document.createTextNode(gasValues);
    stats.appendChild(steps, sound, distance, gas);
}
