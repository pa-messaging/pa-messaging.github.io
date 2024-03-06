function showQuestions() {
    var questionSets = document.querySelectorAll('.question-set');
    questionSets.forEach(function (set) {
        set.classList.remove('visible');
    });

    var selectedOption = document.getElementById('type').value;

    var questionSet = document.getElementById(selectedOption + 'Questions');
    
    if (questionSet) {
        questionSet.classList.add('visible');
    }

    if (selectedOption === 'broker' || selectedOption === 'assister' || selectedOption === 'overflow') {
        nameSection.style.display = 'none';
        hhidSection.style.display = 'none';
    } else if (selectedOption === 'rop') {
        nameSection.style.display = 'none';
        hhidSection.style.display = 'flex';
    } else {
        nameSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
        hhidSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
    }
    
    var notesSection = document.getElementById('notesSection');
    notesSection.style.display = selectedOption !== 'placeholder' ? 'block' : 'none';
}

function generateOutput() {
    var selectedOption = document.getElementById('type').value;
    var questionSet = document.getElementById(selectedOption + 'Questions');
    
    var firstLast = document.getElementById('firstLast').value;
    var hhidField = document.getElementById('hhidField').value;
    
    var enfcarrier = document.getElementById('enfcarrier').value;
    var enfpolicy = document.getElementById('enfpolicy').value;
    var enfplan = document.getElementById('enfplan').value;
    var enfmember = document.getElementById('enfmember').value;
    var enfcarrierstatus = document.getElementById('enfcarrierstatus').value;
    var enfourstatus = document.getElementById('enfourstatus').value;
    var enfoutcome = document.getElementById('enfoutcome').value;
        enfoutcome = enfoutcome.charAt(0).toLowerCase() + enfoutcome.slice(1);
    var enfdob = document.getElementById('enfdob').value;
    var enfaddress = document.getElementById('enfaddress').value;
    var enfssn = document.getElementById('enfssn').value;
    var enftotalpremium = document.getElementById('enftotalpremium').value;
    var enfaptc = document.getElementById('enfaptc').value;
    var enfnet = document.getElementById('enfnet').value;
    var enfdates = document.getElementById('enfdates').value;
    
    var cnfcarrier = document.getElementById('cnfcarrier').value;
    var cnfpolicy = document.getElementById('cnfpolicy').value;
    var cnfplan = document.getElementById('cnfplan').value;
    var cnfmember = document.getElementById('cnfmember').value;
    var cnfcarrierstatus = document.getElementById('cnfcarrierstatus').value;
    var cnfourstatus = document.getElementById('cnfourstatus').value;
    var cnfoutcome = document.getElementById('cnfoutcome').value;
        cnfoutcome = cnfoutcome.charAt(0).toLowerCase() + cnfoutcome.slice(1);
    var cnfdob = document.getElementById('cnfdob').value;
    var cnfaddress = document.getElementById('cnfaddress').value;
    var cnfssn = document.getElementById('cnfssn').value;
    var cnftotalpremium = document.getElementById('cnftotalpremium').value;
    var cnfaptc = document.getElementById('cnfaptc').value;
    var cnfnet = document.getElementById('cnfnet').value;
    var cnfdates = document.getElementById('cnfdates').value;
    
    var tnfcarrier = document.getElementById('tnfcarrier').value;
    var tnfpolicy = document.getElementById('tnfpolicy').value;
    var tnfplan = document.getElementById('tnfplan').value;
    var tnfmember = document.getElementById('tnfmember').value;
    var tnfcarrierstatus = document.getElementById('tnfcarrierstatus').value;
    var tnfourstatus = document.getElementById('tnfourstatus').value;
    var tnfoutcome = document.getElementById('tnfoutcome').value;
        tnfoutcome = tnfoutcome.charAt(0).toLowerCase() + tnfoutcome.slice(1); 
    var tnfdob = document.getElementById('tnfdob').value;
    var tnfaddress = document.getElementById('tnfaddress').value;
    var tnfssn = document.getElementById('tnfssn').value;
    var tnftotalpremium = document.getElementById('tnftotalpremium').value;
    var tnfaptc = document.getElementById('tnfaptc').value;
    var tnfnet = document.getElementById('tnfnet').value;
    var tnfdates = document.getElementById('tnfdates').value;
    
    var snfcarrier = document.getElementById('snfcarrier').value;
    var snfplan = document.getElementById('snfplan').value;
    var snfpolicy = document.getElementById('snfpolicy').value;
    var snfmember = document.getElementById('snfmember').value;
    var snfoutcome = document.getElementById('snfoutcome').value;
        snfoutcome = snfoutcome.charAt(0).toLowerCase() + snfoutcome.slice(1); 
    var snftotalpremium = document.getElementById('snftotalpremium').value;
    var snfaptc = document.getElementById('snfaptc').value;
    var snfcsr = document.getElementById('snfcsr').value;
    var snfnet = document.getElementById('snfnet').value;
    var snfdates = document.getElementById('snfdates').value;
    var snfdob = document.getElementById('snfdob').value;
    var snfssn = document.getElementById('snfssn').value;
    var snfaddress = document.getElementById('snfssn').value;
    
    var billingreason = document.getElementById('billingreason').value;
    var billingcarrier = document.getElementById('billingcarrier').value;
    var billingplan = document.getElementById('billingplan').value;
    var billingpayment = document.getElementById('billingpayment').value;
    var billingpolicy = document.getElementById('billingpolicy').value;
    var billingmember = document.getElementById('billingmember').value;
    var billingdob = document.getElementById('billingdob').value;
    var billingaddress = document.getElementById('billingaddress').value;
    var billingssn = document.getElementById('billingssn').value;
    var billingpremium = document.getElementById('billingpremium').value;
    var billingaptc = document.getElementById('billingaptc').value;
    var billingnet = document.getElementById('billingnet').value;
    
    var reinstatecarrier = document.getElementById('reinstatecarrier').value;
    var reinstateplan = document.getElementById('reinstateplan').value;
    var reinstatepolicy = document.getElementById('reinstatepolicy').value;
    var reinstatereason = document.getElementById('reinstatereason').value;
    var reinstatedob = document.getElementById('reinstatedob').value;
    var reinstateaddress = document.getElementById('reinstateaddress').value;
    var reinstatessn = document.getElementById('reinstatessn').value;
    var reinstatepremium = document.getElementById('reinstatepremium').value;
    var reinstateaptc = document.getElementById('reinstateaptc').value;
    var reinstatenet = document.getElementById('reinstatenet').value;
    
    var enstatuscarrier = document.getElementById('enstatuscarrier').value;
    var enstatusplan = document.getElementById('enstatusplan').value;
    var enstatuspolicy =  document.getElementById('enstatuspolicy').value;
    var enstatusdob = document.getElementById('enstatusdob').value;
    var enstatusaddress = document.getElementById('enstatusaddress').value;
    var enstatusssn = document.getElementById('enstatusssn').value;
    var enstatuspremium = document.getElementById('enstatuspremium').value;
    var enstatusaptc = document.getElementById('enstatusaptc').value;
    var enstatusnet = document.getElementById('enstatusnet').value;
    
    var correctioncarrier = document.getElementById('correctioncarrier').value;
    var correctiontopic = document.getElementById('correctiontopic').value;
    var correctionold = document.getElementById('correctionold').value;
    var correctionupdate = document.getElementById('correctionupdate').value;
    var correctionpolicy = document.getElementById('correctionpolicy').value;
    
    var retropolicy = document.getElementById('retropolicy').value;
    var retrodob = document.getElementById('retrodob').value;
    var retrostart = document.getElementById('retrostart').value;
    var retroterm = document.getElementById('retroterm').value;
    
    var cancelcarrier = document.getElementById('cancelcarrier').value;
    var cancelplan = document.getElementById('cancelplan').value;
    var cancelpolicy = document.getElementById('cancelpolicy').value;
    var cancelreason = document.getElementById('cancelreason').value;
    
    var backdatecarrier = document.getElementById('backdatecarrier').value;
    var backdateplan = document.getElementById('backdateplan').value;
    var backdatepolicy = document.getElementById('backdatepolicy').value;
    var backdatedate = document.getElementById('backdatedate').value;
    var backdatereason = document.getElementById('backdatereason').value;
    
    var aptccarrier = document.getElementById('aptccarrier').value;
    var aptcplan = document.getElementById('aptcplan').value;
    var aptcpolicy = document.getElementById('aptcpolicy').value;
    var aptcamount = document.getElementById('aptcamount').value;
    var aptcwhy = document.getElementById('aptcwhy').value;
    var aptcapp = document.getElementById('aptcapp').value; 
    
    var retrosub = document.getElementById('retrosub').value;
    var retrocarrier = document.getElementById('retrocarrier').value;
    var retromedpolicy = document.getElementById('retromedpolicy').value;
    var retromedterm = document.getElementById('retromedterm').value;
    var retromedgain = document.getElementById('retromedgain').value;
    var retromedmembers = document.getElementById('retromedmembers').value;
    var retromedpa = document.getElementById('retromedpa').value;
    var retromedstarted = document.getElementById('retromedstarted').value;
    var retromeddoc = document.getElementById('retromeddoc').value;
    
    var switchcx = document.getElementById('switchcx').value;
    var switchwrong = document.getElementById('switchwrong').value;
    var switchcarrier = document.getElementById('switchcarrier').value;
    var switchplan = document.getElementById('switchplan').value;
    var switchpolicy = document.getElementById('switchpolicy').value;
    var switchdob = document.getElementById('switchdob').value;
    var switchaddress = document.getElementById('switchaddress').value;
    var switchssn = document.getElementById('switchssn').value;
    var switchtype = document.getElementById('switchtype').value;
    
    var verificationsteps = document.getElementById('verificationsteps').value;
    
    var taxpolicy = document.getElementById('taxpolicy').value;
    var taxinfo = document.getElementById('taxinfo').value;
    var taxreview = document.getElementById('taxreview').value;
    
    var overpolicy = document.getElementById('overpolicy').value;
    var overdependant = document.getElementById('overdependant').value;
    
    var errormessage = document.getElementById('errormessage').value;
    var errorsteps = document.getElementById('errorsteps').value;
    
    var brokername = document.getElementById('brokername').value;
    var brokeremail = document.getElementById('brokeremail').value;
    var brokernum = document.getElementById('brokernum').value;
    
    var assistername = document.getElementById('assistername').value;
    var assisteremail = document.getElementById('assisteremail').value;
    var assisternum = document.getElementById('assisternum').value;
    
    var rop1stname = document.getElementById('rop1stname').value;
    var roplastname = document.getElementById('roplastname').value;
    var ropaptc = document.getElementById('ropaptc').value;
    var ropplan = document.getElementById('ropplan').value;
    var roppolicy = document.getElementById('roppolicy').value;
    var ropexpiration = document.getElementById('ropexpiration').value;
    var ropdate = document.getElementById('ropdate').value;
    
    var posappealreason = document.getElementById('posappealreason').value;
    var posappealfirst = document.getElementById('posappealfirst').value;
    var posappealoutcome = document.getElementById('posappealoutcome').value;
    var posappealres = document.getElementById('posappealres').value;
    var posappealscaller = document.getElementById('posappealscaller').value;
    var posappealscallback = document.getElementById('posappealscallback').value;
    var posappealhours = document.getElementById('posappealhours').value;
    
    var nonappealreason = document.getElementById('nonappealreason').value;
    var nonappealfirst = document.getElementById('nonappealfirst').value;
    var nonappealoutcome = document.getElementById('nonappealoutcome').value;
    var nonappealres = document.getElementById('nonappealres').value;
    var nonappealscaller = document.getElementById('nonappealscaller').value;
    var nonappealscallback = document.getElementById('nonappealscallback').value;
    var nonappealhours = document.getElementById('nonappealhours').value;
    
    var removereason = document.getElementById('removereason').value;
    
    var maissuecode = document.getElementById('maissuecode').value;
    var maissuesteps = document.getElementById('maissuesteps').value;

    var unsubemail = document.getElementById('unsubemail').value;

    var returneddate = document.getElementById('returneddate').value;
    var outreachdate = document.getElementById('outreachdate').value;

    var highcallreason = document.getElementById('highcallreason').value;
    var highcallnumber = document.getElementById('highcallnumber').value;

    var revvendortax = document.getElementById('revvendortax').value;
    var revvendorissue = document.getElementById('revvendorissue').value;

    var revdortax = document.getElementById('revdortax').value;
    var revdorissue = document.getElementById('revdorissue').value;
    
    toggleText();
    toggleTextAble();
    toggleTextJira();
    toggleEnfRep();
    toggleCnfRep();
    toggleTnfRep();
    toggleErrorSs();
    toggleReinstateRep();
    toggleAddNotes();
    togglePosEscalate();
    toggleNonEscalate();
    toggleBackdateOther();
    
    if (questionSet) {
        var outputText = "";
        var subjectText = "";
        var ticTypeText = "";
        var ticSubText = "";
        var ticPriorityText = "";

        questionSet.querySelectorAll('input[type="text"]').forEach(function (input) {
            var question = input.previousElementSibling.innerText.replace(':', '').trim();
            var answer = input.value;
        });
        
        switch (selectedOption) {
        case 'enf':
            ticTypeText += "Issuer";
            ticSubText += "Insurer";
            ticPriorityText += "Medium";

            subjectText += "Enrollment Not Found: " + enfcarrier;	
                
            outputText += firstLast + " (ID:" + hhidField + ") stated that " + enfcarrier + " shows Policy ID#" + enfpolicy + " and " + enfplan + " for Member ID#" + enfmember + " as " + enfcarrierstatus + " on their end, but this plan shows " + enfourstatus + " for " + firstLast + " in our system. Desired outcome would be " + enfoutcome + "." + "<br><br>" + "Customer Name: " + firstLast + "<br>" + "DOB: " + enfdob + "<br>" + "Full Address: " + enfaddress + "<br>" + "Last four digits of SSN: " + enfssn + "<br>" + "Enrollment Premium Amount: " + enftotalpremium + "<br>" + "APTC: " + enfaptc + "<br>" + "Net Premium: " + enfnet + "<br>" + "Effective Dates: " + enfdates + enfRepresentative;
            outputText += additionalNotes;
            break;
                
        case 'cnf':
            ticTypeText += "Issuer";
            ticSubText += "Insurer";
            ticPriorityText += "Medium";

            subjectText += "Cancellation Not Found: " + cnfcarrier;
                
            outputText += firstLast + " (ID:" + hhidField + ") stated that " + cnfcarrier + " shows Policy ID#" + cnfpolicy + " and " + cnfplan + " for Member ID#" + cnfmember + " as " + cnfcarrierstatus + " on their end, but this plan shows " + cnfourstatus + " for " + firstLast + " in our system. Desired outcome would be " + cnfoutcome + "." + "<br><br>" + "Customer Name: " + firstLast + "<br>" + "DOB: " + cnfdob + "<br>" + "Full Address: " + cnfaddress + "<br>" + "Last four digits of SSN: " + cnfssn + "<br>" + "Enrollment Premium Amount: " + cnftotalpremium + "<br>" + "APTC: " + cnfaptc + "<br>" + "Net Premium: " + cnfnet + "<br>" + "Effective Dates: " + cnfdates + cnfRepresentative;
            outputText += additionalNotes;
            break;
                
        case 'tnf':
            ticTypeText += "Issuer";
            ticSubText += "Insurer";
            ticPriorityText += "Medium";

            subjectText += "Termination Not Found: " + tnfcarrier;
                
            outputText += firstLast + " (ID:" + hhidField + ") stated that " + tnfcarrier + " shows Policy ID#" + tnfpolicy + " and " + tnfplan + " for Member ID#" + tnfmember + " as " + tnfcarrierstatus + " on their end, but this plan shows " + tnfourstatus + " for " + firstLast + " in our system. Desired outcome would be " + tnfoutcome + "." + "<br><br>" + "Customer Name: " + firstLast + "<br>" + "DOB: " + tnfdob + "<br>" + "Full Address: " + tnfaddress + "<br>" + "Last four digits of SSN: " + tnfssn + "<br>" + "Enrollment Premium Amount: " + tnftotalpremium + "<br>" + "APTC: " + tnfaptc + "<br>" + "Net Premium: " + tnfnet + "<br>" + "Effective Dates: " + tnfdates + tnfRepresentative;
            outputText += additionalNotes;
            break;
                
        case 'snf':
            ticTypeText += "Issuer";
            ticSubText += "Insurer";
            ticPriorityText += "Medium";

            subjectText += "Subsidy Not Found: " + snfcarrier;
            
            outputText += firstLast + " (ID:" + hhidField + ") stated that " + snfcarrier + " does not see subsidies on their enrollment. Customer is enrolled in " + snfplan + " with Policy ID#" + snfpolicy + " for Member ID#" + snfmember + ". Desired outcome is: " + snfoutcome + "<br><br>" + "Customer Name: " + firstLast + "<br>" + "DOB: " + snfdob + "<br>" + "Full Address: " + snfaddress + "<br>" + "Last four digits of SSN: " + snfssn + "<br>" + "Enrollment Premium Amount: " + snftotalpremium + "<br>" + "APTC: " + snfaptc + "<br>" + "CSRs: " + snfcsr + "<br>" + "Net Premium: " + snfnet + "<br>" + "Effective Dates: " + snfdates;
            outputText += additionalNotes;
            break;
                
        case 'billing':
            ticTypeText += "Enrollment";
            ticSubText += "Insurer - Billing Issues";
            ticPriorityText += "Medium";

            subjectText += "Billing Issues: " + billingcarrier;	
                
            outputText += firstLast + " (ID:" + hhidField + ") called in requesting " + billingreason + " for enrollment " + billingcarrier + ": " + billingplan + " in the amount of $" + billingpayment + ". Customer has already contacted the carrier directly and the carrier redirected the customer to Pennie. Please investigate the billing issue for Policy ID#" + billingpolicy + " with Member ID#" + billingmember + "." + "<br><br>" + "Customer Name: " + firstLast + "<br>" + "DOB: " + billingdob + "<br>" + "Full Address: " + billingaddress + "<br>" + "Last four digits of SSN: " + billingssn + "<br>" + "Enrollment Premium Amount: " + billingpremium + "<br>" + "APTC: " + billingaptc + "<br>" + "Net Premium: " + billingnet;
            outputText += additionalNotes;
            break;
                
        case 'reinstatement':
            ticTypeText += "Issuer";
            ticSubText += "Insurer";
            ticPriorityText += "Medium";

            subjectText += "Reinstatement Request: " + reinstatecarrier;
                
            outputText += firstLast + " (ID:" + hhidField + ") called in requesting their enrollment " + reinstatecarrier + ": " + reinstateplan + " for Policy ID#" + reinstatepolicy + " to be reinstated. Plan was cancelled due to " + reinstatereason + "." + "<br><br>" + "Customer Name: " + firstLast + "<br>" + "DOB :" + reinstatedob + "<br>" + "Full Address: " + reinstateaddress + "<br>" + "Last four digits of SSN: " + reinstatessn + "<br>" + "Enrollment Premium Amount: " + reinstatepremium + "<br>" + "APTC: " + reinstateaptc + "<br>" + "Net Premium: " + reinstatenet + reinstateRepresentative;
            outputText += additionalNotes;
            break;
        
        case 'enstatus':
            ticTypeText += "Enrollment";
            ticSubText += "Insurer - Billing Issues";
            ticPriorityText += "Medium";

            subjectText += "Enrollment Status Pending";
                
            outputText += firstLast + " (ID:" + hhidField + ") called in requesting their enrollment " + enstatuscarrier + ": " + enstatusplan + " for Policy ID#" + enstatuspolicy + " to be confirmed. Enrollment status is currently showing as Pending." + "<br><br>" + "Customer Name: " + firstLast + "<br>" + "DOB :" + enstatusdob + "<br>" + "Full Address: " + enstatusaddress + "Last four digits of SSN: " + enstatusssn + "<br>" + "Enrollment Premium Amount: " + enstatuspremium + "<br>" + "APTC: " + enstatusaptc + "<br>" + "Net Premium: " + enstatusnet;
            outputText += additionalNotes;
            break;
                
        case 'correction':
            ticTypeText += "Issuer";
            ticSubText += "Insurer";
            ticPriorityText += "Medium";

            subjectText += correctiontopic + " Correction";
                
            outputText += firstLast + " (ID:" + hhidField + ") stated " + correctioncarrier + " has their " + correctiontopic + " displayed as " + correctionold + ", but Pennie correctly reflects their " + correctiontopic + " as " + correctionupdate + " on Policy ID#" + correctionpolicy + ".";
            outputText += additionalNotes;
            break;
                
        case 'retro':
            ticTypeText += "Issuer";
            ticSubText += "Retroactive Termination";
            ticPriorityText += "Medium";

            subjectText += "30-Day Retroactice Termination Request: " + retrocarrier;
                
            outputText += "Policy ID: " + retropolicy + "<br>" + "Subscriber: " + retrosub + "<br>" + "Date of Birth: " + retrodob + "<br>" + "Coverage Start Date: " + retrostart + "<br>" + "Requested Termination Date: " + retroterm + "<br><br>" + firstLast + " (ID:" + hhidField + ") has requested retroactive termination of " + retrosub + "'s coverage back to the requested coverage end date above. Customer has already attested that they have other coverage, and the customer is not aware of any pharmacy claims after the requested termination date.";
            outputText += additionalNotes;
            break;
                
        case 'cancellation':
            ticTypeText += "Enrollment";
            ticSubText += "Enrollment Cancellation";
            ticPriorityText += "Medium";

            subjectText +=	"Cancellation Request: " + cancelcarrier;
                
            outputText += firstLast + " (ID:" + hhidField + ") called in requesting their enrollment from " + cancelcarrier + " on the plan " + cancelplan + ", with the Policy ID#" + cancelpolicy + ", to be cancelled. Customer reason for cancellation is " + cancelreason + ".";
            outputText += additionalNotes;
            break;
                
        case 'backdate':
            ticTypeText += "Triage";
            ticSubText += "Triage";
            ticPriorityText += "Medium";

            subjectText += "Backdate Termination Request";
                
            outputText += firstLast + " (ID:" + hhidField + ") called in requesting to have their enrollment " + backdatecarrier + ": " + backdateplan + " with Policy ID#" + backdatepolicy + " to be backdated for " + backdatedate + " termination date. The customer's reason for termination is because" + backdatereason + "." + otherCoverageStart;
            outputText += additionalNotes;
            break;
                
        case 'aptc':
            ticTypeText += "Triage";
            ticSubText += "Triage";
            ticPriorityText += "Medium";

            subjectText += "Apply APTC Request";
                
            outputText += firstLast + " (ID:" + hhidField + ") is requesting APTC to be applied to their enrollment " + aptccarrier + ": " + aptcplan + " with the Policy ID#" + aptcpolicy + ". APTC amount is $" + aptcamount + " and should be applied to the customer's account based off their application date. The APTC needs to be applied because " + aptcwhy + "<br><br>" + "Application Case Number: " + aptcapp;
            outputText += additionalNotes;
            break;
                
        case 'retromed':
            ticTypeText += "Triage";
            ticSubText += "Triage";
            ticPriorityText += "Medium";

            subjectText += "Retroactive Term - Medicaid";
                
            outputText += firstLast + " (ID:" + hhidField + ") is requesting to terminate Policy ID#" + retromedpolicy + " effective " + retromedterm + " due to the gain of Medicaid effective " + retromedgain + " for the following member(s):" + "<br>" + retromedmembers + "<br><br>" + "Customer enrolled in coverage through Pennie: " + retromedpa + "<br>" + "Enrolled in Medicaid or CHIP with retroactive coverage start date: " + retromedstarted + "<br>" + "Advised customer to provide documentation showing the following: " + retromeddoc + "<br>" + "A. Which family Members are enrolled in Medicaid or CHIP." + "<br>" + "B. Date the Medicaid or CHIP began." + "<br>" + "C. Date the notice was generated and/or mailed to the customer. Issue reported within 60 days of receipt of eligibility notice from Mediciad or CHIP.";
            outputText += additionalNotes;
            break;
                
        case 'switch':
            ticTypeText += switchtype;
            ticSubText += switchtype;
            ticPriorityText += "Medium";

            subjectText += "Primary/Self Switch";
                
            outputText += firstLast + " (ID:" + hhidField + ") called in reporting there is an error on their enrollment. " + switchcx + " is incorrectly listed as " + switchwrong + " when they should be listed as SELF on the enrollment. Please investigate enrollment " + switchcarrier + ": " + switchplan + " with Policy ID#" + switchpolicy + "." + "<br><br>" + "Name: " + firstLast + "<br>" + "DOB: " + switchdob + "<br>" + "Full Address: " + switchaddress + "<br>" + "Last four digits of SSN: " + switchssn;
            outputText += additionalNotes;
            break;
                
        case 'verification':
            ticTypeText += "Technical";
            ticSubText += "Technical";
            ticPriorityText += "Medium";

            subjectText += "Verification Error";
                
            outputText += firstLast + " (ID:" + hhidField + ") called in stating their dashboard is requesting documents, but when clicking on upload documents, everything is showing verified. I tried this on my end and received the same result as the customer." + "<br><br>" + "Other troubleshooting included: " + verificationsteps;
            outputText += additionalNotes;
            break;
                
        case 'broker':
            ticTypeText += "Broker";
            ticSubText += "Account Access";
            ticPriorityText += "Medium";

            subjectText += "Broker Unable to Access Account";
                
            outputText += "Broker " + brokername + " called in due to being locked out of their account. I checked under users to make sure the account is active and provided the broker with their security answer to reset their password. The reset was unsuccessful. Confirmed the broker's login email address is " + brokeremail + "<br><br>" + "Callback Number: " + brokernum;
            outputText += additionalNotes;
            break;
                
        case 'assister':
            ticTypeText += "Assister";
            ticSubText += "Account Access";
            ticPriorityText += "Medium";

            subjectText += "Assister Unable to Access Account";
                
            outputText += "Assister " + assistername + " called in due to being locked out of their account. I checked under users to make sure the account is active. The assister is still having trouble resetting their password on their own. Confirmed assister's login email address is " + assisteremail + "<br><br>" + "Callback Number: " + assisternum;
            outputText += additionalNotes;
            break;
                
        case 'tax':
            ticTypeText += "1095-A Request";
            ticSubText += "1095-A Request";
            ticPriorityText += "Medium";

            subjectText += "1095-A Correction";
                
            outputText += firstLast + "'s (ID:" + hhidField + ") 1095-A Tax Form needs the following corrected for Policy ID#" + taxpolicy + ": " + taxinfo + "<br><br>" + "This issue has been reviewed by TL/SUP: " + taxreview;
            outputText += additionalNotes;
            break;
                
        case 'over':
            ticTypeText += "Triage";
            ticSubText += "Triage";
            ticPriorityText += "Medium";

            subjectText += "HH with 26-year-old Dependant";
                
            outputText += firstLast + " (ID:" + hhidField + ") has 26-year-old dependent on enrollment (Policy ID#" + overpolicy + "). This dependent " + overdependant + " has been removed from previous enrollments on this account effective 1/1 and added to a plan of their own effective 1/1.";
            outputText += additionalNotes;
            break;
                
        case 'error':
            ticTypeText += "Technical";
            ticSubText += "Technical";
            ticPriorityText += "Medium";

            subjectText += "Technical Issue";
                
            outputText += firstLast + " (ID:" + hhidField + ") called in needing assistance with their account. Customer reported they're receiving this error: " + errormessage + ". I tried this on my end and received the same error message." + "<br><br>" + "The steps to get to the error message are: " + errorsteps + errorScreenshot;
            outputText += additionalNotes;
            break;
                
        case 'rop':
            ticTypeText += "ROP";
            ticSubText += "ROP";
            ticPriorityText += "Medium";

            subjectText += "Verification Document for ROP Reinstatement";
                
            outputText += rop1stname + " " + roplastname + " (ID:" + hhidField + ") called in requesting reinstatement of the APTC amount of $" + ropaptc + " on the plan " + ropplan + " with Policy ID#" + roppolicy + " due to the expiration of ROP on " + ropexpiration + "<br><br>" + "#Verbal_Attestation_Completed_By_" + rop1stname + "_" + roplastname + "_For_" + ropaptc + "_On_" + ropdate;
            outputText += additionalNotes;
            break;
                
        case 'posappeal':
            ticTypeText += "Complaint";
            ticSubText += "Eligibility (other customer) or Other (customer caller)";
            ticPriorityText += "Medium";

            subjectText += "Complaint - Possible Appeal";
                
            outputText += firstLast + " (ID:" + hhidField + ") mentioned filing an appeal due to " + posappealreason + ". The customer was informed " + posappealfirst + ". I have followed the appeal escalation process. The customer's desired outcome is " + posappealoutcome + "." + posEscalated + "<br><br>" + "Resolution you proposed: " + posappealres + "<br><br>" + "Please reach out to " + posappealscaller + " at " + posappealscallback + " between the hours of " + posappealhours;
            outputText += additionalNotes;
            break;
                
        case 'nonappeal':
            ticTypeText += "Complaint";
            ticSubText += "Eligibility (other customer) or Other (customer caller)";
            ticPriorityText += "Medium";

            subjectText += "Complaint - Non-Appealable";
                
            outputText += firstLast + " (ID:" + hhidField + ") mentioned filing an appeal to " + nonappealreason + ". The customer was informed " + nonappealfirst + ". I have followed the appeal escalation process. The customer's desired outcome is " + nonappealoutcome + "." + nonEscalated + "<br><br>" + "Resolution you proposed: " + nonappealres + "<br><br>" + "Please reach out to " + nonappealscaller + " at " + nonappealscallback + " between the hours of " + nonappealhours;
            outputText += additionalNotes;
            break;
                
        case 'text':
            ticTypeText += "Feedback";
            ticSubText += "Text Message Complaints";
            ticPriorityText += "Medium";

            subjectText += "Text / SMS Complaint";
                
            outputText += firstLast + " (ID:" + hhidField + ") has requested cease of Text / SMS messaging from Pennie. The customer was informed to reply STOP to opt out of text messages and " + textReceivedText + " received confirmation of the unsubscribe." + "<br><br>" + "Customer was " + textAbleText + " to reply STOP." + "<br>" + "A JIRA " + textJiraText + " been created." + "<br>" + textJiraNum;
            outputText += additionalNotes;
            break;
                
        case 'maissue':
            ticTypeText += "Technical";
            ticSubText += "Technical";
            ticPriorityText += "Medium";

            subjectText += "MA Account Access Issue";
                
            outputText += firstLast + " (ID:" + hhidField + ") called in needing assistance with claiming their account. Customer reported they're receiving this error " + maissuecode + " after " + maissuesteps + ". I tested this on my end and received the same error message. I completed the following workarounds:" + "<br><br>" + "1. Only one access code was generated after attempting with the original access code." + "<br>" + "2. I confirmed the customer is entering their information as presented in the application instead of basic info (case sensitive, hyphenated last names, middle initials, spaces, county, etc.)" + "<br>" + "3. I confirmed the customer was unable to claim their account using their SSN.";
            outputText += additionalNotes;
            break;
                
        case 'remove':
            ticTypeText += "JIRA";
            ticSubText += "DNC";
            ticPriorityText += "Critical";

            subjectText += "Pennie Account Removal";	
                
            outputText += firstLast + " (ID:" + hhidField + ") would like to be completely removed from Pennie's system due to " + removereason + ". Customer account has been notated and the call has been dispositioned as DNC.";
            outputText += additionalNotes;
            break;

        case 'unsub':
            ticTypeText += "Salesforce Emails Preference";
            ticSubText += "Salesforce EML Preference CR";
            ticPriorityText += "Medium";

            subjectText += "SF Promotional EML CR";	
                
            outputText += firstLast + " (ID:" + hhidField + ") does not want to receive promotional emails at " + unsubemail + ". Please change pref.";
            outputText += additionalNotes;
            break;
         
        case 'faxunassigned':
            ticTypeText += "Fax";
            ticSubText += "Fax";
            ticPriorityText += "Medium";

            subjectText += "Unassigned Document";	
                
            outputText += firstLast + " (ID:" + hhidField + ") submitted a document via fax. However, there are no corresponding tickets for the fax received.";
            outputText += additionalNotes;
            break;
        
        case 'faxreturned':
            ticTypeText += "Fax";
            ticSubText += "Fax";
            ticPriorityText += "Medium";

            subjectText += "Returned Notice";	
                
            outputText += "Returned notice received for " + firstLast + " (ID:" + hhidField + ") on " + returneddate + ". Secured inbox message sent to claimed account on " + outreachdate;
            outputText += additionalNotes;
            break;

        case 'highcall':
            ticTypeText += "Callback";
            ticSubText += "High Volume Callback";
            ticPriorityText += "Medium";

            subjectText += "High Call Volume Callback Ticket";	
                
            outputText += firstLast + " (ID:" + hhidField + ") called in during our high call volume protocol due to " + highcallreason + ". Customer would like to be called back at " + firstLast + ", " + highcallnumber;
            outputText += additionalNotes;
            break;

        case 'overflow':
            ticTypeText += "OEP Overflow";
            ticSubText += "Jan 2024 - SEP Effective Date Request";
            ticPriorityText += "Medium";

            subjectText += "Effective Date Change";	
                
            outputText += "Customer qualifies for the 1/1 effective date based on Exceptional Circumstances SEP.";
            outputText += additionalNotes;
            break;

        case 'revfiled':
            ticTypeText += "P2P Ticket";
            ticSubText += "P2P REV -1882 Filed";
            ticPriorityText += "Medium";

            subjectText += "Path to Pennie SEP";	
                
            outputText += "Cx " + firstLast + " (ID:" + hhidField + ") stated they filed REV-1882 form and verbally attested to statement(s) to qualify for the Path to Pennie SEP.";
            outputText += additionalNotes;
            break;

        case 'revvendor':
            ticTypeText += "P2P Ticket";
            ticSubText += "REV-1882 Not Avail (Vendor Supported)";
            ticPriorityText += "";

            subjectText += "Path to Pennie SEP";	
                
            outputText += "Cx " + firstLast + " (ID:" + hhidField + ") stated they filed their taxes with " + revvendortax + " but " + revvendorissue + " and they verbally attested to the statement(s). Cx was advised that this ticket will not be sent to DOR for validation.";
            outputText += additionalNotes;
            break;

        case 'revdor':
            ticTypeText += "P2P Ticket";
            ticSubText += "REV-1882 Not Avail (Not Supported-DOR)";
            ticPriorityText += "Medium";

            subjectText += "Path to Pennie SEP";	
                
            outputText += "Cx " + firstLast + " (ID:" + hhidField + ") stated they filed their taxes with " + revdortax + " but " +revdorissue + " and they verbally attested to the statement(s). Cx was advised that this is a ticket for DOR to review their eligibility and provided with next steps to check account for once ticket is reviewed.";
            outputText += additionalNotes;
            break;

        default:
            break;
    }

        document.getElementById('output').innerHTML = outputText;
        document.getElementById('subject').innerHTML = subjectText;
        document.getElementById('ticType').innerHTML = ticTypeText;
        document.getElementById('ticSub').innerHTML = ticSubText;
        document.getElementById('ticPriority').innerHTML = ticPriorityText;
        
        var outputPanel = document.getElementById('output-panel');
        outputPanel.style.width = '100%';
        outputPanel.style.margin = '10px';
        outputPanel.style.padding = '20px';
        outputPanel.style.borderColor = 'forestgreen';
        outputPanel.style.borderWidth = '5px';
        outputPanel.style.borderStyle = 'solid';
        outputPanel.style.boxShadow = '0 0 8px 8px rgba(34, 139, 34, 0.4)';
        
        document.getElementById('copy-output-button').classList.add('generated');
        document.getElementById('copy-subject-button').classList.add('generated');
    }
}

