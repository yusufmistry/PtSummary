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
      form.classList.add("was-validated");

      document.getElementById("Submitbutton").textContent =
        "Some essential data is missing or incorrect";
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
