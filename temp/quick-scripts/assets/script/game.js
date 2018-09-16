(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b5d9cIB+gZHBodvAGHrakXZ', 'game', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=game.js.map
        