/* 다크/라이트 모드 전환 버튼. 페이지 맨 아래에서 불러옵니다.
   현재 모드는 <head>의 짧은 스크립트가 미리 정해 두므로 화면이 깜빡이지 않아요. */
(function () {
  var root = document.documentElement;
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle';

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function render() {
    var light = current() === 'light';
    var label = light ? '다크 모드로 바꾸기' : '라이트 모드로 바꾸기';
    button.innerHTML = light
      ? '<i class="fas fa-moon" aria-hidden="true"></i>'
      : '<i class="fas fa-sun" aria-hidden="true"></i>';
    button.setAttribute('aria-label', label);
    button.title = label;
  }

  button.addEventListener('click', function () {
    var next = current() === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* 저장이 막힌 브라우저는 이번 방문에만 적용 */ }
    render();
  });

  render();
  document.body.appendChild(button);
})();
