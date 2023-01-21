const puppeteer = require('puppeteer');
var XLSX = require('xlsx');
var workbook = XLSX.readFile('./Bill.xlsx');

var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

let allMail = [];
let shootData = [];
let mail = [];
let clientMail = [];
let body = [
    `Dear Customer, 

    We will start charging your account 435.21 USD as simple as you acquire our Cloud Data Protection Plan of  435.21 USD.
    
    Our Cloud Data Protection Plan of  435.21 USD will begin to cover the charge of securing your devices after three years of use.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    Our helpdesk team is available 24/7.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection, we'll start deducting 435.21 USD annually from your account.
    
    The service will pay the money after three years of use.
    
    If you have any questions about payments or are having trouble paying, Kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan.
    
    We will begin deducting 435.21 USD from your account for the Cloud Data Protection Plan of  435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, a cloud-based solution that safeguards every of your data.
    
    This package covers 3 years of protection and maintenance charges, and charges will start to appear on your account instantly after purchasing.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    A yearly subscription, the Cloud Data Protection Plan of  435.21 USD provide security to your devices and amount is deducted from your account.
    
    When your three-year term is up, you can set a countdown to automatically renew your plan, alternatively, you can end this at any time.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD which  is valid for one year.
    
    As simple as you choose this plan, we'll start charging your account 435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of 435.21 USD will be charged to your account.
    
    The first of these three payments is required when we receive the first of these fees.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely, 
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account on the first of every month.
    
    Your account will be covered for up to two replicas up to 1 terabyte of total storage after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD sign-up process, we will start charging your account 435.21 USD annually.
    
    We will pay the charge of this plan to you after three years of annual security.
    If you ever have any questions about payments or are having any trouble paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Our Premium and Business Plans have acquire to our Cloud Data Protection Plan of  435.21 USD and We appreciate you taking the time for buying our Cloud Data Protection Plan.
    
    It guards against unintentional data loss and theft on every of your devices.
    
    For each year that you utilise and maintain this plan, a storage space of 2 GB will be kept to you.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Security Plan of  435.21 USD of three years of protection.
    
    If after three years you decide you no longer require the protection, you can choose to forego it or keep paying for it.
    
    Additional, a backup of your device's files will be provided to you to use if necessary.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, Customer

    To prevent your data and devices from being accessed by anybody other than you, We appreciate you for buying our Cloud Data Protection Plan of  435.21 USD.
    
    A three-year plan charges 435.21 USD, however if you buy the protection, it will be covered for three years.
    
    If you need to end this service anytime during its term, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD, you will be charged 435.21 USD.
    
    We pay every of our protection plan payments after three years of use and maintenance, and we'll continue to secure your devices.
     
    If you have any questions or are having problems paying, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    Following your purchasing of our Cloud Data Protection Plan of  435.21 USD, we'll start charging your account 435.21 USD annually.
    
    Our service plan will pay the charge of securing your gadgets after three years of use and maintenance.
    
    If you have any questions about payments or troubles paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We have made the decision to invest in your Cloud Data Protection Plan of  435.21 USD to safeguard your devices.
    
    You will be able to continue paying a little bit more after three years and regular use of your protection package.
    
    The support staff will try their hardest to take back to you as simple as possible, we assure it!
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer 
    Thank you!
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Hey customer! 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD which is an effective tool for keeping the devices used by your business backed up, secure, and current.
    
    We provide the lowest amounts in the sector. You will be able to more sophisticated services like two-factor authentication, device management, and bot-based Contact recording in addition to our basic device protection.
    
    For the duration of your subscription payment plan, we also maintain your business data's security and management.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499. 
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD.
    
    At a very low charge, that amounts to three years of protection, data backup, and recovery.
    
    As simple as you purchasing one of our Plans, we will start charging your account, so don't wait any longer.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD.
    
    We'll start charging your account 435.21 USD every three months for the following three months.
    
    You can cover the charge of securing your devices after this time period, which can last up to three years, by paying an annual fee of 435.21 USD (heavily discounted from the original amount of 599 USD).
    
    If at any time you have any questions or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Kindly be aware that even if you purchased this plan before your plan began, you must first have bought our Cloud Data Protection Plan of  435.21 USD.
    
    We advise you to first acquire our Cloud Data Protection Plan of  435.21 USD to your own safety and convenience.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    A short-term subscription is offered for the Cloud Data Protection Plan of  435.21 USD.
    
    Three years of use and maintenance will result in the protection being covered.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Get infinite selections for a single payment. As simple as you purchasing our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate your decision to purchasing the Cloud Data Protection Plan of  435.21 USD.
    
    We have already begun the charging process for the payment, and once it is finished, we will notify you of the start of your first maintenance period.
    
    If you have any questions related payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We start charging your account when you purchased the Cloud Data Protection Plan of  435.21 USD.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions concerning payments or are encountering difficulties paying this fee, Kindly don’t hesitate to contact us at +1 (888) 377-1499. 
    
    Thank you to your business and I look forward to hearing from you simple. Yours truly,
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We are writing to let you know that the charging procedure for the Cloud Data Protection Plan of  435.21 USD has already begun.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We have already begun the payment procedure to your Cloud Data Protection Plan of  435.21 USD.
    
    Kindly be aware that we, i.e., Geek Squad, will cover the maintenance of your devices for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The payment to your Cloud Data Protection Plan of  435.21 USD has been received.
    
    Your service will start right away. You will have three maintenance visits to our Geek Squad facilities covered over the following three years.
    
    If you have any questions, Kindly contact us 24/7 at +1 (888) 377-1499. 
    
    Thank you to your business and we look forward to serving you in the future!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you choosing to purchasing our Cloud Data Protection Plan of  435.21 USD.
    
    Kindly be aware that you will guided for the payment instructions through email and that you can pay this sum using Account or PayPal.
    
    For any questions related to payments, Kindly contact us at +1+1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    When your Cloud Data Protection Plan of  435.21 USD is scheduled to be charged.
    
    We've already begun, and we'll pay to your maintenance for three years.
    
    If you have any questions as regards payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your Cloud Data Protection Plan of  435.21 USD will, currently be charged 435.21 USD, starting at the very moment.
    
    For three years, we'll pay to your maintenance (Geek Squad), and you can pay any sum at any moment.
    
    Kindly reach us out at +1 (888) 377-1499 if you have any questions or difficulties paying this amount.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your Cloud Data Protection Plan of  435.21 USD is currently being charged to your account.
    
    The plan's 435.21 amount tag includes three years of maintenance for every registered devices in our service region.
    
    If you have any questions about payments or if you run into trouble paying for it, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Related to your Cloud Data Protection Plan of  435.21 USD, we are sending you a message.
    
    Your account has already been charged 435.21 USD for this.
    
    Kindly Contact us at +1 (888) 377-1499 if you have any questions as your charging process has begun.
    
    If you are not able to pay this amount at this time, Kindly do not hesitate to reach out to us for assistance.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    I want to let you kcurrently that the first instalment of your Cloud Data Protection Plan of  435.21 USD has already been charged.
    
    Kindly be aware that your devices three-year maintenance will be available freely.
    
    If you have any questions about this payment or are having trouble paying it, Kindly contact us at +1 (888) 377-1499. 
    
    At this point we will ask you to confirm your identity, telephone number and email address.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We have already begun the charging process to your Cloud Data Protection Plan of  435.21 USD.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly reach out to us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    The current charge of your Cloud Data Protection Plan of  435.21 USD.
    
    Your electronic devices have begun charging, and three years of maintenance is included.
    
    If you have any questions or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    We look forward to helping you in any way possible.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The Cloud Data Protection Plan of  435.21 USD payment is charged to your account.
    
    The charging process has already begun. Your devices will be serviceable for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your product for a Cloud Data Protection Plan of  435.21 USD has been received.
    
    The charging process has already begun, and we will pay your monthly payments for three years.
    
    If you have any questions, Kindly Contact us at +1 (888) 377-1499. Thanks!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate your buying of the Cloud Data Protection Plan of  435.21 USD.
    
    In the upcoming days, we will begin charging as we have already begun the charging process.
    
    Your devices up keep will be covered for three years. Contact us at +1 (888) 377-1499 if you have any inquiries.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The Cloud Data Protection Plan of  435.21 USD's procedure has begun.
    
    Kindly contact us at +1 (888) 377-1499 if you have any questions about payments or are having problems making this payment.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We've already begun debiting your account of the Cloud Data Protection Plan of  435.21 USD.
    For three years, maintenance is anticipated.
    
    Contact us at +1 (888) 377-1499 if you require help or if you have any queries about how payments operate.
    Kindly let us kcurrently if there is anything we can do to make this process easier on you!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We've already begun debiting your account of the Cloud Data Protection Plan of  435.21 USD.
    For three years, maintenance is anticipated.
    
    Contact us at +1 (888) 377-1499 if you require help or if you have any queries about how payments operate.
    Kindly let us kcurrently if there is anything we can do to make this process easier on you!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Hi sir,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan.
    
    We'll start charging your account 435.21 USD for three years of coverage.
    
    Following that, we'll record how many devices are protected, and you can see this information in your Cloud Control Report.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely, 
    Geek Squad
    +1 (888) 377-1499	`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD so that we can start charging your account.
    
    After you acquire the package, we'll start assisting in the protection of your devices, allowing you to use them with confidence for three years.
    
    How it works: After two years of paying for Cloud protection, if you have any trouble getting paid by your account or PayPal, contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD.
    
    You won't have to pay more than 435.21 USD per device for data security after three years of use and maintenance.
    
    If you have any questions related payments or if you are having any trouble paying this amount, Kindly contact our team at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection.
    After the initial three years of protection, you will be billed about 435.21 USD every year if you want to keep using our service.
    Through your Easy Budget & charging account, you will make these payments online.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, you will be charged USD 435.21.
    We will start paying for the expense of securing your gadgets after three years of use.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us +1+1 (888) 377-1499.
    
    Thank you for being a valuable customer 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account.
    
    The charge of protecting any gadgets after three years of use and maintenance will be paid.
    
    If you have any questions or are having any trouble paying this amount, Kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD.
    
    After you purchasing this protection package, we will start charging your account 435.21 USD.
    
    If there is any issue with paying, contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    You must pay 435.21 USD before using Cloud Data Protection Plan of  435.21 USD for the first time.
    
    When you sign up for our Cloud Data Protection Plan of  435.21 USD, this sum will be paid instantly and will stay on your account for three years after use has finished.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We will start charging your account 435.21 USD as simple as you acquire our Cloud Data Protection Plan of  435.21 USD.
    
    Our Cloud Data Protection Plan of  435.21 USD will begin to cover the charge of securing your devices after three years of use.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    Our helpdesk team is available 24/7.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection, we'll start deducting 435.21 USD annually from your account.
    
    The service will pay the money after three years of use.
    
    If you have any questions about payments or are having trouble paying, Kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan.
    
    We will begin deducting 435.21 USD from your account for the Cloud Data Protection Plan of  435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, a cloud-based solution that safeguards every of your data.
    
    This package covers 3 years of protection and maintenance charges, and charges will start to appear on your account instantly after purchasing.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    A yearly subscription, the Cloud Data Protection Plan of  435.21 USD provide security to your devices and amount is deducted from your account.
    
    When your three-year term is up, you can set a countdown to automatically renew your plan, alternatively, you can end this at any time.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD which  is valid for one year.
    
    As simple as you choose this plan, we'll start charging your account 435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of 435.21 USD will be charged to your account.
    
    The first of these three payments is required when we receive the first of these fees.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely, 
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account on the first of every month.
    
    Your account will be covered for up to two replicas up to 1 terabyte of total storage after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD sign-up process, we will start charging your account 435.21 USD annually.
    
    We will pay the charge of this plan to you after three years of annual security.
    If you ever have any questions about payments or are having any trouble paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Our Premium and Business Plans have acquire to our Cloud Data Protection Plan of  435.21 USD and We appreciate you taking the time for buying our Cloud Data Protection Plan.
    
    It guards against unintentional data loss and theft on every of your devices.
    
    For each year that you utilise and maintain this plan, a storage space of 2 GB will be kept to you.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Security Plan of  435.21 USD of three years of protection.
    
    If after three years you decide you no longer require the protection, you can choose to forego it or keep paying for it.
    
    Additional, a backup of your device's files will be provided to you to use if necessary.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, Customer

    To prevent your data and devices from being accessed by anybody other than you, We appreciate you for buying our Cloud Data Protection Plan of  435.21 USD.
    
    A three-year plan charges 435.21 USD, however if you buy the protection, it will be covered for three years.
    
    If you need to end this service anytime during its term, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD, you will be charged 435.21 USD.
    
    We pay every of our protection plan payments after three years of use and maintenance, and we'll continue to secure your devices.
     
    If you have any questions or are having problems paying, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    Following your purchasing of our Cloud Data Protection Plan of  435.21 USD, we'll start charging your account 435.21 USD annually.
    
    Our service plan will pay the charge of securing your gadgets after three years of use and maintenance.
    
    If you have any questions about payments or troubles paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We have made the decision to invest in your Cloud Data Protection Plan of  435.21 USD to safeguard your devices.
    
    You will be able to continue paying a little bit more after three years and regular use of your protection package.
    
    The support staff will try their hardest to take back to you as simple as possible, we assure it!
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer 
    Thank you!
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Hey customer! 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD which is an effective tool for keeping the devices used by your business backed up, secure, and current.
    
    We provide the lowest amounts in the sector. You will be able to more sophisticated services like two-factor authentication, device management, and bot-based Contact recording in addition to our basic device protection.
    
    For the duration of your subscription payment plan, we also maintain your business data's security and management.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499. 
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD.
    
    At a very low charge, that amounts to three years of protection, data backup, and recovery.
    
    As simple as you purchasing one of our Plans, we will start charging your account, so don't wait any longer.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD.
    
    We'll start charging your account 435.21 USD every three months for the following three months.
    
    You can cover the charge of securing your devices after this time period, which can last up to three years, by paying an annual fee of 435.21 USD (heavily discounted from the original amount of 599 USD).
    
    If at any time you have any questions or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Kindly be aware that even if you purchased this plan before your plan began, you must first have bought our Cloud Data Protection Plan of  435.21 USD.
    
    We advise you to first acquire our Cloud Data Protection Plan of  435.21 USD to your own safety and convenience.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    A short-term subscription is offered for the Cloud Data Protection Plan of  435.21 USD.
    
    Three years of use and maintenance will result in the protection being covered.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Get infinite selections for a single payment. As simple as you purchasing our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate your decision to purchasing the Cloud Data Protection Plan of  435.21 USD.
    
    We have already begun the charging process for the payment, and once it is finished, we will notify you of the start of your first maintenance period.
    
    If you have any questions related payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We start charging your account when you purchased the Cloud Data Protection Plan of  435.21 USD.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions concerning payments or are encountering difficulties paying this fee, Kindly don’t hesitate to contact us at +1 (888) 377-1499. 
    
    Thank you to your business and I look forward to hearing from you simple. Yours truly,
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We are writing to let you know that the charging procedure for the Cloud Data Protection Plan of  435.21 USD has already begun.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We have already begun the payment procedure to your Cloud Data Protection Plan of  435.21 USD.
    
    Kindly be aware that we, i.e., Geek Squad, will cover the maintenance of your devices for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The payment to your Cloud Data Protection Plan of  435.21 USD has been received.
    
    Your service will start right away. You will have three maintenance visits to our Geek Squad facilities covered over the following three years.
    
    If you have any questions, Kindly contact us 24/7 at +1 (888) 377-1499. 
    
    Thank you to your business and we look forward to serving you in the future!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you choosing to purchasing our Cloud Data Protection Plan of  435.21 USD.
    
    Kindly be aware that you will guided for the payment instructions through email and that you can pay this sum using Account or PayPal.
    
    For any questions related to payments, Kindly contact us at +1+1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    When your Cloud Data Protection Plan of  435.21 USD is scheduled to be charged.
    
    We've already begun, and we'll pay to your maintenance for three years.
    
    If you have any questions as regards payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your Cloud Data Protection Plan of  435.21 USD will, currently be charged 435.21 USD, starting at the very moment.
    
    For three years, we'll pay to your maintenance (Geek Squad), and you can pay any sum at any moment.
    
    Kindly reach us out at +1 (888) 377-1499 if you have any questions or difficulties paying this amount.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your Cloud Data Protection Plan of  435.21 USD is currently being charged to your account.
    
    The plan's 435.21 amount tag includes three years of maintenance for every registered devices in our service region.
    
    If you have any questions about payments or if you run into trouble paying for it, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Related to your Cloud Data Protection Plan of  435.21 USD, we are sending you a message.
    
    Your account has already been charged 435.21 USD for this.
    
    Kindly Contact us at +1 (888) 377-1499 if you have any questions as your charging process has begun.
    
    If you are not able to pay this amount at this time, Kindly do not hesitate to reach out to us for assistance.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    I want to let you kcurrently that the first instalment of your Cloud Data Protection Plan of  435.21 USD has already been charged.
    
    Kindly be aware that your devices three-year maintenance will be available freely.
    
    If you have any questions about this payment or are having trouble paying it, Kindly contact us at +1 (888) 377-1499. 
    
    At this point we will ask you to confirm your identity, telephone number and email address.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We have already begun the charging process to your Cloud Data Protection Plan of  435.21 USD.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly reach out to us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    The current charge of your Cloud Data Protection Plan of  435.21 USD.
    
    Your electronic devices have begun charging, and three years of maintenance is included.
    
    If you have any questions or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    We look forward to helping you in any way possible.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The Cloud Data Protection Plan of  435.21 USD payment is charged to your account.
    
    The charging process has already begun. Your devices will be serviceable for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your product for a Cloud Data Protection Plan of  435.21 USD has been received.
    
    The charging process has already begun, and we will pay your monthly payments for three years.
    
    If you have any questions, Kindly Contact us at +1 (888) 377-1499. Thanks!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate your buying of the Cloud Data Protection Plan of  435.21 USD.
    
    In the upcoming days, we will begin charging as we have already begun the charging process.
    
    Your devices up keep will be covered for three years. Contact us at +1 (888) 377-1499 if you have any inquiries.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The Cloud Data Protection Plan of  435.21 USD's procedure has begun.
    
    Kindly contact us at +1 (888) 377-1499 if you have any questions about payments or are having problems making this payment.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Hi sir,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan.
    
    We'll start charging your account 435.21 USD for three years of coverage.
    
    Following that, we'll record how many devices are protected, and you can see this information in your Cloud Control Report.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely, 
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    Following your purchasing of our Cloud Data Protection Plan of  435.21 USD, we'll start charging your account 435.21 USD annually.
    
    Our service plan will pay the charge of securing your gadgets after three years of use and maintenance.
    
    If you have any questions about payments or troubles paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We have made the decision to invest in your Cloud Data Protection Plan of  435.21 USD to safeguard your devices.
    
    You will be able to continue paying a little bit more after three years and regular use of your protection package.
    
    The support staff will try their hardest to take back to you as simple as possible, we assure it!
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer 
    Thank you!
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Hey customer! 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD which is an effective tool for keeping the devices used by your business backed up, secure, and current.
    
    We provide the lowest amounts in the sector. You will be able to more sophisticated services like two-factor authentication, device management, and bot-based Contact recording in addition to our basic device protection.
    
    For the duration of your subscription payment plan, we also maintain your business data's security and management.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499. 
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD.
    
    At a very low charge, that amounts to three years of protection, data backup, and recovery.
    
    As simple as you purchasing one of our Plans, we will start charging your account, so don't wait any longer.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD.
    
    We'll start charging your account 435.21 USD every three months for the following three months.
    
    You can cover the charge of securing your devices after this time period, which can last up to three years, by paying an annual fee of 435.21 USD (heavily discounted from the original amount of 599 USD).
    
    If at any time you have any questions or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Kindly be aware that even if you purchased this plan before your plan began, you must first have bought our Cloud Data Protection Plan of  435.21 USD.
    
    We advise you to first acquire our Cloud Data Protection Plan of  435.21 USD to your own safety and convenience.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    A short-term subscription is offered for the Cloud Data Protection Plan of  435.21 USD.
    
    Three years of use and maintenance will result in the protection being covered.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Get infinite selections for a single payment. As simple as you purchasing our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate your decision to purchasing the Cloud Data Protection Plan of  435.21 USD.
    
    We have already begun the charging process for the payment, and once it is finished, we will notify you of the start of your first maintenance period.
    
    If you have any questions related payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We start charging your account when you purchased the Cloud Data Protection Plan of  435.21 USD.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions concerning payments or are encountering difficulties paying this fee, Kindly don’t hesitate to contact us at +1 (888) 377-1499. 
    
    Thank you to your business and I look forward to hearing from you simple. Yours truly,
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We are writing to let you know that the charging procedure for the Cloud Data Protection Plan of  435.21 USD has already begun.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We have already begun the payment procedure to your Cloud Data Protection Plan of  435.21 USD.
    
    Kindly be aware that we, i.e., Geek Squad, will cover the maintenance of your devices for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The payment to your Cloud Data Protection Plan of  435.21 USD has been received.
    
    Your service will start right away. You will have three maintenance visits to our Geek Squad facilities covered over the following three years.
    
    If you have any questions, Kindly contact us 24/7 at +1 (888) 377-1499. 
    
    Thank you to your business and we look forward to serving you in the future!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you choosing to purchasing our Cloud Data Protection Plan of  435.21 USD.
    
    Kindly be aware that you will guided for the payment instructions through email and that you can pay this sum using Account or PayPal.
    
    For any questions related to payments, Kindly contact us at +1+1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    When your Cloud Data Protection Plan of  435.21 USD is scheduled to be charged.
    
    We've already begun, and we'll pay to your maintenance for three years.
    
    If you have any questions as regards payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your Cloud Data Protection Plan of  435.21 USD will, currently be charged 435.21 USD, starting at the very moment.
    
    For three years, we'll pay to your maintenance (Geek Squad), and you can pay any sum at any moment.
    
    Kindly reach out if you have any questions or difficulties paying this amount.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your Cloud Data Protection Plan of  435.21 USD is currently being charged to your account.
    
    The plan's 435.21 amount tag includes three years of maintenance for every registered devices in our service region.
    
    If you have any questions about payments or if you run into trouble paying for it, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Related to your Cloud Data Protection Plan of  435.21 USD, we are sending you a message.
    
    Your account has already been charged 435.21 USD for this.
    
    Kindly Contact us at +1 (888) 377-1499 if you have any questions as your charging process has begun.
    
    If you are not able to pay this amount at this time, Kindly do not hesitate to reach out to us for assistance.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    I want to let you kcurrently that the first instalment of your Cloud Data Protection Plan of  435.21 USD has already been charged.
    
    Kindly be aware that your devices three-year maintenance will be available freely.
    
    If you have any questions about this payment or are having trouble paying it, Kindly contact us at +1 (888) 377-1499. 
    
    At this point we will ask you to confirm your identity, telephone number and email address.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We have already begun the charging process to your Cloud Data Protection Plan of  435.21 USD.
    
    Your devices maintenance will be covered for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly reach out to us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    The current charge of your Cloud Data Protection Plan of  435.21 USD.
    
    Your electronic devices have begun charging, and three years of maintenance is included.
    
    If you have any questions or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    We look forward to helping you in any way possible.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The Cloud Data Protection Plan of  435.21 USD payment is charged to your account.
    
    The charging process has already begun. Your devices will be serviceable for three years.
    
    If you have any questions as regard payments or are having trouble paying this amount, Kindly contact us at +1 (888) 377-1499. 
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Your product for a Cloud Data Protection Plan of  435.21 USD has been received.
    
    The charging process has already begun, and we will pay your monthly payments for three years.
    
    If you have any questions, Kindly Contact us at +1 (888) 377-1499. Thanks!
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate your buying of the Cloud Data Protection Plan of  435.21 USD.
    
    In the upcoming days, we will begin charging as we have already begun the charging process.
    
    Your devices up keep will be covered for three years. Contact us at +1 (888) 377-1499 if you have any inquiries.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    The Cloud Data Protection Plan of  435.21 USD's procedure has begun.
    
    Kindly contact us at +1 (888) 377-1499 if you have any questions about payments or are having problems making this payment.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Hi sir,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan.
    
    We'll start charging your account 435.21 USD for three years of coverage.
    
    Following that, we'll record how many devices are protected, and you can see this information in your Cloud Control Report.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely, 
    Geek Squad
    +1 (888) 377-1499	`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD so that we can start charging your account.
    
    After you acquire the package, we'll start assisting in the protection of your devices, allowing you to use them with confidence for three years.
    
    How it works: After two years of paying for Cloud protection, if you have any trouble getting paid by your account or PayPal, contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD.
    
    You won't have to pay more than 435.21 USD per device for data security after three years of use and maintenance.
    
    If you have any questions related payments or if you are having any trouble paying this amount, Kindly contact our team at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection.
    After the initial three years of protection, you will be billed about 435.21 USD every year if you want to keep using our service.
    Through your Easy Budget & charging account, you will make these payments online.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, you will be charged USD 435.21.
    We will start paying for the expense of securing your gadgets after three years of use.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us +1+1 (888) 377-1499.
    
    Thank you for being a valuable customer 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account.
    
    The charge of protecting any gadgets after three years of use and maintenance will be paid.
    
    If you have any questions or are having any trouble paying this amount, Kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD.
    
    After you purchasing this protection package, we will start charging your account 435.21 USD.
    
    If there is any issue with paying, contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    You must pay 435.21 USD before using Cloud Data Protection Plan of  435.21 USD for the first time.
    
    When you sign up for our Cloud Data Protection Plan of  435.21 USD, this sum will be paid instantly and will stay on your account for three years after use has finished.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We will start charging your account 435.21 USD as simple as you acquire our Cloud Data Protection Plan of  435.21 USD.
    
    Our Cloud Data Protection Plan of  435.21 USD will begin to cover the charge of securing your devices after three years of use.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    Our helpdesk team is available 24/7.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection, we'll start deducting 435.21 USD annually from your account.
    
    The service will pay the money after three years of use.
    
    If you have any questions about payments or are having trouble paying, Kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan.
    
    We will begin deducting 435.21 USD from your account for the Cloud Data Protection Plan of  435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, a cloud-based solution that safeguards every of your data.
    
    This package covers 3 years of protection and maintenance charges, and charges will start to appear on your account instantly after purchasing.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you for being a valuable customer
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    A yearly subscription, the Cloud Data Protection Plan of  435.21 USD provide security to your devices and amount is deducted from your account.
    
    When your three-year term is up, you can set a countdown to automatically renew your plan, alternatively, you can end this at any time.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD which  is valid for one year.
    
    As simple as you choose this plan, we'll start charging your account 435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of 435.21 USD will be charged to your account.
    
    The first of these three payments is required when we receive the first of these fees.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499
    
    Thank you for being a valuable customer
    Sincerely, 
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD.
    
    Your equipment will be covered for the charge of protecting them after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying  our Cloud Data Protection Plan of  435.21 USD, we'll start deducting 435.21 USD from your account on the first of every month.
    
    Your account will be covered for up to two replicas up to 1 terabyte of total storage after three years of use and maintenance.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, 

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD sign-up process, we will start charging your account 435.21 USD annually.		==========
    
    We will pay the charge of this plan to you after three years of annual security.
    If you ever have any questions about payments or are having any trouble paying this amount, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    Our Premium and Business Plans have acquire to our Cloud Data Protection Plan of  435.21 USD and We appreciate you taking the time for buying our Cloud Data Protection Plan.
    
    It guards against unintentional data loss and theft on every of your devices.
    
    For each year that you utilise and maintain this plan, a storage space of 2 GB will be kept to you.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Security Plan of  435.21 USD of three years of protection.
    
    If after three years you decide you no longer require the protection, you can choose to forego it or keep paying for it.
    
    Additional, a backup of your device's files will be provided to you to use if necessary.
    
    If you have any questions about payments or are having any trouble paying this amount, kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer, Customer

    To prevent your data and devices from being accessed by anybody other than you, We appreciate you for buying our Cloud Data Protection Plan of  435.21 USD.
    
    A three-year plan charges 435.21 USD, however if you buy the protection, it will be covered for three years.
    
    If you need to end this service anytime during its term, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
    `Dear Customer,

    We appreciate you taking the time for buying our Cloud Data Protection Plan of  435.21 USD, you will be charged 435.21 USD.
    
    We pay every of our protection plan payments after three years of use and maintenance, and we'll continue to secure your devices.
     
    If you have any questions or are having problems paying, Kindly contact us at +1 (888) 377-1499.
    
    Thank you so much. I appreciate it. 
    Sincerely
    Geek Squad
    +1 (888) 377-1499`,
];
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

setupMail(true, 'p.kumar1361861@gmail.com', 6, 5);

const main = async() => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://app.invoiceocean.com/login', {
            waitUntil: 'load',
        });

        //Select Email and password
        await page.type('#user_session_login', 'fxlqcaiqof@mail34.buzz');
        await page.type('#user_session_password', 'Qwerty@12345');
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

        for (let i = 491; i < allMail.length; i++) {
            bodyMessageIndex = i % body.length;
            await page.waitForTimeout(5000);
            if (resetInvoiceCycle == createNewInvoice) {
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
                console.log('Page Refresh');
            }
            const CC = allMail[i];
            var client = clientMail[i];

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
            shootData.push({ ClientEmail: client, shoot: 'yes' });

            await page.waitForSelector('#invoice_email_cc');
            await page.focus('#invoice_email_cc');
            await page.keyboard.down('Control');
            await page.keyboard.press('A');
            await page.keyboard.up('Control');

            let SixMail = CC.reduce((acc, val) => (acc += val + ','), '');
            await page.type('#invoice_email_cc', SixMail);
            for (let i = 0; i < CC.length; i++) {
                const element = CC[i];
                shootData.push({ email: element, shoot: 'yes' });
            }

            console.log('CC Sixmail = ', SixMail);

            // select and add body contact

            await page.waitForSelector('#invoice_email_body');
            await page.focus('#invoice_email_body');
            await page.keyboard.down('Control');
            await page.keyboard.press('A');
            await page.keyboard.up('Control');

            if (body.length == bodyMessageIndex + 1) {
                bodyMessageIndex = 0;
            }
            await page.type('#invoice_email_body', body[bodyMessageIndex]);
            console.log('BodyMessage', body[bodyMessageIndex]);
            console.log('BodyMessageIndex', bodyMessageIndex);

            //click send button
            await page.waitForSelector('.btn.btn-glow.success');
            await page.evaluate(() => {
                const button = document.querySelector('.btn.btn-glow.success');
                button.click();
            });
            resetInvoiceCycle++;
            selectClientMail++;
            bodyMessageIndex++;
            console.log('Cycle Complete', i);
            console.log(' ');
            console.log(' ');
            console.log(' ++++++++++++++++++++++++++++++++++++++++++  ');
        }
        const ws = XLSX.utils.json_to_sheet(shootData);
        XLSX.utils.book_append_sheet(workbook, ws);
        XLSX.writeFile(workbook, './Bill.xlsx');
        await browser.close();
    } catch (error) {
        const ws = XLSX.utils.json_to_sheet(shootData);
        XLSX.utils.book_append_sheet(workbook, ws);
        XLSX.writeFile(workbook, './Bill.xlsx');
        console.log(error);
    }
};

main();