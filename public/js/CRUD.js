////////////////////////// Get Patient List ///////////////////
function GetPatientList() {
  const PatientNameList = document.getElementById("PatientNameList");

  //if statement used so that the list is Only populated once
  if (PatientNameList.innerText === "") {
    axios
      .get("https://ptsummary-8945f270453f.herokuapp.com/patientlist")
      .then((response) => {
        const PatientList = response.data;
        const tableBody = document.getElementById("InvTable");
        PatientList.forEach((patient) => {
          const row = document.createElement("tr");
          const NameCell = document.createElement("td");
          const NameBtn = document.createElement("button");
          NameBtn.className = "btn btn-link";
          NameBtn.textContent = patient.patientName;
          NameBtn.onclick = () => PopulateForm(patient);
          NameCell.appendChild(NameBtn);

          const AgeCell = document.createElement("td");
          AgeCell.innerText = patient.age;

          const DxCell = document.createElement("td");
          patient.Diagnosis
            ? (DxCell.innerText = patient.Diagnosis)
            : (DxCell.innerText = "");

          const IPDNoCell = document.createElement("td");
          patient.IPDNo
            ? (IPDNoCell.innerText = patient.IPDNo)
            : (IPDNoCell.innerText = "");

          const deleteCell = document.createElement("td");
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "X";
          deleteButton.className = "btn btn-danger btn-sm";
          deleteButton.onclick = () => {
            if (
              confirm(
                "Are you sure you want to Delete this Patient. Details will be lost forever!"
              )
            ) {
              DeletePatient(patient._id, patient.patientName);
              PatientNameList.removeChild(row);
            } else {
              return false;
            }
          };
          deleteCell.appendChild(deleteButton);

          row.appendChild(NameCell);
          row.appendChild(AgeCell);
          row.appendChild(DxCell);
          row.appendChild(IPDNoCell);
          row.appendChild(deleteCell);
          PatientNameList.appendChild(row);
        });
      })
      .catch((err) => console.log(err));
  }
}

//////////////////////// Save Patient  //////////////////////////////////////
function SaveToDB() {
  // 0. Create a UserInputObject which will conatin details of all inputs
  const UserInputsObj = {};

  // 1. Pushing all traditional inputs into the UserInputObj
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

  AllUserInputsList.forEach(
    (userinput) => (UserInputsObj[userinput.id] = userinput.value)
  );

  // 2. Pushing the InvTable into te UserInputObj
  const InvTableRows = document.getElementById("InvTable").innerHTML;
  UserInputsObj["InvTableRows"] = InvTableRows;

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
  UserInputsObj.AdditionalPro = AddlProTagify.value.map((obj) => obj.value);
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
  //Neck Checkboxes
  UserInputsObj["RNeckLNRemoved"] = $("#RNeckLNBoxes input:checked")
    .get()
    .map((el) => el.value);
  UserInputsObj["RNeckStructureRemoved "] = $(
    "#RNeckStructureBoxes input:checked"
  )
    .get()
    .map((el) => el.value);
  UserInputsObj["LNeckLNRemoved"] = $("#LNeckLNBoxes input:checked")
    .get()
    .map((el) => el.value);
  UserInputsObj["LNeckStructureRemoved"] = $(
    "#LNeckStructureBoxes input:checked"
  )
    .get()
    .map((el) => el.value);
  //NeckHPCheckBoxes
  UserInputsObj["RInvolvedNodes"] = $("#RInvolvedNodes input:checked")
    .get()
    .map((el) => el.value);
  UserInputsObj["LInvolvedNodes"] = $("#LInvolvedNodes input:checked")
    .get()
    .map((el) => el.value);

  //5. Post req using axios (Note: Check for user and update is handled by server)
  UserInputsObj["PatientID"] = document.getElementById("PatientID").value;

  axios
    .post("https://ptsummary-8945f270453f.herokuapp.com/", UserInputsObj)
    .then((res) => {
      SuccessToastMsg = document.getElementById("SuccessToastMsg").innerText =
        res.data;
      bootstrap.Toast.getOrCreateInstance(
        document.getElementById("SavedSuccessToast")
      ).show();
    })
    .catch((err) => {
      FailedToastMsg = document.getElementById(
        "FailedToastMsg"
      ).innerText = `Failed to save due to: ${err}`;
      bootstrap.Toast.getOrCreateInstance(
        document.getElementById("SavedFailedToast")
      ).show();
    });
}

//////////////////////// Update Patient //////////////////////////////////////
//Update is handled by server through Save to DB()

//////////////////////// Delete Patient  //////////////////////////////////////
function DeletePatient(id, name) {
  axios
    .post("https://ptsummary-8945f270453f.herokuapp.com/deletepatient", { id })
    .then((res) => {
      DeleteSuccessToastMsg = document.getElementById(
        "DeleteSuccessToastMsg"
      ).innerText = `${name} ${res.data}`;
      bootstrap.Toast.getOrCreateInstance(
        document.getElementById("DeleteSuccessToast")
      ).show();
    })
    .catch((err) => console.log(err));
}
