import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
  
  constructor() {
    super();
    let lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    const _beat = new Beat();
     _beat.on(Beat.events.BIT, () => {
      const message = document.createElement("div");
      message.classList.add("message");
      if(count == lyrics.length){
        count = 0;
      }
      message.innerText = lyrics[count];
      count++
      this._create(message)
    });
      
      
    this.emit(Application.events.READY); 
    
   
  }
   _create(message){
    
    return document.querySelector(".main").appendChild(message);

    
    
  }
  
}
