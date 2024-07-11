  // Define all symptoms for each disease
var allSymptoms = {
    arthritis: ["Joint Pain", "Swelling", "Stiffness", "Limited Movement"],
    migraine: ["Headache", "Nausea", "Visual Disturbances", "Sensitivity to Light"],
    digestiveIssues: ["Indigestion", "Bloating", "Gas", "Diarrhea"],
    skinRash: ["Itching", "Redness", "Rash", "Dryness"],
    diabetes: ["Frequent Urination", "Increased Thirst", "Fatigue", "Blurred Vision"],
    hypertension: ["High Blood Pressure", "Headache", "Dizziness", "Chest Pain"],
    cold: ["Runny Nose", "Sneezing", "Cough", "Sore Throat"],
    allergies: ["Itchy Eyes", "Sneezing", "Congestion", "Skin Rash"],
    // Add more diseases and their associated symptoms here
};


function populateSymptoms() {
    var diseaseSelect = document.getElementById("disease");
    var symptom1Select = document.getElementById("symptom1");
    var symptom2Select = document.getElementById("symptom2");

    var selectedDisease = diseaseSelect.value;

  
    

    // Clear existing options
    symptom1Select.innerHTML = '<option value="">None</option>';
    symptom2Select.innerHTML = '<option value="">None</option>';

    // Populate symptom1 based on the selected disease
    var symptoms = allSymptoms[selectedDisease];
    if (symptoms) {
        symptoms.forEach(function (symptom) {
            symptom1Select.innerHTML += '<option value="' + symptom + '">' + symptom + '</option>';
        });
    }

    // Populate symptom2 with all symptoms initially
    symptoms.forEach(function (symptom) {
        symptom2Select.innerHTML += '<option value="' + symptom + '">' + symptom + '</option>';
    });
}

function updateSymptomLists() {
    var symptom1Select = document.getElementById("symptom1");
    var symptom2Select = document.getElementById("symptom2");

    var diseaseSelect = document.getElementById("disease");
    var selectedDisease = diseaseSelect.value;
    var selectedSymptom1 = symptom1Select.value;
    
    // Clear existing options in symptom2 and repopulate without the selected symptom from symptom1
    symptom2Select.innerHTML = '<option value="">None</option>';

    var symptoms = allSymptoms[selectedDisease];
    if (symptoms) {
        symptoms.forEach(function (symptom) {
            if(symptom!=selectedSymptom1)
            symptom2Select.innerHTML += '<option value="' + symptom + '">' + symptom + '</option>';
        });
    }
}
