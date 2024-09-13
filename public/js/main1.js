/* Form Validation JS - copied from BS 5.3 Validation  */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function validateForm() {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const form = document.getElementById("primaryInfo");

  // Prevent submission if checkValidity if false
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");

      document.getElementById("Submitbutton").textContent =
        "Some essential data is missing or incorrect";
    },
    false
  );
})();

/* Add Investiagation to Table function (Modified frm ChatGPT) */

function addInvestigation() {
  const date = document.getElementById('InvDate');
  const type = InvTypeTagify.value[0];
  const site = InvSiteTagify.value[0];
  const findings = document.getElementById('InvFindings');

  if (!type.value || !findings.value) {
    alert("Please enter relevant Investigation details");
  } else {
    const tableBody = document.getElementById("InvTable");

    const row = document.createElement("tr");

    const typeCell = document.createElement("td");
    typeCell.innerText = type.value;
    const siteCell = document.createElement("td");
    siteCell.innerText = site.value;
    const dateCell = document.createElement("td");
    dateCell.innerText = date.value;
    const findingsCell = document.createElement("td");
    findingsCell.innerText = findings.value;

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.onclick = () =>
      confirm("Delete Investigation?") ? tableBody.removeChild(row) : false;
    deleteCell.appendChild(deleteButton);

    row.appendChild(typeCell);
    row.appendChild(siteCell);
    row.appendChild(dateCell);
    row.appendChild(findingsCell);
    row.appendChild(deleteCell);
    tableBody.appendChild(row);

    // Reset Form //
    type.value = "";
    site.value = "";
    date.value = "";
    findings.value = "";
  }
}

/* Tagify Script*/
var inputSxSite = document.getElementById("SxSite");

var PrimarySites = [
  "Buccal Mucosa",
  "RMT",
  "Lower GBS",
  "Upper GBS",
  "Upper Alveolus",
  "Lower Alveolus",
  "Palate",
  "FOM",
  "Margin Tongue",
  "Tongue Dorsum",
  "Tongue",
  "BOT",
  "Tonsil",
  "Upper Lip",
  "Lower Lip",
];

