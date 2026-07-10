// Question bank. correctAnswer is the 0-based index into options.
// category is used only in the admin dashboard, never shown to the user.
const QUESTION_BANK = [
  // ---- The Piping Mart ----
  { id: 1, category: "The Piping Mart", question: "What is the main purpose of The Piping Mart?", options: ["Selling construction equipment", "Reaching global buyers and generating business enquiries", "Providing transportation services", "Manufacturing pipes"], correctAnswer: 1 },
  { id: 2, category: "The Piping Mart", question: "How many subscription plans are offered by The Piping Mart?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
  { id: 3, category: "The Piping Mart", question: "Which of the following is the entry-level subscription plan?", options: ["Gold", "Titanium", "Platinum", "Premium"], correctAnswer: 3 },
  { id: 4, category: "The Piping Mart", question: "What is the annual price of the Premium plan (USD)?", options: ["$2,500", "$3,000", "$5,000", "$9,000"], correctAnswer: 1 },
  { id: 5, category: "The Piping Mart", question: "How many products can be listed under the Premium plan?", options: ["200", "400", "600", "800"], correctAnswer: 1 },
  { id: 6, category: "The Piping Mart", question: "How many monthly enquiries are included in the Premium plan?", options: ["12", "24", "36", "72"], correctAnswer: 0 },
  { id: 7, category: "The Piping Mart", question: "What is the annual price of the Gold plan (USD)?", options: ["$5,000", "$7,500", "$9,000", "$12,000"], correctAnswer: 2 },
  { id: 8, category: "The Piping Mart", question: "How many products can be listed under the Gold plan?", options: ["400", "600", "800", "1200"], correctAnswer: 2 },
  { id: 9, category: "The Piping Mart", question: "How many monthly enquiries are included in the Gold plan?", options: ["24", "36", "48", "72"], correctAnswer: 1 },
  { id: 10, category: "The Piping Mart", question: "What is the annual price of the Titanium plan (USD)?", options: ["$12,000", "$15,000", "$18,000", "$20,000"], correctAnswer: 2 },
  { id: 11, category: "The Piping Mart", question: "How many monthly enquiries are included in the Titanium plan?", options: ["36", "48", "72", "96"], correctAnswer: 2 },
  { id: 12, category: "The Piping Mart", question: "What is the annual price of the Platinum plan (USD)?", options: ["$24,000", "$30,000", "$36,000", "$40,000"], correctAnswer: 2 },
  { id: 13, category: "The Piping Mart", question: "How many products can be listed under the Platinum plan?", options: ["800", "1000", "1200", "1500"], correctAnswer: 2 },
  { id: 14, category: "The Piping Mart", question: "How many monthly enquiries are included in the Platinum plan?", options: ["72", "96", "120", "140"], correctAnswer: 3 },
  { id: 15, category: "The Piping Mart", question: "According to the brochure, buyers are from more than how many countries?", options: ["10", "20", "30", "50"], correctAnswer: 2 },
  { id: 16, category: "The Piping Mart", question: "Which plan provides the highest number of monthly enquiries?", options: ["Premium", "Gold", "Titanium", "Platinum"], correctAnswer: 3 },
  { id: 17, category: "The Piping Mart", question: "What is required before payment according to the brochure?", options: ["50% Advance", "75% Advance", "100% Advance", "No Advance"], correctAnswer: 2 },
  { id: 18, category: "The Piping Mart", question: "What is the validity of the promotional offer?", options: ["Till 31st July", "Till 31st August", "Till 30th September", "Till 31st December"], correctAnswer: 1 },
  { id: 19, category: "The Piping Mart", question: "Which feature is highlighted as a key benefit of The Piping Mart?", options: ["Free shipping", "Showcase products to global buyers", "Free product manufacturing", "Warehouse management"], correctAnswer: 1 },
  { id: 20, category: "The Piping Mart", question: "Which plan allows listing up to 1200 products?", options: ["Premium", "Gold", "Titanium", "Platinum"], correctAnswer: 3 },
  // ---- Digital Marketing ----
  { id: 21, category: "Digital Marketing", question: "What is SEO?", options: ["Search Engine Optimization", "Social Engine Optimization", "Search Email Optimization", "System Engine Operation"], correctAnswer: 0 },
  { id: 22, category: "Digital Marketing", question: "What is SEM?", options: ["Search Engine Marketing", "Social Engine Marketing", "Search Email Marketing", "System Engine Management"], correctAnswer: 0 },
  { id: 23, category: "Digital Marketing", question: "What is SMM?", options: ["Search Media Marketing", "Social Media Marketing", "Sales Media Management", "Search Market Management"], correctAnswer: 1 },
  { id: 24, category: "Digital Marketing", question: "Is SEO an organic marketing strategy?", options: ["Yes", "No", "Only on social media", "Only for paid ads"], correctAnswer: 0 },
  { id: 25, category: "Digital Marketing", question: "Is SEM an organic marketing strategy?", options: ["Yes", "No, it mainly involves paid advertising", "Only for blogs", "Only for YouTube"], correctAnswer: 1 },
  { id: 26, category: "Digital Marketing", question: "What does PPC stand for?", options: ["Pay Per Click", "Pay Per Customer", "Post Per Click", "Price Per Campaign"], correctAnswer: 0 },
  { id: 27, category: "Digital Marketing", question: "Which of the following is an example of SEO?", options: ["Optimizing website content for search engines", "Running Google Ads", "Boosting Facebook posts", "Sending email newsletters"], correctAnswer: 0 },
  { id: 28, category: "Digital Marketing", question: "Which platform is most commonly associated with SEM?", options: ["Google Ads", "WhatsApp", "Telegram", "Zoom"], correctAnswer: 0 },
  { id: 29, category: "Digital Marketing", question: "Which marketing method focuses on improving unpaid search rankings?", options: ["PPC", "SEO", "SEM", "Display Ads"], correctAnswer: 1 },
  { id: 30, category: "Digital Marketing", question: "Which marketing strategy typically requires paying for each click on an advertisement?", options: ["SEO", "PPC", "Content Marketing", "Email Marketing"], correctAnswer: 1 }
];
