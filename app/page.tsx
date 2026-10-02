"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, ExternalLink, Menu, Play, PlayCircle, X } from "lucide-react";
import { useState } from "react";

const videoUrl = "https://www.youtube.com/watch?v=Hx6LsE6Vnr4";

const cast = [
  ["ST", "Staton", "Omo-Abu"],
  ["MT", "Monica", "Tiga"],
  ["ME", "Moses", "Adarju Elizabeth"],
  ["AA", "Alfred", "Atungu"],
  ["RH", "Ruqayya", "Hussaini"],
  ["JM", "Joshua", "Monsonyem"],
];

const movieSchema = {
  "@context": "https://schema.org",
  "@type": "Movie",
  name: "Out of Covering",
  url: "https://statontv.com/",
  description: "Out of Covering is a Nigerian Christian movie from Staton Media Production about secrets, family, faith, and truth.",
  image: "https://i.ytimg.com/vi/Hx6LsE6Vnr4/maxresdefault.jpg",
  director: { "@type": "Person", name: "Staton Omo-Abu" },
  productionCompany: { "@type": "Organization", name: "Staton Media Production", sameAs: "https://www.youtube.com/@statonmediaproduction" },
  actor: cast.map(([, first, last]) => ({ "@type": "Person", name: `${first} ${last}` })),
  trailer: { "@type": "VideoObject", name: "Out of Covering – Full Christian Movie", embedUrl: "https://www.youtube.com/embed/Hx6LsE6Vnr4", contentUrl: videoUrl, thumbnailUrl: "https://i.ytimg.com/vi/Hx6LsE6Vnr4/maxresdefault.jpg" },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
      <header className="nav"><a className="brand" href="#top"><Image src="/images/staton-media-logo.png" alt="Staton Media Production" width={276} height={82} priority /></a><nav className={menuOpen ? "nav-links open" : "nav-links"}><a href="#story" onClick={() => setMenuOpen(false)}>The film</a><a href="#cast" onClick={() => setMenuOpen(false)}>Cast & crew</a><a href="#message" onClick={() => setMenuOpen(false)}>The message</a><a className="nav-watch" href={videoUrl} target="_blank" rel="noreferrer"><PlayCircle size={15} /> YouTube</a></nav><button className="menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>

      <section className="hero" id="top">
        <div className="hero-bg"><Image src="/images/out-of-covering-thumbnail.jpg" alt="Out of Covering movie key art" fill priority sizes="100vw" /></div><div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow">A Staton Media Production original · 2026</p><h1>Out of<br /><em>Covering</em></h1><p className="hero-copy">Every secret has a cost.<br />Every truth has a moment.</p><div className="hero-actions"><button className="button button-red" onClick={() => setShowVideo(true)}><Play size={17} fill="currentColor" /> Watch the full movie</button><a className="button button-ghost" href="#story">Explore the story <ArrowDown size={16} /></a></div></div><div className="hero-foot"><span>Out of Covering · Full Christian Movie</span><span>Scroll to discover <ArrowDown size={15} /></span></div>
      </section>

      <section className="intro" id="story"><div className="section-tag">01 / The film</div><div className="intro-grid"><div><h2>What happens<br />when the truth<br /><em>won&apos;t stay hidden?</em></h2></div><div className="intro-copy"><p className="lead">Out of Covering is a powerful Nigerian Christian movie about the things we hide, the people we hurt, and the freedom that comes when we finally choose the truth.</p><p>From Staton Media Production comes a story of faith, family, and the courage to step into the light. A full-length Nollywood Christian movie for everyone who believes that redemption is always possible.</p><button className="text-link" onClick={() => setShowVideo(true)}>Watch the movie <span>↗</span></button></div></div></section>

      <section className="watch"><div className="watch-frame"><Image src="/images/out-of-covering-thumbnail.jpg" alt="Watch Out of Covering on YouTube" fill sizes="(max-width: 900px) 92vw, 75vw" /><div className="play-ring" onClick={() => setShowVideo(true)} role="button" aria-label="Play Out of Covering"><Play fill="white" size={25} /></div><div className="watch-label">Now streaming<br /><b>on YouTube</b></div></div></section>

      <section className="details" id="message"><div className="detail-image"><Image src="/images/section-background.jpg" alt="Out of Covering movie poster — a preacher holding a Bible in front of a glowing cross" fill sizes="(max-width: 800px) 86vw, 50vw" /></div><div className="detail-copy"><div className="section-tag">02 / The message</div><h2>There is no freedom<br />without <em>truth.</em></h2><p>Behind every closed door is a story. Out of Covering asks what happens when the life we present to the world begins to crack, and invites us to consider the grace found on the other side of honesty.</p><p>Come for the drama. Stay for the message. Leave reminded that no family, no heart, and no future is beyond restoration.</p><a className="outline-link" href={videoUrl} target="_blank" rel="noreferrer">Watch on YouTube <ExternalLink size={15} /></a></div></section>

      <section className="cast-section" id="cast"><div className="section-tag">03 / Cast & crew</div><div className="cast-head"><h2>A story brought<br />to life by <em>many.</em></h2><p>Meet the cast of Out of Covering, featuring an ensemble of Nigerian talent under the direction of Staton Omo-Abu.</p></div><div className="cast-grid">{cast.map(([initials, first, last]) => <div className="cast-card" key={initials}><div className="avatar">{initials}</div><p>{first}<br /><b>{last}</b></p></div>)}</div><div className="credits"><span><b>Written & directed by</b> Staton Omo-Abu</span><span><b>Produced by</b> Staton Media Production</span></div></section>

      <section className="release"><div><div className="section-tag">04 / Release</div><h2>Now showing<br /><em>worldwide.</em></h2><p>The full Out of Covering movie is available to watch now on the Staton Media Production YouTube channel.</p></div><a className="release-button" href={videoUrl} target="_blank" rel="noreferrer"><PlayCircle size={24} /><span>Watch the full movie<br /><b>on YouTube</b></span><ArrowUpRight /></a></section>

      <footer><a className="brand" href="#top"><Image src="/images/staton-media-logo.png" alt="Staton Media Production" width={276} height={82} /></a><span className="footer-copy">Stories with purpose. Films with heart.</span><div className="socials"><a href="https://www.youtube.com/@statonmediaproduction" target="_blank" rel="noreferrer" aria-label="YouTube"><PlayCircle /></a></div><span className="copyright">© 2026 Staton Media Production</span></footer>

      {showVideo && <div className="modal" role="dialog" aria-modal="true" aria-label="Out of Covering full movie"><button className="close" onClick={() => setShowVideo(false)} aria-label="Close video"><X /></button><div className="video"><iframe src="https://www.youtube.com/embed/Hx6LsE6Vnr4?autoplay=1" title="Out of Covering full movie" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div></div>}
    </main>
  );
}
