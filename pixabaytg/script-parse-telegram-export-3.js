const fs = require('fs');

fs.readFile('result.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(data);

 var mydata = JSON.parse(data).messages;
 var text;
 var index;
 for (let i = 0; i < mydata.length; i++) {
  //console.log(mydata[i].photo, ",", mydata[i].text[0]);
  //console.log(mydata[i].photo, ",\"", mydata[i].text[0],"\"");
  text = String(mydata[i].text[0]);
  index = text.indexOf("\n");
  console.log(mydata[i].photo, ",\"", text.substring(0,index),"\"");

  //console.log(mydata[i].text);
  //console.log(mydata[i].text[0]);
 }
});
