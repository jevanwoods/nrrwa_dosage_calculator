// Variables for Equations

// Inputs from Data
let rawNTU = document.getElementById('rawNTU').value;
let rawpH = document.getElementById('rawpH').value;
let rawTemp = document.getElementById('rawTemp').value;
let rawAlk =document.getElementById('rawAlk').value;

// Non-Calculated Factors
// bigger numbers means more coagulant
let ntuC_0_25 = 0.27;
let ntuC_25_50 = 0.27;
let ntuC_50_100 = 0.24;
let ntuC_100_200 = 0.20;
let ntuC_200_500 = 0.15;
let ntuC_500_5000 = 0.11;

let ntuT_0_25 = 22.25;
let ntuT_25_50 = 22.75;
let ntuT_50_100 = 23.75;
let ntuT_100_200 = 27.75;
let ntuT_200_500 = 37.75;
let ntuT_500_5000 = 57.75;

// Calculated Factors
let coagulantFactor = 0;
let ntuTempFactor = 0;
let baseTempFactor = 0;

// Connect Output Boxes
let pacDosageOutput = document.getElementById('pacDosageOutput');
let saDosageOutput = document.getElementById('saDosageOutput');
let tempNoteOutput = document.getElementById('tempNoteBox');

// -------------------------------------------------------------------------- //
// -------------------------------Functions---------------------------------- //
// -------------------------------------------------------------------------- //

function temperatureNote() {
    if (rawTemp <= 5) {
        tempNoteOutput.innerHTML = "This temperature is considered cold."
    } else if (rawTemp <= 10) {
        tempNoteOutput.innerHTML = "This temperature is considered cool."
    } else if (rawTemp <=20) {
        tempNoteOutput.innerHTML = "This temperature is considered warm."
    } else {
        tempNoteOutput.innerHTML = "This temperature is considered hot."
    }
    console.log("connected");
};

function coagulantCalc() {
    rawNTU = document.getElementById('rawNTU').value;
    rawpH = document.getElementById('rawpH').value;
    rawTemp = document.getElementById('rawTemp').value;
    rawAlk =document.getElementById('rawAlk').value;

    if (rawNTU <= 25) {
        coagulantFactor = ntuC_0_25;
        baseTempFactor = ntuT_0_25;
    } else if (rawNTU <= 50) {
        coagulantFactor = ntuC_25_50;
        baseTempFactor = ntuT_25_50;
    } else if (rawNTU <= 100) {
        coagulantFactor = ntuC_50_100;
        baseTempFactor = ntuT_50_100;
    } else if (rawNTU <= 200) {
        coagulantFactor = ntuC_100_200;
        baseTempFactor = ntuT_100_200;
    } else if (rawNTU <= 500) {
        coagulantFactor = ntuC_200_500;
        baseTempFactor = ntuT_200_500;
    } else if (rawNTU <= 5000) {
        coagulantFactor = ntuC_500_5000;
        baseTempFactor = ntuT_500_5000;
    }

    ntuTempFactor = (-0.14 * rawTemp) + baseTempFactor;

    let resultPAC = (+rawNTU * coagulantFactor) + ntuTempFactor;
    pacDosageOutput.innerHTML = Math.round(resultPAC);
    let resultSA = +rawNTU * +rawpH * +rawTemp * +rawAlk;
    saDosageOutput.innerHTML = "Ignore This";
};