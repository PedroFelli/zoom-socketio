class SocketBuilder {
  constructor({socketUrl}){
    this.socketUrl = socketUrl;
    this.onUserConnect = () => {};
    this.onUserDisconnect = () => {};
  }

  setOnUserConnected(fn){
    this.onUserConnect = fn

    return this
  }

  setOnUserDisconnected(fn){
    this.onUserDisconnect = fn
    return this
  }

  build(){
    const socket = io.connect(this.socketUrl, {
      withCredentials: false,
    })

    socket.on('user-connected', this.onUserConnect)
    socket.on('user-disconnected', this.onUserDisconnect)

    return socket
  }
}