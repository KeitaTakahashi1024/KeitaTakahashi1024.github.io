var option = {
  appid: "Maplat_test_core",
  enableHideMarker: true,   //マーカー非表示
  enableBorder: true,       //地図境界表示
  enableShare: true,        //共有
};

Maplat.createObject(option).then(function (app) {
  const viewpoint = {
    zoom: 3, //古地図倍率
  };
  const ratio = 20; //透明度

  window.setTimeout(function () {
    app.core.setViewpoint(viewpoint);
    app.core.setTransparency(ratio);
  }, 1);

  //ボタンで地図を切り替え
  document.getElementById("osm").addEventListener("click", function (e) {
    app.core.changeMap("osm");
  });
  document.getElementById("hakodate_1878").addEventListener("click", function (e) {
    app.core.changeMap("hakodate_1878");
  });
});
