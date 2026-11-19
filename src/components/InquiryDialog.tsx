import { type ReactNode } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import InquiryForm from '@/components/InquiryForm';

// Pop-up inquiry form opened from the "Let's talk" button, so visitors can message
// from any page without leaving it. The Contact page keeps the full details.
export default function InquiryDialog({ children, open, onOpenChange }: { children?: ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }) {
  return <Dialog open={open} onOpenChange={onOpenChange}>
    {children && <DialogTrigger asChild>{children}</DialogTrigger>}
    <DialogContent className="inquiry-dialog">
      <DialogHeader>
        <p className="section-kicker">Let&rsquo;s Talk</p>
        <DialogTitle className="inquiry-dialog-title">Tell Me About Your Website</DialogTitle>
        <DialogDescription>Share your website and goals, and I&rsquo;ll reply with the next steps.</DialogDescription>
      </DialogHeader>
      <InquiryForm id="popup-form" />
      <div className="inquiry-dialog-direct">
        <a href="mailto:tudurajesh34@gmail.com"><Mail size={15} aria-hidden="true"/> tudurajesh34@gmail.com</a>
        <a href="tel:+9779825672407"><Phone size={15} aria-hidden="true"/> +977 982-5672407</a>
      </div>
    </DialogContent>
  </Dialog>;
}
