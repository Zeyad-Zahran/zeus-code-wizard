
import { Template } from '../types/template';
import { Dumbbell, Activity, Heart, Target, Trophy, Users } from 'lucide-react';

export const fitnessTemplates: Template[] = [
  {
    id: 'personal-trainer',
    title: 'Personal Trainer',
    description: 'Individual fitness coaching services',
    icon: <Target className="w-6 h-6" />,
    category: 'Health & Fitness',
    color: 'from-orange-500 to-red-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitPro Training</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #ea580c, #dc2626); min-height: 100vh; }
        .transformation-card { background: linear-gradient(45deg, #fef3c7, #fed7aa); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">FitPro Training</h1>
            <p class="lead mb-5">Transform your body, transform your life</p>
            <button class="btn btn-light btn-lg">Start Training</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'yoga-studio',
    title: 'Yoga Studio',
    description: 'Peaceful yoga classes and meditation',
    icon: <Heart className="w-6 h-6" />,
    category: 'Health & Fitness',
    color: 'from-purple-500 to-pink-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zen Yoga Studio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #a855f7, #ec4899); min-height: 100vh; }
        .zen-card { background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Zen Yoga</h1>
            <p class="lead mb-5">Find your inner balance</p>
            <button class="btn btn-light btn-lg">Join Classes</button>
        </div>
    </section>
</body>
</html>`
  }
];