function toggleText() {
    var textReceivedCheckbox = document.getElementById('textreceived');
    var textReceived = textReceivedCheckbox.checked;

    if (textReceived) {
        textReceivedText = "has";
    } else {
        textReceivedText = "has not";
    }
}

function toggleTextAble() {
    var textAbleCheckbox = document.getElementById('textable');
    var textAble = textAbleCheckbox.checked;

    if (textAble) {
        textAbleText = "able";
    } else {
        textAbleText = "unable";
    }
}

function toggleTextJira() {
    var textJiraCheckbox = document.getElementById('textjira');
    var textJiraNumber = document.getElementById('textjiranum');
    var textJira = textJiraCheckbox.checked;

    if (textJira) {
        textJiraText = "has";
        textJiraNum = "JIRA Ticket Number: " + textJiraNumber.value;
        document.getElementById('textjirahide').classList.remove('hidden');
    } else {
        textJiraText = "has not";
        document.getElementById('textjirahide').classList.add('hidden');
        textJiraNum = '';
    }
}

function toggleEnfRep() {
    var enfRepCheckbox = document.getElementById('enfrep');
    var enfRepName = document.getElementById('enfrepname');
    var enfRep = enfRepCheckbox.checked;

    if (enfRep) {
        enfRepresentative = "<br><br>" + "Carrier Representative's name: " + enfRepName.value;
        document.getElementById('enfrephide').classList.remove('hidden');
    } else {
        enfRepresentative = '';
        document.getElementById('enfrephide').classList.add('hidden');
    }
}

