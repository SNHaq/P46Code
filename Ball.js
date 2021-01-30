class Ball{
    constructor(x,y,radius){
        this.visibility = 255;
       var options = {
            isStatic: true,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        if(mousePressedOver(pinkball)){
            image(pinkballImg, 0, 0, this.radius, this.radius);
        }

        if(mousePressedOver(yellowball)){
            image(yellowballImg, 0, 0, this.radius, this.radius);
        }

        if(mousePressedOver(greenball)){
            image(greenballImg, 0, 0, this.radius, this.radius);
        }

        if(mousePressedOver(blueball)){
            image(blueballImg, 0, 0, this.radius, this.radius);
        }

        if(mousePressedOver(purpleball)){
            image(purpleballImg, 0, 0, this.radius, this.radius);
        }
        pop();
    }
}