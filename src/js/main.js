import Timer from './timer.js'
let commonCounter = require('./commonjs_test')
// import {current as esCounter, inc} from './es_test'; //может каррент переименовать во чтото другое
import * as esCounter from './es_test'; // все элементы модуля

window.addEventListener('load', function () {
    let timer1 = new Timer(document.querySelector('.timer1'), 100);

    console.log(esCounter);
    //
    // esCounter.current = 10;
    // console.log(esCounter.current); //10
    // esCounter.inc();
    // console.log(esCounter.current); //11

    commonCounter.current = 10;
    console.log(commonCounter.current); //10
    commonCounter.inc();
    console.log(commonCounter.current); //11


    //Симловы
    let password = Symbol();

    let user = {
        name: 'Admin',
        login: 'admin',
        [password]: 'querty' // не попадет в for in
    };

    for (let name in user) {
        console.log(name, user[name]);
    }

    console.log(user[password]); // только так можно получить доступ к полю password
})
