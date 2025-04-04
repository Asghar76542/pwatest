"use client";

import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type NotificationType = "payment" | "membership" | "system" | "family";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  date: string;
  read: boolean;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate fetching notifications
    const mockNotifications: Notification[] = [
      {
        id: "1",
        title: "Payment Due",
        message: "Your monthly payment of £50 is due in 3 days.",
        type: "payment",
        date: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
        read: false,
      },
      {
        id: "2",
        title: "Membership Renewal",
        message:
          "Your annual membership will expire in 14 days. Please renew to maintain your benefits.",
        type: "membership",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        read: false,
      },
      {
        id: "3",
        title: "Community Event",
        message:
          "Join us for the Eid celebration on July 10th at the community center.",
        type: "system",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
        read: true,
      },
      {
        id: "4",
        title: "Family Member Added",
        message:
          "Your family member 'Zara Ahmed' has been successfully added to your profile.",
        type: "family",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
        read: true,
      },
    ];

    setNotifications(mockNotifications);
  }, []);

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
  };

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  const getTypeColor = (type: NotificationType) => {
    switch (type) {
      case "payment":
        return "bg-red-500";
      case "membership":
        return "bg-blue-500";
      case "system":
        return "bg-green-500";
      case "family":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between border-b p-3">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "flex cursor-pointer gap-3 p-3 hover:bg-muted",
                    !notification.read && "bg-muted/50",
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div
                    className={cn(
                      "mt-1 h-2 w-2 flex-shrink-0 rounded-full",
                      getTypeColor(notification.type),
                    )}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">
                        {getRelativeTime(notification.date)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs font-normal">
                        {notification.type.charAt(0).toUpperCase() +
                          notification.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-muted-foreground">
              No notifications
            </div>
          )}
        </div>
        <div className="border-t p-3 text-center">
          <Button variant="ghost" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
