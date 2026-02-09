export default function Footer() {
  return (
    <footer className="bg-[#faf7f2]/50 border-t border-[#e5e2dc] pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-4 mb-20">

        <div className="md:col-span-2">
          <p className="text-2xl font-serif font-medium text-[#2f3e2e] mb-6 tracking-tight">
            Dr. Maya Reynolds<span className="text-gray-400 font-sans text-sm ml-2 font-light">PsyD</span>
          </p>
          <p className="text-gray-600 font-light leading-relaxed max-w-sm">
            Licensed Psychologist helping adults work through anxiety, trauma,
            burnout, and perfectionism in Santa Monica and across California via telehealth.
          </p>
        </div>

        <div>
          <h4 className="text-[#2f3e2e] font-medium uppercase tracking-widest text-xs mb-6">
            Services
          </h4>
          <ul className="space-y-4 text-gray-600 font-light text-sm">
            <li className="hover:text-[#2f3e2e] transition-colors cursor-pointer">Anxiety Therapy</li>
            <li className="hover:text-[#2f3e2e] transition-colors cursor-pointer">Trauma Therapy</li>
            <li className="hover:text-[#2f3e2e] transition-colors cursor-pointer">CBT & EMDR</li>
            <li className="hover:text-[#2f3e2e] transition-colors cursor-pointer">Telehealth</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#2f3e2e] font-medium uppercase tracking-widest text-xs mb-6">
            Location
          </h4>
          <p className="text-gray-600 font-light text-sm mb-4 leading-relaxed">
            123 Calm Street, Suite 100<br />
            Santa Monica, CA 90401
          </p>
          <p className="text-[#2f3e2e] text-sm font-medium">
            Contact Me →
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 border-t border-[#e5e2dc] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 font-light">
          © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-400 font-light">
          <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-600 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
