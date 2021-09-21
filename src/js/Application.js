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

    const interval = setInterval(() => {
      const message = document.createElement("div");
      message.classList.add("message");
      if(count == lyrics.length){
        count = 0;
      }
      message.innerText = lyrics[count];
      count++
      document.querySelector(".main").appendChild(message);
      
      
    }, 600);
  
    
    this.emit(Application.events.READY);
this.emit(Beat.events.BIT);

  }
  

  _create(){
    this._beat.on('bit', interval);
  }
}