// /////////////////////// Validation Function (BS 5.3)////////////////////
(function validateForm() {
  "use strict";

  const form = document.getElementById("primaryInfo");

  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      console.log("submit button clicked");

      form.classList.add("was-validated");

      const SavedFailToast = bootstrap.Toast.getOrCreateInstance(
        document.getElementById("SavedFailToast")
      );
      SavedFailToast.show();

      window.scrollTo({ top: 0, behavior: "smooth" });

      if (form.checkValidity()) {
        event.preventDefault();
        console.log("submit button clicked and form is validated");

        const AllInputList = document
          .getElementById("primaryInfo")
          .querySelectorAll("input");
        const AllSelectList = document
          .getElementById("primaryInfo")
          .querySelectorAll("select");
        const AllTextareaList = document
          .getElementById("primaryInfo")
          .querySelectorAll("textarea");

        const AllUserInputsList = [
          ...AllInputList,
          ...AllSelectList,
          ...AllTextareaList,
        ];

        // 0. Create a UserInputObject which will conatin details of all inputs
        const UserInputsObj = {};

        // 1. Pushing all traditional inputs into the UserInputObj
        AllUserInputsList.forEach(
          (userinput) => (UserInputsObj[userinput.id] = userinput.value)
        );

        // 2. Pushing the InvTable into te UserInputObj

        const InvTableRows = document.getElementById("InvTable").innerHTML;

        UserInputsObj["InvTableRows"] = InvTableRows;

        console.log(UserInputsObj);

        // 3. Pushing the Tagifys into UserInputObj

        UserInputsObj.SxSite = SxSiteTagify.value[0]
          ? SxSiteTagify.value[0].value
          : "";
        UserInputsObj.SxSide = SxSideTagify.value[0]
          ? SxSideTagify.value[0].value
          : "";
        UserInputsObj.Incisions = IncisionsTagify.value[0]
          ? IncisionsTagify.value[0].value
          : "";
        UserInputsObj.AdditionalSitesMucosal = AddlMucosalTagify.value.map(
          (obj) => obj.value
        );
        UserInputsObj.AdditionalSitesMandible = AddlMandibleTagify.value.map(
          (obj) => obj.value
        );
        UserInputsObj.AdditionalSitesMaxilla = AddlMaxillaTagify.value.map(
          (obj) => obj.value
        );
        UserInputsObj.AdditionalSitesDeeper = AddlDeeperTagify.value.map(
          (obj) => obj.value
        );
        UserInputsObj.AdditionalSitesSkin = AddlSkinTagify.value.map(
          (obj) => obj.value
        );
        UserInputsObj.AdditionalPro = AddlProTagify.value.map(
          (obj) => obj.value
        );
        UserInputsObj.RNeckExtent = RNeckExtentTagify.value[0]
          ? RNeckExtentTagify.value[0].value
          : "";
        UserInputsObj.LNeckExtent = LNeckExtentTagify.value[0]
          ? LNeckExtentTagify.value[0].value
          : "";
        UserInputsObj.ReconType = ReconTypeTagify.value[0]
          ? ReconTypeTagify.value[0].value
          : "";

        // 4. Pushing the checkboxes into UserInputObj

        axios.post("https://ptsummary-8945f270453f.herokuapp.com/", UserInputsObj);

        const SavedSucessToast = bootstrap.Toast.getOrCreateInstance(
          document.getElementById("SavedSuccessToast")
        );
        SavedSucessToast.show();

        form.classList.remove("was-validated");
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    false
  );
})();

/////////////////////////// Content Enabler Function //////////////////////
function ContentEnabler(inputId, contentdivID, btnId) {
  const checkInput = document.getElementById(inputId).value;
  const Btn = document.getElementById(btnId);
  const ContentDiv = document.getElementById(contentdivID);
  const bsCollapse = new bootstrap.Collapse(ContentDiv, {
    toggle: false,
  });

  if (checkInput) {
    if (Btn) {
      Btn.disabled = false;
    }

    AllInputs = ContentDiv.querySelectorAll("input");
    AllSelects = ContentDiv.querySelectorAll("select");
    AllTextareas = ContentDiv.querySelectorAll("textarea");

    if (AllInputs[0]) {
      AllInputs.forEach((input) => (input.disabled = false));
    }

    if (AllTextareas[0]) {
      AllTextareas.forEach((textarea) => (textarea.disabled = false));
    }

    if (AllSelects[0]) {
      AllSelects.forEach((select) => (select.disabled = false));
    }

    bsCollapse.show();
  } else {
    if (Btn) {
      Btn.disabled = true;
    }
    bsCollapse.hide();

    if (AllInputs[0]) {
      AllInputs.forEach((input) => (input.disabled = true));
    }

    if (AllTextareas[0]) {
      AllTextareas.forEach((textarea) => (textarea.disabled = true));
    }

    if (AllSelects[0]) {
      AllSelects.forEach((select) => (select.disabled = true));
    }
  }
}

