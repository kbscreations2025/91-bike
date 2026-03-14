"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FaqItem from "@/components/FaqItem";
import Toast from "@/components/Toast";
import SellForm from "@/components/SellForm";
import ContactForm from "@/components/ContactForm";
import ScrollEffects from "@/components/ScrollEffects";

const FAQ_DATA = [
  {
    q: "What services does +91bikes offer?",
    a: "We are a professional used bike buying service based in Pune. We make selling your pre-owned motorcycle quick, transparent, and hassle-free by offering you the best market value for your bike.",
  },
  {
    q: "What brands and types of bikes do you purchase?",
    a: "We purchase almost all major bike brands available in India, including Hero, Honda, Bajaj, TVS, Yamaha, Royal Enfield, and others. We accept bikes in various conditions, provided they have valid documentation.",
  },
  {
    q: "What is the process for selling my bike to +91bikes?",
    a: "The process is simple: Submit your bike details on our website. Our team schedules a free inspection at your location in Pune. We provide a fair market price based on the bike's condition. Once you accept, we complete the documentation and transfer the payment instantly.",
  },
  {
    q: "What documents are required to sell my bike?",
    a: "To ensure a smooth legal transfer, please keep the following ready: Original RC Book, Valid Insurance, Current PUC certificate, Signed transfer forms (Form 29 & 30), and your ID proof (Aadhar Card/PAN Card).",
  },
  {
    q: "Do I need to bring my bike to your office for inspection?",
    a: "Not at all! For your convenience, our representative will visit your home or office in Pune at a time that works best for you to inspect the bike.",
  },
  {
    q: "Who handles the RC transfer process?",
    a: "We handle the entire RC transfer process for you. Our team ensures all legal paperwork is completed correctly so that you are no longer liable for the vehicle after the sale.",
  },
  {
    q: "How and when will I receive the payment?",
    a: "We believe in transparency. Once the deal is finalized and the documents are verified, we provide instant payment through direct bank transfer or check.",
  },
];

const BRANDS = [
  "TVS", "JAWA", "Royal Enfield", "Kawasaki", "KTM",
  "Harley-Davidson", "Yamaha", "Honda", "Bajaj", "Hero", "OLA Electric",
];

const BLOG_POSTS = [
  {
    icon: "🏍️",
    cat: "Guide",
    bg: "",
    date: "+91Bikes · 10 March 2026",
    title: "How to Get the Best Resale Value for Your Used Bike in Pune",
    desc: "Importance of keeping maintenance records, deep cleaning before inspection, gathering all original documents, and why choosing a professional service over selling to an individual is safer.",
  },
  {
    icon: "⚡",
    cat: "Comparison",
    bg: "linear-gradient(135deg,#1a1a1a,#444)",
    date: "+91Bikes · 5 March 2026",
    title: "Selling Your Bike in Pune: Should You Choose a Dealer or an Online Platform?",
    desc: "Online platforms offer convenience, free doorstep inspection, instant payment and handled RTO paperwork. Modern platforms bridge the gap by offering the best of both worlds.",
  },
  {
    icon: "⚠️",
    cat: "Tips",
    bg: "linear-gradient(135deg,#0a2a5e,#1a56b0)",
    date: "+91Bikes · 1 March 2026",
    title: "5 Common Mistakes to Avoid When Selling Your Two-Wheeler",
    desc: "Not transferring RC ownership, hiding mechanical issues, overpricing without market research, neglecting legal paperwork, and meeting strangers in unsafe locations.",
  },
];

const TESTIMONIALS = [
  {
    text: '"Highly recommend +91Bikes! I sold my bike and literally received the payment in 10 minutes. The transfer process was handled smoothly. If you want a hassle-free and fast sale, this is the place."',
    name: "Vasu",
    city: "Pune",
    avatar: "V",
  },
  {
    text: '"Got quick service and payment instantly post inspection. The current process was completely hassle-free. Service from Rohit was exceptional. Will definitely recommend to friends."',
    name: "Harshit Saklecha",
    city: "Bangalore",
    avatar: "H",
  },
  {
    text: '"The entire process from getting a quote to receiving payment was seamless. +91Bikes gave me the best price compared to other platforms. Truly a transparent and trustworthy service."',
    name: "Rahul Sharma",
    city: "Mumbai",
    avatar: "R",
  },
];

