export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  macros: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  tag: string;
  text: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "¿Este recetario es exclusivo para personas que usan GLP-1?",
    answer: "No, aunque está especialmente adaptado para las necesidades de quienes usan medicamentos como Ozempic®, Wegovy® o Mounjaro® (quienes requieren alta densidad de proteínas para proteger la masa muscular y porciones fáciles de digerir), es perfecto para cualquier persona que busque perder peso de forma saludable y comer delicioso."
  },
  {
    question: "¿En qué formato se entrega el recetario?",
    answer: "El formato es 100% digital (PDF interactivo de alta calidad), compatible con celulares, tabletas y computadoras. Recibirás un enlace de descarga segura en tu correo electrónico de inmediato tras realizar el pago, para que puedas usarlo hoy mismo en tu dispositivo preferido."
  },
  {
    question: "¿Cómo funciona la garantía de devolución?",
    answer: "Es muy sencillo: cuentas con una garantía incondicional de satisfacción de 7 días. Si por cualquier motivo sientes que el recetario no se adapta a tus necesidades, simplemente envíanos un correo electrónico y procesamos el reembolso del 100% de tu pago. Sin preguntas, sin condiciones y sin letra pequeña."
  },
  {
    question: "¿Los ingredientes son fáciles de conseguir?",
    answer: "Totalmente. Hemos diseñado el recetario pensando en la practicidad diaria. El 95% de los ingredientes están disponibles en cualquier supermercado común, sin requerir tiendas especializadas ni marcas costosas o complejas."
  },
  {
    question: "¿Necesito conocimientos avanzados de cocina?",
    answer: "Para nada. Cada una de las 100 recetas incluye instrucciones paso a paso sumamente sencillas, tiempos de preparación optimizados y medidas comprensibles. Muchas recetas se pueden tener listas en menos de 15 o 20 minutos."
  }
];

