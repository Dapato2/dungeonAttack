class Sprite {
  constructor(config) {

    //Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    }

  

    //Configure Animation & Initial State
    this.animations = config.animations || {
      "idle-down" : [ [0,0] ],
      "idle-right": [ [0,1] ],
      "idle-up"   : [ [0,3] ],
      "idle-left" : [ [0,3] ],
      "walk-down" : [ [0,0],[1,0],[0,1],[1,1], ],
      "walk-right": [ [0,0],[1,0],[0,1],[1,1], ],
      "walk-up"   : [ [0,2],[1,2],[0,3],[1,3], ],
      "walk-left" : [ [0,0],[1,0],[0,1],[1,1], ]
    }
    this.currentAnimation = "idle-right"; // config.currentAnimation || "idle-down";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 8;
    this.animationFrameProgress = this.animationFrameLimit;
    

    //Reference the game object
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame]
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    //Downtick frame progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    //Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0
    }


  }
  

  draw(ctx, cameraPerson) {
    const x = this.gameObject.x - 8 + utils.withGrid(27.5) - cameraPerson.x;
    const y = this.gameObject.y - 18 + utils.withGrid(22.5) - cameraPerson.y;



    const [frameX, frameY] = this.frame;

    this.isLoaded && ctx.drawImage(this.image,
      frameX * 200, frameY * 250,
      200,250,
      x,y,
      45,45
    )

    this.updateAnimationProgress();
  }

}