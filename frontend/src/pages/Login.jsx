import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const roles = ["admin", "user"];

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4334/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Username yoki password xato");
      const data = await res.json();
      toast.success("Foydalanuvchi muvaffaqiyatli yaratildi!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (name) =>
    `w-full bg-transparent border-b-2 py-3 px-1 text-[#1a1a2e] placeholder-[#9a9ab0] outline-none transition-all duration-300 text-sm tracking-wide
    ${focused === name ? "border-[#e94560]" : "border-[#d0d0e0]"}`;

  return (
    <div className="min-h-screen bg-[#f5f4f0] flex items-center justify-center px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .card-shadow { box-shadow: 8px 8px 0px #1a1a2e; }
        .btn-shadow { box-shadow: 4px 4px 0px #1a1a2e; transition: all 0.15s ease; }
        .btn-shadow:hover { box-shadow: 2px 2px 0px #1a1a2e; transform: translate(2px, 2px); }
        .btn-shadow:active { box-shadow: 0px 0px 0px #1a1a2e; transform: translate(4px, 4px); }
        .tick-anim { stroke-dasharray: 50; stroke-dashoffset: 50; animation: draw 0.5s ease forwards 0.2s; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .slide-in { animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="w-full max-w-md slide-in">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#e94560] border-2 border-[#1a1a2e]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9ab0]">Auth System</span>
          </div>
          <h1 className="text-4xl font-bold text-[#1a1a2e] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ma'lumotlaringizni <br />
            <span className="text-[#e94560]">tasdiqlang</span>
          </h1>
          <p className="mt-2 text-sm text-[#9a9ab0] tracking-wide">Login qiling </p>
        </div>

        {/* Card */}
        <div className="bg-white border-2 border-[#1a1a2e] p-8 card-shadow">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Username */}
            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#9a9ab0] mb-2">
                Foydalanuvchi nomi
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-1 text-[#9a9ab0] text-sm font-medium">@</span>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  onFocus={() => setFocused("username")}
                  onBlur={() => setFocused("")}
                  placeholder="abdulla99"
                  required
                  className={`${inputClass("username")} pl-6`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#9a9ab0] mb-2">
                Parol
              </label>
              <div className="relative flex items-center">
                <svg className="absolute left-1 w-4 h-4 text-[#9a9ab0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                  placeholder="••••••••"
                  required
                  className={`${inputClass("password")} pl-8 pr-8`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 text-[#9a9ab0] hover:text-[#e94560] transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>


            {/* Error */}
            {error && (
              <div className="border-2 border-[#e94560] bg-[#fff0f3] px-4 py-2.5 text-xs text-[#e94560] font-semibold tracking-wide">
                ⚠ {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={`w-full py-3.5 text-sm font-bold tracking-[0.15em] uppercase border-2 transition-all
                  ${true
                  ? "bg-[#e94560] text-white border-[#1a1a2e] btn-shadow cursor-pointer"
                  : "bg-[#f0f0f0] text-[#b0b0c0] cursor-not-allowed border-[#d0d0e0]"
                }`}
            >
              {loading ? "Yuborilmoqda..." : "Login"}
            </button>
          </form>

        </div>

        {/* Footer */}
        <p className="text-center mt-4 text-xs text-[#9a9ab0] tracking-wide">
          Hali ro'yxatdan o'tmaganmisiz?{" "}
          <Link to="/register" className="text-[#e94560] font-semibold hover:underline">Ro'yxatdan o'tish</Link>
        </p>
      </div>
    </div>
  );
}