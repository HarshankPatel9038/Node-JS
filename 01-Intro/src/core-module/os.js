/* In JavaScript, `const os = require('os');` is importing the built-in `os` module. The `os` module
provides a set of operating system-related utility methods and properties. By requiring the `os`
module, you can access various functions and properties to get information about the operating
system, such as platform, release version, architecture, CPU details, network interfaces, and more. */
const os = require('os');




// os Module
console.log('\n============ os ============');
console.log(os.platform());  //win32
console.log(os.release());  //10.0.22621
console.log(os.arch());  //x64
console.log(os.loadavg());  //[ 0, 0, 0 ]
console.log(os.tmpdir());  //C:\Users\Harshank\AppData\Local\Temp
console.log(os.type());  //Windows_NT
console.log(os.availableParallelism());  //8
console.log(os.cpus());
// [
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: {
//         user: 1602187,
//         nice: 0,
//         sys: 2065062,
//         idle: 43750984,
//         irq: 328875
//       }
//     },
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: { user: 674968, nice: 0, sys: 543171, idle: 46199546, irq: 16281 }
//     },
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: { user: 882312, nice: 0, sys: 642578, idle: 45892828, irq: 17250 }
//     },
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: { user: 561984, nice: 0, sys: 330765, idle: 46524937, irq: 7734 }
//     },
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: { user: 506546, nice: 0, sys: 383109, idle: 46528062, irq: 10406 }
//     },
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: { user: 721796, nice: 0, sys: 664281, idle: 46031640, irq: 27375 }
//     },
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: { user: 515234, nice: 0, sys: 357359, idle: 46545125, irq: 9468 }
//     },
//     {
//       model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//       speed: 3110,
//       times: { user: 419375, nice: 0, sys: 268296, idle: 46730015, irq: 6390 }
//     }
//   ]
console.log(os.endianness());  //LE
console.log(os.userInfo());
// {
//     uid: -1,
//     gid: -1,
//     username: 'Harshank',
//     homedir: 'C:\\Users\\Harshank',
//     shell: null
//   }
console.log(os.userInfo().username);  //Harshank
console.log(os.version());  //Windows 11 Home Single Language
console.log(os.homedir());  //C:\Users\Harshank
console.log(os.totalmem());  //8323588096
console.log(os.hostname());  //DESKTOP-R132P8K
console.log(os.getPriority());  //0
console.log(os.machine());  //x86_64
console.log(os.networkInterfaces());
// {
//     'Wi-Fi': [
//       {
//         address: 'fe80::84b1:6e4b:b082:bb03',
//         netmask: 'ffff:ffff:ffff:ffff::',    
//         family: 'IPv6',
//         mac: '50:c2:e8:4b:d0:87',
//         internal: false,
//         cidr: 'fe80::84b1:6e4b:b082:bb03/64',
//         scopeid: 12
//       },
//       {
//         address: '192.168.1.103',
//         netmask: '255.255.255.0',
//         family: 'IPv4',
//         mac: '50:c2:e8:4b:d0:87',
//         internal: false,
//         cidr: '192.168.1.103/24'
//       }
//     ],
//     'Loopback Pseudo-Interface 1': [
//       {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//       },
//       {
//         address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '127.0.0.1/8'
//       }
//     ]
//   }
console.log(os.networkInterfaces()['Wi-Fi'][0].address);  //fe80::84b1:6e4b:b082:bb03
console.log(os.networkInterfaces()['Wi-Fi'][0].mac);  //50:c2:e8:4b:d0:87