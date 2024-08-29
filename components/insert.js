const testDiv = document.getElementById("test-div");

testDiv.innerHTML = 
`
<!-- Summary -->
<div class="row border rounded-5 bg-light px-3 pb-4 gx-1 gy-2 mb-4">
  <!-- R0 - Title - Summary -->
  <div class="col-sm-12">
    <h4 id="scrollspyHeading1" class="text-center border-bottom pb-2">
      Summary
    </h4>
  </div>

  <div class="col-sm-12">
    <div class="container-fluid" id="SummaryDiv">
      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>

      <button class="btn btn-primary">Click me to hide paragraphs</button>
    </div>
  </div>
</div>

`