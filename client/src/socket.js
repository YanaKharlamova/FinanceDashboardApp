//10step: треба підкл до сокетів фронт-частину
//щоб через сокети підкл фронт до бека
// -- треба install бібліотеку socket.io-client: npm install socket.io-client- бібліотека
//оголошуємо цю бібл тут як "io":
import io from "socket.io-client"; // io буде нас сповіщуваи про якісь подіі

// const PORT = process.env.PORT || 4000; //винеси в окремий файл мб - погугли як треба спільні constants for server and client

//11 step: create v-ble as we did in step 8:---цю змінну будемо викор для підкл до сервера
// const socket = io(`http://localhost:${PORT}`); // io має приймати якусь адресу. якщо іі не передати то по дефолту
//буде до ..:3000 підключатись(ну або ...:3001 etc- там де ваш фронт відкритий)- а це просто реакт апп
//по цій адресі нема сокетів
//в такому випадку - можуть бути 404 в консолі errors кожні 5 секунд(по дефолту socket.io відправляє
//get-запит на сервер чи є конект з фронтом чи ні- для того ми і обгортали наш сервер в сокети-step 8)
//тут в нашому випадку сокети працюють по адресі process.env.PORT || 4000;(зроблю тоді і тут таку зміннуб а мб краще і винесу її в окремий файл)
//треба ю адресу передати в io()
//ТЕПЕР В ТЕРМІНАЛІ(НАПЕВНО ТРЕБА ПЕРЕАПУСТИТИ СЕРВЕР ТЕРМІНАЛ) :
//зявл те що в сервері в step4/step9- сповіщення появились, отже клієнт підкл чрез сокети до сервераі!!УРА
//Streaming service is running on http://localhost:4000
// Client connected!!
// Note: кожне перезавантаження сторінки фронт-це ще раз підключення нове до сервераЖ
// Client connected!!
// Client connected!!
// Client connected!!
// Client connected!!
// Client connected!!

// step 12:
const socket = io(); //lets dont specify adress
//cause in real project both sockets and node.js server and react.js clinet - will be on the same adress(eg. incode.ua)
//So lets do easier: in package.json we can 
// "eslintConfig": {
//....
//   },
//HERE: 
//"proxy": `http://localhost:${process.env.PORT || 4000}`
//   "browserslist": {....}
// + restart your client
//ТОМУ. ось що ми зробили:
// кожного разу, коли ми будемо розгортати фронт на eg localhost:3000 - в package.json буде 
// проксуватись в localhost:4000 - там де нащ сервер і є сокети
// тобто фронт буде передаватись в localhost:3000 і проксуватись в ...:4000
//Тобто за допомогою цього проксі, ми даємо запит на :3000 і він буде проксуватись на наш node.js додаток по адресі 
//..:4000
//Але ми маємо наш фронт все одно на :3000- на цій адресі відобр фронт
// а на :4000- серверні дані 
// Пояснення: тут саме аджакс запити(ajax) будуть виконуватись як звичайні get, post,,-запити
//і вони будуть проксуватись на цю вказану адресу :4000 


export default socket;