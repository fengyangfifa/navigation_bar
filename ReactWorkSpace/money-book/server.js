const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const server = jsonServer.create();

const middleWares = jsonServer.defaults(); 
const router = jsonServer.router('db.json');
const root = __dirname + '/build';
const reactRouterWhiteList = ['/create', '/edit/:itemId'];
server.use(express.static(root, {maxAge: 86400000}));
// 直接访问create和edit路由时不会报404错误
server.get(reactRouterWhiteList, (request, response) => {
  response.sendFile(path.resolve(root, 'index.html'));
});
server.use(router);
server.use(middleWares);
server.listen(3000, () => {
  console.log('listen 3000');
});