///////////////////////////// Primary Enabler Function ///////////////////
function PrimaryEnabler() {
  const SxType = document.getElementById("SxType").value;
  const NeckType = document.getElementById("NeckType").value;
  const PrimaryTumourDetails = document.getElementById("PrimaryTumourDetails");
  const SameNeckDetails = document.getElementById("SameNeckDetails");
  const OppositeNeckDetails = document.getElementById("OppositeNeckDetails");

  const HistopathRow = document.getElementById("HistopathRow");
  const PrimaryHP = document.getElementById("PrimaryHP");
  const RNeckHP = document.getElementById("RNeckHP");
  const LNeckHP = document.getElementById("LNeckHP");
  const TNM = document.getElementById("TNM");

  const bsCollapsePrimary = new bootstrap.Collapse(PrimaryTumourDetails, {
    toggle: false,
  });
  const bsCollapseSameNeck = new bootstrap.Collapse(SameNeckDetails, {
    toggle: false,
  });
  const bsCollapseOppositeNeck = new bootstrap.Collapse(OppositeNeckDetails, {
    toggle: false,
  });

  const bsCollapseHistopathRow = new bootstrap.Collapse(HistopathRow, {
    toggle: false,
  });
  const bsCollapseTNM = new bootstrap.Collapse(TNM, {
    toggle: false,
  });
  const bsCollapsePrimaryHP = new bootstrap.Collapse(PrimaryHP, {
    toggle: false,
  });
  const bsCollapseHPRNeck = new bootstrap.Collapse(RNeckHP, {
    toggle: false,
  });
  const bsCollapseHPLNeck = new bootstrap.Collapse(LNeckHP, {
    toggle: false,
  });

  if (!SxType && !NeckType) {
    bsCollapsePrimary.hide();
    bsCollapseSameNeck.hide();
    bsCollapseOppositeNeck.hide();
    bsCollapsePrimaryHP.hide();
    bsCollapseHPRNeck.hide();
    bsCollapseHPLNeck.hide();
    bsCollapseTNM.hide();
    bsCollapseHistopathRow.hide();
  }

  if (SxType) {
    bsCollapsePrimary.show();
    bsCollapsePrimaryHP.show();
    bsCollapseTNM.show();
    bsCollapseHistopathRow.show();
  }

  if (!SxType) {
    bsCollapsePrimary.hide();
    bsCollapsePrimaryHP.hide();
  }

  if (NeckType === "Ipsilateral") {
    bsCollapseSameNeck.show();
    bsCollapseOppositeNeck.hide();
    bsCollapseHPRNeck.show();
    bsCollapseHPLNeck.hide();
    bsCollapseTNM.show();
    bsCollapseHistopathRow.show();
  }

  if (NeckType === "Contralateral") {
    bsCollapseSameNeck.hide();
    bsCollapseOppositeNeck.show();
    bsCollapseHPRNeck.hide();
    bsCollapseHPLNeck.show();
    bsCollapseTNM.show();
    bsCollapseHistopathRow.show();
  }

  if (NeckType === "Bilateral") {
    bsCollapseSameNeck.show();
    bsCollapseOppositeNeck.show();
    bsCollapseHPRNeck.show();
    bsCollapseHPLNeck.show();
    bsCollapseTNM.show();
    bsCollapseHistopathRow.show();
  }

  if (!NeckType) {
    bsCollapseSameNeck.hide();
    bsCollapseOppositeNeck.hide();
    bsCollapseHPRNeck.hide();
    bsCollapseHPLNeck.hide();
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

////////////////////////// Lazy Load Background Videos ///////////////////
window.onload = function () {
  const videoBackground = document.getElementById("video-background");
  const video = videoBackground.querySelector("video");
  const source = video.querySelector("source");

  // Set the video source and start loading it
  source.src = "bgvideos/aurora.mp4";
  video.load();

  // Show the video once it's ready to play
  video.oncanplaythrough = function () {
    videoBackground.style.display = "block";
  };
};

////////////////////////// Load Patient List ///////////////////
function GetPatientList() {
  const PatientNameList = document.getElementById("PatientNameList");

  //if statement used so that the list is Only populated once
  if (PatientNameList.innerText === "") {
    axios
      .get("https://ptsummary-8945f270453f.herokuapp.com/patientlist")
      .then((response) => {
        const PatientList = response.data;
        PatientList.forEach((patient) => {
          li = document.createElement("li");
          button = document.createElement("button");
          button.className = "btn btn-link p-1";
          button.textContent = patient.patientName;
          button.onclick = () => PopulateForm(patient);

          li.appendChild(button);
          PatientNameList.appendChild(li);
        });
      })
      .catch((err) => console.log(err));
  }
}

////////////////////////// Populate From from pt ///////////////////

function PopulateForm(patient) {
  const form = document.getElementById("primaryInfo");
  form.reset();

  console.log(patient);

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

  SxSideTagify.addTags(patient.SxSide)
  SxSiteTagify.addTags(patient.SxSite)
  IncisionsTagify.addTags(patient.Incisions)
  AddlMucosalTagify.addTags(patient.AdditionalSitesMucosal)
  AddlMandibleTagify.addTags(patient.AdditionalSitesMandible)
  AddlMaxillaTagify.addTags(patient.AdditionalSitesMaxilla)
  AddlDeeperTagify.addTags(patient.AdditionalSitesDeeper)
  AddlSkinTagify.addTags(patient.AdditionalSitesSkin)
  AddlProTagify.addTags(patient.AdditionalPro)
  RNeckExtentTagify.addTags(patient.RNeckExtent)
  LNeckExtentTagify.addTags(patient.LNeckExtent)
  ReconTypeTagify.addTags(patient.ReconType)
}
