// /////////////////////// Validation Function (BS 5.3)////////////////////
function validateForm() {
  const form = document.getElementById("primaryInfo");

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    FailedToastMsg = document.getElementById("FailedToastMsg").innerText = "Some essential data is missing"
    bootstrap.Toast.getOrCreateInstance(document.getElementById("SavedFailToast")).show() 
     
  } else {
    SaveToDB();
  }
}
///////////////////////////// First Visit Enabler/////////////////////////
function FirstVisitEnabler(){
  const FVExpanded = document.getElementById("FVExpanded")
  const bsCollapseFVExpanded = new bootstrap.Collapse(FVExpanded, {
    toggle: false,
  });
  bsCollapseFVExpanded.show();
}

///////////////////////////// Rx Enabler /////////////////////////////////
function RxEnabler() {
  const RxExpanded = document.getElementById("RxExpanded");

  const bsCollapseRxExpanded = new bootstrap.Collapse(RxExpanded, {
    toggle: false,
  });

  bsCollapseRxExpanded.show();
}

///////////////////////////// Primary Enabler Function ///////////////////
function PrimaryEnabler() {
  const SxType = document.getElementById("SxType").value;
  const NeckType = document.getElementById("NeckType").value;
  const PrimaryTumourDetails = document.getElementById("PrimaryTumourDetails");
  const PrimaryTumourDetailsBtn = document.getElementById(
    "PrimaryTumourDetailsBtn"
  );
  const bsCollapsePrimary = new bootstrap.Collapse(PrimaryTumourDetails, {
    toggle: false,
  });

  const PDTSiteSide = document.getElementById("PDTSiteSide");
  const PDTInc = document.getElementById("PDTInc");
  const PDTAddlHead = document.getElementById("PDTAddlHead");
  const PDTAddlMuc = document.getElementById("PDTAddlMuc");
  const PDTAddlMan = document.getElementById("PDTAddlMan");
  const PDTAddlMax = document.getElementById("PDTAddlMax");
  const PDTAddlDeep = document.getElementById("PDTAddlDeep");
  const PDTAddlSkin = document.getElementById("PDTAddlSkin");
  const PDTAddlPro = document.getElementById("PDTAddlPro");
  //Arrays made for each input that needs to be shown
  const AllinputArray = [
    PDTSiteSide,
    PDTInc,
    PDTAddlHead,
    PDTAddlMuc,
    PDTAddlMan,
    PDTAddlMax,
    PDTAddlDeep,
    PDTAddlSkin,
    PDTAddlPro,
  ];
  const WideExcArr = [PDTSiteSide, PDTInc, PDTAddlHead, PDTAddlMuc, PDTAddlPro];
  const CompResArr = [
    PDTSiteSide,
    PDTInc,
    PDTAddlHead,
    PDTAddlMuc,
    PDTAddlMan,
    PDTAddlMax,
    PDTAddlDeep,
    PDTAddlSkin,
    PDTAddlPro,
  ];
  const OtherArr = [];

  // Histopath Part
  const HistopathRow = document.getElementById("HistopathRow");
  const PrimaryHP = document.getElementById("PrimaryHP");
  const TNM = document.getElementById("TNM");

  //Resetting all tags everytime onchange()
  SxSiteTagify.removeAllTags();
  SxSideTagify.removeAllTags();
  IncisionsTagify.removeAllTags();
  AddlMucosalTagify.removeAllTags();
  AddlMandibleTagify.removeAllTags();
  AddlMaxillaTagify.removeAllTags();
  AddlDeeperTagify.removeAllTags();
  AddlSkinTagify.removeAllTags();
  AddlProTagify.removeAllTags();
  //Hide All inputs first evertime onchage()
  AllinputArray.forEach((col) => (col.hidden = true));
  PrimaryTumourDetailsBtn.disabled = false;
  PrimaryTumourDetails.hidden = false;
  //Hiding HP everytime onchange()
  HistopathRow.hidden = true;
  PrimaryHP.hidden = true;
  TNM.hidden = true;

  if (SxType === "Wide Excision") {
    WideExcArr.forEach((col) => (col.hidden = false));
    bsCollapsePrimary.show();
    HistopathRow.hidden = false;
    PrimaryHP.hidden = false;
    TNM.hidden = false;
  }

  if (SxType === "Composite Resection") {
    CompResArr.forEach((col) => (col.hidden = false));
    bsCollapsePrimary.show();
    HistopathRow.hidden = false;
    PrimaryHP.hidden = false;
    TNM.hidden = false;
  }

  //We need the HP to persist if Neck dissection done
  if (NeckType) {
    HistopathRow.hidden = false;
    TNM.hidden = false;
  }
}

