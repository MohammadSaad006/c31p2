class Divider {
    constructor(x,y,radius) {
        var options= {
            isStatic:false
        }

        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        World.add(world,this.body)
    }
display(){
    var pos=this.body.position;
    push ()
    ellipseMode(CENTER);
    fill(255,255,255)
    ellipse(pos.x,pos.y,10,10)
    pop()
}
};