import React from "react";

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function buildPath(w, h, cfg) {
  const { topLeftInset, topRightInset, leftCurve, rightCurve, bottomCurve } =
    cfg;

  return `
    M 0 ${topLeftInset}

    C 0 ${topLeftInset + 40},
      0 ${h - leftCurve},
      ${w * 0.15} ${h}

    C ${w * 0.4} ${h + bottomCurve * 0.2},
      ${w * 0.7} ${h - bottomCurve},
      ${w} ${h - bottomCurve}

    C ${w} ${h - 40},
      ${w} ${topRightInset + 40},
      ${w} ${topRightInset}

    L ${w} ${topRightInset + 10}

    C ${w * 0.7} ${topRightInset},
      ${w * 0.4} 0,
      ${w * 0.2} 0

    C ${w * 0.1} 0,
      0 ${topLeftInset},
      0 ${topLeftInset}

    Z
  `;
}

export default function CustomShape({
  width = 280,
  height = 174,

  topLeftInset = 15,
  topRightInset = 15,

  leftCurve = 20,
  rightCurve = 20,
  bottomCurve = 25,

  color = "#362A84",
}) {
  // 🔥 SAFE NORMALIZATION (THIS IS THE FIX)
  const maxH = height * 0.35;

  const safeLeft = clamp(leftCurve, 5, maxH);
  const safeRight = clamp(rightCurve, 5, maxH);
  const safeBottom = clamp(bottomCurve, 5, maxH);

  const d = buildPath(width, height, {
    topLeftInset,
    topRightInset,
    leftCurve: safeLeft,
    rightCurve: safeRight,
    bottomCurve: safeBottom,
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <path d={d} fill={color} />
    </svg>
  );
}