function PrimaryEnablerNoReset() {
  const SxType = document.getElementById("SxType").value;
  const NeckType = document.getElementById("NeckType").value;
  const PrimaryTumourDetails = document.getElementById("PrimaryTumourDetails");
  const PrimaryTumourDetailsBtn = document.getElementById(
    "PrimaryTumourDetailsBtn"
  );
  const bsCollapsePrimary = new bootstrap.Collapse(PrimaryTumourDetails, {
    toggle: false,
  });

  const PDTSiteSide = document.getElementById("PDTSiteSide");
  const PDTInc = document.getElementById("PDTInc");
  const PDTAddlHead = document.getElementById("PDTAddlHead");
  const PDTAddlMuc = document.getElementById("PDTAddlMuc");
  const PDTAddlMan = document.getElementById("PDTAddlMan");
  const PDTAddlMax = document.getElementById("PDTAddlMax");
  const PDTAddlDeep = document.getElementById("PDTAddlDeep");
  const PDTAddlSkin = document.getElementById("PDTAddlSkin");
  const PDTAddlPro = document.getElementById("PDTAddlPro");
  //Arrays made for each input that needs to be shown
  const AllinputArray = [
    PDTSiteSide,
    PDTInc,
    PDTAddlHead,
    PDTAddlMuc,
    PDTAddlMan,
    PDTAddlMax,
    PDTAddlDeep,
    PDTAddlSkin,
    PDTAddlPro,
  ];
  const WideExcArr = [PDTSiteSide, PDTInc, PDTAddlHead, PDTAddlMuc, PDTAddlPro];
  const CompResArr = [
    PDTSiteSide,
    PDTInc,
    PDTAddlHead,
    PDTAddlMuc,
    PDTAddlMan,
    PDTAddlMax,
    PDTAddlDeep,
    PDTAddlSkin,
    PDTAddlPro,
  ];
  const OtherArr = [];

  // Histopath Part
  const HistopathRow = document.getElementById("HistopathRow");
  const PrimaryHP = document.getElementById("PrimaryHP");
  const TNM = document.getElementById("TNM");

  //Hide All inputs first evertime onchage()
  AllinputArray.forEach((col) => (col.hidden = true));
  PrimaryTumourDetailsBtn.disabled = false;
  PrimaryTumourDetails.hidden = false;
  //Hiding HP everytime onchange()
  HistopathRow.hidden = true;
  PrimaryHP.hidden = true;
  TNM.hidden = true;

  if (SxType === "Wide Excision") {
    WideExcArr.forEach((col) => (col.hidden = false));
    bsCollapsePrimary.show();
    HistopathRow.hidden = false;
    PrimaryHP.hidden = false;
    TNM.hidden = false;
  }

  if (SxType === "Composite Resection") {
    CompResArr.forEach((col) => (col.hidden = false));
    bsCollapsePrimary.show();
    HistopathRow.hidden = false;
    PrimaryHP.hidden = false;
    TNM.hidden = false;
  }

  //We need the HP to persist if Neck dissection done
  if (NeckType) {
    HistopathRow.hidden = false;
    TNM.hidden = false;
  }
}

