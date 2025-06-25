import React from 'react';
import { Code, Layout, Smartphone, Globe, Database, Palette, ShoppingCart, BookOpen, Users, Camera, Utensils, Building, Heart, Music, Calendar, Mail, Trophy, Briefcase, GraduationCap, Plane, DollarSign, Bitcoin, Mic, Gamepad2 } from 'lucide-react';

interface TemplateLibraryProps {
  onTemplateSelect: (code: string) => void;
  onTabChange: (tab: string) => void;
}

export const TemplateLibrary = ({ onTemplateSelect, onTabChange }: TemplateLibraryProps) => {
  const templates = [
    {
      id: 'login',
      title: 'Login Page',
      description: 'Modern login form with validation',
      icon: <Code className="w-6 h-6" />,
      category: 'Authentication',
      color: 'from-blue-500 to-cyan-500',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Zeus Code Wizard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body { background: linear-gradient(135deg, #1e3a8a, #3b0764); min-height: 100vh; }
        .login-card { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
        .btn-primary { background: #f97316; border-color: #f97316; }
    </style>
</head>
<body class="d-flex align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <div class="login-card card shadow-lg border-0 rounded-4">
                    <div class="card-body p-5">
                        <div class="text-center mb-4">
                            <i class="fas fa-bolt text-warning display-4 mb-3"></i>
                            <h2>Welcome Back</h2>
                        </div>
                        <form>
                            <div class="mb-3">
                                <input type="email" class="form-control form-control-lg" placeholder="Email">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control form-control-lg" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg w-100">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    },
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
    },
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
    },
    {
      id: 'crypto-dashboard',
      title: 'Crypto Dashboard',
      description: 'Cryptocurrency trading dashboard',
      icon: <Bitcoin className="w-6 h-6" />,
      category: 'Finance',
      color: 'from-yellow-500 to-orange-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body { background: #0f172a; color: white; }
        .crypto-card { background: #1e293b; border: 1px solid #334155; }
        .price-up { color: #10b981; }
        .price-down { color: #ef4444; }
        .chart-area { height: 300px; background: #1e293b; border-radius: 8px; }
    </style>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="#"><i class="fab fa-bitcoin me-2 text-warning"></i>CryptoTrader</a>
            <div class="d-flex">
                <span class="navbar-text me-3">Portfolio: $45,230.21</span>
                <button class="btn btn-outline-warning btn-sm">Trade</button>
            </div>
        </div>
    </nav>
    
    <div class="container-fluid mt-4">
        <div class="row g-3">
            <div class="col-md-3">
                <div class="crypto-card card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="text-muted">Bitcoin</h6>
                                <h4>$43,250.00</h4>
                                <small class="price-up">+2.45%</small>
                            </div>
                            <i class="fab fa-bitcoin fa-2x text-warning"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="crypto-card card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="text-muted">Ethereum</h6>
                                <h4>$2,847.32</h4>
                                <small class="price-down">-1.23%</small>
                            </div>
                            <i class="fab fa-ethereum fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="crypto-card card">
                    <div class="card-body">
                        <h6>Portfolio Overview</h6>
                        <div class="chart-area d-flex align-items-center justify-content-center">
                            <i class="fas fa-chart-line fa-3x text-muted"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    },
    {
      id: 'medical-clinic',
      title: 'Medical Clinic',
      description: 'Healthcare clinic website with appointments',
      icon: <Heart className="w-6 h-6" />,
      category: 'Healthcare',
      color: 'from-red-500 to-pink-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HealthCare Clinic</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #dc2626, #f87171); min-height: 70vh; }
        .service-icon { font-size: 3rem; color: #dc2626; }
        .appointment-form { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-danger" href="#"><i class="fas fa-heartbeat me-2"></i>HealthCare+</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#services">Services</a>
                <a class="nav-link" href="#doctors">Doctors</a>
                <a class="nav-link" href="#contact">Contact</a>
                <a class="nav-link btn btn-danger text-white px-3 ms-2" href="#appointment">Book Appointment</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4">Your Health, Our Priority</h1>
                    <p class="lead mb-5">Comprehensive healthcare services with experienced medical professionals</p>
                    <button class="btn btn-light btn-lg me-3">Book Appointment</button>
                    <button class="btn btn-outline-light btn-lg">Emergency Care</button>
                </div>
                <div class="col-lg-6">
                    <div class="appointment-form card p-4">
                        <h4 class="text-dark mb-4">Quick Appointment</h4>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Full Name">
                                </div>
                                <div class="col-md-6">
                                    <input type="tel" class="form-control" placeholder="Phone">
                                </div>
                                <div class="col-md-6">
                                    <select class="form-select">
                                        <option>Select Service</option>
                                        <option>General Consultation</option>
                                        <option>Cardiology</option>
                                        <option>Dermatology</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <input type="date" class="form-control">
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-danger w-100">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="services" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Our Services</h2>
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <i class="service-icon fas fa-stethoscope mb-3"></i>
                    <h4>General Medicine</h4>
                    <p>Comprehensive primary healthcare for all ages</p>
                </div>
                <div class="col-md-4">
                    <i class="service-icon fas fa-heart mb-3"></i>
                    <h4>Cardiology</h4>
                    <p>Expert heart care and cardiovascular treatments</p>
                </div>
                <div class="col-md-4">
                    <i class="service-icon fas fa-brain mb-3"></i>
                    <h4>Neurology</h4>
                    <p>Advanced neurological care and diagnostics</p>
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
      icon: <Scale className="w-6 h-6" />,
      category: 'Legal',
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
    },
    {
      id: 'real-estate',
      title: 'Real Estate Agency',
      description: 'Property listings and real estate services',
      icon: <Home className="w-6 h-6" />,
      category: 'Real Estate',
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
        .hero { background: linear-gradient(rgba(37,99,235,0.8), rgba(59,130,246,0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%232563eb" width="1000" height="600"/></svg>'); min-height: 80vh; }
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
                <div class="col-md-6 col-lg-4">
                    <div class="property-card card border-0 shadow">
                        <div class="card-img-top bg-light d-flex align-items-center justify-content-center" style="height: 200px;">
                            <i class="fas fa-building fa-3x text-muted"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Downtown Condo</h5>
                            <p class="text-primary fw-bold fs-4">$280,000</p>
                            <p class="text-muted">2 beds • 2 baths • 1,200 sq ft</p>
                            <p class="card-text">Luxury condo with city views</p>
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
      id: 'wedding-planner',
      title: 'Wedding Planner',
      description: 'Elegant wedding planning services',
      icon: <Heart className="w-6 h-6" />,
      category: 'Events',
      color: 'from-pink-500 to-rose-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forever Weddings</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(rgba(236,72,153,0.8), rgba(244,114,182,0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23f9a8d4" width="1000" height="600"/></svg>'); min-height: 100vh; }
        .service-card { transition: transform 0.3s; border: none; }
        .service-card:hover { transform: translateY(-10px); }
        .elegant-font { font-family: 'Georgia', serif; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-pink elegant-font" href="#" style="color: #ec4899;"><i class="fas fa-heart me-2"></i>Forever Weddings</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#services">Services</a>
                <a class="nav-link" href="#gallery">Gallery</a>
                <a class="nav-link" href="#testimonials">Testimonials</a>
                <a class="nav-link btn text-white px-3 ms-2" style="background: #ec4899;" href="#consultation">Free Consultation</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4 elegant-font">Your Perfect Day Awaits</h1>
            <p class="lead mb-5">Creating magical moments that last a lifetime</p>
            <button class="btn btn-light btn-lg me-3 elegant-font">Plan Your Wedding</button>
            <button class="btn btn-outline-light btn-lg elegant-font">View Our Work</button>
        </div>
    </section>
    
    <section id="services" class="py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="elegant-font">Our Wedding Services</h2>
                <p class="lead">Comprehensive planning for your special day</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="service-card card h-100 shadow-sm text-center p-4">
                        <i class="fas fa-ring fa-3x mb-3" style="color: #ec4899;"></i>
                        <h4 class="elegant-font">Full Planning</h4>
                        <p>Complete wedding planning from start to finish</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card card h-100 shadow-sm text-center p-4">
                        <i class="fas fa-calendar-check fa-3x mb-3" style="color: #ec4899;"></i>
                        <h4 class="elegant-font">Day Coordination</h4>
                        <p>Seamless coordination on your wedding day</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card card h-100 shadow-sm text-center p-4">
                        <i class="fas fa-palette fa-3x mb-3" style="color: #ec4899;"></i>
                        <h4 class="elegant-font">Design & Decor</h4>
                        <p>Beautiful custom designs and decorations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container text-center">
            <h3 class="elegant-font mb-4">Ready to Start Planning?</h3>
            <p class="lead mb-4">Let's create the wedding of your dreams together</p>
            <button class="btn btn-lg px-5 elegant-font" style="background: #ec4899; color: white;">Book Consultation</button>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'podcast-website',
      title: 'Podcast Website',
      description: 'Professional podcast hosting platform',
      icon: <Mic className="w-6 h-6" />,
      category: 'Media',
      color: 'from-purple-600 to-indigo-700',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechTalk Podcast</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #7c3aed, #6366f1); min-height: 80vh; }
        .episode-card { transition: transform 0.3s; }
        .episode-card:hover { transform: translateY(-5px); }
        .play-btn { background: #7c3aed; border: none; border-radius: 50%; width: 60px; height: 60px; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#"><i class="fas fa-microphone me-2"></i>TechTalk</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#episodes">Episodes</a>
                <a class="nav-link" href="#about">About</a>
                <a class="nav-link" href="#subscribe">Subscribe</a>
                <a class="nav-link btn btn-outline-light px-3 ms-2" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">TechTalk Podcast</h1>
            <p class="lead mb-5">Weekly conversations about technology, innovation, and the future</p>
            <button class="btn btn-light btn-lg me-3"><i class="fas fa-play me-2"></i>Latest Episode</button>
            <button class="btn btn-outline-light btn-lg"><i class="fas fa-rss me-2"></i>Subscribe</button>
        </div>
    </section>
    
    <section id="episodes" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Recent Episodes</h2>
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="episode-card card shadow-sm">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <button class="play-btn text-white me-3">
                                    <i class="fas fa-play"></i>
                                </button>
                                <div>
                                    <h5 class="card-title mb-1">The Future of AI</h5>
                                    <small class="text-muted">Episode 45 • 32 min</small>
                                </div>
                            </div>
                            <p class="card-text">Exploring how artificial intelligence is reshaping industries and daily life.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">March 15, 2024</small>
                                <div>
                                    <button class="btn btn-sm btn-outline-primary me-2"><i class="fas fa-share"></i></button>
                                    <button class="btn btn-sm btn-outline-primary"><i class="fas fa-download"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="episode-card card shadow-sm">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <button class="play-btn text-white me-3">
                                    <i class="fas fa-play"></i>
                                </button>
                                <div>
                                    <h5 class="card-title mb-1">Blockchain Revolution</h5>
                                    <small class="text-muted">Episode 44 • 28 min</small>
                                </div>
                            </div>
                            <p class="card-text">Understanding blockchain technology and its real-world applications.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">March 8, 2024</small>
                                <div>
                                    <button class="btn btn-sm btn-outline-primary me-2"><i class="fas fa-share"></i></button>
                                    <button class="btn btn-sm btn-outline-primary"><i class="fas fa-download"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="subscribe" class="bg-dark text-white py-5">
        <div class="container text-center">
            <h3 class="mb-4">Never Miss an Episode</h3>
            <p class="lead mb-4">Subscribe on your favorite platform</p>
            <div class="d-flex justify-content-center gap-3 flex-wrap">
                <button class="btn btn-outline-light"><i class="fab fa-apple me-2"></i>Apple Podcasts</button>
                <button class="btn btn-outline-light"><i class="fab fa-spotify me-2"></i>Spotify</button>
                <button class="btn btn-outline-light"><i class="fab fa-google me-2"></i>Google Podcasts</button>
            </div>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'movie-streaming',
      title: 'Movie Streaming',
      description: 'Video streaming platform interface',
      icon: <Film className="w-6 h-6" />,
      category: 'Entertainment',
      color: 'from-red-600 to-pink-700',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StreamFlix</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background: #000; color: white; }
        .hero { background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23dc2626" width="1000" height="600"/></svg>'); min-height: 80vh; }
        .movie-card { background: #1a1a1a; transition: transform 0.3s; }
        .movie-card:hover { transform: scale(1.05); }
        .navbar-dark { background: rgba(0,0,0,0.9) !important; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-danger" href="#"><i class="fas fa-play-circle me-2"></i>StreamFlix</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#home">Home</a>
                <a class="nav-link" href="#movies">Movies</a>
                <a class="nav-link" href="#series">TV Series</a>
                <a class="nav-link" href="#watchlist">My List</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4">Unlimited Entertainment</h1>
                    <p class="lead mb-4">Watch thousands of movies and TV shows anytime, anywhere</p>
                    <button class="btn btn-danger btn-lg me-3">Watch Now</button>
                    <button class="btn btn-outline-light btn-lg">Add to List</button>
                </div>
            </div>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container">
            <h3 class="mb-4">Trending Now</h3>
            <div class="row g-3">
                <div class="col-md-2 col-6">
                    <div class="movie-card card">
                        <div class="card-img-top bg-dark d-flex align-items-center justify-content-center" style="height: 300px;">
                            <i class="fas fa-film fa-3x text-muted"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div class="movie-card card">
                        <div class="card-img-top bg-dark d-flex align-items-center justify-content-center" style="height: 300px;">
                            <i class="fas fa-video fa-3x text-muted"></i>
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
      id: 'gaming-clan',
      title: 'Gaming Clan',
      description: 'Esports team and gaming community',
      icon: <Gamepad2 className="w-6 h-6" />,
      category: 'Gaming',
      color: 'from-purple-600 to-blue-700',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phoenix Gaming Clan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background: #0a0a0a; color: white; }
        .hero { background: linear-gradient(135deg, #7c3aed, #3b82f6); min-height: 100vh; }
        .member-card { background: #1a1a1a; border: 1px solid #333; transition: transform 0.3s; }
        .member-card:hover { transform: translateY(-10px); }
        .neon-text { text-shadow: 0 0 20px #7c3aed; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#"><i class="fas fa-gamepad me-2 text-warning"></i>Phoenix Clan</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#team">Team</a>
                <a class="nav-link" href="#tournaments">Tournaments</a>
                <a class="nav-link" href="#recruitment">Join Us</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center">
        <div class="container text-center">
            <h1 class="display-1 fw-bold neon-text mb-4">PHOENIX CLAN</h1>
            <p class="lead mb-5">Elite Gaming • Competitive Esports • Championship Winners</p>
            <button class="btn btn-warning btn-lg me-3">Join Our Team</button>
            <button class="btn btn-outline-light btn-lg">Watch Highlights</button>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Team Members</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="member-card card">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-user-circle fa-4x text-warning mb-3"></i>
                            <h5>PhoenixFire</h5>
                            <p class="text-muted">Team Captain</p>
                            <p>Leading the clan to victory in major tournaments</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="member-card card">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-user-circle fa-4x text-warning mb-3"></i>
                            <h5>ShadowStrike</h5>
                            <p class="text-muted">Sniper Specialist</p>
                            <p>Precision accuracy and strategic gameplay</p>
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

  const handleTemplateSelect = (template: typeof templates[0]) => {
    onTemplateSelect(template.code);
    onTabChange('editor');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Template Library</h2>
        <p className="text-slate-400">Choose from our collection of professional templates</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-slate-600/50 transition-all cursor-pointer group"
            onClick={() => handleTemplateSelect(template)}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${template.color} text-white`}>
                {template.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {template.title}
                  </h3>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                    {template.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Use Template →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-4 border border-yellow-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Palette className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">Customization Tips</h3>
        </div>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>• All templates are fully customizable and responsive</li>
          <li>• Built with Bootstrap 5 and modern CSS</li>
          <li>• Include Font Awesome icons and Google Fonts</li>
          <li>• Ready to use with your own content and branding</li>
        </ul>
      </div>
    </div>
  );
};
