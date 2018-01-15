import explodeStyle from './explode.scss';

const _elemTrigger = document.querySelector('.explodion-trigger');
const _elemSVG = document.querySelector('svg');

_elemTrigger.addEventListener('mousedown', (e)=>{
  _elemSVG.classList.toggle('explode');
  e.target.classList.add('explode-up');
  e.target.classList.remove('explode-down');
});

_elemTrigger.addEventListener('mouseup', (e)=>{
  _elemSVG.classList.toggle('explode');
  e.target.classList.remove('explode-up');
  e.target.classList.add('explode-down');
});