function toggleErrorSs() {
    var errorSsCheckbox = document.getElementById('errorss');
    var errorSs = errorSsCheckbox.checked;

    if (errorSs) {
        errorScreenshot = "<br><br>" + "A screenshot of the issue has been attached to this ticket.";
    } else {
        errorScreenshot = '';
    }
}

function toggleCnfRep() {
    var cnfRepCheckbox = document.getElementById('cnfrep');
    var cnfRepName = document.getElementById('cnfrepname');
    var cnfRep = cnfRepCheckbox.checked;

    if (cnfRep) {
        cnfRepresentative = "<br><br>" + "Carrier Representative's name: " + cnfRepName.value;
        document.getElementById('cnfrephide').classList.remove('hidden');
    } else {
        cnfRepresentative = '';
        document.getElementById('cnfrephide').classList.add('hidden');
    }
}

function toggleTnfRep() {
    var tnfRepCheckbox = document.getElementById('tnfrep');
    var tnfRepName = document.getElementById('tnfrepname');
    var tnfRep = tnfRepCheckbox.checked;

    if (tnfRep) {
        tnfRepresentative = "<br><br>" + "Carrier Representative's name: " + tnfRepName.value;
        document.getElementById('tnfrephide').classList.remove('hidden');
    } else {
        tnfRepresentative = '';
        document.getElementById('tnfrephide').classList.add('hidden');
    }
}

