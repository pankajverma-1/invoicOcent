const { json } = require('body-parser');
const puppeteer = require('puppeteer');
let xlData;
let allMail = [];
let shootData = [];
let messageBody;
let mail = [];
let allClientMail = [];
let selectClientMail = 0;
let resetInvoiceCycle = 0;
let bodyMessageIndex;
let testingMails;
let testingMailCycle;
let createNewInvoice;

const setupMail = (
    dynamicClientMail,
    staticClientMail = '',
    staticClientMailCycle = 0,
    invoiceCycle = 0
) => {
    if (staticClientMailCycle > 0) {
        testingMails = staticClientMail;
        testingMailCycle = staticClientMailCycle;
    }
    if (invoiceCycle > 0) {
        createNewInvoice = invoiceCycle;
    }

    for (let index = 0; index < xlData.length; index++) {
        const element = xlData[index];
        if (index == xlData.length - 1) {
            mail.push(element);
            allMail.push(mail);
            return;
        }
        if (dynamicClientMail) {
            if (mail.length == 5) {
                allMail.push(mail);
                allClientMail.push(element);
                mail = [];
            } else {
                mail.push(element);
            }
        } else {
            if (mail.length == 4) {
                mail.push(element);
                allMail.push(mail);
                allClientMail.push(staticClientMail);
                mail = [];
            } else {
                mail.push(element);
            }
        }
    }
};
const main = async(userEmail, userPassword, startCycle = 0) => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: '/usr/bin/chromium-browser',
        });
        const page = await browser.newPage();
        await page.goto('https://app.invoiceocean.com/login', {
            waitUntil: 'load',
        });

        //Select Email and password
        await page.type('#user_session_login', `${userEmail}`);
        await page.type('#user_session_password', `${userPassword}`);
        await page.click('.login');

        //select and click income button
        await page.waitForSelector("a[href='/invoices']");
        await page.click("a[href='/invoices']");
        //select and click invoice button
        await page.waitForSelector("a[href='/invoices?kind=vat']");
        await page.click("a[href='/invoices?kind=vat']");
        //select and click add-new-invoice button
        await page.waitForSelector("a[href='/invoices/new?kind=vat']");
        await page.evaluate(() => {
            const button = document.querySelector("a[href='/invoices/new?kind=vat']");
            button.click();
        });
        await page.waitForNavigation();
        //select buyer name
        await page.$$eval('.autocomplete_arrow', (items) => {
            items[0].click();
        });
        await page.waitForSelector('#ui-id-3');
        await page.focus('#invoice_buyer_name');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        //select product item

        await page.$$eval('.autocomplete_arrow', (items) => {
            items[1].click();
        });
        await page.waitForSelector('#ui-id-4');
        await page.focus('#invoice_positions_attributes_0_name');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        //click save button
        await page.click('#invoice_submit_button1');
        await page.waitForNavigation();

        for (let i = startCycle; i < allMail.length; i++) {
            bodyMessageIndex = i % messageBody.length;
            await page.waitForTimeout(5000);
            if (resetInvoiceCycle % createNewInvoice == 0) {
                await page.waitForSelector("a[href='/invoices']");
                await page.click("a[href='/invoices']");
                await page.waitForSelector("a[href='/invoices?kind=vat']");
                await page.click("a[href='/invoices?kind=vat']");
                await page.waitForSelector("a[href='/invoices/new?kind=vat']");
                await page.evaluate(() => {
                    const button = document.querySelector(
                        "a[href='/invoices/new?kind=vat']"
                    );
                    button.click();
                });
                await page.waitForNavigation();
                await page.$$eval('.autocomplete_arrow', (items) => {
                    items[0].click();
                });
                await page.waitForSelector('#ui-id-3');
                await page.focus('#invoice_buyer_name');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('Enter');
                await page.$$eval('.autocomplete_arrow', (items) => {
                    items[1].click();
                });
                await page.waitForSelector('#ui-id-4');
                await page.focus('#invoice_positions_attributes_0_name');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('Enter');
                await page.click('#invoice_submit_button1');
                await page.waitForNavigation();
                shootData.push({ 'Page Refresh': 'yes' });
            }
            const CC = allMail[i];
            var client = allClientMail[i];

            if (testingMailCycle !== undefined) {
                i % testingMailCycle == 0 ? (client = testingMails) : client;
            }
            //click send button
            await page.waitForSelector('.first.has_submenu.menu_open a');
            await page.evaluate(() => {
                const button = document.querySelector('.first.has_submenu.menu_open a');
                button.click();
            });
            //select and add client email
            await page.waitForSelector('#invoice_email_to');
            await page.focus('#invoice_email_to');
            await page.click('#invoice_email_to');
            await page.waitForTimeout(1000);
            if (selectClientMail >= 3) {
                await page.keyboard.press('ArrowDown');
                await page.waitForTimeout(100);
                await page.keyboard.press('ArrowDown');
                await page.waitForTimeout(100);
                await page.keyboard.press('Enter');
            }
            await page.keyboard.down('Control');
            await page.keyboard.press('A');
            await page.keyboard.up('Control');
            //select and add cc mail
            await page.type('#invoice_email_to', client);
            console.log('client Email', client);

            await page.waitForSelector('#invoice_email_cc');
            await page.focus('#invoice_email_cc');
            await page.keyboard.down('Control');
            await page.keyboard.press('A');
            await page.keyboard.up('Control');

            let SixMail = CC.reduce((acc, val) => (acc += val + ' '), '');
            await page.type('#invoice_email_cc', SixMail);

            console.log('CC Sixmail = ', SixMail);

            // select and add messageBody contact

            await page.waitForSelector('#invoice_email_body');
            await page.focus('#invoice_email_body');
            await page.keyboard.down('Control');
            await page.keyboard.press('A');
            await page.keyboard.up('Control');

            if (messageBody.length == bodyMessageIndex + 1) {
                bodyMessageIndex = 0;
            }
            await page.type('#invoice_email_body', messageBody[bodyMessageIndex]);
            console.log('BodyMessage', messageBody[bodyMessageIndex]);
            console.log('BodyMessageIndex', bodyMessageIndex);

            //click send button
            await page.waitForSelector('.btn.btn-glow.success');
            await page.evaluate(() => {
                const button = document.querySelector('.btn.btn-glow.success');
                button.click();
            });

            shootData.push({ ClientEmail: client, shoot: 'yes' });
            for (let i = 0; i < CC.length; i++) {
                const element = CC[i];
                shootData.push({ email: element, shoot: 'yes' });
            }
            shootData.push({ message: messageBody[bodyMessageIndex] });
            shootData.push({ messageIndex: bodyMessageIndex });
            shootData.push({ 'Complete Cycle': i });
            shootData.push({ '==================': '=========================' });
            resetInvoiceCycle++;
            selectClientMail++;
            bodyMessageIndex++;
        }
        await browser.close();
        shootData.push({ 'total Cycle': allMail.length });
        return shootData;
    } catch (error) {
        console.log(error);
        shootData.push({ 'total Cycle': allMail.length });
        return shootData;
    }
};

exports.runData = async(req, res) => {
    const {
        file,
        email,
        password,
        clientMail,
        createNewInvoice,
        clientMailCycle,
        startCycle,
        body,
    } = req.body;
    xlData = file.split('\n');
    console.log(xlData.length);
    messageBody = body.split('#');
    try {
        setupMail(true, clientMail, clientMailCycle, createNewInvoice);
        const clearData = await main(email, password, startCycle);
        res.send(clearData);
    } catch (error) {
        console.log(error.message);
        res.send({ error: error, clearData: shootData });
    }
};