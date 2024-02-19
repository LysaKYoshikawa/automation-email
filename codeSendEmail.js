const mail = MailApp
const app=SpreadsheetApp;
const spreadsheet=app.getActiveSpreadsheet();
const sheet=spreadsheet.getSheetByName("nome da aba");

function myFunction() {
  let values = sheet.getDataRange().getValues();

  for (row of values){

    const body = `
    texto para envio de e-mail

    
    `
    const subject = "Assunto do e-mail"


    if (row[2] === "ENVIAR"){
      const recipient = row[1];
      console.log(row[1])
      mail.sendEmail(recipient, subject,body )
      
    }

  }
  
}


// let celula = sheet.getRange(linha, coluna);

// celula.setValue("Enviado")

