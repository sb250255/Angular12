
export class ServerService{
    
    constructor(){

    }

    servers = [
        {id : 1, name : 'produciton server', status : 'online'},
        {id : 2, name : 'test server', status : 'offline'},
        {id : 3, name : 'dev server', status : 'online'}
    ]

    getServers(){
        return this.servers;
    }

    getServer(id: number){
        const server = this.servers.find(
            (s) => { return s.id == id}
        )

        return server;

    }

}