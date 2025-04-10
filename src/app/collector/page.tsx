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
import { ThemeSwitcher } from "@/components/theme-switcher";
import Notifications from "@/components/dashboard/Notifications";

export default function CollectorDashboardPage() {
  const [activeTab, setActiveTab] = useState<string>("members");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="font-bold text-xl">PWA Burton - Collector</div>
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
            <div className="text-sm font-medium">Collector User</div>
            <Notifications />
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=collector"
                alt="Collector avatar"
              />
              <AvatarFallback>CU</AvatarFallback>
            </Avatar>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="container grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-4 md:p-8">
        <aside className="hidden md:block">
          <Card>
            <CardHeader>
              <CardTitle>Collector Dashboard</CardTitle>
              <CardDescription>Manage your assigned members</CardDescription>
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
                    <span>My Members</span>
                  </div>
                </Button>
                <Button
                  variant={activeTab === "payments" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("payments")}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Payment Management</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Collector Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Role</span>
                  <span className="text-sm font-medium">Collector</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Collector ID
                  </span>
                  <span className="text-sm font-medium">PWA-COL-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Assigned Members
                  </span>
                  <span className="text-sm font-medium">25</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main>
          <Card className="mb-6 md:hidden">
            <CardHeader>
              <CardTitle>Collector Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={activeTab === "members" ? "default" : "ghost"}
                  className="flex flex-col items-center justify-center p-3"
                  onClick={() => setActiveTab("members")}
                >
                  <Users className="h-5 w-5 mb-1" />
                  <span className="text-xs">My Members</span>
                </Button>
                <Button
                  variant={activeTab === "payments" ? "default" : "ghost"}
                  className="flex flex-col items-center justify-center p-3"
                  onClick={() => setActiveTab("payments")}
                >
                  <CreditCard className="h-5 w-5 mb-1" />
                  <span className="text-xs">Payments</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-md">
            {activeTab === "members" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">My Members</h2>
                <p className="text-muted-foreground mb-6">
                  View and manage your assigned members, update their
                  information, and track their payment status.
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
                <h2 className="text-2xl font-bold mb-4">Payment Management</h2>
                <p className="text-muted-foreground mb-6">
                  Record payments from members, view payment history, and submit
                  payment confirmations for approval.
                </p>
                <div className="p-8 text-center border rounded-md bg-muted/20">
                  <p className="text-muted-foreground">
                    Payment Management component will be implemented here
                  </p>
                </div>
              </div>
            )}
          </Card>
        </main>
      </div>
    </div>
  );
}
