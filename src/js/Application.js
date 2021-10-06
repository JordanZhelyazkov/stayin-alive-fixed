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
    
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
   
    // this._beat.addListener('bit', () => {
    EventEmitter.on(Beat.events.BIT, () => {
    const message = document.createElement("div");
    message.classList.add("message");
    if(count == lyrics.length){
      count = 0;
    }
    message.innerText = lyrics[count];
    count++
    document.querySelector(".main").appendChild(message);
        // });      
    
      })
    this.emit(Application.events.READY)
    this.emit(Beat.events.BIT);
  }
  
  _create(){
    
  }
}
