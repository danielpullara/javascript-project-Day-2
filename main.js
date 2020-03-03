const currency = "USD"
const desiredCurrency = "VND"
const option = currency.toUpperCase() + "-" + desiredCurrency.toUpperCase()

const exchangeRate = 23208; // USD to VND & VND to USD// 
const krwtousd = 1194; // KRW to USD & //
const eurtousd =  0.901075; //EUR to USD//
const inrtousd =  72.7817; // INR to USD //
const krwtoVnd =  19.4844; // KRW to VND //
const eurtoVnd = 25825.29; // EUR to VND //
const inrtoVnd = 319.346; // INR to VND //
const usdtoUsd =  0.901075; //EUR to USD//

let amountInput = document.getElementById ('amount');
let resultArea =  document.getElementById ('result-area');
let from = document.getElementById("from");
let to = document.getElementById("to");

function convertToVnd() { 
    const amount = amountInput.value
    const option = from.value.toUpperCase()+"-"+to.value.toUpperCase()
    if(amount > 0 ){
        switch (option){
            case "INR-USD" :
                resultArea.innerHTML= inrToUsd(amount)
                break;
            case "EUR-USD" :
                resultArea.innerHTML=eurToUsd(amount)
                break;
            case "KRW-USD" :
                resultArea.innerHTML=krwToUsd(amount)
                break;
            case "VND-USD" :
                resultArea.innerHTML=vndToUsd(amount)
                break;
            case "USD-VND":
                resultArea.innerHTML=usdToVnd(amount)
                break;
            case "KRW-VND":
                resultArea.innerHTML=krwToVnd(amount)
                break;
            case "EUR-VND":
                resultArea.innerHTML= eurToVnd(amount)
                break;
            case "INR-VND":
                resultArea.innerHTML=inrToVnd(amount)
                break;
            case "USD-EUR":
                resultArea.innerHTML=usdtoEur(amount)
                break;               
            default : 
            console.log("plsease enter a correct currency")
        }
    } else {
        console.log("please input a valid number")
    }
}

function eurToUsd (amount) {
    const convertedAmount = (amount / eurtousd).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)
    
    return amount +" EUR equals to "+a
    }

function inrToVnd(amount) {
    const convertedAmount = (amount * inrtoVnd).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    return amount+" EUR equals to "+a
}

function eurToVnd(amount) {
    const convertedAmount = (amount * eurtoVnd).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    return amount+" EUR equals to "+a
}

function krwToVnd(amount) {
    const convertedAmount = (amount * krwtoVnd).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    return amount+" KRW equals to "+a
}

function usdToVnd(amount) {
    const convertedAmount = (amount * exchangeRate).toFixed(2)
    const a = new Intl.NumberFormat('en-VN', { style: 'currency', currency: 'VND' }).format(convertedAmount)
    resultArea.innerHTML = `${amount}, USD equals to ${a}`
    // return amount+" EUR equals to "+a
}

function inrToUsd (amount) {
    const convertedAmount = (amount / inrtousd).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)
    
    return amount+" EUR equals to "+a
    }

function eurToUsd (amount) {
    const convertedAmount = (amount * eurtousd).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)
    
    return amount+" EUR equals to "+a
    }

function krwToUsd (amount) {
const convertedAmount = (amount / krwtousd).toFixed(2)
const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)

return amount+" KRW equals to "+a
}
function vndToUsd(amount) {
    const convertedAmount = (amount / exchangeRate).toFixed(2)
    const a = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedAmount)

    return amount+" EUR equals to "+a
}


