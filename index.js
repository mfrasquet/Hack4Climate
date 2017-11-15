Web3 = require('web3')
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/W0nFbPT8SCEfM5DUCPW6"));

//REsearch project 
abi = JSON.parse('[{"constant":true,"inputs":[],"name":"purchasedCommitment","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"ownerName","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"moneyCommited","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[],"name":"fund","outputs":[],"payable":true,"type":"function","stateMutability":"payable"},{"constant":true,"inputs":[],"name":"energyCommitment","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[],"name":"benefWithdraw","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"moneybenef","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"beneficiaryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"inputs":[{"name":"iniCommitment","type":"uint256"},{"name":"durationInMinutes","type":"uint256"},{"name":"beneficiary","type":"address"}],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"anonymous":false,"inputs":[{"indexed":false,"name":"msgVvalue","type":"uint256"}],"name":"LogValue","type":"event"}]')
origins= web3.eth.contract(abi);
contractAddress='0xbc726b77f595c6006c3be9957f486fd6cc769706'
origins = origins.at(contractAddress);



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

       