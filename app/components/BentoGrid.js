import Image from "next/image";

// SVG icons for the bento grid
const Icons = {
  Behance: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.443 5.35C8.082 5.35 8.673 5.401 9.213 5.55C9.754 5.699 10.219 5.922 10.608 6.22C10.998 6.519 11.293 6.903 11.492 7.386C11.691 7.867 11.793 8.453 11.793 9.13C11.793 9.874 11.637 10.489 11.325 10.974C11.013 11.457 10.529 11.846 9.877 12.141C10.73 12.368 11.379 12.802 11.821 13.438C12.264 14.075 12.484 14.862 12.484 15.802C12.484 16.537 12.36 17.17 12.115 17.704C11.869 18.239 11.536 18.673 11.123 19.007C10.71 19.342 10.228 19.587 9.685 19.743C9.143 19.901 8.566 19.978 7.957 19.978H2V5.35H7.443ZM7.154 11.607C7.757 11.607 8.25 11.444 8.628 11.119C9.008 10.795 9.197 10.304 9.197 9.646C9.197 9.29 9.143 8.992 9.032 8.757C8.922 8.521 8.767 8.339 8.568 8.21C8.368 8.081 8.135 7.991 7.87 7.943C7.604 7.895 7.324 7.87 7.029 7.87H4.843V11.607H7.154ZM7.537 17.448C7.87 17.448 8.178 17.413 8.462 17.341C8.746 17.27 8.987 17.151 9.187 16.984C9.386 16.818 9.541 16.6 9.651 16.328C9.762 16.055 9.817 15.726 9.817 15.332C9.817 14.543 9.625 13.976 9.244 13.633C8.862 13.29 8.328 13.119 7.645 13.119H4.843V17.447H7.537V17.448Z" />
      <path d="M16.801 16.647C17.112 17.051 17.64 17.255 18.382 17.255C18.913 17.255 19.371 17.12 19.751 16.852C20.13 16.585 20.368 16.299 20.462 15.997H22.548C22.195 17.021 21.659 17.774 20.942 18.262C20.226 18.748 19.355 18.992 18.328 18.992C17.584 18.992 16.926 18.879 16.349 18.655C15.772 18.431 15.287 18.112 14.894 17.697C14.502 17.283 14.197 16.779 13.979 16.182C13.761 15.586 13.653 14.932 13.653 14.22C13.653 13.53 13.767 12.887 13.996 12.296C14.225 11.704 14.541 11.195 14.947 10.772C15.353 10.348 15.842 10.011 16.413 9.764C16.984 9.516 17.619 9.392 18.317 9.392C19.092 9.392 19.772 9.537 20.358 9.828C20.944 10.119 21.426 10.514 21.8 11.015C22.174 11.515 22.449 12.099 22.625 12.764C22.799 13.432 22.854 14.146 22.783 14.912H16.036C16.036 15.693 16.489 16.241 16.801 16.647ZM19.723 11.404C19.457 11.036 19.001 10.804 18.328 10.804C17.891 10.804 17.55 10.878 17.304 11.025C17.058 11.173 16.866 11.353 16.722 11.569C16.578 11.784 16.481 12.009 16.43 12.242C16.379 12.476 16.347 12.683 16.336 12.865H20.255C20.173 12.214 19.992 11.776 19.723 11.404Z" />
      <path d="M15.5 7H20.5V8.25H15.5V7Z" />
    </svg>
  ),
  Dribbble: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.83 8.3C17.88 9.6 18.53 11.23 18.56 13C16.76 12.57 15.03 12.56 13.38 12.77C13.14 12.25 12.9 11.75 12.63 11.26C14.13 10.56 15.58 9.58 16.83 8.3ZM15.22 7.05C14.12 8.19 12.81 9.08 11.46 9.75C10.64 8.12 9.8 6.86 9.17 6C10.02 5.72 10.92 5.57 11.85 5.57C13.13 5.57 14.33 5.86 15.37 6.39C15.35 6.4 15.32 6.4 15.32 6.4C15.29 6.42 15.26 6.46 15.22 7.05ZM7.5 6.32C7.54 6.34 7.58 6.37 8.13 6.95C8.76 7.79 9.59 9.06 10.39 10.71C8.26 11.36 5.85 11.67 3.83 11.67C4.3 9.33 5.65 7.35 7.5 6.32ZM3.57 13.27C3.57 13.23 3.57 13.18 3.57 13.13C3.72 13.14 3.88 13.14 4.05 13.14C6.28 13.14 8.93 12.79 11.25 12.03C11.47 12.47 11.69 12.92 11.89 13.38C11.72 13.43 11.56 13.48 11.4 13.54C8.92 14.49 6.88 16.42 5.63 18.17C4.33 16.74 3.57 14.96 3.57 13.27ZM7.04 19.2C8.15 17.66 9.92 15.96 12.08 15.13C13.03 17.5 13.73 20.04 14 21.97C12.75 22.43 11.4 22.68 9.97 22.68C8.83 22.68 7.71 22.5 6.68 22.15C6.77 21.96 6.88 21.72 7.04 19.2ZM15.6 21.22C15.34 19.48 14.7 17.12 13.83 14.87C15.38 14.69 17.03 14.77 18.76 15.27C18.39 17.65 17.24 19.75 15.6 21.22Z" />
    </svg>
  ),
  Github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.84 21.489C9.34 21.581 9.52 21.276 9.52 21.012C9.52 20.774 9.512 20.074 9.508 19.204C6.726 19.803 6.139 17.787 6.139 17.787C5.684 16.604 5.029 16.3 5.029 16.3C4.147 15.659 5.096 15.672 5.096 15.672C6.082 15.74 6.616 16.712 6.616 16.712C7.5 18.262 8.975 17.834 9.538 17.579C9.63 16.928 9.889 16.5 10.175 16.262C7.954 16.022 5.622 15.138 5.622 11.299C5.622 10.259 6.009 9.41 6.636 8.753C6.532 8.501 6.195 7.5 6.735 6.127C6.735 6.127 7.564 5.861 9.497 7.148C10.295 6.93 11.15 6.82 12 6.816C12.85 6.82 13.705 6.93 14.505 7.148C16.436 5.861 17.264 6.127 17.264 6.127C17.805 7.5 17.467 8.501 17.364 8.753C17.992 9.41 18.376 10.259 18.376 11.299C18.376 15.147 16.041 16.019 13.813 16.255C14.172 16.549 14.5 17.131 14.5 18.025C14.5 19.322 14.488 20.685 14.488 21.012C14.488 21.278 14.664 21.586 15.175 21.487C19.146 20.161 22 16.417 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  ),
  Work: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></path>
      <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"></path>
    </svg>
  ),
  Experience: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v20"></path>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  Projects: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 5V3"></path>
      <path d="m9 5 1 1"></path>
      <path d="m15 5-1 1"></path>
      <path d="M9 9h6"></path>
      <path d="M9 13h6"></path>
      <path d="M9 17h6"></path>
      <rect width="14" height="18" x="5" y="3" rx="2"></rect>
    </svg>
  ),
  Clients: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Resume: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
      <path d="M10 9H8"></path>
    </svg>
  ),
  Arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  )
};

