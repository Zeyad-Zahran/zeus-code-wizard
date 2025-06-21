
import React from 'react';
import { Code, Layout, Smartphone, Globe, Database, Palette } from 'lucide-react';

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
