class mangotree {

    constructor(x,y,width,height) {
    
    var opt = {
        isStatic:true
    }
    
    this.body = Bodies.rectangle(x,y,width,height,opt)
    this.width = width
    this.height = height
    this.image = loadImage("image1/tree.png")
    World.add(world, this.body)
    
    
    
    }
    
    display(){
    
    var ff = this.body.position
    
   
    
    imageMode(CENTER)
    image (this.image,1000, 360, 350, 500)
    
    
    }
}