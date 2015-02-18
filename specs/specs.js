describe ('BankAccount', function() {
  describe ('deposit', function() {
      it("adds a deposit to the balance", function(){
      var testAccount = Object.create(BankAccount);
      testAccount.balance = 100;
      testAccount.deposit(25);
      expect(testAccount.balance).to.equal(125);
    });
  });
});
