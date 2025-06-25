
import { Template } from '../types/template';
import { GraduationCap, BookOpen, Users, Award, Calculator, Globe } from 'lucide-react';

export const educationTemplates: Template[] = [
  {
    id: 'online-university',
    title: 'Online University',
    description: 'Complete online education platform',
    icon: <GraduationCap className="w-6 h-6" />,
    category: 'Education',
    color: 'from-blue-600 to-indigo-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduTech University</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #2563eb, #4338ca); min-height: 80vh; }
        .course-card { transition: transform 0.3s; }
        .course-card:hover { transform: translateY(-5px); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">EduTech University</h1>
            <p class="lead mb-5">Education for the digital age</p>
            <button class="btn btn-warning btn-lg">Enroll Today</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'coding-bootcamp',
    title: 'Coding Bootcamp',
    description: 'Intensive programming training program',
    icon: <Award className="w-6 h-6" />,
    category: 'Education',
    color: 'from-green-600 to-teal-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCamp Pro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #059669, #0d9488); min-height: 80vh; }
        .skill-badge { background: #10b981; color: white; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">CodeCamp Pro</h1>
            <p class="lead mb-5">From zero to full-stack developer</p>
            <button class="btn btn-light btn-lg">Start Coding</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'language-school',
    title: 'Language School',
    description: 'Online language learning platform',
    icon: <Globe className="w-6 h-6" />,
    category: 'Education',
    color: 'from-orange-500 to-red-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LinguaMaster</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #ea580c, #dc2626); min-height: 80vh; }
        .language-flag { width: 60px; height: 40px; background: #f3f4f6; border-radius: 4px; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">LinguaMaster</h1>
            <p class="lead mb-5">Speak the world's languages</p>
            <button class="btn btn-light btn-lg">Start Learning</button>
        </div>
    </section>
</body>
</html>`
  }
];
