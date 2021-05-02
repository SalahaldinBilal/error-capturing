export default class ErrorListener{

    constructor(){
        this.errorBindReference = null
        this.stateBindReference = null
        this.documentState = null
        this.originalLogs = {}
    }

    start(callback){
        this.errorBindReference = this.listenerFunc.bind(this, callback);
        this.stateBindReference = this.stateChangeFunc.bind(this)
        this.documentState = document.readyState;

        window.addEventListener('readystatechange', this.stateBindReference, {capture: true, passive:true});
        window.addEventListener('error', this.errorBindReference, {capture: true, passive:true});
    }

    listenerFunc(callback, event){
        callback({
            type: this.documentState,
            message: event.message,
            timestamp: event.timeStamp
        });
        console.log(event)
    }

    stateChangeFunc(){
        this.documentState = document.readyState;
    }

    stop(){
        window.removeEventListener('readystatechange', this.stateBindReference, {capture: true, passive:true});
        window.removeEventListener('error', this.errorBindReference, {capture: true, passive:true});
        this.errorBindReference = null;
        this.documentState = null;
    }

    trackLog(type, callback){
        this.originalLogs[type] = console[type].bind(console);

        console[type] = function() {
            this.originalLogs[type].apply(console, arguments);
            callback(...arguments);
        }.bind(this);
    }

    untrackLog(type){
        console[type] = this.originalLogs[type];
        delete this.originalLogs[type];
    }
}