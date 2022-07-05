// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase() 
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;  
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const leastFavoriteCustomer = 'no one'

function changeLeastFavoriteCustomer() {
   leastFavoriteCustomer = 'I don\'t want to pick one'
    return leastFavoriteCustomer
}