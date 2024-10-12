/////////////////////////// Get Patient List //////////////////////////////////////////////
function GetApptList() {
  const ApptList = document.getElementById("ApptList");
  window.scrollTo({ top: 0, behavior: "smooth" });
  const spinner = document.getElementById("spinner");

  //if statement used so that the list is Only populated once
  if (ApptList.innerText === "") {
    spinner.hidden = false;
    const UserID = document.getElementById("UserID").value;
    const UserIDObj = { userid: UserID };

    axios
      .post("http://localhost:5000/patientlist", UserIDObj)
      .then((response) => {
        const PatientList = response.data;

        if (!PatientList[0]) {
          PatientNameList.innerText = "No records found";
          spinner.hidden = true;
        } else {
          PatientList.forEach((patient) => {
            const row = document.createElement("tr");
            const NameCell = document.createElement("td");
            const NameBtn = document.createElement("button");
            NameBtn.className = "btn btn-link";
            NameBtn.textContent = patient.patientName;
            NameBtn.onclick = () => PopulateForm(patient);
            NameCell.appendChild(NameBtn);

            const AgeCell = document.createElement("td");
            AgeCell.className = "text-center";
            AgeCell.innerText = patient.age;

            const DxCell = document.createElement("td");
            DxCell.className = "text-center";
            patient.Diagnosis
              ? (DxCell.innerText = patient.Diagnosis)
              : (DxCell.innerText = "");

            const IPDNoCell = document.createElement("td");
            IPDNoCell.className = "text-center";
            patient.IPDNo
              ? (IPDNoCell.innerText = patient.IPDNo)
              : (IPDNoCell.innerText = "");

            const deleteCell = document.createElement("td");
            deleteCell.className =
              "d-flex justify-content-center align-items-center";
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
            spinner.hidden = true;
          });
        }
      })
      .catch((err) => console.log(err));
  }
}

/////////////////////////// Register User Fn /////////////////////////////////////////////////
function Register() {
  const registerform = document.getElementById("Register");
  if (!registerform.checkValidity()) {
    registerform.classList.add("was-validated");
  } else {
    const username = document.getElementById("username").value;
    const MobileNo = document.getElementById("RegisMobileNo").value;
    const UserObj = {
      username,
      MobileNo,
    };

    axios
      .post("http://localhost:5000/register", UserObj)
      .then((response) => {
        if (response.data === "Already registered") {
          UserAlreadyRegisMsg = document.getElementById(
            "UserAlreadyRegisMsg"
          ).innerText = `${MobileNo} is already registered. Please Login`;
          bootstrap.Toast.getOrCreateInstance(
            document.getElementById("AlreadyRegisToast")
          ).show();
        } else {
          // On successfull registration
          const User1 = response.data;

          // 1. Putting the id in a hidden input
          const UserIDDiv = (document.getElementById("UserID").value =
            User1._id);

          //  2. Changing WelcomeUser title
          const offcanvasTitle = (document.getElementById(
            "offcanvasTitle"
          ).innerText = `Welcome ${User1.username}`);

          // 3. Changing loginlogout div to logout
          const loginlogout = document.getElementById("loginlogout");
          const LogoutBtn = document.createElement("button");
          LogoutBtn.className = "btn btn-link btn-sm";
          LogoutBtn.textContent = "Logout";
          LogoutBtn.onclick = () => Logout();
          loginlogout.innerHTML = "";
          loginlogout.appendChild(LogoutBtn);

          // 4. Hide register modal and reset form
          const RegisterModal = bootstrap.Modal.getInstance("#RegisterModal");
          RegisterModal.hide();
          registerform.reset();

          // 5. Successfully registered toast
          NewRegisMsg = document.getElementById(
            "NewRegisMsg"
          ).innerText = `${User1.username} registered successfully`;
          bootstrap.Toast.getOrCreateInstance(
            document.getElementById("NewRegisToast")
          ).show();

          // 6. Reset the MyPatient List
          const PatientNameList = (document.getElementById(
            "PatientNameList"
          ).innerHTML = "");
          const PatientList = document.getElementById("PatientList");
          const bsCollapsePatientList = bootstrap.Collapse.getOrCreateInstance(
            PatientList,
            {
              toggle: false,
            }
          );
          bsCollapsePatientList.hide();

          //7. Update Login Status
          const LoginStatus = document.getElementById("LoginStatus");
          LoginStatus.innerHTML = `<i>Logged in as - ${User1.username}</i>`;
          LoginStatus.classList = "bg-success-subtle";

          //8. Close offcanvas
          const offcanvasNavbarLight = bootstrap.Offcanvas.getInstance(
            "#offcanvasNavbarLight"
          );
          offcanvasNavbarLight.hide();

          //9. Form Reset
          FormReset();
        }
      })
      .catch((err) => console.log(err));
  }
}

