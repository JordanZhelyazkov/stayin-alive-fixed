import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter{
  static get events() {
    return {
      BIT: "bit",
    };
  }
  
  
  constructor(){
    super();
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    
    

      setInterval(() => {
        const message = document.createElement("div");
        message.classList.add("message");
        if(count == lyrics.length){
          count = 0;
        }
        message.innerText = lyrics[count];
        count++
        document.querySelector(".main").appendChild(message);
        
        
      }, 600);
    
    this.emit(Beat.events.BIT);

  }
  

  
}
