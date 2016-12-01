var input = "R4, R5, L5, L5, L3, R2, R1, R1, L5, R5, R2, L1, L3, L4, R3, L1, L1, R2, R3, R3, R1, L3, L5, R3, R1, L1, R1, R2, L1, L4, L5, R4, R2, L192, R5, L2, R53, R1, L5, R73, R5, L5, R186, L3, L2, R1, R3, L3, L3, R1, L4, L2, R3, L5, R4, R3, R1, L1, R5, R2, R1, R1, R1, R3, R2, L1, R5, R1, L5, R2, L2, L4, R3, L1, R4, L5, R4, R3, L5, L3, R4, R2, L5, L5, R2, R3, R5, R4, R2, R1, L1, L5, L2, L3, L4, L5, L4, L5, L1, R3, R4, R5, R3, L5, L4, L3, L1, L4, R2, R5, R5, R4, L2, L4, R3, R1, L2, R5, L5, R1, R1, L1, L5, L5, L2, L1, R5, R2, L4, L1, R4, R3, L3, R1, R5, L1, L4, R2, L3, R5, R3, R1, L3".split(', ');

var x = 0, y = 0,
    direction = "north",
    steps = 0;

function move(inputDirection){
    steps = parseInt(inputDirection.substring(1,inputDirection.length));

    if (inputDirection.substring(0,1) == "R") {
        switch(direction) {
            case "north": direction = "east"; break;
            case "east": direction = "south"; break;
            case "south": direction = "west"; break;
            case "west": direction = "north"; break;
        }
    } else if (inputDirection.substring(0,1) == "L") {
        switch(direction) {
            case "north": direction = "west"; break;
            case "west": direction = "south"; break;
            case "south": direction = "east"; break;
            case "east": direction = "north"; break;
        }
    }    

    switch(direction) {
        case "north": y += steps; break;
        case "east": x += steps; break;
        case "south": y -= steps; break;
        case "west": x -= steps; break;
    }
}

function start(){
    for (var i = 0;i < input.length; i++) 
        move(input[i]);
    
    var result = "Part 1 Result: " + (Math.abs(x) + Math.abs(y)) + " blocks";

    console.log(result);

    document.getElementById("results").innerHTML = "<h1>" + result + "</h1>";
}

start();