/////////////////////////// Login User Fn /////////////////////////////////////////////////
function Login() {
  const LoginForm = document.getElementById("LoginForm");
  if (!LoginForm.checkValidity()) {
    LoginForm.classList.add("was-validated");
  } else {
    const LoginMobileNo = document.getElementById("LoginMobileNo").value;
    const LoginObj = { MobileNo: LoginMobileNo };

    axios
      .post("http://localhost:5000/userlogin", LoginObj)
      .then((response) => {
        if (response.data === "Not found") {
          LoginFailMsg = document.getElementById(
            "LoginFailMsg"
          ).innerText = `${LoginMobileNo} is not registered!`;
          bootstrap.Toast.getOrCreateInstance(
            document.getElementById("LoginFailToast")
          ).show();
        } else {
          // On successfull Login
          const User1 = response.data;

          // 1. Putting the id in a hidden input
          const UserIDDiv = (document.getElementById("UserID").value =
            User1._id);

          //  2. Changing WelcomeUser title
          const offcanvasTitle = (document.getElementById(
            "offcanvasTitle"
          ).innerText = `Welcome ${User1.username}`);

          // 3. Changing loginlogout div to logout
          const loginlogout = document.getElementById("loginlogout");
          const LogoutBtn = document.createElement("button");
          LogoutBtn.className = "btn btn-link btn-sm";
          LogoutBtn.textContent = "Logout";
          LogoutBtn.onclick = () => Logout();
          loginlogout.innerHTML = "";
          loginlogout.appendChild(LogoutBtn);

          // 5. Successfully registered toast
          LoginSuccessMsg = document.getElementById(
            "LoginSuccessMsg"
          ).innerText = `${User1.username} logged in`;
          bootstrap.Toast.getOrCreateInstance(
            document.getElementById("LoginSuccessToast")
          ).show();

          // 6. Reset the MyPatient List and hide it
          const PatientNameList = (document.getElementById(
            "PatientNameList"
          ).innerHTML = "");
          const PatientList = document.getElementById("PatientList");
          const bsCollapsePatientList = bootstrap.Collapse.getOrCreateInstance(
            PatientList,
            {
              toggle: false,
            }
          );
          bsCollapsePatientList.hide();

          //7. Update Login Status
          const LoginStatus = document.getElementById("LoginStatus");
          LoginStatus.innerHTML = `<i>Logged in as - ${User1.username}</i>`;
          LoginStatus.classList = "bg-success-subtle";

          //8. Close offcanvas
          const offcanvasNavbarLight = bootstrap.Offcanvas.getInstance(
            "#offcanvasNavbarLight"
          );
          offcanvasNavbarLight.hide();

          //9. Form Reset
          FormReset();
        }
      })
      .catch((err) => console.log(err));
  }
}

/////////////////////////// Logout User Fn ///////////////////////////////////////////////
function Logout() {
  // Successfully logged out toast
  LogoutSuccessMsg = document.getElementById("LogoutSuccessMsg").innerText =
    "Logged out successfully";
  bootstrap.Toast.getOrCreateInstance(
    document.getElementById("LogoutSuccessToast")
  ).show();

  setTimeout(() => window.location.reload(true), 2000);
}

function SaveApptToDB() {
  const ApptDate = document.getElementById("ApptDate").value;
  const UserID = document.getElementById("UserID").value;
  const PlaceRows = document.getElementById("PlaceRow");
  const PlacesTables = PlaceRows.querySelectorAll("tbody");
  const PlacesNames = PlaceRows.querySelectorAll("u");

  //////////////////// Validation ///////////////////////////
  // 1. Check for Login
  if (UserID === "66f98451e7c85d5b786bfd98") {
    window.alert(
      "You cannot save appointments as a Demo User. Please Login to save your appointments"
    );
    return;
  }

  // 2. Check for Date
  if (!ApptDate) {
    FailedToastMsg = document.getElementById("FailedToastMsg").innerHTML =
      "Please Enter a Date!";
    bootstrap.Toast.getOrCreateInstance(
      document.getElementById("SavedFailToast")
    ).show();
    return;
  }

  // 3. Check for Empty Places
  if (!PlacesTables.length) {
    FailedToastMsg = document.getElementById("FailedToastMsg").innerHTML =
      "There is nothing to Save!";
    bootstrap.Toast.getOrCreateInstance(
      document.getElementById("SavedFailToast")
    ).show();
    return;
  }

  // 4. Check for empty Patient Rows
  if (PlacesTables.length) {
    var EmptyRows = [];
    PlacesTables.forEach((table, i) => {
      const PatientRows = table.querySelectorAll("tr");
      if (PatientRows.length < 2) {
        EmptyRows.push(PlacesNames[i].innerText);
      }
    });
    if (EmptyRows.length) {
      FailedToastMsg = document.getElementById(
        "FailedToastMsg"
      ).innerHTML = `There are no Appointments in <b>${EmptyRows.join(
        " & "
      )} </b>. Please Add Appointments or delete the place(s)`;
      bootstrap.Toast.getOrCreateInstance(
        document.getElementById("SavedFailToast")
      ).show();
      return;
    }
  }

  ///////////////// Validation passed //////////////////////////

  PlacesTables.forEach((table, i) => {
    Place = PlacesNames[i].innerText;
    const PatientRows = table.querySelectorAll("tr");

    PatientRows.forEach((row) => {
      if (row.cells[7].innerText !== "Add") {
        const ApptObj = {};
        ApptObj["user"] = UserID;
        ApptObj["ApptDate"] = ApptDate;
        ApptObj["Place"] = Place;
        ApptObj["Patient"] = row.cells[0].innerText;
        ApptObj["ApptType"] = row.cells[2].innerText;
        ApptObj["Details"] = row.cells[3].innerText;
        ApptObj["Advice"] = row.cells[4].innerText;
        ApptObj["Fees"] = row.cells[5].innerText;
        ApptObj["Comment"] = row.cells[6].innerText;

        axios
          .post("http://localhost:5000/saveAppt", ApptObj)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => console.log(err));
      }
    });
  });

  FormReset();
  SuccessToastMsg = document.getElementById("SuccessToastMsg").innerHTML =
    "Appointments saved Successfully";
  bootstrap.Toast.getOrCreateInstance(
    document.getElementById("SavedSuccessToast")
  ).show();
}
