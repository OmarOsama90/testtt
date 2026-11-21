import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig, useInView, animate } from "framer-motion";
import { ShoppingCart, Menu, X, MessageCircle, Plus, Minus, ChevronDown, Stethoscope, Syringe, Home, Scissors, Sparkles, FlaskConical, HeartPulse, FileCheck, MapPin, Phone, Clock, Star } from "lucide-react";
import { Dog, Cat, Bird, Doc, Can } from "./art.jsx";

const WA = "966565636919"; // غيّر الرقم هنا
const ar = (n) => String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]).replace(".", "٫");
const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const rise = (i = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.55, delay: (i % 4) * 0.08 } });

const SVC = [[Stethoscope, "كشف عام", "فحص شامل وتشخيص دقيق."], [Syringe, "تطعيمات", "باقات للقطط والكلاب والطيور."], [Home, "زيارات منزلية", "نجيك لين البيت وبدون توتر."], [Scissors, "ترويش وحلاقة", "عناية كاملة بالفرو والأظافر."], [Sparkles, "الأسنان", "تنظيف وفحص دوري."], [FlaskConical, "تحاليل", "نتائج سريعة بمختبر داخلي."], [HeartPulse, "جراحة وتعقيم", "غرفة عمليات مجهزة."], [FileCheck, "شهادات سفر", "شهادة صحية وفطرية للسفر."]];
const OFF = [["تطعيمات القطط كاملة", 150, 300], ["تطعيمات الطيور كاملة", 100, 200], ["تعقيم الإناث", 250, 550], ["تعقيم الذكور", 150, 275], ["ترويش وحلاقة", 99, 150], ["شهادة فطرية لملكية طير", 75, 150]];
const PRD = [["معلبات لولي للقطط", "قطط", 11.5, "🐱", "#f48fb1"], ["معلبات بيس بيس موس", "قطط", 11.5, "🐟", "#64b5f6"], ["معلبات دولمة", "قطط", 11.5, "🐈", "#ffd54f"], ["كريمي مكافآت القطط", "قطط", 18, "🍣", "#ffab76"], ["أكل كلاب للبالغين", "كلاب", 85, "🐕", "#a5d6a7"], ["عظمة تنظيف الأسنان", "كلاب", 22, "🦴", "#ce93d8"], ["زولوكس كرنشي ستك", "طيور", 12.5, "🦜", "#81d4fa"], ["أكل طيور روز كراون", "طيور", 27, "🌾", "#ffcc80"], ["شامبو للحيوانات", "عناية", 39, "🧴", "#b0bec5"]];
const CATS = ["الكل", ...new Set(PRD.map((p) => p[1]))];
const TEAM = [["د. محمد الأشقر", "طبيب بيطري · الحالات العامة والطوارئ", { skin: "#e3b48a", beard: true, bg: "#fbefcb" }], ["د. فهد العتيبي", "استشاري الجراحة والعظام", { skin: "#f1c7a0", hair: "#2b2a33" }], ["د. نورة الشمري", "الطب الباطني والجلدية", { f: true, skin: "#f3cfae", hair: "#4a2f27", bg: "#f9e1da" }], ["د. خالد القحطاني", "الطيور والحيوانات الغريبة", { skin: "#d9a577", hair: "#1f1b1a" }]];
const REV = [["سارة الدوسري", "الدكتورة شرحت لي كل شي عن تطعيمات قطتي، والموعد كان بالضبط."], ["عبدالله الحربي", "طلبت زيارة منزلية لكلبي الخايف من العيادات، وكانوا لطيفين معه."], ["ريم الزهراني", "الأكل أصلي والتوصيل وصل بنفس اليوم. أنصح فيهم."]];
const FAQ = [["متى أبدأ بتطعيمات القطة أو الجرو؟", "غالباً من عمر ٦ إلى ٨ أسابيع، والطبيب يحدد لك الجدول حسب حالة الحيوان."], ["هل تقدمون زيارات منزلية؟", "نعم، بحجز مسبق وحسب المنطقة. اختر «زيارة منزلية» في نموذج الحجز."], ["كم مدة التوصيل؟", "داخل المدينة خلال يوم إلى يومين، ولباقي المناطق من ٢ إلى ٤ أيام عمل."], ["كيف أدفع؟", "الدفع عند الاستلام، أو تحويل بنكي، أو في العيادة بالبطاقة."]];
const LINKS = [["services", "الخدمات"], ["offers", "العروض"], ["store", "المتجر"], ["team", "الفريق"], ["faq", "أسئلة شائعة"], ["contact", "تواصل"]];

