function myFunction(){
	var today=new Date();
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Application'){
		document.getElementsByName('monthdateReceived')[0].value=today.getMonth()+1;
		document.getElementsByName('datedateReceived')[0].value=today.getDate();
		document.getElementsByName('yeardateReceived')[0].value=today.getFullYear();
		document.getElementsByName('appModeCd')[0].value='WI';
		document.getElementsByName('firstName')[0].value='Suzanne';
		document.getElementsByName('lastName')[0].value='Shaw';
		document.getElementById('button2');      
    	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Application - Address'){
		document.getElementsByName('streetNumber')[0].value='101';
		document.getElementsByName('streetName2')[0].value='Richmond';
		document.getElementsByName('strType')[0].value='AV';
		document.getElementsByName('dwellingType')[0].value='APT';
		document.getElementsByName('aptNumber')[0].value='101';
		document.getElementsByName('city')[0].value='Helena';
		document.getElementsByName('zipCode5')[0].value='59601';
		document.getElementsByName('residencyCounty')[0].value='Lewis and Clark - 25';
		document.getElementById('form1dynaLocalSubmitButton').click();
		document.getElementById('actionButtonNext').click();
	}   
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Individual - Individual'){
		document.getElementById('gender').value='F';
		document.getElementById('monthdateOfBirth1').value='09';
		document.getElementById('datedateOfBirth1').value='22';
		document.getElementById('yeardateOfBirth1').value='1985';
		document.getElementById('ssn1ssn').value=Math.floor(Math.random() * 899+100);
		document.getElementById('ssn2ssn').value=Math.floor(Math.random() * 99+10);
		document.getElementById('ssn3ssn').value=Math.floor(Math.random() * 8999+1000);
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='File Clearance - Results'){
		document.getElementById('viewAssociatedCases').value='N';
		document.getElementById('establishNewIndividual').value='Y';
		document.getElementById('button2').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Individual - Summary'){
		document.getElementById('button4').click();
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Program - Program'){
		document.getElementById('cash').checked=true;
		document.getElementById('SNAP').checked=true;
		document.getElementById('maFormCd').value='HCS-250';
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Program - Expedited Screening'){
		document.getElementById('expeditedCountableGrossIncome').value='200';
		document.getElementById('expeditedCountableResources').value='200';
		document.getElementById('expeditedRentMortgage').value='10';
		document.getElementById('expeditedMigrant')='N';
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Application - Summary'){
		document.getElementById('workerAssignment').value='500238';
		document.getElementById('button3').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Person Details'){
		document.getElementsByName('verifications')[0].value='HC';
		document.getElementsByName('verificationSource')[0].value='HC';
		document.getElementById('primaryRace').value='AS';
		document.getElementById('ethnicity').value='HL';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Individual Interviewed / Applicant - Details'){
		document.getElementById('interviewMode').value='I';
		document.getElementById('cin').selectedIndex=1;
		document.getElementById('hasBeenInterviewed').value='Y';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Education - Details'){
		document.getElementById('highestLevel').value='KI';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Living Arrangement/Domicile - Details'){
		document.getElementById('livArrangType').value='HO';
		document.getElementById('livArrangApply').value='Y';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Person Demographics - Details'){
		document.getElementsByName('identityDocumentType')[0].value='PPT';
		document.getElementsByName('identityVerification')[0].value='HC';
		document.getElementsByName('identityDocumentViewed')[0].value='OR';
		document.getElementsByName('identityDocumentComments')[0].value='Test';
		document.getElementsByName('citizenship')[0].value='US';
		document.getElementsByName('citizenVerificationCode')[0].value='HC';
		document.getElementsByName('citizenshipDocumentType')[0].value='UPP';
		document.getElementsByName('citizenshipSVESStatus')[0].value='VE';
		document.getElementsByName('citizenshipDocumentViewed')[0].value='ORIG';
		document.getElementsByName('citizenshipDocumentComments')[0].value='Test';
		document.getElementsByName('montanaResident')[0].value='Y';
		document.getElementsByName('residentVerification')[0].value='HC';
		document.getElementsByName('personLiveMontana')[0].value='Y';
		document.getElementsByName('locationVerification')[0].value='HC';
		document.getElementsByName('personMovedToMontana')[0].value='N';
		document.getElementsByName('personRemainMontana')[0].value='Y';
		document.getElementsByName('maritalStatus')[0].value='DI';
		document.getElementsByName('serviceOffered')[0].value='AR';
		document.getElementsByName('whenOffered')[0].value='AC';
		document.getElementsByName('sendVrPacketClient')[0].value='Y';
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Resource Questions'){
		document.getElementById('rtcheck1').value='N';
		document.getElementById('rtcheck5').value='N';
		document.getElementById('rtcheck7').value='N';
		document.getElementById('rtcheck3').value='N';
		document.getElementById('lifeInsuranceResSw').value='N';
		document.getElementById('rtcheck4').value='N';
		document.getElementById('unusualValResSw').value='N';
		document.getElementById('livestockResSw').value='N';
		document.getElementById('mineralRightsResSw').value='N';
		document.getElementById('rtcheck2').value='N';
		document.getElementsByName('assetTransferSw')[0].value='N';
		document.getElementsByName('communitySpouseResourceMaintenanceAllowance')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Income Questions'){
		document.getElementById('incomeEDTestSw').value='N';
		document.getElementById('rtcheck3').value='N';
		document.getElementById('rtcheck1').value='N';
		document.getElementsByName('isSelfEmployed')[0].value='N';
		document.getElementsByName('additionalIncomeExpenses')[0].value='N';
		document.getElementsByName('householdCommunitySpouseIncomeAllowance')[0].value='N';
		document.getElementById('rtcheck5').value='N';
		document.getElementById('actionButtonNext').click();
	}
	if((document.getElementById('PRINTTITLE').innerHTML=='Household Address - Summary')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Person Household Status')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Primary Individual')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Program Request - Summary')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Expense Questions')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Pathways/Tribal NEW Referral - Summary')){
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Wrapup - Run Eligibility'){
		document.getElementById('SUBMIT').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Family Investment Agreement - Details'){								
		document.getElementById('referredTo').value='NEW';
		document.getElementById('monthworcTribalStartDate').value=today.getMonth()+1;
		document.getElementById('dateworcTribalStartDate').value=today.getDate();
		document.getElementById('yearworcTribalStartDate').value=today.getFullYear();
		document.getElementById('phone1programPhoneNumber').value='';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Issuance - Details'){
		document.getElementById('issuanceMethod_0').value='EB';
		document.getElementById('additionalProtectivePayee_0').value='N';
		document.getElementById('actionButtonNext').click();
	}	
}myFunction()
