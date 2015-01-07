/*
 *  main.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */

//乱数発生器
var mt = new MersenneTwister(0);

//フォント読み込み検出
var fontLoadEnd = false;

//定数
//デバッグ
var DEBUG = false;
var MUTEKI = false;

//スクリーンサイズ
SC_W = 640;
SC_H = 640;

//レイヤー区分
LAYER_SYSTEM = 10;           //システム表示
LAYER_FOREGROUND = 9;       //フォアグラウンド
LAYER_EFFECT_UPPER = 8;     //エフェクト上位
LAYER_PLAYER = 8;           //プレイヤー
LAYER_OBJECT_UPPER = 6;     //オブジェクト上位
LAYER_BULLET = 5;           //弾    
LAYER_SHOT = 4;             //ショット
LAYER_OBJECT = 3;           //オブジェクト中間
LAYER_OBJECT_LOWER = 2;     //オブジェクト下位
LAYER_EFFECT_LOWER = 1;     //エフェクト下位
LAYER_BACKGROUND = 0;       //バックグラウンド

//敵タイプ定数
ENEMY_ITEM = 0;
ENEMY_SMALL = 0;
ENEMY_MIDDLE = 1;
ENEMY_LARGE = 2;
ENEMY_MBOSS = 3;
ENEMY_BOSS = 4;

//インスタンス
app = {};

//アプリケーションメイン
tm.main(function() {
    app = jsstg.Application("#world");
//    app.enableStats();
    app.run();
});
