import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();

    // honeypot กันบอท
    if (formRef.current?.company?.value) return;

    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      formRef.current.reset();
      setStatus({
        type: "success",
        msg: "ส่งข้อความเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว",
      });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้ง" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060A14] text-white">
      <Navbar />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-56 -left-40 h-[560px] w-[560px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            CONTACT
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            ร่วมสร้าง<span className="text-teal-300">ความสำเร็จ</span>
            <br className="hidden md:block" /> ทางธุรกิจไปกับเรา
          </h1>

          <p className="mt-4 text-sm text-white/70 md:text-base">
            ทีมงานของเราจะติดต่อกลับไปโดยเร็วที่สุด
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Form (2 columns wide on desktop) */}
          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
            >
              {/* honeypot */}
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="ชื่อผู้ติดต่อ"
                  name="from_name"
                  placeholder="ชื่อผู้ติดต่อ"
                />
                <Field
                  label="อีเมล"
                  name="reply_to"
                  type="email"
                  placeholder="อีเมล"
                />
                {/* <SelectField
                  label="หัวข้อเรื่องที่ติดต่อ"
                  name="project_type"
                  options={[
                    "สอบถามทั่วไป",
                    "โซลูชันและบริการ",
                    "ผลิตภัณฑ์ซอฟต์แวร์",
                    "อื่น ๆ",
                  ]}
                />
                <SelectField
                  label="คุณรู้จักเราจากที่ใด ?"
                  name="ref_source"
                  options={["Google", "LinkedIn", "Referral", "Other"]}
                /> */}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-white/80">
                  หัวข้อเรื่องที่ติดต่อเ
                </label>
                <input
                  name="subject"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="หัวข้อ"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-white/80">
                  รายละเอียด
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="รายละเอียดที่ต้องการติดต่อ"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  background:
                    "linear-gradient(270deg, #4db6ac 0%, #00838f 100%)",
                }}
                className="btn-fancy mt-6 w-full rounded-xl  px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
              >
                {loading ? "Sending..." : "ส่ง"}
              </button>

              {status.msg && (
                <p
                  className={`mt-4 text-center text-sm ${
                    status.type === "success"
                      ? "text-emerald-300"
                      : "text-rose-300"
                  }`}
                >
                  {status.msg}
                </p>
              )}
            </form>
          </div>

          {/* Right info */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-sm font-semibold text-white/90">
                Connect with us
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/75">
                <InfoRow label="Email" value="info@aileensolutions.com" />
                <InfoRow label="Phone" value="06-4447-8955" />
                {/* <InfoRow label="Line" value="@aileen" /> */}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur pb-8">
              <h3 className="text-sm font-semibold text-white/90">Address</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                79 อาคารเจียมจรรย์ ชั้น 3 ห้อง 312 <br />
                ถนนสุขสวัสดิ์ แขวงราษฎร์บูรณะ เขตราษฎร์บูรณะ <br />
                กรุงเทพมหานคร 10140
              </p>

              {/* <div className="mt-4 text-xs text-white/55">
                Mon - Fri • :00 - 18:00
              </div> */}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 backdrop-blur">
              หากต้องการให้ทีมงานติดต่อกลับเร็วขึ้น ? <br />
              โปรดระบุช่วงเวลาที่สะดวกในข้อความได้เลย
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/80">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25"
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/80">{label}</label>
      <select
        name={name}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/25"
        defaultValue=""
      >
        <option value="" disabled className="bg-[#060A14]">
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#060A14]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-white/55">{label}</span>
      <span className="text-white/85">{value}</span>
    </div>
  );
}
