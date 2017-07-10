function myFunction(){
	var today=new Date();
    if(document.getElementById('PRINTTITLE').innerHTML=='Register Application'){
      appReg();
      }
 
    var appReg = function(){
      document.getElementsByName('monthdateReceived')[0].value=today.getMonth()+1;
      document.getElementsByName('datedateReceived')[0].value=today.getDate();
      document.getElementsByName('yeardateReceived')[0].value=today.getFullYear();
      document.getElementsByName('appModeCd')[0].value='WI';
	  document.body.appendChild(document.createElement('script')).src='http://marak.com/faker.js/js/faker.js';
      document.getElementsByName('firstName')[0].value=faker.name.firstName();
      document.getElementsByName('lastName')[0].value=faker.name.lastName();
      document.getElementById('button2');
      }
    }myFunction()
