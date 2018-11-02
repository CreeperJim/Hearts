cc.Class({
    extends: cc.Component,

    properties:{
        cardPrefab:{
          default:null,
          type:cc.Prefab
        }
    },

    onLoad(){

    },

    dealCards(event){
      var newCard=cc.instantiate(this.cardPrefab);
      this.node.addChild(newCard);
    }

});
