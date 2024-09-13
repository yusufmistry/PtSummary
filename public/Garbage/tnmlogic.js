
// Pathological TNM Classification Logic
function calculatePtnm(tumorSize, depthOfInvasion, boneInvasion, nodalMetastasisCount, nodalMetastasisSize, extracapsularSpread, contralateralNodalCount, contralateralNodalSize, contralateralExtracapsularSpread) {
    // pT (Pathological Tumor)
    let pT;
    if (tumorSize <= 2 && depthOfInvasion <= 5 && !boneInvasion) {
        pT = 'pT1';
    } else if (tumorSize <= 4 && depthOfInvasion <= 10 && !boneInvasion) {
        pT = 'pT2';
    } else if (tumorSize > 4 || depthOfInvasion > 10) {
        pT = 'pT3';
    } else if (boneInvasion) {
        pT = 'pT4';
    }

    // pN (Pathological Nodal metastasis)
    let pN;
    if (nodalMetastasisCount === 0 && contralateralNodalCount === 0) {
        pN = 'pN0';
    } else if (nodalMetastasisCount === 1 && nodalMetastasisSize <= 3 && contralateralNodalCount === 0 && !extracapsularSpread) {
        pN = 'pN1';
    } else if ((nodalMetastasisCount === 1 && nodalMetastasisSize > 3 && nodalMetastasisSize <= 6 && !extracapsularSpread) ||
               (nodalMetastasisCount > 1 && nodalMetastasisSize <= 6 && !extracapsularSpread) ||
               (contralateralNodalCount === 1 && contralateralNodalSize <= 6 && !contralateralExtracapsularSpread)) {
        if (nodalMetastasisCount === 1 && nodalMetastasisSize > 3 && nodalMetastasisSize <= 6 && !extracapsularSpread) {
            pN = 'pN2a';
        } else if (nodalMetastasisCount > 1 && nodalMetastasisSize <= 6 && !extracapsularSpread) {
            pN = 'pN2b';
        } else if (contralateralNodalCount > 0 && contralateralNodalSize <= 6 && !contralateralExtracapsularSpread) {
            pN = 'pN2c';
        }
    } else if (nodalMetastasisSize > 6 || contralateralNodalSize > 6 || extracapsularSpread || contralateralExtracapsularSpread) {
        pN = 'pN3';
    }

    // pM (Pathological Metastasis)
    const pM = 'pM0';  // Assuming no distant metastasis for simplicity

    return { pT, pN, pM };
}

// Routes
app.get('/', (req, res) => {
    res.render('index', { result: null });
});

app.post('/', (req, res) => {
    const tumorSize = parseFloat(req.body.tumor_size);
    const depthOfInvasion = parseFloat(req.body.depth_of_invasion);
    const boneInvasion = req.body.bone_invasion === 'yes';
    const nodalMetastasisCount = parseInt(req.body.nodal_metastasis_count);
    const nodalMetastasisSize = parseFloat(req.body.nodal_metastasis_size);
    const extracapsularSpread = req.body.extracapsular_spread === 'yes';
    const contralateralNodalCount = parseInt(req.body.contralateral_nodal_count);
    const contralateralNodalSize = parseFloat(req.body.contralateral_nodal_size);
    const contralateralExtracapsularSpread = req.body.contralateral_extracapsular_spread === 'yes';

    const result = calculatePtnm(tumorSize, depthOfInvasion, boneInvasion, nodalMetastasisCount, nodalMetastasisSize, extracapsularSpread, contralateralNodalCount, contralateralNodalSize, contralateralExtracapsularSpread);
    res.render('index', { result });
});