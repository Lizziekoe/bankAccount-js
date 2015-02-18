describe ('BankAccount', function() {
  describe ('deposit', function() {
      it("adds a value to the balance", function(){
      var testAccount = Object.create(BankAccount);
      testAccount.balance = 100;
      testAccount.deposit(25);
      expect(testAccount.balance).to.equal(125);
    });
  });
  describe ('withdraw', function(){
    it("debits a value from the balance", function() {
      var testAccount2 = Object.create(BankAccount);
      testAccount2.balance = 100;
      testAccount2.withdraw(25);
      expect(testAccount2.balance).to.equal(75);
    });
  });
});
