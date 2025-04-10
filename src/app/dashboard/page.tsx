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
import { MoonIcon, SunIcon, User, CreditCard, Users } from "lucide-react";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Notifications from "@/components/dashboard/Notifications";

export default function DashboardPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="font-bold text-xl">PWA Burton</div>
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
            <div className="text-sm font-medium">John Doe</div>
            <Notifications />
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                alt="User avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="container grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-4 md:p-8">
        <aside className="hidden md:block">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Manage your membership</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Profile Overview</span>
                  </div>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Payment Management</span>
                  </div>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Family Members</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Membership Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <span className="text-sm font-medium">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Member ID
                  </span>
                  <span className="text-sm font-medium">PWA-1234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Joined</span>
                  <span className="text-sm font-medium">Jan 15, 2022</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main>
          <Card className="mb-6 md:hidden">
            <CardHeader>
              <CardTitle>Membership Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className="font-medium">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Member ID</div>
                  <div className="font-medium">PWA-1234</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Joined</div>
                  <div className="font-medium">Jan 15, 2022</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Profile Overview</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Payment Management</span>
              </TabsTrigger>
              <TabsTrigger value="family" className="flex items-center gap-2">
                <Users className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Family Members</span>
              </TabsTrigger>
            </TabsList>

            <DashboardTabs />
          </Tabs>
        </main>
      </div>
    </div>
  );
}
