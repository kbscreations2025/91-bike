"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        {question}
        <span className="faq-toggle">+</span>
      </div>
      <div className="faq-answer">{answer}</div>
    </div>
  );
}
