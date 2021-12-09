const Hapi = require('@hapi/hapi');

const serverConfig = {
    port:5000,
    host: 'localhost',
}
 
const init = async () => {
    const server = Hapi.server(serverConfig);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();