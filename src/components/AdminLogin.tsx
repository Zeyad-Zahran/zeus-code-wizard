import React, { useState } from 'react';
import { Shield, Lock, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToRegular: () => void;
}

export const AdminLogin = ({ onLoginSuccess, onBackToRegular }: AdminLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Check if user is admin
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', data.user.id)
          .single();

        if (profileError || profile?.role !== 'admin') {
          await supabase.auth.signOut();
          throw new Error('غير مصرح لك بالوصول للوحة الإدارة');
        }

        toast.success('تم تسجيل الدخول بنجاح!');
        onLoginSuccess();
      }
    } catch (error: any) {
      console.error('خطأ في تسجيل الدخول:', error);
      toast.error(error.message || 'فشل في تسجيل الدخول');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-slate-800/50 border-slate-600 p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">تسجيل دخول الإدارة</h1>
          <p className="text-slate-400">لوحة تحكم Zeus AI Coder</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <div className="relative">
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="email"
                placeholder="البريد الإلكتروني للإدارة"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 pr-10"
                dir="ltr"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 pr-10"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
          >
            {isLoading ? 'جاري تسجيل الدخول...' : 'دخول'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={onBackToRegular}
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            العودة لتسجيل الدخول العادي
          </button>
        </div>

        <div className="mt-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
          <p className="text-red-300 text-sm text-center">
            هذه منطقة مقيدة للإدارة فقط
          </p>
        </div>
      </Card>
    </div>
  );
};