const calculate = function () {
const monthlyPaymentEl = document.querySelector('.monthlyPayment');

const calculator = document.querySelector('.loan-calculator');

let loanAmount = document.getElementById('loanAmount').value;

let interest = document.getElementById('interest').value;

let monthsToPay = document.getElementById('monthsToPay').value;

  let monthlyPayment = (loanAmount * interest) / (100 * (1 - Math.pow(1 + interest / 100, -monthsToPay)));
  monthlyPaymentEl.textContent = `$${monthlyPayment.toFixed(2)}`;
};


