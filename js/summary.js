///////////////// Generate Summary Function ////////////////////////////////

function genSummary() {
  const patientName = $("#patientName").val();
  const age = $("#age").val();
  const gender = $("#gender").val();
  const FirstVisitDate = $("#FirstVisitDate").val();
  const HospitalName = $("#HospitalName").val();
  const IPDNo = $("#IPDNo").val();
  const Complaints = $("#Complaints").val();
  const OnExam = $("#OnExam").val();
  const MedicalHistory = $("#MedicalHistory").val();
  const HOPI = $("#HOPI").val();
  const InvTableRows = document
    .getElementById("InvTable")
    .querySelectorAll("tr");

  const RxType = $("#RxType").val();
  const RxDate = $("#RxDate").val();
  const RxPlace = $("#RxPlace").val();
  const SxType = $("#SxType").val();
  const SxSite = SxSiteTagify;
  const SxSide = SxSideTagify;
  const Incisions = IncisionsTagify;
  const AdditionalSitesMucosal = AddlMucosalTagify;
  const AdditionalSitesMandible = AddlMandibleTagify;
  const AdditionalSitesMaxilla = AddlMaxillaTagify;
  const AdditionalSitesDeeper = AddlDeeperTagify;
  const AdditionalSitesSkin = AddlSkinTagify;
  const AdditionalPro = AddlProTagify;
  const RNeckExtent = RNeckExtentTagify;
  const LNeckExtent = LNeckExtentTagify;
  const ReconType = ReconTypeTaify;

  const RNeckCheckBoxes = document
    .getElementById("RNeckCheckBoxes")
    .querySelectorAll("input");
  const RNeckStructureBoxes = document
    .getElementById("RNeckStructureBoxes")
    .querySelectorAll("input");
  const LNeckCheckBoxes = document
    .getElementById("LNeckCheckBoxes")
    .querySelectorAll("input");
  const LNeckStructureBoxes = document
    .getElementById("RNeckStructureBoxes")
    .querySelectorAll("input");

  const IntraopNotes = $("#IntraopNotes").val();
  const PostopNotes = $("#PostopNotes").val();
  const DischargeDate = $("#DischargeDate").val();

  const Histology = $("#Histology").val();
  const TsizeDOI = $("#TsizeDOI").val();
  const TsizeAP = $("#TsizeAP").val();
  const TsizeTrans = $("#TsizeTrans").val();
  const TsizeVert = $("#TsizeVert").val();
  const ClosestMargin = $("#ClosestMargin").val();
  const MarginDistance = $("#MarginDistance").val();
  const PNI = $("#PNI").val();
  const LVI = $("#LVI").val();
  const WPOI = $("#WPOI").val();
  const BoneInv = $("#BoneInv").val();
  const SkinInv = $("#SkinInv").val();
  const MuscleInv = $("#MuscleInv").val();

  const RNodalYeild = $("#RNodalYeild").val();
  const RPositNodes = $("#RPositNodes").val();
  const RInvolvedNodes = document
    .getElementById("RInvolvedNodes")
    .querySelectorAll("input");
  const RNodeSize = $("#RNodeSize").val();
  const RMetSize = $("#RMetSize").val();
  const RECS = $("#RECS").val();
  const RECSDistance = $("#RECSDistance").val();
  const LNodalYeild = $("#LNodalYeild").val();
  const LPositNodes = $("#LPositNodes").val();
  const LInvolvedNodes = document
    .getElementById("LInvolvedNodes")
    .querySelectorAll("input");
  const LNodeSize = $("#LNodeSize").val();
  const LMetSize = $("#LMetSize").val();
  const LECS = $("#LECS").val();
  const LECSDistance = $("#LECSDistance").val();

  const Tstage = $("#Tstage").val();
  const Nstage = $("#Nstage").val();

  const Subsequent = $("#Subsequent").val();

  const NotEnoughInfoDiv = $("#not-enough-info");
  const primaryInfoSummaryDiv = $("#primaryInfoSummaryDiv");
  const FVSummaryDiv = $("#FVSummaryDiv");
  const HOPISummaryDiv = $("#HOPISummaryDiv");
  const InvSummaryDiv = document.getElementById("InvSummaryDiv");
  const TreatmentSummaryDiv = $("#TreatmentSummaryDiv");
  const HistopathSummaryDiv = $("#HistopathSummaryDiv");
  const SubsequentSummaryDiv = $("#SubsequentSummaryDiv");
  const SignSummaryDiv = $("#SignSummaryDiv");

  //Gender Words
  let Mr = "Mr.",
    He = "He",
    he = "he",
    His = "His",
    his = "his",
    him = "him";

  if (gender === "Female") {
    Mr = "Mrs.";
    He = "She";
    he = "she";
    His = "Her";
    his = "her";
    him = "her";
  }

  // Check Major Inputs
  if (
    !patientName ||
    !age ||
    !gender ||
    !FirstVisitDate ||
    !Complaints ||
    !OnExam ||
    !RxDate
  ) {
    NotEnoughInfoDiv.show();
  } else {
    NotEnoughInfoDiv.hide();

    // Primary Info Div
    primaryInfoSummaryDiv.html(`
      <b>Patient Name: ${patientName} </b> <br>
      <b>Age: ${age}/${gender} </b> <br>
      <b>${HospitalName} IPD No.: ${IPDNo} </b>
      `);

    //FV Div
    FVSummaryDiv.html(`
      ${Mr} ${patientName}, was first seen by us on ${FirstVisitDate}. ${He} had complaint of ${Complaints} <br><br>
      On examination, there was a ${OnExam}. `);
    if (MedicalHistory) {
      FVSummaryDiv.append(`${He} has ${MedicalHistory}`);
    }

    //HOPI Div

    if (HOPI) {
      HOPIInvSummaryDiv.html(`
        Previously, ${he} has undergone ${HOPI}.
        `);
    }

    // Inv Div

    if (InvTableRows[0]) {
      InvSummaryDiv.innerHTML = ""; //To rest table everytime button is clicked

      InvTableRows.forEach((row) => {
        const prevInnerHTML = InvSummaryDiv.innerHTML;
        InvSummaryDiv.innerHTML =
          prevInnerHTML +
          `${His}` +
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
    } else {
      InvSummaryDiv.innerText = `${He} has not undergone any previous investigations`
  
    }

    // Rx Div

    if (SxType){
      TreatmentSummaryDiv[0].innerHTML = `${He} was advised ${RxType}. His other work-up was essentially normal. <br><br>
      On ${RxDate} he underwent ` +
      (SxType === "Wide Excision" ? "Wide Excision of" : "Composite Resection (Wide Excision of") +
      (SxSide.value[0] ? " " + SxSide.value[0].value : "") + //Side
      (SxSite.value[0] ? " " + SxSite.value[0].value : "") +  //Prmary Site
      (AdditionalSitesMucosal.value[0] ? " + " + (AdditionalSitesMucosal.value.map(obj => obj.value).join(" + ")) : "" ) +  //AdditionalMucosal
      (AdditionalSitesMandible.value[0] ? " + " + AdditionalSitesMandible.value[0].value : "" ) +  //AdditionalMandible
      (AdditionalSitesMaxilla.value[0] ? " + " + AdditionalSitesMaxilla.value[0].value : "" ) +  //AdditionalMaxilla
      (AdditionalSitesDeeper.value[0] ? " + " + (AdditionalSitesDeeper.value.map(obj => obj.value).join(" + ")) : "" ) +  //AdditionalDeeper
      (AdditionalSitesSkin.value[0] ? " + " + (AdditionalSitesSkin.value.map(obj => obj.value).join(" + ")) : "" ) +  //AdditionalSkin
      (SxType === "Wide Excision" ? "" : ")") +
      (Incisions.value[0] ? " using " + Incisions.value[0].value + " approach" : "" ) + //Incision
      (ReconType.value[0] ? " + " + (ReconType.value.map(obj => obj.value).join(" + ")) : "" ) +
      ""
    } 
  }

  // Show the Summary Div
  $("#SummaryDiv").show("fast");
}

/* 

Patient Name: ${patientName}
Age: ${age}/${gender}
${HospitalName} IPD No.: ${IPDNo}

${Mr} ${patientName}, was first seen by us on ${FirstVisitDate}. ${He} had complaint of ${Complaints}

On examination, there was ${OnExam}. ${He} has ${MedicalHistory}

Previuosly, ${he} had undergone ${HOPI}

${His} ${InvType} of ${InvSite} on ${InvDate} reported ${InvFindings}.

${He} was advised ${RxType}. His other work-up was essentially normal.

On ${RxDate} at ${RxPlace}, ${he} underwent ${SxType} (${SxSide} ${SxSite} +
${AdditionalSitesMucosal} +
${AdditionalSitesMandible} +
${AdditionalSitesMaxilla} +
${AdditionalSitesDeeper} +
${AdditionalSitesDeeper} +
${AdditionalSitesSkin}
using ${Incisions} approach)

+ 
${R/LNeckExtent} (${R/LIA}, ${R/LIB, ...n})
+
 
${AdditionalPro}

Reconstruction was done with ${ReconType}

Intra-operatively, ${IntraopNotes}. ${His} Post-operative phase was uneventful/ Post-operatively ${he} had ${PostopNotes}

${He} was discharged on ${DischargeDate}

${His} final HPE showed ${Histology} of the ${SxSide} ${SxSite}. (Size: ${TsizeAP}x${TsizeTrans}x${TsizeVert}mm DOI: ${TsizeDOI}mm)

PNI was ${PNI}. LVI was ${LVI}. WPOI was ${WPOI}. The closest margin was ${ClosestMargin} which was ${MarginDistance}mm.

Bone/Skin/Muscle invasion was ${Bone/Skin/MuscleInv}.

${R/LPositNodes}/${R/LNodalYeild} were postive in the ${R/LNeckExtent}. Positve nodes were found in ${RHP1a,$RHP1b,.....}

[Size of largest node: ${R/LNodeSize}mm Size of metastasis: ${R/LMetSize}. ECS: ${RECS} (${RECSDistance}mm)]. (pT${Tstage})N${Nstage}.

Pt is advised physiotherapy and regular follow-up/Patient is advised ${Subsequent}

We wish ${him} good health. Please do not hesitate to contact us for any further information.

${sign} 

*/
