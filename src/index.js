import ErrorListener from './module/errorListener.js'

let listener = new ErrorListener();

listener.start(e => {console.log(e)})

listener.trackLog("error", (...args) => {
  console.log('%c' + 'error' +  ' caught ' + args, 'background: #222; color: #bada55')
})

/*errorCounter = 1

tempError = console.error.bind(console);

console.error = function() {
  tempError.apply(this, arguments)
  console.log(arguments)
}

window.addEventListener('error', event => {
  console.log(event) 
}, {capture: true, passive:true})

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    console.log("interactive", event);
  }
  else if (event.target.readyState === 'complete') {
    console.log("complete", event);
  }
});*/

window.addEventListener("load", ()=>{
  document.getElementById("stop").addEventListener("click", ()=>{listener.stop()})
})

window.addEventListener("load", ()=>{
  document.getElementById("untrack").addEventListener("click", ()=>{listener.untrackLog("error")})
})