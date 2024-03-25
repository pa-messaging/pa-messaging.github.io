function showQuestions() {
    /* This top variable sets all questions to hidden */
    var questionSets = document.querySelectorAll('.question-set');
    questionSets.forEach(function (set) {
        set.classList.remove('visible');
    });

    /* This 2nd vailable retrieves which question has been selected */
    var selectedOption = document.getElementById('type').value;

    /* The 3rd variable reveals the question-set class for the option value */
    /* This is why the naming convention referenced on line 45 
        of the HTML is key */
    var questionSet = document.getElementById(selectedOption + 'Questions');
    
    if (questionSet) {
        questionSet.classList.add('visible');
    }

    /* This second if statement handles hiding/revealing the nameSection */
    if (selectedOption === 'rop' || selectedOption === 'internal') {
        nameSection.style.display = 'none';
    } else {
        nameSection.style.display = selectedOption !== 'placeholder' ? 'flex' : 'none';
    }
}

function generateOutput() {

    /* The variable list below is vital */
    /* Everytime a new question field is created in HTML a corresponding
        variable must be added here */
    /* The sections are broken up by question-set */

    var selectedOption = document.getElementById('type').value;
    var questionSet = document.getElementById(selectedOption + 'Questions');
    
    var firstLast = document.getElementById('firstLast').value;

    var internalselection = document.getElementById('internalselection').value;
    var internalreason = document.getElementById('internalreason').value;

    var incomedoc = document.getElementById('incomedoc').value;
    var incomeamount = document.getElementById('incomeamount').value;
    var incomeapp = document.getElementById('incomeapp').value;

    var citizenshipdoc = document.getElementById('citizenshipdoc').value;
    var citizenshipreq = document.getElementById('citizenshipreq').value;

    var lawfuldoc = document.getElementById('lawfuldoc').value;
    var lawfulreq = document.getElementById('lawfulreq').value;

    var incarcerationdoc = document.getElementById('incarcerationdoc').value;
    var incarcerationreq = document.getElementById('incarcerationreq').value;

    var ssndoc = document.getElementById('ssndoc').value;
    var ssnreq = document.getElementById('ssnreq').value;

    var deathdoc = document.getElementById('deathdoc').value;
    var deathreq = document.getElementById('deathreq').value;

    var aivdoc = document.getElementById('aivdoc').value;
    var aivreq = document.getElementById('aivreq').value;

    var reviewtype = document.getElementById('reviewtype').value;
    var reviewdoc = document.getElementById('reviewdoc').value;
    var reviewapplicant = document.getElementById('reviewapplicant').value;
    var reviewapp = document.getElementById('reviewapp').value;

    var overdoc = document.getElementById('overdoc').value;
    var overamount = document.getElementById('overamount').value;
    var overapplicant = document.getElementById('overapplicant').value;
    var overapp = document.getElementById('overapp').value;

    var residencydoc = document.getElementById('residencydoc').value;
    var residencyreq = document.getElementById('residencyreq').value;

    var ridpdoc = document.getElementById('ridpdoc').value;
    
    var hhidField = document.getElementById('hhidField').value;
    var rop1stname = document.getElementById('rop1stname').value;
    var roplastname = document.getElementById('roplastname').value;
    var ropaptc = document.getElementById('ropaptc').value;
    var ropplan = document.getElementById('ropplan').value;
    var roppolicy = document.getElementById('roppolicy').value;
    var ropexpiration = document.getElementById('ropexpiration').value;
    var ropdate = document.getElementById('ropdate').value;
    
    /* The following cases handle the output text logic */
    /* To add new questions you can copy and paste a new case and 
        reference the variables to add a new output */
    /* Non-dynamic text will be added using quotations */
    /* Line breaks are added using <br> */
    /* Everything must be combined using the + symbol */
    /* The case title '' will be the id of each of the question-set divs */
    /* You do not need to add the CAPITALIZED Questions to to title as it is
        dynamically added/removed */
    if (questionSet) {
        var outputText = "";
        
        switch (selectedOption) {  
            
            case 'internal':      
                outputText += internalselection + " due to " + internalreason;
            break;
            
            case 'income':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Income Verification.<br>Here's what you submitted: " + incomedoc + " with a reported income of $" + incomeamount + ". However, we need verification of the $" + incomeapp + " reported in your application in order to process your request. You can now attest to your income using the updated Pennie Self-Attestation Letter, available on Pennie.com/Resources: " + "https://agency.pennie.com/wp-content/uploads/2023/06/Pennie-Income-Attestation-From-Updated-06-23.pdf" + " Note that if you're verifying Self-Employment income, your document should display the Net Income; all non self-employment income should match your Adjusted Gross Income. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at" + "https://help.pennie.com/hc/en-us/articles/360051084873-Documents-to-confirm-your-household-income" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'citizenship':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Citizenship Verification.<br>Here's what you submitted: " + citizenshipdoc + ". However, we need " + citizenshipreq + " in order to process your request. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360050322494-Documents-to-confirm-U-S-Citizenship" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'lawful':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Lawful Presence Verification.<br>Here's what you submitted: " + lawfuldoc + ". However, we need " + lawfulreq + " in order to process your request. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360054981154-What-documents-should-you-submit-to-resolve-a-Data-Matching-Issue-" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'incarceration':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Incarceration Verification.<br>Here's what you submitted: " + incarcerationdoc + ". However, we need " + incarcerationreq + " in order to process your request. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360054981154-What-documents-should-you-submit-to-resolve-a-Data-Matching-Issue-" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'ssn':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Social Security Verification.<br>Here's what you submitted: " + ssndoc + ". However, we need " + ssnreq + " in order to process your request. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360054981154-What-documents-should-you-submit-to-resolve-a-Data-Matching-Issue-" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'death':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Death Verification.<br>Here's what you submitted: " + deathdoc + ". However, we need " + deathreq + " in order to process your request. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360054981154-What-documents-should-you-submit-to-resolve-a-Data-Matching-Issue-" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'aiv':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Income Verification.<br>Here's what you submitted: " + aivdoc + ". However, we need " + aivreq + " in order to process your request. You will have 30 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360051084873-Documents-to-confirm-your-household-income" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'review':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were able to re-review and approve your submitted document(s) for " + reviewtype + " verification. The " + reviewdoc + " for " + reviewapplicant + " has been successfully matched to their " + reviewapp + " in the application.  Please disregard previous message requesting additional document(s) to be submitted. " + reviewtype + " for " + reviewapplicant + " is now verified. For additional information or assistance, please contact us at 844-844-8040. Thank you for choosing Pennie.<br><br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'nonpennie':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Income Verification.<br><br>" + "Here's what you submitted: a written/typed self attestation letter. We no longer accept typed or hand written letters as we have done previously, please refer to the our new income verification self attestation form on our website. " + "https://agency.pennie.com/wp-content/uploads/2022/10/Income-Attestation_Form-Fillable1.3-2.pdf" + "<br>" + "However, along with the Pennie approved self-attestation letter providing a detailed explanation of why the income in the document is different from the income stated in the application, we also need a supporting document such as a most recent Tax Return, Paystub, or other reported document, if you have not already submitted such a document.<br>" + "You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at " + "https://help.pennie.com/hc/en-us/articles/360051084873-Documents-to-confirm-your-household-income" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'nonesi':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "Pennie has received your Non-ESI Minimum Essential Coverage document(s). However, we are unable to accept the submitted documentation, as it does not meet policy standards. If you are unable to provide one of the documents listed in the linked FAQ What does &ldquo;NonESI Minimum Essential Coverage&rdquo; mean? - Pennie Help, you can submit a Pennie approved attestation form located here: " + "https://agency.pennie.com/wp-content/uploads/2022/10/Attestation-of-Non-ESI-Minimum-Essential-Coverage-Form-Fillable1.3.pdf" + "<br><br>" + "If you have any questions, please call Pennie Customer Service at 1-844-844-8040." + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'over':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Income Verification.<br>Here's what you submitted: " + overdoc + " showing $" + overamount + " for " + overapplicant + ". However, we need verification of the $" + overapp + " reported in the application for " + overapplicant + " in order to process your request. Note that if you're verifying Self-Employment income, your document should display the Net Income; all non self-employment income should match your Adjusted Gross Income.<br>You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions.<br>You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360051084873-Documents-to-confirm-your-household-income" + "<br><br><br>Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'residency':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for Residency Verification.<br>Here's what you submitted: " + residencydoc + ". However, we need " + residencyreq + " in order to process your request. You will have 90 days from the day you received your eligibility notice to get the proper documentation submitted. We understand that these processes can sometimes be confusing and frustrating, but we are here to help you navigate the process at 844-844-8040, with any additional questions. You can also check out our site for a list of acceptable documents at<br>" + "https://help.pennie.com/hc/en-us/articles/360054981154-What-documents-should-you-submit-to-resolve-a-Data-Matching-Issue-" + "<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'ridp':      
                outputText += "Hello " + firstLast + ",<br><br><br>" + "We were unable to verify this document for RIDP: " + ridpdoc + "<br>" + "Additional information is required: We need an official document that provides your first and last name along with identifying information such as DOB . Please submit proof of RIDP for further verification. You can find a list of documents to confirm your household income at Pennie.com. You have 90 days from the day you received your eligibility notice to get the proper documentation submitted. For additional information please contact us at 844-844-8040.<br><br><br>" + "Thank you for choosing Pennie.<br><br>" + "Regards,<br><br>Pennie Customer Service";
            break;

            case 'rop':      
                outputText += rop1stname + " " + roplastname + " (ID:" + hhidField + ") called in requesting reinstatement of the APTC amount of $" + ropaptc + " on the plan " + ropplan + " with Policy ID#" + roppolicy + " due to the expiration of ROP on " + ropexpiration + "<br><br>" + "#Verbal_Attestation_Completed_By_" + rop1stname + "_" + roplastname + "_For_" + ropaptc + "_On_" + ropdate;
            break;

        /* Make sure the default break is always last */
            default:
            break;
    }

        /* This is to add the generated text to the output panel */
        document.getElementById('output').innerHTML = outputText;
        
        /* This is to add custom styling to the output panel to signify 
            the moutput has been generated */
        var outputPanel = document.getElementById('output-panel');
        outputPanel.style.width = '100%';
        outputPanel.style.margin = '10px';
        outputPanel.style.padding = '20px';
        outputPanel.style.borderColor = 'forestgreen';
        outputPanel.style.borderWidth = '5px';
        outputPanel.style.borderStyle = 'solid';
        outputPanel.style.boxShadow = '0 0 8px 8px rgba(34, 139, 34, 0.4)';
        
        /* This changes the color of the copy output button to signify it 
            can now be used */
        document.getElementById('copy-output-button').classList.add('generated');    }
}

