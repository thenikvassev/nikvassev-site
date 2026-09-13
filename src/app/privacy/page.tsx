import type { Metadata } from "next";
import { withOgImages } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = withOgImages({
  title: "Privacy Policy",
  description:
    "How Nik Vassev handles newsletter email, analytics, and contact form data on nikvassev.com.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Nik Vassev",
    description:
      "What I collect on this site, why, and who processes it. Newsletter, analytics, and contact form.",
  },
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">Privacy</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        How I handle your data.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        This is a personal site. I collect a small amount of information so I
        can send Systems Over Hustle, reply to inquiries, and see which pages
        people actually use.
      </p>

      <div className="prose-nik mt-10 max-w-reading text-base md:text-lg">
        <h2>What I collect</h2>
        <p>
          <strong>Newsletter.</strong> If you subscribe to Systems Over Hustle,
          I collect your email address. NitroSend stores it so I can send the
          weekly letter.
        </p>
        <p>
          <strong>Contact form.</strong> The form at{" "}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            tally.so/r/QKQbBk
          </a>{" "}
          is hosted by Tally. Whatever you submit there, usually a name, email,
          and message, is processed by Tally and sent to me.
        </p>
        <p>
          <strong>Analytics.</strong> I use Google Analytics 4 to see page
          views, referrers, and basic device information. I look at that in
          aggregate. I do not use it to build a personal profile of you.
        </p>
        <p>
          <strong>Hosting.</strong> The site runs on Vercel. Like most hosts,
          Vercel processes request data such as IP address and user agent so
          the pages can load.
        </p>
        <p>
          <strong>Business inquiries.</strong> If you write me about work, I
          use what you send so I can reply and follow up. I do not add those
          messages to a mailing list unless you subscribe on your own.
        </p>

        <h2>Why I collect it</h2>
        <ul>
          <li>Send Systems Over Hustle when you asked for it</li>
          <li>Answer the contact form and email</li>
          <li>See which writing and pages are useful</li>
          <li>Keep the site running</li>
        </ul>
        <p>
          I do not sell your data. I do not run ads on this site. I do not buy
          or sell email lists.
        </p>

        <h2>Who processes it</h2>
        <ul>
          <li>
            <strong>NitroSend</strong> stores newsletter emails and sends the
            letter
          </li>
          <li>
            <strong>Google Analytics (GA4)</strong> measures traffic
          </li>
          <li>
            <strong>Tally</strong> hosts the contact form
          </li>
          <li>
            <strong>Vercel</strong> hosts the site
          </li>
        </ul>
        <p>
          Each of those companies processes data under their own terms. I only
          send them what that feature needs.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          Google Analytics uses cookies to tell return visits from new ones and
          to measure traffic. You can block analytics cookies in your browser.
          The rest of the site still works.
        </p>
        <p>
          The newsletter form and the Tally form may set cookies those tools
          need to function.
        </p>

        <h2>How long I keep it</h2>
        <p>
          Newsletter emails stay on the list until you unsubscribe, or until
          you ask me to remove you.
        </p>
        <p>
          Contact form submissions and inquiry emails stay as long as I need
          them to reply or continue a conversation.
        </p>
        <p>
          Analytics stay in Google Analytics on Google&apos;s standard
          retention settings. I review them as totals, not as a file on you.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>
            Unsubscribe from any newsletter issue, or email me and I will take
            you off the list
          </li>
          <li>Email me to ask what I have, or to delete it</li>
          <li>Block analytics cookies in your browser</li>
        </ul>

        <h2>How to reach me</h2>
        <p>
          Nik Vassev
          <br />
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
        <p>
          This site is a personal brand. I do not have a separate company
          privacy office or a public street address for this site.
        </p>
        <p>Last updated September 2026.</p>
      </div>
    </article>
  );
}