///////////////////////////// Neck Enabler Function /////////////////////
function NeckEnabler() {
  const NeckType = document.getElementById("NeckType").value;
  const SxType = document.getElementById("SxType").value;
  const NeckDetails = document.getElementById("NeckDetails");
  const NeckDetailsBtn = document.getElementById("NeckDetailsBtn");
  const bsCollapseNeck = new bootstrap.Collapse(NeckDetails, {
    toggle: false,
  });

  const SameNeckDetails = document.getElementById("SameNeckDetails");
  const OppositeNeckDetails = document.getElementById("OppositeNeckDetails");
  const RNeckLNBoxes = document
    .getElementById("RNeckLNBoxes")
    .querySelectorAll("input");
  const RNeckStructureBoxes = document
    .getElementById("RNeckStructureBoxes")
    .querySelectorAll("input");
  const LNeckLNBoxes = document
    .getElementById("LNeckLNBoxes")
    .querySelectorAll("input");
  const LNeckStructureBoxes = document
    .getElementById("LNeckStructureBoxes")
    .querySelectorAll("input");

  const HistopathRow = document.getElementById("HistopathRow");
  const RNeckHP = document.getElementById("RNeckHP");
  const LNeckHP = document.getElementById("LNeckHP");
  const TNM = document.getElementById("TNM");

  //Hide both necks first evertime and reset onchage()
  SameNeckDetails.hidden = true;
  OppositeNeckDetails.hidden = true;
  NeckDetailsBtn.disabled = false;
  RNeckLNBoxes.forEach((box) => (box.checked = false));
  RNeckStructureBoxes.forEach((box) => (box.checked = false));
  LNeckLNBoxes.forEach((box) => (box.checked = false));
  LNeckStructureBoxes.forEach((box) => (box.checked = false));
  //Hiding HP everytime onchange()
  HistopathRow.hidden = true;
  RNeckHP.hidden = true;
  LNeckHP.hidden = true;
  TNM.hidden = true;

  if (NeckType === "Ipsilateral") {
    SameNeckDetails.hidden = false;
    bsCollapseNeck.show();
    HistopathRow.hidden = false;
    RNeckHP.hidden = false;
    TNM.hidden = false;
  }

  if (NeckType === "Bilateral") {
    SameNeckDetails.hidden = false;
    OppositeNeckDetails.hidden = false;
    bsCollapseNeck.show();
    HistopathRow.hidden = false;
    RNeckHP.hidden = false;
    LNeckHP.hidden = false;
    TNM.hidden = false;
  }

  if (NeckType === "Contralateral") {
    OppositeNeckDetails.hidden = false;
    bsCollapseNeck.show();
    HistopathRow.hidden = false;
    LNeckHP.hidden = false;
    TNM.hidden = false;
  }

  //We need the HP to persist if Primary done
  if (SxType) {
    HistopathRow.hidden = false;
    TNM.hidden = false;
  }
}

