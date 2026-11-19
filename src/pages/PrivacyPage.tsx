import PageFrame from '@/components/PageFrame';

export default function PrivacyPage() {
  return <PageFrame kicker="Privacy" title="Privacy policy" intro="This site collects only the data needed to understand visits and reply to messages you send." next={false}>
    <section className="container-custom prose-section max-w-3xl space-y-6 text-muted-foreground leading-7 pb-16">
      <h2 className="section-heading text-foreground">What data this site collects</h2>
      <p>Google Analytics 4 records anonymous usage data, such as pages viewed, device type and approximate location, to show which pages help visitors. No account or form on this site stores personal data.</p>
      <h2 className="section-heading text-foreground">Email you send</h2>
      <p>Email sent to tudurajesh34@gmail.com is used only to reply to your inquiry and is never sold or shared.</p>
      <h2 className="section-heading text-foreground">Your choices</h2>
      <p>Browser settings or a tracking blocker can stop analytics cookies. To ask about or delete any email correspondence, write to the address above.</p>
    </section>
  </PageFrame>;
}
