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
  const content = [
    { text: 'Welcome: ' + data.users.name, style: 'header' },
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    {
      margin: [0, 20, 0, 8],
      style: 'tableExample',
      table: {
        headerRows: 1,
        body: [
          [{ text: 'Products', style: 'tableHeader' }, { text: 'Quantity', style: 'tableHeader' }, { text: 'Price', style: 'tableHeader' }, { text: 'Total Price', style: 'tableHeader' }],
          ['Sample value 1', 'Sample value 2', 'Sample value 3', 'Sample value 4'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3', 'Sample value 4'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3', 'Sample value 4'],
        ]
      }
    },
    { text: `Billing Amount: ${data.total_amount}`, style: 'subheader' },
    { text: `Shipping address: ${data.users.address}`},
    { text: 'Thank You', style: 'bottom' },
    { text: 'For Test'}
  ];


  const styles = {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    subheader: {
      fontSize: 12,
      bold: true,
      margin: [0, 10, 0, 5]
    },
    tableExample: {
      margin: [0, 5, 0, 15]
    },
    tableHeader: {
      bold: true,
      fontSize: 12,
      color: 'black'
    },
    bottom: {
      margin: [0, 14, 0, 0]
    }
  };

  const docDefinition = {
    content: content,
    styles: styles
  };

  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, 'document/invoice.pdf')));
  pdfDoc.end();
};


module.exports = createPdf;