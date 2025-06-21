
import React, { useState } from 'react';
import { Send, Sparkles, Loader2, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface AIPanelProps {
  onCodeGenerated: (code: string) => void;
  onTabChange: (tab: string) => void;
}

export const AIPanel = ({ onCodeGenerated, onTabChange }: AIPanelProps) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<Array<{type: 'user' | 'ai', content: string}>>([]);

  const examplePrompts = [
    "Create a responsive login page with HTML, CSS, and JavaScript",
    "Build a todo list app with add, delete, and mark complete functionality",
    "Generate a modern landing page with hero section and features",
    "Create a contact form with validation using Bootstrap 5",
    "Build a dashboard with sidebar navigation and charts"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setHistory(prev => [...prev, { type: 'user', content: prompt }]);

    try {
      // Simulate AI generation (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockCode = generateCodeBasedOnPrompt(prompt);
      onCodeGenerated(mockCode);
      
      setHistory(prev => [...prev, { 
        type: 'ai', 
        content: `Generated code based on your request: "${prompt}". The code has been added to the editor.` 
      }]);
      
      toast.success('Code generated successfully!');
      
      // Switch to editor tab to show the generated code
      setTimeout(() => onTabChange('editor'), 500);
      
    } catch (error) {
      toast.error('Failed to generate code. Please try again.');
      setHistory(prev => [...prev, { 
        type: 'ai', 
        content: 'Sorry, I encountered an error while generating the code. Please try again.' 
      }]);
    } finally {
      setIsGenerating(false);
      setPrompt('');
    }
  };

  const generateCodeBasedOnPrompt = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('contact form') && lowerPrompt.includes('bootstrap')) {
      return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px 0;
        }
        .contact-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 600px;
            margin: 0 auto;
        }
        .form-control:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .required {
            color: #dc3545;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="contact-container">
            <h2 class="text-center mb-4">Contact Us</h2>
            <form id="contactForm" novalidate>
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Name <span class="required">*</span>
                    </label>
                    <input type="text" class="form-control" id="name" required>
                    <div class="invalid-feedback">Please provide a valid name.</div>
                </div>
                
                <div class="mb-3">
                    <label for="email" class="form-label">
                        Email <span class="required">*</span>
                    </label>
                    <input type="email" class="form-control" id="email" required>
                    <div class="invalid-feedback">Please provide a valid email.</div>
                </div>
                
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone (Optional)</label>
                    <input type="tel" class="form-control" id="phone">
                    <div class="invalid-feedback">Please provide a valid phone number.</div>
                </div>
                
                <div class="mb-3">
                    <label for="subject" class="form-label">
                        Subject <span class="required">*</span>
                    </label>
                    <input type="text" class="form-control" id="subject" required>
                    <div class="invalid-feedback">Please provide a subject.</div>
                </div>
                
                <div class="mb-3">
                    <label for="message" class="form-label">
                        Message <span class="required">*</span>
                    </label>
                    <textarea class="form-control" id="message" rows="5" required></textarea>
                    <div class="invalid-feedback">Please provide a message.</div>
                </div>
                
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
            </form>
            
            <div id="successMessage" class="alert alert-success mt-3" style="display: none;">
                <strong>Thank you!</strong> Your message has been sent successfully.
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        (function() {
            'use strict';
            
            const form = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');
            
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                // Custom validation
                let isValid = true;
                const name = document.getElementById('name');
                const email = document.getElementById('email');
                const phone = document.getElementById('phone');
                const subject = document.getElementById('subject');
                const message = document.getElementById('message');
                
                // Reset previous validation states
                [name, email, phone, subject, message].forEach(field => {
                    field.classList.remove('is-valid', 'is-invalid');
                });
                
                // Validate name
                if (!name.value.trim()) {
                    name.classList.add('is-invalid');
                    isValid = false;
                } else {
                    name.classList.add('is-valid');
                }
                
                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email.value.trim() || !emailRegex.test(email.value)) {
                    email.classList.add('is-invalid');
                    isValid = false;
                } else {
                    email.classList.add('is-valid');
                }
                
                // Validate phone (optional but if provided, should be valid)
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (phone.value.trim() && !phoneRegex.test(phone.value.replace(/\s/g, ''))) {
                    phone.classList.add('is-invalid');
                    isValid = false;
                } else if (phone.value.trim()) {
                    phone.classList.add('is-valid');
                }
                
                // Validate subject
                if (!subject.value.trim()) {
                    subject.classList.add('is-invalid');
                    isValid = false;
                } else {
                    subject.classList.add('is-valid');
                }
                
                // Validate message
                if (!message.value.trim()) {
                    message.classList.add('is-invalid');
                    isValid = false;
                } else {
                    message.classList.add('is-valid');
                }
                
                if (isValid) {
                    // Show success message
                    successMessage.style.display = 'block';
                    form.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                }
            });
        })();
    </script>
</body>
</html>`;
    }
    
    if (lowerPrompt.includes('login')) {
      return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b0764 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
        .login-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        .btn-primary {
            background: #f97316;
            border-color: #f97316;
        }
        .btn-primary:hover {
            background: #ea580c;
            border-color: #ea580c;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <div class="login-container p-5">
                    <h2 class="text-center mb-4">Welcome Back</h2>
                    <form id="loginForm">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            alert('Login successful!');
        });
    </script>
</body>
</html>`;
    }
    
    // Default response for other prompts
    return `<!-- Generated code for: ${prompt} -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Content</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .generated-content {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #007bff;
        }
    </style>
</head>
<body>
    <div class="generated-content">
        <h1>Your Request Has Been Processed</h1>
        <p><strong>Request:</strong> ${prompt}</p>
        <p>This is a generated response. In a real implementation, this would be created by an AI service based on your specific requirements.</p>
        <p>The generated code includes basic HTML structure and styling to get you started.</p>
    </div>
</body>
</html>`;
  };

  return (
    <div className="space-y-6">
      {/* Chat History */}
      {history.length > 0 && (
        <div className="bg-slate-800/50 rounded-lg p-4 max-h-64 overflow-y-auto space-y-3">
          {history.map((item, index) => (
            <div key={index} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                item.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 text-slate-100'
              }`}>
                <p className="text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="space-y-4">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to create... (e.g., 'Create a responsive login page with email and password fields')"
            className="w-full h-32 bg-slate-800 text-white p-4 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none resize-none"
            disabled={isGenerating}
          />
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all"
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Example Prompts */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-300">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Try these examples:</span>
          </div>
          <div className="grid gap-2">
            {examplePrompts.map((example, index) => (
              <button
                key={index}
                onClick={() => setPrompt(example)}
                className="text-left text-sm text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 p-3 rounded-lg transition-all border border-slate-700 hover:border-slate-600"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Info */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">AI Capabilities</h3>
        </div>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>• Generate complete web applications</li>
          <li>• Debug and optimize existing code</li>
          <li>• Create responsive designs with modern frameworks</li>
          <li>• Support for HTML, CSS, JavaScript, React, and more</li>
        </ul>
      </div>
    </div>
  );
};
