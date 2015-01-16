/*
 *  EnemyData.js
 *  2015/01/09
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {
jsstg.enemyData = [];

//雑魚
tm.define("jsstg.enemyData.zako", {
    superClass: "jsstg.Enemy",

    //使用弾幕パターン
    bulletPattern: "cube1",

    //当り判定サイズ
    width:  16,
    height: 16,

    //耐久力
    def: 3,

    //得点
    point: 300,

    //表示レイヤー番号
    layer: LAYER_OBJECT,

    //敵タイプ
    type: ENEMY_SMALL,

    setup: function() {
        var colorparam = {
            strokeStyle:"hsla(100, 50%, 70%, 1.0)",
            fillStyle:  "hsla(100, 50%, 50%, 0.3)",
            lineWidth: 1,
        };
        tm.display.Shape(16, 40).addChildTo(this).renderRectangle(colorparam);

        this.tweener.moveBy(0, 300, 1000, "easeOutQuart").wait(1000).moveBy(0, -300, 3000).call(function(){this.remove();}.bind(this));
    },

    algorithm: function() {
        //自機の方向を向く
        var ax = this.x - this.player.x;
        var ay = this.y - this.player.y;
        var rad = Math.atan2(ay, ax);
        var deg = ~~(rad * toDeg);
        this.rotation = deg + 90;
    },
});
jsstg.enemyData["zako"] = jsstg.enemyData.zako;


})();
