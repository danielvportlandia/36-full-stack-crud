'use strict';

require('dotenv').config();

if (!process.env.NODE_ENV) {
  throw new Error('Undefined NODE_ENV');
}

require('./src/lib/server').start();