// Reusable card component with hover effects
const BentoCard = ({ 
  colSpan = "col-span-1", 
  rowSpan = "row-span-1", 
  className = "", 
  children
}) => (
  <div className={`${colSpan} ${rowSpan} group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/[0.07] dark:bg-white/[0.07] border border-white/[0.1] hover:border-white/[0.2] shadow-lg transition-all ease-in-out duration-200 ${className}`}>
    {children}
  </div>
);

export default function BentoGrid() {
  return (
    <section id="section-bento" className="min-h-[100svh] sm:min-h-[100dvh] snap-start snap-always flex items-center justify-center p-4 sm:p-6">
      <div className="animate-bounce-in w-full max-w-6xl px-2">
        {/* True bento grid with varying card sizes and layout */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Main identity card with name and roles - wide card */}
          <BentoCard colSpan="col-span-4 md:col-span-4 lg:col-span-6" rowSpan="row-span-2" className="p-6 md:p-8 flex flex-col justify-between">
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">Shamim Bin Zahid</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white">Product Designer</span>
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white">Programmer</span>
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white">Usability Engineer</span>
              </div>
            </div>
          </BentoCard>

          {/* Current work card - medium sized card */}
          <BentoCard colSpan="col-span-4 md:col-span-2 lg:col-span-6" rowSpan="row-span-2" className="p-6 flex flex-col">
            <div className="flex items-start gap-4 h-full">
              <div className="mt-0.5">
                <Icons.Work className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Currently working at</h3>
                <p className="text-white/80 mt-1">
                  UX Designer at <span className="text-teal-300 font-medium">Airwork AI</span>
                </p>
              </div>
            </div>
          </BentoCard>
          
          {/* Behance card with username */}
          <BentoCard colSpan="col-span-2 md:col-span-2 lg:col-span-4" className="p-6 flex flex-col justify-between">
            <a href="https://behance.net/shamemezahid" target="_blank" rel="noreferrer" className="w-full h-full flex flex-col justify-between group">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Icons.Behance className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-white">Behance</span>
                </div>
                <Icons.Arrow className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-3 text-xs text-white/60">@shamemezahid</div>
            </a>
          </BentoCard>
          
          {/* Dribbble card with username */}
          <BentoCard colSpan="col-span-2 md:col-span-2 lg:col-span-4" className="p-6 flex flex-col justify-between">
            <a href="https://dribbble.com/shamemezahid" target="_blank" rel="noreferrer" className="w-full h-full flex flex-col justify-between group">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Icons.Dribbble className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-white">Dribbble</span>
                </div>
                <Icons.Arrow className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-3 text-xs text-white/60">@shamemezahid</div>
            </a>
          </BentoCard>
          
          {/* GitHub card with username */}
          <BentoCard colSpan="col-span-2 md:col-span-2 lg:col-span-4" className="p-6 flex flex-col justify-between">
            <a href="https://github.com/shamemezahid" target="_blank" rel="noreferrer" className="w-full h-full flex flex-col justify-between group">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Icons.Github className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-white">GitHub</span>
                </div>
                <Icons.Arrow className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-3 text-xs text-white/60">@shamemezahid</div>
            </a>
          </BentoCard>
          
          {/* Resume card */}
          <BentoCard colSpan="col-span-2 md:col-span-2 lg:col-span-3" rowSpan="row-span-1" className="p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/30">
            <a href="https://shamemezahid.github.io" target="_blank" rel="noreferrer" className="w-full h-full flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Icons.Resume className="w-6 h-6 text-blue-200" />
                  <span className="font-medium text-white">Resume</span>
                </div>
                <Icons.Arrow className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="py-2 px-4 mt-auto rounded-lg backdrop-blur-md text-center text-sm text-white/80">
                View Full Site
              </div>
            </a>
          </BentoCard>
          
          {/* Years of experience - medium */}
          <BentoCard colSpan="col-span-2 md:col-span-4 lg:col-span-3" rowSpan="row-span-1" className="p-6 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-0.5">
                <Icons.Experience className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <p className="text-4xl font-bold text-white">5+</p>
                <p className="text-white/70">Years in the industry</p>
              </div>
            </div>
          </BentoCard>
          
          {/* Projects stats */}
          <BentoCard colSpan="col-span-2 md:col-span-2 lg:col-span-3" className="p-6 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-0.5">
                <Icons.Projects className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <p className="text-4xl font-bold text-white">20+</p>
                <p className="text-white/70">Projects</p>
              </div>
            </div>
          </BentoCard>
          
          {/* Client stats */}
          <BentoCard colSpan="col-span-2 md:col-span-2 lg:col-span-3" className="p-6 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-0.5">
                <Icons.Clients className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <p className="text-4xl font-bold text-white">10+</p>
                <p className="text-white/70">Clients</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
