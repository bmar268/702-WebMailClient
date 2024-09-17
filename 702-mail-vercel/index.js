const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Sample data for email content and email lists
const emailContent = {
    "1": { "id": "1", "body": "<div><p>Dear customer, your account is at risk. Please <a href='http://example.com'>click here</a> to update your account information to avoid any interruption in services.</p><p>Thank you for being a valued Amazon customer.</p></div>" },
    "2": { "id": "2", "body": "<div><p>Dear user, we were unable to process your recent payment. To avoid service interruption, please <a href='http://example.com'>update your payment details</a> immediately.</p><p>Regards, Netflix Billing Team</p></div>" },
    "3": { "id": "3", "body": "<div><p>We detected an unauthorized login attempt on your PayPal account. Please <a href='http://example.com'>verify your account</a> to ensure the security of your funds.</p><p>PayPal Security Team</p></div>" },
    "4": { "id": "4", "body": "<div><p>Dear user, we have updated our privacy policy to better protect your personal information. Please review the changes <a href='http://google.com/privacy'>here</a>.</p><p>Google Team</p></div>" },
    "5": { "id": "5", "body": "<div><p>Your package could not be delivered due to an incorrect address. Please <a href='http://example.com'>confirm your address</a> to arrange a new delivery.</p><p>FedEx Shipping</p></div>" },
    "6": { "id": "6", "body": "<div><p>Your Secure Bank account has been suspended due to unusual activity. Please <a href='http://example.com'>click here</a> to verify your identity and restore access.</p><p>Secure Bank Security</p></div>" },
    "7": { "id": "7", "body": "<div><p>You have a new connection request from John Doe. Please <a href='http://linkedin.com'>click here</a> to review the request and respond.</p><p>LinkedIn Team</p></div>" },
    "8": { "id": "8", "body": "<div><p>Congratulations! You are eligible for a tax refund. Please <a href='http://example.com'>click here</a> to claim your refund now.</p><p>IRS</p></div>" },
    "9": { "id": "9", "body": "<div><p>Your donation can make a difference. Please <a href='http://example.com'>click here</a> to donate and support children in need today.</p><p>Charity Support Team</p></div>" },
    "10": { "id": "10", "body": "<div><p>Your Apple ID was used to sign in to iCloud from a new device. If this was not you, please <a href='http://example.com'>click here</a> to secure your account.</p><p>Apple ID Team</p></div>" },
    "11": { "id": "11", "body": "<div><p>Your shipment has been dispatched. Please <a href='http://example.com'>click here</a> to track your package and view the estimated delivery date.</p><p>DHL Service</p></div>" },
    "12": { "id": "12", "body": "<div><p>Your job application has been reviewed. We are pleased to inform you that you have been shortlisted for the next round. Please check your application status <a href='http://careers.com'>here</a>.</p><p>Careers Team</p></div>" },
    "13": { "id": "13", "body": "<div><p>Congratulations! You have been selected to receive an exclusive offer. Please <a href='http://example.com'>click here</a> to claim your reward before it expires.</p><p>Official Site</p></div>" },
    "14": { "id": "14", "body": "<div><p>Your Microsoft account requires verification to avoid temporary suspension. Please <a href='http://example.com'>click here</a> to verify your account now.</p><p>Microsoft Support</p></div>" },
    "15": { "id": "15", "body": "<div><p>We are currently reviewing your PayPal account due to a payment issue. Please <a href='http://example.com'>click here</a> to resolve the issue and avoid any limitations.</p><p>PayPal Service Team</p></div>" }  
};

