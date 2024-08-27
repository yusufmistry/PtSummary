const testDiv = document.getElementById("test-div");

testDiv.innerHTML = 
`
<!-- Generate Summary and Save Btn -->
<div class="row border rounded-5 bg-light px-3 pb-4 gx-1 gy-2 mb-4">
    <!-- R0 - Title - Subsequent Follow-up -->
    <div class="col-sm-12">
      <h4 id="scrollspyHeading8" class="text-center border-bottom pb-2">
        Generate Summary and Save
      </h4>
    </div>

    <!-- DR1 Incomplete Message Div, Submit Btn, Generate Summary Btn-->
    <div class="d-grid col-10 mx-auto">
        <div
          class="form-text text-danger text-center"
          id="Submitbutton"
        ></div>
        <button class="btn btn-primary mb-2" onclick="genSummary()">Generate Summary</button>
        <button class="btn btn-success" type="submit">Save to Database</button>
      </div>
</div>
`

function ButtonEnabler(input, btn) {
  const checkInput = document.getElementById(input).value;
  if (checkInput) {
    document.getElementById(btn).disabled = false;
  } else {
    document.getElementById(btn).disabled = true;
  }
}

const InvTypeInput = document.getElementById("InvType");
const InvTypeList = ["A", "B", "C"];
const InvTypeTagify = new Tagify(InvTypeInput, {
  mode: 'select',
  whitelist: InvTypeList
})

const InvSiteInput = document.getElementById("InvSite");
const InvSiteList = ["X", "Y", "Z"];
const InvSiteTagify = new Tagify(InvSiteInput, {
  mode: 'select',
  whitelist: InvSiteList
})



function addInvestigation() {
  const date = document.getElementById('InvDate');
  const type = InvTypeTagify.value[0];
  const site = InvSiteTagify.value[0];
  const findings = document.getElementById('InvFindings');

  if (!type || !findings.value) {
    alert("Please enter relevant Investigation details");
  } else {
    const tableBody = document.getElementById("InvTable");

    const row = document.createElement("tr");

    const typeCell = document.createElement("td");
    typeCell.innerText = type.value;
    const siteCell = document.createElement("td");
    !site ? siteCell.innerText = "" : siteCell.innerText = site.value
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
    InvTypeTagify.removeAllTags()
    InvSiteTagify.removeAllTags()
    date.value = "";
    findings.value = "";
  }
}


function NeckEnabler(){
  const NeckType = document.getElementById("NeckType").value
  const SameNeckDetails = document.getElementById("SameNeckDetails")
  const OppositeNeckDetails = document.getElementById("OppositeNeckDetails")

  console.log(NeckType)

  if(NeckType === "Ipsilateral"){
    SameNeckDetails.hidden = false
    OppositeNeckDetails.hidden = true
  } else if(NeckType === "Contralateral"){
    SameNeckDetails.hidden = true
    OppositeNeckDetails.hidden = false
  } else if(NeckType === "Bilateral") {
    SameNeckDetails.hidden = false
    OppositeNeckDetails.hidden = false
  } else {
    SameNeckDetails.hidden = true
    OppositeNeckDetails.hidden = true
  }
}
