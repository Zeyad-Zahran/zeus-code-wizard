
import React from 'react';
import { Code, Shield } from 'lucide-react';
import { Template } from '../types/template';

export const authenticationTemplates: Template[] = [
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
    id: 'register',
    title: 'Registration Page',
    description: 'Sign up form with validation',
    icon: <Shield className="w-6 h-6" />,
    category: 'Authentication',
    color: 'from-green-500 to-teal-500',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Zeus Code Wizard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background: linear-gradient(135deg, #059669, #0d9488); min-height: 100vh; }
        .register-card { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body class="d-flex align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <div class="register-card card shadow-lg border-0 rounded-4">
                    <div class="card-body p-5">
                        <h2 class="text-center mb-4">Create Account</h2>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="First Name">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Last Name">
                                </div>
                                <div class="col-12">
                                    <input type="email" class="form-control" placeholder="Email">
                                </div>
                                <div class="col-12">
                                    <input type="password" class="form-control" placeholder="Password">
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-success btn-lg w-100">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
  }
];
