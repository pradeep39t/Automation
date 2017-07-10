function myFunction(){
	var today=new Date();
	
	function loadScript(url){    
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		head.appendChild(script);
	}
	var appReg = function(){
      document.getElementsByName('monthdateReceived')[0].value=today.getMonth()+1;
      document.getElementsByName('datedateReceived')[0].value=today.getDate();
      document.getElementsByName('yeardateReceived')[0].value=today.getFullYear();
      document.getElementsByName('appModeCd')[0].value='WI';
	  loadScript('http://marak.com/faker.js/js/faker.js');
      document.getElementsByName('firstName')[0].value=faker.name.firstName();
      document.getElementsByName('lastName')[0].value=faker.name.lastName();
      document.getElementById('button2');
    }
    if(document.getElementById('PRINTTITLE').innerHTML=='Register Application'){
      appReg();
      }    
}myFunction()