export const RECIPES_DATA: Record<string, Recipe[]> = {
  desayunos: [
    {
      id: "d1",
      name: "Muffins Horneados de Huevo y Espinaca",
      description: "Esponjosos bocados altos en proteína, ideales para preparar el fin de semana y recalentar en segundos durante las mañanas ocupadas.",
      ingredients: ["6 huevos enteros", "2 claras de huevo", "1 taza de espinacas tiernas picadas", "50g de queso feta desmenuzado", "Sal, pimienta y ajo en polvo"],
      macros: { calories: 180, protein: 16, carbs: 3, fats: 11 }
    },
    {
      id: "d2",
      name: "Bowl de Yogur Griego y Bayas Proteicas",
      description: "Una mezcla súper cremosa y saciante con yogur griego natural enriquecido, frutas rojas antioxidantes y semillas de chía para fibra digestiva.",
      ingredients: ["200g de yogur griego 0%", "1/2 scoop de proteína en polvo de vainilla", "1/2 taza de arándanos y fresas", "1 cucharada de semillas de calabaza y chía"],
      macros: { calories: 250, protein: 28, carbs: 15, fats: 6 }
    },
    {
      id: "d3",
      name: "Omelette Esponjosa de Claras con Pavo",
      description: "Un desayuno sumamente ligero y de digestión fácil, cargado de proteínas magras para mantener estables los niveles de glucosa.",
      ingredients: ["4 claras de huevo", "1 huevo entero", "60g de pechuga de pavo picada en cubitos", "1/4 de aguacate mediano", "Cebollino fresco picado"],
      macros: { calories: 230, protein: 24, carbs: 4, fats: 12 }
    },
    {
      id: "d4",
      name: "Avena Nocturna de Chocolate y Almendras",
      description: "Sabor a postre preparado en frío desde la noche anterior. La fibra de la avena ayuda a una digestión lenta y saludable.",
      ingredients: ["40g de avena en hojuelas", "150ml de leche de almendras sin azúcar", "1 scoop de proteína de chocolate", "1 cucharadita de cacao puro", "5 almendras laminadas"],
      macros: { calories: 290, protein: 26, carbs: 24, fats: 7 }
    },
    {
      id: "d5",
      name: "Panqueques Rápidos de Avena y Requesón",
      description: "Panqueques esponjosos sin harinas refinadas. El requesón aporta proteínas digestivas de alta calidad sin pesadez.",
      ingredients: ["100g de requesón (cottage) bajo en grasa", "2 claras de huevo", "30g de avena molida", "Ralladura de limón y stevia al gusto"],
      macros: { calories: 265, protein: 22, carbs: 26, fats: 4 }
    }
  ],
  almuerzos: [
    {
      id: "a1",
      name: "Pechuga de Pollo Mediterránea al Limón",
      description: "Filete de pollo sumamente jugoso marinado con limón, finas hierbas, montado sobre una cama de calabacín y tomates cherry.",
      ingredients: ["150g de pechuga de pollo magra", "1 cucharadita de aceite de oliva virgen", "Tomates cherry y calabacín en rodajas", "Zumo de limón, orégano y romero"],
      macros: { calories: 280, protein: 35, carbs: 6, fats: 11 }
    },
    {
      id: "a2",
      name: "Bowl de Quinoa, Salmón y Aguacate",
      description: "La combinación perfecta de grasas saludables esenciales Omega-3, quinoa de digestión lenta y vegetales verdes crujientes.",
      ingredients: ["120g de lomo de salmón al horno", "60g de quinoa cocida", "1/2 taza de pepino y espinacas", "30g de aguacate", "Aliño ligero de yogur y eneldo"],
      macros: { calories: 410, protein: 31, carbs: 22, fats: 19 }
    },
    {
      id: "a3",
      name: "Ensalada Templada de Garbanzos y Atún Premium",
      description: "Rápida, extremadamente saciante y llena de fibra y micronutrientes para mantenerte activo toda la tarde.",
      ingredients: ["100g de garbanzos cocidos y escurridos", "1 lata de atún al natural de calidad", "Pimiento rojo y verde en cubos", "Cebolla morada y cilantro", "1 cucharadita de vinagre de manzana y aceite de oliva"],
      macros: { calories: 310, protein: 28, carbs: 28, fats: 8 }
    },
    {
      id: "a4",
      name: "Wrap de Trigo Integral con Pavo y Rúcula",
      description: "Una opción portátil y fresca, ideal para almuerzos rápidos en la oficina o días de alta actividad.",
      ingredients: ["1 tortilla de trigo integral grande", "100g de pechuga de pavo horneada fileteada", "Un puñado de rúcula fresca", "Rodajas de tomate de huerto", "1 cucharada de queso crema ligero para untar"],
      macros: { calories: 290, protein: 25, carbs: 28, fats: 7 }
    },
    {
      id: "a5",
      name: "Chili Express de Ternera Magra y Judías",
      description: "Una porción templada reconfortante, de gran densidad proteica gracias a la combinación de legumbres y ternera limpia.",
      ingredients: ["120g de carne de ternera picada magra (<5% grasa)", "80g de judías rojas cocidas", "Salsa de tomate natural triturada", "Cebolla, ajo y una pizca de comino"],
      macros: { calories: 350, protein: 32, carbs: 26, fats: 9 }
    }
  ],
  cenas: [
    {
      id: "c1",
      name: "Salmón al Horno en Costra de Hierbas",
      description: "Cocinado a baja temperatura para conservar todos sus nutrientes. Se acompaña con espárragos trigueros al vapor.",
      ingredients: ["140g de lomo de salmón fresco", "Manojo de espárragos verdes", "Eneldo fresco, ajo machacado y ralladura de lima", "Pimienta negra recién molida"],
      macros: { calories: 340, protein: 29, carbs: 4, fats: 20 }
    },
    {
      id: "c2",
      name: "Crema Ligera de Calabaza con Huevo Poché",
      description: "Una opción reconfortante y de digestión facilísima para noches donde buscas ligereza sin comprometer la proteína.",
      ingredients: ["200g de calabaza cocida y triturada con puerro", "1 huevo pochado perfecto", "2 claras de huevo adicionales mezcladas en la crema", "Semillas de sésamo para espolvorear"],
      macros: { calories: 210, protein: 17, carbs: 16, fats: 8 }
    },
    {
      id: "c3",
      name: "Tortilla de Espinacas Orgánicas y Ricotta",
      description: "Esponjosa y suave para el estómago. Aporta calcio, magnesio y proteínas magras en menos de 10 minutos.",
      ingredients: ["2 huevos enteros", "1 clara", "1 taza de espinacas cocidas al vapor", "40g de queso ricotta ligero", "Sal marina y nuez moscada"],
      macros: { calories: 220, protein: 18, carbs: 5, fats: 13 }
    },
    {
      id: "c4",
      name: "Salteado Express de Ternera y Brócoli",
      description: "Sabor oriental refinado con cocción rápida tipo wok. Conserva la frescura del brócoli y la jugosidad de la ternera.",
      ingredients: ["120g de tiras de ternera magra", "1.5 tazas de ramilletes de brócoli al dente", "1 cucharada de salsa de soja baja en sodio", "Jengibre rallado y unas gotas de aceite de sésamo"],
      macros: { calories: 270, protein: 30, carbs: 9, fats: 11 }
    },
    {
      id: "c5",
      name: "Brochetas de Pavo y Verduras al Grill",
      description: "Divertidas y coloridas brochetas con dados de pavo marinado, pimientos dulces y champiñones tiernos.",
      ingredients: ["150g de solomillo de pavo en cubos", "Champiñones enteros pequeños", "Pimientos tricolor y cebolla morada", "Especias provenzales"],
      macros: { calories: 230, protein: 32, carbs: 7, fats: 6 }
    }
  ],
  snacks: [
    {
      id: "s1",
      name: "Rollitos Crujientes de Pepino y Pavo",
      description: "Sustituye las galletas saladas por refrescante lámina de pepino enrollada con jamón de pavo artesano y crema ligera.",
      ingredients: ["1 pepino mediano cortado en tiras anchas", "80g de pechuga de pavo alta en carne", "2 cucharadas de queso crema ligero", "Hierbabuena finamente picada"],
      macros: { calories: 120, protein: 14, carbs: 5, fats: 4 }
    },
    {
      id: "s2",
      name: "Pudding Proteico de Chía y Coco",
      description: "Súper saciante gracias al mucílago de la chía. Te mantiene lleno entre comidas evitando antojos dulces.",
      ingredients: ["15g de semillas de chía", "100ml de leche de coco ligera", "1/2 scoop de proteína de vainilla", "Pizca de canela en polvo"],
      macros: { calories: 160, protein: 12, carbs: 9, fats: 7 }
    },
    {
      id: "s3",
      name: "Garbanzos Especiados al Horno Crujientes",
      description: "Hacen un sustituto excelente y adictivo para las patatas fritas industriales. Alto en fibra digestiva y energía limpia.",
      ingredients: ["80g de garbanzos cocidos", "Paprika ahumada, ajo en polvo, orégano", "Pizca de sal marina y media cucharadita de aceite de oliva"],
      macros: { calories: 150, protein: 7, carbs: 19, fats: 4 }
    },
    {
      id: "s4",
      name: "Batido Cremoso de Fresas Silvestres",
      description: "Deliciosa bebida fría, ideal para después de caminar o entrenar. Se digiere facilísimo y calma el apetito.",
      ingredients: ["200ml de leche desnatada o bebida de soja", "1 scoop de proteína de fresa o vainilla", "5 fresas maduras trituradas", "Hielo al gusto"],
      macros: { calories: 180, protein: 25, carbs: 12, fats: 2 }
    },
    {
      id: "s5",
      name: "Manzana con Crema de Cacahuete Natural",
      description: "Un clásico balanceado entre la frescura crujiente del ácido de la manzana verde y la densidad grasosa de la almendra o cacahuete.",
      ingredients: ["1 manzana verde (ácida) cortada en gajos", "1 cucharada rasa (15g) de mantequilla de cacahuete silvestre 100%"],
      macros: { calories: 175, protein: 5, carbs: 18, fats: 9 }
    }
  ]
};

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "María G.",
    tag: "Usuaria de Ozempic®",
    text: "Llevo tres semanas usando los medicamentos y me costaba horrores planificar mis comidas debido a las náuseas ligeras. Este recetario me devolvió las ideas. Las porciones son perfectas y mi masa muscular se mantiene intacta. ¡Me encanta que todo se prepare en minutos!",
    rating: 5,
    date: "Hace 3 días"
  },
  {
    id: "t2",
    name: "Patricia R.",
    tag: "Usuaria de Wegovy®",
    text: "La comida proteica siempre me parecía aburrida o súper seca. Las recetas de almuerzos y desayunos de este libro digital son extremadamente sabrosas y fáciles de digerir. El muffin de huevo y el salmón al horno se convirtieron en mis favoritos absolutos.",
    rating: 5,
    date: "Hace un momento"
  },
  {
    id: "t3",
    name: "Carlos M.",
    tag: "Usuario de Mounjaro®",
    text: "Excelente recurso. Soy una persona con el tiempo justo, trabajo todo el día. Poder elegir un desayuno o cena en 15 minutos sin romperme la cabeza es impagable. Los bonus incluidos son fantásticos también. Súper recomendado.",
    rating: 5,
    date: "Hace 5 días"
  },
  {
    id: "t4",
    name: "Sandra L.",
    tag: "Seguidora de alimentación proteica",
    text: "Pensé que sería otro libro de dietas de esos con ingredientes rarísimos y caros. Me sorprendió gratamente ver que todo está en el súper de la esquina. Muy práctico, bien detallado en calorías y macros. El precio de US$ 9.90 es un regalo.",
    rating: 5,
    date: "Hace 2 días"
  }
];
