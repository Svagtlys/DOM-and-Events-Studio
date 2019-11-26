window.addEventListener("load", function(){
    // When the "Take off" button is clicked, the following should happen: (id = "takeoff")
    //    A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
    //    The flight status (id = "flightStatus") should change to "Shuttle in flight."
    //    The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
    //    The shuttle height (id = "spaceShuttleHeight") should increase by 10,000 miles.

    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function(event){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
            document.getElementById("rocket").style.bottom = Number(document.getElementById("spaceShuttleHeight").innerHTML)/1000-250 + "px";
        }
    });

    // When the "Land" button is clicked, the following should happen: (id = "landing")
    //    A window alert should let the user know "The shuttle is landing. Landing gear engaged."
    //    The flight status (id = "flightStatus") should change to "The shuttle has landed."
    //    The background color (id = "shuttleBackground") of the shuttle flight screen should change from blue to green.
    //    The shuttle height (id = "spaceShuttleHeight") should go down to 0.
    
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        document.getElementById("rocket").style.bottom ="-250px";
    });

    // When the "Abort Mission" button is clicked, the following should happen: (id = "missionAbort")
    //    A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
    //    The flight status should change to "Mission aborted."
    //    The background color of the shuttle flight screen should change from blue to green.
    //    The shuttle height should go to 0.

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(){
        if(window.confirm("Confirm that you want to abort the mission.")){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            document.getElementById("rocket").style.bottom ="-250px";
        }
    });
    
    // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    //    The rocket image should move 10 px in the direction of the button that was clicked. (id = "rocket")
    //    If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    let left = 0;

    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function(){
        if(document.getElementById("spaceShuttleHeight").innerHTML < 260000){
            document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
            document.getElementById("rocket").style.bottom = Number(document.getElementById("spaceShuttleHeight").innerHTML)/1000-250 + "px";
        }
        event.stopPropagation();
    });
    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function(){
        if(document.getElementById("spaceShuttleHeight").innerHTML > 0){
            document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
            document.getElementById("rocket").style.bottom = Number(document.getElementById("spaceShuttleHeight").innerHTML)/1000-250 + "px";
        }
        event.stopPropagation();
    });
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function(){
        if(left > -100){
            left -= 10;
            document.getElementById("rocket").style.left = left + "px";
        }
        event.stopPropagation();
    });
    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function(){
        if(left < 100){
            left += 10;
            document.getElementById("rocket").style.left = left + "px";
        }
        event.stopPropagation();
    });

    
    // Keep the rocket from flying off of the background.
    // Return the rocket to its original position on the background when it has been landed or the mission was aborted.

});