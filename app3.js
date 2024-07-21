console.log('Is this working?');

let viz3;

const url3 = "https://public.tableau.com/views/Lloyds_17120130643130/Dashboard1";


const vizContainer3 = document.getElementById('vizContainer3');
const options3 = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz3.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//create a function to generate the viz element
function initViz3() {
    console.log('Executing the initViz3 function!');
    viz3 = new tableau.Viz(vizContainer3, url3, options3);

    
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz3);

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
