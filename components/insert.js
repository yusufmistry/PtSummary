const testDiv = document.getElementById("test-div");

testDiv.innerHTML = 
`<!-- Treatment -->
<div class="row border rounded-5 bg-light px-3 pb-4 gx-1 gy-2 mb-4">
  <!-- R0 - Title - Treatment -->
  <div class="col-sm-12">
    <h4 id="scrollspyHeading4" class="text-center border-bottom pb-2">
      Treatment
    </h4>
  </div>

  <!-- DR1 - Treatment Type, Date, Place -->
  <!-- MR1 - Treatment Type -->
  <div class="col-sm-6">
    <div class="form-floating">
      <select class="form-control" id="RxType" disabled>
        <option value="Surgery">Surgery</option>
      </select>
      <label for="RxType">Treatment Type*</label>
    </div>
  </div>

  <!-- MR2 - Date, Place -->
  <div class="col-sm-6">
    <div class="row gx-1">
      <!-- Date -->
      <div class="col-6">
        <div class="form-floating">
          <input type="date" class="form-control" id="SxDate" />
          <label for="SxDate">Date*</label>
        </div>
      </div>

      <!-- Place -->
      <div class="col-6">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="SxPlace"
            placeholder="Hospital Name"
          />
          <label for="SxPlace">Place</label>
        </div>
      </div>
    </div>
  </div>

  <!-- Treatment Collapsible Rows (Currently Always show as Rx always Surgery)-->
  <!-- hidden  -->
  <div class="col-sm-12" id="RxExpanded">
    <div class="row gx-1 gy-2">
      <!----------------- 1. DR2 - Primary Select ------------------------->
      <!-- MR3&4 - Primary Select (Header & Input) -->
      <!-- Primary Select Header -->
      <div class="col-sm-12">
        <h5 class="border-bottom">Primary</h5>
      </div>

      <!-- Primary Select Input -->
      <div class="col-sm-12">
        <div class="form-group">
          <label for="SxType">Surgery Type</label>
          <select class="form-control" id="SxType" onchange="PrimaryEnabler()">
            <option value="">Not Addressed</option>
            <option value="Wide Excision">Wide Excision</option>
            <option value="Composite Resection">Composite Resection</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <!---------------- DR3-6 Primary Collapsible Rows Enabled on onchange ----->
      <div class="col-sm-12" id="PrimaryTumourDetails" hidden>
        <div class="row gx-1 gy-2 border p-3 rounded-3">
          <!-- DR3 - Main Site, Side, Incision -->
          <!-- MR5 - Main Site, Side -->
          <div class="col-sm-6">
            <div class="row gx-1">
              <!-- Main Site -->
              <div class="col-6">
                <div class="form-group">
                  <label for="SxSite">Primary Site</label>
                  <input
                    type="text"
                    class="form-control"
                    id="SxSite"
                    placeholder="Select"
                    style="font-size: smaller"
                  />
                </div>
              </div>

              <!-- Side -->
              <div class="col-6">
                <div class="form-group">
                  <label for="SxSide">Side</label>
                  <input
                    type="text"
                    class="form-control"
                    id="SxSide"
                    placeholder="Select"
                    style="font-size: smaller"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- MR6 - Incision -->
          <div class="col-sm-6">
            <div class="form-group">
              <label for="Incisions">Incisions (optional)</label>
              <input
                type="text"
                class="form-control"
                id="Incisions"
                placeholder="Type to Search"
              />
            </div>
          </div>

          <!-- DR4 - Addl Mucosa, Addl Mandible -->
          <!-- MR7 - Addl Mucosa -->
          <div class="col-sm-6">
            <div class="form-group">
              <label for="AdditionalSitesMucosal"
                >Additional Sites - Mucosal</label
              >
              <input
                type="text"
                class="form-control"
                id="AdditionalSitesMucosal"
                placeholder="Type to Search"
              />
            </div>
          </div>

          <!-- MR8 - Addl Mandible  -->
          <div class="col-sm-6">
            <div class="form-group">
              <label for="AdditionalSitesMandible"
                >Additional Sites - Mandible</label
              >
              <input
                type="text"
                class="form-control"
                id="AdditionalSitesMandible"
                placeholder="Type to Search"
              />
            </div>
          </div>

          <!-- DR5 - Addl Maxilla, Addl Deeper -->
          <!-- MR9 - Addl Maxilla -->
          <div class="col-sm-6">
            <div class="form-group">
              <label for="AdditionalSitesMaxilla"
                >Additional Sites - Maxilla</label
              >
              <input
                type="text"
                class="form-control"
                id="AdditionalSitesMaxilla"
                placeholder="Type to Search"
              />
            </div>
          </div>

          <!-- MR10 - Addl Deeper -->
          <div class="col-sm-6">
            <div class="form-group">
              <label for="AdditionalSitesDeeper"
                >Additional Sites - Deeper Structures</label
              >
              <input
                type="text"
                class="form-control"
                id="AdditionalSitesDeeper"
                placeholder="Type to Search"
              />
            </div>
          </div>

          <!-- DR6 - Addl Skin, Addl Procedures -->
          <!-- MR11 - Addl Skin -->
          <div class="col-sm-6">
            <div class="form-group">
              <label for="AdditionalSitesSkin">Additional Sites - Skin</label>
              <input
                type="text"
                class="form-control"
                id="AdditionalSitesSkin"
                placeholder="Type to Search"
              />
            </div>
          </div>

          <!-- MR12 - Addl Procedures -->
          <div class="col-sm-6">
            <div class="form-group">
              <label for="AdditionalPro">Additional Procedures</label>
              <input
                type="text"
                class="form-control"
                id="AdditionalPro"
                placeholder="Type to Search"
              />
            </div>
          </div>
        </div>
      </div>

      <!----------------- 2. DR2 - Neck Select ------------------------->
      <!-- MR3&4 - Neck Select (Header & Input)-->
      <!-- Neck Select Header -->
      <div class="col-sm-12">
        <h5 class="border-bottom">Neck Dissection</h5>
      </div>

      <!-- Neck Select Input -->
      <div class="col-sm-12">
        <div class="form-group">
          <label for="NeckType">Neck Dissection Details</label>
          <select class="form-control" id="NeckType" onchange="NeckEnabler()">
            <option value="">Not Addressed</option>
            <option value="Ipsilateral">Ipsilateral</option>
            <option value="Bilateral">Bilateral</option>
            <option value="Contralateral">Contralateral</option>
          </select>
        </div>
      </div>

      <!-- 1. DR3-4 Neck Dissection Collapsible Rows Same Neck on onchange  -->
      <div class="col-sm-12" id="SameNeckDetails" hidden>
        <div class="row gx-1 gy-2 border p-3 rounded-3">
          <!-------- Same Neck Details -------->
          <!-- Same Neck Details -->
          <!-- DR3 - Same Neck Header & Extent -->
          <!-- MR5&6 - Same Neck Header & Extent -->
          <div class="col-sm-12">
            <!-- Same Neck Header -->
            <p class="text-center border">
              <b>Same Side Neck</b><br />
              <span class="form-text">
                <i style="font-size: 0.7rem"
                  >In case of Central Disease: Right Neck</i
                ></span
              >
            </p>

            <!-- Extent -->
            <div class="form-floating">
              <select
                class="form-control"
                id="RNeckExtent"
                onchange="NeckDissectionFunction('R')"
              >
                <option value="">Select</option>
                <option value="Supra-Omohyoid Neck Dissection">
                  Supra-Omohyoid Neck Dissection
                </option>
                <option value="Extended Supra-Omohyoid Neck Dissection">
                  Extended Supra-Omohyoid Neck Dissection
                </option>
                <option value="Modified Radical Neck Dissection Type 3">
                  Modified Radical Neck Dissection Type 3
                </option>
                <option value="Modified Radical Neck Dissection Type 2">
                  Modified Radical Neck Dissection Type 2
                </option>
                <option value="Modified Radical Neck Dissection Type 1">
                  Modified Radical Neck Dissection Type 1
                </option>
                <option value="Radical Neck Dissection">
                  Radical Neck Dissection
                </option>
                <option value="Neck Exploration">Neck Exploration</option>
                <option value="Neck Re-Exploration">Neck Re-Exploration</option>
                <option value="Single Nodal Level">Single Nodal Level</option>
                <option value="Multiple Nodal Levels">
                  Multiple Nodal Levels
                </option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                id="RHiddenNeck"
                class="form-control"
                placeholder="Enter Details"
                hidden
              />
              <label for="RNeckExtent">Extent</label>
            </div>
          </div>

          <!-- DR4 - Same Neck Nodes and Structures -->
          <!-- MR7 - Same Neck Nodes -->
          <div class="col-sm-6">
            <p class="mb-0" style="font-size: 0.9rem">
              <b>Nodes Removed</b>
            </p>
            <!-- Node CheckBoxes -->
            <div class="form-text">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IA"
                  id="RIA"
                  disabled=""
                /><label>IA</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IB"
                  id="RIB"
                  disabled=""
                /><label>IB</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IIA"
                  id="RIIA"
                  disabled=""
                /><label>IIA</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IIB"
                  id="RIIB"
                  disabled=""
                /><label>IIB</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="III"
                  id="RIII"
                  disabled=""
                /><label>III</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IV"
                  id="RIV"
                  disabled=""
                /><label>IV</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="VA"
                  id="RVA"
                  disabled=""
                /><label>VA</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="VB"
                  id="RVB"
                  disabled=""
                /><label>VB</label>
              </div>
            </div>
          </div>

          <!-- MR8 - Same Neck Structures -->
          <div class="col-sm-6">
            <p class="mb-0" style="font-size: 0.9rem">
              <b>Structures Removed</b>
            </p>
            <!-- Structure CheckBoxes -->
            <div class="form-text">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="SCM"
                  id="RSCM"
                  disabled=""
                /><label>SCM</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="SAN"
                  id="RSAN"
                  disabled=""
                /><label>SAN</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IJV"
                  id="RIJV"
                  disabled=""
                /><label>IJV</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="SG"
                  id="RSG"
                  disabled=""
                /><label>SG</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Skin"
                  id="RSkin"
                  disabled=""
                /><label>Skin</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="HGN"
                  id="RHGN"
                  disabled=""
                /><label>HGN</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. DR3-4 Neck Dissection Collapsible Rows Opposite Neck on onchange  -->
      <div class="col-sm-12" id="OppositeNeckDetails" hidden>
        <div class="row gx-1 gy-2 border p-3 rounded-3">
          <!-------- Opposite Neck Details -------->
          <!-- Opposite Neck Details -->
          <!-- DR3 - Opposite Neck Header & Extent -->
          <!-- MR5&6 - Opposite Neck Header & Extent -->
          <div class="col-sm-12">
            <!-- Same Neck Header -->
            <p class="text-center border">
              <b>Opposite Side Neck</b><br />
              <span class="form-text">
                <i style="font-size: 0.7rem"
                  >In case of Central Disease: Left Neck</i
                ></span
              >
            </p>

            <!-- Extent -->
            <div class="form-floating">
              <select
                class="form-control"
                id="LNeckExtent"
                onchange="NeckDissectionFunction('L')"
              >
                <option value="">Select</option>
                <option value="Supra-Omohyoid Neck Dissection">
                  Supra-Omohyoid Neck Dissection
                </option>
                <option value="Extended Supra-Omohyoid Neck Dissection">
                  Extended Supra-Omohyoid Neck Dissection
                </option>
                <option value="Modified Radical Neck Dissection Type 3">
                  Modified Radical Neck Dissection Type 3
                </option>
                <option value="Modified Radical Neck Dissection Type 2">
                  Modified Radical Neck Dissection Type 2
                </option>
                <option value="Modified Radical Neck Dissection Type 1">
                  Modified Radical Neck Dissection Type 1
                </option>
                <option value="Radical Neck Dissection">
                  Radical Neck Dissection
                </option>
                <option value="Neck Exploration">Neck Exploration</option>
                <option value="Neck Re-Exploration">Neck Re-Exploration</option>
                <option value="Single Nodal Level">Single Nodal Level</option>
                <option value="Multiple Nodal Levels">
                  Multiple Nodal Levels
                </option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                id="LHiddenNeck"
                class="form-control"
                placeholder="Enter Details"
                hidden
              />
              <label for="LNeckExtent">Extent</label>
            </div>
          </div>

          <!-- DR4 - Opposite Neck Nodes and Structures -->
          <!-- MR7 - Opposite Neck Nodes -->
          <div class="col-sm-6">
            <p class="mb-0" style="font-size: 0.9rem">
              <b>Nodes Removed</b>
            </p>
            <!-- Node CheckBoxes -->
            <div class="form-text">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IA"
                  id="LIA"
                  disabled=""
                /><label>IA</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IB"
                  id="LIB"
                  disabled=""
                /><label>IB</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IIA"
                  id="LIIA"
                  disabled=""
                /><label>IIA</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IIB"
                  id="LIIB"
                  disabled=""
                /><label>IIB</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="III"
                  id="LIII"
                  disabled=""
                /><label>III</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IV"
                  id="LIV"
                  disabled=""
                /><label>IV</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="VA"
                  id="LVA"
                  disabled=""
                /><label>VA</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="VB"
                  id="LVB"
                  disabled=""
                /><label>VB</label>
              </div>
            </div>
          </div>

          <!-- MR8 - Opposite Neck Structures -->
          <div class="col-sm-6">
            <p class="mb-0" style="font-size: 0.9rem">
              <b>Structures Removed</b>
            </p>
            <!-- Structure CheckBoxes -->
            <div class="form-text">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="SCM"
                  id="LSCM"
                  disabled=""
                /><label>SCM</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="SAN"
                  id="LSAN"
                  disabled=""
                /><label>SAN</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="IJV"
                  id="LIJV"
                  disabled=""
                /><label>IJV</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="SG"
                  id="LSG"
                  disabled=""
                /><label>SG</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Skin"
                  id="LSkin"
                  disabled=""
                /><label>Skin</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Parotid"
                  id="LParotid"
                  disabled=""
                /><label>Parotid</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="HGN"
                  id="LHGN"
                  disabled=""
                /><label>HGN</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!----------------- 3. DR2 - Reconstruction ------------------------->
      <!-- MR3&4 - Recon Select (Header & Input) -->
      <!-- Recon Select Header  -->
      <div class="col-sm-12">
        <h5 class="border-bottom">Reconstruction</h5>
      </div>

      <!-- Recon Select Input -->
      <div class="col-sm-12">
        <div class="form-group">
          <label for="ReconType">Reconstruction Details</label>
          <input class="form-control" id="ReconType" />
        </div>
      </div>

      <!-----------------  DR7 - Notes Accordion------------------------->
      <div class="col-sm-12 accordion mt-2">
        <!-- Notes Accordion Header Btn -->
        <h5 class="border-bottom accordion-header">
          <button
            class="accordion-button collapsed h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
          >
            Additional Notes
          </button>
        </h5>

        <!-- Collapsible Notes inputs -->
        <div class="row gx-1 gy-2 collapse" id="flush-collapseTwo">
          <!-- MR13 - Intra-op notes -->
          <div class="col-sm-6">
            <div class="form-floating">
              <textarea
                id="IntraopNotes"
                class="form-control"
                style="height: 10vh"
                placeholder="Describe the patients compliants here"
              ></textarea>
              <label for="IntraopNotes">Intra-operative Notes, if any</label>
              <div class="form-text" style="font-size: 0.7rem;">
                Intra-operative details such as Frozen Section, Complications,
                or other noteworthy events may be mentioned here
              </div>
            </div>
          </div>

          <!-- MR14 - Post-op notes -->
          <div class="col-sm-6">
            <div class="form-floating">
              <textarea
                id="PostopNotes"
                class="form-control"
                style="height: 10vh"
                placeholder="Describe the patients compliants here"
                required
              ></textarea>
              <label for="PostopNotes">Post-operative Notes, if any</label>
              <div class="form-text" style="font-size: 0.7rem;">
                Post-operative complications, Haematoma, Re-exploration or other
                noteworthy events may be mentioned here
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4 offset-sm-8">
        <div class="form-group">
            <label for="DischargeDate">Discharge Date</label>
            <input type="date" id="DischargeDate" class="form-control" />
          </div>
      </div>
    </div>
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
