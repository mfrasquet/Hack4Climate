Web3 = require('web3')
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/W0nFbPT8SCEfM5DUCPW6"));

//Origin Stake

abi = JSON.parse('[{"constant":true,"inputs":[],"name":"purchasedCommitment","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"ownerName","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"moneyCommited","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[],"name":"fund","outputs":[],"payable":true,"type":"function","stateMutability":"payable"},{"constant":true,"inputs":[],"name":"energyCommitment","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[],"name":"benefWithdraw","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"moneybenef","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"beneficiaryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"inputs":[{"name":"iniCommitment","type":"uint256"},{"name":"durationInMinutes","type":"uint256"},{"name":"beneficiary","type":"address"}],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"anonymous":false,"inputs":[{"indexed":false,"name":"msgVvalue","type":"uint256"}],"name":"LogValue","type":"event"}]')
origins= web3.eth.contract(abi);
contractAddress='0xbc726b77f595c6006c3be9957f486fd6cc769706'
origins = origins.at(contractAddress);
//MULTIPLIER=1000000;

function Transfer() {
    sender_address = $("#sender_address").val();
    receiver_address = $("#receiver_name").val();
    value_transfered = $("#value_ex1").val();
    password="";
    var password = prompt("Please enter your password");
    if (password == null || password == "") {
        txt = "User cancelled the prompt.";
    } 
    web3.personal.unlockAccount(sender_address,password,10)
    web3.eth.sendTransaction({from: sender_address, to:receiver_address , value: web3.toWei(value_transfered, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
    
    password="";
      }

      function buyICO() {
        sender_address = $("#sender_address_ex2").val();
        value_transfered = $("#value_ex2").val();
        password="";
        var password = prompt("Please enter your password");
        if (password == null || password == "") {
            txt = "User cancelled the prompt.";
        } 
        web3.personal.unlockAccount(sender_address,password,10)
        expocoin.buy({from: sender_address, value: web3.toWei(value_transfered , 'ether'), gasLimit: 21000, gasPrice: 20000000000})
        
        password="";
          }


      $(document).ready(function() {
        $("#" + "companyName").html(origins.ownerName().toString());  
        $("#" + "contractAddress").html(contractAddress);  
        $("#" + "beneficiary").html(origins.beneficiaryAddress().toString());
        $("#" + "INIenergyComit").html(origins.purchasedCommitment().toNumber()); 
        
        $("#" + "energyComit").html(origins.energyCommitment().toNumber());  
        $("#" + "moneyComit").html(origins.moneyCommited().toNumber()/1000000000000000000);  
        
        var d1 = new Date(origins.deadline().toNumber()*1000);
        console.log(`Constructor: ${d1}`);
        $("#" + "deadline2").html(d1); 
        $("#" + "benefWithdraw").html(origins.moneybenef().toNumber());

         for (var i = 0; i < 7; i++) {
           $("#" + "num_cuenta"+i).html(i+9);             
           $("#" + "Ex1_Add"+i).html(web3.eth.accounts[i+9]);
           $("#" + "Ex1_Add"+i+"_Credit-0").html(web3.fromWei(web3.eth.getBalance(web3.eth.accounts[i+9]), 'ether').toNumber());
           $("#" + "Ex1_Add"+i+"_CreditExpo-0").html(expocoin.balanceOfEC(web3.eth.accounts[i+9]).toNumber()/MULTIPLIER);

        }
          


         
       });

       