
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 20000, 
    years: 10, 
    rate: 7
  };
  expect (calculateMonthlyPayment(values)).toEqual('232.22');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 19981, 
    years: 10, 
    rate: 7
  }
  expect(calculateMonthlyPayment(values)).toEqual('232.00');
});

