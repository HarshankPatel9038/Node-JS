const PdfPrinter = require('pdfmake');
const fs = require('fs');
const path = require("path");

const fonts = {
  Roboto: {
    normal: 'public/fonts/Roboto-Regular.ttf',
    bold: 'public/fonts/Roboto-Medium.ttf',
  }
};

const printer = new PdfPrinter(fonts);

const createPdf = (data) => {
  const docDefinition = {
    content: [
      { text: 'Welcome ' + data.name, style: 'header' },
      '',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      { text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
      {
        style: 'tableExample',
        table: {
          headerRows: 1,
          body: [
            [{ text: 'Products', style: 'tableHeader' }, { text: 'Quantity', style: 'tableHeader' }, { text: 'Price', style: 'tableHeader' }, { text: 'Total Price', style: 'tableHeader' }],
            ['Sample value 1', 'Sample value 2', 'Sample value 3', 'Sample value 4'],
            ['Sample value 1', 'Sample value 2', 'Sample value 3', 'Sample value 4'],
            ['Sample value 1', 'Sample value 2', 'Sample value 3', 'Sample value 4'],
          ]
        },
        layout: 'lightHorizontalLines'
      },
      '',
      { text: 'Billing Amount: 85000', style: 'subheader' },
      '',
      'Shipping address: ' + data.address,
      '',
      'Thank You',
      'BitKhanan IT Education',
    ]
  }

  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, 'document/invoice.pdf')));
  pdfDoc.end();
};


module.exports = createPdf;