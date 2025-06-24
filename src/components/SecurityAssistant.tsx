
import React, { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, Lock, Eye, EyeOff } from 'lucide-react';

interface SecurityAssistantProps {
  code: string;
}

export const SecurityAssistant = ({ code }: SecurityAssistantProps) => {
  const [securityCheck, setSecurityCheck] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const analyzeCode = () => {
    // Mock security analysis - in real implementation, this would use actual security scanning
    const issues = [];
    const suggestions = [];

    // Check for common security issues
    if (code.includes('eval(') || code.includes('innerHTML')) {
      issues.push({
        type: 'high',
        title: 'XSS Vulnerability',
        description: 'Avoid using eval() or innerHTML with user input'
      });
    }

    if (code.includes('http://') && !code.includes('https://')) {
      issues.push({
        type: 'medium',
        title: 'Insecure HTTP',
        description: 'Use HTTPS for all external resources'
      });
    }

    if (!code.includes('required') && code.includes('<input')) {
      suggestions.push({
        title: 'Form Validation',
        description: 'Add input validation to prevent spam and malicious data'
      });
    }

    if (!code.includes('autocomplete="off"') && code.includes('password')) {
      suggestions.push({
        title: 'Password Security',
        description: 'Consider adding autocomplete="off" for sensitive fields'
      });
    }

    // Always add some general suggestions
    suggestions.push(
      {
        title: 'Content Security Policy',
        description: 'Add CSP headers to prevent XSS attacks'
      },
      {
        title: 'Input Sanitization',
        description: 'Sanitize all user inputs on both client and server side'
      }
    );

    setSecurityCheck({
      issues,
      suggestions,
      score: Math.max(85 - (issues.length * 15), 50)
    });
  };

  const applySecurityFix = (fix: string) => {
    console.log('Applying security fix:', fix);
    // In real implementation, this would modify the code
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Shield className="w-8 h-8 text-green-400" />
          <h3 className="text-2xl font-bold text-white">Security Assistant</h3>
        </div>
        <p className="text-slate-400">AI-powered security analysis and recommendations</p>
      </div>

      {/* Security Scan Button */}
      {!securityCheck && (
        <div className="text-center">
          <button
            onClick={analyzeCode}
            disabled={!code}
            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            {code ? 'Analyze Security' : 'No Code to Analyze'}
          </button>
        </div>
      )}

      {/* Security Report */}
      {securityCheck && (
        <div className="space-y-4">
          {/* Security Score */}
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-white">Security Score</h4>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-slate-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    securityCheck.score >= 80 ? 'bg-green-500' :
                    securityCheck.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${securityCheck.score}%` }}
                />
              </div>
              <span className="text-white font-bold">{securityCheck.score}/100</span>
            </div>
          </div>

          {/* Security Issues */}
          {securityCheck.issues.length > 0 && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h4 className="font-semibold text-red-300">Security Issues Found</h4>
              </div>
              <div className="space-y-3">
                {securityCheck.issues.map((issue: any, index: number) => (
                  <div key={index} className="bg-red-900/30 rounded-lg p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-medium text-red-200">{issue.title}</h5>
                        <p className="text-sm text-red-300 mt-1">{issue.description}</p>
                      </div>
                      <button
                        onClick={() => applySecurityFix(issue.title)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Fix
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Suggestions */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <h4 className="font-semibold text-blue-300">Security Recommendations</h4>
            </div>
            <div className="space-y-3">
              {securityCheck.suggestions.map((suggestion: any, index: number) => (
                <div key={index} className="bg-blue-900/30 rounded-lg p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-medium text-blue-200">{suggestion.title}</h5>
                      <p className="text-sm text-blue-300 mt-1">{suggestion.description}</p>
                    </div>
                    <button
                      onClick={() => applySecurityFix(suggestion.title)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rescan Button */}
          <div className="text-center">
            <button
              onClick={analyzeCode}
              className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Re-scan Code
            </button>
          </div>
        </div>
      )}

      {/* Security Best Practices */}
      <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
        <div className="flex items-center space-x-2 mb-3">
          <Lock className="w-5 h-5 text-yellow-400" />
          <h4 className="font-semibold text-white">Security Best Practices</h4>
        </div>
        <ul className="text-sm text-slate-300 space-y-2">
          <li className="flex items-start space-x-2">
            <span className="text-green-400 mt-1">•</span>
            <span>Always validate and sanitize user inputs</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-400 mt-1">•</span>
            <span>Use HTTPS for all data transmission</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-400 mt-1">•</span>
            <span>Implement proper form validation and CSRF protection</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-400 mt-1">•</span>
            <span>Keep dependencies updated and scan for vulnerabilities</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
