"use client";

import { useState } from "react";

export function BpChecker() {
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);

  let category = "";
  let color = "#10b981";
  let advice = "";

  if (systolic < 90 || diastolic < 60) {
    category = "Low blood pressure";
    color = "#38bdf8";
    advice = "Stay hydrated. Consult a doctor if you feel dizzy.";
  } else if (systolic < 120 && diastolic < 80) {
    category = "Normal";
    color = "#10b981";
    advice = "Keep up your healthy habits.";
  } else if (systolic < 130 && diastolic < 80) {
    category = "Elevated";
    color = "#f59e0b";
    advice = "Monitor regularly. Reduce salt intake.";
  } else if (systolic < 140 || diastolic < 90) {
    category = "Stage 1 Hypertension";
    color = "#f59e0b";
    advice = "Book a consultation. Lifestyle changes needed.";
  } else {
    category = "Stage 2 Hypertension";
    color = "#ff2d00";
    advice = "Book a consultation with our doctor urgently.";
  }

  return (
    <div className="rounded-2xl border border-[#1e252b] bg-[#0e1215] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#0ea5a0]">
        BLOOD PRESSURE CHECKER
      </p>
      <h3 className="mb-8 text-2xl font-bold">
        Check your blood pressure range.
      </h3>

      <div className="space-y-8">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="font-mono text-xs tracking-widest text-[#7e8a93]">
              SYSTOLIC (TOP)
            </label>
            <span className="font-mono text-sm text-[#0ea5a0]">
              {systolic} mmHg
            </span>
          </div>
          <input
            type="range"
            min={80}
            max={200}
            value={systolic}
            onChange={(e) => setSystolic(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#1e252b] accent-[#0ea5a0]"
          />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="font-mono text-xs tracking-widest text-[#7e8a93]">
              DIASTOLIC (BOTTOM)
            </label>
            <span className="font-mono text-sm text-[#0ea5a0]">
              {diastolic} mmHg
            </span>
          </div>
          <input
            type="range"
            min={50}
            max={130}
            value={diastolic}
            onChange={(e) => setDiastolic(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#1e252b] accent-[#0ea5a0]"
          />
        </div>

        <div
          className="rounded-xl border p-6 text-center"
          style={{ borderColor: `${color}40`, background: `${color}10` }}
        >
          <p className="mb-2 font-mono text-xs tracking-widest text-[#7e8a93]">
            READING
          </p>
          <p className="text-4xl font-bold" style={{ color }}>
            {systolic}/{diastolic}
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color }}>
            {category}
          </p>
          <p className="mt-3 text-xs text-[#7e8a93]">{advice}</p>
        </div>

        <a
          href="#book"
          className="block w-full rounded-full bg-[#0ea5a0] py-3 text-center font-semibold text-white transition hover:bg-[#14b8b2]"
        >
          BOOK A HEALTH CHECKUP →
        </a>
      </div>
    </div>
  );
}