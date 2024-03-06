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
    } else if (selectedOption === 'rop') {
        nameSection.style.display = 'none';
    } else {
        nameSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
    }
}

function generateOutput() {
    var selectedOption = document.getElementById('type').value;
    var questionSet = document.getElementById(selectedOption + 'Questions');
    
    var firstLast = document.getElementById('firstLast').value;

    var incomedoc = document.getElementById('incomedoc').value;
    var incomeamount = document.getElementById('incomeamount').value;
    var incomeapp = document.getElementById('incomeapp').value;

    var citizenshipdoc = document.getElementById('citizenshipdoc').value;
    var citizenshipreq = document.getElementById('citizenshipreq').value;
    
    var hhidField = document.getElementById('hhidField').value;
    var rop1stname = document.getElementById('rop1stname').value;
    var roplastname = document.getElementById('roplastname').value;
    var ropaptc = document.getElementById('ropaptc').value;
    var ropplan = document.getElementById('ropplan').value;
    var roppolicy = document.getElementById('roppolicy').value;
    var ropexpiration = document.getElementById('ropexpiration').value;
    var ropdate = document.getElementById('ropdate').value;
    
    if (questionSet) {
        var outputText = "";
        
        switch (selectedOption) {  
            
            case 'income':      
                outputText += "Hello " + firstLast + ",<br><br>" + "We were unable to verify this document for Income Verification.<br>Here's what you submitted " + incomedoc + " with a reported income of $" + incomeamount + ". However, we need verification of the $" + incomeapp + " reported in your application in order to process your request. You can now attest to your income using the updated Pennie Self-Attestation Letter, available on Pennie.com/Resources: " + "https://agency.pennie.com/wp-content/uploads/2023/06/Pennie-Income-Attestation-From-Updated-06-23.pdf" + " Note that if you're verifying Self-Employment income, your document should display the Net Income; all non self-employment income should match your Adjusted Gross Income. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at" + "https://help.pennie.com/hc/en-us/articles/360051084873-Documents-to-confirm-your-household-income" + "<br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br>Pennie Customer Service";
            break;

            case 'citizenship':      
                outputText += "Hello " + firstLast + ",<br><br>" + "We were unable to verify this document for Citizenship Verification.<br>Here's what you submitted " + citizenshipdoc + ". However, we need " + citizenshipreq + " in order to process your request. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360050322494-Documents-to-confirm-U-S-Citizenship" + "<br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br>Pennie Customer Service";
            break;

            case 'incarceration':      
                outputText += "Testing";
            break;

            case 'internal':      
                outputText += "Testing";
            break;

            case 'ssn':      
                outputText += "Testing";
            break;

            case 'death':      
                outputText += "Testing";
            break;

            case 'aiv':      
                outputText += "Testing";
            break;

            case 'review':      
                outputText += "Testing";
            break;

            case 'nonpennie':      
                outputText += "Testing";
            break;

            case 'nonesi':      
                outputText += "Testing";
            break;

            case 'over':      
                outputText += "Testing";
            break;

            case 'residency':      
                outputText += "Testing";
            break;

            case 'ridp':      
                outputText += "Testing";
            break;

            case 'rop':      
                outputText += rop1stname + " " + roplastname + " (ID:" + hhidField + ") called in requesting reinstatement of the APTC amount of $" + ropaptc + " on the plan " + ropplan + " with Policy ID#" + roppolicy + " due to the expiration of ROP on " + ropexpiration + "<br><br>" + "#Verbal_Attestation_Completed_By_" + rop1stname + "_" + roplastname + "_For_" + ropaptc + "_On_" + ropdate;
            break;

        default:
            break;
    }

        document.getElementById('output').innerHTML = outputText;
        
        var outputPanel = document.getElementById('output-panel');
        outputPanel.style.width = '100%';
        outputPanel.style.margin = '10px';
        outputPanel.style.padding = '20px';
        outputPanel.style.borderColor = 'forestgreen';
        outputPanel.style.borderWidth = '5px';
        outputPanel.style.borderStyle = 'solid';
        outputPanel.style.boxShadow = '0 0 8px 8px rgba(34, 139, 34, 0.4)';
        
        document.getElementById('copy-output-button').classList.add('generated');    }
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

    document.getElementById('firstLast').value = '';
    document.getElementById('nameSection').style.display = 'none';
    
    document.getElementById('type').selectedIndex = 0;

    var questionSets = document.querySelectorAll('.question-set');
    questionSets.forEach(function (set) {
        set.classList.remove('visible');
    });

    document.getElementById('output').innerHTML = '';

    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.width = '100%';
    outputPanel.style.margin = '10px';
    outputPanel.style.padding = '20px';
    outputPanel.style.borderColor = 'mediumslateblue';
    outputPanel.style.borderWidth = '3px';
    outputPanel.style.borderStyle = 'solid';
    outputPanel.style.boxShadow = 'none';

    document.getElementById('copy-output-button').classList.remove('generated');
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