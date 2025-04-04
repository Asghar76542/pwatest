"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, X, Phone, Mail, User, MapPin } from "lucide-react";

interface ProfileOverviewProps {
  userData?: {
    name: string;
    email: string;
    phone: string;
    address: string;
    membershipId: string;
    membershipStatus: "active" | "pending" | "expired";
    collector: {
      name: string;
      phone: string;
      email: string;
    };
  };
}

export default function ProfileOverview({ userData }: ProfileOverviewProps) {
  const defaultUserData = {
    name: "Mohammed Ahmed",
    email: "mohammed.ahmed@example.com",
    phone: "07700 900123",
    address: "123 High Street, Burton Upon Trent, DE14 1JH",
    membershipId: "PWA-2023-0042",
    membershipStatus: "active" as const,
    collector: {
      name: "Imran Khan",
      phone: "07700 900456",
      email: "imran.khan@pwaburton.org",
    },
  };

  const user = userData || defaultUserData;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Here you would typically save the data to your backend
    // For now, we'll just update the local state
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original user data
    setFormData(user);
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "expired":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-full space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Profile Overview</h2>
        <Button
          variant={isEditing ? "outline" : "default"}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personal Information Card */}
        <Card className="col-span-2 bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Personal Information</CardTitle>
            {isEditing && (
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed"
                  alt={user.name}
                />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Membership ID: {user.membershipId}
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-sm mr-2">Status:</span>
                  <Badge
                    variant={
                      user.membershipStatus === "active"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {user.membershipStatus.charAt(0).toUpperCase() +
                      user.membershipStatus.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <p>{user.name}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <p>{user.email}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <p>{user.phone}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  {isEditing ? (
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <p className="truncate">{user.address}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Collector Information Card */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Your Collector</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Imran"
                  alt={user.collector.name}
                />
                <AvatarFallback>
                  {user.collector.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{user.collector.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Assigned Collector
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm">{user.collector.phone}</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm">{user.collector.email}</p>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="outline" className="w-full">
                Contact Collector
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
