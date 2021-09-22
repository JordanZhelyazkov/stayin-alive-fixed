import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
  _beat = new Beat();
  
  

  constructor() {
    super();
    
    
    this._beat.addListener(Beat.events.BIT, this.emit);
    this.emit(Beat.events.BIT);
    this.emit(Application.events.READY);
    

  }
  
  

  _create(){
    
  }
}
