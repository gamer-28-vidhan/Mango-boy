class floor {

    constructor(x,y,width,height) {
    
    var opt = {
        isStatic:true
    }
    
    this.body = Bodies.rectangle(x,y,width,height,opt)
    this.width = width
    this.height = height
    
    World.add(world, this.body)
    
    
    
    }
    
    display(){
    
    var by = this.body.position
    
    rectMode(CENTER)
    fill ("black")
    rect (by.x, by.y, this.width, this.height)
    
    
    
    }
}