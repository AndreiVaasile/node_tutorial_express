//OS Module este un modul integrat în Node.js și oferă o serie de metode și proprietăți pentru a interacționa cu sistemul de operare.

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);
//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS={
  name:os.type(),
  release:os.release(),
  totalMemory:os.totalmem(),
  freeMemory:os.freemem(),
  version:os.version()
}

console.log(currentOS);