const emailLists = {
    "1": {
      "list": [
        {
          "id": "1",
          "from": { "email": "security@anz.com", "name": "ANZ Security" },
          "date": 1726488000,
          "subject": "Urgent: Your Account Has Been Compromised!",
          "short_description": "Your account has been locked due to suspicious activity. Please verify immediately."
        },
        {
          "id": "2",
          "from": { "email": "ceo@microsoftsupportupdate.com", "name": "Microsoft CEO" },
          "date": 1726488000,
          "subject": "Congratulations! You've won a free laptop!",
          "short_description": "Claim your new Microsoft Surface Pro by clicking here now."
        },
        {
          "id": "3",
          "from": { "email": "david.smith@auckland.ac.nz", "name": "David Smith" },
          "date": 1695123200000,
          "subject": "A3 Report - Urgent Review Needed",
          "short_description": "Please review the attached assignment and provide feedback."
        },
        {
          "id": "4",
          "from": { "email": "marketing@fashionbrand.com", "name": "Fashion Brand" },
          "date": 1695209600000,
          "subject": "Limited Time Offer: 50% off All Shoes!",
          "short_description": "Don't miss out on our biggest sale of the season!"
        },
        {
          "id": "5",
          "from": { "email": "admin@fb.com", "name": "Facebook Admin" },
          "date": 1695296000000,
          "subject": "Account Verification Required",
          "short_description": "Your account may be disabled soon. Verify your information to keep it active."
        },
        {
          "id": "6",
          "from": { "email": "john.doe@auckland.ac.nz", "name": "John Doe" },
          "date": 1695382400000,
          "subject": "Reminder: Assignment Due Tomorrow",
          "short_description": "Just a quick reminder, your assignment is due by midnight tomorrow."
        },
        {
          "id": "7",
          "from": { "email": "rewards@visa-platinum.com", "name": "Visa Rewards Team" },
          "date": 1695468800000,
          "subject": "You've Earned $200 in Rewards Points!",
          "short_description": "Claim your points now before they expire!"
        },
        {
          "id": "8",
          "from": { "email": "john.smith@realestatecorp.com", "name": "John Smith" },
          "date": 1695555200000,
          "subject": "Meeting Request: Property Discussion",
          "short_description": "I'd like to schedule a time to discuss the property options we reviewed."
        },
        {
          "id": "9",
          "from": { "email": "support@paypal-alert.com", "name": "PayPal Support" },
          "date": 1695641600000,
          "subject": "Suspicious Activity Detected on Your PayPal Account",
          "short_description": "Click here to secure your account before it's too late."
        },
        {
          "id": "10",
          "from": { "email": "noreply@github.com", "name": "GitHub" },
          "date": 1695728000000,
          "subject": "[GitHub] Your Dependabot alerts for the week of Sep 10 - Sep 17",
          "short_description": "Your repository security updates from the week of Sep 10 - Sep 17"
        },
      ],
      "total": 15
    },    
    "2": {
        "list": [
          {
            "id": "11",
            "from": { "email": "jobalerts-noreply@linkedin.com", "name": "LinkedIn Job Alerts" },
            "date": 1695814400000,
            "subject": "Exciting Job Opportunity for You!",
            "short_description": "“software engineer”: Cloud Support Engineer (Developer and Mobile Services) and more"
          },
          {
            "id": "12",
            "from": { "email": "james.w@startupinnovations.com", "name": "James W." },
            "date": 1695900800000,
            "subject": "Team Meeting Rescheduled to 3 PM",
            "short_description": "Hi all, please note that the team meeting has been rescheduled."
          },
          {
            "id": "13",
            "from": { "email": "admin@ebay-billing.com", "name": "eBay Billing" },
            "date": 1695987200000,
            "subject": "Your eBay Invoice is Ready",
            "short_description": "Download your eBay invoice now to avoid service interruptions."
          },
          {
            "id": "14",
            "from": { "email": "jared.doe@aucklanduni.ac.nz", "name": "Jared Doe" },
            "date": 1696073600000,
            "subject": "Grade Report for Softeng 702",
            "short_description": "Hi! Please find attached your grades for the last test."
          },
          {
            "id": "15",
            "from": { "email": "services@netflix.com", "name": "Netflix Support" },
            "date": 1696160000000,
            "subject": "We Miss You! Come Back to Netflix for Just $5.99",
            "short_description": "Renew your Netflix subscription now and get 2 months for $5.99!"
          },
          {
            "id": "16",
            "from": { "email": "security@itune-security.com", "name": "iTunes Security" },
            "date": 1696246400000,
            "subject": "Your Apple ID is about to be disabled!",
            "short_description": "Reactivate your Apple ID now to avoid permanent deactivation."
          },
          {
            "id": "17",
            "from": { "email": "mail@c.2degreesmobile.co.nz", "name": "2degrees" },
            "date": 1696332800000,
            "subject": "iPhone 16 Pro. Hello, Apple Intelligence.",
            "short_description": "Save $500 when you pre-order the iPhone 16 Pro Interest Free and upgrade to a $65 Carryover Pay Monthly plan or above."
          },
          {
            "id": "18",
            "from": { "email": "admin@googlesecurity.com", "name": "Google Security Team" },
            "date": 1696419200000,
            "subject": "Unusual Login Attempt Detected",
            "short_description": "Someone tried to access your account from an unknown device. Secure your account now."
          },
          {
            "id": "19",
            "from": { "email": "support@adobe.com", "name": "Adobe Support" },
            "date": 1696505600000,
            "subject": "Your Adobe Creative Cloud Subscription Is About to Expire",
            "short_description": "Renew now to keep access to all your favorite apps."
          },
          {
            "id": "20",
            "from": { "email": "win@luxurylifestylegiveaway.com", "name": "Luxury Lifestyle Giveaway" },
            "date": 1696592000000,
            "subject": "You’ve Been Selected for a $5000 Prize!",
            "short_description": "Claim your exclusive prize by following this link."
          }
        ],
        "total": 15
    }
};

app.use(cors(
  {
    origin: '*',
  }
));

// Endpoint 1: Get email content by ID
app.get('/id', (req, res) => {
    const emailItemId = req.query.id;
    if (emailItemId && emailContent[emailItemId]) {
        res.json(emailContent[emailItemId]);
    } else {
        res.status(404).json({ error: 'Email not found' });
    }
});

// Endpoint 2: Get email list by page
app.get('/page', (req, res) => {
    const pageNumber = req.query.page;
    if (pageNumber && emailLists[pageNumber]) {
        res.json(emailLists[pageNumber]);
    } else {
        res.status(404).json({ error: 'Page not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
