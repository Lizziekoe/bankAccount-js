
var BankAccount = {balance: 0, name: ""};
BankAccount.deposit = function (amount){
  this.balance += amount;
};
BankAccount.withdraw = function (amount){
  this.balance -= amount;
}


$(function(){
  $("#accountForm").submit(function(event){
    event.preventDefault()
    var newAccount = Object.create(BankAccount);
    newAccount.name = $("#name").val();
    newAccount.balance = parseFloat($("#initialDeposit").val());
    $('#currentBalance').text(newAccount.balance);
    $("#transactionForm").submit(function(event){
      event.preventDefault()
      var depositAmount = parseFloat($("#deposit").val());
      var withdrawAmount = parseFloat($("#withdraw").val());
      newAccount.deposit(depositAmount);
      newAccount.withdraw(withdrawAmount);
      $('#currentBalance').text(newAccount.balance);
      $("#deposit").val('0');
      $("#withdraw").val('0');
    });
  });

});
