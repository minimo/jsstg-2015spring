/*
 *  player.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("jsstg.Player", {
    superClass: "tm.app.Object2D",
    layer: LAYER_OBJECT,

    width: 2,
    height: 2,

    control: true,  //操作可能フラグ
    shotON: true,   //ショットフラグ
    mouseON: false, //マウス操作中フラグ
    shieldON: false,//シールド有効フラグ

    isCollision: false, //当り判定有効フラグ
    isDemo: false,      //デモンストレーションフラグ

    timeMuteki: 0, //無敵フレーム残り時間

    speed: 7,       //移動速度
    type: 0,        //自機タイプ

    power: 0,           //パワーチャージ
    powerMax: 120,      //パワーチャージ最大
    level: 0,           //ショットレベル
    levelMax: 5,        //ショットレベル
    shotPower: 1,       //ショット威力
    shotLimit: 0,       //ショットレベル上限
    shotInterval: 10,   //ショット間隔

    parentScene: null,

    init: function() {
        this.superInit();

        this.sprite = tm.display.Sprite("player")
            .addChildTo(this);

        //当り判定設定
        this.boundingType = "circle";
        this.radius = 2;
        this.checkHierarchy = true;

        this.time = 0;
        return this;
    },
    update: function() {
    },
    //死亡演出
    damage: function() {
    },
    //ショット
    enterShot: function() {
    },
    //プレイヤー投入時演出
    startup: function() {
    },
});


})();