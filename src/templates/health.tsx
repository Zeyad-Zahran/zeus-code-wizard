
import { Template } from '../types/template';
import { Heart, Stethoscope, Activity, Brain, Pill, Shield } from 'lucide-react';

export const healthTemplates: Template[] = [
  {
    id: 'medical-clinic',
    title: 'Medical Clinic',
    description: 'Healthcare clinic website with appointments',
    icon: <Stethoscope className="w-6 h-6" />,
    category: 'Healthcare',
    color: 'from-blue-500 to-cyan-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HealthCare Plus</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #06b6d4, #0ea5e9); min-height: 80vh; }
        .service-card { border-left: 4px solid #06b6d4; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">HealthCare Plus</h1>
            <p class="lead mb-5">Your health is our priority</p>
            <button class="btn btn-light btn-lg">Book Appointment</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'dental-clinic',
    title: 'Dental Clinic',
    description: 'Modern dental practice website',
    icon: <Shield className="w-6 h-6" />,
    category: 'Healthcare',
    color: 'from-green-500 to-emerald-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bright Smile Dental</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #10b981, #059669); min-height: 80vh; }
        .treatment-card { background: linear-gradient(45deg, #f0fdf4, #dcfce7); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Bright Smile</h1>
            <p class="lead mb-5">Comprehensive dental care</p>
            <button class="btn btn-light btn-lg">Schedule Visit</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'wellness-center',
    title: 'Wellness Center',
    description: 'Holistic wellness and spa services',
    icon: <Heart className="w-6 h-6" />,
    category: 'Healthcare',
    color: 'from-purple-500 to-pink-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serenity Wellness</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #a855f7, #ec4899); min-height: 80vh; }
        .wellness-card { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Serenity</h1>
            <p class="lead mb-5">Find your inner peace</p>
            <button class="btn btn-light btn-lg">Explore Services</button>
        </div>
    </section>
</body>
</html>`
  }
];
