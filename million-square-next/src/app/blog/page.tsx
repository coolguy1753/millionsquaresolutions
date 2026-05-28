import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Customer Success Insights",
  description: "Expert insights on Customer Success outsourcing, churn reduction, NRR optimization and SaaS retention strategies from Million Square Solutions.",
};

const posts = [
  {
    slug: "what-is-customer-success-outsourcing",
    title: "What is Customer Success Outsourcing?",
    description: "A complete guide to CS outsourcing — what it is, how it works, and why global SaaS companies are choosing it over in-house CS teams.",
    tag: "CS Outsourcing",
    readTime: "8 min read",
  },
  {
    slug: "customer-success-as-a-service",
    title: "Customer Success as a Service — Complete Guide",
    description: "Everything you need to know about CSaaS — the model, benefits, pricing, and how to choose the right provider for your SaaS business.",
    tag: "CSaaS",
    readTime: "10 min read",
  },
  {
    slug: "how-to-reduce-saas-churn",
    title: "How to Reduce SaaS Churn in 90 Days",
    description: "A proven 90-day framework to identify churn risk, engage at-risk accounts, and build retention systems that protect your recurring revenue.",
    tag: "Churn Reduction",
    readTime: "9 min read",
  },
  {
    slug: "csm-account-ratio",
    title: "CSM to Account Ratio — What is Ideal for SaaS?",
    description: "The industry runs CSMs at 50-80 accounts. We explain why 30-35 is the sweet spot and how the right ratio directly impacts your NRR.",
    tag: "CS Operations",
    readTime: "6 min read",
  },
  {
    slug: "nrr-vs-grr-guide",
    title: "NRR vs GRR — Complete Guide for SaaS",
    description: "Net Revenue Retention vs Gross Revenue Retention — what they mean, how to calculate them, and why NRR is the most important metric in SaaS.",
    tag: "SaaS Metrics",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase mb-4">Insights</div>
            <h1 className="text-4xl md:text-6xl font-bold futuristic-heading mb-6">Customer Success Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Expert insights on CS outsourcing, churn reduction, NRR optimization and SaaS retention — from practitioners who have done it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={"/blog/" + post.slug} className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 block group">
                <div className="text-xs text-primary uppercase tracking-widest font-bold mb-3">{post.tag}</div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.description}</p>
                <div className="text-xs text-muted-foreground">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}