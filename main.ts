/// <reference path="xcanvas/xcanvas.ts"/>

class tsg_1_t extends xcanvas.game_t {
  sm: xcanvas.scene_manager_t;
  im: xcanvas.input_manager_t;
  
  initialize(){
    super.initialize();
    this.sm = new xcanvas.scene_manager_t(this, new scene_1_t());
    this.components.push(this.sm);
    this.im = new xcanvas.input_manager_t();
    this.components.push(this.im);
  }
}

class scene_1_t extends xcanvas.scene_t {
  get tsg_1() { return <tsg_1_t>this.game; }
  
  update(game_time: xcanvas.game_time_t){
    super.update(game_time);
    console.log(this.tsg_1.im);
  }
}

var tsg_1 = null;

window.addEventListener('load', ()=>{
  var c = document.createElement('canvas');
  c.setAttribute('id', 'draw_target');
  c.setAttribute('width', '720');
  c.setAttribute('height', '480');
  document.body.appendChild(c);
  var x = c.getContext('2d');
  tsg_1 = new tsg_1_t(x).run();
});

