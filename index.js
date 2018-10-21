const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.post("/message", function(req, res, next) {
	const msg = req.body;
	if("sender" in msg && "message" in msg){
		emitMesssage(req.body)
		console.log(req.body);
		res.end("ok");
	}
	res.status(400);
	res.end();
});

app.get("/messages", function(req, res, next){
	const msg = [
		{
			"message": "hackschool is da best",
			"sender": "my name is jeff"
		},
		{
			"message": "hackschool 2018",
			"sender": "jeff"
		},
		
	];
	res.json(msg);
});

app.get("*", function(req, res,){
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
})


const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
const io = socketIO(server);

io.on('connection', (client) => {
	console.log("connected");
	client.on('disconnect', () => {
		console.log("disconnected");
	});
});

const emitMesssage = async (message) => {
	try {
		io.sockets.emit("NEW_MESSAGE", message);
	} catch (error) {
		console.error(error);
	}
};

server.listen(PORT, () => {
	console.log("listening on "+PORT);
});