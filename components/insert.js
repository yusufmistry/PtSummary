const testDiv = document.getElementById("test-div");

testDiv.innerHTML = 
`
<!-- Primary Info -->
<div class="row border rounded-5 bg-light px-3 pb-4 gx-1 gy-2 mb-4">
  <!-- R0 - Title - Histopathology -->
  <div class="col-sm-12">
    <h4 id="scrollspyHeading5" class="text-center border-bottom pb-2">
      Histopathology
    </h4>
  </div>

  <!-- All Collapsible opened on inputs from Sx ---------->
  <!----------- 1. DR1-3 - Primary Histopath hidden --------------->
  <div class="col-sm-12" id="PrimayHP">
    <!-- Disclaimer -->
    <div class="row gx-1 gy-1 p-1 border">
      <p class="text-center mb-1"><b>Primary Tumour HP</b></p>
      <div class="form-text" style="font-size: 0.7rem">
        Please input all values in millimeters (mm) only
      </div>
      <!-- DR1 - Histo, DOI, Size -->
      <!-- MR1 - Histo, DOI -->
      <div class="col-sm-5">
        <div class="row gx-1">
          <!-- Histo -->
          <div class="col-8">
            <div class="input-group">
              <span class="input-group-text bg-body-secondary" for="Histology"
                >Histology</span
              >
              <select id="Histology" class="form-control">
                <option value="">Select</option>
                <option value="Well Differentiated SCC">WDSCC</option>
                <option value="Moderately Differentiated SCC">MDSCC</option>
                <option value="Poorly Differentiated SCC">PDSCC</option>
                <option value="Carcinoma in-situ">Carcinoma in-situ</option>
              </select>
            </div>
          </div>

          <!-- DOI -->
          <div class="col-4">
            <div class="input-group">
              <span class="input-group-text bg-body-secondary">DOI</span>
              <input
                type="text"
                pattern="\d{1,2}"
                id="TsizeDOI"
                class="form-control"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- MR2 - Size -->
      <div class="col-sm-7">
        <div class="input-group">
          <span class="input-group-text bg-body-secondary">Size</span>
          <input
            type="text"
            pattern="\d{1,2}"
            id="TsizeAP"
            class="form-control"
            placeholder="AP"
          />
          <span class="input-group-text">x</span>
          <input
            type="text"
            pattern="\d{1,2}"
            id="TsizeTrans"
            class="form-control"
            placeholder="T"
          />
          <span class="input-group-text">x</span>
          <input
            type="text"
            pattern="\d{1,2}"
            id="TsizeVert"
            class="form-control"
            placeholder="V"
          />
        </div>
      </div>

      <!-- DR2 - Margins, LVI,PNI,WPOI -->
      <!-- MR3 - Margins -->
      <div class="col-sm-6">
        <div class="row gx-1">
          <!-- Closest Margin -->
          <div class="col-8">
            <label for="ClosestMargin">Closest Margin</label>
            <div class="form-group">
              <input
                list="margins"
                type="text"
                id="ClosestMargin"
                class="form-control"
                placeholder="Select"
              />
              <datalist id="margins">
                <option value="Anterior">Anterior</option>
                <option value="Posterior">Posterior</option>
                <option value="Medial">Medial</option>
                <option value="Lateral">Lateral</option>
              </datalist>
            </div>
          </div>

          <!-- Distance -->
          <div class="col-4">
            <div class="form-group">
              <label for="MarginDistance">Distance</label>
              <input
                type="text"
                pattern="\d{1,2}"
                id="MarginDistance"
                class="form-control"
                placeholder="(in mm)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- MR4 - LVI,PNI,WPOI -->
      <div class="col-sm-6">
        <div class="row gx-1">
          <!-- PNI -->
          <div class="col-4">
            <div class="form-group">
              <label for="PNI">PNI</label>
              <select type="text" id="PNI" class="form-control">
                <option value="">Select</option>
                <option value="Absent">Absent</option>
                <option value="Present">Present</option>
                <option value="Unifocal Intratumoral">
                  Unifocal Intratumoral
                </option>
                <option value="Unifocal Extratumoral">
                  Unifocal Extratumoral
                </option>
                <option value="Multifocal Intratumoral">
                  Multifocal Intratumoral
                </option>
                <option value="Multifocal Extratumoral">
                  Multifocal Extratumoral
                </option>
              </select>
            </div>
          </div>

          <!-- LVI -->
          <div class="col-4">
            <div class="form-group">
              <label for="LVI">LVI</label>
              <select
                type="text"
                id="LVI"
                list="PNIDatalist"
                class="form-control"
              >
                <option value="">Select</option>
                <option value="Absent">Absent</option>
                <option value="Present">Present</option>
                <option value="Unifocal Intratumoral">
                  Unifocal Intratumoral
                </option>
                <option value="Unifocal Extratumoral">
                  Unifocal Extratumoral
                </option>
                <option value="Multifocal Intratumoral">
                  Multifocal Intratumoral
                </option>
                <option value="Multifocal Extratumoral">
                  Multifocal Extratumoral
                </option>
              </select>
            </div>
          </div>

          <!-- WPOI -->
          <div class="col-4">
            <div class="form-group">
              <label for="WPOI">WPOI</label>
              <select id="WPOI" class="form-control">
                <option value="">Select</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="I-IV">I-IV</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- DR3 - Bone,Skin,Muscle -->
      <!-- MR5&6 - Bone,Skin,Muscle -->
      <div class="col-sm-12">
        <div class="row gx-1">
          <!-- Bone -->
          <div class="col-4">
            <div class="form-group">
              <label for="BoneInv">Bone</label>
              <select id="BoneInv" class="form-control">
                <option value=""></option>
                <option value="Absent">Absent</option>
                <option value="Present">Present</option>
                <option value="Superficial Cortical">
                  Superficial Cortical
                </option>
                <option value="Deep Intramedullary">Deep Intramedullary</option>
              </select>
            </div>
          </div>

          <!-- Skin -->
          <div class="col-4">
            <div class="form-group">
              <label for="SkinInv">Skin</label>
              <select type="text" id="SkinInv" class="form-control">
                <option value=""></option>
                <option value="Absent">Absent</option>
                <option value="Absent">Present</option>
                <option value="Subdermal">Subdermal</option>
                <option value="Grossly involved">Grossly Involved</option>
              </select>
            </div>
          </div>

          <!-- Muscle -->
          <div class="col-4">
            <div class="form-group">
              <label for="MuscleInv">Muscle</label>
              <select id="MuscleInv" class="form-control">
                <option value=""></option>
                <option value="Absent">Absent</option>
                <option value="Present">Present</option>
                <option value="Present">Superficial</option>
                <option value="Present">Intrinsic</option>
                <option value="Present">Extrinsic</option>
                <option value="Present">Deep</option>
              </select>
            </div>
          </div>
          <div class="form-text" style="font-size: 0.7rem">
            Involvement of Structures. Select "Absent" if invasion is not
            present to record it <br />
            <i
              >Note: Superficial = Buccinator, Orbicularis etc. Deep =
              Masticator Space muscles</i
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!----------- 2. DR1-3 - RNeck Histopath hidden --------------->
  <div class="col-sm-12" id="RNeckHP">
    <div class="row gx-1 gy-1 p-1 border">
      <p class="text-center mb-1"><b>Same Side Neck HP</b></p>
      <!-- DR1 - RNodal Yeild,RPosit Nodes,RNodes Involved Check Boxes, RSizeNode,RSizeMet,RECS,RDistance -->
      <!-- MR1 - RNodal Yeild, RPosit Nodes,RNodes Involved Check Boxes -->
      <div class="col-sm-6">
        <div class="row gx-1 gy-1">
          <!-- RNodal Yeild, RPositNodes -->
          <div class="col-12">
            <div class="input-group">
              <span class="input-group-text bg-body-secondary" for="RNodalYeild"
                >Nodal Yeild</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="RNodalYeild"
                class="form-control"
                disabled
              />
              <span class="input-group-text bg-body-secondary" for="RPositNodes"
                >+ive Nodes</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="RPositNodes"
                class="form-control"
                onchange="NodeEnabler('R')"
                disabled
              />
            </div>
          </div>

          <!-- RNodes Involved Check Boxes -->
          <div class="col-12">
            <div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="RHP1a"
                  value="RIA"
                  class="form-check-input"
                  disabled
                />
                <label for="RHP1a">IA</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="RHP1b"
                  value="RIB"
                  class="form-check-input"
                  disabled
                />
                <label for="RHP1b">IB</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="RHP2a"
                  value="RIIA"
                  class="form-check-input"
                  disabled
                />
                <label for="RHP2a">IIA</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="RHP2b"
                  value="RIIB"
                  class="form-check-input"
                  disabled
                />
                <label for="RHP2b">IIB</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="RHP3"
                  value="RIII"
                  class="form-check-input"
                  disabled
                />
                <label for="RHP3">III</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="RHP4"
                  value="RIV"
                  class="form-check-input"
                  disabled
                />
                <label for="RHP4">IV</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="RHP5"
                  value="RV"
                  class="form-check-input"
                  disabled
                />
                <label for="RHP5">V</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MR2 - RSizeNode,RSizeMet,RECS,RDistance -->
      <div class="col-sm-6">
        <div class="row gx-1 gy-1">
          <!-- RSizeNode,RSizeMet -->
          <div class="col-12">
            <div class="input-group">
              <span
                class="input-group-text text-wrap bg-body-secondary"
                for="RNodeSize"
                >Size Node</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="RNodeSize"
                class="form-control"
                disabled
              />
              <span
                class="input-group-text text-wrap bg-body-secondary"
                for="RMetSize"
                >Size Met</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="RMetSize"
                class="form-control"
                disabled
              />
            </div>
          </div>

          <!-- RECS,RDistance -->
          <div class="col-12">
            <div class="input-group">
              <span class="input-group-text bg-body-secondary" for="RECS"
                >ECS</span
              >
              <select id="RECS" class="form-control" disabled>
                <option value="">Select</option>
                <option value="Absent">Absent</option>
                <option value="Present">Present</option>
              </select>

              <span
                class="input-group-text bg-body-secondary"
                for="RECSDistance"
                >Distance</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="RECSDistance"
                class="form-control"
                placeholder="mm"
                disabled
              />
            </div>
          </div>

          <!-- RInfo Largest Node -->
          <div class="form-text" style="font-size: 0.7rem">
            Enter details of the <i>Largest</i> involved node
          </div>
        </div>
      </div>
    </div>
  </div>

  <!----------- 3. DR1-3 - LNeck Histopath hidden --------------->
  <div class="col-sm-12" id="LNeckHP">
    <div class="row gx-1 gy-1 p-1 border">
      <p class="text-center mb-1"><b>Contralateral Neck HP</b></p>
      <!-- DR1 - LNodal Yeild,LPosit Nodes,LNodes Involved Check Boxes, LSizeNode,LSizeMet,LECS,LDistance -->
      <!-- MR1 - LNodal Yeild, LPosit Nodes,LNodes Involved Check Boxes -->
      <div class="col-sm-6">
        <div class="row gx-1 gy-1">
          <!-- LNodal Yeild, LPositNodes -->
          <div class="col-12">
            <div class="input-group">
              <span class="input-group-text bg-body-secondary" for="LNodalYeild"
                >Nodal Yeild</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="LNodalYeild"
                class="form-control"
                disabled
              />
              <span class="input-group-text bg-body-secondary" for="LPositNodes"
                >+ive Nodes</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="LPositNodes"
                class="form-control"
                onchange="NodeEnabler('L')"
                disabled
              />
            </div>
          </div>

          <!-- LNodes Involved Check Boxes -->
          <div class="col-12">
            <div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="LHP1a"
                  value="LIA"
                  class="form-check-input"
                  disabled
                />
                <label for="LHP1a">IA</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="LHP1b"
                  value="LIB"
                  class="form-check-input"
                  disabled
                />
                <label for="LHP1b">IB</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="LHP2a"
                  value="LIIA"
                  class="form-check-input"
                  disabled
                />
                <label for="LHP2a">IIA</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="LHP2b"
                  value="LIIB"
                  class="form-check-input"
                  disabled
                />
                <label for="LHP2b">IIB</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="LHP3"
                  value="LIII"
                  class="form-check-input"
                  disabled
                />
                <label for="LHP3">III</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="LHP4"
                  value="LIV"
                  class="form-check-input"
                  disabled
                />
                <label for="LHP4">IV</label>
              </div>
              <div class="form-check form-check-inline col-1">
                <input
                  type="checkbox"
                  id="LHP5"
                  value="LV"
                  class="form-check-input"
                  disabled
                />
                <label for="LHP5">V</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MR2 - LSizeNode,LSizeMet,LECS,LDistance -->
      <div class="col-sm-6">
        <div class="row gx-1 gy-1">
          <!-- LSizeNode,LSizeMet -->
          <div class="col-12">
            <div class="input-group">
              <span
                class="input-group-text text-wrap bg-body-secondary"
                for="LNodeSize"
                >Size Node</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="LNodeSize"
                class="form-control"
                disabled
              />
              <span
                class="input-group-text text-wrap bg-body-secondary"
                for="LMetSize"
                >Size Met</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="LMetSize"
                class="form-control"
                disabled
              />
            </div>
          </div>

          <!-- LECS,LDistance -->
          <div class="col-12">
            <div class="input-group">
              <span class="input-group-text bg-body-secondary" for="LECS"
                >ECS</span
              >
              <select id="LECS" class="form-control" disabled>
                <option value="">Select</option>
                <option value="Absent">Absent</option>
                <option value="Present">Present</option>
              </select>

              <span
                class="input-group-text bg-body-secondary"
                for="LECSDistance"
                >Distance</span
              >
              <input
                type="text"
                pattern="\d{1,2}"
                id="LECSDistance"
                class="form-control"
                placeholder="mm"
                disabled
              />
            </div>
          </div>

          <!-- LInfo Largest Node -->
          <div class="form-text" style="font-size: 0.7rem">
            Enter details of the <i>Largest</i> involved node
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- DR7 - TNM, Calc Btn -->
  <!-- MR13 - TNM -->
  <div class="col-sm-6">
    <div class="form-group">
      <label for="Staging">TNM Staging</label>
      <div class="input-group">
        <span class="input-group-text bg-body-secondary">p</span>
        <span class="input-group-text bg-body-secondary">T</span>
        <input
          class="form-control"
          type="text"
          name="Tstage"
          id="Tstage"
          value=""
        />
        <span class="input-group-text bg-body-secondary">N</span>
        <input
          class="form-control"
          type="text"
          name="Nstage"
          id="Nstage"
          value=""
        />
      </div>
      <div class="form-text">According to AJCC 8th Edition</div>
    </div>
  </div>

  <!-- MR14 - Calc Btn -->
  <div class="col-sm-6 align-self-center">
    <div class="d-grid col-10 mx-auto">
      <button class="btn btn-primary" onclick="CalcpTNM()">
        Auto Calculate TNM
      </button>
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
