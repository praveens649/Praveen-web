import Image from "next/image";
import SocialTooltip from "../../../components/tooltip";

const page = () => {
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
      </div>
    </>
  );
};

export default page;
