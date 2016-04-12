// 'use strict'
// const express = require('express');
//
// express()
//   .use(express.static('./build'))
//   .listen(8080, () => console.log('client-server speaking port 8080'))


'use strict';
const express = require('express');

express()
  .use(express.static('./build'))
  .listen(8080, () => console.log('client-server speaking on 8080'));
