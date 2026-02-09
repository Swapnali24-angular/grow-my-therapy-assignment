import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-2">
            <h2 className="text-4xl md:text-5xl font-medium text-[#2f3e2e] mb-8 leading-tight">
              Meet Dr. Maya Reynolds, <span className="italic block mt-1">PsyD</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Dr. Maya Reynolds is a licensed clinical psychologist based in
                Santa Monica, California. She works with adults who feel stuck
                in cycles of anxiety, trauma, burnout, or perfectionism.
              </p>

              <p>
                Her approach is warm, collaborative, and grounded in
                evidence-based practices like CBT, EMDR, mindfulness,
                and body-based therapy.
              </p>

              <p className="italic text-[#2f3e2e]/80">
                "Therapy with Dr. Maya is a space where you can slow down,
                feel understood, and build skills to feel calmer and more
                connected in daily life."
              </p>
            </div>

            <button className="mt-10 px-8 py-3.5 border border-[#2f3e2e] text-[#2f3e2e] rounded-full hover:bg-[#2f3e2e] hover:text-white transition-all duration-500 font-medium uppercase tracking-wider text-xs">
              Learn More About My Practice
            </button>
          </div>

          <div className="order-1 md:order-1 flex justify-center relative">
            <div className="relative z-10">
              <Image
                src="/images/maya.png"
                alt="Dr. Maya Reynolds therapist in Santa Monica"
                width={420}
                height={520}
                className="rounded-[2.5rem] object-cover soft-elevate grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#faf7f2] rounded-full -z-10 border border-[#e5e2dc]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
