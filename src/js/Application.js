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
    
    
    
    
    this._beat.addListener('bit', this.emit);
    this.emit(Application.events.READY);
    
    
    

  }
  
  

  _create(){
    
  }
}
