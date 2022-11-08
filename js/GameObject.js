class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "./images/charactersImg/Knight2Walk.png",
    });
  }
  update() {

  }
  collision(item){
    return (
        this.x < item.x + item.width &&
        this.x + this.width > item.x &&
        this.y < item.y + item.height &&
        this.y + this.height > item.y
           )
    }
}

  class Enemy1 extends GameObject {
    constructor(config) {

      super(config);
      this.x = config.x || 0;
      this.y = config.y || 0;
      this.direction = config.direction || "down";
      this.sprite = new Sprite({
        gameObject: this,
        src: config.src || "./images/charactersImg/MonsterWalk.png",
    })
    
  }
  chase(){

    //topPossition = y
  }

  }
    

class walls {
  constructor(x,y,width,height) {
    this.x = x ;
    this.y = y ;
    this.width = width ;
    this.height = height ;

}
}