import { Server, Socket } from 'socket.io';

export default class SocketService {
	private io: Server;
	constructor(httpServer) {
		this.io = new Server(httpServer);
		this.io.on('connect', (socket: Socket) => {
			console.log('Connected.');
		});
	}

	emiter(event, body) {
		if (body) {
			this.io.emit(event, body);
		}
	}
}
