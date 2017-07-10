function myFunction(){
    if(document.getElementById('PRINTTITLE').innerHTML=='Register Application'){
      appReg();
      }
 
    var appReg = function(){
      document.getElementsByName('monthdateReceived')[0].value=today.getMonth()+1;
      document.getElementsByName('datedateReceived')[0].value=today.getDate();
      document.getElementsByName('yeardateReceived')[0].value=today.getFullYear();
      document.getElementsByName('appModeCd')[0].value='WI';
      document.getElementsByName('firstName')[0].value='Suzanne';
      document.getElementsByName('lastName')[0].value='Shaw';
      document.getElementById('button2');
      };
    }myFunction()
