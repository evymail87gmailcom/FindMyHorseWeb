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
//var testValue;


function addMain(){
   var main = document.createElement("div");
    main.className = "main"; // assign name for css file
    document.body.appendChild(main); // add div to body
    var text = document.createTextNode("status");
    main.appendChild(text);

    var dateTime = document.createElement("p");
    dateTime.id = "dateTime";
    main.appendChild(dateTime);
    var br = document.createElement("br");
    main.appendChild(br);
    var distance = document.createElement("p");
    distance.id = "distance";
    main.appendChild(distance);
    var steps = document.createElement("p");
    steps.id = "steps";
    main.appendChild(steps);
    var sound = document.createElement("p");
    sound.id = "sound";
    main.appendChild(sound);
    var horsePower = document.createElement("p");
    horsePower.id = "horsePower";
    main.appendChild(horsePower);
    var gas = document.createElement("p");
    gas.id = "gas";
    main.appendChild(gas);


}
addMain();
function getDataFromNodeTest(tests) {
    

    document.getElementById("status").innerHTML = tests;
   // main.appendChild(document.createTextNode(t));
}



function addFooter(){
    var footer = document.createElement("div");
    footer.className = "footer"; // assign name for css file
    var text = document.createTextNode("© 2020 EM PROJECTS");
    footer.appendChild(text);
    document.body.appendChild(footer); // add div to body
}

addFooter();





function getDataFromNode(dateTime,distance,steps,sound,horsePower,gas) {
    document.getElementById("dateTime").innerHTML = dateTime;
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("steps").innerHTML = steps;
    document.getElementById("sound").innerHTML = sound;
    document.getElementById("horsePower").innerHTML = horsePower;
    document.getElementById("gas").innerHTML = gas;
}