var tagify1 = new Tagify(inputSxSite, {
  mode: "select",
  whitelist: PrimarySites,
  maxTags: 1,
  dropdown: {
    maxItems: 20,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var inputAdditionalSitesMucosal = document.getElementById(
  "AdditionalSitesMucosal"
);

var AdditionalSitesMucosal = [
  "Buccal Mucosa",
  "RMT",
  "Lower GBS",
  "Upper GBS",
  "Upper Alveolus",
  "Lower Alveolus",
  "Palate",
  "FOM",
  "Margin Tongue",
  "Tongue Dorsum",
  "Tongue",
  "BOT",
  "Tonsil",
  "Upper Lip",
  "Lower Lip",
];

var tagify2 = new Tagify(inputAdditionalSitesMucosal, {
  whitelist: AdditionalSitesMucosal,
  maxTags: 5,
  delimiters: ",",
  dropdown: {
    maxItems: 15,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var inputAdditionalSitesMandible = document.getElementById(
  "AdditionalSitesMandible"
);

var AdditionalSitesMandible = [
  "Minimal Marginal Mandibulectomy",
  "Marginal Mandibulectomy",
  "C-shaped Marginal",
  "Segmental Mandibulectomy",
  "Posterior Segmental Madibulectomy",
  "Segmental Mandibulectomy across Midline",
  "Central Segmental Mandibulectomy",
  "Hemi-Mandibulectomy",
  "Extended Hemi-Mandibulectomy",
  "Subtotal Mandibulectomy",
  "Total Mandibulectomy",
];

var tagify3 = new Tagify(inputAdditionalSitesMandible, {
  whitelist: AdditionalSitesMandible,
  maxTags: 1,
  delimiters: ",",
  dropdown: {
    maxItems: 15,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var inputAdditionalSitesMaxilla = document.getElementById(
  "AdditionalSitesMaxilla"
);

var AdditionalSitesMaxilla = [
  "Upper Alveolectomy",
  "Infra-structure Maxillectomy",
  "Partial Maxillectomy",
  "Central Maxillectomy",
  "Hemi-Maxillectomy",
  "Hemimaxillectomy with IO Plate",
  "Hemimaxillectomy with Orbital Contents",
];

var tagify4 = new Tagify(inputAdditionalSitesMaxilla, {
  whitelist: AdditionalSitesMaxilla,
  maxTags: 1,
  delimiters: ",",
  dropdown: {
    maxItems: 15,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var inputAdditionalSitesOther = document.getElementById("AdditionalSitesOther");

var AdditionalSitesOther = [
  "External Skin",
  "Large Skin",
  "Small Skin",
  "Low ITF Clearance",
  "Compartmental ITF Clearance",
  "High ITF Clearance",
  "Entire Massater",
  "Medial Pterygoid",
  "Pterygoid Plates",
  "Orbital Exentration",
];

var tagify5 = new Tagify(inputAdditionalSitesOther, {
  whitelist: AdditionalSitesOther,
  maxTags: 5,
  delimiters: ",",
  dropdown: {
    maxItems: 15,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: false,
  },
});

var inputIncisions = document.getElementById("Incisions");

var Incisions = [
  "Midline Split",
  "Angle of Mouth Lip Split",
  "Intra-Oral",
  "Single Transverse",
  "Single Transverse with Vertical Extn",
  "McFee's",
  "Schobinger's",
  "Modified Schobingers",
  "Apron",
];

var tagify6 = new Tagify(inputIncisions, {
  mode: "select",
  whitelist: Incisions,
  maxTags: 1,
  delimiters: ",",
  dropdown: {
    maxItems: 15,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var inputRecon = document.getElementById("Recon");

var Recon = [
  "Primary Closure",
  "Nasolabial Flap",
  "PMMC",
  "FRAFF",
  "ALT",
  "FIBULA",
  "Bipaddle PMMC",
  "Bipaddle FRAFF",
  "Bipaddle ALT",
  "Submental Flap",
  "Forehead Flap",
  "Cantilever Fibula",
  "Tongue Flap",
];

var tagify7 = new Tagify(inputRecon, {
  whitelist: Recon,
  maxTags: 5,
  delimiters: ",",
  dropdown: {
    maxItems: 15,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var inputAdditionalPro = document.getElementById("AdditionalPro");

var AdditionalPro = [
  "Tracheostomy",
  "PEG",
  "Hemi Thyroidectomy",
  "Superficial Parotidectomy",
];

var tagify8 = new Tagify(inputAdditionalPro, {
  whitelist: AdditionalPro,
  maxTags: 5,
  delimiters: ",",
  dropdown: {
    maxItems: 15,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var inputSxSide = document.getElementById("SxSide");

var SxSide = [
  "Right",
  "Left",
  "Central",
  "Bilateral",
];

var tagify9 = new Tagify(inputSxSide, {
  mode: "select",
  whitelist: SxSide,
  maxTags: 1,
  delimiters: ",",
  dropdown: {
    maxItems: 4,
    classname: "tags-look",
    enabled: 0,
    closeOnSelect: true,
  },
});

var tagifyInstances = [tagify1, tagify2, tagify3, tagify4, tagify5,tagify6, tagify7] //Array made to loop throug tagify's to get values etc.

// Generate Neck Check Boxes

const neckStructures = [
  "SCM",
  "SAN",
  "IJV",
  "SG",
  "Skin",
  "IA",
  "IB",
  "IIA",
  "IIB",
  "III",
  "IV",
  "VA",
  "VB",
  "Parotid",
  "IV",
  "HGN",
];

function genNeckCheckBoxes(anArry, side) {
  const container = document.getElementById(`${side}NeckCheckBoxes`);
  anArry.forEach((obj) => {
    const checkBox = document.createElement("div");
    checkBox.className = "form-check form-check-inline";

    const checkBoxInput = document.createElement("input");
    checkBoxInput.className = "form-check-input";
    checkBoxInput.type = "checkbox";
    checkBoxInput.value = obj;
    checkBoxInput.id = side + obj;
    checkBoxInput.disabled = true;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.textContent = obj;

    checkBox.appendChild(checkBoxInput);
    checkBox.appendChild(checkboxLabel);
    container.appendChild(checkBox);
  });
}

genNeckCheckBoxes(neckStructures, "R");
genNeckCheckBoxes(neckStructures, "L");

// Neck Details Enabler Script

function NeckDissectionFunction(side) {
  const select = document.getElementById(`${side}NeckExtent`);
  const checkBoxDiv = document.getElementById(`${side}NeckCheckBoxes`);
  const HPNeckNY = document.getElementById(`${side}NodalYeild`);
  const HPNeckPN = document.getElementById(`${side}PositNodes`);
  const HPNeck = document.getElementById(`${side}NeckHP`);

  if (select.value) {
    const inputs = checkBoxDiv.querySelectorAll("input");

    inputs.forEach((input) => {
      input.disabled = false;
    });

    HPNeckNY.disabled = false;
    HPNeckPN.disabled = false;
    HPNeck.style.display = "block";
  } else {
    const inputs = checkBoxDiv.querySelectorAll("input");

    inputs.forEach((input) => {
      input.disabled = true;
      input.checked = false;
      HPNeckNY.disabled = true;
      HPNeckPN.disabled = true;
      HPNeckNY.value = "";
      HPNeckPN.value = "";
      HPNeck.style.display = "none";
    });
  }

  const ManualInput = document.getElementById(`${side}HiddenNeck`);

  if (select.value === "Other") {
    ManualInput.hidden = false;
  } else {
    ManualInput.hidden = true;
  }
}

// Primary Enabler Script
function PrimaryEnabler (){
  const PrimarySxType = document.getElementById('SxType').value
  const PrimaryDetails = document.getElementById('PrimaryTumourDetails')
  
  if(PrimarySxType) {
    PrimaryDetails.hidden = false
  } else {
    PrimaryDetails.hidden = true
    tagifyInstances.forEach(tagify => {
      tagify.removeAllTags()
    })
  }
  
  
}

// Node Enabler Script

function NodeEnabler(side) {
  const PositNode = document.getElementById(`${side}PositNodes`);
  const InvolvedNodes = document.getElementById(`${side}InvolvedNodes`);
  const InvolvedNodesInput = InvolvedNodes.querySelectorAll("input");
  const InvolvedNodesSelect = InvolvedNodes.querySelectorAll("select");

  if (PositNode.value && PositNode.value != 0) {
    InvolvedNodesInput.forEach((input) => {
      input.disabled = false;
    });
    InvolvedNodesSelect.forEach((select) => {
      select.disabled = false;
    });
  } else {
    InvolvedNodesInput.forEach((input) => {
      input.disabled = true;
      input.checked = false;
      input.value = "";
    });
    InvolvedNodesSelect.forEach((select) => {
      select.disabled = true;
      select.value = "";
    });
  }
}

NodeEnabler("R");
NodeEnabler("L");

/* -----------------------------------TNM Logic v1.1------------------------------------- */

function CalcpTNM() {
  // Tsize
  const tAP = parseInt(document.getElementById("TsizeAP").value);
  const tTrans = parseInt(document.getElementById("TsizeTrans").value);
  const tVert = parseInt(document.getElementById("TsizeVert").value);
  const DOI = parseInt(document.getElementById("TsizeDOI").value);
  const boneInv = document.getElementById("BoneInv").value;
  // Same neck
  const RpositNodes =
    document.getElementById("RPositNodes").value === ""
      ? ""
      : parseInt(document.getElementById("RPositNodes").value);
  const RnodeSize = parseInt(document.getElementById("RNodeSize").value);
  const ReCS = document.getElementById("RECS").value;
  // Opposite Neck
  const LpositNodes =
    document.getElementById("LPositNodes").value === ""
      ? ""
      : parseInt(document.getElementById("LPositNodes").value);
  const LnodeSize = parseInt(document.getElementById("LNodeSize").value);
  const LeCS = document.getElementById("LECS").value;

  // Result Divs
  const pT = document.getElementById("Tstage");
  const pN = document.getElementById("Nstage");

  /* -----pT-----*/

  //Get largest Diameter
  const largestDiameter = [tAP, tTrans, tVert].sort((a, b) => b - a)[0];

  //Check if All important T data is available or send and error msg as a tooltip
  if (!largestDiameter && !DOI) {
    pT.value = "x";
  } else if (!DOI) {
    document.getElementById("dataMissing").innerHTML =
      "Please enter DOI as it is essetial for T-staging";
    document.getElementById("dataMissing").style.display = "block";
  } else {
    //Going Reverse as it is easier

    if (boneInv === "Deep Intramedullary" || boneInv === "Present") {
      pT.value = "T4a";
    } else if (
      boneInv === "" ||
      boneInv === "Absent" ||
      boneInv === "Superficial Cortical"
    ) {
      if (DOI > 10) {
        if (largestDiameter <= 40) {
          pT.value = "T3";
        } else if (largestDiameter > 40) {
          pT.value = "T4a";
        }
      } else if (DOI > 5 && DOI <= 10) {
        if (largestDiameter <= 40) {
          pT.value = "T2";
        } else if (largestDiameter > 40) {
          pT.value = "T3";
        }
      } else if (DOI <= 5) {
        if (largestDiameter <= 20) {
          pT.value = "T1";
        } else if (largestDiameter <= 40) {
          pT.value = "T2";
        } else if (largestDiameter > 40) {
          pT.value = "T3";
        }
      }
    }
  }

  /* -----pN-----*/

  //If All N data is missing then Nx (keep subsequent boxes disabled!)
  if (RpositNodes === "" && LpositNodes === "") {
    pN.value = "x";
  } else if (LpositNodes === "" || (LpositNodes === 0 && RpositNodes !== "")) {
    /*Single ND done (Or B/L Neck done with Opposite Neck N0) */
    if (RpositNodes === 0) {
      pN.value = "0";
    } else if (RpositNodes > 0) {
      if (ReCS === "Present") {
        if (RpositNodes > 1) {
          pN.value = "3b";
        } else if (RpositNodes === 1) {
          if (RnodeSize > 30) {
            pN.value = "3b";
          } else if (RnodeSize <= 30 || !RnodeSize) {
            pN.value = "2a";
          }
        }
      } else if (ReCS === "" || ReCS === "Absent") {
        if (RpositNodes > 1) {
          if (RnodeSize <= 60 || !RnodeSize) {
            pN.value = "2b";
          } else if (RnodeSize > 60) {
            pN.value = "3a";
          }
        } else if (RpositNodes === 1) {
          if (RnodeSize > 60) {
            pN.value = "3a";
          } else if (RnodeSize > 30 && RnodeSize <= 60) {
            pN.value = "2a";
          } else if (RnodeSize <= 30 || !RnodeSize) {
            pN.value = "1";
          }
        }
      }
    }
  } else if (LpositNodes !== "") {
    /*BL or Contralateral Neck Done */
    if (RpositNodes === "" || RpositNodes === 0) {
      /*Only Contralateral Neck Done (or BL neck done with same side neck N0) */
      if (LpositNodes === 0) {
        pN.value = "0";
      } else if (LpositNodes > 0) {
        if (LeCS === "Present") {
          pN.value = "3b";
        } else if (LeCS === "" || LeCS === "Absent") {
          if (LpositNodes >= 1) {
            if (LnodeSize > 60) {
              pN.value = "3a";
            } else if (LnodeSize <= 60 || !LnodeSize) {
              pN.value = "2c";
            }
          }
        }
      }
    } else if (RpositNodes !== "") {
      /*BL Neck done */
      if (RpositNodes === 0 && LpositNodes === 0) {
        /* BL Neck N0 */
        pN.value = "0";
      } else if (LpositNodes > 0 && RpositNodes > 0) {
        /* BL Neck with both side > 0 Nodes positive */
        if (LeCS === "Present" || ReCS === "Present") {
          pN.value = "3b";
        } else if (
          (LeCS === "" || LeCS === "Absent") &&
          (ReCS === "" || ReCS === "Absent")
        ) {
          if (LnodeSize > 60 || RnodeSize > 60) {
            pN.value = "3a";
          } else if (
            (LnodeSize <= 60 || !LnodeSize) &&
            (RnodeSize <= 60 || !RnodeSize)
          ) {
            pN.value = "2c";
          }
        }
      }
    }
  }
}

/* -----------------------------------GenSummary------------------------------------- */

function genSummary() {
  const results = {};

  // Get all inputs and input their value in respective spans
  formInputs = document.getElementById("primaryInfo").querySelectorAll("input");

  formInputs.forEach((input) => {
    const id = input.id;
    const value = input.value;

    results[id] = value;

    const span = document.getElementById("summary").querySelector(`span.${id}`);

    if (span) {
      span.textContent = value;
    }
  });

  // Get all selects and input their value in respective spans
  formSelects = document
    .getElementById("primaryInfo")
    .querySelectorAll("select");

  formSelects.forEach((select) => {
    const id = select.id;
    const value = select.value;

    results[id] = value;

    const span = document.getElementById("summary").querySelector(`span.${id}`);

    if (span) {
      span.textContent = value;
    }
  });

  // Get all textareas and input their value in respective spans
  formTextAreas = document
    .getElementById("primaryInfo")
    .querySelectorAll("textarea");

  formTextAreas.forEach((textarea) => {
    const id = textarea.id;
    const value = textarea.value;

    results[id] = value;

    const span = document.getElementById("summary").querySelector(`span.${id}`);

    if (span) {
      span.textContent = value;
    }
  });

  // Get the Investigation table and put its values in respective span
  const tableInvestRows = document
    .getElementById("InvTable")
    .querySelectorAll("tr");
  const InvSummarySpan = document.getElementById("InvSummarySpan");
  InvSummarySpan.innerHTML = "" //To rest table everytime button is clicked

  tableInvestRows.forEach((row) => {
    const prevInnerHTML = InvSummarySpan.innerHTML
    InvSummarySpan.innerHTML = 
      prevInnerHTML + 
      `<span class="genspan 2"></span>` +
      " <b>" +
      row.cells[0].innerText +
      "</b><b>" +
      (row.cells[1].innerText ? " of " + row.cells[1].innerText : "") + 
      "</b>" +
      (row.cells[2].innerText ? " on " + row.cells[2].innerText : "") +
      " showed <b>" +
      row.cells[3].innerText +
      "</b>. ";
    
    
  });

  //Code to repeat name
  const repeatName = document
    .getElementById("summary")
    .querySelector("span.repeatName");
  const ptName = document.getElementById("patientName");

  repeatName.textContent = ptName.value;

  //Medical History
  const MedicalHistory = document.getElementById('MedicalHistory').value
  const MedHistorySummary = document.getElementById('MedHistorySummary')
  MedHistorySummary.innerHTML = `<span class="genderspan 2"></span> pre-operative work-up was essentially normal` + (MedicalHistory ? " except for " + MedicalHistory: ".")

  //Treatment Plan
  spanSxDetails = document.querySelector('span.SxDetails')
  SxTypeSU = document.getElementById('SxType').value
  
  let SxAdditonalMucosalSitesSU = ""
  if (tagify2.value[0]){
    console.log(tagify2.value.map(obj => obj.value).join(" + ")) 
  }

  if (SxTypeSU){
    spanSxDetails.innerHTML = 
    (SxTypeSU === "Wide Excision" ? "Wide Excision of" : "Composite Resection (Wide Excision of") +
    (tagify9.value[0] ? " " + tagify9.value[0].value : "") + //Side
    (tagify1.value[0] ? " " + tagify1.value[0].value : "") +  //Prmary Site
    (tagify2.value[0] ? " + " + (tagify2.value.map(obj => obj.value).join(" + ")) : "" ) +  //AdditionalMucosal
    (tagify3.value[0] ? " + " + tagify3.value[0].value : "" ) +  //AdditionalMandible
    (tagify4.value[0] ? " + " + tagify4.value[0].value : "" ) +  //AdditionalMaxilla
    (tagify5.value[0] ? " + " + (tagify5.value.map(obj => obj.value).join(" + ")) : "" ) +  //AdditionalOthers
    (SxTypeSU === "Wide Excision" ? "" : ")") +
    (tagify6.value[0] ? " using " + tagify6.value[0].value + " incision" : "" ) + //Incision
    (tagify8.value[0] ? " + " + (tagify8.value.map(obj => obj.value).join(" + ")) : "" ) +
    ""
  } 

  // MaleFemale
  const malePerson = ["Mr.", "He", "His", "he", "his", "him"];
  const femalePerson = ["Mrs.", "She", "Her", "she", "her", "her"];

  const PtGender = document.getElementById("gender").value;

  const genderSpans = document
    .getElementById("summary")
    .querySelectorAll("span.genderspan");

  if (PtGender === "Male") {
    genderSpans.forEach((genderspan) => {
      genderspan.textContent = malePerson[parseInt(genderspan.classList[1])];
    });
  } else if (PtGender === "Female") {
    genderSpans.forEach((genderspan) => {
      genderspan.textContent = femalePerson[parseInt(genderspan.classList[1])];
    });
  }
}
