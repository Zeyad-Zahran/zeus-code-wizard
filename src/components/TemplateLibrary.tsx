
import React from 'react';
import { Code, Layout, Smartphone, Globe, Database, Palette, ShoppingCart, BookOpen, Users, Camera, Utensils, Building, Heart, Music, Calendar, Mail, Trophy, Briefcase, GraduationCap, Plane } from 'lucide-react';

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
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Admin panel with sidebar and widgets',
      icon: <Database className="w-6 h-6" />,
      category: 'Admin',
      color: 'from-green-500 to-teal-500',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .sidebar { background: #1e293b; min-height: 100vh; }
        .nav-link { color: #64748b; }
        .nav-link:hover, .nav-link.active { color: #f97316; }
        .stat-card { background: linear-gradient(135deg, #3b82f6, #8b5cf6); }
    </style>
</head>
<body class="bg-light">
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-3 col-lg-2 sidebar px-0">
                <div class="p-3">
                    <h4 class="text-white">Dashboard</h4>
                </div>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><i class="fas fa-home me-2"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-users me-2"></i>Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-chart-bar me-2"></i>Analytics</a>
                    </li>
                </ul>
            </nav>
            
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                </div>
                
                <div class="row g-4 mb-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="stat-card card text-white">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <h4>1,234</h4>
                                        <p class="mb-0">Total Users</p>
                                    </div>
                                    <i class="fas fa-users fa-2x opacity-75"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</body>
</html>`
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Personal portfolio showcase',
      icon: <Globe className="w-6 h-6" />,
      category: 'Personal',
      color: 'from-orange-500 to-red-500',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero-section { background: linear-gradient(135deg, #1e3a8a, #3b0764); min-height: 100vh; }
        .project-card { transition: transform 0.3s; }
        .project-card:hover { transform: scale(1.05); }
        .text-gradient { background: linear-gradient(45deg, #f97316, #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    </style>
</head>
<body>
    <section class="hero-section text-white d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4">Hi, I'm <span class="text-gradient">John Doe</span></h1>
                    <p class="lead mb-4">Full-Stack Developer & Designer</p>
                    <button class="btn btn-outline-light btn-lg">View My Work</button>
                </div>
            </div>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">My Projects</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="project-card card shadow">
                        <div class="card-body">
                            <h5 class="card-title">E-commerce App</h5>
                            <p class="card-text">Modern shopping platform built with React</p>
                            <a href="#" class="btn btn-primary">View Project</a>
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
      id: 'ecommerce',
      title: 'E-commerce Store',
      description: 'Online shopping platform with product showcase',
      icon: <ShoppingCart className="w-6 h-6" />,
      category: 'E-commerce',
      color: 'from-emerald-500 to-green-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .navbar { background: #1f2937; }
        .product-card { transition: transform 0.3s; }
        .product-card:hover { transform: translateY(-5px); }
        .btn-cart { background: #059669; border-color: #059669; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">ShopZone</a>
            <div class="d-flex">
                <button class="btn btn-outline-light me-2"><i class="fas fa-search"></i></button>
                <button class="btn btn-outline-light"><i class="fas fa-shopping-cart"></i> <span class="badge bg-danger">3</span></button>
            </div>
        </div>
    </nav>
    
    <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Featured Products</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="product-card card h-100 shadow-sm">
                        <div class="card-img-top bg-light d-flex align-items-center justify-content-center" style="height: 200px;">
                            <i class="fas fa-image fa-3x text-muted"></i>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Premium Headphones</h6>
                            <p class="text-muted">$99.99</p>
                            <button class="btn btn-cart btn-sm w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="product-card card h-100 shadow-sm">
                        <div class="card-img-top bg-light d-flex align-items-center justify-content-center" style="height: 200px;">
                            <i class="fas fa-laptop fa-3x text-muted"></i>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Gaming Laptop</h6>
                            <p class="text-muted">$1,299.99</p>
                            <button class="btn btn-cart btn-sm w-100">Add to Cart</button>
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
      id: 'blog',
      title: 'Blog Website',
      description: 'Modern blog layout with articles and sidebar',
      icon: <BookOpen className="w-6 h-6" />,
      category: 'Content',
      color: 'from-indigo-500 to-purple-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Blog</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero-bg { background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300"><rect fill="%23667eea" width="1000" height="300"/></svg>'); }
        .post-card { transition: transform 0.2s; }
        .post-card:hover { transform: translateY(-2px); }
    </style>
</head>
<body>
    <header class="hero-bg text-white py-5">
        <div class="container text-center">
            <h1 class="display-4 fw-bold">Tech Insights</h1>
            <p class="lead">Latest trends in technology and development</p>
        </div>
    </header>
    
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-8">
                <article class="post-card card mb-4 shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title">The Future of AI Development</h2>
                        <p class="text-muted small">Published on January 15, 2024</p>
                        <p class="card-text">Artificial Intelligence is revolutionizing how we approach software development. From code generation to automated testing...</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </article>
                
                <article class="post-card card mb-4 shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title">Web Development Best Practices</h2>
                        <p class="text-muted small">Published on January 10, 2024</p>
                        <p class="card-text">Building modern web applications requires following certain best practices for performance, security, and maintainability...</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </article>
            </div>
            
            <aside class="col-lg-4">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h5>Recent Posts</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="#" class="text-decoration-none">Getting Started with React Hooks</a></li>
                            <li class="mb-2"><a href="#" class="text-decoration-none">CSS Grid vs Flexbox</a></li>
                            <li class="mb-2"><a href="#" class="text-decoration-none">JavaScript ES2024 Features</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</body>
</html>`
    },
    {
      id: 'agency',
      title: 'Digital Agency',
      description: 'Professional agency website with services',
      icon: <Building className="w-6 h-6" />,
      category: 'Business',
      color: 'from-slate-600 to-gray-700',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Agency</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #1f2937, #374151); min-height: 80vh; }
        .service-icon { font-size: 3rem; color: #3b82f6; }
        .team-card img { width: 100%; height: 250px; object-fit: cover; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">CreativeStudio</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#services">Services</a>
                <a class="nav-link" href="#team">Team</a>
                <a class="nav-link" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">We Create Digital Experiences</h1>
            <p class="lead mb-5">Transforming ideas into powerful digital solutions</p>
            <button class="btn btn-primary btn-lg me-3">Our Work</button>
            <button class="btn btn-outline-light btn-lg">Get Started</button>
        </div>
    </section>
    
    <section id="services" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Our Services</h2>
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <i class="service-icon fas fa-palette mb-3"></i>
                    <h4>UI/UX Design</h4>
                    <p>Creating beautiful and intuitive user experiences</p>
                </div>
                <div class="col-md-4">
                    <i class="service-icon fas fa-code mb-3"></i>
                    <h4>Development</h4>
                    <p>Building robust and scalable web applications</p>
                </div>
                <div class="col-md-4">
                    <i class="service-icon fas fa-chart-line mb-3"></i>
                    <h4>Digital Marketing</h4>
                    <p>Growing your online presence and reach</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'restaurant',
      title: 'Restaurant Website',
      description: 'Restaurant site with menu and reservations',
      icon: <Utensils className="w-6 h-6" />,
      category: 'Food & Beverage',
      color: 'from-amber-500 to-orange-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bella Vista Restaurant</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23d97706" width="1000" height="600"/></svg>'); min-height: 70vh; }
        .menu-item { border-bottom: 1px dotted #ddd; }
        .btn-reservation { background: #d97706; border-color: #d97706; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fas fa-utensils me-2"></i>Bella Vista</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#menu">Menu</a>
                <a class="nav-link" href="#about">About</a>
                <a class="nav-link" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-3 fw-bold mb-4">Authentic Italian Cuisine</h1>
            <p class="lead mb-4">Experience the flavors of Italy in the heart of the city</p>
            <button class="btn btn-reservation btn-lg">Make Reservation</button>
        </div>
    </section>
    
    <section id="menu" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Our Menu</h2>
            <div class="row">
                <div class="col-md-6">
                    <h4 class="mb-4">Appetizers</h4>
                    <div class="menu-item d-flex justify-content-between mb-3 pb-2">
                        <div>
                            <h6>Bruschetta Italiana</h6>
                            <small class="text-muted">Fresh tomatoes, basil, and mozzarella</small>
                        </div>
                        <span class="fw-bold">$12</span>
                    </div>
                    <div class="menu-item d-flex justify-content-between mb-3 pb-2">
                        <div>
                            <h6>Antipasto Platter</h6>
                            <small class="text-muted">Selection of cured meats and cheeses</small>
                        </div>
                        <span class="fw-bold">$18</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <h4 class="mb-4">Main Courses</h4>
                    <div class="menu-item d-flex justify-content-between mb-3 pb-2">
                        <div>
                            <h6>Spaghetti Carbonara</h6>
                            <small class="text-muted">Traditional Roman pasta with pancetta</small>
                        </div>
                        <span class="fw-bold">$22</span>
                    </div>
                    <div class="menu-item d-flex justify-content-between mb-3 pb-2">
                        <div>
                            <h6>Osso Buco</h6>
                            <small class="text-muted">Braised veal shanks with risotto</small>
                        </div>
                        <span class="fw-bold">$32</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'photography',
      title: 'Photography Portfolio',
      description: 'Creative portfolio for photographers',
      icon: <Camera className="w-6 h-6" />,
      category: 'Creative',
      color: 'from-rose-500 to-pink-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarah Chen Photography</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(45deg, #1f2937, #374151); min-height: 100vh; }
        .gallery-item { height: 300px; background: #f3f4f6; transition: transform 0.3s; }
        .gallery-item:hover { transform: scale(1.05); }
        .text-gradient { background: linear-gradient(45deg, #ec4899, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4">Capturing <span class="text-gradient">Moments</span></h1>
                    <p class="lead mb-4">Professional photography services for your special occasions</p>
                    <button class="btn btn-outline-light btn-lg me-3">View Portfolio</button>
                    <button class="btn btn-primary btn-lg">Book Session</button>
                </div>
            </div>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Recent Work</h2>
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="gallery-item rounded d-flex align-items-center justify-content-center">
                        <i class="fas fa-camera fa-3x text-muted"></i>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gallery-item rounded d-flex align-items-center justify-content-center">
                        <i class="fas fa-image fa-3x text-muted"></i>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gallery-item rounded d-flex align-items-center justify-content-center">
                        <i class="fas fa-portrait fa-3x text-muted"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="bg-light py-5">
        <div class="container text-center">
            <h3 class="mb-4">Ready to capture your story?</h3>
            <p class="lead mb-4">Let's create beautiful memories together</p>
            <button class="btn btn-primary btn-lg">Get in Touch</button>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'fitness',
      title: 'Fitness Gym',
      description: 'Gym website with classes and membership info',
      icon: <Heart className="w-6 h-6" />,
      category: 'Health & Fitness',
      color: 'from-red-500 to-rose-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitZone Gym</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(rgba(220,38,38,0.8), rgba(220,38,38,0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23374151" width="1000" height="600"/></svg>'); }
        .class-card { transition: transform 0.3s; }
        .class-card:hover { transform: translateY(-5px); }
        .btn-join { background: #dc2626; border-color: #dc2626; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#"><i class="fas fa-dumbbell me-2"></i>FitZone</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#classes">Classes</a>
                <a class="nav-link" href="#membership">Membership</a>
                <a class="nav-link" href="#trainers">Trainers</a>
            </div>
        </div>
    </nav>
    
    <section class="hero text-white py-5" style="min-height: 70vh;">
        <div class="container d-flex align-items-center h-100">
            <div>
                <h1 class="display-2 fw-bold mb-4">Transform Your Body</h1>
                <p class="lead mb-4">Join our community and achieve your fitness goals</p>
                <button class="btn btn-join btn-lg me-3">Start Free Trial</button>
                <button class="btn btn-outline-light btn-lg">View Classes</button>
            </div>
        </div>
    </section>
    
    <section id="classes" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Popular Classes</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="class-card card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <i class="fas fa-fire fa-3x text-danger mb-3"></i>
                            <h5>HIIT Training</h5>
                            <p>High-intensity interval training for maximum results</p>
                            <p class="text-muted">Mon, Wed, Fri - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="class-card card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <i class="fas fa-heart fa-3x text-danger mb-3"></i>
                            <h5>Yoga Flow</h5>
                            <p>Mindful movement and flexibility training</p>
                            <p class="text-muted">Tue, Thu - 7:00 AM</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="class-card card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <i class="fas fa-dumbbell fa-3x text-danger mb-3"></i>
                            <h5>Strength Training</h5>
                            <p>Build muscle and increase power</p>
                            <p class="text-muted">Daily - 5:00 PM</p>
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
      id: 'music',
      title: 'Music Artist',
      description: 'Artist website with discography and tour dates',
      icon: <Music className="w-6 h-6" />,
      category: 'Entertainment',
      color: 'from-violet-500 to-purple-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Rivera Music</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #7c3aed, #a855f7); min-height: 100vh; }
        .album-cover { width: 100%; height: 200px; background: #f3f4f6; border-radius: 8px; }
        .tour-date { border-left: 4px solid #7c3aed; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background: rgba(0,0,0,0.2); position: absolute; width: 100%; z-index: 1000;">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">Alex Rivera</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#music">Music</a>
                <a class="nav-link" href="#tour">Tour</a>
                <a class="nav-link" href="#about">About</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-1 fw-bold mb-4">Alex Rivera</h1>
            <p class="lead mb-5">Singer • Songwriter • Producer</p>
            <button class="btn btn-light btn-lg me-3"><i class="fab fa-spotify me-2"></i>Listen Now</button>
            <button class="btn btn-outline-light btn-lg">Latest Album</button>
        </div>
    </section>
    
    <section id="music" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Discography</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="text-center">
                        <div class="album-cover d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-music fa-3x text-muted"></i>
                        </div>
                        <h5>Midnight Dreams</h5>
                        <p class="text-muted">2024 • 12 tracks</p>
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <div class="album-cover d-flex align-items-center justify-content-center mb-3">
                            <i class="fas fa-compact-disc fa-3x text-muted"></i>
                        </div>
                        <h5>Electric Vibes</h5>
                        <p class="text-muted">2023 • 10 tracks</p>
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="tour" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5">Upcoming Shows</h2>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tour-date bg-white p-4 mb-3 shadow-sm">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h5>Madison Square Garden</h5>
                                <p class="text-muted mb-0">New York, NY • March 15, 2024</p>
                            </div>
                            <button class="btn btn-primary">Tickets</button>
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
      id: 'events',
      title: 'Event Planner',
      description: 'Event planning and management website',
      icon: <Calendar className="w-6 h-6" />,
      category: 'Events',
      color: 'from-teal-500 to-cyan-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elite Events</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #0891b2, #06b6d4); min-height: 80vh; }
        .service-card { transition: transform 0.3s; border: none; }
        .service-card:hover { transform: translateY(-10px); }
        .event-icon { font-size: 3rem; color: #0891b2; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="#"><i class="fas fa-calendar-star me-2"></i>Elite Events</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#services">Services</a>
                <a class="nav-link" href="#portfolio">Portfolio</a>
                <a class="nav-link" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-3 fw-bold mb-4">Unforgettable Events</h1>
            <p class="lead mb-5">Creating magical moments that last a lifetime</p>
            <button class="btn btn-light btn-lg me-3">Plan Your Event</button>
            <button class="btn btn-outline-light btn-lg">View Gallery</button>
        </div>
    </section>
    
    <section id="services" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Our Services</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="service-card card h-100 shadow-sm text-center p-4">
                        <i class="event-icon fas fa-heart mb-3"></i>
                        <h4>Weddings</h4>
                        <p>Perfect ceremonies and receptions tailored to your love story</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card card h-100 shadow-sm text-center p-4">
                        <i class="event-icon fas fa-building mb-3"></i>
                        <h4>Corporate Events</h4>
                        <p>Professional conferences, galas, and team building events</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-card card h-100 shadow-sm text-center p-4">
                        <i class="event-icon fas fa-birthday-cake mb-3"></i>
                        <h4>Private Parties</h4>
                        <p>Birthdays, anniversaries, and special celebrations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="bg-light py-5">
        <div class="container text-center">
            <h3 class="mb-4">Ready to plan your perfect event?</h3>
            <p class="lead mb-4">Let's bring your vision to life</p>
            <button class="btn btn-primary btn-lg">Start Planning</button>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'newsletter',
      title: 'Newsletter Signup',
      description: 'Email newsletter subscription landing page',
      icon: <Mail className="w-6 h-6" />,
      category: 'Marketing',
      color: 'from-blue-500 to-indigo-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Weekly Newsletter</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #3b82f6, #6366f1); min-height: 100vh; }
        .benefit-icon { font-size: 2.5rem; color: #3b82f6; }
        .signup-form { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4">Stay Updated with Tech Weekly</h1>
                    <p class="lead mb-4">Get the latest tech news, tutorials, and insights delivered to your inbox every week</p>
                    
                    <div class="row g-3 mb-5">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="benefit-icon fas fa-newspaper me-3"></i>
                                <div>
                                    <h6 class="mb-1">Weekly Insights</h6>
                                    <small>Curated tech content</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="benefit-icon fas fa-rocket me-3"></i>
                                <div>
                                    <h6 class="mb-1">Early Access</h6>
                                    <small>Be first to know</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="signup-form card shadow-lg border-0 rounded-4 p-5">
                        <div class="text-center mb-4">
                            <i class="fas fa-envelope text-primary display-5 mb-3"></i>
                            <h3 class="text-dark">Join 10,000+ Subscribers</h3>
                        </div>
                        
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control form-control-lg" placeholder="First Name">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control form-control-lg" placeholder="Email Address">
                            </div>
                            <div class="mb-3">
                                <select class="form-select form-select-lg">
                                    <option>Your Role</option>
                                    <option>Developer</option>
                                    <option>Designer</option>
                                    <option>Product Manager</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg w-100 mb-3">Subscribe Now</button>
                            <small class="text-muted text-center d-block">Free forever. Unsubscribe anytime.</small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'sports',
      title: 'Sports Team',
      description: 'Sports team website with schedule and stats',
      icon: <Trophy className="w-6 h-6" />,
      category: 'Sports',
      color: 'from-green-600 to-emerald-700',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thunder Basketball</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #059669, #047857); min-height: 80vh; }
        .team-colors { background: linear-gradient(45deg, #059669, #fbbf24); }
        .stat-number { font-size: 2.5rem; font-weight: bold; color: #059669; }
        .game-card { border-left: 4px solid #059669; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#"><i class="fas fa-basketball-ball me-2"></i>Thunder</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#schedule">Schedule</a>
                <a class="nav-link" href="#roster">Roster</a>
                <a class="nav-link" href="#stats">Stats</a>
                <a class="nav-link" href="#tickets">Tickets</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Thunder Basketball</h1>
            <p class="lead mb-5">Championship bound since 1995</p>
            <button class="btn btn-light btn-lg me-3">Buy Tickets</button>
            <button class="btn btn-outline-light btn-lg">View Schedule</button>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-md-3">
                    <div class="stat-number">24</div>
                    <p class="text-muted">Wins This Season</p>
                </div>
                <div class="col-md-3">
                    <div class="stat-number">8</div>
                    <p class="text-muted">Losses</p>
                </div>
                <div class="col-md-3">
                    <div class="stat-number">3rd</div>
                    <p class="text-muted">League Position</p>
                </div>
                <div class="col-md-3">
                    <div class="stat-number">98.5</div>
                    <p class="text-muted">Avg Points</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="schedule" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5">Upcoming Games</h2>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="game-card bg-white p-4 mb-3 shadow-sm">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h5>vs. Lightning Bolts</h5>
                                <p class="text-muted mb-0">Home • March 20, 2024 • 7:00 PM</p>
                            </div>
                            <button class="btn btn-success">Get Tickets</button>
                        </div>
                    </div>
                    <div class="game-card bg-white p-4 shadow-sm">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h5>@ Storm Eagles</h5>
                                <p class="text-muted mb-0">Away • March 25, 2024 • 8:00 PM</p>
                            </div>
                            <button class="btn btn-success">Get Tickets</button>
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
      id: 'consulting',
      title: 'Business Consulting',
      description: 'Professional consulting services website',
      icon: <Briefcase className="w-6 h-6" />,
      category: 'Business',
      color: 'from-gray-600 to-slate-700',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strategic Consulting Group</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #475569, #1e293b); min-height: 80vh; }
        .service-icon { font-size: 3rem; color: #475569; }
        .stat-card { background: linear-gradient(135deg, #f8fafc, #e2e8f0); }
        .btn-consulting { background: #475569; border-color: #475569; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">Strategic Consulting</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#services">Services</a>
                <a class="nav-link" href="#expertise">Expertise</a>
                <a class="nav-link" href="#results">Results</a>
                <a class="nav-link" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <h1 class="display-3 fw-bold mb-4">Strategic Business Solutions</h1>
                    <p class="lead mb-5">Transforming challenges into opportunities with expert consulting services</p>
                    <button class="btn btn-light btn-lg me-3">Free Consultation</button>
                    <button class="btn btn-outline-light btn-lg">Our Approach</button>
                </div>
            </div>
        </div>
    </section>
    
    <section id="services" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Our Expertise</h2>
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <i class="service-icon fas fa-chart-line mb-3"></i>
                    <h4>Growth Strategy</h4>
                    <p>Develop sustainable growth plans and market expansion strategies</p>
                </div>
                <div class="col-md-4">
                    <i class="service-icon fas fa-cogs mb-3"></i>
                    <h4>Operations</h4>
                    <p>Optimize processes and improve operational efficiency</p>
                </div>
                <div class="col-md-4">
                    <i class="service-icon fas fa-lightbulb mb-3"></i>
                    <h4>Innovation</h4>
                    <p>Drive digital transformation and technological advancement</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5">Proven Results</h2>
            <div class="row g-4 text-center">
                <div class="col-md-3">
                    <div class="stat-card card p-4 border-0">
                        <h3 class="text-primary">500+</h3>
                        <p class="mb-0">Projects Completed</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stat-card card p-4 border-0">
                        <h3 class="text-primary">95%</h3>
                        <p class="mb-0">Client Satisfaction</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stat-card card p-4 border-0">
                        <h3 class="text-primary">$2.5B</h3>
                        <p class="mb-0">Value Created</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stat-card card p-4 border-0">
                        <h3 class="text-primary">15+</h3>
                        <p class="mb-0">Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
    },
    {
      id: 'education',
      title: 'Online Learning',
      description: 'Educational platform with courses and tutorials',
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Education',
      color: 'from-blue-600 to-indigo-700',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnTech Academy</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #2563eb, #4338ca); min-height: 80vh; }
        .course-card { transition: transform 0.3s; }
        .course-card:hover { transform: translateY(-5px); }
        .feature-icon { font-size: 2.5rem; color: #2563eb; }
        .btn-enroll { background: #2563eb; border-color: #2563eb; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="#"><i class="fas fa-graduation-cap me-2"></i>LearnTech</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#courses">Courses</a>
                <a class="nav-link" href="#about">About</a>
                <a class="nav-link" href="#instructors">Instructors</a>
                <a class="nav-link" href="#pricing">Pricing</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-3 fw-bold mb-4">Master Technology Skills</h1>
            <p class="lead mb-5">Learn from industry experts with hands-on projects and real-world applications</p>
            <button class="btn btn-light btn-lg me-3">Browse Courses</button>
            <button class="btn btn-outline-light btn-lg">Free Trial</button>
        </div>
    </section>
    
    <section class="py-5">
        <div class="container">
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <i class="feature-icon fas fa-video mb-3"></i>
                    <h5>Video Lessons</h5>
                    <p>High-quality video content with step-by-step instructions</p>
                </div>
                <div class="col-md-4">
                    <i class="feature-icon fas fa-code mb-3"></i>
                    <h5>Hands-on Projects</h5>
                    <p>Build real applications to solidify your learning</p>
                </div>
                <div class="col-md-4">
                    <i class="feature-icon fas fa-certificate mb-3"></i>
                    <h5>Certificates</h5>
                    <p>Earn recognized certificates upon course completion</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="courses" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5">Popular Courses</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="course-card card h-100 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <span class="badge bg-primary">Beginner</span>
                                <small class="text-muted">4.8 ⭐</small>
                            </div>
                            <h5 class="card-title">JavaScript Fundamentals</h5>
                            <p class="card-text">Learn modern JavaScript from basics to advanced concepts</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fw-bold text-primary">$49</span>
                                <button class="btn btn-enroll btn-sm">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="course-card card h-100 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <span class="badge bg-warning">Intermediate</span>
                                <small class="text-muted">4.9 ⭐</small>
                            </div>
                            <h5 class="card-title">React Development</h5>
                            <p class="card-text">Build modern web applications with React and Redux</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fw-bold text-primary">$79</span>
                                <button class="btn btn-enroll btn-sm">Enroll Now</button>
                            </div>
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
      id: 'travel',
      title: 'Travel Agency',
      description: 'Travel booking and destination showcase',
      icon: <Plane className="w-6 h-6" />,
      category: 'Travel',
      color: 'from-sky-500 to-blue-600',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wanderlust Travel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(rgba(14,165,233,0.8), rgba(37,99,235,0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%2306b6d4" width="1000" height="600"/></svg>'); min-height: 80vh; }
        .destination-card { transition: transform 0.3s; overflow: hidden; }
        .destination-card:hover { transform: scale(1.02); }
        .booking-form { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="#"><i class="fas fa-plane me-2"></i>Wanderlust</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="#destinations">Destinations</a>
                <a class="nav-link" href="#packages">Packages</a>
                <a class="nav-link" href="#deals">Deals</a>
                <a class="nav-link" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    
    <section class="hero d-flex align-items-center text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4">Explore the World</h1>
                    <p class="lead mb-5">Discover amazing destinations and create unforgettable memories</p>
                </div>
                <div class="col-lg-6">
                    <div class="booking-form card p-4 border-0 rounded-4">
                        <h4 class="text-dark mb-4">Find Your Perfect Trip</h4>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="From">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="To">
                                </div>
                                <div class="col-md-6">
                                    <input type="date" class="form-control" placeholder="Departure">
                                </div>
                                <div class="col-md-6">
                                    <input type="date" class="form-control" placeholder="Return">
                                </div>
                                <div class="col-12">
                                    <select class="form-select">
                                        <option>Number of Travelers</option>
                                        <option>1 Traveler</option>
                                        <option>2 Travelers</option>
                                        <option>3+ Travelers</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary w-100">Search Flights</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="destinations" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Popular Destinations</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="destination-card card border-0 shadow">
                        <div class="card-img-top bg-info d-flex align-items-center justify-content-center text-white" style="height: 200px;">
                            <i class="fas fa-mountain fa-3x"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Swiss Alps</h5>
                            <p class="text-muted">From $899</p>
                            <p class="card-text">Experience breathtaking mountain views and pristine landscapes</p>
                            <button class="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="destination-card card border-0 shadow">
                        <div class="card-img-top bg-warning d-flex align-items-center justify-content-center text-white" style="height: 200px;">
                            <i class="fas fa-umbrella-beach fa-3x"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Tropical Paradise</h5>
                            <p class="text-muted">From $1,299</p>
                            <p class="card-text">Relax on pristine beaches with crystal clear waters</p>
                            <button class="btn btn-primary">View Details</button>
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
