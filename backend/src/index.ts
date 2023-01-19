import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Server as Socket } from 'socket.io';
import http from 'http';
import { PORT } from './config.js';

const app = express();
const server = http.createServer(app);
const io = new Socket(server, {
	cors: {
		origin: 'http://localhost:3000'
	}
});

app.use(morgan('dev'));
app.use(cors());

io.on('connection', (socket) => {
	socket.on('message', (message) => {
		socket.broadcast.emit('message', {
			body: message,
			from: 'Visitant'
		});
	});
});

server.listen(PORT, () => {
	console.log('Server running in port', PORT);
});