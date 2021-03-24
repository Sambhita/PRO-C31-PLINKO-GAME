class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
            //restitution: 1,
            //friction: 0
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x,y,10 ,options);
        this.image = loadImage("images/circle.png");
        World.add(world,this.body);

    }

display(){
var pos = this.body.position;
ellipseMode(RADIUS);
fill("white");
ellipse(pos.x, pos.y, this.r, this.r);
   }
}