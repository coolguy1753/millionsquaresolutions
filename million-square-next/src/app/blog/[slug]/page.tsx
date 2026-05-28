import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts: Record<string, {
  title: string;
  description: string;
  tag: string;
  readTime: string;
  content: string;
}> = {
  "what-is-customer-success-outsourcing": {
    title: "What is Customer Success Outsourcing?",
    description: "A complete guide to CS outsourcing — what it is, how it works, and why global SaaS companies are choosing it over in-house CS teams.",
    tag: "CS Outsourcing",
    readTime: "8 min read",
    content: `Customer Success outsourcing is the practice of hiring a third-party provider to manage your customer success operations — including dedicated Customer Success Managers, onboarding, retention, and expansion activities.

## Why SaaS Companies Outsource Customer Success

Building an in-house CS team is expensive, slow, and risky. The average CSM salary in the US is $85,000-$120,000 per year — before benefits, tools, management overhead, and training costs.

Customer Success outsourcing gives SaaS companies access to experienced CSMs immediately, without the hiring risk or fixed overhead.

## What Does a CS Outsourcing Provider Do?

A quality CS outsourcing provider like Million Square Solutions provides dedicated CSMs assigned to your accounts, structured onboarding programs, regular QBRs and EBRs, churn risk identification, expansion management, and CRM health scoring.

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
Every CSM at Million Square Solutions is equipped with GenAI tools — reducing QBR prep time by 50% and improving churn prediction accuracy.

### Global Coverage
We serve SaaS companies across the US, UK, Canada, UAE, Australia and New Zealand with timezone-appropriate coverage built in.

## Is CSaaS Right for Your Business?

If your SaaS company has more than 50 accounts and is struggling with churn, renewal management, or expansion revenue — CSaaS is worth exploring. Book a free strategy call with Million Square Solutions to see how we can improve your NRR within 90 days.`,
  },
  "how-to-reduce-saas-churn": {
    title: "How to Reduce SaaS Churn in 90 Days",
    description: "A proven 90-day framework to identify churn risk, engage at-risk accounts, and build retention systems that protect your recurring revenue.",
    tag: "Churn Reduction",
    readTime: "9 min read",
    content: `Churn is the single biggest threat to SaaS growth. Even a 5% monthly churn rate means you are replacing your entire customer base every 20 months. Here is a proven 90-day framework to reduce churn and protect your recurring revenue.

## Days 1-30: Audit and Identify

The first 30 days are about understanding your current churn landscape.

### Build a Health Score
Create a simple health score using product usage, support ticket volume, NPS, and engagement data. Flag any account scoring below 60 as at-risk.

### Segment Your Accounts
Separate your accounts into three tiers: healthy, neutral, and at-risk. Focus your CS resources on at-risk accounts first.

### Identify the Root Cause
Talk to recently churned customers. Was it price, product gaps, lack of support, or competitive displacement? You cannot fix what you do not understand.

## Days 31-60: Engage and Intervene

### Dedicated Outreach to At-Risk Accounts
Assign a senior CSM to every at-risk account. Schedule an emergency QBR to understand their current challenges and demonstrate value.

### Fix the Most Common Complaints
If multiple at-risk accounts cite the same issue, escalate it to your product or support team immediately.

## Days 61-90: Build Systems

### Implement Automated Health Monitoring
Set up alerts in your CRM for accounts that drop below your health score threshold.

### Standardize QBRs and EBRs
Every account above a certain ARR should have a structured quarterly or executive business review.

### Measure and Iterate
Track your churn rate weekly. By day 90, you should see measurable improvement if the framework has been executed properly.`,
  },
  "csm-account-ratio": {
    title: "CSM to Account Ratio — What is Ideal for SaaS?",
    description: "The industry runs CSMs at 50-80 accounts. We explain why 30-35 is the sweet spot and how the right ratio directly impacts your NRR.",
    tag: "CS Operations",
    readTime: "6 min read",
    content: `The CSM-to-account ratio is one of the most important and most overlooked variables in Customer Success. Get it wrong, and your CSMs are overwhelmed, your customers are neglected, and your churn rate climbs.

## What is the Industry Average?

Most SaaS companies run their CSMs at 50-80 accounts. Some high-volume, low-touch models push this to 100+ accounts per CSM. The result is reactive CS where CSMs spend their time firefighting rather than building relationships or preventing churn.

## Why 30-35 Accounts is the Sweet Spot

At Million Square Solutions, our CSMs manage 30-35 accounts. At 80 accounts, a CSM has roughly 30 minutes per account per week. At 35 accounts, they have over an hour. That extra time means more QBRs, more proactive outreach, and stronger relationships.

### Better Churn Detection
When CSMs have fewer accounts, they notice early warning signs faster — a drop in login frequency, a support ticket spike, a change in champion contact.

### Higher Expansion Revenue
Expansion requires trust. Trust requires time. Lower ratios mean CSMs can identify and execute upsell opportunities that higher-ratio models consistently miss.

## How to Calculate the Right Ratio for Your Business

The ideal ratio depends on your ACV, product complexity, and customer segment. High ACV above $50k works best at 10-20 accounts per CSM. Mid-market at $10k-$50k ACV works at 30-50 accounts. SMB below $10k ACV can support 50-100 accounts per CSM.

## The Bottom Line

If your CSMs are managing more than 50 accounts in a mid-market motion, you are leaving NRR on the table. The right ratio is an investment, not a cost.`,
  },
  "nrr-vs-grr-guide": {
    title: "NRR vs GRR — Complete Guide for SaaS",
    description: "Net Revenue Retention vs Gross Revenue Retention — what they mean, how to calculate them, and why NRR is the most important metric in SaaS.",
    tag: "SaaS Metrics",
    readTime: "7 min read",
    content: `Net Revenue Retention (NRR) and Gross Revenue Retention (GRR) are the two most important metrics in SaaS. Understanding the difference between them and knowing which to optimize is critical for sustainable growth.

## What is Gross Revenue Retention (GRR)?

GRR measures the percentage of recurring revenue retained from existing customers, excluding any expansion revenue. GRR can never exceed 100%. A GRR of 85% means you retained 85% of your existing revenue, losing 15% to churn and downgrades.

## What is Net Revenue Retention (NRR)?

NRR measures the percentage of recurring revenue retained from existing customers, including expansion revenue from upsells and cross-sells. NRR can exceed 100%. An NRR above 100% means your existing customers are generating more revenue than you are losing to churn.

## Why NRR is the Most Important SaaS Metric

A SaaS company with 120% NRR grows its existing revenue base by 20% per year without acquiring a single new customer. Top SaaS companies like Snowflake, Datadog, and HubSpot have historically maintained NRR above 120%.

## What is a Good NRR for SaaS?

Above 120% is exceptional with world-class CS and strong expansion motion. Between 100-120% is healthy with good retention and room to grow. Between 85-100% needs improvement as churn is offsetting growth. Below 85% is critical and requires immediate CS intervention.

## How to Improve NRR

Improving NRR requires both reducing churn and increasing expansion revenue. This means proactive health monitoring, structured expansion playbooks, regular EBRs, and dedicated CSMs with enough bandwidth to execute. At Million Square Solutions, we focus on helping SaaS companies reach and sustain 100%+ NRR through dedicated CS teams and AI-powered retention systems.`,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Balbir Singh",
      jobTitle: "Founder, Million Square Solutions",
      url: "https://www.linkedin.com/in/balbirsingh1990",
    },
    publisher: {
      "@type": "Organization",
      name: "Million Square Solutions",
      url: "https://www.millionsquaresolutions.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.millionsquaresolutions.com/blog/" + slug,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="text-primary text-sm hover:underline">Back to Blog</Link>
          </div>
          <div className="text-xs text-primary uppercase tracking-widest font-bold mb-3">{post.tag}</div>
          <h1 className="text-4xl md:text-5xl font-bold futuristic-heading mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-2">{post.readTime}</p>
          <p className="text-muted-foreground text-sm mb-2">By <span className="text-white font-semibold">Balbir Singh</span> — Founder, Million Square Solutions</p>
          <div className="border-t border-white/10 my-8" />
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{para.replace("## ", "")}</h2>;
              }
              if (para.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-bold text-primary mt-6 mb-3">{para.replace("### ", "")}</h3>;
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} className="space-y-2 mb-4">
                    {para.split("\n").map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para.trim()}</p>;
            })}
          </div>
          <div className="border-t border-white/10 my-12" />
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