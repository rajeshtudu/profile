import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

const EMAIL = 'tudurajesh34@gmail.com';
const options = ['Topical map project', 'SEO audit', 'Ongoing SEO support', 'Freelance & remote SEO', 'Something else'];

// No backend: the form builds a pre-filled email in the visitor's mail app.
export default function InquiryForm({ id = 'inquiry' }: { id?: string }) {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    const subject = `${get('service')} inquiry from ${get('name')}`;
    const body = [`Name: ${get('name')}`, `Email: ${get('email')}`, `Website: ${get('website')}`, `Service: ${get('service')}`, '', get('message')].join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return <form className="inquiry-form" onSubmit={submit} aria-describedby={`${id}-note`}>
    <div className="inquiry-row">
      <label htmlFor={`${id}-name`}>Your name<input id={`${id}-name`} name="name" autoComplete="name" required /></label>
      <label htmlFor={`${id}-email`}>Your email<input id={`${id}-email`} name="email" type="email" autoComplete="email" required /></label>
    </div>
    <label htmlFor={`${id}-website`}>Website URL<input id={`${id}-website`} name="website" type="url" placeholder="https://" inputMode="url" required /></label>
    <fieldset className="inquiry-chips"><legend>What you need</legend><div>{options.map((o, i) => <label key={o} className="chip"><input type="radio" name="service" value={o} defaultChecked={i === 0} /><span>{o}</span></label>)}</div></fieldset>
    <label htmlFor={`${id}-message`}>Your goals<textarea id={`${id}-message`} name="message" rows={4} placeholder="What you want to improve, such as organic traffic, leads or AI visibility" required /></label>
    <button type="submit" className="button-primary self-start">Send Inquiry <ArrowUpRight size={15}/></button>
    <p id={`${id}-note`} className="inquiry-note" role="status">{sent ? `Your email app should open with the message ready. If it does not, email ${EMAIL} directly.` : `Sending opens your email app with the message filled in, addressed to ${EMAIL}.`}</p>
  </form>;
}