function togglePosEscalate() {
    var posEscalateCheckbox = document.getElementById('posescalate');
    var posNames = document.getElementById('posnames');
    var posEscalateNames = posEscalateCheckbox.checked;

    if (posEscalateNames) {
        posEscalated = "<br><br>" + "The call was escalated and handled by the following CSR(s):" + "<br>" + posNames.value;
        document.getElementById('posescalatehide').classList.remove('hidden');
    } else {
        posEscalated = '';
        document.getElementById('posescalatehide').classList.add('hidden');
    }
}

function toggleNonEscalate() {
    var nonEscalateCheckbox = document.getElementById('nonescalate');
    var nonNames = document.getElementById('nonnames');
    var nonEscalateNames = nonEscalateCheckbox.checked;

    if (nonEscalateNames) {
        nonEscalated = "<br><br>" + "The call was escalated and handled by the following CSR(s):" + "<br>" + nonNames.value;
        document.getElementById('nonescalatehide').classList.remove('hidden');
    } else {
        nonEscalated = '';
        document.getElementById('nonescalatehide').classList.add('hidden');
    }
}

function toggleReinstateRep() {
    var reinstateRepCheckbox = document.getElementById('reinstaterep');
    var reinstateRepName = document.getElementById('reinstaterepname');
    var reinstateRep = reinstateRepCheckbox.checked;

    if (reinstateRep) {
        reinstateRepresentative = "<br><br>" + "Carrier Representative " + reinstateRepName.value + " was also on the line. Customer and carrier rep were advised that reinstatement must go to carrier team and may or may not be granted. Final determination will occur once the ticket is processed.";
        document.getElementById('reinstaterephide').classList.remove('hidden');
    } else {
        reinstateRepresentative = '';
        document.getElementById('reinstaterephide').classList.add('hidden');
    }
}

