"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function SupabaseSettings() {
  const [supabaseUrl, setSupabaseUrl] = useState("");
  const [supabaseKey, setSupabaseKey] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleSave = async () => {
    if (!supabaseUrl || !supabaseKey) {
      setSaveStatus("error");
      setStatusMessage("Both URL and Key are required");
      return;
    }

    setIsSaving(true);
    setSaveStatus("idle");
    setStatusMessage("");

    try {
      // In a real implementation, this would call an API endpoint to securely store the credentials
      // For now, we'll just simulate a successful save
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store the credentials (in a real app, this would be done securely via an API)
      console.log("Supabase URL:", supabaseUrl);
      console.log("Supabase Key:", supabaseKey);

      setSaveStatus("success");
      setStatusMessage("Supabase credentials saved successfully");
    } catch (error) {
      setSaveStatus("error");
      setStatusMessage("Failed to save Supabase credentials");
      console.error("Error saving Supabase credentials:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Supabase Configuration</CardTitle>
        <CardDescription>
          Enter your Supabase URL and anon key to connect to your Supabase
          project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="supabase-url">Supabase URL</Label>
          <Input
            id="supabase-url"
            placeholder="https://your-project.supabase.co"
            value={supabaseUrl}
            onChange={(e) => setSupabaseUrl(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="supabase-key">Supabase Anon Key</Label>
          <Input
            id="supabase-key"
            type="password"
            placeholder="your-anon-key"
            value={supabaseKey}
            onChange={(e) => setSupabaseKey(e.target.value)}
          />
        </div>
        {saveStatus !== "idle" && (
          <div
            className={`flex items-center gap-2 text-sm ${saveStatus === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {saveStatus === "success" ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <span>{statusMessage}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} disabled={isSaving} className="w-full">
          {isSaving ? "Saving..." : "Save Supabase Credentials"}
        </Button>
      </CardFooter>
    </Card>
  );
}
