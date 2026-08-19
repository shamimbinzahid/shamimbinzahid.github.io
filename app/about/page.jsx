"use client";
import content from '../content.json';
import { AboutHeader } from '../components/AboutHeader';
import { BackButton } from '../components/BackButton';
import { ContentParagraphs } from '../components/ContentParagraphs';
import { Footer } from '../components/Footer';

// About Page Component
export default function About() {
  return (
    <>
      <BackButton />

      <AboutHeader />

      <ContentParagraphs paragraphs={content.paragraphs} />

      <BackButton />

      <Footer footNote={content.footerNote} resumeUrl={content.resumeUrl} />

    </>
  );
}