function toggleBackdateOther() {
    var backdateOtherCheckbox = document.getElementById('backdateother');
    var backdateStart = document.getElementById('backdatestart');
    var otherCoverage = backdateOtherCheckbox.checked;

    if (otherCoverage) {
        otherCoverageStart = "<br><br>" + "The customer's other coverage will be going into effect starting " + backdateStart.value + ". The customer has also been advised that they will need to submit documentation regarding their other coverage.";
        document.getElementById('backdatehide').classList.remove('hidden');
    } else {
        otherCoverageStart = '';
        document.getElementById('backdatehide').classList.add('hidden');
    }
}

function toggleAddNotes() {
    var addNotesCheckbox = document.getElementById('addnotes');
    var notesField = document.getElementById('notesField');
    var addNotes = addNotesCheckbox.checked;

    if (addNotes) {
        additionalNotes = "<br><br>" + notesField.value;
        document.getElementById('noteshide').classList.remove('hidden');
    } else {
        additionalNotes = '';
        document.getElementById('noteshide').classList.add('hidden');
    }
}

function clearForm() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="checkbox"], select, textarea');
    
    inputs.forEach(function (input) {
        if (input.type === 'checkbox') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });    
    
    document.getElementById('noteshide').classList.add('hidden');
    document.getElementById('backdatehide').classList.add('hidden');
    document.getElementById('reinstaterephide').classList.add('hidden');
    document.getElementById('nonescalatehide').classList.add('hidden');
    document.getElementById('posescalatehide').classList.add('hidden');
    document.getElementById('tnfrephide').classList.add('hidden');
    document.getElementById('cnfrephide').classList.add('hidden');
    document.getElementById('enfrephide').classList.add('hidden');
    document.getElementById('textjirahide').classList.add('hidden');

    document.getElementById('firstLast').value = '';
    document.getElementById('nameSection').style.display = 'none';
    
    document.getElementById('hhidField').value = '';
    document.getElementById('hhidSection').style.display = 'none';

    document.getElementById('notesField').value = '';
    document.getElementById('notesSection').style.display = 'none';

    document.getElementById('type').selectedIndex = 0;

    var questionSets = document.querySelectorAll('.question-set');
    questionSets.forEach(function (set) {
        set.classList.remove('visible');
    });

    document.getElementById('subject').innerHTML = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('ticType').innerHTML = '';
    document.getElementById('ticSub').innerHTML = '';
    document.getElementById('ticPriority').innerHTML = '';

    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.width = '100%';
    outputPanel.style.margin = '10px';
    outputPanel.style.padding = '20px';
    outputPanel.style.borderColor = 'mediumslateblue';
    outputPanel.style.borderWidth = '3px';
    outputPanel.style.borderStyle = 'solid';
    outputPanel.style.boxShadow = 'none';

    document.getElementById('copy-output-button').classList.remove('generated');
    document.getElementById('copy-subject-button').classList.remove('generated');
}

