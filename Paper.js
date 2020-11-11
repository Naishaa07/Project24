class Paper{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            


        }
        this.y=y
        this.x=x
        this.r=r
        this.body=Bodies.circle(x,y,r/2,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ();
        translate(pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER)
        
        fill (255,0,255)
        ellipse(0,0,this.r,this.r)
        pop ();
    }
}