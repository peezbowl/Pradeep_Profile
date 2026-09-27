import React, { useState, useEffect, useRef } from 'react';
import { Camera, Check, ShieldCheck, Upload, User, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ExecutivePhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const DEFAULT_PHOTO = PERSONAL_INFO.photoUrl;

export const ExecutivePhoto: React.FC<ExecutivePhotoProps> = ({ className = '', size = 'lg' }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PHOTO);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load photo from localStorage if a custom image was uploaded
  useEffect(() => {
    const savedPhoto = localStorage.getItem('pk_custom_photo');
    if (savedPhoto && savedPhoto.startsWith('data:image')) {
      setPhotoUrl(savedPhoto);
    } else {
      // Clear any outdated placeholder from cache
      if (savedPhoto) {
        localStorage.removeItem('pk_custom_photo');
      }
      setPhotoUrl(DEFAULT_PHOTO);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        try {
          localStorage.setItem('pk_custom_photo', result);
        } catch (err) {
          console.warn('Could not persist image to localStorage', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(DEFAULT_PHOTO);
    localStorage.removeItem('pk_custom_photo');
  };

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Frame border with executive glow */}
      <div className="relative w-full h-full rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800 to-slate-900 shadow-2xl">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Pradeep Kumar - Senior Sales Enablement & Knowledge Strategy Leader"
              className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Executive Stylized SVG Portrait when no local file loaded yet */
            <div className="w-full h-full relative flex flex-col items-center justify-center bg-gradient-to-b from-[#131d36] to-[#0a0f1d] p-6 text-center select-none">
              {/* Subtle architectural background geometry */}
              <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Executive Monogram Badge */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center shadow-xl shadow-blue-900/40 border border-blue-400/30 mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider font-display">
                    PK
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white tracking-tight">Pradeep Kumar</h4>
                <p className="text-xs text-blue-400 font-medium mt-0.5">
                  18+ Years Enterprise Leadership
                </p>
                <div className="flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>IIM Kozhikode • Capgemini</span>
                </div>
              </div>

              {/* Upload prompt helper */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 w-full flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-750 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors shadow-sm"
                >
                  <Upload className="w-3.5 h-3.5 text-blue-400" />
                  <span>Add Attached Photo</span>
                </button>
              </div>
            </div>
          )}

          {/* Hover overlay for photo replacement or inspection */}
          {photoUrl && (
            <div
              className={`absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex flex-col items-center justify-center gap-2 p-4 transition-opacity duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                Upload / Change Photo
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="text-[11px] text-slate-400 hover:text-slate-200 underline transition-colors cursor-pointer"
              >
                Reset to Default Photo
              </button>
            </div>
          )}

          {/* Quick upload button always accessible on the corner */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Upload your photo"
            className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700/80 text-[11px] font-medium shadow-md transition-all backdrop-blur-xs cursor-pointer"
          >
            <Camera className="w-3 h-3 text-blue-400" />
            <span>Upload Photo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
