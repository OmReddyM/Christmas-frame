function preload() { }
function setup() {
    canvas = createCanvas(750, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 75, 75, 600, 340);
    fill("#00ff08");
    stroke("#00ff08");
    circle(50, 50, 100);
    circle(50, 450, 100);
    circle(700, 50, 100);
    circle(700, 450, 100);
    fill("#ff0000");
    stroke("#ff0000");
    rect(55, 55, 630, 30);
    rect(55, 410, 635, 30);
    rect(55, 55, 30, 370);
    rect(660, 55, 30, 370);
}
function takeSnapshot() {
    save("picturr.png");
}