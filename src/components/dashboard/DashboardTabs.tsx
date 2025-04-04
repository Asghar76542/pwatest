"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { User, CreditCard, Users } from "lucide-react";
import ProfileOverview from "./ProfileOverview";
import PaymentManagement from "./PaymentManagement";
import FamilyMemberManagement from "./FamilyMemberManagement";

interface DashboardTabsProps {
  defaultTab?: string;
}

export default function DashboardTabs({
  defaultTab = "profile",
}: DashboardTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full bg-background">
      <Tabs
        defaultValue={defaultTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="border-b">
          <div className="container mx-auto px-4 py-2">
            <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Profile Overview</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden md:inline">Payment Management</span>
              </TabsTrigger>
              <TabsTrigger value="family" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Family Members</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Card className="p-6 shadow-md">
            <TabsContent value="profile" className="mt-0">
              <ProfileOverview />
            </TabsContent>

            <TabsContent value="payments" className="mt-0">
              <PaymentManagement />
            </TabsContent>

            <TabsContent value="family" className="mt-0">
              <FamilyMemberManagement />
            </TabsContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
}
