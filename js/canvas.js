function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.font = '48px serif';
    ctx.fillText('Hello world', 10, 50);

    var background = new Image();

    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
        ctx.drawImage(background,0,0);   
    }​

    background.src = '~/img/IMG_0692.JPG';


}