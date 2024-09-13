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
  const NeckType = $("#NeckType").val();
  const RNeckExtent = RNeckExtentTagify;
  const LNeckExtent = LNeckExtentTagify;
  const ReconType = ReconTypeTaify;

  const RNeckLNRemovedStr = Array.from(
    document.getElementById("RNeckLNBoxes").querySelectorAll("input:checked")
  )
    .map((input) => input.value)
    .join(",");
  const RNeckStructureRemovedStr = Array.from(
    document
      .getElementById("RNeckStructureBoxes")
      .querySelectorAll("input:checked")
  )
    .map((input) => input.value)
    .join(",");
  const LNeckLNRemovedStr = Array.from(
    document.getElementById("LNeckLNBoxes").querySelectorAll("input:checked")
  )
    .map((input) => input.value)
    .join(",");

  const LNeckStructureRemovedStr = Array.from(
    document
      .getElementById("LNeckStructureBoxes")
      .querySelectorAll("input:checked")
  )
    .map((input) => input.value)
    .join(",");

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
  const RInvolvedNodes = Array.from(
    document.getElementById("RInvolvedNodes").querySelectorAll("input:checked")
  )
    .map((input) => input.value)
    .join(",");
  const RNodeSize = $("#RNodeSize").val();
  const RMetSize = $("#RMetSize").val();
  const RECS = $("#RECS").val();
  const RECSDistance = $("#RECSDistance").val();
  const LNodalYeild = $("#LNodalYeild").val();
  const LPositNodes = $("#LPositNodes").val();
  const LInvolvedNodes = Array.from(
    document.getElementById("LInvolvedNodes").querySelectorAll("input:checked")
  )
    .map((input) => input.value)
    .join(",");
  const LNodeSize = $("#LNodeSize").val();
  const LMetSize = $("#LMetSize").val();
  const LECS = $("#LECS").val();
  const LECSDistance = $("#LECSDistance").val();

  const Tstage = $("#Tstage").val();
  const Nstage = $("#Nstage").val();

  const Subsequent = $("#Subsequent").val();