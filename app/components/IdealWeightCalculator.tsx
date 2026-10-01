"use client";

import { useState } from "react";

export function IdealWeightCalculator() {
  const [height, setHeight] = useState(170);
  const [gender, setGender] = useState<"male" | "female">("male");

  // Devine formula
  const heightInches = height / 2.54;
  const base = gender === "male" ? 50 : 45.5;
  const ideal = base + 2.3 * (heightInches - 60);
  const minWeight = Math.round(ideal * 0.9);
  const maxWeight = Math.round(ideal * 1.1);

  return (
    <div className="rounded-2xl border border-[#1e252b] bg-[#0e1215] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#0ea5a0]">
        IDEAL WEIGHT
      </p>
      <h3 className="mb-8 text-2xl font-bold">
        Find your healthy weight range.
      </h3>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setGender("male")}
            className={`rounded-lg border py-3 text-sm font-medium transition ${
              gender === "male"
                ? "border-[#0ea5a0] bg-[#0ea5a0]/10 text-[#0ea5a0]"
                : "border-[#1e252b] text-[#7e8a93]"
            }`}
          >
            Male
          </button>
          <button
            onClick={() => setGender("female")}
            className={`rounded-lg border py-3 text-sm font-medium transition ${
              gender === "female"
                ? "border-[#0ea5a0] bg-[#0ea5a0]/10 text-[#0ea5a0]"
                : "border-[#1e252b] text-[#7e8a93]"
            }`}
          >
            Female
          </button>
        </div>

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

        <div className="rounded-xl border border-[#10b981]/40 bg-[#10b981]/10 p-6 text-center">
          <p className="mb-2 font-mono text-xs tracking-widest text-[#7e8a93]">
            HEALTHY RANGE
          </p>
          <p className="text-4xl font-bold text-[#10b981]">
            {minWeight}–{maxWeight}
          </p>
          <p className="mt-2 text-sm text-[#7e8a93]">kilograms</p>
        </div>

        <a
          href="#book"
          className="block w-full rounded-full bg-[#0ea5a0] py-3 text-center font-semibold text-white transition hover:bg-[#14b8b2]"
        >
          GET A NUTRITION PLAN →
        </a>
      </div>
    </div>
  );
}