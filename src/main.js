export { appName, init };

const appName = 'Neutron!';

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('App ready: ' + appName);
  renderHeader();
}

function renderHeader() {
  const d = document;
  const $header = d.getElementById('doc-header');
  $header.innerHTML = '';
  $header.appendChild(Title());
}

function Title() {
  const $h1 = document.createElement('h1');
  $h1.innerHTML = appName;
  return $h1;
}

const unused = 9;
