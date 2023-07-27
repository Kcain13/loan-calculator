
describe('Monthly Loan Calculator Payment', function () {
  it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
      amount: 40000,
      years: 4,
      rate: 8.2
    };
    expect(calculateMonthlyPayment(values)).toEqual('980.28');
  });


  it("should return a result with 2 decimal places", function () {
    // ..
    const values = {
      amount: 3300,
      years: 4,
      rate: 8.4
    };
    expect(calculateMonthlyPayment(values)).toEqual('81.18')
  });
})

describe('High & Low interest rates', function () {
  it('should handle extremely low interest rates', function () {
    const values = {
      amount: 25000,
      years: 5,
      rate: 0.2
    }
    expect(calculateMonthlyPayment(values)).toEqual('418.79')
  });

  it('should handle extremely high interest rates', function () {
    const values = {
      amount: 62346,
      years: 10,
      rate: 99
    }
    expect(calculateMonthlyPayment(values)).toEqual('5143.93')
  })
})
/// etc
