if (window.matchMedia("(max-width: 700px)").matches) {
const mobileNav = document.getElementById('header-div');
const nav = document.querySelector('nav');
const span = document.querySelector('span');
const headerSpan1 = document.getElementById('header-span1');
const headerSpan2 = document.getElementById('header-span2');
const headerSpan3 = document.getElementById('header-span3');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const name = document.getElementById('name');
const ul = document.querySelector('ul');
const body = document.querySelector('body');
const headerNav1 = document.getElementById('headerNav1');
const headerNav2 = document.getElementById('headerNav2');
const headerNav3 = document.getElementById('headerNav3');
const headerNav4 = document.getElementById('headerNav4');

mobileNav.addEventListener('click', mobileNavC);

function mobileNavC() {
  headerSpan2.style.display = 'none';
  span.style.margin = '0px';
  headerSpan3.style.position = 'absolute';
  headerSpan1.style.position = 'absolute';
  headerSpan3.style.position = 'absolute';
  headerSpan2.style.margin = '0px';
  headerSpan1.style.margin = '0px';
  headerSpan3.style.margin = '0px';
  headerSpan2.style.transition = '0.5s';
  headerSpan1.style.transition = '0.5s';
  headerSpan3.style.transition = '0.5s';
  headerSpan3.style.transform = 'rotate(45deg)';
  headerSpan1.style.transform = 'rotate(-45deg)';
  headerSpan3.style.background = 'black';
  this.style.transform = 'translate(-20px)';
  main.style.display = 'none';
  footer.style.display = 'none';
  header.style.height = '900px';
  header.style.width = '80%';
  body.style.display = 'flex';
  body.style.flexDirection = 'row';
  body.style.justifyContent = 'flex-start ';
  header.style.alignItems = 'flex-start';
  name.style.visibility = 'hidden';
  mobileNav.style.marginTop = '18px';
  nav.style.display = 'block';
  ul.style.listStyleType = 'none';
  const li = document.querySelectorAll('li')
  li.forEach(li => {
    li.style.marginBottom = '20px';
  });
  ul.style.marginTop = '135px';
};

mobileNav.addEventListener('dblclick', mobileNavO);
function mobileNavO() {
  headerSpan2.style.display = '';
  headerSpan3.style.transform = '';
  headerSpan2.style.position = 'relative';
  headerSpan1.style.position = 'relative';
  headerSpan3.style.position = 'relative';
  headerSpan3.style.background = 'blue';
  headerSpan1.style.transform = '';
  this.style.transform = 'translate(0px)';
  main.style.display = '';
  footer.style.display = '';
  main.style.display = '';
  footer.style.display = '';
  header.style.height = '';
  header.style.width = '';
  header.style.alignItems = '';
  name.style.visibility = '';
  mobileNav.style.marginTop = '';
  nav.style.display = '';
  ul.style.listStyleType = '';
  ul.style.marginTop = ''
  body.style.display = '';
  body.style.flexDirection = '';
  body.style.justifyContent = '';
};
}
