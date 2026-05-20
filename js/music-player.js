document.addEventListener('DOMContentLoaded', function () {
  var container = document.createElement('div');
  container.id = 'aplayer';
  document.body.appendChild(container);

  var ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#ffa07a',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.3,
    listFolded: true,
    listMaxHeight: '300px',
    audio: [
      {
        name: '音乐标题',
        artist: '歌手名',
        url: '/music/example.mp3',
        cover: '/music/cover.jpg'
      }
    ]
  });
});
