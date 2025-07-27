import React, { useState, useEffect } from 'react';
import { Users, Globe, Activity, Shield, Ban, Trash2, Eye, UserX, Calendar, Search, Filter } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface User {
  id: string;
  user_id: string;
  email: string;
  display_name: string;
  role: string;
  is_blocked: boolean;
  created_at: string;
  updated_at: string;
}

interface Website {
  id: string;
  user_id: string;
  title: string;
  description: string;
  file_name: string;
  file_url: string;
  file_size: number;
  created_at: string;
  profile?: {
    email: string;
    display_name: string;
  };
}

interface Activity {
  id: string;
  user_id: string;
  action: string;
  details: any;
  created_at: string;
  profile?: {
    email: string;
    display_name: string;
  };
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [websites, setWebsites] = useState<Website[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalWebsites: 0,
    todayWebsites: 0,
    activeUsers: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      // Fetch users
      const { data: usersData, error: usersError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (usersError) throw usersError;
      setUsers(usersData || []);

      // Fetch websites
      const { data: websitesData, error: websitesError } = await supabase
        .from('websites')
        .select('*')
        .order('created_at', { ascending: false });

      if (websitesError) throw websitesError;

      // Fetch profiles for websites
      const websitesWithProfiles = await Promise.all(
        (websitesData || []).map(async (website) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('email, display_name')
            .eq('user_id', website.user_id)
            .single();

          return {
            ...website,
            profile: profile || null
          };
        })
      );
      setWebsites(websitesWithProfiles);

      // Fetch recent activities
      const { data: activitiesData, error: activitiesError } = await supabase
        .from('user_activity')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (activitiesError) throw activitiesError;

      // Fetch profiles for activities
      const activitiesWithProfiles = await Promise.all(
        (activitiesData || []).map(async (activity) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('email, display_name')
            .eq('user_id', activity.user_id)
            .single();

          return {
            ...activity,
            profile: profile || null
          };
        })
      );
      setActivities(activitiesWithProfiles);

      // Calculate stats
      const today = new Date().toISOString().split('T')[0];
      const todayWebsites = websitesData?.filter(w => 
        w.created_at.split('T')[0] === today
      ).length || 0;

      setStats({
        totalUsers: usersData?.length || 0,
        totalWebsites: websitesData?.length || 0,
        todayWebsites,
        activeUsers: usersData?.filter(u => !u.is_blocked).length || 0,
      });

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlockUser = async (userId: string, isBlocked: boolean) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ is_blocked: !isBlocked })
        .eq('user_id', userId);

      if (error) throw error;

      await supabase
        .from('user_activity')
        .insert({
          user_id: userId,
          action: isBlocked ? 'user_unblocked' : 'user_blocked',
          details: { performed_by: 'admin' },
        });

      toast.success(`User ${isBlocked ? 'unblocked' : 'blocked'} successfully`);
      fetchDashboardData();
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user status');
    }
  };

  const handleDeleteWebsite = async (websiteId: string) => {
    try {
      const { error } = await supabase
        .from('websites')
        .delete()
        .eq('id', websiteId);

      if (error) throw error;

      toast.success('Website deleted successfully');
      fetchDashboardData();
    } catch (error) {
      console.error('Error deleting website:', error);
      toast.error('Failed to delete website');
    }
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.display_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredWebsites = websites.filter(website =>
    website.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    website.profile?.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-slate-400">Manage users and monitor system activity</p>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-700"
          >
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Websites</p>
                <p className="text-2xl font-bold text-white">{stats.totalWebsites}</p>
              </div>
              <Globe className="w-8 h-8 text-green-400" />
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Today's Websites</p>
                <p className="text-2xl font-bold text-white">{stats.todayWebsites}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-400" />
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-white">{stats.activeUsers}</p>
              </div>
              <Activity className="w-8 h-8 text-orange-400" />
            </div>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search users or websites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-slate-800/50 border-slate-600">
            <TabsTrigger value="users" className="text-slate-300 data-[state=active]:text-white">
              Users ({filteredUsers.length})
            </TabsTrigger>
            <TabsTrigger value="websites" className="text-slate-300 data-[state=active]:text-white">
              Websites ({filteredWebsites.length})
            </TabsTrigger>
            <TabsTrigger value="activity" className="text-slate-300 data-[state=active]:text-white">
              Activity Log
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <div className="grid gap-4">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="bg-slate-800/50 border-slate-600 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{user.display_name || user.email}</h3>
                        <p className="text-slate-400 text-sm">{user.email}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                            {user.role}
                          </Badge>
                          {user.is_blocked && (
                            <Badge variant="destructive">Blocked</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant={user.is_blocked ? "default" : "destructive"}
                        onClick={() => handleBlockUser(user.user_id, user.is_blocked)}
                      >
                        {user.is_blocked ? (
                          <>
                            <Shield className="w-4 h-4 mr-1" />
                            Unblock
                          </>
                        ) : (
                          <>
                            <Ban className="w-4 h-4 mr-1" />
                            Block
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="websites">
            <div className="grid gap-4">
              {filteredWebsites.map((website) => (
                <Card key={website.id} className="bg-slate-800/50 border-slate-600 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{website.title}</h3>
                        <p className="text-slate-400 text-sm">
                          by {website.profile?.display_name || website.profile?.email}
                        </p>
                        <p className="text-slate-500 text-xs">
                          Created: {new Date(website.created_at).toLocaleDateString()}
                        </p>
                        {website.description && (
                          <p className="text-slate-400 text-sm mt-1">{website.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(website.file_url, '_blank')}
                        className="border-slate-600 text-white hover:bg-slate-700"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteWebsite(website.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="grid gap-4">
              {activities.map((activity) => (
                <Card key={activity.id} className="bg-slate-800/50 border-slate-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Activity className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-white text-sm">
                          <span className="font-semibold">
                            {activity.profile?.display_name || activity.profile?.email}
                          </span>
                          {' '}
                          <span className="text-slate-400">{activity.action.replace('_', ' ')}</span>
                        </p>
                        <p className="text-slate-500 text-xs">
                          {new Date(activity.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};