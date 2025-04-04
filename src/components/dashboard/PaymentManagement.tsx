"use client";

import { useState } from "react";
import { Download, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";

interface PaymentHistoryItem {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  receiptUrl?: string;
}

export default function PaymentManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Mock data for payment status
  const paymentStatus = {
    currentDue: 50,
    nextPaymentDate: "2023-12-15",
    paymentProgress: 75, // percentage of annual payments completed
    annualTotal: 200,
    paidToDate: 150,
  };

  // Mock data for payment history
  const paymentHistory: PaymentHistoryItem[] = [
    {
      id: "1",
      date: "2023-11-01",
      amount: 50,
      status: "paid",
      receiptUrl: "#",
    },
    {
      id: "2",
      date: "2023-10-01",
      amount: 50,
      status: "paid",
      receiptUrl: "#",
    },
    {
      id: "3",
      date: "2023-09-01",
      amount: 50,
      status: "paid",
      receiptUrl: "#",
    },
    { id: "4", date: "2023-08-01", amount: 50, status: "overdue" },
    { id: "5", date: "2023-12-01", amount: 50, status: "pending" },
  ];

  // Filter payment history based on search query and status filter
  const filteredPaymentHistory = paymentHistory.filter((payment) => {
    const matchesSearch =
      payment.date.includes(searchQuery) ||
      payment.amount.toString().includes(searchQuery) ||
      payment.status.includes(searchQuery);

    const matchesStatus =
      statusFilter === "all" || payment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Function to get badge color based on payment status
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "paid":
        return "secondary";
      case "pending":
        return "default";
      case "overdue":
        return "destructive";
      default:
        return "default";
    }
  };

  // Function to handle receipt download
  const handleDownloadReceipt = (receiptUrl: string) => {
    // In a real implementation, this would download the receipt
    console.log(`Downloading receipt from ${receiptUrl}`);
  };

  return (
    <div className="space-y-6 bg-background p-6 rounded-lg">
      {/* Payment Status Card */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Current Due</p>
              <p className="text-2xl font-bold">£{paymentStatus.currentDue}</p>
              <p className="text-sm text-muted-foreground">
                Due by{" "}
                {new Date(paymentStatus.nextPaymentDate).toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Annual Progress</p>
              <Progress value={paymentStatus.paymentProgress} className="h-2" />
              <p className="text-sm text-muted-foreground">
                £{paymentStatus.paidToDate} paid of £{paymentStatus.annualTotal}{" "}
                annual total
              </p>
            </div>

            <div className="flex items-center justify-end">
              {paymentStatus.currentDue > 0 && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Make Payment</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Payment Options</AlertDialogTitle>
                      <AlertDialogDescription>
                        Please select your preferred payment method. You will be
                        redirected to complete your payment of £
                        {paymentStatus.currentDue}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        Pay with Card
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        Bank Transfer
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        Pay to Collector
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        Standing Order
                      </Button>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment History Card */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search payments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Payment History Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPaymentHistory.length > 0 ? (
                  filteredPaymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        {new Date(payment.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>£{payment.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(payment.status)}>
                          {payment.status.charAt(0).toUpperCase() +
                            payment.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {payment.status === "paid" && payment.receiptUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleDownloadReceipt(payment.receiptUrl!)
                            }
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Receipt
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center py-4 text-muted-foreground"
                    >
                      No payment records found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
