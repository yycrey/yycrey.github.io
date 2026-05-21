// Live2D 看板娘（使用 L2Dwidget 直接加载，不依赖外部 JSON/API）
var s = document.createElement('script');
s.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
s.onload = function () {
  L2Dwidget.init({
    model: {
      jsonPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json'
    },
    display: {
      position: 'right',
      width: 200,
      height: 400,
      hOffset: -20,
      vOffset: -100
    },
    mobile: { show: true },
    react: { opacity: 0.7 }
  });

  // 额外 CSS 偏移：右对齐后再向左平移至中间偏右
  var checkExist = setInterval(function () {
    var el = document.getElementById('live2d-widget');
    if (el) {
      clearInterval(checkExist);
      el.style.transform = 'translateX(-330px) translateY(-60px)';
    }
  }, 200);
};
document.body.appendChild(s);
