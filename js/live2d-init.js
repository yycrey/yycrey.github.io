// Live2D 看板娘初始化 + 可拖动
L2Dwidget.init({
  model: {
    jsonPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json'
  },
  display: {
    position: 'bottom',
    width: 150,
    height: 300
  },
  mobile: { show: true },
  react: { opacity: 0.7 }
});

// 让看板娘可拖动（5秒内持续查找元素确保初始化完成）
function waitForWidget(retries) {
  if (retries 