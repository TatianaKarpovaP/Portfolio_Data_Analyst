console.log('Is this working?');

let viz;

const url = "https://public.tableau.com/views/Lloyds_17120130643130/Dashboard1";


const vizContainer3 = document.getElementById('vizContainer3');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer3, url, options);
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');


//click on the pdf button to generate pdf of dashboard
function generatePDF() {
    viz.showExportPDFDialog()
}

exportPDF.addEventListener("click", function () {
    generatePDF();
  });

//click on image to generate image of dashboard
function generateImage() {
    viz.showExportImageDialog()
}

exportImage.addEventListener("click", function () {
    generateImage();
  });
