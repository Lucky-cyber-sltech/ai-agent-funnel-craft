
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Calendar } from "lucide-react";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  showBookingOption: boolean;
}

export const SuccessDialog = ({ open, onOpenChange, showBookingOption }: SuccessDialogProps) => {
  const handleDownload = () => {
    // Simulate download - in real app, this would download the actual guide
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'ai-agent-guide.pdf';
    link.click();
  };

  const handleBookCall = () => {
    // In real app, this would open Calendly or booking system
    window.open('https://calendly.com/your-booking-link', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <DialogTitle>Success! 🎉</DialogTitle>
          </div>
          <DialogDescription>
            Your free guide is ready! We've also saved your information and will send you valuable AI insights.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Button 
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Your Free Guide
          </Button>
          
          {showBookingOption && (
            <Button 
              onClick={handleBookCall}
              variant="outline"
              className="w-full"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Your Strategy Call Now
            </Button>
          )}
          
          <p className="text-xs text-gray-500 text-center">
            Check your email for the download link and additional resources!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
