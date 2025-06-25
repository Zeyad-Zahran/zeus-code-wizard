
import { Template } from '../types/template';
import { Plane, MapPin, Camera, Compass, Mountain, Waves } from 'lucide-react';

export const travelTemplates: Template[] = [
  {
    id: 'travel-blog',
    title: 'Travel Blog',
    description: 'Personal travel experiences and guides',
    icon: <Camera className="w-6 h-6" />,
    category: 'Travel',
    color: 'from-teal-500 to-blue-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wanderlust Diaries</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #14b8a6, #2563eb); min-height: 100vh; }
        .travel-card { transition: transform 0.3s; }
        .travel-card:hover { transform: scale(1.02); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Wanderlust Diaries</h1>
            <p class="lead mb-5">Stories from around the world</p>
            <button class="btn btn-light btn-lg">Read Stories</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'adventure-tours',
    title: 'Adventure Tours',
    description: 'Extreme sports and adventure travel',
    icon: <Mountain className="w-6 h-6" />,
    category: 'Travel',
    color: 'from-green-600 to-emerald-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Epic Adventures</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #059669, #047857); min-height: 100vh; }
        .adventure-card { background: linear-gradient(45deg, #f0fdf4, #dcfce7); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Epic Adventures</h1>
            <p class="lead mb-5">Push your limits, embrace the wild</p>
            <button class="btn btn-light btn-lg">Book Adventure</button>
        </div>
    </section>
</body>
</html>`
  }
];
