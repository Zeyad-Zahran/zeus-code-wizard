
import { Template } from '../types/template';
import { Cpu, Smartphone, Monitor, Wifi, Database, Cloud } from 'lucide-react';

export const technologyTemplates: Template[] = [
  {
    id: 'tech-startup',
    title: 'Tech Startup',
    description: 'Innovative technology company showcase',
    icon: <Cpu className="w-6 h-6" />,
    category: 'Technology',
    color: 'from-blue-600 to-purple-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InnovateTech</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #2563eb, #7c3aed); min-height: 100vh; }
        .tech-feature { background: linear-gradient(45deg, #f8fafc, #e2e8f0); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">InnovateTech</h1>
            <p class="lead mb-5">Building tomorrow's solutions today</p>
            <button class="btn btn-light btn-lg">Learn More</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'app-landing',
    title: 'Mobile App Landing',
    description: 'Mobile application promotion page',
    icon: <Smartphone className="w-6 h-6" />,
    category: 'Technology',
    color: 'from-green-500 to-blue-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AppLaunch</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #10b981, #2563eb); min-height: 100vh; }
        .phone-mockup { width: 300px; height: 600px; background: #000; border-radius: 30px; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">AppLaunch</h1>
            <p class="lead mb-5">Revolutionary mobile experience</p>
            <button class="btn btn-light btn-lg">Download App</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud computing and hosting platform',
    icon: <Cloud className="w-6 h-6" />,
    category: 'Technology',
    color: 'from-sky-500 to-indigo-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CloudVault</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #0ea5e9, #4338ca); min-height: 100vh; }
        .cloud-icon { font-size: 4rem; color: #0ea5e9; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">CloudVault</h1>
            <p class="lead mb-5">Secure cloud infrastructure</p>
            <button class="btn btn-light btn-lg">Get Started</button>
        </div>
    </section>
</body>
</html>`
  }
];
