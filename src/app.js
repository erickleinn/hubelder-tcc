const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');



const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const mongoose = require('./mongoose');

const app = express(feathers());

// Carrega a configuraçao do app
app.configure(configuration());
// Habilita segurança, CORS, compressão, favicon e body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Hostea a pasta public
app.use('/', express.static(app.get('public')));

// Inicializa plugins e providers
app.configure(express.rest());


app.configure(mongoose);


// Configura outros middlewares
app.configure(middleware);
app.configure(authentication);
// Inicializa serviços
app.configure(services);
// Inicializa canal de eventos
app.configure(channels);

// Configura um middleware para 404 e handler de errors
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
