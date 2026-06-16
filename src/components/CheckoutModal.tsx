import React, { useState, useEffect } from "react";
import { X, ShieldCheck, Lock, CreditCard, Award, CheckCircle, Download, FileText, ArrowRight } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "loading" | "success">("form");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [loadingText, setLoadingText] = useState("Procesando pago seguro...");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [activeBookPage, setActiveBookPage] = useState(1);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStep("form");
      setEmail("");
      setName("");
      setCardNumber("");
      setCardExpiry("");
      setCardCVC("");
      setActiveBookPage(1);
      setDownloadTriggered(false);
    }
  }, [isOpen]);

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    const steps = [
      "Verificando disponibilidad de cupo prioritario...",
      "Cifrando datos de pago bajo protocolo AES-256...",
      "Conectando de forma segura con pasarela bancaria...",
      "Generando credenciales y enlace único de descarga...",
      "¡Todo listo! Confirmando transacción..."
    ];

    let currentStepIdx = 0;
    const interval = setInterval(() => {
      if (currentStepIdx < steps.length - 1) {
        currentStepIdx++;
        setLoadingText(steps[currentStepIdx]);
      } else {
        clearInterval(interval);
        setStep("success");
      }
    }, 900);
  };

  if (!isOpen) return null;

  const previewPages = [
    {
      page: 1,
      title: "Portada Oficial",
      content: (
        <div className="bg-[#355E2D] text-white p-5 rounded-md h-full flex flex-col justify-between items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10" />
          <div className="text-[#D4AF37] text-[9px] uppercase font-extrabold tracking-widest bg-white/10 px-2 py-0.5 rounded">
            ⭐ EDICIÓN MÉDICA NUTRICIONAL
          </div>
          <div className="my-auto">
            <h1 className="text-xl font-extrabold tracking-tight">RECETARIO PREMIUM</h1>
            <h2 className="text-2xl font-extrabold text-[#D4AF37] mt-0.5">GLP-1</h2>
            <p className="text-[10px] text-white/75 mt-2 max-w-sm leading-relaxed">
              100 Recetas con Alta Densidad Saciante y Proteínas para Proteger tu Masa Muscular
            </p>
          </div>
          <div className="border-t border-white/15 pt-2 w-full text-[9px] text-white/50 tracking-wider">
            SOPORTE NUTRICIONAL GENERAL • 2026/2027
          </div>
        </div>
      )
    },
    {
      page: 2,
      title: "Guía Introductoria GLP-1",
      content: (
        <div className="bg-white text-gray-800 p-4 rounded-md h-full flex flex-col justify-between border border-gray-200 text-left">
          <div>
            <span className="text-[9px] font-extrabold text-[#355E2D] uppercase tracking-wider block mb-0.5">
              CAPÍTULO 1
            </span>
            <h3 className="text-sm font-bold text-gray-800 mb-2 border-b pb-1">
              Sinergia entre Proteína y GLP-1
            </h3>
            <p className="text-[10px] text-gray-600 leading-relaxed mb-2">
              Al consumir análogos de la hormona GLP-1 (Ozempic®, Wegovy®, etc.), tu apetito disminuye de forma drástica. Esto suele conducir a una ingesta de comida extremadamente baja.
            </p>
            <p className="text-[10px] text-red-650 leading-relaxed font-semibold">
              ⚠️ Consumir poca proteína expone a tu cuerpo a perder tono muscular.
            </p>
          </div>
          <div className="text-[9px] text-gray-400 font-bold border-t pt-2 flex justify-between">
            <span>Sección Científica</span>
            <span>Pág. 5 de 142</span>
          </div>
        </div>
      )
    },
    {
      page: 3,
      title: "Receta Muestra: Parfait de Chía",
      content: (
        <div className="bg-white text-gray-800 p-4 rounded-md h-full flex flex-col justify-between border border-gray-200 text-left">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-extrabold bg-[#355E2D]/15 text-[#355E2D] px-2 py-0.5 rounded">
                DESAYUNOS
              </span>
              <span className="text-[9px] font-extrabold text-[#D4AF37]">
                ⭐⭐⭐⭐⭐
              </span>
            </div>
            <h3 className="text-xs font-bold text-gray-850 border-b pb-1 mb-1.5">
              Parfait Cremoso con Yogur y Almendras
            </h3>
            <ul className="text-[9px] space-y-0.5 text-gray-605 mb-2">
              <li>• 180g de yogur griego desnatado (0% grasa)</li>
              <li>• 15g de semillas de chía hidratadas</li>
              <li>• 4 fresas fileteadas y 10 almendras</li>
            </ul>
            <div className="bg-gray-100 p-2 rounded flex justify-around text-center mb-0.5">
              <div>
                <p className="text-[8px] text-gray-400 uppercase font-bold">Kcal</p>
                <p className="text-xs font-bold text-[#355E2D]">210</p>
              </div>
              <div>
                <p className="text-[8px] text-gray-400 uppercase font-bold">PROT</p>
                <p className="text-xs font-bold text-[#00C853]">24g</p>
              </div>
              <div>
                <p className="text-[8px] text-gray-400 uppercase font-bold">CARBS</p>
                <p className="text-xs font-bold text-blue-600">11g</p>
              </div>
            </div>
          </div>
          <div className="text-[9px] text-gray-400 font-bold border-t pt-1.5 flex justify-between">
            <span>Categoría Mañanas</span>
            <span>Pág. 18 de 142</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in transition-all">
      <div className="bg-white rounded-md w-full max-w-md overflow-hidden shadow-2xl relative border border-gray-200 flex flex-col max-h-[90vh]">
        
        {/* Header decoration */}
        <div className="bg-[#F8F9FA] border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
            <span className="text-[10px] font-bold text-gray-700 tracking-wide flex items-center gap-1.5">
              <Lock size={11} className="text-[#355E2D]" /> CONEXIÓN PROTEGIDA SSL (256-BIT)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded bg-gray-200/60 text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X size={14} />
          </button>
        </div>

        {/* Modal content body scrolling */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1">
          {step === "form" && (
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div className="text-center mb-4">
                <span className="text-[9px] font-extrabold text-[#355E2D] tracking-widest uppercase bg-[#355E2D]/5 px-2.5 py-0.5 rounded border border-[#355E2D]/10">
                  Resumen de compra
                </span>
                <h3 className="text-lg font-extrabold text-gray-805 tracking-tight mt-1.5">
                  Completa tu Inscripción
                </h3>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  Acceso de por vida a las 100 recetas + 3 Bonos Digitales
                </p>
              </div>

              {/* Price card detail */}
              <div className="bg-[#F8F9FA] border border-gray-200 rounded p-3 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-805">
                    Recetario Premium GLP-1
                  </h4>
                  <p className="text-[9px] text-gray-400">
                    Soporte Digital Interactivo + 3 Bonos
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] line-through text-gray-400 block">
                    US$ 70.00
                  </span>
                  <span className="text-sm font-extrabold text-[#D4AF37]">
                    US$ 9.90
                  </span>
                </div>
              </div>

              {/* Input details name and email */}
              <div className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 mb-1">
                    Tu nombre y apellido:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Mendoza"
                    className="w-full bg-[#F8F9FA] border border-gray-350 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#355E2D]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 mb-1">
                    Tu Correo Electrónico (Para recibir el PDF):
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sofia@ejemplo.com"
                    className="w-full bg-[#F8F9FA] border border-gray-350 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#355E2D]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="text-[9px] text-[#355E2D] block mt-1 leading-relaxed">
                    ⚙️ Enviamos el enlace de acceso e inmediato tras confirmar el pago seguro.
                  </span>
                </div>
              </div>

              {/* Payment selector tabs */}
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1.5">
                  Selecciona tu medio de pago:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-2.5 rounded border flex items-center justify-center gap-1.5 text-[11px] font-bold transition-all focus:outline-none cursor-pointer ${
                      paymentMethod === "card"
                        ? "border-[#355E2D] bg-[#355E2D]/5 text-[#355E2D] ring-1 ring-[#355E2D]/10"
                        : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <CreditCard size={13} /> Tarjeta
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-2.5 rounded border flex items-center justify-center gap-1 text-[11px] font-bold transition-all focus:outline-none cursor-pointer ${
                      paymentMethod === "paypal"
                        ? "border-[#355E2D] bg-[#355E2D]/5 text-[#355E2D] ring-1 ring-[#355E2D]/10"
                        : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span className="text-blue-600 font-extrabold italic">Pay</span>
                    <span className="text-blue-400 font-extrabold italic">Pal</span>
                  </button>
                </div>
              </div>

              {/* Conditional payment forms */}
              {paymentMethod === "card" ? (
                <div className="space-y-2 border-t border-gray-150 pt-3">
                  <div>
                    <label className="block text-[9px] font-bold text-gray-600 mb-0.5">
                      Número de tarjeta:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="4111 2222 3333 4444"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-350 rounded pl-3 pr-8 py-1.5 text-xs focus:outline-none focus:border-[#355E2D]"
                      />
                      <span className="absolute right-2.5 top-2.5 text-gray-400">
                        <CreditCard size={13} />
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-600 mb-0.5">
                        Vecimiento (MM/AA):
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="12/29"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-350 rounded py-1.5 text-xs focus:outline-none focus:border-[#355E2D] text-center"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-600 mb-0.5">
                        CVC:
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="123"
                        maxLength={4}
                        value={cardCVC}
                        onChange={(e) => setCardCVC(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-350 rounded py-1.5 text-xs focus:outline-none focus:border-[#355E2D] text-center"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border-t border-gray-150 pt-3 text-center">
                  <p className="text-[10px] text-gray-500 bg-blue-50/50 p-2.5 border border-blue-200 rounded leading-relaxed">
                    🔗 Redirigiendo de forma encriptada a los servidores seguros de PayPal para completar la transacción.
                  </p>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#00C853] hover:bg-[#00b24a] text-white font-extrabold text-xs py-3 rounded transition-all shadow-sm active:scale-98 tracking-wide cursor-pointer flex items-center justify-center gap-1.5 uppercase"
              >
                <ShieldCheck size={14} />
                REALIZAR PAGO COMPLETO POR US$ 9.90
              </button>

              <div className="flex items-center justify-center gap-4 text-[9px] text-gray-400 font-bold border-t border-gray-150 pt-3 uppercase">
                <span>🛡️ Reembolso garantizado</span>
                <span>🔒 Encriptación SSL</span>
              </div>
            </form>
          )}

          {step === "loading" && (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-gray-150" />
                <div className="absolute inset-0 rounded-full border-4 border-t-[#00C853] border-r-[#355E2D] animate-spin" />
              </div>

              <h4 className="text-sm font-bold text-gray-800">
                Procesando Pago Seguro
              </h4>
              <p className="text-[10px] text-gray-500 mt-2 bg-[#F8F9FA] px-3 py-1.5 rounded border animate-pulse">
                {loadingText}
              </p>
            </div>
          )}

          {step === "success" && (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-50 text-[#00C853] rounded-full flex items-center justify-center mx-auto border border-[#00C853]/25 animate-bounce">
                <CheckCircle size={24} />
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] uppercase tracking-widest bg-[#D4AF37]/15 text-[#D4AF37] px-2.5 py-1 rounded font-extrabold border border-[#D4AF37]/25">
                  🎉 ¡TRANSACCIÓN COMPLETADA!
                </span>
                <h3 className="text-base font-extrabold text-[#355E2D] tracking-tight">
                  ¡Gracias por tu compra, {name || "Premium Reader"}!
                </h3>
                <p className="text-[10px] text-gray-600 border bg-[#F8F9FA] p-2 rounded">
                  Hemos enviado la factura digital y tu enlace de descarga a: <strong className="text-[#355E2D] font-bold underline">{email || "tu emal de contacto"}</strong>
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  Para tu comodidad inmediata, puedes comenzar a leer tu copia de muestra del recetario a continuación:
                </p>
              </div>

              {/* INTERACTIVE DIGITAL COOKBOOK VIEWER */}
              <div className="bg-[#F8F9FA] border border-[#355E2D]/20 p-3 rounded shadow-inner text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-extrabold text-[#355E2D] uppercase tracking-wider flex items-center gap-1 bg-white px-1.5 py-0.5 rounded shadow-xs">
                    <FileText size={10} /> Visor Digital Interactivo
                  </span>
                  <div className="flex gap-1">
                    {previewPages.map((p) => (
                      <button
                        key={p.page}
                        onClick={() => setActiveBookPage(p.page)}
                        className={`w-5 h-5 rounded-full text-[9px] font-bold transition-all focus:outline-none ${
                          activeBookPage === p.page
                            ? "bg-[#355E2D] text-white"
                            : "bg-white text-gray-750 hover:bg-gray-150 border"
                        }`}
                      >
                        {p.page}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated pdf page flip window */}
                <div className="aspect-[4/3] w-full bg-white rounded shadow-xs p-2">
                  {previewPages.find((p) => p.page === activeBookPage)?.content}
                </div>

                {/* Selector footer control */}
                <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-gray-200">
                  <span className="text-[9px] font-semibold text-gray-400">
                    {previewPages.find((p) => p.page === activeBookPage)?.title}
                  </span>
                  {activeBookPage < 3 ? (
                    <button
                      type="button"
                      onClick={() => setActiveBookPage(activeBookPage + 1)}
                      className="text-[9px] font-extrabold text-[#355E2D] hover:underline flex items-center gap-0.5"
                    >
                      Siguiente <ArrowRight size={9} />
                    </button>
                  ) : (
                    <span className="text-[9px] text-[#00C853] font-extrabold">
                      ✓ Enviado en PDF
                    </span>
                  )}
                </div>
              </div>

              {/* Direct PDF Download button */}
              <button
                type="button"
                onClick={() => setDownloadTriggered(true)}
                className="inline-flex items-center gap-1.5 w-full justify-center bg-[#00C853] hover:bg-[#00b24a] text-white font-bold text-xs py-3 rounded shadow-xs transition-all active:scale-98 cursor-pointer uppercase tracking-wider"
              >
                <Download size={13} /> DESCARGAR RECETARIO COMPLETO (PDF)
              </button>

              {downloadTriggered && (
                <p className="text-[10px] text-[#00C853] font-bold animate-pulse text-center">
                  📥 ¡Iniciando descarga directa de la Guía Digital Premium (142 páginas)!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