function NeckEnablerNoReset() {
  const NeckType = document.getElementById("NeckType").value;
  const SxType = document.getElementById("SxType").value;
  const NeckDetails = document.getElementById("NeckDetails");
  const NeckDetailsBtn = document.getElementById("NeckDetailsBtn");
  const bsCollapseNeck = new bootstrap.Collapse(NeckDetails, {
    toggle: false,
  });

  const SameNeckDetails = document.getElementById("SameNeckDetails");
  const OppositeNeckDetails = document.getElementById("OppositeNeckDetails");
  const RNeckLNBoxes = document
    .getElementById("RNeckLNBoxes")
    .querySelectorAll("input");
  const RNeckStructureBoxes = document
    .getElementById("RNeckStructureBoxes")
    .querySelectorAll("input");
  const LNeckLNBoxes = document
    .getElementById("LNeckLNBoxes")
    .querySelectorAll("input");
  const LNeckStructureBoxes = document
    .getElementById("LNeckStructureBoxes")
    .querySelectorAll("input");

  const HistopathRow = document.getElementById("HistopathRow");
  const RNeckHP = document.getElementById("RNeckHP");
  const LNeckHP = document.getElementById("LNeckHP");
  const TNM = document.getElementById("TNM");

  //Hide both necks first evertime and reset onchage()
  SameNeckDetails.hidden = true;
  OppositeNeckDetails.hidden = true;
  NeckDetailsBtn.disabled = false;

  //Hiding HP everytime onchange()
  HistopathRow.hidden = true;
  RNeckHP.hidden = true;
  LNeckHP.hidden = true;
  TNM.hidden = true;

  if (NeckType === "Ipsilateral") {
    SameNeckDetails.hidden = false;
    bsCollapseNeck.show();
    HistopathRow.hidden = false;
    RNeckHP.hidden = false;
    TNM.hidden = false;
  }

  if (NeckType === "Bilateral") {
    SameNeckDetails.hidden = false;
    OppositeNeckDetails.hidden = false;
    bsCollapseNeck.show();
    HistopathRow.hidden = false;
    RNeckHP.hidden = false;
    LNeckHP.hidden = false;
    TNM.hidden = false;
  }

  if (NeckType === "Contralateral") {
    OppositeNeckDetails.hidden = false;
    bsCollapseNeck.show();
    HistopathRow.hidden = false;
    LNeckHP.hidden = false;
    TNM.hidden = false;
  }

  //We need the HP to persist if Primary done
  if (SxType) {
    HistopathRow.hidden = false;
    TNM.hidden = false;
  }
}

