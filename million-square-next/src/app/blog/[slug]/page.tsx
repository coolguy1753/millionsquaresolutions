'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import type { Metadata } from 'next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts: Record<string, {
  title: string;
  description: string;
  tag: string;
  readTime: string;
  date: string;
  content: string;
  faqs: { question: string; answer: string }[];
}> = {
  "what-is-customer-success-outsourcing": {
    title: "What is Customer Success Outsourcing?",
    description: "A complete guide to CS outsourcing — what it is, how it works, and why global SaaS companies are choosing it over in-house CS teams.",
    tag: "CS Outsourcing",
    readTime: "8 min read",
    date: "May 28, 2026",
    faqs: [
      { question: "What is Customer Success Outsourcing?", answer: "Customer Success outsourcing is the practice of hiring a third-party provider to manage your customer success operations, including dedicated CSMs, onboarding, retention, and expansion activities." },
      { question: "Why do SaaS companies outsource Customer Success?", answer: "SaaS companies outsource CS to access experienced CSMs immediately, reduce hiring costs, improve NRR, and scale operations without adding headcount." },
      { question: "How much does Customer Success outsourcing cost?", answer: "CS outsourcing costs vary by provider and scope, but is typically significantly less than hiring, training, and retaining an in-house CS team including salary, benefits, and tools." },
      { question: "What is a good CSM to account ratio?", answer: "A good CSM to account ratio for mid-market SaaS is 30-35 accounts per CSM. The industry average of 50-80 accounts leads to reactive CS and higher churn." },
    ],
    content: `Customer Success outsourcing is the practice of hiring a third-party provider to manage your customer success operations — including dedicated Customer Success Managers, onboarding, retention, and expansion activities.

## Why SaaS Companies Outsource Customer Success

Building an in-house CS team is expensive, slow, and risky. The average CSM salary in the US is $85,000-$120,000 per year — before benefits, tools, management overhead, and training costs.

Customer Success outsourcing gives SaaS companies access to experienced CSMs immediately, without the hiring risk or fixed overhead.

## What Does a CS Outsourcing Provider Do?

A quality CS outsourcing provider like Million Square Solutions provides dedicated CSMs assigned to your accounts, structured onboarding programs for new customers, regular QBRs and EBRs with key stakeholders, churn risk identification and intervention, expansion and upsell opportunity management, and CRM management and health scoring.

## Who Should Consider CS Outsourcing?

CS outsourcing works best for SaaS companies that are scaling faster than they can hire, need experienced CS coverage across multiple timezones, want to reduce CAC and improve NRR without adding headcount, or are entering new markets across the US, UK, Canada, UAE, Australia, and New Zealand.

## How to Choose a CS Outsourcing Partner

Look for providers with proven SaaS experience, transparent pricing, and a low CSM-to-account ratio. At Million Square Solutions, our CSMs manage 30-35 accounts compared to the industry average of 50-80. This means your customers get more attention, faster responses, and deeper relationships.`,
  },
  "customer-success-as-a-service": {
    title: "Customer Success as a Service — Complete Guide",
    description: "Everything you need to know about CSaaS — the model, benefits, pricing, and how to choose the right provider for your SaaS business.",
    tag: "CSaaS",
    readTime: "10 min read",
    date: "May 28, 2026",
    faqs: [
      { question: "What is Customer Success as a Service (CSaaS)?", answer: "CSaaS is a managed service model where a specialized provider delivers end-to-end customer success operations for your SaaS business on a subscription basis." },
      { question: "What is the difference between CSaaS and traditional CS outsourcing?", answer: "Traditional outsourcing often means hiring agents to handle tickets. CSaaS means a strategic partner who owns your retention outcomes and manages accounts proactively." },
      { question: "What does a CSaaS provider include?", answer: "A CSaaS engagement includes dedicated CSMs, AI-powered health scoring, structured playbooks for onboarding and renewals, CRM architecture, and regular NRR reporting." },
      { question: "Is Customer Success as a Service right for my SaaS business?", answer: "CSaaS works best for SaaS companies with 50+ accounts struggling with churn, renewal management, or expansion revenue who want expert CS without in-house hiring." },
    ],
    content: `Customer Success as a Service (CSaaS) is a managed service model where a specialized provider delivers end-to-end customer success operations for your SaaS business on a subscription basis.

## CSaaS vs Traditional CS Outsourcing

Traditional outsourcing often means body-shopping — hiring cheap agents to handle tickets. CSaaS is fundamentally different. It means a strategic partner who owns your retention outcomes, manages your accounts proactively, and integrates with your product and revenue teams.

## The CSaaS Model Explained

A CSaaS engagement typically includes dedicated CSMs with SaaS domain expertise, AI-powered health scoring and churn prediction, structured playbooks for onboarding and renewals, CRM architecture and workflow design, and regular reporting on NRR, churn rate, and expansion revenue.

## Benefits of Customer Success as a Service

### Immediate Expertise
No ramp time. Our CSMs have managed SaaS portfolios across HR Tech, FinTech, MarTech, and more.

### Lower Cost Than In-House
A fully managed CSM team costs significantly less than hiring, training, and retaining in-house staff.

### AI-Native Operations
Every CSM at Million Square Solutions is equipped with GenAI tools, reducing QBR prep time by 50% and improving churn prediction accuracy.

### Global Coverage
We serve SaaS companies across the US, UK, Canada, UAE, Australia and New Zealand with timezone-appropriate coverage built in.`,
  },
  "how-to-reduce-saas-churn": {
    title: "How to Reduce SaaS Churn in 90 Days",
    description: "A proven 90-day framework to identify churn risk, engage at-risk accounts, and build retention systems that protect your recurring revenue.",
    tag: "Churn Reduction",
    readTime: "9 min read",
    date: "May 28, 2026",
    faqs: [
      { question: "How do you reduce SaaS churn?", answer: "Reduce SaaS churn by building health scores to identify at-risk accounts, assigning dedicated CSMs, fixing root cause complaints, and implementing automated health monitoring." },
      { question: "What is a good SaaS churn rate?", answer: "A good annual SaaS churn rate is below 5%. Monthly churn above 2% is a red flag. Best-in-class SaaS companies maintain annual churn below 2%." },
      { question: "How long does it take to reduce SaaS churn?", answer: "With a structured framework, you can see measurable churn reduction within 90 days. Sustainable improvement typically takes 3-6 months of consistent execution." },
      { question: "What causes SaaS churn?", answer: "Common causes include poor onboarding, lack of product adoption, unresolved support issues, no strategic CS engagement, competitive displacement, and pricing concerns." },
    ],
    content: `Churn is the single biggest threat to SaaS growth. Even a 5% monthly churn rate means you are replacing your entire customer base every 20 months. Here is a proven 90-day framework to reduce churn and protect your recurring revenue.

## Days 1-30: Audit and Identify

The first 30 days are about understanding your current churn landscape.

### Build a Health Score
Create a simple health score using product usage, support ticket volume, NPS, and engagement data. Flag any account scoring below 60 as at-risk.

### Segment Your Accounts
Separate your accounts into three tiers: healthy, neutral, and at-risk. Focus your CS resources on at-risk accounts first.

## Days 31-60: Engage and Intervene

### Dedicated Outreach to At-Risk Accounts
Assign a senior CSM to every at-risk account. Schedule an emergency QBR to understand their current challenges and demonstrate value.

## Days 61-90: Build Systems

### Implement Automated Health Monitoring
Set up alerts in your CRM for accounts that drop below your health score threshold.

### Standardize QBRs and EBRs
Every account above a certain ARR should have a structured quarterly or executive business review.`,
  },
  "csm-account-ratio": {
    title: "CSM to Account Ratio — What is Ideal for SaaS?",
    description: "The industry runs CSMs at 50-80 accounts. We explain why 30-35 is the sweet spot and how the right ratio directly impacts your NRR.",
    tag: "CS Operations",
    readTime: "6 min read",
    date: "May 28, 2026",
    faqs: [
      { question: "What is the ideal CSM to account ratio?", answer: "The ideal CSM to account ratio for mid-market SaaS is 30-35 accounts per CSM. High ACV enterprise works best at 10-20 per CSM. SMB can support 50-100 accounts per CSM." },
      { question: "How many accounts should a CSM manage?", answer: "A CSM should manage 30-35 accounts in a mid-market motion. The industry average of 50-80 accounts leads to reactive CS and higher churn." },
      { question: "Why does the CSM to account ratio matter?", answer: "The ratio directly impacts how much time each customer receives. Lower ratios mean more proactive outreach, stronger relationships, and higher expansion revenue." },
      { question: "How does account ratio affect NRR?", answer: "Lower CSM to account ratios directly improve NRR by enabling more proactive engagement and better expansion opportunity execution." },
    ],
    content: `The CSM-to-account ratio is one of the most important and most overlooked variables in Customer Success. Get it wrong, and your CSMs are overwhelmed, your customers are neglected, and your churn rate climbs.

## What is the Industry Average?

Most SaaS companies run their CSMs at 50-80 accounts. Some high-volume, low-touch models push this to 100+ accounts per CSM. The result is reactive CS where CSMs spend their time firefighting rather than building relationships or preventing churn.

## Why 30-35 Accounts is the Sweet Spot

At Million Square Solutions, our CSMs manage 30-35 accounts. At 80 accounts, a CSM has roughly 30 minutes per account per week. At 35 accounts, they have over an hour.

### Better Churn Detection
When CSMs have fewer accounts, they notice early warning signs faster — a drop in login frequency, a support ticket spike, a change in champion contact.

### Higher Expansion Revenue
Expansion requires trust. Trust requires time. Lower ratios mean CSMs can identify and execute upsell opportunities that higher-ratio models consistently miss.`,
  },
  "nrr-vs-grr-guide": {
    title: "NRR vs GRR — Complete Guide for SaaS",
    description: "Net Revenue Retention vs Gross Revenue Retention — what they mean, how to calculate them, and why NRR is the most important metric in SaaS.",
    tag: "SaaS Metrics",
    readTime: "7 min read",
    date: "May 28, 2026",
    faqs: [
      { question: "What is Net Revenue Retention (NRR)?", answer: "NRR measures the percentage of recurring revenue retained from existing customers including expansion revenue. NRR above 100% means existing customers generate more revenue than you lose to churn." },
      { question: "What is the difference between NRR and GRR?", answer: "GRR measures retained revenue excluding expansion and can never exceed 100%. NRR includes expansion revenue from upsells and can exceed 100%." },
      { question: "What is a good NRR for SaaS?", answer: "Above 120% NRR is exceptional. 100-120% is healthy. 85-100% needs improvement. Below 85% requires immediate CS intervention." },
      { question: "How do you improve Net Revenue Retention?", answer: "Improve NRR by reducing churn through proactive health monitoring, increasing expansion revenue through structured upsell playbooks, and running regular EBRs with dedicated CSMs." },
    ],
    content: `Net Revenue Retention (NRR) and Gross Revenue Retention (GRR) are the two most important metrics in SaaS. Understanding the difference between them and knowing which to optimize is critical for sustainable growth.

## What is Gross Revenue Retention (GRR)?

GRR measures the percentage of recurring revenue retained from existing customers, excluding any expansion revenue. GRR can never exceed 100%. A GRR of 85% means you retained 85% of your existing revenue, losing 15% to churn and downgrades.

## What is Net Revenue Retention (NRR)?

NRR measures the percentage of recurring revenue retained from existing customers, including expansion revenue from upsells and cross-sells. NRR can exceed 100%.

## Why NRR is the Most Important SaaS Metric

A SaaS company with 120% NRR grows its existing revenue base by 20% per year without acquiring a single new customer.

## What is a Good NRR for SaaS?

Above 120% is exceptional. Between 100-120% is healthy. Between 85-100% needs improvement. Below 85% is critical and requires immediate CS intervention.`,
  },
};

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-morphism rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/30">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
              <h3 className="text-white font-semibold pr-4">{faq.question}</h3>
              <span className={"text-primary transition-transform duration-300 flex-shrink-0 text-2xl font-light " + (openIndex === i ? "rotate-45" : "rotate-0")}>+</span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6 border-t border-white/5">
                <p className="text-muted-foreground text-sm leading-relaxed pt-4">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="text-primary text-sm hover:underline">Back to Blog</Link>
          </div>
          <div className="text-xs text-primary uppercase tracking-widest font-bold mb-3">{post.tag}</div>
          <h1 className="text-4xl md:text-5xl font-bold futuristic-heading mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-muted-foreground text-sm mb-2">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">By <span className="text-white font-semibold">Founder</span> — Million Square Solutions</p>
          <div className="border-t border-white/10 my-8" />
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{para.replace("## ", "")}</h2>;
              }
              if (para.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-bold text-primary mt-6 mb-3">{para.replace("### ", "")}</h3>;
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para.trim()}</p>;
            })}
          </div>
          <div className="border-t border-white/10 my-12" />
          <FAQSection faqs={post.faqs} />
          <div className="glass-morphism p-8 rounded-2xl border border-primary/20 text-center">
            <h2 className="text-2xl font-bold futuristic-heading mb-3">Ready to improve your Customer Success?</h2>
            <p className="text-muted-foreground mb-6">Book a free 30-minute strategy call with Million Square Solutions.</p>
            <a href="/#contact" className="btn-futuristic px-8 py-3 font-bold inline-block">Book a Free Strategy Call</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}