import { Server } from 'socket.io';
import mongoose from 'mongoose';
import server from './app.js';
import { PORT, MONGO_URI } from './config.js';
import { sockets } from './sockets.js';

// Create Server
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		credentials: true
	}
});

// Connect Socket.io
sockets(io);

// Connect Database
try {
	mongoose.set('strictQuery', true);
	await mongoose.connect(MONGO_URI);
	console.log('MongoDB Database is Connected');
} catch(err) {
	console.error('An error has occurred with', err);
}

// Listener Server
server.listen(PORT, () => {
	console.log('Server running in port', PORT);
});