function clearForm() {
    /* This clears looks for all of the inputs in the form */
    var inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="checkbox"], select, textarea');
    
    /* This takes all found ^ inputs and clears/resets them */
    inputs.forEach(function (input) {
        if (input.type === 'checkbox') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });    

    /* this handles the generic inputs that are independant of the dropdown */
    document.getElementById('firstLast').value = '';
    document.getElementById('nameSection').style.display = 'none';
    
    /* This resets the dropdown */
    document.getElementById('type').selectedIndex = 0;

    /* This hides all the previously revealed questions */
    var questionSets = document.querySelectorAll('.question-set');
    questionSets.forEach(function (set) {
        set.classList.remove('visible');
    });

    /* This clears the output panel */
    document.getElementById('output').innerHTML = '';

    /* This resets the styling of the output panel */
    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.width = '100%';
    outputPanel.style.margin = '10px';
    outputPanel.style.padding = '20px';
    outputPanel.style.borderColor = 'mediumslateblue';
    outputPanel.style.borderWidth = '3px';
    outputPanel.style.borderStyle = 'solid';
    outputPanel.style.boxShadow = 'none';

    /* This removes the styling of the copy output button */
    document.getElementById('copy-output-button').classList.remove('generated');
}

function copyOutput() {
    /* This takes whatever text is in the output panel and copies it to 
        the users clipboard */
    var outputContent = document.getElementById('output').innerText;

    var textarea = document.createElement('textarea');
    textarea.value = outputContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    /* This generates a browser popup informing the user the output is copied */
    alert('Message copied to clipboard!');
}

/* This funtion allows the user to use the Enter key to check/uncheck checkboxes */
function handleCheckboxKeyPress(event) {
    if (event.key === 'Enter') {
      this.checked = !this.checked;
    }
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('keydown', handleCheckboxKeyPress);
  });

/* This funtion is used to scroll the users page down when the output
  is generated */
function scrollWin(x, y) {
    window.scrollBy(x, y);
}

/* The following two variables are used to create a custom auto-correct */
var timeoutId;

/* To add new words to the auto-correct format them exactly as found below */
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

/* This funtion is how the above list recognizes the text that has been inputted
    and proceeds to autocorrect */
/* The last value (currently set to 700) is the timeout variable */
/* If the autocorrect delay is too quick or too fast then this can be adjusted */
/* There may be a better way to do this but I couldn't hack it together while 
    still avoiding dependancies */
/* I advise not touching this */
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