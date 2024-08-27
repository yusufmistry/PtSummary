/* -----------------------------------TNM Logic v1.1------------------------------------- */

function CalcpTNM() {
    // Tsize
    const tAP = parseInt(document.getElementById("TsizeAP").value);
    const tTrans = parseInt(document.getElementById("TsizeTrans").value);
    const tVert = parseInt(document.getElementById("TsizeVert").value);
    const DOI = parseInt(document.getElementById("TsizeDOI").value);
    const boneInv = document.getElementById("BoneInv").value;
    // Same neck
    const RpositNodes =
      document.getElementById("RPositNodes").value === ""
        ? ""
        : parseInt(document.getElementById("RPositNodes").value);
    const RnodeSize = parseInt(document.getElementById("RNodeSize").value);
    const ReCS = document.getElementById("RECS").value;
    // Opposite Neck
    const LpositNodes =
      document.getElementById("LPositNodes").value === ""
        ? ""
        : parseInt(document.getElementById("LPositNodes").value);
    const LnodeSize = parseInt(document.getElementById("LNodeSize").value);
    const LeCS = document.getElementById("LECS").value;
  
    // Result Divs
    const pT = document.getElementById("Tstage");
    const pN = document.getElementById("Nstage");
  
    /* -----pT-----*/
  
    //Get largest Diameter
    const largestDiameter = [tAP, tTrans, tVert].sort((a, b) => b - a)[0];
  
    //Check if All important T data is available or send and error msg as a tooltip
    if (!largestDiameter && !DOI) {
      pT.value = "x";
    } else if (!DOI) {
      document.getElementById("dataMissing").innerHTML =
        "Please enter DOI as it is essetial for T-staging";
      document.getElementById("dataMissing").style.display = "block";
    } else {
      //Going Reverse as it is easier
  
      if (boneInv === "Deep Intramedullary" || boneInv === "Present") {
        pT.value = "T4a";
      } else if (
        boneInv === "" ||
        boneInv === "Absent" ||
        boneInv === "Superficial Cortical"
      ) {
        if (DOI > 10) {
          if (largestDiameter <= 40) {
            pT.value = "T3";
          } else if (largestDiameter > 40) {
            pT.value = "T4a";
          }
        } else if (DOI > 5 && DOI <= 10) {
          if (largestDiameter <= 40) {
            pT.value = "T2";
          } else if (largestDiameter > 40) {
            pT.value = "T3";
          }
        } else if (DOI <= 5) {
          if (largestDiameter <= 20) {
            pT.value = "T1";
          } else if (largestDiameter <= 40) {
            pT.value = "T2";
          } else if (largestDiameter > 40) {
            pT.value = "T3";
          }
        }
      }
    }
  
    /* -----pN-----*/
  
    //If All N data is missing then Nx (keep subsequent boxes disabled!)
    if (RpositNodes === "" && LpositNodes === "") {
      pN.value = "x";
    } else if (LpositNodes === "" || (LpositNodes === 0 && RpositNodes !== "")) {
      /*Single ND done (Or B/L Neck done with Opposite Neck N0) */
      if (RpositNodes === 0) {
        pN.value = "0";
      } else if (RpositNodes > 0) {
        if (ReCS === "Present") {
          if (RpositNodes > 1) {
            pN.value = "3b";
          } else if (RpositNodes === 1) {
            if (RnodeSize > 30) {
              pN.value = "3b";
            } else if (RnodeSize <= 30 || !RnodeSize) {
              pN.value = "2a";
            }
          }
        } else if (ReCS === "" || ReCS === "Absent") {
          if (RpositNodes > 1) {
            if (RnodeSize <= 60 || !RnodeSize) {
              pN.value = "2b";
            } else if (RnodeSize > 60) {
              pN.value = "3a";
            }
          } else if (RpositNodes === 1) {
            if (RnodeSize > 60) {
              pN.value = "3a";
            } else if (RnodeSize > 30 && RnodeSize <= 60) {
              pN.value = "2a";
            } else if (RnodeSize <= 30 || !RnodeSize) {
              pN.value = "1";
            }
          }
        }
      }
    } else if (LpositNodes !== "") {
      /*BL or Contralateral Neck Done */
      if (RpositNodes === "" || RpositNodes === 0) {
        /*Only Contralateral Neck Done (or BL neck done with same side neck N0) */
        if (LpositNodes === 0) {
          pN.value = "0";
        } else if (LpositNodes > 0) {
          if (LeCS === "Present") {
            pN.value = "3b";
          } else if (LeCS === "" || LeCS === "Absent") {
            if (LpositNodes >= 1) {
              if (LnodeSize > 60) {
                pN.value = "3a";
              } else if (LnodeSize <= 60 || !LnodeSize) {
                pN.value = "2c";
              }
            }
          }
        }
      } else if (RpositNodes !== "") {
        /*BL Neck done */
        if (RpositNodes === 0 && LpositNodes === 0) {
          /* BL Neck N0 */
          pN.value = "0";
        } else if (LpositNodes > 0 && RpositNodes > 0) {
          /* BL Neck with both side > 0 Nodes positive */
          if (LeCS === "Present" || ReCS === "Present") {
            pN.value = "3b";
          } else if (
            (LeCS === "" || LeCS === "Absent") &&
            (ReCS === "" || ReCS === "Absent")
          ) {
            if (LnodeSize > 60 || RnodeSize > 60) {
              pN.value = "3a";
            } else if (
              (LnodeSize <= 60 || !LnodeSize) &&
              (RnodeSize <= 60 || !RnodeSize)
            ) {
              pN.value = "2c";
            }
          }
        }
      }
    }
  }