function copySubject() {
    var subjectContent = document.getElementById('subject').innerText;

    var textarea = document.createElement('textarea');
    textarea.value = subjectContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Subject copied to clipboard!');
}

function copyOutput() {
    var outputContent = document.getElementById('output').innerText;

    var textarea = document.createElement('textarea');
    textarea.value = outputContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Ticket copied to clipboard!');
}

function handleCheckboxKeyPress(event) {
    if (event.key === 'Enter') {
      this.checked = !this.checked;
    }
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('keydown', handleCheckboxKeyPress);
  });

function scrollWin(x, y) {
    window.scrollBy(x, y);
}

var timeoutId;

var wordReplacements = {
    'pa': 'PA',
    'Pa': 'PA',
    'pA': 'PA',
    'pennie': 'Pennie',
    'aptc': 'APTC',
    'Aptc': 'APTC',
    'aptcs': 'APTCs',
    'Aptcs': 'APTCs',
    'csr': 'CSR',
    'Csr': 'CSR',
    'csrs': 'CSRs',
    'Csrs': 'CSRs',
    'cap': 'CAP',
    'chip': 'CHIP',
    'dob': 'DOB',
    'dmi': 'DMI',
    'fpl': 'FPL',
    'gi': 'GetInsured',
    'GI': 'GetInsured',
    'getinsured': 'GetInsured',
    'Getinsured': 'GetInsured',
    'hix': 'HIX',
    'irs': 'IRS',
    'ivr': 'IVR',
    'magi': 'MAGI',
    'slcsp': 'SLCSP',
    'npn': 'NPN',
    'ein': 'EIN',
    'oep': 'OEP',
    'oop': 'OOP',
    'pdm': 'PDM',
    'pii': 'PII',
    'rop': 'ROP',
    'phe': 'PHE',
    'qle': 'QLE',
    'medicaid': 'Medicaid',
    'medicare': 'Medicare',
    'sep': 'SEP',
    'agent': 'Agent',
    'broker': 'Broker',
    'assister': 'Assister',
    'carrier': 'Carrier',
    'issuer': 'Issuer',
    'cx': 'Customer',
    'Cx': 'Customer',
    'CX': 'Customer',
    'sup': 'Supervisor',
    'Sup': 'Supervisor',
    'app': 'Application',
    'App': 'Application',
    'tic': 'TIC'
};

document.addEventListener('input', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            var inputText = event.target.value;
            var words = inputText.split(' ');

            for (var i = 0; i < words.length; i++) {
                var word = words[i];
                if (word in wordReplacements) {
                    words[i] = wordReplacements[word];
                }
            }
            
            event.target.value = words.join(' ');
        }, 700);
    }
});