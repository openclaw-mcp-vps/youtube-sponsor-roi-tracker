import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SponsorROI – Track Sponsor Segment Performance in YouTube Videos",
  description:
    "Analyze YouTube videos to identify sponsor segments, track viewer retention during sponsors, and calculate sponsor ROI and optimal placement timing."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="f38aa379-e0d7-4b99-bc50-2669ddca33c4"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
