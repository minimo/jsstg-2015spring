/*
 *  player.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("jsstg.Player", {
    superClass: "tm.app.Object2D",
    layer: LAYER_PLAYER,

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
            .addChildTo(this)
            .setScale(2.0);

        //当り判定設定
        this.boundingType = "circle";
        this.radius = 2;
        this.checkHierarchy = true;

        this.debug = tm.display.Label("").addChildTo(this).setPosition(0,-100);

        this.time = 0;
        return this;
    },
    update: function() {
        if (this.time % 10 == 0) {
            this.enterShot();
        }
        this.time++;
    },
    //指定座標の方角を取得
    lookDirection: function(x, y) {
        var ax = this.x - x;
        var ay = this.y - y;
        var rad = Math.atan2(ay, ax);
        var deg = ~~(rad * toDeg)-90;
        if (deg < 0) deg += 360;    //正の値になるように
        return deg;
    },
    //指定座標を向く
    look: function(x, y) {
        var r = this.lookDirection(x, y);
        var r2 = r-this.rotation;
        if (r2 > 180) r2 -= 360;
        if (r2 < -180) r2 += 360;
        this.rotation += r2/10;
        if (this.rotation < 0) this.rotation+=359;
        if (this.rotation > 359) this.rotation-=360;
        this.debug.text = ~~(this.rotation)+" : "+~~(r)+" : "+~~(r2);
    },
    //死亡演出
    damage: function() {
    },
    //ショット
    enterShot: function() {
        jsstg.ShotBullet(this.rotation, 5).addChildTo(this.parentScene).setPosition(this.x, this.y);
    },
    //プレイヤー投入時演出
    startup: function() {
    },
});

})();