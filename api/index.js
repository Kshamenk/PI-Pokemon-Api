//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
var https = require('https');

// Syncing all the models at once.
conn.sync({ alter: false }).then(() => {    // cambiar a alter cuando este listo

  console.log("Starting HTTPS server");
  var serverI = https.createServer({
    key: fs.readFileSync("/etc/letsencrypt/live/kcha.dev/privkey.pem", 'utf8'),
    cert: fs.readFileSync("/etc/letsencrypt/live/kcha.dev/fullchain.pem", 'utf8')
  }, server);

  server.listen(5001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


