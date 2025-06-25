
import { Template } from '../types/template';
import { Home, Building, MapPin, Key, Users, TrendingUp } from 'lucide-react';

export const realEstateTemplates: Template[] = [
  {
    id: 'real-estate-agency',
    title: 'Real Estate Agency',
    description: 'Property listings and agent profiles',
    icon: <Home className="w-6 h-6" />,
    category: 'Real Estate',
    color: 'from-emerald-500 to-teal-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Properties</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #10b981, #0d9488); min-height: 80vh; }
        .property-card { transition: transform 0.3s; }
        .property-card:hover { transform: translateY(-5px); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Prime Properties</h1>
            <p class="lead mb-5">Find your dream home</p>
            <button class="btn btn-light btn-lg">Browse Properties</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'property-management',
    title: 'Property Management',
    description: 'Professional property management services',
    icon: <Building className="w-6 h-6" />,
    category: 'Real Estate',
    color: 'from-blue-600 to-indigo-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PropertyCare Management</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #2563eb, #4338ca); min-height: 80vh; }
        .service-icon { font-size: 3rem; color: #2563eb; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">PropertyCare</h1>
            <p class="lead mb-5">Professional property management</p>
            <button class="btn btn-warning btn-lg">Our Services</button>
        </div>
    </section>
</body>
</html>`
  }
];
