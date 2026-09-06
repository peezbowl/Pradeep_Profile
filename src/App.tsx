import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ExpertiseSection } from './components/ExpertiseSection';
import { CareerJourney } from './components/CareerJourney';
import { EducationCertifications } from './components/EducationCertifications';
import { InsightsPerspectives } from './components/InsightsPerspectives';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { downloadResumeAsFormattedHTML } from './utils/resumeDownload';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleDownloadResume = () => {
    downloadResumeAsFormattedHTML();
  };

  const handleExploreExpertise = () => {
    const el = document.getElementById('expertise');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Sticky Executive Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onDownloadResume={handleDownloadResume}
          onExploreExpertise={handleExploreExpertise}
        />

        <ImpactMetrics />

        <ExpertiseSection />

        <CareerJourney />

        <EducationCertifications />

        <InsightsPerspectives />

        <ContactSection />
      </main>

      {/* Executive Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume Modal & Downloader */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownload={handleDownloadResume}
      />
    </div>
  );
}
