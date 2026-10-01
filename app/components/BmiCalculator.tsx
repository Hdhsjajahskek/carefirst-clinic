"use client";

import { useState } from "react";

export function BmiCalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = weight / Math.pow(height / 100, 2);
  const rounded = Math.round(bmi * 10) / 10;

  let category = "";
  let color = "#38bdf8";
  let advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#38bdf8";
    advice = "Consider a nutrition consultation.";
  } else if (bmi < 25) {
    category = "Healthy weight";
    color = "#10b981";
    advice = "You're in a healthy range. Maintain it.";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "#f59e0b";
    advice = "A health checkup is recommended.";
  } else {
    category = "Obese";
    color = "#ff2d00";
    advice = "Please book a consultation with our doctor.";
  }

  return (
    <div className="rounded-2xl border border-[#1e252b] bg-[#0e1215] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#0ea5a0]">
        BMI CALCULATOR
      </p>
      <h3 className="mb-8 text-2xl font-bold">Check your body mass index.</h3>

      <div className="space-y-8">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="font-mono text-xs tracking-widest text-[#7e8a93]">
              HEIGHT (CM)
            </label>
            <span className="font-mono text-sm text-[#0ea5a0]">{height}</span>
          </div>
          <input
            type="range"
            min={140}
            max={220}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#1e252b] accent-[#0ea5a0]"
          />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="font-mono text-xs tracking-widest text-[#7e8a93]">
              WEIGHT (KG)
            </label>
            <span className="font-mono text-sm text-[#0ea5a0]">{weight}</span>
          </div>
          <input
            type="range"
            min={30}
            max={150}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#1e252b] accent-[#0ea5a0]"
          />
        </div>

        <div
          className="rounded-xl border p-6 text-center"
          style={{ borderColor: `${color}40`, background: `${color}10` }}
        >
          <p className="mb-2 font-mono text-xs tracking-widest text-[#7e8a93]">
            YOUR BMI
          </p>
          <p className="text-5xl font-bold" style={{ color }}>
            {rounded}
          </p>
          <p className="mt-2 text-sm font-medium" style={{ color }}>
            {category}
          </p>
          <p className="mt-3 text-xs text-[#7e8a93]">{advice}</p>
        </div>

        <a
          href="#book"
          className="block w-full rounded-full bg-[#0ea5a0] py-3 text-center font-semibold text-white transition hover:bg-[#14b8b2]"
        >
          BOOK A CONSULTATION →
        </a>
      </div>
    </div>
  );
}