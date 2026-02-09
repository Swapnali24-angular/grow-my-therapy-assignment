export default function FAQ() {
  return (
    <section className="bg-[#faf7f2] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-medium text-[#2f3e2e] mb-16 text-center">
          Common Questions
        </h2>

        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="faq-card bg-white p-8 rounded-3xl border border-[#2f3e2e]/5 hover:soft-elevate transition-all duration-500">
            <h3 className="text-xl font-medium text-[#2f3e2e] mb-4 flex items-start gap-4">
              <span className="text-[#2f3e2e]/20 text-sm mt-1">01</span>
              Do you offer online therapy in California?
            </h3>
            <p className="text-gray-600 font-light leading-relaxed pl-9">
              Yes. I offer secure telehealth therapy to adults across California, in addition to in-person sessions in Santa Monica.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="faq-card bg-white p-8 rounded-3xl border border-[#2f3e2e]/5 hover:soft-elevate transition-all duration-500">
            <h3 className="text-xl font-medium text-[#2f3e2e] mb-4 flex items-start gap-4">
              <span className="text-[#2f3e2e]/20 text-sm mt-1">02</span>
              Who do you work with?
            </h3>
            <p className="text-gray-600 font-light leading-relaxed pl-9">
              I work with adults experiencing anxiety, trauma, burnout, and perfectionism in a supportive, collaborative space.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="faq-card bg-white p-8 rounded-3xl border border-[#2f3e2e]/5 hover:soft-elevate transition-all duration-500">
            <h3 className="text-xl font-medium text-[#2f3e2e] mb-4 flex items-start gap-4">
              <span className="text-[#2f3e2e]/20 text-sm mt-1">03</span>
              What approaches do you use?
            </h3>
            <p className="text-gray-600 font-light leading-relaxed pl-9">
              I use CBT, EMDR, mindfulness, and body-based approaches tailored to each individual.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="faq-card bg-white p-8 rounded-3xl border border-[#2f3e2e]/5 hover:soft-elevate transition-all duration-500">
            <h3 className="text-xl font-medium text-[#2f3e2e] mb-4 flex items-start gap-4">
              <span className="text-[#2f3e2e]/20 text-sm mt-1">04</span>
              Is therapy confidential?
            </h3>
            <p className="text-gray-600 font-light leading-relaxed pl-9">
              Yes. All sessions are confidential and follow professional ethical and legal standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
