// Live2D 看板娘初始化 + 可拖动
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

// 让看板娘可拖动
function waitForWidget(retries) {
  if (retries <= 0) return; var el="document.getElementById('live2d-widget');" if (el) { canvas="el.querySelector('canvas');" target="canvas" || el; makedraggable(target, el); } es="document.querySelectorAll('canvas');" for (var i="0;" < es.length; i++) (es[i].id && es[i].id.indexof('live2d')>= 0) {
      makeDraggable(es[i], es[i].parentElement || es[i]);
      return;
    }
  }
  setTimeout(function () { waitForWidget(retries - 1); }, 300);
}
waitForWidget(15);

function makeDraggable(dragEl, container) {
  dragEl.style.cursor = 'move';

  var isDown = false, startX, startY, origLeft, origTop, origRight, origBottom;

  function onStart(clientX, clientY) {
    isDown = true;
    startX = clientX;
    startY = clientY;
    // 读取容器当前样式（L2Dwidget 设置的内联样式）
    origLeft = container.style.left;
    origTop = container.style.top;
    origRight = container.style.right;
    origBottom = container.style.bottom;
    container.style.transition = 'none';
  }

  function onMove(clientX, clientY) {
    if (!isDown) return;
    var dx = clientX - startX;
    var dy = clientY - startY;
    // 转为 left/top 定位
    var rect = container.getBoundingClientRect();
    container.style.left = (rect.left + dx) + 'px';
    container.style.top = (rect.top + dy) + 'px';
    container.style.right = 'auto';
    container.style.bottom = 'auto';
    // 更新起始点，实现连续拖拽
    startX = clientX;
    startY = clientY;
  }

  function onEnd() {
    isDown = false;
    container.style.transition = '';
  }

  dragEl.addEventListener('mousedown', function (e) {
    e.stopPropagation();
    onStart(e.clientX, e.clientY);
  });
  document.addEventListener('mousemove', function (e) { if (isDown) onMove(e.clientX, e.clientY); });
  document.addEventListener('mouseup', onEnd);

  dragEl.addEventListener('touchstart', function (e) {
    var t = e.touches[0];
    onStart(t.clientX, t.clientY);
  }, { passive: true });
  document.addEventListener('touchmove', function (e) {
    if (isDown && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  document.addEventListener('touchend', onEnd);
}
</=>