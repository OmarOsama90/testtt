const o = { strokeLinecap: "round" };
export const Dog = () => (
  <svg viewBox="0 0 200 200" role="img" aria-label="كلب">
    <path d="M40 70c-22 10-24 55-6 70 14 6 22-14 20-40z" fill="#b9793d" />
    <path d="M160 70c22 10 24 55 6 70-14 6-22-14-20-40z" fill="#b9793d" />
    <circle cx="100" cy="105" r="62" fill="#e8b36e" />
    <ellipse cx="100" cy="126" rx="34" ry="26" fill="#fff3df" />
    <circle cx="76" cy="94" r="7" fill="#1d3a35" /><circle cx="124" cy="94" r="7" fill="#1d3a35" />
    <ellipse cx="100" cy="114" rx="11" ry="8" fill="#1d3a35" />
    <path d="M100 122v8m-12 2c6 6 18 6 24 0" stroke="#1d3a35" strokeWidth="3" fill="none" {...o} />
    <path d="M92 140c0 14 16 14 16 0z" fill="#f08a8a" />
  </svg>
);
export const Cat = () => (
  <svg viewBox="0 0 200 200" role="img" aria-label="قطة">
    <path d="M40 72L52 20l38 30z" fill="#8f9e99" /><path d="M160 72l-12-52-38 30z" fill="#8f9e99" />
    <circle cx="100" cy="112" r="62" fill="#c9d3cf" />
    <ellipse cx="78" cy="102" rx="10" ry="12" fill="#fff" /><ellipse cx="122" cy="102" rx="10" ry="12" fill="#fff" />
    <circle cx="78" cy="104" r="6" fill="#2c8b7e" /><circle cx="122" cy="104" r="6" fill="#2c8b7e" />
    <path d="M94 122h12l-6 8z" fill="#f08a8a" />
    <path d="M100 130c-4 8-14 8-18 2m18-2c4 8 14 8 18 2M40 120h28M42 134l26-6M160 120h-28M158 134l-26-6" stroke="#1d3a35" strokeWidth="2.6" fill="none" {...o} />
  </svg>
);
export const Bird = () => (
  <svg viewBox="0 0 200 200" role="img" aria-label="ببغاء">
    <path d="M120 150l34 42-56-22z" fill="#4aa8c8" />
    <ellipse cx="100" cy="122" rx="48" ry="62" fill="#6cc04a" />
    <circle cx="100" cy="62" r="34" fill="#f6d84c" />
    <circle cx="112" cy="56" r="7" fill="#fff" /><circle cx="113" cy="56" r="3.5" fill="#1d3a35" />
    <path d="M118 66c16 0 22 12 8 22-7-5-11-12-8-22z" fill="#f08a3c" />
    <path d="M62 110c-14 20-8 44 14 52 4-24 2-40-14-52z" fill="#3f9a3a" />
  </svg>
);
export const Doc = ({ skin = "#f1c7a0", hair = "#3b2a20", bg = "#e5f0ec", f, beard }) => (
  <svg viewBox="0 0 100 100" role="img" aria-label="طبيب">
    <rect width="100" height="100" fill={bg} />
    <path d="M16 100c0-24 15-34 34-34s34 10 34 34z" fill="#fff" />
    <path d="M42 68l8 15 8-15z" fill="#2c8b7e" />
    {f && <path d="M29 44c-3 20 1 30 6 32l3-30zM71 44c3 20-1 30-6 32l-3-30z" fill={hair} />}
    <circle cx="50" cy="42" r="19" fill={skin} />
    {beard && <path d="M31 46c2 24 36 24 38 0-6 12-32 12-38 0z" fill={hair} />}
    <path d={f ? "M29 44c-4-28 42-28 42 0-8-12-34-12-42 0z" : "M31 40c2-22 36-22 38 0-9-8-29-8-38 0z"} fill={hair} />
    <circle cx="43" cy="44" r="2.2" fill="#1d3a35" /><circle cx="57" cy="44" r="2.2" fill="#1d3a35" />
    <path d="M44 53c4 4 8 4 12 0" stroke="#fff" strokeWidth={beard ? 2 : 0} fill="none" />
    {!beard && <path d="M44 53c4 4 8 4 12 0" stroke="#1d3a35" strokeWidth="2" fill="none" {...o} />}
  </svg>
);
export const Can = ({ c, e }) => (
  <svg viewBox="0 0 100 100" role="img" aria-label="منتج">
    <ellipse cx="50" cy="84" rx="29" ry="8" fill="#cfd6d4" /><rect x="21" y="22" width="58" height="62" fill="#eef2f0" />
    <rect x="21" y="40" width="58" height="32" fill={c} />
    <ellipse cx="50" cy="22" rx="29" ry="8" fill="#d6dcda" />
    <text x="50" y="64" textAnchor="middle" fontSize="22">{e}</text>
  </svg>
);
