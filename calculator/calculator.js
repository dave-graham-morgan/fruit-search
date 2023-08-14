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
    rate: +(document.getElementById("loan-rate").value)
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const loanAmount = document.getElementById("loan-amount");
    loanAmount.value = "300000";
    const term = document.getElementById("loan-years");
    term.value = "30";
    const rate = document.getElementById("loan-rate");
    rate.value = "5.00";
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //capture principle
  const P = values.amount;
  //calculate number of payments
  const numOfPayments = values.years * 12;
  //calculate nominal yearly rate
  const rate = (values.rate)/100;
  //calculate monthlyPayment
  const monthlyPayment = (((P * rate)/12) * Math.pow(1+rate/12,numOfPayments)) / ((Math.pow(1+rate/12,numOfPayments))-1);
  //now round to two decimal places
  const rounded = Math.round(monthlyPayment*100)/100;
  //convert to a string so we can make sure we always have two decimals
  let stringed = rounded.toString();
  if(stringed.indexOf('.') === -1){
    stringed = stringed + ".00";
  }else if(stringed.indexOf('.') === stringed.length-2){
    stringed = stringed + "0";
  }

  return stringed;
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentWindow = document.querySelector("#monthly-payment");
  paymentWindow.textContent = "$" + monthly;
}
