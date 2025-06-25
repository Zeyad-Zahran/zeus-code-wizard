
import React from 'react';
import { DollarSign, BarChart } from 'lucide-react';
import { Template } from '../types/template';

export const saasTemplates: Template[] = [
  {
    id: 'saas-pricing',
    title: 'SaaS Pricing Page',
    description: 'Professional pricing tables with features',
    icon: <DollarSign className="w-6 h-6" />,
    category: 'SaaS',
    color: 'from-green-500 to-emerald-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SaaS Pricing Plans</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .pricing-card { transition: transform 0.3s; }
        .pricing-card:hover { transform: scale(1.05); }
        .popular { border: 2px solid #10b981; position: relative; }
        .popular::before { content: "POPULAR"; position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #10b981; color: white; padding: 5px 20px; border-radius: 20px; font-size: 12px; }
    </style>
</head>
<body class="bg-light">
    <div class="container py-5">
        <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Choose Your Plan</h1>
            <p class="lead">Select the perfect plan for your business needs</p>
        </div>
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="pricing-card card h-100 shadow-sm">
                    <div class="card-body text-center p-5">
                        <h4>Starter</h4>
                        <div class="display-4 fw-bold text-primary">$9<small class="fs-6 text-muted">/mo</small></div>
                        <ul class="list-unstyled mt-4">
                            <li>✓ 5 Projects</li>
                            <li>✓ 10GB Storage</li>
                            <li>✓ Email Support</li>
                        </ul>
                        <button class="btn btn-outline-primary w-100 mt-4">Get Started</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="pricing-card card h-100 shadow popular">
                    <div class="card-body text-center p-5">
                        <h4>Professional</h4>
                        <div class="display-4 fw-bold text-primary">$29<small class="fs-6 text-muted">/mo</small></div>
                        <ul class="list-unstyled mt-4">
                            <li>✓ 50 Projects</li>
                            <li>✓ 100GB Storage</li>
                            <li>✓ Priority Support</li>
                            <li>✓ Advanced Analytics</li>
                        </ul>
                        <button class="btn btn-primary w-100 mt-4">Get Started</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="pricing-card card h-100 shadow-sm">
                    <div class="card-body text-center p-5">
                        <h4>Enterprise</h4>
                        <div class="display-4 fw-bold text-primary">$99<small class="fs-6 text-muted">/mo</small></div>
                        <ul class="list-unstyled mt-4">
                            <li>✓ Unlimited Projects</li>
                            <li>✓ 1TB Storage</li>
                            <li>✓ 24/7 Phone Support</li>
                            <li>✓ Custom Integrations</li>
                        </ul>
                        <button class="btn btn-outline-primary w-100 mt-4">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
  }
];
