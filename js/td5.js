/**
 * 
 * M413 - TD5
 *
 * @author Jean-Michel Bruneau
 *	@copyright UCA - IUT - INFO
 * @version 1.0
 * @date	2021-03-01
 *
 */
"use strict";

const myBasicCalc = {
    // Debug mode
    debug: false,
    // Verbose mode
    verbose: false,
    // onLoad()
    onLoad: function () {
        if (myBasicCalc.debug) console.log(this); // Here, who is « this » ?
        if (myBasicCalc.verbose) console.log('Add a listener event on window for the load event…');
        window.addEventListener('load', myBasicCalc.ready, false);
    },
    options: {

    },

    ready: function (event) {
        if (myBasicCalc.debug) console.log(this); // Here, who is « this » ?
        if (myBasicCalc.verbose) console.log('The whole page was loaded…');
        if (myBasicCalc.debug) console.log(`Event type : ${event.type}, target : ${event.target}`);

        //
        // All your JavaScript code goes here !
        //

        const btns = [7, 8, 9, '/', 4, 5, 6, '*', 3, 2, 1, '-', 0, '.', '=', '+'];
        const operators = ['/', '*', '-', '+'];

        const mybasiccalc = document.getElementById('my-basic-calc');

        //INSERTING INPUT BUTTONS IN THE HTML
        mybasiccalc.innerHTML += `<input id="result" type="text">
        <div id="div-container">`;

        for (let i = 0; i < 16; i++) {
            if (btns[i] == '/' || btns[i] == '*' || btns[i] == '-' || btns[i] == '+') {
                document.getElementById('div-container').innerHTML += `<input type="button" class="btn operator" value="${btns[i]}">`;
            } else if (btns[i] == '=') {
                document.getElementById('div-container').innerHTML += `<input type="button" class="btn equal" value="${btns[i]}">`;
            } else {
                document.getElementById('div-container').innerHTML += `<input type="button" class="btn number" value="${btns[i]}">`;
                console.log()
            }
        }

        mybasiccalc.innerHTML += `</div>
        <input type="button" class="btn clear" value="Erase">`;

        console.log(btns);

        const keys = document.getElementsByClassName('btn');
        const display = document.getElementById('result');

        //CALCULATE
        for (let i = 0; i < keys.length; i++) {
            //clicking on buttons
            keys[i].addEventListener('click', function (e) {
                if (e.target.value == "=") {
                    display.value = parse(display.value);

                } else if (e.target.value == "Erase") {
                    display.value = "";
                } else {
                    display.value = display.value + e.target.value;
                }
            });

            //key pressing/writting
            display.addEventListener('keypress', function (e) {
                if (e.key == "Enter") {
                    display.value = parse(display.value);
                } else {}
            })
        }
    }
}

// Safe alternative to eval() function
function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}



// Load myAppRSS Application
myBasicCalc.debug = true; // Debug mode
myBasicCalc.verbose = true; // Verbose mode
myBasicCalc.onLoad();
