class Food {
constructor(foodStock,lastFeed){
    var options = {
        isStatic: true
    }
   

this.body = Bodies.rectangle(310,400,50,50,options)
this.image = loadImage("images/Milk.png")
World.add(world, this.body)

}
display(){
fill("black")
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,50,50)
}
}