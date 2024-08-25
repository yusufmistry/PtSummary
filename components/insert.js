const testDiv = document.getElementById("test-div");

testDiv.innerHTML = 
`
<nav class="navbar bg-body-tertiary sticky-top">
  <div class="container-fluid">

    <!-- A. Summary Maker App Title -->
    <a class="navbar-brand" href="#">Summary Maker App</a>

    <!-- B. Offcanvas Toggler Btn  -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbarLight"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- C. Offcanvas -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbarLight"
      data-bs-scroll="true"
      style="max-width: 50vw;"
    >
      <!-- Offcanvas Header -->
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">
          Jump to...
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <!-- Offcanvas Links -->
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <!-- 1 Primary Info -->
          <li class="nav-item">
            <a class="nav-link" href="scrollspyHeading1">Primary Info</a>
          </li>
          <!-- 2 First Visit -->
          <li class="nav-item">
            <a class="nav-link" href="scrollspyHeading2">First Visit</a>
          </li>
          <!-- 3 HOPI -->
          <li class="nav-item">
            <a class="nav-link" href="scrollspyHeading3">HOPI</a>
          </li>
          <!-- 4 Investigation -->
          <li class="nav-item">
            <a class="nav-link" href="scrollspyHeading4">Investigations</a>
          </li>
          <!-- 5,6,7,8 Treatment -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="scrollspyHeading5"
              role="button"
              data-bs-toggle="dropdown"
            >
              Treatment
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="scrollspyHeading6">Primary</a>
              </li>
              <li>
                <a class="dropdown-item" href="scrollspyHeading7">Neck</a>
              </li>
              <li>
                <a class="dropdown-item" href="scrollspyHeading8">Recon</a>
              </li>
            </ul>
          </li>
          <!-- 9,10,11,12 Histopath -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="scrollspyHeading9"
              role="button"
              data-bs-toggle="dropdown"
            >
              Histopath
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="scrollspyHeading10">Primary</a>
              </li>
              <li>
                <a class="dropdown-item" href="scrollspyHeading11">Neck</a>
              </li>
              <li>
                <a class="dropdown-item" href="scrollspyHeading12">Recon</a>
              </li>
            </ul>
          </li>
          <!-- 13 Summary -->
          <li class="nav-item">
            <a class="nav-link" href="scrollspyHeading13">Summary</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<div>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quae vero ea
  eaque commodi tempora tenetur eius beatae illum perferendis ad veniam
  repellendus quo iusto odit, optio saepe corporis ducimus? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Reprehenderit qui soluta eum possimus
  id necessitatibus, eligendi expedita eius aliquam explicabo nostrum quia
  commodi laboriosam, sint repudiandae maxime sequi molestiae at! Lorem ipsum
  dolor sit amet consectetur adipisicing elit. Recusandae mollitia, facilis
  minima distinctio quisquam asperiores tenetur alias incidunt beatae magni
  voluptate sint doloribus vel ipsa architecto, excepturi fugiat quia
  aspernatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Asperiores non qui quia, amet, sunt provident reiciendis totam ad
  necessitatibus voluptatum architecto similique vitae sapiente corporis sed
  voluptas reprehenderit eum exercitationem. <br />
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim fuga totam
  voluptas, perferendis vel tenetur nostrum illum tempora. Cumque repellendus
  expedita ut suscipit debitis at natus eos molestias, doloribus ea! <br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
  voluptatibus itaque obcaecati nesciunt vero asperiores, alias officia
  blanditiis similique quam dolore molestias! Dolor nihil eaque velit rerum eius
  delectus unde! <br />
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
