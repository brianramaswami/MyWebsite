// creating a pop-up for user
let rps = document.getElementById("rpsDiv");
rps.onclick = function(e){
    e.preventDefault();
    window.open ("https://brianramaswami.github.io/RPS-Multiplayer/","game1","menubar=1,resizable=1,width=400,height=825");
    console.log("window 1.");
    setTimeout(() => {
    window.open ("https://brianramaswami.github.io/RPS-Multiplayer/","game2","menubar=1,resizable=1,width=400,height=825,left=500"), 6000
    });
    console.log("window 2.")
}
