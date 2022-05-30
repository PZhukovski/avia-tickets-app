// import { create, router as _router, defaults } from 'json-server';
import pkg from 'json-server';
import path from 'path'; 
import { fileURLToPath } from 'url';
import express from 'express';
// "concurrently \"react-scripts start\" \"npx json-server flights.json --port 3001\""

const { create,  router: _router,  defaults , rewriter } = pkg;

const __dirname = path.resolve();
const server = create();
const router = _router('users.json');
const middlewares = defaults({
  static: './build'
});
const PORT = process.env.PORT || 3001;
server.use(middlewares);
server.use(rewriter({
  '/api/*': '/$1',
}))
server.use(router);


server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build' , 'index.html'));
});
console.log(__dirname);

server.listen(PORT, () => {
  console.log('Server is running');
});