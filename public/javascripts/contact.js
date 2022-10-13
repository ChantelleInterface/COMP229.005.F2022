// Student name: Chantelle Lawson
// Student number: 301216199
// Midterm Due Date: October 8th 2022
// Filename: contact.js


"use strict";

/* checks fields for empty values*/
function customValidity() {
    var fName = document.getElementById("fname");
    var lName = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
	var feedback = document.getElementById("comments");


    if (!fName.customValidity()) {
        fName.setCustomValidity(" fill out this field.");
    }
    else if (!lName.customValidity()) {
        lName.setCustomValidity("fill out this field.");
    }
    else if (!phone.customValidity()) {
        phone.setCustomValidity("fill out this field.");
    }
	else if (!feedback.customValidity()) {
        subject.setCustomValidity("fill out this field.");
    }
    try {
        if (email.value.search("@") === -1 || email.value.lastIndexOf(".") === -1) {
            throw "please provide a valid email address";
            valid = false;
        }
    }
    catch (msg) {
        window.alert(msg);
    }
}

function setUpPage() {
    createEvent();
    customValidity();
}

function createEvent() {
    var submit = document.getElementById("submit");
    if (submit.addEventListener("submit", customValidity, false));
    else if (submit.attachEvent) {
        submit.attachEvent("onsubmit", customValidity);
    }

    var same = document.getElementById("sameEntry");
    if (same.addEventListener) {
        same.addEventListener("click", copyEntry, false);
    } else if (same.attachEvent) {
        same.attachEvent("onclick", copyEntry);
    }
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
