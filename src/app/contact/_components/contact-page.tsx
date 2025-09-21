"use client";
import AnimatedButton from "@/components/ui/animatedButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SocialTooltip from "../../../../components/tooltip";
const ContactPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <section className="pt-16 md:pt-22 pb-12 md:pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto mb-3.5 space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              CONTACT
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:mt-0 sm:inline sm:ml-0">ME</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions. Feel free to reach
              out!
            </p>
          </div>

          {/* Resume Download Section */}
          <div className="max-w-3xl mx-auto mt-12 md:mt-16 text-center">
            <a
              href="/Praveen.pdf" // Make sure to add your resume PDF in the public folder
              download="Praveen_Resume.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-base sm:text-lg
                overflow-hidden rounded-full border-2 border-white/20 bg-black 
                transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/20
                hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
            >
              <span className="relative z-10 text-white/90 group-hover:text-cyan-300 transition-colors duration-300">
                Download Resume
              </span>
              <svg
                className="absolute right-3 w-5 h-5 transform translate-x-8 opacity-0 transition-all duration-300 
                  group-hover:translate-x-0 group-hover:opacity-100 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>

          {/* Contact Image Section */}
          <div className="max-w-3xl mx-auto mt-8 md:mt-12 relative px-4 sm:px-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/contact.avif"
                alt="Contact Visual"
                width={600}
                height={450}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                priority
                quality={85}
              />
            </div>
          </div>

          

          <div className="max-w-7xl mx-auto mt-8 md:mt-12">
            <SocialTooltip />
          </div>
        </section>
        <div className="fixed bottom-8 right-8 z-50">
          <AnimatedButton onClick={() => router.push("/")} text="Home" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
