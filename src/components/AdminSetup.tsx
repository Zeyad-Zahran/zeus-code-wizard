import React, { useState } from 'react';
import { Shield, UserPlus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface AdminSetupProps {
  onAdminCreated: () => void;
}

export const AdminSetup = ({ onAdminCreated }: AdminSetupProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create admin user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            display_name: 'Admin User'
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        // Update the user's role to admin
        const { error: roleError } = await supabase
          .from('profiles')
          .update({ role: 'admin' })
          .eq('user_id', data.user.id);

        if (roleError) throw roleError;

        toast.success('Admin user created successfully! You can now log in.');
        onAdminCreated();
      }
    } catch (error: any) {
      console.error('Error creating admin:', error);
      toast.error(error.message || 'Failed to create admin user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-slate-800/50 border-slate-600 p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Setup</h1>
          <p className="text-slate-400">Create the first admin user for Zeus AI Coder</p>
        </div>

        <form onSubmit={handleCreateAdmin} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {isLoading ? (
              'Creating Admin...'
            ) : (
              <>
                <UserPlus className="w-4 h-4 mr-2" />
                Create Admin User
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
          <p className="text-blue-300 text-sm">
            <strong>Note:</strong> This will create the first admin user. After creation, you can log in with these credentials to access the admin dashboard.
          </p>
        </div>
      </Card>
    </div>
  );
};