// 音乐播放器（防止重复创建）
if (!window.aplayerInstance) {
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.createElement('div');
    container.id = 'aplayer';
    document.body.appendChild(container);

    window.aplayerInstance = new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: true,
      theme: '#d43c33',
      loop: 'all',
      order: 'random',
      preload: 'auto',
      volume: 0.3,
      mutex: true,
      listFolded: true,
      listMaxHeight: '300px',
      audio: [
        { name: 'Girl', artist: 'Alexander 23', url: '/music/Alexander 23 - Girl.mp3' },
        { name: 'Sweet but Psycho', artist: 'Ava Max', url: '/music/Ava Max - Sweet but Psycho.mp3' },
        { name: 'Turn Off The Lights', artist: 'Ava Max', url: '/music/Ava Max - Turn Off The Lights.mp3' },
        { name: 'Fighter', artist: 'Christina Aguilera', url: '/music/Christina Aguilera - Fighter.mp3' },
        { name: 'Lights', artist: 'Ellie Goulding', url: '/music/Ellie Goulding - Lights.mp3' },
        { name: 'Sold Out', artist: 'Jonathan Steingard, Hawk Nelson', url: '/music/Jonathan Steingard,Hawk Nelson - Sold Out.mp3' },
        { name: 'Baby', artist: 'Justin Bieber, Ludacris', url: '/music/Justin Bieber,Ludacris - Baby.mp3' },
        { name: 'Poker Face', artist: 'Lady Gaga', url: '/music/Lady Gaga - Poker Face.mp3' },
        { name: 'Somebody New', artist: 'Olly Murs', url: '/music/Olly Murs - Somebody New.mp3' },
        { name: 'Problem', artist: 'Pentatonix', url: '/music/Pentatonix - Problem.mp3' },
        { name: 'Ashes', artist: 'Stellar', url: '/music/Stellar - Ashes.mp3' }
      ]
    });
  });
}
