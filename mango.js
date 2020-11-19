class fruit {

    constructor(x,y,r) {
    
    var opto = {
        isStatic:true,
        restitution:0.2,
        friction:1,
        density:1.2

    }

    this.r=r
    
    this.body = Bodies.circle(x,y,this.r,opto)
    
    this.image = loadImage("image1/mango.png")
    World.add(world, this.body)
    
    
    
    }
    
    display(){
    
    var by = this.body.position
    
    
    
    imageMode(CENTER)
    image (this.image,by.x, by.y, 40, 40)

    
    }
}