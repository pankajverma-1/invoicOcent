var XLSX = require('xlsx');
var workbook = XLSX.readFile('./Bill.xlsx');

var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

let obj = [{
        name: `Dear Customer,
    On behalf of our client, eBay, we have levied a charge against your account for the product " Tour Edge Bazooka 370 Men's Golf Complete Package Set".
    The Bill is overdue and as per your agreement with them, payment was due within seven days of delivery. Since you have failed to comply by this deadline, we have initiated a debit against your account in the amount of USD 461.77.
    kindly Contact us at +1 (888) 245-3190 if you have concerns as regards payments or are having trouble paying this amount.
    Thank you for purchasing from us.
    Sincerely,
    eBay
    +1 (888) 245-3190`,
    },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
];

let allMail = [];
let shootData = [];
let mail = [];
let clientMail = [];
const setupMail = (dynamicClientMail, staticClientMail = '') => {
    for (let index = 0; index < xlData.length; index++) {
        const element = xlData[index];
        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
                const data = element[key];
                if (dynamicClientMail) {
                    if (mail.length == 5) {
                        allMail.push(mail);
                        clientMail.push(data);
                        mail = [];
                    } else {
                        mail.push(data);
                    }
                } else {
                    if (mail.length == 4) {
                        mail.push(data);
                        allMail.push(mail);
                        clientMail.push(staticClientMail);
                        mail = [];
                    } else {
                        mail.push(data);
                    }
                }
            }
        }
    }
};

setupMail(false, 'pankaj');

allMail.map((item, i) => {
    item.map((val, j) => {
        shootData.push({ email: val, shoot: 'yes' });
    });
});
clientMail.map((item, i) => {
    shootData.push({ ClientEmail: item, shoot: 'yes' });
});
console.log('clientMail', clientMail.length);
// for (let i = 0; i < allMail.length; i++) {
//     const CC = allMail[i];
//     const client = clientMail[i];
//     let SixMail = CC.reduce((acc, val) => (acc += ' ' + val), '');
//     console.log(SixMail);
// }
let body = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(6 == body.length);

const ws = XLSX.utils.json_to_sheet(shootData);
XLSX.utils.book_append_sheet(workbook, ws);
XLSX.writeFile(workbook, './Bill.xlsx');