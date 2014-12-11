/*
 *  jsstg-2015spring
 *  2014/12/11
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

jsstg = {
    core: null,
};

jsstg.Application = tm.createClass({
    superClass: tm.app.CanvasApp,

    score: 0,
    highScore: 0,       //ハイスコア
    highScoreStage: 0,  //ハイスコア時ステージ
    difficulty: 0,      //難易度(0-3)

    mainScene: null,

    highScore: 0,
    score: 0,
    extendNumber: 0,
    extendScore: null,

    bgm: null,
    bgmIsPlay: false,
    volumeBGM: 1.0,
    volumeSE: 1.0,

    init: function(id) {
        this.superInit(id);

        this.extendScore = [];
        this.extendScore.push(1000000);
        this.extendScore.push(2000000);
        this.extendScore.push(2500000);

        jsstg.core = this;
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = 60;
        this.background = "rgba(0, 0, 0, 1.0)";

        this.keyboard = tm.input.Keyboard(window);

        var loadingScene = tm.ui.LoadingScene({
            assets: tds.assets,
            width: SC_W,
            height: SC_H,
            bgColor: "black",
            nextScene: function() {
                this._onLoadAssets();
                return tds.WaitScene();
            }.bind(this),
        });

        //弾セットアップ
        jsstg.setupBullets();

        this.replaceScene(loadingScene);
    },

    _onLoadAssets: function() {
    },

    exitApp: function() {
        this.stop();
        tm.social.Nineleap.postRanking(this.highScore, "");
    },
});

})();