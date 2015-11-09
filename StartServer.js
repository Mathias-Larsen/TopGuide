require('shelljs/global');

if (exec('pushd C:\\APPS\\style-guide\\TopGuide\\ && StartServer.cmd').code !== 0) {
  echo('Error: starting node http-server failed (StartServer.js)');
  exit(1);
}
