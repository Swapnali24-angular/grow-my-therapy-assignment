export default function Services() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-[#2f3e2e] mb-6">
            Therapy services in Santa Monica
          </h2>
          <p className="text-gray-600 font-light text-lg">
            Specialized care tailored to your unique needs, helping you find balance and resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-item group p-10 rounded-[2rem] bg-[#faf7f2]/50 border border-[#2f3e2e]/5 hover:bg-white hover:soft-elevate transition-all duration-500">
            <div className="w-12 h-0.5 bg-[#2f3e2e]/20 mb-8 group-hover:w-20 group-hover:bg-[#2f3e2e] transition-all duration-500" />
            <h3 className="text-2xl font-medium text-[#2f3e2e] mb-5">Anxiety Therapy</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Anxiety therapy in Santa Monica for adults who feel overwhelmed, tense, or stuck in constant worry. Together, we build calm and coping skills that feel manageable.
            </p>
          </div>


          <div className="card-item group p-10 rounded-[2rem] bg-[#faf7f2]/50 border border-[#2f3e2e]/5 hover:bg-white hover:soft-elevate transition-all duration-500">
            <div className="w-12 h-0.5 bg-[#2f3e2e]/20 mb-8 group-hover:w-20 group-hover:bg-[#2f3e2e] transition-all duration-500" />
            <h3 className="text-2xl font-medium text-[#2f3e2e] mb-5">Trauma-Informed Therapy</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Trauma-informed therapy in Santa Monica using gentle, evidence-based approaches to help you feel safer in your body and regain emotional balance.
            </p>
          </div>


          <div className="card-item group p-10 rounded-[2rem] bg-[#faf7f2]/50 border border-[#2f3e2e]/5 hover:bg-white hover:soft-elevate transition-all duration-500">
            <div className="w-12 h-0.5 bg-[#2f3e2e]/20 mb-8 group-hover:w-20 group-hover:bg-[#2f3e2e] transition-all duration-500" />
            <h3 className="text-2xl font-medium text-[#2f3e2e] mb-5">Burnout & Perfectionism</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Support for adults struggling with burnout and perfectionism in Santa Monica, helping you slow down, set healthier boundaries, and reconnect with yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
