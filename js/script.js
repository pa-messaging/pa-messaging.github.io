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
    
    var rop1stname = document.getElementById('rop1stname').value;
    var roplastname = document.getElementById('roplastname').value;
    var ropaptc = document.getElementById('ropaptc').value;
    var ropplan = document.getElementById('ropplan').value;
    var roppolicy = document.getElementById('roppolicy').value;
    var ropexpiration = document.getElementById('ropexpiration').value;
    var ropdate = document.getElementById('ropdate').value;
    
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
        case 'rop':
            ticTypeText += "ROP";
            ticSubText += "ROP";
            ticPriorityText += "Medium";

            subjectText += "Verification Document for ROP Reinstatement";
                
            outputText += rop1stname + " " + roplastname + " (ID:" + hhidField + ") called in requesting reinstatement of the APTC amount of $" + ropaptc + " on the plan " + ropplan + " with Policy ID#" + roppolicy + " due to the expiration of ROP on " + ropexpiration + "<br><br>" + "#Verbal_Attestation_Completed_By_" + rop1stname + "_" + roplastname + "_For_" + ropaptc + "_On_" + ropdate;
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