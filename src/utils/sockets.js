import Pusher from "pusher-js"

export default function socket(canal){
    var pusher = new Pusher('5f78611f659644b983f7', {
  cluster: 'eu'
});

var channel = pusher.subscribe(canal);

channel.bind("my-event", function(data) {
alert(JSON.stringify(data.message));
});
}

