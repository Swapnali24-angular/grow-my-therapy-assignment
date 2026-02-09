import Image from "next/image";

export default function Office() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-[#2f3e2e] mb-8">
            A Calm Space for Healing
          </h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Dr. Maya Reynolds offers therapy in a quiet, welcoming office
            located in Santa Monica, California. The space is designed to
            help you feel safe, comfortable, and at ease from the moment
            you arrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="group overflow-hidden rounded-[2.5rem] soft-elevate">
            <Image
              src="/images/office1.jpeg"
              alt="Therapy office in Santa Monica"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="group overflow-hidden rounded-[2.5rem] soft-elevate">
            <Image
              src="/images/office2.jpeg"
              alt="Calm counseling room interior"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#2f3e2e]/60 font-medium uppercase tracking-widest text-xs">
            In-person & Telehealth Available
          </p>
          <p className="text-gray-600 mt-2 font-light">
            Conveniently located in the heart of Santa Monica.
          </p>
        </div>

      </div>
    </section>
  );
}