function Count({ to, dec = 0, suffix = "" }) {
  const r = useRef(), seen = useInView(r, { once: true }), [n, setN] = useState(0);
  useEffect(() => { if (!seen) return; const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: setN }); return () => c.stop(); }, [seen, to]);
  return <b ref={r}>{ar(n.toFixed(dec))}{suffix}</b>;
}
const float = (d = 0, y = 12) => ({ animate: { y: [0, -y, 0] }, transition: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: d } });
function Q({ q, a }) {
  const [o, setO] = useState(false);
  return (
    <motion.div className="faq" {...rise()}>
      <button aria-expanded={o} onClick={() => setO(!o)}>{q}<motion.span animate={{ rotate: o ? 180 : 0 }}><ChevronDown size={18} /></motion.span></button>
      <AnimatePresence initial={false}>{o && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>{a}</motion.p>}</AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  const [cat, setCat] = useState("الكل"), [cart, setCart] = useState({}), [drawer, setDrawer] = useState(false), [menu, setMenu] = useState(false), [toast, setToast] = useState("");
  const ids = Object.keys(cart), count = ids.reduce((s, i) => s + cart[i], 0), total = ids.reduce((s, i) => s + cart[i] * PRD[i][2], 0);
  const say = (m) => { setToast(m); setTimeout(() => setToast(""), 1800); };
  const add = (i, d = 1) => setCart((c) => { const q = (c[i] || 0) + d, n = { ...c }; q > 0 ? (n[i] = q) : delete n[i]; return n; });
  const order = () => window.open(wa("السلام عليكم، أبي أطلب:\n" + ids.map((i) => `- ${PRD[i][0]} × ${cart[i]}`).join("\n") + `\nالمجموع: ${total} ر.س`), "_blank");
  const book = (e) => { e.preventDefault(); const f = Object.fromEntries(new FormData(e.target)); window.open(wa(`السلام عليكم، أبي أحجز موعد:\nالاسم: ${f.n}\nالجوال: ${f.p}\nالحيوان: ${f.a}\nالخدمة: ${f.s}\nالتاريخ: ${f.d}\nالمكان: ${f.w}\nملاحظات: ${f.m || "-"}`), "_blank"); };
  return (
    <MotionConfig reducedMotion="user">
      <header>
        <div className="wrap nav">
          <a className="logo" href="#top"><i>🐾</i>الرفعة البيطرية</a>
          <nav><ul id="links" className={menu ? "open" : ""}>{LINKS.map(([id, t]) => <li key={id}><a href={"#" + id} onClick={() => setMenu(false)}>{t}</a></li>)}</ul></nav>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <motion.button whileTap={{ scale: 0.92 }} className="cartbtn" onClick={() => setDrawer(true)} aria-label="فتح السلة"><ShoppingCart size={18} style={{ verticalAlign: "-3px" }} /><motion.b key={count} initial={{ scale: 1.6 }} animate={{ scale: 1 }}>{ar(count)}</motion.b></motion.button>
            <a className="btn hide-s" href="#booking">احجز الآن</a>
            <button className="menu" onClick={() => setMenu(!menu)} aria-label="القائمة">{menu ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>

      <main id="top">
        <div className="hero"><div className="wrap">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>رعاية تليق بأفراد عائلتك الصغار</motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>عيادة بيطرية بأجواء هادئة وفريق يحب الحيوانات مثلك. نكشف عليهم في العيادة، أو نجيهم لين البيت.</motion.p>
            <motion.div className="cta" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="btn" href="#booking">احجز موعد كشف</motion.a>
              <a className="btn ghost" href="#store">تسوّق المستلزمات</a>
            </motion.div>
            <div className="stats"><div><Count to={12} suffix="+" /><span>سنة خبرة</span></div><div><Count to={5000} suffix="+" /><span>حيوان تمت رعايته</span></div><div><Count to={4.9} dec={1} /><span>تقييم العملاء</span></div></div>
          </div>
          <div className="art">
            <motion.div className="blob" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}><motion.div {...float(0, 10)} style={{ display: "contents" }}><Dog /></motion.div></motion.div>
            <motion.div className="blob2" {...float(1.2, 8)}><Cat /></motion.div>
            <motion.div className="bird" {...float(0.6, 14)}><Bird /></motion.div>
            <motion.div className="float f1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>⭐ ٤٫٩ تقييم العملاء</motion.div>
            <motion.div className="float f2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}>🩺 كشف بدون انتظار طويل</motion.div>
          </div>
        </div></div>

        <section id="services"><div className="wrap">
          <motion.div className="head" {...rise()}><h2>خدماتنا</h2><p>كل ما يحتاجه حيوانك الأليف من الفحص الدوري إلى الجراحة، في مكان واحد.</p></motion.div>
          <div className="grid g4">{SVC.map(([I, t, d], i) => <motion.div key={t} className="svc" {...rise(i)} whileHover={{ y: -6 }}><span className="ic"><I size={30} /></span><h3>{t}</h3><p>{d}</p></motion.div>)}</div>
        </div></section>

        <section id="offers" className="band"><div className="wrap">
          <motion.div className="head" {...rise()}><h2>عروض هذا الشهر</h2><p>أسعار خاصة لفترة محدودة. احجز العرض بضغطة وحدة.</p></motion.div>
          <div className="grid g3">{OFF.map(([t, p, old], i) => (
            <motion.div key={t} className="offer" {...rise(i)} whileHover={{ y: -6 }}>
              <span className="tag">وفّر {ar(old - p)} ر.س</span><h3>{t}</h3>
              <div className="price"><b>{ar(p)}</b><span>ر.س</span><s>{ar(old)}</s></div>
              <a className="btn" target="_blank" rel="noopener" href={wa(`أبي أحجز عرض: ${t} بسعر ${p} ر.س`)}>احجز العرض</a>
            </motion.div>))}</div>
        </div></section>

        <section id="store"><div className="wrap">
          <motion.div className="head" {...rise()}><h2>المتجر الإلكتروني</h2><p>أكل ومستلزمات أصلية، تصلك لين باب البيت.</p></motion.div>
          <div className="tabs">{CATS.map((c) => <button key={c} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}</div>
          <motion.div layout className="grid prod-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            <AnimatePresence mode="popLayout">{PRD.map((p, i) => (cat === "الكل" || p[1] === cat) && (
              <motion.div layout key={p[0]} className="prod" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -5 }}>
                <div className="pic"><Can c={p[4]} e={p[3]} /></div>
                <div className="i"><h3 style={{ fontSize: "1rem" }}>{p[0]}</h3><small>{p[1]}</small>
                  <div className="row"><b>{ar(p[2])} ر.س</b><motion.button whileTap={{ scale: 0.8 }} className="add" aria-label={"أضف " + p[0]} onClick={() => { add(i); say("تمت الإضافة للسلة"); }}><Plus size={18} /></motion.button></div></div>
              </motion.div>))}</AnimatePresence>
          </motion.div>
        </div></section>

        <section id="booking" style={{ background: "var(--mist)" }}><div className="wrap book">
          <motion.div {...rise()}>
            <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.3rem)" }}>احجز موعدك في دقيقة</h2>
            <p style={{ color: "var(--mut)", marginTop: 6 }}>عبّي البيانات ونفتح لك المحادثة بالواتساب جاهزة، ونأكد لك الموعد.</p>
            <ul className="steps"><li>اختر الخدمة والوقت المناسب لك</li><li>نراجع الطلب ونأكد الموعد بالواتساب</li><li>تجي العيادة، أو نجيك البيت</li></ul>
          </motion.div>
          <motion.form onSubmit={book} {...rise(1)}>
            <label>اسمك<input name="n" required autoComplete="name" /></label>
            <label>رقم الجوال<input name="p" type="tel" required inputMode="tel" placeholder="05xxxxxxxx" autoComplete="tel" /></label>
            <label>نوع الحيوان<select name="a"><option>قطة</option><option>كلب</option><option>طائر</option><option>أخرى</option></select></label>
            <label>الخدمة<select name="s">{SVC.map((s) => <option key={s[1]}>{s[1]}</option>)}</select></label>
            <label>التاريخ<input name="d" type="date" required min={new Date().toISOString().split("T")[0]} /></label>
            <label>المكان<select name="w"><option>في العيادة</option><option>زيارة منزلية</option></select></label>
            <label className="w">ملاحظات<textarea name="m" rows="2" placeholder="مثلاً: عمرها ٣ أشهر، أول تطعيم" /></label>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="btn w" style={{ justifyContent: "center" }}><MessageCircle size={18} />أرسل الطلب بالواتساب</motion.button>
          </motion.form>
        </div></section>

        <section id="team"><div className="wrap">
          <motion.div className="head" {...rise()}><h2>فريقنا</h2><p>أطباء بيطريون بخبرة، يشرحون لك كل خطوة.</p></motion.div>
          <div className="grid g4">{TEAM.map(([n, r, a], i) => <motion.div key={n} className="doc" {...rise(i)} whileHover={{ y: -6 }}><div className="av"><Doc {...a} /></div><h3>{n}</h3><p>{r}</p></motion.div>)}</div>
        </div></section>

        <section style={{ paddingTop: 0 }}><div className="wrap">
          <motion.div className="head" {...rise()}><h2>رأي عملائنا</h2></motion.div>
          <div className="grid g3">{REV.map(([n, t], i) => <motion.div key={n} className="rev" {...rise(i)}><div className="rate">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={16} fill="currentColor" />)}</div>«{t}»<b>{n}</b></motion.div>)}</div>
        </div></section>

        <section id="faq" style={{ background: "var(--butter)" }}><div className="wrap" style={{ maxWidth: 760 }}>
          <motion.div className="head" {...rise()}><h2>أسئلة شائعة</h2></motion.div>
          {FAQ.map(([q, a]) => <Q key={q} q={q} a={a} />)}
        </div></section>

        <section id="contact"><div className="wrap contact">
          <motion.div className="card" {...rise()}><h2 style={{ fontSize: "1.5rem" }}>تواصل معنا</h2>
            <ul><li><MapPin size={16} /> الرياض، حي النخيل (بيانات تجريبية)</li><li><Phone size={16} /> <a href="tel:+966565636919" dir="ltr">+966 56 563 6819</a></li><li><Clock size={16} /> السبت – الخميس: ٩ ص – ١٠ م</li><li><Clock size={16} /> الجمعة: ٤ م – ١٠ م</li></ul>
            <p style={{ marginTop: 14, color: "var(--mut)", fontSize: ".9rem" }}>للحالات الطارئة خارج الدوام تواصل معنا بالواتساب.</p></motion.div>
          <motion.div className="card map" {...rise(1)}>مكان خريطة قوقل</motion.div>
        </div></section>
      </main>

      <footer><div className="wrap"><span>© ٢٠٢٦ عيادة الرفعة البيطرية</span><span>رعاية تليق بها 🐾</span></div></footer>
      <motion.a className="wa" target="_blank" rel="noopener" href={wa("السلام عليكم، أبي أستفسر عن خدمات العيادة")} whileHover={{ scale: 1.06 }} {...float(0, 4)}><MessageCircle size={18} />واتساب</motion.a>

      <AnimatePresence>{drawer && (<>
        <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDrawer(false)} />
        <motion.aside className="drawer" aria-label="السلة" initial={{ x: "105%" }} animate={{ x: 0 }} exit={{ x: "105%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} style={{ zIndex: 50 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h3>سلة المشتريات</h3><button className="cartbtn" onClick={() => setDrawer(false)} aria-label="إغلاق"><X size={16} /></button></div>
          <ul>{ids.length ? ids.map((i) => <motion.li layout key={i}><span>{PRD[i][0]}<br /><small>{ar(PRD[i][2])} ر.س</small></span><span className="q"><button onClick={() => add(i, -1)} aria-label="إنقاص"><Minus size={14} /></button> {ar(cart[i])} <button onClick={() => add(i)} aria-label="زيادة"><Plus size={14} /></button></span></motion.li>) : <li className="empty">السلة فاضية. أضف منتجاتك المفضلة.</li>}</ul>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}><span>المجموع</span><span>{ar(total)} ر.س</span></div>
          <button className="btn" disabled={!count} onClick={order} style={{ justifyContent: "center", opacity: count ? 1 : 0.5 }}>أرسل الطلب بالواتساب</button>
        </motion.aside></>)}</AnimatePresence>
      <AnimatePresence>{toast && <motion.div className="toast on" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status">{toast}</motion.div>}</AnimatePresence>
    </MotionConfig>
  );
}