export default function Home() {
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
  }, []);

  const hideToast = useCallback(() => {
    setToastVisible(false);
  }, []);

  return (
    <>
      <ScrollEffects />
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-bg-shapes"></div>
        <div className="hero-particles" id="heroParticles"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="pulse-dot"></span> India&apos;s Fastest Bike Selling Platform
            </div>
            <h1 className="hero-title">
              Sell Your Bike<span>From Home.</span>
            </h1>
            <p className="hero-subtitle">
              Get instant payment in 30 minutes. No hassles, no delays. Free doorstep inspection and transparent paperwork.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">3,500+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">4.9★</div>
                <div className="hero-stat-label">Average Rating</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">30 Min</div>
                <div className="hero-stat-label">Instant Payment</div>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#sell" className="btn-primary">Sell My Bike →</a>
              <a href="#about" className="btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-icon">🏍️</div>
              <div className="hero-card-title">Free Inspection</div>
              <div className="hero-card-desc">Our expert visits your doorstep</div>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">💸</div>
              <div className="hero-card-title">Instant Payment</div>
              <div className="hero-card-desc">Online transfer in 30 minutes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section style={{ background: "#fff" }} className="section-reveal">
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className="section-tag">About +91Bikes</div>
          <h2 className="section-title">Your Trusted Partner for Selling Bikes in Pune</h2>
          <p className="section-sub" style={{ maxWidth: 680, margin: "16px auto 0" }}>
            At +91bikes, we believe that selling your pre-owned motorcycle should be as easy as buying a cup of coffee. We are a Pune-based service dedicated to providing a fair, transparent, and hassle-free bike-selling experience.
          </p>
          <a href="#about" className="btn-primary" style={{ display: "inline-flex", marginTop: 32, background: "var(--red)", color: "#fff" }}>
            Know More →
          </a>
        </div>
      </section>

      {/* WHY +91BIKES */}
      <section id="why" style={{ background: "var(--gray)" }}>
        <div className="text-center section-reveal">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-title">Why +91Bikes?</h2>
          <p className="section-sub">Sell your bike with confidence – fair pricing, free inspection, instant payment, and hassle-free paperwork.</p>
        </div>
        <div className="why-grid">
          {[
            { icon: "💰", title: "Fair & Transparent Pricing", desc: "No hidden fees or confusing negotiations. We assess your bike based on its condition and current market trends to give you the best possible price." },
            { icon: "🚪", title: "Free Doorstep Inspection", desc: "Forget driving across Pune to find a buyer. We come to your home or office to inspect your bike at a time that suits you." },
            { icon: "💸", title: "Instant Bank Payment", desc: "Once the deal is finalized and documents are verified, we provide instant payment through direct bank transfer or check." },
            { icon: "📋", title: "Hassle-Free RTO Paperwork", desc: "We take care of all the legal paperwork, including the RC transfer process. You can sit back and relax knowing everything is handled professionally." },
          ].map((item, i) => (
            <div key={i} className={`why-card fade-up stagger-${i + 1}`}>
              <span className="why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: "var(--dark)", padding: "80px 5%" }}>
        <div className="text-center section-reveal">
          <div className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>Our Process</div>
          <h2 className="section-title" style={{ color: "#fff" }}>How It Works</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)" }}>Four simple steps to sell your bike effortlessly.</p>
        </div>
        <div className="process-steps">
          {[
            { icon: "📝", title: "Share Bike Details", desc: "Fill out our quick form online. It takes less than a minute." },
            { icon: "💬", title: "Get Instant Quote", desc: "Receive a fair, market-leading price for your bike upfront." },
            { icon: "🔍", title: "Free Home Inspection", desc: "Our expert visits your location to verify your bike and documents." },
            { icon: "₹", title: "Instant Payment", desc: "Get paid immediately via secure bank transfer once documentation is done." },
          ].map((step, i) => (
            <div key={i} className={`process-step fade-up stagger-${i + 1}`}>
              <div className="step-num">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ background: "var(--gray)", padding: "80px 5%" }}>
        <div className="testimonials-header section-reveal">
          <div>
            <div className="section-tag">What Our Customers Say</div>
            <h2 className="section-title">Testimonials</h2>
          </div>
          <div className="rating-big">
            <div className="num">3,500+</div>
            <div className="stars">★★★★★</div>
            <div className="count">Reviews – 4.9/5</div>
          </div>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testimonial-card fade-up stagger-${i + 1}`}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-city">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section style={{ background: "#fff", padding: "50px 5%" }}>
        <div className="brands-title">Trusted by owners of leading brands</div>
        <div className="brands-grid">
          {BRANDS.map((brand) => (
            <div key={brand} className="brand-pill">{brand}</div>
          ))}
        </div>
      </section>

      {/* FAQ SNIPPET */}
      <section style={{ background: "var(--gray)", padding: "80px 5%" }}>
        <div className="text-center section-reveal">
          <div className="section-tag">Got Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: 720, margin: "40px auto 0" }}>
          {FAQ_DATA.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: "#fff", padding: "80px 5%" }}>
        <div
          style={{
            background: "linear-gradient(135deg,var(--red-dark),var(--red))",
            padding: 40,
            borderRadius: 20,
            textAlign: "center",
            marginBottom: 60,
          }}
          className="section-reveal"
        >
          <div className="section-tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>About Us</div>
          <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", marginTop: 8 }}>Who We Are</h2>
        </div>
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-big">🏍️</div>
            <div className="about-visual-grid">
              <div className="about-mini-card"><div className="num">3,500+</div><div className="lbl">Happy Customers</div></div>
              <div className="about-mini-card"><div className="num">4.9★</div><div className="lbl">Rating</div></div>
              <div className="about-mini-card"><div className="num">30 Min</div><div className="lbl">Payment Time</div></div>
              <div className="about-mini-card"><div className="num">100%</div><div className="lbl">Transparent</div></div>
            </div>
            <div style={{ color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 22, fontWeight: 700 }}>Affordable Mobility For All</div>
          </div>
          <div className="about-text">
            <div className="section-tag">Why Choose +91bikes?</div>
            <h2 className="section-title">Your Trusted Partner for Selling Bikes in Pune</h2>
            <p style={{ marginTop: 20 }}>At +91bikes, we believe that selling your pre-owned motorcycle should be as easy as buying a cup of coffee. We are a Pune-based service dedicated to providing a fair, transparent, and hassle-free bike-selling experience for every bike owner in the city.</p>
            <p>We value your time. Our goal is to make the entire process fast, secure, and professional from start to finish.</p>
            <div className="about-features">
              {[
                { icon: "🚪", title: "Doorstep Service", desc: "Forget driving across Pune to find a buyer. We come to your home or office to inspect your bike at a time that suits you." },
                { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees or confusing negotiations. We assess your bike based on its condition and current market trends to give you the best possible price." },
                { icon: "💸", title: "Instant Payment", desc: "Once the deal is finalized, we ensure you get your payment immediately. No waiting, no follow-ups." },
                { icon: "📋", title: "Hassle-Free Documentation", desc: "We take care of all the legal paperwork, including the RC transfer process. You can sit back and relax knowing your bike is in safe, professional hands." },
              ].map((f, i) => (
                <div key={i} className="about-feature">
                  <div className="about-feature-icon">{f.icon}</div>
                  <div className="about-feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT VALUES */}
      <section style={{ background: "var(--gray)", padding: "80px 5%" }}>
        <div className="text-center section-reveal">
          <div className="section-tag">Our Values</div>
          <h2 className="section-title">What Drives Us</h2>
        </div>
        <div className="why-grid" style={{ marginTop: 40 }}>
          {[
            { icon: "🤝", title: "Customer-First", desc: "We value your time. Our goal is to make the entire process fast, secure, and professional from start to finish." },
            { icon: "🔍", title: "Transparency", desc: "No hidden fees or confusing negotiations. Every step is clear and communicated upfront." },
            { icon: "⚡", title: "Speed", desc: "We respect your time. From inquiry to instant payment, everything happens fast." },
            { icon: "🛡️", title: "Professional & Secure", desc: "All legal paperwork including RC transfer is handled by our team. Your bike is in safe, professional hands." },
          ].map((v, i) => (
            <div key={i} className={`why-card fade-up stagger-${i + 1}`}>
              <span className="why-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELL */}
      <section id="sell" style={{ background: "linear-gradient(135deg,var(--red) 0%,#8b0000 100%)", padding: "80px 5%" }}>
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            borderRadius: 20,
            padding: 40,
            textAlign: "center",
            marginBottom: 50,
          }}
          className="section-reveal"
        >
          <div className="section-tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>Sell Now</div>
          <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", marginTop: 8 }}>Sell Your Bike Today</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, marginTop: 12 }}>Get the best price in 30 minutes. No hassles, no delays.</p>
        </div>
        <div className="sell-grid">
          <div>
            <div className="section-tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>Sell Smart, Sell Safe</div>
            <h2 className="section-title" style={{ color: "#fff" }}>Get the Best Price for Your Bike</h2>
            <p style={{ color: "#fff", fontSize: 16, marginTop: 16, opacity: 0.85, lineHeight: 1.7 }}>
              Fill out the quick form and our team will get in touch with an instant quote. Free doorstep inspection, transparent paperwork, and instant online payment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
              {[
                { icon: "✅", title: "Fair & Transparent Pricing", desc: "No hidden fees. Best market value based on condition and trends." },
                { icon: "🚪", title: "Free Doorstep Inspection", desc: "We come to your home or office in Pune. No need to travel." },
                { icon: "💸", title: "Instant Bank Payment", desc: "Direct bank transfer or check once deal is finalized." },
                { icon: "📋", title: "Hassle-Free RTO Paperwork", desc: "Complete RC transfer handled by our professional team." },
              ].map((f, i) => (
                <div key={i} className="sell-feature-card">
                  <span style={{ fontSize: 24 }}>{f.icon}</span>
                  <div style={{ color: "#fff" }}>
                    <strong>{f.title}</strong><br />
                    <span style={{ fontSize: 13, opacity: 0.75 }}>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SellForm onSuccess={showToast} />
        </div>
      </section>

      {/* SELL PROCESS */}
      <section style={{ background: "var(--gray)", padding: "80px 5%" }}>
        <div className="text-center section-reveal">
          <div className="section-tag">Step by Step</div>
          <h2 className="section-title">Our Simple Process</h2>
        </div>
        <div className="process-steps" style={{ marginTop: 50 }}>
          {[
            { num: "1", title: "Share Bike Details", desc: "Fill out our quick form online. It takes less than a minute." },
            { num: "2", title: "Get Instant Quote", desc: "Receive a fair, market-leading price for your bike upfront." },
            { num: "3", title: "Free Home Inspection", desc: "Our expert visits your location to verify your bike and documents." },
            { num: "4", title: "Instant Payment", desc: "Get paid immediately via secure bank transfer once documentation is done." },
          ].map((step, i) => (
            <div key={i} className={`process-step fade-up stagger-${i + 1}`}>
              <div className="step-num" style={{ borderColor: "var(--gray)" }}>{step.num}</div>
              <h3 style={{ color: "var(--dark)" }}>{step.title}</h3>
              <p style={{ color: "var(--text-light)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ background: "#fff", padding: "80px 5%" }}>
        <div
          style={{
            background: "linear-gradient(135deg,var(--red-dark),var(--red))",
            padding: 40,
            borderRadius: 20,
            textAlign: "center",
            marginBottom: 50,
          }}
          className="section-reveal"
        >
          <div className="section-tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>Blog</div>
          <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", marginTop: 8 }}>Smart Tips &amp; Trends</h2>
        </div>
        <div className="blog-grid">
          {BLOG_POSTS.map((post, i) => (
            <div key={i} className={`blog-card fade-up stagger-${(i % 3) + 1}`}>
              <div className="blog-img" style={post.bg ? { background: post.bg } : undefined}>
                <div className="blog-img-inner">{post.icon}</div>
                <span className="blog-cat">{post.cat}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "var(--gray)", padding: "80px 5%" }}>
        <div
          style={{
            background: "linear-gradient(135deg,var(--red-dark),var(--red))",
            padding: 40,
            borderRadius: 20,
            textAlign: "center",
            marginBottom: 60,
          }}
          className="section-reveal"
        >
          <div className="section-tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>Contact</div>
          <h2 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", marginTop: 8 }}>Get In Touch</h2>
        </div>
        <div className="contact-grid">
          <ContactForm onSuccess={showToast} />
          <div>
            <h3 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 20, color: "var(--dark)" }}>Contact Information</h3>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <div className="info-title">Phone</div>
                <div className="info-value"><a href="tel:8390519191">+91 8390519191</a></div>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <div className="info-title">Email</div>
                <div className="info-value"><a href="mailto:wheeldealbikespvtltd@gmail.com">wheeldealbikespvtltd@gmail.com</a></div>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <div className="info-title">Address</div>
                <div className="info-value">
                  The Office Club,<br />
                  NDA Road, Ram Nagar,<br />
                  Bavdhan, Pune
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div>
                <div className="info-title">Working Hours</div>
                <div className="info-value">Mon–Sat: 9:00 AM – 7:00 PM<br />Sunday: 10:00 AM – 4:00 PM</div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.77!3d18.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzM2LjAiTiA3M8KwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - The Office Club, Bavdhan, Pune"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/Kx8FC6hw8jc9rmWKA?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "inline-flex",
                marginTop: 12,
                background: "var(--red)",
                color: "#fff",
                fontSize: 14,
                padding: "10px 20px",
              }}
            >
              📍 Open in Google Maps →
            </a>

            <div style={{ background: "linear-gradient(135deg,var(--red),var(--red-dark))", borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h4 style={{ color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontSize: 20, marginBottom: 8 }}>Ready to Sell?</h4>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, marginBottom: 16 }}>Get your free quote now and sell your bike in 30 minutes.</p>
              <a href="#sell" className="btn-primary" style={{ display: "inline-flex" }}>Sell My Bike →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FAQs */}
      <section style={{ background: "var(--gray)", padding: "0 5% 80px" }}>
        <div className="text-center section-reveal" style={{ paddingBottom: 40 }}>
          <div className="section-tag">FAQs</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          <div>
            {FAQ_DATA.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div className="faq-contact">
            <h3>Still Have Questions?</h3>
            <p>Our customer care team is available to help you with any queries about selling your bike.</p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-item-icon">📞</span>
                <a href="tel:8390519191">+91 8390519191</a>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">✉️</span>
                <a href="mailto:wheeldealbikespvtltd@gmail.com">wheeldealbikespvtltd@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">💬</span>
                <a href="https://wa.me/918390519191" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo-91bikes.jpg" alt="+91Bikes Logo" width={56} height={56} style={{ objectFit: "contain", height: 56, width: 56, borderRadius: 8 }} />
              <div className="logo-text">+91Bikes</div>
            </div>
            <p>Your trusted partner for selling bikes in Pune. Fair, transparent, and hassle-free bike-selling experience for every bike owner.</p>
            <div className="footer-social">
              <a className="social-btn" href="#">f</a>
              <a className="social-btn" href="#">in</a>
              <a className="social-btn" href="#">tw</a>
              <a className="social-btn" href="#">yt</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#sell">Sell Now</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Instant Valuation</a></li>
              <li><a href="#">Free Inspection</a></li>
              <li><a href="#">Paperwork Transfer</a></li>
              <li><a href="#">Instant Payment</a></li>
              <li><a href="#">Bike Pickup</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:8390519191">+91 8390519191</a></li>
              <li><a href="mailto:wheeldealbikespvtltd@gmail.com">wheeldealbikespvtltd@gmail.com</a></li>
              <li><a href="https://maps.app.goo.gl/Kx8FC6hw8jc9rmWKA?g_st=iw" target="_blank" rel="noopener noreferrer">Bavdhan, Pune</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 +91Bikes. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a className="whatsapp-float" href="https://wa.me/918390519191" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">💬</a>

      {/* Scroll to Top */}
      <button className="scroll-top" id="scrollTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>

      {/* Toast */}
      <Toast message={toastMsg} visible={toastVisible} onHide={hideToast} />
    </>
  );
}
