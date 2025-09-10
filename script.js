const PubSub = {
    events: {},
    
    subscribe(event, callback){
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    },
    
    publish(event, data){
        if (!this.events[event]) return;
        this.events[event].forEach(callback => callback(data));
    }
};

PubSub.subscribe("message", (data) => {
    console.log("Subscriber 1 got:", data);
});

PubSub.subscribe("message", (data) => {
    console.log("Subscriber 2 got:", data);
});

PubSub.publish("message", "Hello World!");
PubSub.publish("message", "PubSub is Working!");

