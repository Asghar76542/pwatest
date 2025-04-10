"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MoonIcon,
  SunIcon,
  User,
  CreditCard,
  Users,
  ClipboardList,
} from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Notifications from "@/components/dashboard/Notifications";
import SupabaseSettings from "@/components/dashboard/SupabaseSettings";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<string>("members");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="font-bold text-xl">PWA Burton - Admin</div>
            {/* Temporary navigation buttons - remove when authentication is re-enabled */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/dashboard">Member</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/admin">Admin</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/collector">Collector</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium">Admin User</div>
            <Notifications />
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
                alt="Admin avatar"
              />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="container grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-4 md:p-8">
        <aside className="hidden md:block">
          <Card>
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
              <CardDescription>Manage members and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <Button
                  variant={activeTab === "members" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("members")}
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Member Management</span>
                  </div>
                </Button>
                <Button
                  variant={activeTab === "payments" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("payments")}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Payment Approval</span>
                  </div>
                </Button>
                <Button
                  variant={activeTab === "reports" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("reports")}
                >
                  <div className="flex items-center gap-2">
                    <ClipboardList className="h-4 w-4" />
                    <span>Reports</span>
                  </div>
                </Button>
                <Button
                  variant={activeTab === "supabase" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("supabase")}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Supabase Settings</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Admin Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Role</span>
                  <span className="text-sm font-medium">Administrator</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Admin ID
                  </span>
                  <span className="text-sm font-medium">PWA-ADMIN-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Access Level
                  </span>
                  <span className="text-sm font-medium">Full Access</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main>
          <Card className="mb-6 md:hidden">
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant={activeTab === "members" ? "default" : "ghost"}
                  className="flex flex-col items-center justify-center p-3"
                  onClick={() => setActiveTab("members")}
                >
                  <Users className="h-5 w-5 mb-1" />
                  <span className="text-xs">Members</span>
                </Button>
                <Button
                  variant={activeTab === "payments" ? "default" : "ghost"}
                  className="flex flex-col items-center justify-center p-3"
                  onClick={() => setActiveTab("payments")}
                >
                  <CreditCard className="h-5 w-5 mb-1" />
                  <span className="text-xs">Payments</span>
                </Button>
                <Button
                  variant={activeTab === "reports" ? "default" : "ghost"}
                  className="flex flex-col items-center justify-center p-3"
                  onClick={() => setActiveTab("reports")}
                >
                  <ClipboardList className="h-5 w-5 mb-1" />
                  <span className="text-xs">Reports</span>
                </Button>
                <Button
                  variant={activeTab === "supabase" ? "default" : "ghost"}
                  className="flex flex-col items-center justify-center p-3"
                  onClick={() => setActiveTab("supabase")}
                >
                  <CreditCard className="h-5 w-5 mb-1" />
                  <span className="text-xs">Supabase</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-md">
            {activeTab === "members" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Member Management</h2>
                <p className="text-muted-foreground mb-6">
                  This section will allow you to manage all members, add new
                  members, edit existing ones, and delete members if necessary.
                </p>
                <div className="p-8 text-center border rounded-md bg-muted/20">
                  <p className="text-muted-foreground">
                    Member Management component will be implemented here
                  </p>
                </div>
              </div>
            )}

            {activeTab === "payments" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Payment Approval</h2>
                <p className="text-muted-foreground mb-6">
                  Review and approve payment requests from collectors, view
                  payment history, and manage payment settings.
                </p>
                <div className="p-8 text-center border rounded-md bg-muted/20">
                  <p className="text-muted-foreground">
                    Payment Approval component will be implemented here
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reports" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Reports</h2>
                <p className="text-muted-foreground mb-6">
                  Generate and view reports on membership, payments, and other
                  important metrics.
                </p>
                <div className="p-8 text-center border rounded-md bg-muted/20">
                  <p className="text-muted-foreground">
                    Reports component will be implemented here
                  </p>
                </div>
              </div>
            )}

            {activeTab === "supabase" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Supabase Settings</h2>
                <p className="text-muted-foreground mb-6">
                  Configure your Supabase connection for authentication and
                  database access.
                </p>
                <div className="max-w-md mx-auto">
                  <SupabaseSettings />
                </div>
              </div>
            )}
          </Card>
        </main>
      </div>
    </div>
  );
}
