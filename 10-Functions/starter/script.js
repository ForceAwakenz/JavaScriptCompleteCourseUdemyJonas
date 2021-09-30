'use strict';

// ============================================================
// const secureBooking = function (baseStatus) {
//     let passengerCount = 0;
//     return function(status) {
//         passengerCount++;
//         console.log(passengerCount, (status ?? baseStatus) + 's');
//     }
// }

// const addPassenger = secureBooking();
// const addPilot = secureBooking();
// const addVip = secureBooking('VIP');

// addPassenger('passanger');
// addPassenger('passanger');
// addPassenger('passanger');
// addPilot('pilot');
// addPilot('pilot');
// addVip();
// addVip();
// ============================================================

// const secureBooking = function (a) {
    //     let status = a;
    //     let passengerCount = 0;
    //     return function(status) {
        //         passengerCount++;
        //         console.log(passengerCount, status + 's');
        //     }
        // }
        
        
// ============================================================

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a*2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b*2);
    }
}

g();
f();
