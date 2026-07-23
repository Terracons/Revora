"""
Static site copy for the Revora Agency landing page.

Kept as plain Python data (instead of hardcoding it into the frontend) so the
content can later move to a CMS or database without changing the API shape
the frontend consumes.
"""

SITE_CONTENT: dict = {
    "hero": {
        "badge": "TRUSTED DIGITAL GROWTH PARTNER",
        "heading": "Helping Businesses Grow Beyond Their Limits.",
        "subheading": (
            "Revora helps ambitious businesses generate more sales, attract "
            "qualified customers, increase revenue, and build a stronger "
            "online presence through strategic design and digital marketing."
        ),
        "primary_cta": "Book a Free Discovery Call",
        "secondary_cta": "Explore Our Service",
    },
    "stats_heading": "Turning Digital Strategy Into Measurable Business Growth.",
    "stats_subheading": (
        "Every project we take on is designed with one goal in mind: helping "
        "businesses attract more customers, generate more revenue, and build "
        "a stronger online presence through strategic design and digital "
        "marketing."
    ),
    "stats": [
        {
            "value": "300%",
            "label": "AVERAGE CLIENT GROWTH",
            "description": (
                "Helping businesses increase visibility, leads, and revenue "
                "through strategic digital solutions."
            ),
        },
        {
            "value": "$50M+",
            "label": "REVENUE INFLUENCED",
            "description": (
                "Driving measurable business growth through websites, "
                "branding, paid advertising, and marketing campaigns."
            ),
        },
        {
            "value": "100+",
            "label": "PROJECTS DELIVERED",
            "description": (
                "Websites, branding, and marketing campaigns built to "
                "perform, generate leads, and drive measurable business "
                "growth."
            ),
        },
        {
            "value": "98%",
            "label": "CLIENT SATISFACTION",
            "description": (
                "Trusted by businesses that value quality, transparency, "
                "and long-term measurable outcomes."
            ),
        },
    ],
    "problem_heading": "Why Most Businesses Struggle to Grow",
    "problem_subheading": (
        "Every growing business is built on a strong digital foundation. "
        "Without clear branding, a high-performing website, and a strategy "
        "that consistently attracts and converts customers, growth becomes "
        "difficult to sustain."
    ),
    "problems": [
        {
            "index": "01",
            "title": "Weak Brand Identity",
            "description": (
                "If your business looks like everyone else's, it's difficult "
                "to build recognition, trust, or a lasting impression with "
                "potential customers."
            ),
        },
        {
            "index": "02",
            "title": "Low-Converting Website",
            "description": (
                "A beautiful website isn't enough. If it doesn't guide "
                "visitors to take action, you're losing valuable leads and "
                "potential customers."
            ),
        },
        {
            "index": "03",
            "title": "Poor Online Visibility",
            "description": (
                "Even exceptional businesses struggle to grow when potential "
                "customers can't easily find them online."
            ),
        },
        {
            "index": "04",
            "title": "Inconsistent Marketing",
            "description": (
                "Irregular marketing efforts make it difficult to stay "
                "visible, build trust, and remain top of mind with your "
                "audience."
            ),
        },
        {
            "index": "05",
            "title": "No Clear Growth Strategy",
            "description": (
                "Without a defined strategy and measurable goals, business "
                "growth becomes unpredictable and difficult to sustain."
            ),
        },
        {
            "index": "06",
            "title": "Missed Revenue Opportunities",
            "description": (
                "Small gaps in the customer journey can reduce conversions, "
                "leading to missed opportunities and lost revenue over time."
            ),
        },
    ],
    "partner_heading": "Growth Starts with the Right Partner.",
    "partner_subheading": (
        "Every successful business is powered by a strategy that creates "
        "visibility, builds trust, and turns visitors into loyal customers."
    ),
    "partner_benefits": [
        {
            "title": "Strategy-First Approach",
            "description": (
                "Every decision is guided by your business goals, audience, "
                "and long-term vision—not short-term trends."
            ),
        },
        {
            "title": "Results That Matter",
            "description": (
                "We focus on measurable outcomes that increase visibility, "
                "generate qualified leads, and drive sustainable business "
                "growth."
            ),
        },
        {
            "title": "End-to-End Partnership",
            "description": (
                "From strategy and execution to continuous optimization, "
                "we're with you every step of your digital growth journey."
            ),
        },
    ],
    "services_heading": "Everything That Your Business Needs To Grow",
    "services_subheading": (
        "From strategy and branding to websites and marketing, our solutions "
        "are designed to help businesses attract the right audience, build "
        "trust, and achieve measurable growth."
    ),
    "services": [
        {
            "icon": "sparkles",
            "title": "Brand Strategy & Identity",
            "description": (
                "Build a memorable brand that earns trust, communicates "
                "value, and stands out in a competitive market."
            ),
        },
        {
            "icon": "layout",
            "title": "High-Converting Websites",
            "description": (
                "Modern, responsive websites designed to engage visitors, "
                "generate leads, and support long-term business growth."
            ),
        },
        {
            "icon": "bar-chart",
            "title": "Social Media Growth",
            "description": (
                "Strategic content and consistent brand communication that "
                "keeps your business visible and connected with your "
                "audience."
            ),
        },
        {
            "icon": "megaphone",
            "title": "Paid Advertising",
            "description": (
                "Reach the right audience with targeted campaigns that "
                "drive qualified traffic, leads, and measurable returns."
            ),
        },
        {
            "icon": "search",
            "title": "Search Visibility (SEO)",
            "description": (
                "Improve your online presence and help potential customers "
                "discover your business when it matters most."
            ),
        },
        {
            "icon": "settings",
            "title": "Website Maintenance",
            "description": (
                "Keep your website secure, up to date, optimized, and "
                "performing at its best as your business grows."
            ),
        },
    ],
    "process_heading": "Our 4-Step Growth Framework.",
    "process_subheading": (
        "We don't guess. We follow a proven framework that moves from deep "
        "analysis to continuous growth."
    ),
    "process_steps": [
        {
            "step": "01",
            "title": "Discover",
            "description": (
                "We take the time to understand your business, audience, "
                "goals, and current digital presence before making a single "
                "recommendation."
            ),
        },
        {
            "step": "02",
            "title": "Strategy",
            "description": (
                "Every recommendation is backed by research, insight, and a "
                "clear roadmap designed to achieve measurable business "
                "outcomes."
            ),
        },
        {
            "step": "03",
            "title": "Execute",
            "description": (
                "We bring your vision to life through thoughtful design, "
                "seamless development, and strategic marketing with "
                "exceptional attention to detail."
            ),
        },
        {
            "step": "04",
            "title": "Optimize",
            "description": (
                "Launch is only the beginning. We analyze performance, "
                "refine strategies, and optimize every touchpoint to support "
                "long-term success."
            ),
        },
    ],
    "testimonials_heading": "Trusted by businesses focused on sustainable growth.",
    "testimonials_subheading": (
        "Real partnerships. Real results. Hear how businesses have "
        "transformed their online presence and accelerated growth with "
        "Revora."
    ),
    "testimonials": [
        {
            "name": "Sarah Johnson",
            "role": "Founder, Bloom Studio",
            "metric_value": "+185%",
            "metric_label": "CONVERSION",
            "quote": (
                "Revora helped us turn website visitors into paying "
                "customers. Their strategic approach to design and user "
                "experience made the biggest difference, and our conversion "
                "rate improved within weeks of launch."
            ),
            "image": "/images/testimonial-sarah.jpg",
        },
        {
            "name": "Michael Adams",
            "role": "CEO, Apex Consulting",
            "metric_value": "4.2x",
            "metric_label": "LEAD GROWTH",
            "quote": (
                "Working with Revora completely transformed our online "
                "presence. From our brand identity to our website, every "
                "detail was thoughtfully executed. We've seen a significant "
                "increase in customer inquiries and engagement since launch."
            ),
            "image": "/images/testimonial-michael.jpg",
        },
        {
            "name": "Dr. Emily Carter",
            "role": "Medical Director, NovaCare Clinic",
            "metric_value": "120%",
            "metric_label": "BOOKING RATE",
            "quote": (
                "Patients now find the information they need quickly and "
                "feel more confident booking with us. Since launching our "
                "new website, we've seen stronger engagement and a steady "
                "increase in online appointment requests."
            ),
            "image": "/images/testimonial-emily.jpg",
        },
    ],
    "faqs": [
        {
            "question": "What services does Revora offer?",
            "answer": (
                "We help businesses grow through strategic branding, website "
                "design and development, digital marketing, social media "
                "management, SEO, paid advertising, and ongoing website "
                "support. Every solution is tailored to your business "
                "goals."
            ),
        },
        {
            "question": "How long does a typical project take?",
            "answer": (
                "Most branding and website projects take 3-6 weeks "
                "depending on scope. Ongoing services like SEO, paid "
                "advertising, and social media management run continuously "
                "so we can compound results over time."
            ),
        },
        {
            "question": "Will I receive ongoing support after launch?",
            "answer": (
                "Yes. We offer ongoing website maintenance, marketing, and "
                "optimization plans so your digital presence keeps "
                "performing well after launch, not just on day one."
            ),
        },
        {
            "question": (
                "Can you improve my existing website instead of building a "
                "new one?"
            ),
            "answer": (
                "Absolutely. We can audit your current site and improve "
                "branding, conversion paths, performance, and SEO without "
                "necessarily starting from scratch."
            ),
        },
        {
            "question": "What makes Revora different from other agencies?",
            "answer": (
                "We combine strategy, design, and marketing under one roof "
                "and stay focused on measurable outcomes rather than "
                "vanity metrics, with a strategy-first approach to every "
                "engagement."
            ),
        },
        {
            "question": "How do you measure success?",
            "answer": (
                "Success is measured against the goals we agree on upfront: "
                "typically visibility, qualified leads, conversion rate, "
                "and revenue influenced, tracked with clear reporting."
            ),
        },
        {
            "question": "How do I get started?",
            "answer": (
                "Book a free discovery call using the button above. We'll "
                "discuss your business, goals, and current digital presence "
                "to see if we're the right fit."
            ),
        },
    ],
    "cta_heading": "Ready To Grow Your Business?",
    "cta_subheading": (
        "Every successful business starts with a conversation. Book a "
        "complimentary discovery call to discuss your goals and how Revora "
        "can help you achieve them."
    ),
}
