import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Out of Covering – Full Christian Movie | Staton Media Production",
  description: "Watch Out of Covering, a powerful Nigerian Christian movie from Staton Media Production about truth, family, and the secrets we keep.",
  keywords: ["Out of Covering movie", "Out of Covering full movie", "Out of Covering Christian movie", "Nigerian Christian movie", "Nollywood Christian movie", "Christian movies 2026", "Staton Media Production"],
  openGraph: {
    title: "Out of Covering – Full Christian Movie | Staton Media Production",
    description: "The full Out of Covering Christian movie is now streaming on YouTube.",
    images: ["/images/out-of-covering-thumbnail.jpg"],
    type: "video.movie",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
