import React, { useState } from "react";
import { Star, MessageSquarePlus, MessageSquare, CheckCircle, Quote } from "lucide-react";
import { INITIAL_TESTIMONIALS, Testimonial } from "../types";

export default function ReviewList() {
  const [reviews, setReviews] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    tag: "Usuario de Ozempic®",
    text: "",
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const added: Testimonial = {
      id: "t_custom_" + Date.now(),
      name: newReview.name,
      tag: newReview.tag,
      text: newReview.text,
      rating: newReview.rating,
      date: "Hace unos segundos",
    };

    setReviews([added, ...reviews]);
    setSubmitted(true);
    setNewReview({
      name: "",
      tag: "Usuario de Ozempic®",
      text: "",
      rating: 5,
    });

    setTimeout(() => {
      setSubmitted(false);
      setShowAddForm(false);
    }, 4000);
  };

  const tagOptions = [
    "Usuario de Ozempic®",
    "Usuario de Wegovy®",
    "Usuario de Mounjaro®",
    "Usuario de Rybelsus®",
    "Seguidor de alimentación proteica",
    "Nutricionista",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4" id="testimonios-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#355E2D]/5 text-[#355E2D] mb-3 border border-[#355E2D]/10 text-[10px] font-bold tracking-wider uppercase">
            <Quote size={11} className="text-[#D4AF37]" /> EXPERIENCIAS REALES
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#355E2D] tracking-tight">
            Lo que dicen quienes ya lo tienen
          </h2>
          <p className="mt-1 text-xs md:text-sm text-gray-500">
            Testimonios totalmente reales de personas transformando su bienestar nutricional diariamente.
          </p>
        </div>

        <div>
          <button
            type="button"
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold bg-[#355E2D] text-white hover:bg-opacity-95 transition-all shadow-xs cursor-pointer uppercase tracking-wider"
          >
            <MessageSquarePlus size={13} />
            {showAddForm ? "Cerrar" : "Dejar Testimonio"}
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="mb-8 bg-white border border-gray-200 p-5 rounded-md shadow-sm max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-50 text-[#00C853] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#00C853]/25">
                <CheckCircle size={24} />
              </div>
              <h4 className="text-base font-extrabold text-[#355E2D]">
                ¡Testimonio publicado con éxito!
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Gracias por compartir tu experiencia con el Recetario Premium GLP-1. Tu historia inspira a otros.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h3 className="text-sm font-bold text-gray-850 flex items-center gap-1.5">
                <MessageSquare size={14} className="text-[#355E2D]" /> Compártenos tu historia
              </h3>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">
                  Tu nombre completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Sofía Mendoza"
                  className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#355E2D]"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 mb-1">
                    Tratamiento o Perfil:
                  </label>
                  <select
                    className="w-full bg-gray-55 border border-gray-300 rounded px-2 py-1.5 text-xs focus:outline-none focus:border-[#355E2D]"
                    value={newReview.tag}
                    onChange={(e) => setNewReview({ ...newReview, tag: e.target.value })}
                  >
                    {tagOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 mb-1">
                    Calificación:
                  </label>
                  <div className="flex items-center gap-1 h-8 border border-gray-300 rounded px-2.5 bg-gray-50">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setNewReview({ ...newReview, rating: s })}
                        className="p-0.5 hover:scale-110 transition-transform"
                      >
                        <Star
                          size={14}
                          className={
                            s <= newReview.rating
                              ? "text-[#D4AF37] fill-[#D4AF37]"
                              : "text-gray-300"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">
                  Tu comentario honesto:
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Detalla cómo te ayudó el recetario..."
                  className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#355E2D]"
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00C853] hover:bg-[#00b24a] text-white font-bold text-xs py-2.5 rounded transition-all cursor-pointer uppercase tracking-wider"
              >
                PUBLICAR TESTIMONIO AHORA
              </button>
            </form>
          )}
        </div>
      )}

      {/* Grid of bubble testimonials - High Density visual cards style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {reviews.map((t) => (
          <div
            key={t.id}
            className="flex flex-col bg-white border border-gray-200 rounded-md p-4 md:p-5 shadow-xs justify-between transition-all hover:border-[#355E2D]/40 relative overflow-hidden group"
          >
            {/* Elegant glowing visual mark */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#355E2D]/20 group-hover:bg-[#355E2D] transition-colors duration-200" />

            <div className="pl-1">
              {/* Star rating headers */}
              <div className="flex items-center gap-0.5 mb-2.5">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    size={12}
                    className={
                      si < t.rating
                        ? "text-[#D4AF37] fill-[#D4AF37]"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-700 text-xs leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-150 pt-2.5 mt-auto pl-1">
              <div>
                <h5 className="font-bold text-xs text-gray-800">
                  {t.name}
                </h5>
                <p className="text-[10px] font-bold text-[#355E2D] mt-0.5 uppercase tracking-wide">
                  {t.tag}
                </p>
              </div>

              <span className="text-[9px] text-gray-400 font-bold tracking-wider uppercase bg-gray-100 px-1.5 py-0.5 rounded">
                {t.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
