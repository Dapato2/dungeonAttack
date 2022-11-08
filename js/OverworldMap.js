class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage, 
      utils.withGrid(0) - cameraPerson.x, 
      utils.withGrid(0) - cameraPerson.y
      )
  }


}
  
  
  
  window.OverworldMaps = {
    dungeon: {
      lowerSrc: "./images/dungeonBackground.png",
      gameObjects: {
        hero: new Person({
          isPlayerControlled: true,
          x: utils.withGrid(0),
          y: utils.withGrid(0),
        }),
          monster: new Enemy1({
            isPlayerControlled: true,
          x: utils.withGrid(0),
          y: utils.withGrid(-18),
          playerHero: this.hero,
          src: "./images/charactersImg/Monster4Walk.png"
        }),

      }
    
      }
    }
    