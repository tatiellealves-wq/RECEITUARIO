import React, { useState, useEffect } from "react";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  Gift, 
  Users, 
  Heart, 
  Bookmark, 
  Star, 
  Lock, 
  CheckCircle,
  TrendingUp,
  RotateCcw,
  Flame,
  Volume2
} from "lucide-react";

import FAQ from "./components/FAQ";
import RecipeExplorer from "./components/RecipeExplorer";
import ReviewList from "./components/ReviewList";
import CheckoutModal from "./components/CheckoutModal";

// Interactive custom notification simulation
const SOCIAL_PROOF_MESSAGES = [
  { name: "Alejandra M.", location: "Madrid, ES", action: "acaba de descargar el Recetario Premium GLP-1" },
  { name: "Roberto T.", location: "Santiago, CL", action: "adquirió la Oferta Completa hoy" },
  { name: "Camila S.", location: "Monterrey, MX", action: "aprovechó el bono de Planificador Gratuito" },
  { name: "David F.", location: "Bogotá, CO", action: "obtuvo acceso directo hace 2 minutos" },
  { name: "Sofía P.", location: "Buenos Aires, AR", action: "acaba de unirse con el descuento del 85%" },
];

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [countdown, setCountdown] = useState({ minutes: 14, seconds: 59 });
  const [socialProof, setSocialProof] = useState<typeof SOCIAL_PROOF_MESSAGES[0] | null>(null);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);

  // Protein calculator state
  const [calcWeight, setCalcWeight] = useState<number>(70);
  const [calcActivity, setCalcActivity] = useState<string>("sedentario");
  const [calcMedicine, setCalcMedicine] = useState<string>("si");
  const [calcResult, setCalcResult] = useState<{ protein: number; suggest: string } | null>(null);

  // Elegant floating urgent purchase counter
  const [spotsLeft, setSpotsLeft] = useState(17);

  // 1. Live Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Loop countdown to keep FOMO going
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Simulated Low Stock Spot Counter
  useEffect(() => {
    const stockTimer = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev > 3) {
          // Slowly decrease matching real sales flow
          const dec = Math.random() > 0.6 ? 1 : 0;
          return prev - dec;
        }
        return 3; // Keep minimum spots to maintain real pressure
      });
    }, 28000);
    return () => clearInterval(stockTimer);
  }, []);

  // 3. Social Proof Bubble Tick
  useEffect(() => {
    const triggerSocialProof = () => {
      // Pick random notification
      const nextIdx = (activityIndex + 1) % SOCIAL_PROOF_MESSAGES.length;
      setActivityIndex(nextIdx);
      setSocialProof(SOCIAL_PROOF_MESSAGES[nextIdx]);
      setShowSocialProof(true);

      // Hide after 6 seconds
      setTimeout(() => {
        setShowSocialProof(false);
      }, 6000);
    };

    // Trigger first notification after 5 seconds
    const firstTimeout = setTimeout(triggerSocialProof, 5000);

    const interval = setInterval(triggerSocialProof, 22000);
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [activityIndex]);

  // Daily protein calculation matching biological standards for obesity/diabetes under GLP1 agonists
  // (Usually 1.2g to 1.6g or even up to 2.0g per kg of bodyweight depending on activity, and +0.3g if using GLP-1 for muscle protection)
  const calculateProtein = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcWeight || calcWeight <= 0) return;

    let baseFactor = 1.0;
    if (calcActivity === "moderado") baseFactor = 1.3;
    if (calcActivity === "activo") baseFactor = 1.6;

    let glp1Factor = 0.0;
    if (calcMedicine === "si") glp1Factor = 0.3; // extra padding to secure muscle mass under rapid caloric deficit

    const finalFactor = baseFactor + glp1Factor;
    const proteinTarget = Math.round(calcWeight * finalFactor);

    let categorySuggestion = "Desayunos y Almuerzos Inteligentes";
    if (proteinTarget > 120) {
      categorySuggestion = "Desayunos, Almuerzos y Cenas con Alta Concentración Proteica";
    } else if (proteinTarget < 85) {
      categorySuggestion = "Desayunos y Snacks Altos en Proteína";
    }

    setCalcResult({
      protein: proteinTarget,
      suggest: categorySuggestion
    });
  };

  const handleOpenCheckout = () => {
    window.open("https://pay.hotmart.com/V106331339V?checkoutMode=10", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50/70 relative selection:bg-brand-green-vibrant/20 select-none">
      
      {/* Dynamic Urgent Top Bar */}
      <div className="bg-[#355E2D] text-white text-[11px] md:text-xs py-2 px-4 sticky top-0 z-40 shadow-sm border-b border-[#00C853]/20 transition-all font-sans font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center">
          <div className="flex items-center gap-1.5 justify-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
            <span className="uppercase tracking-widest font-bold text-[#D4AF37]">OFERTA ACTIVA DEL 85%:</span>
            <span className="opacity-95">Acceso prioritario digital hoy por solo US$ 9.90</span>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <span className="bg-white/10 px-2 py-0.5 rounded text-white font-bold flex items-center gap-1 text-[10px]">
              <Clock size={11} className="text-[#D4AF37]" /> 
              EXPIRA EN {String(countdown.minutes).padStart(2, "0")}:{String(countdown.seconds).padStart(2, "0")} Mins
            </span>
            <span className="hidden md:inline-block font-extrabold text-[#D4AF37] text-[11px]">
              ⏳ Solo quedan {spotsLeft} descargas
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="bg-white py-12 md:py-16 border-b border-gray-200 relative overflow-hidden">
        {/* Abstract subtle grid lines to match luxury grid of design HTML */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Text details */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#355E2D]/5 text-[#355E2D] border border-[#355E2D]/10 text-[10px] font-bold tracking-wider">
                <Sparkles size={11} className="text-[#D4AF37] fill-[#D4AF37]" />
                <span>RECURSO DIGITAL PREMIUM #1 EN ESPAÑOL</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#355E2D] leading-tight tracking-tight">
                ¿Cansado de no saber qué comer cada día?
              </h1>

              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
                Descubre <strong className="font-bold text-[#355E2D] underline decoration-[#D4AF37] decoration-2">100 recetas rápidas, deliciosas y altas en proteína</strong> para simplificar tu alimentación sin complicaciones — diseñadas especialmente para quienes usan GLP-1 o siguen un estilo de vida saludable.
              </p>

              {/* High density structured grid with green check marks */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <div className="flex items-center gap-2 p-2 rounded bg-[#F8F9FA] border border-gray-100">
                  <span className="text-[#00C853] font-bold text-sm">✓</span>
                  <span className="font-bold text-gray-800">Más variedad en tu plato</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#F8F9FA] border border-gray-100">
                  <span className="text-[#00C853] font-bold text-sm">✓</span>
                  <span className="font-bold text-gray-800">Fácil de preparar</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#F8F9FA] border border-gray-100">
                  <span className="text-[#00C853] font-bold text-sm">✓</span>
                  <span className="font-bold text-gray-800">Cualquier hora del día</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#F8F9FA] border border-gray-100">
                  <span className="text-[#00C853] font-bold text-sm">✓</span>
                  <span className="font-bold text-gray-800">Ideal para vidas ocupadas</span>
                </div>
              </div>

              {/* CTA and microcopy */}
              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  onClick={handleOpenCheckout}
                  className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#00C853] hover:bg-[#00b24a] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Gift size={16} />
                  ¡QUIERO EL RECETARIO PREMIUM POR US$ 9.90!
                </button>

                <div className="text-[10px] text-gray-500 font-bold tracking-wide flex flex-wrap items-center gap-x-3 gap-y-1 justify-start pl-1 opacity-80">
                  <span>⏱️ Oferta por tiempo limitado</span>
                  <span>•</span>
                  <span>📥 Descarga digital inmediata</span>
                  <span>•</span>
                  <span>🛡️ Garantía de 7 días</span>
                </div>
              </div>

              {/* Live social proof metric inside hero */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-sm bg-orange-600 border border-white flex items-center justify-center text-[9px] font-bold text-white uppercase">MG</div>
                  <div className="w-7 h-7 rounded-sm bg-emerald-600 border border-white flex items-center justify-center text-[9px] font-bold text-white uppercase">PR</div>
                  <div className="w-7 h-7 rounded-sm bg-indigo-600 border border-white flex items-center justify-center text-[9px] font-bold text-white uppercase">CM</div>
                  <div className="w-7 h-7 rounded-sm bg-pink-600 border border-white flex items-center justify-center text-[9px] font-bold text-white uppercase">SL</div>
                </div>
                <p className="text-[11px] font-medium text-gray-600">
                  Más de <strong className="text-[#355E2D] font-bold">2,483 copias digitales</strong> descargadas este mes en Latinoamérica y España.
                </p>
              </div>

            </div>

            {/* Right Column Cookbook Render Cover Layout */}
            <div className="lg:col-span-5 flex justify-center relative justify-items-center">
              <div className="relative group max-w-sm z-10 p-3 bg-[#F8F9FA] rounded-md border border-gray-200 shadow-soft">
                {/* Double boundary detail inside the cover placeholder to represent luxury edition */}
                <div className="border border-double border-gray-300 rounded p-1.5 bg-white">
                  <img
                    src="/cookbook_mockup_1781633443010.jpg"
                    alt="Recetario Premium GLP-1 Portada 3D Mockup"
                    referrerPolicy="no-referrer"
                    className="rounded shadow-md border border-gray-100 transform transition-transform group-hover:scale-[1.01] relative"
                  />
                </div>
                
                {/* Embedded dynamic badge */}
                <div className="absolute top-6 -right-2 bg-[#D4AF37] text-white text-[10px] font-extrabold px-3 py-1 rounded-sm shadow-md transform rotate-3 border border-white flex items-center gap-1">
                  <Flame size={11} className="fill-white" /> 100 Recetas PDF
                </div>

                <div className="absolute -bottom-3 left-6 bg-white border border-gray-200 p-2.5 rounded shadow-md flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-green-50 text-[#355E2D] rounded flex items-center justify-center border border-green-100">
                    <Users size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Aprobado Clínicamente</p>
                    <p className="text-[11px] font-bold text-gray-800">⭐ 4.9/5 Calificaciones</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Seccion 2: ¿TE IDENTIFICAS? (El Problema) */}
      <section className="bg-brand-gray-light py-16 md:py-24 border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-red-700 mb-4 border border-red-200/50">
              <AlertCircle size={13} /> El Desafío Alimentario
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#355E2D] tracking-tight">
              ¿Te identificas con esto?
            </h2>
            <p className="mt-3 text-lg text-brand-gray-dark max-w-2xl mx-auto">
              El problema recurrente que enfrentan miles de personas cada día si usan Ozempic®, Mounjaro®, Wegovy® o Rybelsus®.
            </p>
          </div>

          {/* Grid with 4 beautiful problem cards with high-density compact design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-10">
            <div className="bg-white p-4 md:p-5 rounded-md border border-gray-200 shadow-sm hover:border-[#355E2D]/40 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-lg p-1.5 bg-red-50 text-red-600 rounded flex-shrink-0 font-bold border border-red-100">
                  ❌
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    No sabes qué cocinar cada día
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Llegas cansado a casa tras el trabajo sin inspiración y terminas cenando snacks vacíos o saltándote comidas de forma inadecuada.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-5 rounded-md border border-gray-200 shadow-sm hover:border-[#355E2D]/40 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-lg p-1.5 bg-red-50 text-red-600 rounded flex-shrink-0 font-bold border border-red-100">
                  ❌
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Siempre comes lo mismo
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    La alarmante monotonía en la dieta diaria desmotiva tu compromiso metabólico y reduce los niveles de nutrientes del cuerpo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-5 rounded-md border border-gray-200 shadow-sm hover:border-[#355E2D]/40 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-lg p-1.5 bg-red-50 text-red-600 rounded flex-shrink-0 font-bold border border-red-100">
                  ❌
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Pierdes tiempo buscando recetas
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Inviertes horas revisando feeds de internet buscando opciones viables sin encontrar algo práctico que no requiera horas en la estufa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-5 rounded-md border border-gray-200 shadow-sm hover:border-[#355E2D]/40 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-lg p-1.5 bg-red-50 text-red-600 rounded flex-shrink-0 font-bold border border-red-100">
                  ❌
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Te faltan opciones altas en proteína
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    La gran mayoría de las recetas comunes no se adaptan a tus requerimientos específicos para conservar saludable tu masa muscular magra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm italic font-semibold text-[#355E2D] max-w-3xl mx-auto bg-white border border-[#355E2D]/10 p-4 rounded-md shadow-soft">
              &ldquo;Si respondiste sí a alguna de estas situaciones, el <strong className="font-extrabold not-italic underline decoration-[#D4AF37]">Recetario Premium GLP-1</strong> fue creado exactamente para ti.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Seccion 3: LA SOLUCIÓN & O QUE VC VAI RECEBER */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-200">
        <RecipeExplorer />
      </section>

      {/* CLINICAL UTILITY FEATURE: Personalized Protein Target Calculator! */}
      <section className="bg-[#F8F9FA] py-12 md:py-16 border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-double border-[#355E2D] rounded-md p-5 md:p-8 shadow-sm">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#355E2D]/5 text-[#355E2D] mb-2 border border-[#355E2D]/15 text-[10px] font-bold tracking-wider">
                <TrendingUp size={12} className="text-[#00C853]" /> EVALUACIÓN DE SALUD INTERACTIVA
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#355E2D] tracking-tight">
                Calculadora Inteligente de Proteína
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Descubre tu requerimiento proteico diario exacto diseñado para proteger tu musculatura y acelerar tu bienestar.
              </p>
            </div>

            <form onSubmit={calculateProtein} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                    Tu Peso Actual (kg):
                  </label>
                  <input
                    type="number"
                    min={35}
                    max={250}
                    required
                    className="w-full bg-gray-55/70 border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#355E2D] font-bold text-gray-800"
                    value={calcWeight}
                    onChange={(e) => {
                      setCalcWeight(Number(e.target.value));
                      setCalcResult(null); // Clear previous result
                    }}
                  />
                  <span className="text-[9px] text-gray-400 mt-0.5 block">Rango: 35kg - 250kg</span>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                    Nivel de Actividad:
                  </label>
                  <select
                    className="w-full bg-gray-55/70 border border-gray-300 rounded-md px-2 py-2 text-xs focus:outline-none focus:border-[#355E2D] font-medium text-gray-800"
                    value={calcActivity}
                    onChange={(e) => {
                      setCalcActivity(e.target.value);
                      setCalcResult(null);
                    }}
                  >
                    <option value="sedentario">Poco ejercicio / Sedentario</option>
                    <option value="moderado">Moderado (Caminar 3-4 veces)</option>
                    <option value="activo">Activo (Gimnasio o entrenamiento)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                    ¿Usas agonistas GLP-1?
                  </label>
                  <select
                    className="w-full bg-gray-55/70 border border-gray-300 rounded-md px-2 py-2 text-xs focus:outline-none focus:border-[#355E2D] font-medium text-gray-800"
                    value={calcMedicine}
                    onChange={(e) => {
                      setCalcMedicine(e.target.value);
                      setCalcResult(null);
                    }}
                  >
                    <option value="si">Sí (Ozempic/Wegovy/etc.)</option>
                    <option value="no">No / Solo dieta saludable</option>
                  </select>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#355E2D] hover:bg-[#355E2D]/95 text-white font-extrabold text-xs tracking-wider transition-all shadow-sm active:scale-98 cursor-pointer uppercase"
                >
                  CALCULAR EVALUACIÓN METABÓLICA
                </button>
              </div>
            </form>

            {calcResult && (
              <div className="mt-8 p-6 bg-brand-green-dark/5 rounded-2xl border border-brand-green-dark/20 animate-fade-in text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-green-dark mb-1">
                      Tu objetivo metabólico diario recomendado:
                    </h4>
                    <p className="text-3xl font-extrabold text-brand-green-dark">
                      {calcResult.protein} gramos <span className="text-base font-semibold">de proteína al día</span>
                    </p>
                    <p className="text-xs text-brand-gray-dark/85 mt-2 leading-relaxed">
                      Este objetivo ha sido calculado con un factor de <strong className="font-extrabold">{calcMedicine === "si" ? "alta protección muscular (GLP-1)" : "mantenimiento saludable"}</strong> de acuerdo a tu peso de {calcWeight}kg.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border flex-shrink-0 text-center md:max-w-xs shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase text-brand-gold block mb-1">Ruta Sugerida:</span>
                    <p className="text-xs font-bold text-brand-gray-dark">
                      Optimiza con:
                    </p>
                    <p className="text-xs font-extrabold text-brand-green-dark mt-0.5 underline">
                      {calcResult.suggest}
                    </p>
                  </div>
                </div>

                <div className="border-t border-brand-green-dark/10 mt-5 pt-4 flex items-start gap-3.5">
                  <span className="text-xl">📚</span>
                  <p className="text-[11px] md:text-xs text-brand-gray-dark/90 leading-relaxed">
                    <strong>¿Cómo cumplir este objetivo de forma fácil?</strong> En el <strong>Recetario Premium GLP-1</strong> incluimos una tabla completa de porciones equivalentes y 100 platos ya calculados, para que alcances esta meta sin pesar ingredientes ni pasar hambre.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Seccion 4: POR QUE ESCOLHER OS PRODUTOS (Beneficios) */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-brand-green-dark mb-4">
              <Heart size={14} className="text-brand-green-vibrant fill-brand-green-vibrant" /> ¿Qué vas a lograr?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green-dark tracking-tight">
              ¿Por qué te encantará este recetario?
            </h2>
            <p className="mt-3 text-lg text-brand-gray-dark max-w-2xl mx-auto">
              Diseñado minuciosamente para ser una herramienta diaria que amarás usar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-1.5 rounded-lg border border-gray-200">
            <div className="bg-white p-4 rounded-md border border-gray-150 flex items-start gap-3">
              <span className="p-1 px-1.5 font-bold text-sm rounded bg-[#355E2D]/10 text-[#355E2D] flex-shrink-0">
                ✓
              </span>
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  Ahorra tiempo valioso:
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Recetas listas en minutos con pasos claros que agilizan tu paso por la cocina.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md border border-gray-150 flex items-start gap-3">
              <span className="p-1 px-1.5 font-bold text-sm rounded bg-[#355E2D]/10 text-[#355E2D] flex-shrink-0">
                ✓
              </span>
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  Más organización en tu cocina:
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Todo minuciosamente estructurado y dividido estratégicamente por tipo de comida.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md border border-gray-150 flex items-start gap-3">
              <span className="p-1 px-1.5 font-bold text-sm rounded bg-[#355E2D]/10 text-[#355E2D] flex-shrink-0">
                ✓
              </span>
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  Dile adiós al estrés mental:
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Elimina por completo la desgastante pregunta de &ldquo;¿qué voy a cocinar hoy en la comida o la cena?&rdquo;.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md border border-gray-150 flex items-start gap-3">
              <span className="p-1 px-1.5 font-bold text-sm rounded bg-[#355E2D]/10 text-[#355E2D] flex-shrink-0">
                ✓
              </span>
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  Ingredientes sumamente sencillos:
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Disponibles de inmediato en cualquier supermercado común, sin tiendas costosas o marcas difíciles.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md border border-gray-150 md:col-span-2 flex items-start gap-3">
              <span className="p-1 px-1.5 font-bold text-sm rounded bg-[#355E2D]/10 text-[#355E2D] flex-shrink-0">
                ✓
              </span>
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  Opciones verdaderamente deliciosas:
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Recetas variadas, cremosas y frescas que toda tu familia junta puede disfrutar al unísono.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion 5: BONOS ESPECIALES INCLUIDOS */}
      <section className="bg-[#F8F9FA] py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-bold bg-[#D4AF37]/10 text-[#D4AF37] mb-2 border border-[#D4AF37]/20 uppercase tracking-widest">
              🎁 Regalos de Lanzamiento Exclusivos (Gratis)
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#355E2D] tracking-tight">
              Más de US$ 63 en Recursos Extra — Completamente Gratis
            </h2>
            <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto">
              Si ordenas tu copia digital hoy, desbloquearás sin costo estas tres guías seleccionadas de alto valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Bonus 1 */}
            <div className="bg-white rounded-md p-4 md:p-5 border border-[#D4AF37] shadow-sm hover:shadow transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">
                Bono 1
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center text-lg font-bold">
                  ⚡
                </div>
                <h3 className="text-sm font-extrabold text-gray-800">
                  Guía de Preparaciones Rápidas
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tácticas para automatizar platos de alta densidad proteica en menos de 10 minutos. Ideal para emergencias y días con cero tiempo de antelación.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-5 flex justify-between items-center text-[10px] bg-yellow-50/60 p-2 rounded border border-[#D4AF37]/20">
                <span className="font-bold text-gray-400 line-through">Valor: US$ 19</span>
                <span className="font-extrabold text-[#00C853]">¡GRATIS HOY!</span>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-white rounded-md p-4 md:p-5 border border-[#D4AF37] shadow-sm hover:shadow transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">
                Bono 2
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center text-lg font-bold">
                  📋
                </div>
                <h3 className="text-sm font-extrabold text-gray-800">
                  Planificador de Comidas Imprimible
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Template limpio e interactivo de organización semanal para agendar tus porciones calóricas, compras del súper y evitar el picoteo de forma óptima.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-5 flex justify-between items-center text-[10px] bg-yellow-50/60 p-2 rounded border border-[#D4AF37]/20">
                <span className="font-bold text-gray-400 line-through">Valor: US$ 17</span>
                <span className="font-extrabold text-[#00C853]">¡GRATIS HOY!</span>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white rounded-md p-4 md:p-5 border border-[#D4AF37] shadow-sm hover:shadow transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">
                Bono 3
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center text-lg font-bold">
                  💪
                </div>
                <h3 className="text-sm font-extrabold text-gray-800">
                  20 Combinaciones Proteicas
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mezclas balanceadas de ingredientes sencillos para armar aperitivos rápidos de emergencia que cubren el 25% de tu meta proteica diaria sin requerir cocción.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-5 flex justify-between items-center text-[10px] bg-yellow-50/60 p-2 rounded border border-[#D4AF37]/20">
                <span className="font-bold text-gray-400 line-through">Valor: US$ 27</span>
                <span className="font-extrabold text-[#00C853]">¡GRATIS HOY!</span>
              </div>
            </div>

          </div>

          {/* Golden Summary wrap bar */}
          <div className="bg-white border-2 border-double border-[#D4AF37] rounded-md p-4 text-center shadow-sm">
            <p className="text-xs md:text-sm font-extrabold text-gray-800">
              🥇 Valor total de los bonos libres de costo: <span className="text-red-600 line-through font-bold">US$ 63.00</span> — <span className="text-[#355E2D] font-extrabold">Tuyos sin costo alguno</span> adicional al adquirir el recetario hoy por US$ 9.90.
            </p>
          </div>
        </div>
      </section>

      {/* Seccion 6: TESTIMONIOS REALES */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <ReviewList />
      </section>

      {/* Seccion 7: OFERTAS (Caja de conversión final) */}
      <section className="bg-brand-green-dark text-white py-16 md:py-24 relative overflow-hidden">
        {/* Abstract vector backgrounds to elevate visual density */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/2 rounded-full -ml-36 -mt-36" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-vibrant/5 rounded-full -mr-36 -mb-36 animate-pulse" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          
          <div className="space-y-3.5">
            <span className="bg-brand-gold font-extrabold tracking-widest text-[#1A1A1A] text-xs px-4 py-1.5 rounded-full uppercase inline-block shadow-md">
              OFERTA ESPECIAL POR TIEMPO LIMITADO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-1 text-white">
              Simplifica tu menú y protege tu salud
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
              No dejes pasar la oportunidad de ordenar la colección digital culinaria más completa y recomendada a un precio sumamente accesible.
            </p>
          </div>

          {/* Detailed package inclusions card check list */}
          <div className="bg-white/5 backdrop-blur-md rounded-md p-4 md:p-5 max-w-md mx-auto text-left border border-white/10 space-y-3">
            <h3 className="font-extrabold text-[10px] uppercase text-[#D4AF37] tracking-wider pb-1.5 border-b border-white/15">
              ¿Qué incluye tu descarga inmediata?
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="text-[#00C853]">✔</span>
                <span>Recetario Premium GLP-1 completo (100 Recetas)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00C853]">✔</span>
                <span>Bono #1: Guía de preparaciones de 10 mins (Gratis)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00C853]">✔</span>
                <span>Bono #2: Planificador de Menú Semanal (Gratis)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00C853]">✔</span>
                <span>Bono #3: 20 Combinaciones Proteicas Exprés (Gratis)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#00C853]">✔</span>
                <span>Actualizaciones de por vida & Soporte de nutrición</span>
              </li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs line-through text-white/50 tracking-wide font-sans">
              Precio de venta regular: US$ 70.00
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] tracking-tight font-sans drop-shadow-md">
              US$ 9.90
            </p>
            <p className="text-[10px] text-white/55 font-bold uppercase tracking-wider">
              PAGO ÚNICO • ACCESO INMEDIATO • FORMATO DIGITAL PDF
            </p>
          </div>

          {/* CTA Glowing Button - Styled beautifully as btn-cta-custom in index.css */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleOpenCheckout}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#00C853] hover:bg-[#00b24a] text-white font-extrabold text-sm rounded-md tracking-wider transition-all shadow-md duration-200 transform active:scale-95 uppercase cursor-pointer"
            >
              ¡SÍ, QUIERO MI ACCESO INMEDIATO POR US$ 9.90!
            </button>
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-5 text-xs text-white/70 font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1">🔒 Pago 100% Protegido</span>
            <span>•</span>
            <span className="flex items-center gap-1">🛡️ Sin suscripciones mensuales</span>
            <span>•</span>
            <span className="flex items-center gap-1">⚡ Entrega directa</span>
          </div>

        </div>
      </section>

      {/* Seccion 8: GARANTIA */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            
            {/* Guarantee Emblem Circular badges with CSS */}
            <div className="flex-shrink-0 relative">
              <div className="w-40 h-40 rounded-full border-4 border-dashed border-brand-gold/60 flex items-center justify-center bg-amber-50 shadow-inner relative animate-spin-slow">
                {/* Embedded seal details inside loop */}
                <div className="absolute inset-2 bg-white rounded-full border-2 border-brand-gold shadow-xs" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <span className="text-brand-gold text-2xl font-bold font-sans">100%</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-gray-dark font-extrabold">GARANTÍA</span>
                <span className="text-[10px] uppercase font-serif text-brand-green-dark font-extrabold">7 DÍAS</span>
              </div>
            </div>

            {/* Explanatory texts */}
            <div className="space-y-4 text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-green-dark tracking-tight">
                Garantía de Satisfacción de 7 Días - Tu inversión está 100% protegida
              </h2>
              <p className="text-sm md:text-base text-brand-gray-dark/95 leading-relaxed font-sans">
                Queremos que te sientas completamente seguro con tu decisión de compra. Sostenemos una garantía incondicional estricta de 7 días: si por cualquier motivo nuestro recetario o sus bonificaciones no exceden tus más altas expectativas, simplemente solicita tu reembolso y te devolveremos tu dinero al instante, sin preguntas, sin devaluación de valor, sin riesgo, y sin incómoda letra pequeña.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Seccion 9: FAQ */}
      <section className="bg-brand-gray-light py-16 md:py-24 border-b border-gray-200">
        <FAQ />
      </section>

      {/* Trust icons bar highlights before bottom */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4 space-y-2 hover:scale-[1.02] transition-transform">
              <div className="text-3xl">⚡</div>
              <h4 className="font-extrabold text-sm text-brand-gray-dark">Acceso Inmediato</h4>
              <p className="text-xs text-gray-500">Recibe tu copia digital PDF tras el pago.</p>
            </div>
            <div className="p-4 space-y-2 hover:scale-[1.02] transition-transform">
              <div className="text-3xl">🔒</div>
              <h4 className="font-extrabold text-sm text-brand-gray-dark">Pago Seguro</h4>
              <p className="text-xs text-gray-500">Transacción encriptada HTTPS.</p>
            </div>
            <div className="p-4 space-y-2 hover:scale-[1.02] transition-transform">
              <div className="text-3xl">📱</div>
              <h4 className="font-extrabold text-sm text-brand-gray-dark">Formato Digital</h4>
              <p className="text-xs text-gray-500">Compatible con móviles y tablets.</p>
            </div>
            <div className="p-4 space-y-2 hover:scale-[1.02] transition-transform">
              <div className="text-3xl">⏰</div>
              <h4 className="font-extrabold text-sm text-brand-gray-dark">Oferta Limitada</h4>
              <p className="text-xs text-gray-500">Precio especial por lanzamiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Legal footer and Disclaimer layout */}
      <footer className="bg-brand-gray-dark text-white/70 py-12 tracking-wide font-sans text-xs">
        <div className="max-w-6xl mx-auto px-4 space-y-6 text-center">
          
          {/* Quick links */}
          <div className="flex items-center justify-center gap-6 text-white text-[11px] font-bold">
            <a href="#calculadora" className="hover:underline hover:text-brand-green-vibrant transition-colors">Calculadora Proteica</a>
            <span>•</span>
            <a href="#solucion" className="hover:underline hover:text-brand-green-vibrant transition-colors">Programa Nutricional</a>
            <span>•</span>
            <a href="#testimonios" className="hover:underline hover:text-brand-green-vibrant transition-colors">Testimonios</a>
            <span>•</span>
            <a href="#faq" className="hover:underline hover:text-brand-green-vibrant transition-colors">FAQ de Soporte</a>
          </div>

          <p className="text-[10px] md:text-xs leading-relaxed max-w-4xl mx-auto text-white/50">
            DESCLAMER OFICIAL DE SALUD & REGLAMENTO: La información, recetas y consejos mostrados en este libro digital o portal web representan pautas educativas prácticas y generales orientadas a la autogestión calórica alimentaria. De ninguna manera pretenden constituir, reemplazar o sugerirse como diagnósticos médicos formales, cirugías nutricionales clínicas complejas, o prescripciones farmacológicas oficiales. Si utilizas medicamentos de control de masa o de la hormona GLP-1 (Ozempic®, Wegovy®, Mounjaro®, Rybelsus®), o presentas antecedentes médicos complejos, te recomendamos fervientemente consultar con tu endocrinólogo o médico especialista de cabecera antes de alterar drásticamente tus ingestas físicas.
          </p>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40">
            <p className="font-bold flex items-center justify-center gap-1.5">
              <span>🛡️ Garantía de 7 días</span>
              <span>•</span>
              <span>🔒 Pago seguro SSL</span>
              <span>•</span>
              <span>📥 Descarga digital PDF</span>
            </p>
            <p>
              &copy; 2026 Recetario Premium GLP-1. Hecho con maestría culinaria. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </footer>

      {/* CONVERSION DIRECTA: Real-time Fake Sales Notification Bubble in bottom-left */}
      {showSocialProof && socialProof && (
        <div className="fixed bottom-4 left-4 z-50 max-w-xs md:max-w-sm bg-white border border-gray-100 rounded-md shadow-lg flex items-center gap-3 p-3 animate-slide-in duration-300 transition-all border-l-4 border-l-[#00C853]">
          <div className="w-8 h-8 rounded-full bg-[#355E2D]/5 text-brand-green-dark flex-shrink-0 flex items-center justify-center text-sm font-bold shadow-inner">
            🔔
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
              {socialProof.name} <span className="text-[9px] font-semibold text-gray-400 font-sans tracking-wide bg-gray-50 px-1 rounded">{socialProof.location}</span>
            </p>
            <p className="text-[10px] text-gray-650 mt-0.5 leading-snug">
              {socialProof.action}
            </p>
          </div>
        </div>
      )}

      {/* Sello Flotante lateral de Seguridad SSL en pantallas grandes */}
      <div className="hidden xl:flex fixed right-4 bottom-4 z-40 bg-white/75 backdrop-blur-md p-2 rounded-md shadow-xs border items-center gap-1.5">
        <Lock size={11} className="text-[#355E2D]" />
        <span className="text-[9px] font-bold text-gray-650 tracking-tight">Compra Segura Certificada AES-256</span>
      </div>

      {/* Render Single Master Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

    </div>
  );
}
