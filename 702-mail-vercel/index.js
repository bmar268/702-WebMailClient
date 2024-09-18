const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Sample data for email content and email lists
const emailContent = {
    "1": {
      "id": "1",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: red;'>Urgent: Action Required to Secure Your Account</h1>
        <p>Dear Valued ANZ Customer,</p>
        <p>We have detected <strong>suspicious activity</strong> on your account, and as a result, your account has been temporarily locked for your protection. It is crucial that you take immediate action to <em>restore access</em> and secure your account.</p>
        <p>To verify your identity and <u>avoid any interruption</u> in your banking services, please follow the steps below:</p>
        <h2>Steps to Unlock Your Account:</h2>
        <ol>
          <li><a href='http://example.com/verify-account' style='color: blue;'>Click here to verify your identity</a></li>
          <li>Enter your <strong>personal information</strong> to confirm your identity</li>
          <li>Set up new security questions for your account</li>
          <li>Confirm your mobile number to receive alerts</li>
        </ol>
        <p><a href='http://example.com/security-tips' style='color: green;'>Read our latest security tips here</a> to protect your account from future threats.</p>
        <p><strong>Note:</strong> If you do not verify your information within 24 hours, your account will remain locked, and further action will be required. </p>
        <p>For urgent assistance, please contact our support team at <a href='mailto:support@anz.com'>support@anz.com</a>.</p>
        <p>Thank you for your prompt attention to this matter,</p>
        <p><em>ANZ Security Team</em></p>
      </div>`
    },
    "2": {
      "id": "2",
      "body": `<div style='font-family: Georgia, serif;'>
        <h1 style='color: green;'>🎉 Congratulations! 🎉</h1>
        <p>Dear User,</p>
        <p>We're excited to announce that you have been selected as one of the <strong>exclusive winners</strong> of a brand new Microsoft Surface Pro! This offer is part of our ongoing <em>Customer Appreciation Campaign</em>, and we want to reward loyal users like you!</p>
        <p>To claim your <strong>free laptop</strong>, follow the instructions below:</p>
        <h2>How to Claim:</h2>
        <ol>
          <li><a href='http://example.com/claim-laptop' style='color: blue;'>Click here to confirm your prize</a></li>
          <li>Fill in your shipping details and verification information</li>
          <li>Once confirmed, we will ship your new Microsoft Surface Pro within 7 business days</li>
        </ol>
        <p>Don't miss this once-in-a-lifetime opportunity! <a href='http://example.com/free-laptop' style='color: orange;'>Claim your prize now</a> before the deadline.</p>
        <p><strong>Note:</strong> This offer is valid for a limited time only. You must complete the claim process by <em>Friday, September 30th</em> to receive your laptop.</p>
        <p>For any questions or concerns, please reach out to our support team at <a href='mailto:support@microsoftsupportupdate.com'>support@microsoftsupportupdate.com</a>.</p>
        <p>Thanks for being a part of the Microsoft family!</p>
        <p><strong>Sincerely,</strong></p>
        <p><em>John Doe</em><br><em>CEO, Microsoft Support Update</em></p>
      </div>`
    },
    "3": {
      "id": "3",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: #0077b5;'>🚀 Exciting Job Opportunity: Cloud Support Engineer</h1>
        <p>Hi,</p>
        <p>We found an exciting new opportunity that matches your skills as a <strong>software engineer</strong>! Here are some job openings that may interest you:</p>
        <h2>Top Matches:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 100%;'>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
          <tr>
            <td>Cloud Support Engineer (Developer & Mobile Services)</td>
            <td>AWS</td>
            <td>Remote</td>
          </tr>
          <tr>
            <td>Full-Stack Developer</td>
            <td>Innovate Tech</td>
            <td>Hamilton, NZ</td>
          </tr>
          <tr>
            <td>Mobile App Engineer</td>
            <td>Skyline Solutions</td>
            <td>Auckland, NZ</td>
          </tr>
        </table>
        <h3>Job Overview:</h3>
        <p>If you’re interested, <a href='http://example.com/apply-now' style='color: blue;'>click here to apply</a>. These positions are filling up fast, so don’t wait!</p>
        <p>Best of luck,</p>
        <p><strong>LinkedIn Job Alerts</strong></p>
      </div>`
    },
    "4" : {
      "id": "4",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: #e74c3c;'>🔥 50% Off All Shoes - Limited Time Only! 🔥</h1>
        <p>Dear Fashion Lover,</p>
        <p>This is your chance to grab your favorite shoes at <strong>half price!</strong> We are offering an exclusive <em>50% off</em> on all our shoes, from stylish heels to comfortable sneakers, for a limited time only. Don't miss out on our biggest sale of the season!</p>
        <h2>How to Get This Deal:</h2>
        <ol>
          <li><a href='http://example.com/shop-shoes' style='color: blue;'>Shop our collection now</a></li>
          <li>Use the code <strong>SHOE50</strong> at checkout</li>
          <li>Enjoy 50% off your purchase instantly!</li>
        </ol>
        <p>Shop by <strong>Saturday, September 30th</strong> to take advantage of this offer. <a href='http://example.com/new-arrivals' style='color: green;'>Check out our new arrivals</a> and step into style with our hottest picks.</p>
        <p>Have questions? Feel free to <a href='mailto:support@fashionbrand.com'>contact our support team</a> for any inquiries.</p>
        <p>Happy Shopping!</p>
        <p><strong>Fashion Brand Team</strong></p>
      </div>`
    },
    "5" : {
      "id": "5",
      "body": `<div style='font-family: Tahoma, sans-serif;'>
        <h1 style='color: red;'>⚠️ Urgent: Account Verification Needed</h1>
        <p>Dear Facebook User,</p>
        <p>Our system has detected unusual activity on your account, and we need you to <strong>verify your information</strong> to ensure that your account remains active. If you do not verify your account soon, it may be <em>permanently disabled</em>.</p>
        <h2>Steps to Verify:</h2>
        <ol>
          <li><a href='http://example.com/verify-account' style='color: blue;'>Click here to verify your account</a></li>
          <li>Update your personal details and confirm your identity</li>
        </ol>
        <p>Please complete the verification process within <strong>24 hours</strong> to avoid any disruption in service. If you need assistance, you can contact our support at <a href='mailto:support@fb.com'>support@fb.com</a>.</p>
        <p>Thanks for your attention to this matter,</p>
        <p><strong>Facebook Admin Team</strong></p>
      </div>`
    },
    "6" : {
      "id": "6",
      "body": `<div style='font-family: Helvetica, sans-serif;'>
        <h1 style='color: navy;'>Reminder: Assignment Due Tomorrow</h1>
        <p>Hi Students,</p>
        <p>Just a quick reminder that your <strong>assignment is due tomorrow</strong> by midnight. Make sure to review all the requirements and submit on time to avoid any late penalties.</p>
        <p>If you have any last-minute questions or need clarifications, feel free to <a href='mailto:john.doe@auckland.ac.nz'>email me</a> or stop by during my office hours.</p>
        <p>Good luck, and I look forward to reviewing your work!</p>
        <p>Best regards,</p>
        <p><strong>John Doe</strong><br>Lecturer, University of Auckland</p>
      </div>`
    },
    "7" : {
      "id": "7",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: green;'>🎉 Congratulations! You've Earned $200 in Rewards Points!</h1>
        <p>Dear Valued Cardholder,</p>
        <p>We're excited to inform you that you have <strong>earned $200 in rewards points</strong> for being a loyal Visa Platinum customer! You can redeem these points now before they expire.</p>
        <h2>How to Redeem Your Rewards:</h2>
        <ol>
          <li><a href='http://example.com/redeem-points' style='color: blue;'>Click here to redeem your points</a></li>
          <li>Select how you'd like to use your points - cashback, travel vouchers, or gift cards</li>
        </ol>
        <p>Act quickly, as your points will expire on <strong>October 1st</strong>. Don't let this opportunity pass by!</p>
        <p>If you need any assistance with your rewards, please contact our support team at <a href='mailto:rewards@visa-platinum.com'>rewards@visa-platinum.com</a>.</p>
        <p>Thanks for choosing Visa!</p>
        <p><strong>Visa Rewards Team</strong></p>
      </div>`
    },    
    "8" : {
      "id": "8",
      "body": `<div style='font-family: Helvetica, sans-serif;'>
        <h1 style='color: #3498db;'>📱 Pre-order the iPhone 16 Pro Today!</h1>
        <p>Dear Customer,<p>
        <p>Save <strong>$500</strong> when you pre-order the <strong>iPhone 16 Pro</strong> Interest Free and upgrade to a <strong>$65 Carryover Pay Monthly plan</strong> or above.</p>
        <h2>Special Offer Breakdown:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 100%;'>
          <tr>
            <th>Phone Model</th>
            <th>Discount</th>
            <th>Monthly Plan</th>
          </tr>
          <tr>
            <td>iPhone 16</td>
            <td>$400 Off</td>
            <td>$45 and above</td>
          </tr>
          <tr>
            <td>iPhone 16 Plus</td>
            <td>$450 Off</td>
            <td>$55 and above</td>
          </tr>
          <tr>
            <td>iPhone 16 Pro</td>
            <td>$500 Off</td>
            <td>$65 and above</td>
          </tr>
          <tr>
            <td>iPhone 16 Pro Max</td>
            <td>$550 Off</td>
            <td>$75 and above</td>
          </tr>
        </table>
        <h3>Features of newest iPhone 16  :</h3>
        <ul>
          <li>Powered by the latest Apple Intelligence chip.</li>
          <li>120Hz ProMotion display.</li>
          <li>Improved battery life and camera performance.</li>
        </ul>
        <p><a href='http://example.com/preorder' style='color: blue;'>Pre-order now</a> and be among the first to experience Apple’s latest innovation!</p>
        <p>Best regards,</p>
        <p><strong>2degrees</strong></p>
      </div>`
    },
    "9" : {
      "id": "9",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: red;'>⚠️ Alert: Suspicious Activity Detected!</h1>
        <p>Dear PayPal Customer,</p>
        <p>We’ve noticed some <strong>unusual activity</strong> on your account and have temporarily restricted access to prevent any unauthorized transactions. To restore full access, please <a href='http://example.com/secure-account' style='color: blue;'>click here to secure your account</a>.</p>
        <h2>Steps to Secure Your Account:</h2>
        <ol>
          <li>Verify your identity by clicking the link</li>
          <li>Review recent transactions</li>
          <li>Set up two-factor authentication</li>
        </ol>
        <p>If you don't secure your account within <strong>24 hours</strong>, we may need to disable your account permanently for your safety.</p>
        <p>For any concerns, feel free to contact our support at <a href='mailto:support@paypal-alert.com'>support@paypal-alert.com</a>.</p>
        <p>Thanks for your immediate attention to this matter!</p>
        <p><strong>PayPal Support Team</strong></p>
      </div>`
    },
    "10" : {
      "id": "10",
      "body": `<div style='font-family: Georgia, serif;'>
        <h1 style='color: #2980b9;'>🎓 Grade Report: Softeng 702</h1>
        <p>Hi 702 Students,</p>
        <p>Your grades for the recent Softeng 702 test are now available. Please find the detailed breakdown of your performance below:</p>
        <h2>Grade Breakdown:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 70%;'>
          <tr>
            <th>Component</th>
            <th>Score</th>
            <th>Max Score</th>
          </tr>
          <tr>
            <td>Part 1: Test</td>
            <td>18</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Part 2: Exam</td>
            <td>35</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Part 3: Project</td>
            <td>40</td>
            <td>40</td>
          </tr>
        </table>
        <h3>Overall Grade: A+</h3>
        <p>If you have any questions about your grade, feel free to reach out at <a href='mailto:jared.doe@aucklanduni.ac.nz'>jared.doe@aucklanduni.ac.nz</a>.</p>
        <p>Best regards,</p>
        <p><strong>Jared Doe</strong><br>Lecturer, University of Auckland</p>
      </div>`
    },
    "11" : {
      "id": "11",
      "body": `<div style='font-family: Helvetica, sans-serif;'>
        <h1 style='color: navy;'>Urgent Review Needed: A3 Report</h1>
        <p>Hi Students,</p>
        <p>I hope this message finds you well. As discussed in our last meeting, I have attached the latest version of the <strong>A3 Report</strong> for your review. This report covers the progress made in the current assignment and contains several key sections that require your feedback:</p>
        <ul>
          <li><strong>Executive Summary:</strong> A brief overview of the project and key findings.</li>
          <li><strong>Data Analysis:</strong> In-depth analysis with charts and graphs to support conclusions.</li>
          <li><strong>Recommendations:</strong> Actionable insights based on the data gathered.</li>
        </ul>
        <p>Could you please take some time to review the attached document and provide your feedback by <em>Wednesday, 5 PM</em>? If there are any areas that need clarification or revision, feel free to <a href='mailto:david.smith@auckland.ac.nz'>contact me directly</a> or schedule a quick call using <a href='http://example.com/schedule-meeting' style='color: blue;'>this link</a>.</p>
        <h2>Next Steps:</h2>
        <ol>
          <li>Review the attached report and provide feedback</li>
          <li>Discuss potential updates during our next meeting</li>
          <li>Finalize the report for submission by Friday</li>
        </ol>
        <p>Thank you for your prompt attention to this. Your insights will be invaluable in shaping the final draft of the report.</p>
        <p>Looking forward to hearing your thoughts!</p>
        <p>Best regards,</p>
        <p><em>David Smith</em><br>Lecturer, University of Auckland</p>
      </div>`
    },
    "12" : {
      "id": "12",
      "body": `<div style='font-family: Helvetica, sans-serif;'>
        <h1 style='color: #2c3e50;'>📅 Team Meeting Rescheduled</h1>
        <p>Hi Team,</p>
        <p>Just a quick update to let you know that our team meeting has been rescheduled to <strong>3 PM today</strong>. Please make sure to mark your calendars!</p>
        <h2>Meeting Details:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 60%;'>
          <tr>
            <td><strong>Old Time</strong></td>
            <td>2 PM</td>
          </tr>
          <tr>
            <td><strong>New Time</strong></td>
            <td>3 PM</td>
          </tr>
        </table>
        <h3>Agenda:</h3>
        <ul>
          <li>Project Status Updates</li>
          <li>Q3 Targets and Deliverables</li>
          <li>Customer Feedback Analysis</li>
        </ul>
        <p>Looking forward to seeing everyone there!</p>
        <p>Best regards,</p>
        <p><strong>James W.</strong><br>Startup Innovations</p>
      </div>`
    },
    "13" : {
      "id": "13",
      "body": `<div style='font-family: Tahoma, sans-serif;'>
        <h1 style='color: #e67e22;'>💵 Your eBay Invoice for This Month</h1>
        <p>Dear Customer,</p>
        <p>Your latest eBay invoice is now available. To avoid any service interruptions, please download and review your invoice promptly.</p>
        <h2>Invoice Summary:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 80%;'>
          <tr>
            <th>Invoice Date</th>
            <th>Total Amount</th>
            <th>Due Date</th>
          </tr>
          <tr>
            <td>Sep 16, 2024</td>
            <td>$120.50</td>
            <td>Sep 30, 2024</td>
          </tr>
        </table>
        <h3>Download Your Invoice:</h3>
        <p><a href='http://example.com/download-invoice' style='color: blue;'>Click here to download your invoice</a> and ensure continued service.</p>
        <p>If you have any questions or need assistance, feel free to contact <a href='mailto:billing@ebay.com'>billing@ebay.com</a>.</p>
        <p>Thank you for your prompt attention to this matter.</p>
        <p><strong>eBay Billing Team</strong></p>
      </div>`
    },
    "14" : {
      "id": "14",
      "body": `<div style='font-family: Courier, monospace;'>
        <h1 style='color: #333;'>Your Dependabot Alerts for This Week</h1>
        <p>Hi,</p>
        <p>Here are the latest security updates and alerts for your GitHub repositories from the week of <strong>September 10 - 17</strong>:</p>
        <ul>
          <li><a href='http://example.com/dependabot-alert-1' style='color: blue;'>Update needed for repository XYZ</a> - Security vulnerability in dependency ABC</li>
          <li><a href='http://example.com/dependabot-alert-2' style='color: blue;'>Critical patch available for repository DEF</a> - Potential security risk in package GHI</li>
        </ul>
        <p>Please address these issues promptly to ensure the security of your repositories. You can review all alerts in your <a href='http://github.com/dependabot' style='color: green;'>Dependabot dashboard</a>.</p>
        <p>Thanks for keeping your code secure!</p>
        <p><strong>GitHub Security Team</strong></p>
      </div>`
    },
    "15" : {
      "id": "15",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: #e50914;'>🎉 We Miss You! Come Back to Netflix</h1>
        <p>Dear Customer,</p>
        <p>It’s been a while since we last saw you on Netflix, and we’d love to have you back! For a limited time, renew your subscription and get <strong>2 months for just $5.99</strong>.</p>
        <h2>Offer Details:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 80%;'>
          <tr>
            <th>Offer</th>
            <th>Price</th>
            <th>Duration</th>
          </tr>
          <tr>
            <td>Renew Subscription</td>
            <td>$5.99</td>
            <td>2 months</td>
          </tr>
        </table>
        <p><a href='http://example.com/renew-now' style='color: blue;'>Click here to renew now</a> and start watching your favorite shows again!</p>
        <p>Hurry, this offer is available for a limited time only.</p>
        <p>Best regards,</p>
        <p><strong>Netflix Support Team</strong></p>
      </div>`
    },
    "16" : {
      "id": "16",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: #e74c3c;'>⚠️ Action Required: Apple ID Deactivation</h1>
        <p>Dear Customer,</p>
        <p>Your Apple ID <strong>is at risk of being permanently disabled</strong> due to inactivity or suspicious activity.</p>
        <h2>Steps to Reactivate:</h2>
        <ol>
          <li>Go to <a href='http://example.com/reactivate' style='color: blue;'>this link</a> to begin the reactivation process.</li>
          <li>Log in with your Apple ID credentials.</li>
          <li>Verify your account using two-factor authentication.</li>
        </ol>
        <h3>Why This Happened:</h3>
        <ul>
          <li>Inactivity for more than 6 months.</li>
          <li>Suspicious login attempts.</li>
        </ul>
        <p>Failure to reactivate within 48 hours will result in permanent deactivation. Don’t wait—secure your account now!</p>
        <p>Best regards,</p>
        <p><strong>iTunes Security Team</strong></p>
      </div>`
    },
    "17" : {
      "id": "17",
      "body": `<div style='font-family: Georgia, serif;'>
        <h1 style='color: navy;'>Meeting Request: Property Discussion</h1>
        <p>Hi,</p>
        <p>I hope you're doing well. I'd like to schedule a time to further discuss the <strong>property options</strong> we reviewed last week. Could you let me know your availability this week for a quick meeting?</p>
        <p>You can <a href='http://example.com/schedule-meeting' style='color: blue;'>schedule a time</a> that works best for you, or feel free to propose another time if that’s more convenient.</p>
        <p>Looking forward to hearing from you!</p>
        <p>Best regards,</p>
        <p><strong>John Smith</strong><br>Real Estate Agent, Real Estate Corp</p>
      </div>`
    },
    "18" : {
      "id": "18",
      "body": `<div style='font-family: Tahoma, sans-serif;'>
        <h1 style='color: #e74c3c;'>🔐 Unusual Login Attempt Detected</h1>
        <p>Dear Customer,</p>
        <p>We’ve detected an unusual login attempt on your Google account from a new device.</p>
        <h2>Login Details:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 80%;'>
          <tr>
            <th>Device</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>Unknown Laptop</td>
            <td>New York, USA</td>
            <td>Sep 16, 2024 - 3:45 PM</td>
          </tr>
        </table>
        <p>If this wasn’t you, please <a href='http://example.com/secure-account' style='color: blue;'>secure your account</a> immediately by changing your password and enabling two-factor authentication.</p>
        <p>Thank you for keeping your account safe!</p>
        <p><strong>Google Security Team</strong></p>
      </div>`
    },
    "19" : {
      "id": "19",
      "body": `<div style='font-family: Georgia, serif;'>
        <h1 style='color: #34495e;'>🎨 Renew Your Adobe Creative Cloud Subscription</h1>
        <p>Dear Customer,</p>
        <p>Your subscription to Adobe Creative Cloud is about to expire. Don’t lose access to your favorite tools like Photoshop, Illustrator, and Premiere Pro.</p>
        <h2>Subscription Details:</h2>
        <table border='1' cellpadding='10' style='border-collapse: collapse; width: 70%;'>
          <tr>
            <th>Subscription Plan</th>
            <th>Expiration Date</th>
          </tr>
          <tr>
            <td>All Apps</td>
            <td>Sep 18, 2024</td>
          </tr>
        </table>
        <h3>Why Renew Now?</h3>
        <ul>
          <li>Access the latest updates and features.</li>
          <li>Seamless cloud storage for all your projects.</li>
          <li>Exclusive Adobe stock resources and templates.</li>
        </ul>
        <p><a href='http://example.com/renew-now' style='color: blue;'>Click here to renew</a> your subscription and continue your creative journey without interruption.</p>
        <p>Best regards,</p>
        <p><strong>Adobe Support</strong></p>
      </div>`
    },
    "20" : {
      "id": "20",
      "body": `<div style='font-family: Arial, sans-serif;'>
        <h1 style='color: #f39c12;'>🎁 Congratulations! You’ve Won a $5000 Prize!</h1>
        <p>Dear Customer,</p>
        <p>We’re excited to let you know that you’ve been selected to receive an exclusive $5000 prize!</p>
        <h2>How to Claim Your Prize:</h2>
        <ol>
          <li>Click <a href='http://example.com/claim-prize' style='color: blue;'>this link</a> to verify your identity.</li>
          <li>Follow the instructions to claim your prize.</li>
          <li>Enjoy your winnings!</li>
        </ol>
        <p>This offer is valid for a limited time, so act fast!</p>
        <p>Best regards,</p>
        <p><strong>Luxury Lifestyle Giveaway Team</strong></p>
      </div>`
    }   
};

const emailLists = {
    "1": {
      "list": [
        {
          "id": "1",
          "from": { "email": "security@anz.com", "name": "ANZ Security" },
          "date": 1726617664623,
          "subject": "Urgent: Your Account Has Been Compromised!",
          "short_description": "Your account has been locked due to suspicious activity. Please verify immediately."
        },
        {
          "id": "2",
          "from": { "email": "ceo@microsoftsupportupdate.com", "name": "Microsoft CEO" },
          "date": 1726607664623,
          "subject": "Congratulations! You've won a free laptop!",
          "short_description": "Claim your new Microsoft Surface Pro by clicking here now."
        },
        {
          "id": "3",
          "from": { "email": "jobalerts-noreply@linkedin.com", "name": "LinkedIn Job Alerts" },
          "date": 1726597664623,
          "subject": "Exciting Job Opportunity for You!",
          "short_description": "“software engineer”: Cloud Support Engineer (Developer and Mobile Services) and more"
        },
        {
          "id": "4",
          "from": { "email": "marketing@fashionbrand.com", "name": "Fashion Brand" },
          "date": 1726597664623,
          "subject": "Limited Time Offer: 50% off All Shoes!",
          "short_description": "Don't miss out on our biggest sale of the season!"
        },
        {
          "id": "5",
          "from": { "email": "admin@fb.com", "name": "Facebook Admin" },
          "date": 1726587664623,
          "subject": "Account Verification Required",
          "short_description": "Your account may be disabled soon. Verify your information to keep it active."
        },
        {
          "id": "6",
          "from": { "email": "john.doe@auckland.ac.nz", "name": "John Doe" },
          "date": 1726577664623,
          "subject": "Reminder: Assignment Due Tomorrow",
          "short_description": "Just a quick reminder, your assignment is due by midnight tomorrow."
        },
        {
          "id": "7",
          "from": { "email": "rewards@visa-platinum.com", "name": "Visa Rewards Team" },
          "date": 1726477664623,
          "subject": "You've Earned $200 in Rewards Points!",
          "short_description": "Claim your points now before they expire!"
        },
        {
          "id": "8",
          "from": { "email": "mail@c.2degreesmobile.co.nz", "name": "2degrees" },
          "date": 1726477664623,
          "subject": "iPhone 16 Pro. Hello, Apple Intelligence.",
          "short_description": "Save $500 when you pre-order the iPhone 16 Pro Interest Free and upgrade to a $65 Carryover Pay Monthly plan or above."
        },
        {
          "id": "9",
          "from": { "email": "support@paypal-alert.com", "name": "PayPal Support" },
          "date": 1726477664623,
          "subject": "Suspicious Activity Detected on Your PayPal Account",
          "short_description": "Click here to secure your account before it's too late."
        },
        {
          "id": "10",
          "from": { "email": "jared.doe@aucklanduni.ac.nz", "name": "Jared Doe" },
          "date": 1726477664623,
          "subject": "Grade Report for Softeng 702",
          "short_description": "Hi! Please find attached your grades for the last test."
        },
      ],
      "total": 20
    },    
    "2": {
        "list": [
          {
            "id": "11",
            "from": { "email": "david.smith@auckland.ac.nz", "name": "David Smith" },
            "date": 1726477664623,
            "subject": "A3 Report - Urgent Review Needed",
            "short_description": "Please review the attached assignment and provide feedback."
          },
          {
            "id": "12",
            "from": { "email": "james.w@startupinnovations.com", "name": "James W." },
            "date": 1726477664623,
            "subject": "Team Meeting Rescheduled to 3 PM",
            "short_description": "Hi all, please note that the team meeting has been rescheduled."
          },
          {
            "id": "13",
            "from": { "email": "admin@ebay-billing.com", "name": "eBay Billing" },
            "date": 1726377664623,
            "subject": "Your eBay Invoice is Ready",
            "short_description": "Download your eBay invoice now to avoid service interruptions."
          },
          {
            "id": "14",
            "from": { "email": "noreply@github.com", "name": "GitHub" },
            "date": 1726377664623,
            "subject": "[GitHub] Your Dependabot alerts for the week of Sep 10 - Sep 17",
            "short_description": "Your repository security updates from the week of Sep 10 - Sep 17"
          },
          {
            "id": "15",
            "from": { "email": "services@netflix.com", "name": "Netflix Support" },
            "date": 1726377664623,
            "subject": "We Miss You! Come Back to Netflix for Just $5.99",
            "short_description": "Renew your Netflix subscription now and get 2 months for $5.99!"
          },
          {
            "id": "16",
            "from": { "email": "security@itune-security.com", "name": "iTunes Security" },
            "date": 1726327664623,
            "subject": "Your Apple ID is about to be disabled!",
            "short_description": "Reactivate your Apple ID now to avoid permanent deactivation."
          },
          {
            "id": "17",
            "from": { "email": "john.smith@realestatecorp.com", "name": "John Smith" },
            "date": 1726277664623,
            "subject": "Meeting Request: Property Discussion",
            "short_description": "I'd like to schedule a time to discuss the property options we reviewed."
          },
          {
            "id": "18",
            "from": { "email": "admin@googlesecurity.com", "name": "Google Security Team" },
            "date": 1726277664623,
            "subject": "Unusual Login Attempt Detected",
            "short_description": "Someone tried to access your account from an unknown device. Secure your account now."
          },
          {
            "id": "19",
            "from": { "email": "support@adobe.com", "name": "Adobe Support" },
            "date": 1726277664623,
            "subject": "Your Adobe Creative Cloud Subscription Is About to Expire",
            "short_description": "Renew now to keep access to all your favorite apps."
          },
          {
            "id": "20",
            "from": { "email": "win@luxurylifestylegiveaway.com", "name": "Luxury Lifestyle Giveaway" },
            "date": 1726277664623,
            "subject": "You’ve Been Selected for a $5000 Prize!",
            "short_description": "Claim your exclusive prize by following this link."
          }
        ],
        "total": 20
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