//////////////////////////// Node HP Enabler Function ////////////////////
function NodeHPEnabler(side) {
  const PositNode = document.getElementById(`${side}PositNodes`);
  const InvolvedNodes = document.getElementById(`${side}InvolvedNodes`);
  const PositNodeDetails = document.getElementById(`${side}PositNodeDetails`);
  const InvolvedNodesInput = InvolvedNodes.querySelectorAll("input");
  const InvolvedNodesSelect = InvolvedNodes.querySelectorAll("select");
  const PositNodeDetailsInput = PositNodeDetails.querySelectorAll("input");
  const PositNodeDetailsSelect = PositNodeDetails.querySelectorAll("select");

  if (PositNode.value && PositNode.value != 0) {
    InvolvedNodesInput.forEach((input) => {
      input.disabled = false;
    });
    InvolvedNodesSelect.forEach((select) => {
      select.disabled = false;
    });
    PositNodeDetailsInput.forEach((input) => {
      input.disabled = false;
    });
    PositNodeDetailsSelect.forEach((select) => {
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
    PositNodeDetailsInput.forEach((input) => {
      input.disabled = true;
      input.checked = false;
      input.value = "";
    });
    PositNodeDetailsSelect.forEach((select) => {
      select.disabled = true;
      select.value = "";
    });
  }
}

//////////////////////////// Add Investigation Function //////////////////
function addInvestigation() {
  const date = document.getElementById("InvDate");
  const type = document.getElementById("InvType");
  const site = document.getElementById("InvSite");
  const findings = document.getElementById("InvFindings");

  if (!type.value || !findings.value) {
    alert("Please enter relevant Investigation details");
  } else {
    const tableBody = document.getElementById("InvTable");

    const row = document.createElement("tr");

    const typeCell = document.createElement("td");
    typeCell.innerText = type.value;
    const siteCell = document.createElement("td");
    !site ? (siteCell.innerText = "") : (siteCell.innerText = site.value);
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

//////////////////////////// Generating Datalists Function ///////////////
function populateDatalist(listname, optionsArray) {
  const datalist = document.getElementById(listname);
  optionsArray.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    datalist.appendChild(option);
  });
}

populateDatalist("inv-type", InvTypeArray);
populateDatalist("inv-site", InvSiteArray);
populateDatalist("PNILVIlist", PNILVIArray);
populateDatalist("margins", marginsArray)

////////////////////////// Lazy Load Background Videos & Init Tooltips ///////////////////
window.onload = function () {
  const videoBackground = document.getElementById("video-background");
  const video = videoBackground.querySelector("video");
  const source = video.querySelector("source");

  // Set the video source and start loading it
  source.src = "bgvideos/autumn forest.mp4";
  video.load();

  // Show the video once it's ready to play
  video.oncanplaythrough = function () {
    videoBackground.style.display = "block";
  };
  // Init Tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
};

////////////////////////// Populate From from pt ///////////////////

function PopulateForm(patient) {
  const form = document.getElementById("primaryInfo");
  form.reset();

  console.log(patient);

  //Putting the ID for update and delete purposes 
  document.getElementById("PatientID").value = patient._id

  //Inputting Traditionals
  for (const input in patient) {
    //Loop through all "enumerable" propeties of an object using for...in loop
    if (patient.hasOwnProperty(input)) {
      //hasOwnPropery ensures that only its own (and not inherited) properties are looped through
      const FormInput = document.getElementById(input);
      if (FormInput) {
        FormInput.value = patient[input];
      }
    }
  }

  //Inputting Inv Table (Note: InvTable is stored as a string)
  if (patient.InvTableRows) {
    const tableBody = document.getElementById("InvTable");
    tableBody.innerHTML = patient.InvTableRows;
    const AlldeleteBtns = tableBody.querySelectorAll("button");
    AlldeleteBtns.forEach((btn) => {
      btn.type = "button";
      btn.onclick = () =>
        confirm("Delete Investigation?") ? btn.closest("tr").remove() : false;
    });
  }

  //Inputting Tagifys

  SxSideTagify.addTags(patient.SxSide);
  SxSiteTagify.addTags(patient.SxSite);
  IncisionsTagify.addTags(patient.Incisions);
  AddlMucosalTagify.addTags(patient.AdditionalSitesMucosal);
  AddlMandibleTagify.addTags(patient.AdditionalSitesMandible);
  AddlMaxillaTagify.addTags(patient.AdditionalSitesMaxilla);
  AddlDeeperTagify.addTags(patient.AdditionalSitesDeeper);
  AddlSkinTagify.addTags(patient.AdditionalSitesSkin);
  AddlProTagify.addTags(patient.AdditionalPro);
  RNeckExtentTagify.addTags(patient.RNeckExtent);
  LNeckExtentTagify.addTags(patient.LNeckExtent);
  ReconTypeTagify.addTags(patient.ReconType);

  //Checking Boxes
  patient.RNeckLNRemoved.forEach(checkbox => {
    document.getElementById(`R${checkbox}`).checked = true
  })
  patient.RNeckStructureRemoved.forEach(checkbox => {
    document.getElementById(`R${checkbox}`).checked = true
  })
  patient.LNeckStructureRemoved.forEach(checkbox => {
    document.getElementById(`L${checkbox}`).checked = true
  })
  patient.LNeckLNRemoved.forEach(checkbox => {
    document.getElementById(`L${checkbox}`).checked = true
  })
  patient.RInvolvedNodes.forEach(checkbox => {
    document.getElementById(`RHP${checkbox}`).checked = true
  })
  patient.LInvolvedNodes.forEach(checkbox => {
    document.getElementById(`LHP${checkbox}`).checked = true 
  })

  //Expanding inputs and enabling btns
  FirstVisitEnabler()
  RxEnabler()
  
  const bsCollapseInvAccordion = new bootstrap.Collapse(document.getElementById("flush-collapseOne"), {
    toggle: false,
  });
  bsCollapseInvAccordion.show()
  
  const bsCollapseNotesAccordion = new bootstrap.Collapse(document.getElementById("flush-collapseTwo"), {
    toggle: false,
  });
  bsCollapseNotesAccordion.show()

  document.getElementById("PrimaryTumourDetailsBtn").disabled = false
  document.getElementById("NeckDetailsBtn").disabled = false

  PrimaryEnablerNoReset()
  NeckEnablerNoReset()
  NodeHPEnabler("R")
  NodeHPEnabler("L")

  // Resizing the textareas
  const Textareas = document.getElementById("primaryInfo").querySelectorAll("textarea")
  Textareas.forEach(textarea => textarea.style.height = textarea.scrollHeight + 3 + "px")
}
