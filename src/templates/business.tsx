
import React from 'react';
import { Building, Briefcase, Users, Heart } from 'lucide-react';
import { Template } from '../types/template';

export const businessTemplates: Template[] = [
  {
    id: 'real-estate',
    title: 'Real Estate Agency',
    description: 'Property listings and real estate services',
    icon: <Building className="w-6 h-6" />,
    category: 'Business',
    color: 'from-blue-600 to-indigo-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamHome Realty</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(rgba(37,99,235,0.8), rgba(59,130,246,0.8)); min-height: 80vh; }
        .property-card { transition: transform 0.3s; }
        .property-card:hover { transform: scale(1.02); }
        .search-box { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="#"><i class="fas fa-home me-2"></i>DreamHome</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#properties">Properties</a>
                <a class="nav-link" href="#services">Services</a>
                <a class="nav-link" href="#agents">Agents</a>
                <a class="nav-link btn btn-primary text-white px-3 ms-2" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4">Find Your Dream Home</h1>
                    <p class="lead mb-5">Discover the perfect property with our expert real estate services</p>
                </div>
                <div class="col-lg-6">
                    <div class="search-box card p-4">
                        <h4 class="text-dark mb-4">Property Search</h4>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <select class="form-select">
                                        <option>Property Type</option>
                                        <option>House</option>
                                        <option>Apartment</option>
                                        <option>Condo</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Location">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" class="form-control" placeholder="Min Price">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" class="form-control" placeholder="Max Price">
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary w-100">Search Properties</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="properties" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Featured Properties</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="property-card card border-0 shadow">
                        <div class="card-img-top bg-light d-flex align-items-center justify-content-center" style="height: 200px;">
                            <i class="fas fa-home fa-3x text-muted"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Modern Family Home</h5>
                            <p class="text-primary fw-bold fs-4">$450,000</p>
                            <p class="text-muted">4 beds • 3 baths • 2,100 sq ft</p>
                            <p class="card-text">Beautiful modern home in quiet neighborhood</p>
                            <button class="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'law-firm',
    title: 'Law Firm',
    description: 'Professional legal services website',
    icon: <Briefcase className="w-6 h-6" />,
    category: 'Business',
    color: 'from-slate-700 to-gray-800',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Justice & Associates Law Firm</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #1f2937, #374151); min-height: 80vh; }
        .practice-area { transition: transform 0.3s; }
        .practice-area:hover { transform: translateY(-5px); }
        .btn-legal { background: #b91c1c; border-color: #b91c1c; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#"><i class="fas fa-balance-scale me-2"></i>Justice & Associates</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#practice">Practice Areas</a>
                <a class="nav-link" href="#attorneys">Attorneys</a>
                <a class="nav-link" href="#about">About</a>
                <a class="nav-link btn btn-outline-light px-3 ms-2" href="#consultation">Free Consultation</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Experienced Legal Representation</h1>
            <p class="lead mb-5">Protecting your rights with over 25 years of legal expertise</p>
            <button class="btn btn-legal btn-lg me-3">Free Consultation</button>
            <button class="btn btn-outline-light btn-lg">Our Track Record</button>
        </div>
    </section>
    
    <section id="practice" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Practice Areas</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="practice-area card h-100 shadow-sm">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-gavel fa-3x text-danger mb-3"></i>
                            <h5>Criminal Defense</h5>
                            <p>Aggressive defense for criminal charges and investigations</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="practice-area card h-100 shadow-sm">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-handshake fa-3x text-danger mb-3"></i>
                            <h5>Personal Injury</h5>
                            <p>Maximum compensation for accident and injury victims</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="practice-area card h-100 shadow-sm">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-home fa-3x text-danger mb-3"></i>
                            <h5>Real Estate Law</h5>
                            <p>Complete legal services for property transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="bg-light py-5">
        <div class="container text-center">
            <h3 class="mb-4">Need Legal Help?</h3>
            <p class="lead mb-4">Get a free consultation with our experienced attorneys</p>
            <button class="btn btn-legal btn-lg">Call Now: (555) 123-JUSTICE</button>
        </div>
    </section>
</body>
</html>`
  }
];
