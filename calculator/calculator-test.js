
describe('verify it is calculating monthly rate correctly', () => {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount:300000, years: 30, rate:5.00})).toEqual("1610.46");
  });
})

describe('check the number of decimal places', () => {
  it("should return a result with 2 decimal places if it has dimes and pennies", function() {
    const monthly = calculateMonthlyPayment({amount:300000, years: 30, rate:5.00});
    expect(monthly.length - 1 - monthly.indexOf('.')).toEqual(2);
  });
  
  it("should return a result with 2 decimal places even with no dimes or pennies", function() {
    const monthly = calculateMonthlyPayment({amount:300100, years: 30, rate:5.00});
    expect(monthly.length - 1 - monthly.indexOf('.')).toEqual(2);
  });
  
  it("should return a result with 2 decimal places even with no pennies", function() {
    const monthly = calculateMonthlyPayment({amount:300119, years: 30, rate:5.00});
    expect(monthly.length - 1 - monthly.indexOf('.')).toEqual(2);
  });
})


/// etc


// return {
//   amount: +(document.getElementById("loan-amount").value),
//   years: +(document.getElementById("loan-years").value),
//   rate: +(document.getElementById("loan-rate").value)
// }