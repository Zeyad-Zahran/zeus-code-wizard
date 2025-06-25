
import React from 'react';
import { Layout, TrendingUp } from 'lucide-react';
import { Template } from '../types/template';

export const marketingTemplates: Template[] = [
  {
    id: 'landing',
    title: 'Landing Page',
    description: 'Hero section with features and CTA',
    icon: <Layout className="w-6 h-6" />,
    category: 'Marketing',
    color: 'from-purple-500 to-pink-500',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #1e3a8a, #3b0764); min-height: 100vh; }
        .feature-card { transition: transform 0.3s; }
        .feature-card:hover { transform: translateY(-5px); }
        .btn-cta { background: #f97316; border-color: #f97316; }
    </style>
</head>
<body>
    <section class="hero text-white d-flex align-items-center">
        <div class="container text-center">
            <h1 class="display-1 fw-bold mb-4">Your Amazing Product</h1>
            <p class="lead mb-5">Transform your business with our innovative solution</p>
            <button class="btn btn-cta btn-lg px-5">Get Started</button>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="feature-card card h-100 shadow-sm">
                        <div class="card-body text-center p-4">
                            <h5>Fast & Reliable</h5>
                            <p>Lightning-fast performance you can depend on</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card card h-100 shadow-sm">
                        <div class="card-body text-center p-4">
                            <h5>Easy to Use</h5>
                            <p>Intuitive interface designed for everyone</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card card h-100 shadow-sm">
                        <div class="card-body text-center p-4">
                            <h5>24/7 Support</h5>
                            <p>Always here when you need us most</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
  }
];
