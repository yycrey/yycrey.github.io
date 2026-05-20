// Live2D 看板娘初始化 + 可拖动
L2Dwidget.init({
  model: {
    jsonPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json'
  },
  display: {
    position: 'right',
    width: 150,
    height: 300
  },
  mobile: { show: true },
  react: { opacity: 0.7 }
});

// 让看板娘可拖动
setTimeout(function () {
  var widget = document.getElementById('live2d-widget');
  if (!widget) {
    // 找不到时监听DOM变化
    var observer = new MutationObserver(function () {
      var el = document.getElementById('live2d-widget');
      if (el) {
        makeDraggable(el);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return;
  }
  makeDraggable(widget);
}, 500);

function makeDraggable(el) {
  el.style.cursor = 'move';
  el.style.userSelect = 'none';
  var isDown = false, offsetX, offsetY;

  el.addEventListener('mousedown', function (e) {
    isDown = true;
    var rect = el.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    el.style.transition = 'none';
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    el.style.left = (e.clientX - offsetX) + 'px';
    el.style.top = (e.clientY - offsetY) + 'px';
    el.style.right = 'auto';
    el.style.bottom = 'auto';
  });

  document.addEventListener('mouseup', function () {
    isDown = false;
    el.style.transition = '';
  });

  // 触屏支持
  el.addEventListener('touchstart', function (e) {
    var touch = e.touches[0];
    var rect = el.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
    el.style.transition = 'none';
  }, { passive: true });

  document.addEventListener('touchmove', function (e) {
    if (!e.touches[0]) return;
    el.style.left = (e.touches[0].clientX - offsetX) + 'px';
    el.style.top = (e.touches[0].clientY - offsetY) + 'px';
    el.style.right = 'auto';
    el.style.bottom = 'auto';
  }, { passive: true });
}
