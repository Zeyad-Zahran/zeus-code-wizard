
import { Template } from '../types/template';
import { Utensils, Coffee, Pizza, IceCream, Wine, Cookie } from 'lucide-react';

export const foodTemplates: Template[] = [
  {
    id: 'fine-dining',
    title: 'Fine Dining Restaurant',
    description: 'Elegant restaurant with tasting menu',
    icon: <Wine className="w-6 h-6" />,
    category: 'Food & Beverage',
    color: 'from-amber-600 to-orange-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Gourmet</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #d97706, #ea580c); min-height: 100vh; }
        .menu-section { border-bottom: 2px solid #d97706; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Le Gourmet</h1>
            <p class="lead mb-5">Culinary excellence redefined</p>
            <button class="btn btn-light btn-lg">Reserve Table</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop',
    description: 'Cozy coffee house with local vibe',
    icon: <Coffee className="w-6 h-6" />,
    category: 'Food & Beverage',
    color: 'from-yellow-600 to-amber-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrewCraft Coffee</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #ca8a04, #d97706); min-height: 80vh; }
        .coffee-card { background: rgba(255,255,255,0.95); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">BrewCraft</h1>
            <p class="lead mb-5">Artisan coffee, perfectly brewed</p>
            <button class="btn btn-light btn-lg">View Menu</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'pizza-place',
    title: 'Pizza Restaurant',
    description: 'Authentic Italian pizza delivery',
    icon: <Pizza className="w-6 h-6" />,
    category: 'Food & Beverage',
    color: 'from-red-500 to-orange-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tony's Pizza</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #ef4444, #ea580c); min-height: 80vh; }
        .pizza-size { border: 3px solid #ef4444; border-radius: 50%; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Tony's Pizza</h1>
            <p class="lead mb-5">Authentic Italian taste</p>
            <button class="btn btn-light btn-lg">Order Now</button>
        </div>
    </section>
</body>
</html>`
  }
];
