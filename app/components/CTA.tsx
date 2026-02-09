export default function CTA() {
  return (
    <section className="bg-[#2f3e2e] py-24 md:py-32 text-center text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          Ready to begin your <br /><span className="italic">healing journey?</span>
        </h2>
        <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
          Contact me today to schedule a free 15-minute consultation and see how we can work together.
        </p>
        <button className="px-10 py-4 bg-[#faf7f2] text-[#2f3e2e] rounded-full hover:bg-white transition-all duration-500 font-medium text-lg shadow-xl shadow-black/10">
          Book Your Free Consultation
        </button>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
    </section>
  );
}
