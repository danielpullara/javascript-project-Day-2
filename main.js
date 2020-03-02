const currency = prompt("Please Input Currency VND | USD");
const desiredCurrency = prompt("enter your desired currency")
const option = currency.toUpperCase() + "-" + desiredCurrency.toUpperCase()

const exchangeRate = 23208; // USD to VND & VND to USD// 
const krwtousd = 1194; // KRW to USD & //
const eurtousd =  0.901075; //EUR to USD//
const inrtousd =  72.7817; // INR to USD //
const krwtoVnd =  19.4844; // KRW to VND //
const eurtoVnd = 25825.29 // EUR to VND //
const inrtoVnd = 319.346 // INR to VND //



function eurToUsd () {
    const convertedAmount = (amount / eurtousd).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)
    
    console.log(amount, "EUR equals to", a)
    }

function inrToVnd() {
    const convertedAmount = (amount * inrtoVnd).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    console.log(amount, "USD equals to", a)
}

function eurToVnd() {
    const convertedAmount = (amount * eurtoVnd).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    console.log(amount, "USD equals to", a)
}

function krwToVnd() {
    const convertedAmount = (amount * krwtoVnd).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    console.log(amount, "USD equals to", a)
}

function usdToVnd() {
    const convertedAmount = (amount * exchangeRate).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    console.log(amount, "USD equals to", a)
}

function inrToUsd () {
    const convertedAmount = (amount / inrtousd).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)
    
    console.log(amount, "INR equals to", a)
    }

function eurToUsd () {
    const convertedAmount = (amount * eurtousd).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)
    
    console.log(amount, "EUR equals to", a)
    }

function krwToUsd () {
const convertedAmount = (amount / krw2usd).toFixed(2)
const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)

console.log(amount, "KRW equals to", a)
}
function vndToUsd() {
    const convertedAmount = (amount / exchangeRate).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)

    console.log(amount, "VND equals to", a)
}



// if (currency.toUpperCase() === "VND") {
//     amount = prompt("How much is that");
//     if (amount > 0) {
//         vndToUsd()
//     }
//     else {
//         console.log("Please input a valid number")
//     }
// }
// else if (currency.toUpperCase() === "USD") {
//     amount = prompt("How much is that?");
//     if (amount > 0) {
//         usdToVnd();
//     }
//     else {
//         console.log("please input a valid number")
//     }

// }
// else {
//     console.log("input a correct currency")
// }

let amount = prompt("amount")
if(amount > 0 ){
    switch (option){
        case "INR-USD" :
            inrToUsd()
            break;
        case "EUR-USD" :
            eurToUsd()
            break;
        case "KRW-USD" :
            krwToUsd()
            break;
        case "VND-USD" :
            vndToUsd()
            break;
        case "USD-VND":
            usdToVnd()
            break;
        case "KRW-VND":
            krwToVnd()
            break;
        case "EUR-VND":
            eurToVnd()
            break;
        case "INR-VND":
            inrToVnd()
            break;
        case "USD-EUR":
            usdtoEur()
            break;               
        default : 
        console.log("plsease enter a correct currency")
    }
} else {
    console.log("please input a valid number")
}

