
import { Template } from '../types/template';
import { ShoppingBag, Store, CreditCard, Package, Truck, Gift } from 'lucide-react';

export const ecommerceTemplates: Template[] = [
  {
    id: 'fashion-store',
    title: 'Fashion Store',
    description: 'Modern fashion e-commerce platform',
    icon: <ShoppingBag className="w-6 h-6" />,
    category: 'E-commerce',
    color: 'from-pink-500 to-rose-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxe Fashion</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #ec4899, #f43f5e); min-height: 80vh; }
        .product-card { transition: transform 0.3s; }
        .product-card:hover { transform: translateY(-5px); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">Luxe Fashion</h1>
            <p class="lead mb-5">Discover your style</p>
            <button class="btn btn-light btn-lg">Shop Collection</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'electronics-store',
    title: 'Electronics Store',
    description: 'Tech and electronics marketplace',
    icon: <Store className="w-6 h-6" />,
    category: 'E-commerce',
    color: 'from-blue-600 to-indigo-700',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechHub Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #2563eb, #4338ca); min-height: 80vh; }
        .tech-card { background: linear-gradient(45deg, #f8fafc, #e2e8f0); }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">TechHub</h1>
            <p class="lead mb-5">Latest technology at your fingertips</p>
            <button class="btn btn-warning btn-lg">Browse Products</button>
        </div>
    </section>
</body>
</html>`
  },
  {
    id: 'bookstore',
    title: 'Online Bookstore',
    description: 'Digital bookstore with recommendations',
    icon: <Package className="w-6 h-6" />,
    category: 'E-commerce',
    color: 'from-amber-500 to-orange-600',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PageTurner Books</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .hero { background: linear-gradient(135deg, #f59e0b, #ea580c); min-height: 80vh; }
        .book-cover { height: 200px; background: #f3f4f6; border-radius: 8px; }
    </style>
</head>
<body>
    <section class="hero d-flex align-items-center text-white">
        <div class="container text-center">
            <h1 class="display-2 fw-bold mb-4">PageTurner</h1>
            <p class="lead mb-5">Your next great read awaits</p>
            <button class="btn btn-light btn-lg">Explore Books</button>
        </div>
    </section>
</body>
</html>`
  }
];
