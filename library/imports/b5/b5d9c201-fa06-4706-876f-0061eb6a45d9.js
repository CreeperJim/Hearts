"use strict";
cc._RF.push(module, 'b5d9cIB+gZHBodvAGHrakXZ', 'game');
// script/game.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        cardPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    onLoad: function onLoad() {},
    dealCards: function dealCards(event) {
        var newCard = cc.instantiate(this.cardPrefab);
        this.node.addChild(newCard);
    }
});

cc._RF.pop();