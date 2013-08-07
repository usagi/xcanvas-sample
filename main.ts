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

class my_scene_base_t extends xcanvas.scene_t {
  get tsg_1() { return <tsg_1_t>this.game; }
  get im() { return this.tsg_1.im; }
  get sm() { return this.tsg_1.sm; }
}

// default scene; title call
class scene_1_t extends my_scene_base_t {
  update(game_time: xcanvas.game_time_t){
    super.update(game_time);
    if(this.im.is_press(xcanvas.input_e.start)){
      console.log('scene_1_t/update: start button pressed')
      //this.sm.push();
    }
  }
}

// game sample scene
class scene_2_t extends my_scene_base_t {i
  initialize(){
    //var player_character = new player_character_t();
    //this.components.push(player_character);
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

