const express = require('express');
const app = express();
const path = require('path');

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic Content Object
const content = {
    hero: {
        title: "The <span class=\"text-serif\">Black Card</span> for <span class=\"text-gradient\">VU Elite</span>",
        subtitle: "Membership has its privileges. Join the most exclusive financial circle at Victoria University.",
        ctaPrimary: "Request Invitation",
        ctaSecondary: "Explore Privileges",
        scrollText: "Discover"
    },
    features: {
        title: "Unmatched <span class=\"text-gradient\">Privileges</span>",
        subtitle: "Crafted for the ambitious. Designed for the future leaders.",
        cards: [
            { icon: "🏛️", title: "Legacy Access", desc: "Exclusive entry to alumni networking events and heritage libraries." },
            { icon: "💎", title: "Zero Fees", desc: "No annual fees. No transaction fees. Pure value preservation." },
            { icon: "🗝️", title: "Instant Status", desc: "Link your student ID. Approval is immediate for qualified candidates." }
        ]
    },
    globalAccess: {
        title: "Global <span class=\"text-gradient\">Recognition</span>",
        subtitle: "Your VU Card is accepted at premier institutions worldwide.",
        stats: [
            { number: "150+", label: "Countries" },
            { number: "500+", label: "Partner Universities" }
        ]
    },
    testimonials: {
        title: "Voices of <span class=\"text-gradient\">Excellence</span>",
        list: [
            { quote: "The VU Card isn't just a financial tool; it's a passport to a global network of opportunities.", name: "Sarah Jenkins", info: "Class of 2023, Law" },
            { quote: "Exclusive access to the heritage library has been invaluable for my research. A true privilege.", name: "David Chen", info: "Class of 2024, Economics" },
            { quote: "Seamless transactions during my semester abroad. The global recognition is real.", name: "Priya Patel", info: "Class of 2025, International Relations" }
        ]
    },
    faq: {
        title: "Membership <span class=\"text-gradient\">Inquiries</span>",
        items: [
            { question: "Who is eligible for the VU Black Card?", answer: "Eligibility is reserved for currently enrolled Victoria University students with good academic standing. Final approval is subject to verification." },
            { question: "Are there really no fees?", answer: "Yes. We believe in value preservation. There are no annual fees, no foreign transaction fees, and no late payment fees for members." },
            { question: "How do I access the alumni network?", answer: "Upon activation of your card, you will receive credentials for the exclusive alumni portal and invitations to quarterly networking galas." }
        ]
    }
};

// Routes
app.get('/', (req, res) => {
    res.render('index', { content });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
