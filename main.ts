/// <reference path="xcanvas/xcanvas.ts"/>

class tsg_1_t extends xcanvas.game_t {
}

var tst_1 = () => {
  var c = <HTMLCanvasElement>document.getElementById('draw_target');
  return new tsg_1_t(c.getContext('2d')).run();
}
