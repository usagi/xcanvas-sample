/// <reference path="xcanvas/xcanvas.ts"/>

class tsg_1_t extends xcanvas.game_t {
}

var tsg_1 = null;

window.addEventListener('load', ()=>{
  var c = new HTMLCanvasElement();
  c.setAttribute('id', 'draw_target');
  c.setAttribute('width', '720');
  c.setAttribute('height', '480');
  document.appendChild(c);
  var x = c.getContext('2d');
  tsg_1 = new tsg_1_t(x).run();
});
