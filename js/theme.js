/* 다크/라이트 모드 전환 스위치. 페이지 맨 아래에서 불러옵니다.
   현재 모드는 각 페이지 <head>의 짧은 스크립트가 미리 정해 두므로 화면이 깜빡이지 않아요.
   선택은 localStorage('theme')에 저장되고, 같은 사이트의 모든 페이지가 이 값을 함께 씁니다. */
(function () {
  var root = document.documentElement;
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-switch';
  button.setAttribute('role', 'switch');
  button.setAttribute('aria-label', '다크 모드');
  button.innerHTML =
    '<span class="theme-switch__knob" aria-hidden="true"></span>' +
    '<span class="theme-switch__icon theme-switch__icon--sun" aria-hidden="true">' + SUN + '</span>' +
    '<span class="theme-switch__icon theme-switch__icon--moon" aria-hidden="true">' + MOON + '</span>';

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function render() {
    var dark = current() === 'dark';
    button.setAttribute('aria-checked', dark ? 'true' : 'false');
    button.title = dark ? '라이트 모드로 바꾸기' : '다크 모드로 바꾸기';
  }

  function set(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* 저장이 막힌 브라우저는 이번 방문에만 적용 */ }
    render();
  }

  button.addEventListener('click', function () {
    set(current() === 'light' ? 'dark' : 'light');
  });

  // 다른 탭이나 창에서 모드를 바꾸면 이 페이지도 바로 따라감
  window.addEventListener('storage', function (event) {
    if (event.key === 'theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
      root.setAttribute('data-theme', event.newValue);
      render();
    }
  });

  render();
  document.body.appendChild(button);
})();
