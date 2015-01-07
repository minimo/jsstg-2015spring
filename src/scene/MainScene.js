/*
 *  MainScene.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */
(function() {

tm.define("jsstg.MainScene", {
    superClass: tm.app.Scene,

    //マルチタッチ補助クラス
    touches: null,
    touchID: -1,

    //タッチ情報
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    beforeX: 0,
    beforeY: 0,

    //経過時間
    time: 0,
    absTime: 0,

    //敵投入数と撃破数
    enemyCount: 0,
    enemyKill: 0,

    init: function() {
        this.superInit();
        this.background = "rgba(0, 0, 0, 1.0)";

        //マルチタッチ初期化
        this.touches = tm.input.TouchesEx(this);

        this.mask = tm.display.Shape(SC_W, SC_H).addChildTo(this).setPosition(SC_W*0.5, SC_H*0.5);
        this.mask.renderRectangle({fillStyle: "rgba(0,0,0,1.0)", strokeStyle: "rgba(0,0,0,1.0)"});

        //レイヤー作成
        this.layers = [];
        for (var i = 0; i < LAYER_SYSTEM+1; i++) {
            this.layers[i] = tm.app.Object2D().addChildTo(this);
        }

        //プレイヤー
        this.player = jsstg.Player().addChildTo(this);
        this.player.stageStartup();
        app.player = this.player;

        //システム表示ベース
        this.systemBase = tm.app.Object2D().addChildTo(this).setPosition(0, 0);

        //スコア表示ラベル
        app.score = 0;
        var sc = this.scoreLabel = tm.display.OutlineLabel("SCORE:0", 30).addChildTo(this.systemBase);
        sc.fontFamily = "'Orbitron'"; sc.align = "left"; sc.baseline  = "top"; sc.fontWeight = 700; sc.outlineWidth = 2;
        sc.update = function() {
            this.text = "SCORE:"+app.score;
        };

        //ステージ初期化
        this.initStage();
    },

    update: function() {
    },

    //敵ユニット単位の投入
    enterEnemyUnit: function(name) {
    },

    //敵単体の投入
    enterEnemy: function(name, x, y, param) {
    },

    //弾の消去
    eraseBullet: function(target) {
    },

    //ステージ初期化
    initStage: function() {
    },

    //タッチorクリック開始処理
    ontouchesstart: function(e) {
        if (this.touchID > 0)return;
        this.touchID = e.ID;

        var sx = this.startX = e.pointing.x;
        var sy = this.startY = e.pointing.y;
        this.moveX = 0;
        this.moveY = 0;

        this.beforeX = sx;
        this.beforeY = sy;
    },

    //タッチorクリック移動処理
    ontouchesmove: function(e) {
        if (this.touchID != e.ID) return;

        var sx = e.pointing.x;
        var sy = e.pointing.y;
        var moveX = Math.abs(sx - this.beforeX);
        var moveY = Math.abs(sx - this.beforeY);

        if (this.time % 10 == 0) {
            this.beforeX = sx;
            this.beforeY = sy;
        }
    },

    //タッチorクリック終了処理
    ontouchesend: function(e) {
        if (this.touchID != e.ID) return;
        this.touchID = -1;

        var sx = e.pointing.x;
        var sy = e.pointing.y;
    },

    //addChildオーバーライド
    addChild: function(child) {
        if (child.layer === undefined) {
            return this.superClass.prototype.addChild.apply(this, arguments);
        }
        child.parentScene = this;
        child.player = this.player;
        return this.layers[child.layer].addChild(child);
    },
});

})();
