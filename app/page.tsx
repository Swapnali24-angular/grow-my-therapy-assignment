import Image from "next/image";
import Services from "./components/services";
import CTA from "./components/CTA";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import About from "./components/about";
import Office from "./components/office";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1 relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/50 border border-[#2f3e2e]/10 text-[#2f3e2e] text-xs font-semibold uppercase tracking-widest">
              Licensed Psychologist in Santa Monica
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#2f3e2e] leading-[1.1] mb-8 text-balance">
              Find your path to <span className="italic">inner peace</span> and healing
            </h1>
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-10 text-balance max-w-lg">
              A warm, supportive space to slow down, feel understood, and begin healing from anxiety and trauma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#2f3e2e] text-white rounded-full hover:bg-[#1c2a1c] transition-all duration-500 font-medium shadow-lg shadow-[#2f3e2e]/10">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-[#2f3e2e]/20 text-[#2f3e2e] rounded-full hover:bg-white transition-all duration-500 font-medium">
                Our Services
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="relative">
              <Image
                src="/images/hero.png"
                alt="Calm therapy space in Santa Monica"
                width={600}
                height={600}
                className="rounded-[3rem] object-cover soft-elevate relative z-10"
                priority
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2f3e2e]/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/50 rounded-full blur-3xl border border-white" />
            </div>
          </div>

        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2f3e2e]/[0.02] -z-10" />
      </section>

      <div className="space-y-4 md:space-y-8">
        <Services />
        <About />
        <Office />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
