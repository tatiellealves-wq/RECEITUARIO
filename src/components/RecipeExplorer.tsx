import { useState } from "react";
import { Check, Flame, Award, Heart, Sparkles, BookOpen } from "lucide-react";
import { RECIPES_DATA } from "../types";

export default function RecipeExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("desayunos");
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState<number>(0);

  const categories = [
    {
      id: "desayunos",
      emoji: "🌅",
      title: "25 Desayunos",
      subtitle: "Altos en Proteína",
      bullets: ["Yogur griego", "Omelette de claras", "Smoothies", "Muffins de huevo", "Parfaits"],
      color: "from-orange-50 to-amber-50 border-orange-200 text-orange-850",
      accentBg: "bg-orange-500",
    },
    {
      id: "almuerzos",
      emoji: "☀️",
      title: "25 Almuerzos",
      subtitle: "Inteligentes",
      bullets: ["Pollo mediterráneo", "Ensaladas", "Bowls de proteína", "Wraps", "Salmón magro"],
      color: "from-green-50 to-emerald-50 border-green-200 text-green-850",
      accentBg: "bg-green-600",
    },
    {
      id: "cenas",
      emoji: "🌙",
      title: "25 Cenas",
      subtitle: "Nutritivas",
      bullets: ["Pescados al horno", "Sopas ligeras", "Tortillas digestivas", "Salteados magros"],
      color: "from-indigo-50 to-blue-50 border-blue-200 text-indigo-850",
      accentBg: "bg-indigo-600",
    },
    {
      id: "snacks",
      emoji: "🥜",
      title: "25 Snacks",
      subtitle: "Altos en Proteína",
      bullets: ["Yogur proteico", "Frutos secos", "Rollitos de pavo", "Pudding de chía"],
      color: "from-amber-50 to-yellow-50 border-amber-200 text-amber-850",
      accentBg: "bg-amber-600",
    },
  ];

  const currentRecipes = RECIPES_DATA[activeCategory] || [];
  const activeRecipe = currentRecipes[selectedRecipeIndex] || currentRecipes[0] || null;

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    setSelectedRecipeIndex(0);
  };

  return (
    <div className="py-2" id="solucion-section">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#355E2D]/5 text-[#355E2D] mb-3 border border-[#355E2D]/10 text-[10px] font-bold tracking-wider uppercase">
          <Sparkles size={11} className="text-[#D4AF37] fill-[#D4AF37] animate-pulse" /> SOLUCIÓN CIENTÍFICA-NUTRICIONAL
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#355E2D] tracking-tight">
          Presentamos la solución: Recetario Premium GLP-1
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-3xl mx-auto">
          Una colección exclusiva con <strong className="text-[#355E2D] font-extrabold">100 recetas organizadas y probadas</strong>, diseñadas para ayudarte a planificar tus comidas de forma simple, práctica y extremadamente deliciosa.
        </p>
      </div>

      {/* Grid of 4 beautiful cards - High Density Grid theme */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              type="button"
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`w-full text-left rounded-md p-4 border transition-all duration-200 relative focus:outline-none flex flex-col justify-between h-56 cursor-pointer ${
                isSelected
                  ? "border-[#355E2D] bg-white shadow-sm ring-1 ring-[#355E2D]/10"
                  : "border-gray-200 bg-[#F8F9FA] hover:border-gray-300 hover:bg-white"
              }`}
            >
              {isSelected && (
                <span className="absolute -top-2.5 right-2 bg-[#355E2D] text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                  <Flame size={9} className="fill-[#D4AF37] stroke-[#D4AF37]" /> PREVIEW
                </span>
              )}

              <div>
                <div className="text-2xl mb-2">
                  {cat.emoji}
                </div>
                <h3 className="text-sm font-extrabold text-gray-800">
                  {cat.title}
                </h3>
                <p className="text-[#355E2D] font-bold text-xs mb-2">
                  {cat.subtitle}
                </p>

                <ul className="space-y-1 mt-1">
                  {cat.bullets.slice(0, 3).map((b, bi) => (
                    <li key={bi} className="flex items-center gap-1.5 text-[10px] text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-[#355E2D]/50 flex-shrink-0" />
                      <span className="truncate">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-2 border-t border-gray-150 w-full flex items-center justify-between">
                <span className="text-[9px] font-semibold text-gray-400">
                  25 Recetas
                </span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-[#00C853] text-white" : "bg-gray-200 text-gray-650"
                }`}>
                  {isSelected ? "Vista" : "Abrir"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Cooking Demo Dashboard (The high converting value proof!) */}
      <div className="bg-[#F8F9FA] border border-gray-200 rounded-md p-4 md:p-5 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-4 gap-3">
          <div>
            <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#D4AF37] flex items-center gap-1 mb-1">
              <Award size={12} /> DEMOSTRACIÓN INTERACTIVA
            </span>
            <h4 className="text-base font-extrabold text-[#355E2D]">
              Explora una muestra de recetas de {activeCategory.toUpperCase()}
            </h4>
            <p className="text-[10px] text-gray-400">
              Haz clic en los platos de abajo para inspeccionar sus ingredientes limpios y macronutrientes reales.
            </p>
          </div>

          {/* Quick toggle chips inside preview */}
          <div className="flex flex-wrap gap-1.5">
            {currentRecipes.map((r, ri) => (
              <button
                type="button"
                key={r.id}
                onClick={() => setSelectedRecipeIndex(ri)}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                  selectedRecipeIndex === ri
                    ? "bg-[#355E2D] text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-150 border border-gray-250"
                }`}
              >
                🍳 {r.name.split(" ").slice(0, 3).join(" ")}...
              </button>
            ))}
          </div>
        </div>

        {activeRecipe && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left Recipe Card detail */}
            <div className="lg:col-span-7 bg-white p-4 md:p-5 rounded-md border border-gray-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="bg-green-50 text-[#355E2D] text-[9px] font-extrabold px-2 py-0.5 rounded border border-green-150 uppercase tracking-wider">
                    FÁCIL DIGESTIÓN
                  </span>
                  <span className="bg-emerald-50 text-[#00C853] text-[9px] font-extrabold px-2 py-0.5 rounded border border-emerald-150 uppercase tracking-wider flex items-center gap-0.5">
                    <Heart size={9} className="fill-[#00C853]" /> PROTEICO
                  </span>
                </div>

                <h5 className="text-lg font-extrabold text-gray-805 tracking-tight mb-1">
                  {activeRecipe.name}
                </h5>

                <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                  {activeRecipe.description}
                </p>

                <h6 className="text-[10px] uppercase font-bold text-[#355E2D] tracking-wider mb-2 flex items-center gap-1">
                  <BookOpen size={12} /> Ingredientes requeridos:
                </h6>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mb-1">
                  {activeRecipe.ingredients.map((ing, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-[#00C853] font-bold mr-1">✓</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality highlight banner */}
              <div className="mt-4 p-2 bg-[#F8F9FA] rounded border border-gray-200 flex items-center gap-2">
                <div className="text-lg">🌱</div>
                <p className="text-[10px] text-gray-500 leading-relaxed font-semibold">
                  Ingredientes seleccionados estratégicamente por nutricionistas para apoyar la saciedad y evitar picos de glucosa.
                </p>
              </div>
            </div>

            {/* Right side - Macro-chart visual widgets */}
            <div className="lg:col-span-5 space-y-3">
              <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-3">
                  🎯 Perfil Nutricional por Porción
                </span>

                {/* Macrometers bar chart */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-gray-750 mb-1">
                      <span>Calorías</span>
                      <span className="text-[#355E2D]">{activeRecipe.macros.calories} kcal</span>
                    </div>
                    <div className="w-full bg-gray-150 h-2 rounded overflow-hidden">
                      <div
                        className="bg-[#355E2D] h-full rounded transition-all duration-500"
                        style={{ width: `${Math.min(100, (activeRecipe.macros.calories / 500) * 100)}%` }}
                      />
                    </div>
                    <p className="text-[9px] text-gray-400 mt-0.5">Porción ideal ultra-ligera y saciante</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-gray-750 mb-1">
                      <span className="flex items-center gap-1">Proteínas 💪</span>
                      <span className="text-[#00C853] font-extrabold">{activeRecipe.macros.protein}g</span>
                    </div>
                    <div className="w-full bg-gray-150 h-2 rounded overflow-hidden">
                      <div
                        className="bg-[#00C853] h-full rounded transition-all duration-500"
                        style={{ width: `${Math.min(100, (activeRecipe.macros.protein / 40) * 100)}%` }}
                      />
                    </div>
                    <p className="text-[9px] text-gray-400 mt-0.5">Protege tu masa muscular durante la pérdida acelerada</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-gray-750 mb-1">
                      <span>Carbohidratos Complejos</span>
                      <span className="text-blue-600">{activeRecipe.macros.carbs}g</span>
                    </div>
                    <div className="w-full bg-gray-150 h-2 rounded overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded transition-all duration-500"
                        style={{ width: `${Math.min(100, (activeRecipe.macros.carbs / 40) * 100)}%` }}
                      />
                    </div>
                    <p className="text-[9px] text-gray-400 mt-0.5">Carbohidratos de bajo índice glucémico</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-gray-750 mb-1">
                      <span>Grasas Saludables</span>
                      <span className="text-amber-600">{activeRecipe.macros.fats}g</span>
                    </div>
                    <div className="w-full bg-gray-150 h-2 rounded overflow-hidden">
                      <div
                        className="bg-amber-600 h-full rounded transition-all duration-500"
                        style={{ width: `${Math.min(100, (activeRecipe.macros.fats / 30) * 100)}%` }}
                      />
                    </div>
                    <p className="text-[9px] text-gray-400 mt-0.5">Grasas saludables de alta calidad metabolizada</p>
                  </div>
                </div>
              </div>

              {/* Smart nutritional fact callout */}
              <div className="bg-[#355E2D] text-white p-4 rounded-md flex items-start gap-3">
                <span className="text-xl text-[#D4AF37] animate-pulse">💡</span>
                <div>
                  <h6 className="text-xs font-bold text-[#D4AF37]">
                    ¿Sabías qué?
                  </h6>
                  <p className="text-[10px] text-white/90 leading-relaxed mt-0.5">
                    Quienes pierden peso acelerados por GLP-1 corren riesgo de perder músculo en lugar de grasa. Consumir al menos 20-30g de proteína de alta calidad por comida ayuda a proteger los músculos y duplicar la pérdida de grasa saludable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
