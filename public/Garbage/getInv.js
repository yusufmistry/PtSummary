function getInv (){
    const tableInvestRows = document.getElementById('InvTable').querySelectorAll('tr')

    tableInvestRows.forEach(row => {
        const InvSummary = `<span class="genspan 3"> </span> ${row.cells[0].innerText} of ${row.cells[1].innerText} on ${row.cells[2].innerText} showed ${row.cells[3].innerText}.`
        console.log(InvSummary)
    })
    console.log(tableInvestRows)
}
