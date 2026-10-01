import { BmiCalculator } from "./components/BmiCalculator";
import { IdealWeightCalculator } from "./components/IdealWeightCalculator";
import { PregnancyCalculator } from "./components/PregnancyCalculator";
import { BpChecker } from "./components/BpChecker";
import { BookingForm } from "./components/BookingForm";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#0ea5a0]/10 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[#38bdf8]/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-xs tracking-widest text-[#0ea5a0]">
              CAREFIRST CLINIC // ALIGARH
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Healthcare you can
              <br />
              <span className="bg-gradient-to-r from-[#0ea5a0] to-[#38bdf8] bg-clip-text text-transparent">
                trust.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-[#7e8a93]">
              Experienced doctors. Modern equipment. Same-day appointments.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="rounded-full bg-[#0ea5a0] px-8 py-4 font-semibold text-white transition hover:bg-[#14b8b2] hover:shadow-[0_0_30px_-5px_#0ea5a0]"
              >
                BOOK APPOINTMENT →
              </a>
              <a
                href="#tools"
                className="rounded-full border border-[#1e252b] px-8 py-4 font-semibold text-white transition hover:border-[#0ea5a0] hover:text-[#0ea5a0]"
              >
                FREE HEALTH TOOLS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST TICKER */}
      <section className="overflow-hidden border-y border-[#1e252b] bg-[#0e1215] py-5">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-sm text-[#7e8a93]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>
                <span className="text-[#0ea5a0]">✓</span> 15+ YEARS EXPERIENCE
              </span>
              <span>
                <span className="text-[#0ea5a0]">✓</span> 10,000+ PATIENTS
              </span>
              <span>
                <span className="text-[#0ea5a0]">✓</span> MODERN EQUIPMENT
              </span>
              <span>
                <span className="text-[#0ea5a0]">✓</span> STERILIZED CARE
              </span>
              <span>
                <span className="text-[#0ea5a0]">✓</span> SAME-DAY APPOINTMENTS
              </span>
              <span>
                <span className="text-[#0ea5a0]">✓</span> INSURANCE ACCEPTED
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#0ea5a0]">
            OUR SERVICES
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Complete care under one roof.
          </h2>
          <p className="max-w-2xl text-lg text-[#7e8a93]">
            General, cosmetic, and emergency medical services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon="🩺"
            title="General Consultation"
            description="Routine checkups and diagnosis for all ages."
          />
          <ServiceCard
            icon="🦷"
            title="Dental Care"
            description="Cleaning, fillings, root canals, and cosmetic dentistry."
          />
          <ServiceCard
            icon="✨"
            title="Cosmetic Treatments"
            description="Teeth whitening, veneers, and smile makeovers."
          />
          <ServiceCard
            icon="🦷"
            title="Orthodontics"
            description="Braces and aligners for all age groups."
          />
          <ServiceCard
            icon="🚑"
            title="Emergency Care"
            description="Same-day appointments for urgent issues."
          />
          <ServiceCard
            icon="👨‍⚕️"
            title="Specialist Referrals"
            description="Access to a trusted network of specialists."
          />
        </div>
      </section>

      {/* HEALTH TOOLS */}
      <section id="tools" className="border-y border-[#1e252b] bg-[#0e1215]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#0ea5a0]">
              FREE HEALTH TOOLS
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Know your health numbers.
            </h2>
            <p className="max-w-2xl text-lg text-[#7e8a93]">
              Free health calculators for you and your family. No signup
              required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div id="bmi">
              <BmiCalculator />
            </div>
            <div id="weight">
              <IdealWeightCalculator />
            </div>
            <div id="pregnancy">
              <PregnancyCalculator />
            </div>
            <div id="bp">
              <BpChecker />
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#0ea5a0]">
            OUR DOCTORS
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Experienced. Trusted. Caring.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <DoctorCard
            name="Dr. Abdul Bari"
            specialty="Consultant Dental & Cosmetic Surgeon"
            credentials="BDS (Hons), Fellowship in Implantology"
            experience="25 years"
          />
          <DoctorCard
            name="Dr. Priya Sharma"
            specialty="General Physician"
            credentials="MBBS, MD (Internal Medicine)"
            experience="12 years"
          />
          <DoctorCard
            name="Dr. Rehan Khan"
            specialty="Orthodontist"
            credentials="BDS, MDS (Orthodontics)"
            experience="10 years"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-[#1e252b] bg-[#0e1215]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#0ea5a0]">
              PATIENT STORIES
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Trusted by families in Aligarh.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Suresh Kumar"
              treatment="Root Canal"
              text="Painless procedure and the doctor explained everything. Highly recommended."
            />
            <TestimonialCard
              name="Fatima Khan"
              treatment="Regular Checkup"
              text="Clean facility, professional staff, and no waiting time. My whole family goes here now."
            />
            <TestimonialCard
              name="Arun Verma"
              treatment="Teeth Whitening"
              text="Amazing results. The team was patient with all my questions."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#0ea5a0]">
            FREQUENTLY ASKED
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-4">
          <Faq q="Do I need an appointment?">
            Walk-ins are welcome but appointments get priority. Book online in
            30 seconds for same-day service.
          </Faq>
          <Faq q="What are the consultation fees?">
            General consultations start at ₹500. Dental procedures vary by
            service. Contact us for exact pricing.
          </Faq>
          <Faq q="Do you accept insurance?">
            Yes. We work with most major insurance providers. Bring your
            policy details on your first visit.
          </Faq>
          <Faq q="Is emergency care available?">
            Yes. We offer same-day emergency appointments. Call us directly
            for urgent cases.
          </Faq>
          <Faq q="Are the doctors qualified?">
            All our doctors are board-certified with an average of 15+ years
            of experience.
          </Faq>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="border-t border-[#1e252b] bg-[#0e1215]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#0ea5a0]">
              BOOK APPOINTMENT
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Book in 30 seconds.
            </h2>
            <p className="max-w-2xl text-lg text-[#7e8a93]">
              Choose your service and time. We&apos;ll WhatsApp you to confirm.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#1e252b] bg-[#0e1215] p-6 transition-all duration-500 hover:border-[#0ea5a0]/50 hover:-translate-y-1">
      <p className="mb-4 text-3xl">{icon}</p>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-[#7e8a93] leading-relaxed">{description}</p>
    </div>
  );
}

function DoctorCard({
  name,
  specialty,
  credentials,
  experience,
}: {
  name: string;
  specialty: string;
  credentials: string;
  experience: string;
}) {
  return (
    <div className="rounded-2xl border border-[#1e252b] bg-[#0e1215] p-6 transition hover:border-[#0ea5a0]/50">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5a0] to-[#38bdf8] text-xl font-bold text-white">
        {name
          .replace("Dr. ", "")
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <h3 className="mb-1 text-xl font-bold">{name}</h3>
      <p className="mb-1 text-sm text-[#0ea5a0]">{specialty}</p>
      <p className="mb-3 text-xs text-[#7e8a93]">{credentials}</p>
      <p className="font-mono text-xs text-[#38bdf8]">
        {experience} experience
      </p>
    </div>
  );
}

function TestimonialCard({
  name,
  treatment,
  text,
}: {
  name: string;
  treatment: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#1e252b] bg-[#07090b] p-6">
      <p className="mb-4 font-mono text-xs tracking-widest text-[#0ea5a0]">
        {treatment.toUpperCase()}
      </p>
      <p className="mb-6 text-[#d4d8db] leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <div className="border-t border-[#1e252b] pt-4">
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-lg border border-[#1e252b] bg-[#0e1215] p-5 transition-colors hover:border-[#0ea5a0]/50">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-[#f5f7f8]">
        {q}
        <span className="text-xl text-[#0ea5a0] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-[#7e8a93]">{children}</p>
    </details>
  );
}