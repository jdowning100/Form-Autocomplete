// ==UserScript==
// @name         New Userscript
// @namespace    http://www.github.com/jdowning100/Form-Autocomplete
// @version      0.1
// @description  Prototype form autocompletion
// @author       jdowning100
// @match        http://*/*
// @include      https://docs.google.com/forms/d/e/1FAIpQLSfhD_3BW8yPDQbBnpazhr99EQRfjpypQeb6VTOqPQAGXNDlVQ/*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    window.onerror = function ignore(){return true;};

    var CompanyProfile = {
        Name : "Jonathan",
        Company : "Jonathan's Wood Works",
        Email : "jdowning@utexas.edu",
        Address : "2800 Rio Grande St, Austin TX 78705",
        Phone : "2817369191",
        ID : "12345",
        Emails : false
    };
    var fields = document.getElementsByClassName("quantumWizTextinputPaperinputInput exportInput");
    var titles = document.getElementsByClassName("freebirdFormviewerViewItemsItemItemTitle freebirdCustomFont");
    for(var i = 0; i < fields.length; i++){
        if(titles[i].innerText.valueOf() == "Name".valueOf() || titles[i].innerText.valueOf() == "Name *".valueOf())
            fields[i].value = CompanyProfile.Name;
        if(titles[i].innerText.valueOf() == "Company".valueOf() || titles[i].innerText.valueOf() == "Company *".valueOf())
            fields[i].value = CompanyProfile.Company;
        if(titles[i].innerText.valueOf() == "Email".valueOf() || titles[i].innerText.valueOf() == "Email *".valueOf())
            fields[i].value = CompanyProfile.Email;
        if(titles[i].innerText.valueOf() == "Address".valueOf() || titles[i].innerText.valueOf() == "Address *".valueOf())
            fields[i].value = CompanyProfile.Address;
        if(titles[i].innerText.valueOf() == "Phone number".valueOf() || titles[i].innerText.valueOf() == "Phone number *".valueOf())
            fields[i].value = CompanyProfile.Phone;
        if(titles[i].innerText.valueOf() == "Company ID".valueOf() || titles[i].innerText.valueOf() == "Company ID *".valueOf())
            fields[i].value = CompanyProfile.ID;
        if(titles[i].innerText.valueOf() == "Company ID".valueOf() || titles[i].innerText.valueOf() == "Company ID *".valueOf())
            fields[i].value = CompanyProfile.ID;
        if(titles[i].innerText.valueOf() == "Enter employee name".valueOf() || titles[i].innerText.valueOf() == "Enter employee name *".valueOf()){
            fields[i].value = CompanyProfile.Name;
            document.forms[0].submit();
        }
    }

    var toggle = document.getElementsByClassName("docssharedWizToggleLabeledContainer freebirdFormviewerViewItemsRadioChoice");

    if(CompanyProfile.Emails == true)
        toggle[1].click();
    else
        toggle[0].click();


    try{
        document.getElementsByClassName("quantumWizButtonPaperbuttonLabel exportLabel")[1].click();
    }catch(error){
        console.log("Error");
        document.forms[0].submit();
    }


    //document.getElementsByClassName("quantumWizButtonPaperbuttonFocusOverlay exportOverlay")[2].click();

    //document.forms[0].submit();
})();
