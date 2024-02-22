const url = require('url');



// url Module
console.log('\n============ url ============');
const myUrl = new URL('https://www.example.com:8080/p/a/t/h?query=string#hash');
console.log(myUrl.hash); //#hash
console.log(myUrl.host);  //www.example.com:8080
console.log(myUrl.hostname);  //www.example.com
console.log(myUrl.href);  //https://www.example.com:8080/p/a/t/h?query=string#hash
console.log(myUrl.pathname);  // /p/a/t/h
console.log(myUrl.port);  //8080
console.log(myUrl.protocol);  //https:
console.log(myUrl.search);  //?query=string
console.log(myUrl.searchParams);  //URLSearchParams { 'query' => 'string' }
console.log(myUrl.toString());  //https://www.example.com:8080/p/a/t/h?query=string#hash
console.log(myUrl.toJSON());  //https://www.example.com:8080/p/a/t/h?query=string#hash
console.log(url.parse('https://www.google.com/search?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25#vhid=jutZoudJ-QPIAM&vssid=mosaic'));
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.google.com',
//     port: null,
//     hostname: 'www.google.com',
//     hash: '#vhid=jutZoudJ-QPIAM&vssid=mosaic',
//     search: '?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25',
//     query: 'sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25',
//     pathname: '/search',
//     path: '/search?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25',
//     href: 'https://www.google.com/search?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25#vhid=jutZoudJ-QPIAM&vssid=mosaic'
//   }
const urlName = url.parse('https://www.google.com/search?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25#vhid=jutZoudJ-QPIAM&vssid=mosaic', true);
console.log(urlName);
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.google.com',
//     port: null,
//     hostname: 'www.google.com',
//     hash: '#vhid=jutZoudJ-QPIAM&vssid=mosaic',
//     search: '?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25',
//     query: [Object: null prototype] {
//       sca_esv: 'ea470e4985ed4d8d',
//       rlz: '1C1ONGR_enIN1059IN1059',
//       sxsrf: 'ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919',
//       q: 'img',
//       uds: 'AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc',
//       udm: '2',
//       prmd: 'ivsnmbtz',
//       sa: 'X',
//       ved: '2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB',
//       biw: '1536',
//       bih: '730',
//       dpr: '1.25'
//     },
//     pathname: '/search',
//     path: '/search?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25',
//     href: 'https://www.google.com/search?sca_esv=ea470e4985ed4d8d&rlz=1C1ONGR_enIN1059IN1059&sxsrf=ACQVn08yq4jhRZyAkrjR0JNkIypTWHosoQ:1707187474919&q=img&uds=AMwkrPv7ikhJ1XRGVFtwF-kaHq_JNYY5NnMK_Iz4Hojhf1RvWT01Be3CPnkHFr4MboSQXrCmYi3TQu5Fym8HQT01L1I61NoIlWtoRIUKX23Rvp8MGggpuwMHnamx7ulV60LqICNWKiI1ZiaiJDYzOoBpRHTGszUAalN2NmkGmqDmmFI2-9XwKV7pP6t57zABumSaNJmKtCUcEFiPg0oJ2hMiCKDBBrw3eipOMwgv2EVQ3MP-Rxboopc&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwi5q4f42JWEAxU6yDgGHYFKD4sQtKgLegQIHRAB&biw=1536&bih=730&dpr=1.25#vhid=jutZoudJ-QPIAM&vssid=mosaic'
//   }
console.log(urlName.query.rlz); //1C1ONGR_enIN1059IN1059
const obj = {
    protocol: 'https',
    hostname: 'example.com',
    pathname: '/some/path',
    query: {
        page: 1,
        format: 'json',
    },
}
console.log(url.format(obj)); //https://example.com/some/path?page=1&format=json
console.log(url.resolve('https://example.com/some/path', 'about')); //https://example.com/some/about
console.log(url.resolve('https://example.com/some/path', '/about')); //https://example.com/about
console.log(url.resolve('https://example.com/some/path/', 'about')); //https://example.com/some/path/about
console.log(url.resolve('https://example.com/some/path/', 'about')); //https://example.com/some/path/about