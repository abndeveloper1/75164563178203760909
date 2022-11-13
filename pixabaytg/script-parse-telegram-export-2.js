const fs = require('fs');

fs.readFile('result.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(data);

 var mydata = JSON.parse(data).messages;
 for (let i = 0; i < mydata.length; i++) {
  console.log(mydata[i].photo, ",\"", String(mydata[i].text[0]).split('\n')[0],"\"");

  //console.log(mydata[i].text);
  //console.log(mydata[i].text[0]);
 }
});
