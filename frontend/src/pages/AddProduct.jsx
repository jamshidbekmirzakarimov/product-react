import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:4334/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          price: parseFloat(form.price),
          description: form.description,
          image: form.image,
        }),
      });

      navigate('/')

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Xato yuz berdi");
      setMessage({ type: "success", text: `✅ "${data.title}" mahsulot muvaffaqiyatli qo'shildi!` });
      setForm({ title: "", price: "", description: "", image: "" });
    } catch (err) {
      setMessage({ type: "error", text: `❌ ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-mono">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs text-zinc-500 uppercase tracking-[0.3em] mb-1">Admin Panel</p>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Yangi Mahsulot
            <span className="text-amber-400">.</span>
          </h1>
          <div className="mt-3 h-px bg-gradient-to-r from-amber-400 to-transparent" />
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5 shadow-2xl"
        >
          {/* Title */}
          <div className="group">
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">
              Mahsulot nomi
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Masalan: iPhone 15 Pro"
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-amber-400/30"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">
              Narxi (so'm)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 font-bold text-sm">
                $
              </span>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-lg pl-8 pr-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-amber-400/30"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">
              Tavsif
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Mahsulot haqida qisqacha..."
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-amber-400/30 resize-none"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">
              Rasm URL
            </label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-amber-400/30"
            />
            {/* Image preview */}
            {form.image && (
              <div className="mt-3 rounded-lg overflow-hidden border border-zinc-700 h-32 bg-zinc-800">
                <img
                  src={form.image}
                  alt="preview"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            )}
          </div>

          {/* Feedback message */}
          {message && (
            <div
              className={`rounded-lg px-4 py-3 text-sm border ${message.type === "success"
                  ? "bg-emerald-950 border-emerald-700 text-emerald-300"
                  : "bg-red-950 border-red-700 text-red-300"
                }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-zinc-700 disabled:text-zinc-500 text-zinc-950 font-bold rounded-lg py-3 text-sm uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Saqlanmoqda...
              </>
            ) : (
              <span>+ Qo'shish</span>
            )}
          </button>
        </form>

        {/* Footer note */}
        <p className="text-center text-zinc-700 text-xs mt-5 tracking-wide">
          POST → /api/products
        </p>
      </div>
    </div>
  );
};

export default AddProduct;