// Live2D 看板娘（使用 L2Dwidget 直接加载，不依赖外部 JSON/API）
// 加载 live2d.min.js
var s = document.createElement('script');
s.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
s.onload = function () {
  L2Dwidget.init({
    model: {
      jsonPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json'
    },
    display: {
      position: 'right',
      width: 150,
      height: 300,
      hOffset: -20,
      vOffset: -80
    },
    mobile: { show: true },
    react: { opacity: 0.7 }
  });
};
document.body.appendChild(s);
