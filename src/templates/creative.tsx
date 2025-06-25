
import { Template } from '../types/template';
import { Camera, Palette, Music, Video, Feather, Brush, Film, Mic } from 'lucide-react';

export const creativeTemplates: Template[] = [
  {
    id: 'photography-studio',
    title: 'Photography Studio',
    description: 'Professional photography studio with gallery',
    icon: <Camera className="w-6 h-6" />,
    category: 'Creative',
    color: 'from-rose-500 to-pink-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lens Studio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(45deg, #1f2937, #374151); min-height: 100vh; }
        .portfolio-item { height: 300px; background: #f3f4f6; transition: transform 0.3s; }
        .portfolio-item:hover { transform: scale(1.05); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Lens Studio</h1>
            <p class="lead mb-5">Capturing life's precious moments</p>
            <button class="btn btn-primary btn-lg">View Portfolio</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'art-gallery',
    title: 'Art Gallery',
    description: 'Modern art gallery showcase',
    icon: <Palette className="w-6 h-6" />,
    category: 'Creative',
    color: 'from-purple-500 to-indigo-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Art Gallery</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #7c3aed, #a855f7); min-height: 80vh; }
        .artwork { height: 250px; background: #f8f9fa; border: 3px solid #fff; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-3 fw-bold mb-4">Contemporary Art</h1>
            <p class="lead mb-5">Discover extraordinary artistic expressions</p>
            <button class="btn btn-light btn-lg">Explore Collection</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'music-producer',
    title: 'Music Producer',
    description: 'Music producer portfolio and services',
    icon: <Music className="w-6 h-6" />,
    category: 'Creative',
    color: 'from-orange-500 to-red-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BeatMaster Studio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #ea580c, #dc2626); min-height: 100vh; }
        .track-player { background: rgba(0,0,0,0.8); border-radius: 15px; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">BeatMaster</h1>
            <p class="lead mb-5">Professional Music Production</p>
            <button class="btn btn-outline-light btn-lg">Listen to Tracks</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'Video production company showcase',
    icon: <Video className="w-6 h-6" />,
    category: 'Creative',
    color: 'from-blue-600 to-purple-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineVision Studios</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #2563eb, #7c3aed); min-height: 100vh; }
        .video-showcase { height: 300px; background: #000; border-radius: 10px; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">CineVision</h1>
            <p class="lead mb-5">Creating cinematic experiences</p>
            <button class="btn btn-primary btn-lg">View Showreel</button>
        </div>
    </section>
</body>
</html>`
  }
];
