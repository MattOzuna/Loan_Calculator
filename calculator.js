window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loan = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");
  loan.value = 10000;
  years.value = 10;
  rate.value = 11;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let UIvalues = getCurrentUIValues();
  calculateMonthlyPayment(UIvalues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount;
  let n = (values.years * 12);
  let i = ((values.rate/100) / 12);
  let monthlyPayments = (Math.round((P * i)/(1-(1+i)**(-n))*100)/100).toFixed(2);
  monthlyPayments = `${monthlyPayments}`;
  updateMonthly(monthlyPayments);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment')
  monthlyPayment.innerText = '$' + monthly
}

