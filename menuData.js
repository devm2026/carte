// Auto-generated menuData.js from src/data/menuData.ts. Do not edit directly.

const categories = [
  {
    id: "breakfast",
    name: "Petits-Déjeuners",
    description: "Des formules complètes pour bien commencer la journée, accompagnées de boissons chaudes et jus pressés.",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "b_presto",
        name: "PRESTO",
        price: 27,
        composition: "Boisson chaude, jus d'orange naturel, panier viennoiserie ou panier boulanger avec beurre et confiture ou miel et huile d'olive + Eau.",
        tags: ["Populaire", "Classique"]
      },
      {
        id: "b_continental",
        name: "CONTINENTAL",
        price: 35,
        composition: "Boisson chaude, jus d'orange naturel, panier viennoiserie et panier boulanger avec beurre et confiture ou miel et huile d'olive, yaourt maison + Eau.",
        tags: ["Complet"]
      },
      {
        id: "b_marocain",
        name: "MAROCAIN",
        price: 35,
        composition: "Boisson chaude, jus d'orange naturel, Mssemen, Harcha, fromage ou huile d'olive, miel, tapenade d'olive, yaourt maison + Eau.",
        tags: ["Traditionnel", "Local"]
      },
      {
        id: "b_anglais",
        name: "ANGLAIS",
        price: 39,
        composition: "Boisson chaude, jus d'orange naturel, panier boulanger, œufs au plat, charcuterie, Edam, yaourt maison + Eau.",
        tags: ["Salé"]
      },
      {
        id: "b_traditionnel",
        name: "TRADITIONNEL",
        price: 45,
        composition: "Boisson chaude, jus d'agrumes pressés au choix (orange, citronnade ou carotte), Batbout garni aux œufs brouillés et fromage, sauce Cheddar, tapenade d'olives, yaourt muesli, fruits de saison, pancake miel + Eau.",
        tags: ["Favori"]
      },
      {
        id: "b_bresilien",
        name: "BRÉSILIEN",
        price: 57,
        composition: "Boisson chaude, jus d'agrumes pressés au choix (orange, citronnade ou carotte), œuf au plat sur tartine au fromage frais et charcuterie, pomme croquette, sauce Cheddar, pancake miel, yaourt aux fruits de saison + Eau.",
        tags: ["Premium", "Signature"]
      },
      {
        id: "b_extra_beurre",
        name: "Extra Beurre",
        price: 3,
        composition: "Portion de beurre supplémentaire."
      },
      {
        id: "b_extra_portion",
        name: "Extra Option (Fromage, Huile d'olive ou Confiture)",
        price: 5,
        composition: "Une portion supplémentaire au choix: coupelle d'huile d'olive, fromage ou confiture."
      }
    ]
  },
  {
    id: "salads",
    name: "Salades",
    description: "Salades fraîches, garnies avec amour, et notre sélection exclusive de salades asiatiques aux saveurs maritimes.",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "s_braise_moyenne",
        name: "LA BRAISE MOYENNE",
        price: 30,
        composition: "Salade verte, tomate, maïs, crevettes, poulet, fromage.",
        tags: ["Seafood", "Poulet"]
      },
      {
        id: "s_crudite",
        name: "CRUDITÉ",
        price: 25,
        composition: "Salade verte, chou blanc, concombre, carotte, tomate, maïs.",
        tags: ["Végétarien", "Light"]
      },
      {
        id: "s_braise",
        name: "LA BRAISE (Grande)",
        price: 50,
        composition: "Salade verte, tomate, maïs, crevettes, poulet, fromage.",
        tags: ["Seafood", "Poulet", "Généreux"]
      },
      {
        id: "s_mixte",
        name: "MIXTE",
        price: 55,
        composition: "Salade verte, tomate, oignons, avocat, œuf, thon, maïs, crevettes.",
        tags: ["Seafood", "Avocat"]
      },
      {
        id: "s_trio_marocain",
        name: "TRIO MAROCAIN",
        price: 25,
        composition: "Une sélection raffinée de trois salades traditionnelles marocaines.",
        tags: ["Traditionnel", "Végétarien"]
      },
      {
        id: "s_valley_atlantic",
        name: "VALLEY ATLANTIC",
        price: 75,
        composition: "Salade verte, tomate, ananas, crevettes, calamar...",
        tags: ["Seafood", "Exotique"]
      },
      {
        id: "s_tartare_atlantic",
        name: "TARTARE ATLANTIC VALLEY",
        price: 65,
        composition: "Dés fins de saumon, crevettes fraîches de l'Atlantique, avocat crémeux, mangue juteuse.",
        tags: ["Asiatique", "Seafood", "Cru", "Frais"]
      },
      {
        id: "s_tartare_exotique",
        name: "TARTARE EXOTIQUE",
        price: 60,
        composition: "Tartare de saison mariant avocat, mangue et une touche subtile d'agrumes.",
        tags: ["Asiatique", "Exotique", "Végétarien"]
      },
      {
        id: "s_poke_vegetarien",
        name: "POKE VÉGÉTARIEN",
        price: 50,
        composition: "Riz à sushi, concombre, mangue, roquette fraîche, tomate, carottes râpées.",
        tags: ["Asiatique", "Végétarien", "Sain"]
      },
      {
        id: "s_poke_saumon",
        name: "POKE SAUMON",
        price: 65,
        composition: "Riz à sushi, fines tranches de saumon frais, avocat, roquette, carottes râpées.",
        tags: ["Asiatique", "Seafood", "Sain"]
      },
      {
        id: "s_poke_crevettes",
        name: "POKE CREVETTES",
        price: 65,
        composition: "Riz à sushi, crevettes marinées, avocat crémeux, roquette sauvage, carottes râpées.",
        tags: ["Asiatique", "Seafood"]
      },
      {
        id: "s_poke_valley",
        name: "POKE VALLEY",
        price: 70,
        composition: "Riz à sushi, mariage luxueux de saumon, crevettes, avocat, mangue et roquette.",
        tags: ["Asiatique", "Seafood", "Signature"]
      }
    ]
  },
  {
    id: "entrees_chaudes",
    name: "Entrées Chaudes",
    description: "Délicieux hors-d'œuvre croustillants à commander pour s'ouvrir l'appétit, incluant nos spécialités asiatiques.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "e_croquettes_crabe",
        name: "CROQUETTES DE CRABE",
        price: 45,
        composition: "Croquettes dorées et croustillantes de crabe assaisonné, servies bien chaudes.",
        tags: ["Seafood", "Croustillant"]
      },
      {
        id: "e_crevettes_tomate",
        name: "CREVETTES À LA TOMATE",
        price: 55,
        composition: "Crevettes sautées nappées d'une sauce réduction tomate maison à l'ail et persil.",
        tags: ["Seafood", "Chaud"]
      },
      {
        id: "e_crevettes_olive",
        name: "CREVETTES À L'HUILE D'OLIVE",
        price: 55,
        composition: "Crevettes sautées à l'huile d'olive extra-vierge, ail rôti et fines herbes fraîches.",
        tags: ["Seafood", "Classique"]
      },
      {
        id: "e_crevettes_piment",
        name: "CREVETTES À L'HUILE D'OLIVE ET AU PIMENT",
        price: 55,
        composition: "Crevettes sautées relevées d'huile d'olive pimentée et d'ail craquant.",
        tags: ["Seafood", "Épicé", "Chaud"]
      },
      {
        id: "e_tortilla",
        name: "TORTILLA ESPAGNOLE",
        price: 35,
        composition: "L'authentique omelette espagnole de pommes de terre de terre douces et oignons confits.",
        tags: ["Végétarien", "Traditionnel"]
      },
      {
        id: "e_frites",
        name: "Portion de frites",
        price: 10,
        composition: "Frites croustillantes dorées.",
        tags: ["Végétarien"]
      },
      {
        id: "e_soupe_fruits_de_mer",
        name: "SOUPE DE FRUITS DE MER",
        price: 55,
        composition: "Bouillon réconfortant parfumé aux fruits de mer frais de saison.",
        tags: ["Seafood", "Asiatique", "Chaud"]
      },
      {
        id: "e_nems_veg",
        name: "NEMS VÉGÉTARIENS (3 pièces)",
        price: 39,
        composition: "Nems croustillants farcis aux légumes frais de saison croustillants.",
        tags: ["Asiatique", "Végétarien", "Croustillant"]
      },
      {
        id: "e_nems_poulet",
        name: "NEMS POULET (3 pièces)",
        price: 49,
        composition: "Nems croustillants farcis au poulet et vermicelles de haricot mungo.",
        tags: ["Asiatique", "Croustillant"]
      },
      {
        id: "e_nems_crevette",
        name: "NEMS CREVETTES (3 pièces)",
        price: 55,
        composition: "Nems croustillants farcis aux crevettes parfumées au gingembre.",
        tags: ["Asiatique", "Seafood", "Croustillant"]
      },
      {
        id: "e_nems_vallee",
        name: "NEMS LA VALLÉE (MIXTE) (3 pièces)",
        price: 52,
        composition: "Notre trio assorti combinant poulet, crevettes et légumes.",
        tags: ["Asiatique", "Signature"]
      }
    ]
  },
  {
    id: "plats",
    name: "Plats Principaux",
    description: "Une vaste gamme de viandes savoureuses, volailles gourmandes et poissons issus de notre pêche côtière.",
    icon: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "p_poulet_cordon",
        name: "CORDON BLEU AU JAMBON ET FROMAGE",
        price: 65,
        composition: "Escalope de poulet panée, farcie au jambon Halal et fromage fondant, accompagnée au choix.",
        tags: ["Poulet", "Gourmand"]
      },
      {
        id: "p_emince_champignons",
        name: "EMINCÉ DE POULET AUX CHAMPIGNONS",
        price: 65,
        composition: "Émincé tendre de poulet français sauté en sauce crème onctueuse aux champignons des bois.",
        tags: ["Poulet", "Sauce crème"]
      },
      {
        id: "p_filet_sauce_ch",
        name: "FILET DE POULET (Grillé ou sauce champignons)",
        price: 60,
        composition: "Filet de poulet cuit à la flamme, proposé nature ou nappé de sa sauce crème aux champignons.",
        tags: ["Poulet", "Sain"]
      },
      {
        id: "p_filet_poivre_vert",
        name: "FILET DE BOEUF GRILLÉ AU POIVRE VERT (200g)",
        price: 110,
        composition: "Une pièce d'exception cuite selon votre goût, surmontée d'une crème poivrée parfumée.",
        tags: ["Viande", "Chef Recommendation", "Premium"]
      },
      {
        id: "p_couscous",
        name: "COUSCOUS (Uniquement le Vendredi)",
        price: 60,
        extraInfo: "(Chaque vendredi + 5 DH petit lait)",
        composition: "Le couscous traditionnel du vendredi aux sept légumes, semoule dorée fine et viande tendre au choix.",
        tags: ["Traditionnel", "Vendredi Only"]
      },
      {
        id: "p_cote_veau",
        name: "CÔTE DE VEAU (300g)",
        price: 115,
        composition: "Côte de veau savoureuse, saisie au grill, accompagnée de ses garnitures de saison.",
        tags: ["Viande", "Premium"]
      },
      {
        id: "p_tajine_f_de_mer",
        name: "TAJINE DE FRUITS DE MER",
        price: 85,
        composition: "Tajine mijoté à l'étouffée aux herbes, ail, épices et assortiment de fruits de mer.",
        tags: ["Poisson", "Seafood", "Traditionnel", "Favori"]
      },
      {
        id: "p_filet_st_pierre",
        name: "FILET DE SAINT PIERRE (Sauce blanche aux fruits de mer)",
        price: 99,
        composition: "Délicat filet de Saint-Pierre poêlé garni de calamars et crevettes en crème d'ail légère.",
        tags: ["Poisson", "Seafood", "Premium"]
      },
      {
        id: "p_paella",
        name: "PAELLA VALENCIANA (Fruits de mer)",
        price: 65,
        priceMedium: 65, // 1UO
        priceGrande: 100, // 2UO
        composition: "L'authentique riz safrané espagnol chargé de gambas, moules, calamars et petits pois. Disponible en 1UO (65 DH), 2UO (100 DH), ou 4UATRO (190 DH).",
        tags: ["Seafood", "Partage"]
      },
      {
        id: "p_poisson_marocaine",
        name: "POISSON BLANC À LA MAROCAINE",
        price: 70,
        composition: "Poisson blanc poêlé dans sa chermoula traditionnelle mijotée de tomates, citrons confits et olives.",
        tags: ["Poisson", "Traditionnel"]
      },
      {
        id: "p_poisson_four",
        name: "POISSON BLANC AU FOUR",
        price: 70,
        composition: "Poisson blanc rôti au four avec pommes de terre fondantes, poivrons doux, et tranches de citron.",
        tags: ["Poisson", "Light"]
      },
      {
        id: "p_seafood_royal",
        name: "SEAFOOD PLATTER (Langouste, Gambas, Moules)",
        price: 300,
        composition: "Le plateau royal chaud du chef associant une langouste grillée entière, gambas et moules marinées.",
        tags: ["Seafood", "Prestige", "Partage"]
      }
    ]
  },
  {
    id: "pates",
    name: "Nos Pâtes",
    description: "Une délicieuse sélection de pâtes fraîches à l'italienne cuites al dente, aux sauces rutilantes et crémeuses.",
    icon: "Spline",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "pa_carbonara",
        name: "CARBONARA",
        price: 49,
        composition: "Émulsion crémeuse d'œuf, jambon Halal croustillant et parmesan râpé.",
        tags: ["Classique"]
      },
      {
        id: "pa_saumon",
        name: "SAUMON",
        price: 73,
        composition: "Tranches de saumon fraîches poêlées, sauce blanche à la crème fluide, cerneaux de noix, ail et parmesan.",
        tags: ["Seafood", "Premium"]
      },
      {
        id: "pa_salsa_jambon",
        name: "SALSA JAMBON CHAMPIGNONS",
        price: 62,
        composition: "Sauce crème blanche, dés de jambon Halal, champignons de Paris frais et parmesan.",
        tags: ["Favori"]
      },
      {
        id: "pa_salsa_f_de_mer",
        name: "SALSA FRUIT DE MER",
        price: 69,
        composition: "Création marine à la crème blanche, crevettes océanes, calmars, ail rôti et parmesan.",
        tags: ["Seafood"]
      },
      {
        id: "pa_poulet_champignons",
        name: "POULET CHAMPIGNONS",
        price: 58,
        composition: "Accroches crémeuses au poulet émincé, sauce crème et champignons.",
        tags: ["Volaille"]
      },
      {
        id: "pa_poulet_pesto",
        name: "POULET PESTO",
        price: 55,
        composition: "Sauce onctueuse au pesto basilic frais, émincé de poulet cuit, pointe d'ail et parmesan.",
        tags: ["Pesto", "Italien"]
      },
      {
        id: "pa_arabiata",
        name: "ARABIATA",
        price: 37,
        composition: "La célèbre sauce piquante napolitaine, huile d'olive pimentée et ail rôti.",
        tags: ["Végétarien", "Épicé"]
      },
      {
        id: "pa_bolognaise",
        name: "BOLOGNAISE",
        price: 55,
        composition: "Sauce mijotée de viande hachée bovine pure, carottes, oignons, origan sauvage et parmesan.",
        tags: ["Classique", "Mijoté"]
      },
      {
        id: "pa_gratin_bolo",
        name: "GRATIN DE PENNE À LA SAUCE BOLOGNAISE",
        price: 65,
        composition: "Nos penne bolognaise nappées de béchamel légère et passées sous le grill à la mozzarella.",
        tags: ["Gratiné", "Gourmand"]
      },
      {
        id: "pa_gratin_poulet",
        name: "GRATIN DE PENNE POULET BRAISÉ",
        price: 60,
        composition: "Penne, dés de poulet rôti salé, sauce béchamel fluide, recouverts de mozzarella gratinée.",
        tags: ["Gratiné"]
      },
      {
        id: "pa_vegetarienne",
        name: "VÉGÉTARIENNE",
        price: 45,
        composition: "Pâtes légères sautées en sauce blanche crémeuse, garnies d'aubergines, courgettes poêlées, poivrons grillés et champignons.",
        tags: ["Végétarien", "Frais"]
      },
      {
        id: "pa_4_fromages",
        name: "4 FROMAGES",
        price: 55,
        composition: "Une onctueuse crème fromagère associant mozzarella, emmental, bleu de chèvre et une pincée de noix de muscade.",
        tags: ["Fromage", "Riche"]
      },
      {
        id: "pa_thon",
        name: "THON",
        price: 55,
        composition: "Pennes sautées avec émietté de thon à l'huile aromatisée, tomates douces fraîches et oignons confits."
      }
    ]
  },
  {
    id: "pizzas",
    name: "Nos Pizzas",
    description: "Réalisées avec notre pâte à pizza de tradition italienne, pétrie sur place et mûrie patiemment de 48h à 72h.",
    icon: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "pi_margherita",
        name: "PIZZA MARGHERITA",
        price: 31,
        priceMedium: 31,
        priceGrande: 38,
        composition: "Sauce tomate maison infusée d'huile d'olive, mozzarella crémeuse, origan sauvage pilé.",
        tags: ["Végétarien", "Classique"]
      },
      {
        id: "pi_vegetarienne",
        name: "PIZZA VÉGÉTARIENNE",
        price: 37,
        priceMedium: 37,
        priceGrande: 45,
        composition: "Sauce tomate, mozzarella, aubergines fondantes, courgettes douces, poivrons tricolores, champignons des bois, oignons, olives noires, origan.",
        tags: ["Végétarien", "Légumes"]
      },
      {
        id: "pi_charcuterie",
        name: "PIZZA CHARCUTERIE",
        price: 41,
        priceMedium: 41,
        priceGrande: 50,
        composition: "Sauce béchamel parfumée, mozzarella, chiffonnade de charcuterie fine bovine Halal, origan.",
        tags: ["Charcuterie"]
      },
      {
        id: "pi_braise",
        name: "PIZZA LA BRAISE",
        price: 37,
        priceMedium: 37,
        priceGrande: 45,
        composition: "Sauce tomate, mozzarella filante, émincé de poulet braisé savoureusement assaisonné, champignons de Paris, origan.",
        tags: ["Volaille", "Populaire"]
      },
      {
        id: "pi_thon",
        name: "PIZZA THON",
        price: 41,
        priceMedium: 41,
        priceGrande: 50,
        composition: "Sauce tomate, mozzarella bulleuse, thon entier de l'océan, oignons émincés fins, origan.",
        tags: ["Seafood"]
      },
      {
        id: "pi_boucher",
        name: "PIZZA BOUCHER",
        price: 43,
        priceMedium: 43,
        priceGrande: 52,
        composition: "Sauce tomate mijotée, mozzarella fondante, boulettes de bœuf hachées relevées à l'ail, oignons frais caramélisés, poivrons tendres, origan.",
        tags: ["Viande", "Généreuse"]
      },
      {
        id: "pi_4_fromages",
        name: "PIZZA 4 FROMAGES",
        price: 45,
        priceMedium: 45,
        priceGrande: 55,
        composition: "Sauce tomate purée, mozzarella, emmental râpé, bleu fondant, fromage de chèvre crémeux, origan.",
        tags: ["Fromage", "Favori"]
      },
      {
        id: "pi_f_de_mer",
        name: "PIZZA FRUITS DE MER",
        price: 53,
        priceMedium: 53,
        priceGrande: 62,
        composition: "Sauce tomate riche, mozzarella, crevettes grises, calamars fermes, morceaux de poisson blanc noble, origan.",
        tags: ["Seafood", "Prestige"]
      },
      {
        id: "pi_saumon",
        name: "PIZZA SAUMON",
        price: 50,
        priceMedium: 50,
        priceGrande: 60,
        composition: "Crème fraîche épaisse et légère, mozzarella filante, fines tranches de saumon fumé de Norvège, origan sauvage.",
        tags: ["Seafood", "Premium"]
      },
      {
        id: "pi_truffe_noire",
        name: "PIZZA CHAMPIGNONS À LA TRUFFE NOIRE",
        price: 45,
        priceMedium: 45,
        priceGrande: 55,
        composition: "La perle de la cuisine: Mozzarella, champignons parfumés à l'essence pure de truffe noire d'Italie.",
        tags: ["Prestige", "Unique", "Signature"]
      }
    ]
  },
  {
    id: "gouter",
    name: "Goûter (Crêpes & Gaufres)",
    description: "Des crêpes, gaufres et pancakes fondants pour un goûter réconfortant en milieu d'après-midi.",
    icon: "Cookie",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "g_f_crepes",
        name: "FORMULE CRÊPES",
        price: 29,
        composition: "Crêpe au choix avec garniture, accompagnée de sa boisson chaude assortie.",
        tags: ["Formule Goûter"]
      },
      {
        id: "g_f_macarons",
        name: "FORMULE MACARONS",
        price: 33,
        composition: "Assortiment de 4 macarons parisiens croquants et une boisson chaude au choix.",
        tags: ["Formule Goûter"]
      },
      {
        id: "g_f_viennoiserie",
        name: "FORMULE VIENNOISERIE",
        price: 25,
        composition: "Panier de viennoiseries chaudes servies croustillantes avec boisson chaude aux choix.",
        tags: ["Formule Goûter"]
      },
      {
        id: "g_f_pancake",
        name: "FORMULE PANCAKE",
        price: 29,
        composition: "Pile de pancakes moelleux arrosés de miel ou chocolat nappé, rondelles de banane, framboises fraîches et boisson chaude.",
        tags: ["Formule Goûter"]
      },
      {
        id: "g_f_patisserie",
        name: "FORMULE PÂTISSERIE",
        price: 35,
        composition: "Une part de gâteau du jour de notre chef pâtissier et une boisson chaude.",
        tags: ["Formule Goûter"]
      },
      {
        id: "g_f_gaufre",
        name: "FORMULE GAUFRE",
        price: 29,
        composition: "Gaufre bruxelloise croustillante, nappée de miel ou de chocolat coulant, banane fraîche, fruits rouges et boisson chaude.",
        tags: ["Formule Goûter"]
      },
      {
        id: "g_f_marocaine",
        name: "FORMULE MAROCAINE",
        price: 25,
        composition: "Goûter local composé de Meloui chaud, Hercha de semoule, miel onctueux, Jben (fromage de chèvre marocain) et boisson chaude.",
        tags: ["Formule Goûter", "Local"]
      },
      {
        id: "g_sucre",
        name: "CRÊPE / GAUFRE / PANCAKE - SUCRE",
        price: 20,
        composition: "Saupoudré de sucre glace pur."
      },
      {
        id: "g_miel",
        name: "CRÊPE / GAUFRE / PANCAKE - MIEL",
        price: 23,
        composition: "Arrosé de miel naturel de fleur d'oranger."
      },
      {
        id: "g_nutella",
        name: "CRÊPE / GAUFRE / PANCAKE - NUTELLA",
        price: 24,
        composition: "Nappage généreux de pâte à tartiner chocolatée Nutella.",
        tags: ["Favori"]
      },
      {
        id: "g_banane",
        name: "CRÊPE / GAUFRE / PANCAKE - NUTELLA BANANE",
        price: 26,
        composition: "Nutella crémeux et rondelles de banane fraîche coupées."
      },
      {
        id: "g_biscuits",
        name: "CRÊPE / GAUFRE / PANCAKE - NUTELLA BISCUITS",
        price: 28,
        composition: "Nutella saupoudré d'éclats croustillants de biscuits émiettés."
      },
      {
        id: "g_noix",
        name: "CRÊPE / GAUFRE / PANCAKE - NUTELLA NOIX",
        price: 28,
        composition: "Nutella et cerneaux de noix rôties croquants."
      },
      {
        id: "g_choc_blanc",
        name: "CRÊPE / GAUFRE / PANCAKE - NUTELLA CHOCOLAT BLANC",
        price: 30,
        composition: "Bicolore: chocolat blanc fondu et filet de Nutella."
      },
      {
        id: "g_vallee",
        name: "CRÊPE / GAUFRE / PANCAKE - VALLÉE",
        price: 50,
        composition: "Accroche suprême: Boule de glace crémeuse, filet de caramel beurre salé (ou Nutella) et fruits frais découpés.",
        tags: ["Signature"]
      },
      {
        id: "g_dubai",
        name: "CRÊPE / GAUFRE / PANCAKE - DUBAI",
        price: 60,
        composition: "Le dessert tendance: Crème de pistache fine, cheveux d'ange séchés (Kunafa) rôtis croustillants, accompagnés de glace et fruits frais découpés.",
        tags: ["Populaire", "Unique"]
      }
    ]
  },
  {
    id: "glaces",
    name: "Nos Glaces (Oliveri)",
    description: "Une sélection exclusive de glaces artisanales du maître glacier OLIVERI depuis 1950.",
    icon: "IceCream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "gl_1_boule",
        name: "1 Boule au choix",
        price: 20
      },
      {
        id: "gl_2_boules",
        name: "2 Boules au choix",
        price: 38
      },
      {
        id: "gl_3_boules",
        name: "3 Boules au choix",
        price: 54
      },
      {
        id: "gl_dame_blanche",
        name: "DAME BLANCHE",
        price: 55,
        composition: "3 boules vanille onctueuse de Madagascar, garnies de chantilly fouettée, de coulis chocolat riche et brisures de nougatine."
      },
      {
        id: "gl_maison",
        name: "MAISON",
        price: 55,
        composition: "Mariage de 1 boule sorbet framboise, 1 boule chocolat brownie, 1 boule vanille nougatine, coiffé de crème chantilly, d'un filet de coulis de caramel et de fruits rouges."
      },
      {
        id: "gl_paradis",
        name: "PARADIS",
        price: 55,
        composition: "Une composition rafraîchissante de 2 boules de sorbet framboise, 1 boule de sorbet citron, couronnées de chantilly et d'exotique coulis de fruits de la passion."
      },
      {
        id: "gl_montelimar",
        name: "MONTÉLIMAR",
        price: 55,
        composition: "Assortiment d'une boule de vanille nougatine, une boule caramel beurre salé, une boule chocolat brownie, garni de chantilly ondulée et de coulis de fruits rouges et caramel."
      },
      {
        id: "gl_brownie",
        name: "AMERICAN BROWNIE",
        price: 55,
        composition: "Un délice d'Amérique: 2 boules chocolat noisette croquant, 1 boule de caramel au beurre salé, de la chantilly royale, recouverte de coulis de chocolat blanc onctueux."
      },
      {
        id: "gl_maria_louisa",
        name: "MARIA LOUISA",
        price: 65,
        composition: "Coupe d'assemblage premium glacé du chef Oliveri."
      },
      {
        id: "gl_meringue",
        name: "MERINGUE GLACÉE",
        price: 55,
        composition: "Glace onctueuse assortie mariée à des brisures de meringue croquante et coulis de chocolat."
      },
      {
        id: "gl_cassate",
        name: "TRANCHE CASSATE SICILIENNE",
        price: 45,
        composition: "L'authentique tranche glacée sicilienne parfumée aux fruits confits marinés et amandes torréfiées."
      },
      {
        id: "gl_cafe_liegeois",
        name: "CAFÉ LIÉGEOIS",
        price: 55,
        composition: "2 boules au café corsé, 1 boule vanille nougatine, chantilly mousseuse et coulis de café."
      },
      {
        id: "gl_choc_liegeois",
        name: "CHOCOLAT LIÉGEOIS",
        price: 55,
        composition: "2 boules chocolat brownie intense, 1 boule vanille nougatine, chantilly aérienne et coulis de chocolat fondant."
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts Sucrés",
    description: "La note finale et gourmande de votre repas imaginée par notre brigade de confiseurs.",
    icon: "Cake",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "d_creme_caramel",
        name: "CRÈME CARAMEL",
        price: 15,
        composition: "Le flan traditionnel renversé, à la vanille de bourbon et son jus de caramel ambré cuit."
      },
      {
        id: "d_nougat_glace",
        name: "NOUGAT GLACÉ (Une tranche)",
        price: 20,
        priceMedium: 20, // 1 Tranche
        priceGrande: 35, // 2 Tranches
        composition: "Une mousse glacée au miel garnie de pistaches vertes hachées et amandes croquantes."
      },
      {
        id: "d_tarte_citron",
        name: "TARTE AU CITRON",
        price: 30,
        composition: "Une crème de citron jaune acide veloutée sur pâte sablée croustillante."
      },
      {
        id: "d_fondant_choc",
        name: "FONDANT AU CHOCOLAT",
        price: 40,
        composition: "Cœur coulant d'excellence au chocolat noir, accompagné d'une boule de glace vanille de Madagascar."
      },
      {
        id: "d_tiramisu",
        name: "TIRAMISU",
        price: 35,
        composition: "Le classique italien: Mascarpone vaporeux fouetté, biscuits à la cuillère trempés de café noir, cacao saupoudré."
      },
      {
        id: "d_brioche_perdue",
        name: "BRIOCHE PERDUE AVEC SA BOULE DE GLACE",
        price: 45,
        composition: "Tranche épaisse de brioche dorée caramélisée au beurre, une boule de glace à la vanille bourbonienne, et un coulis de caramel chaud au beurre salé.",
        tags: ["Signature"]
      },
      {
        id: "d_dubai_kunafa",
        name: "DUBAI KUNAFA PISTACHE",
        price: 35,
        composition: "Kunafa croustillante mariée à de la crème fondante de pistache d'Orient.",
        tags: ["Populaire"]
      }
    ]
  },
  {
    id: "g grills",
    name: "Grillades",
    description: "Viandes grillées à la braise de bois de chêne pour des flaveurs fumées caractéristiques.",
    icon: "Beef",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "gr_poulet_braise_quarter",
        name: "POULET BRAISÉ (1/4 de poulet)",
        price: 40,
        composition: "Quart de poulet mariné aux herbes puis lentement rôti à la braise.",
        tags: ["Braise"]
      },
      {
        id: "gr_poulet_braise_half",
        name: "POULET BRAISÉ (1/2 de poulet)",
        price: 60,
        composition: "Demi-poulet braisé caramélisé et fondant.",
        tags: ["Braise"]
      },
      {
        id: "gr_poulet_braise_full",
        name: "POULET BRAISÉ (Entier)",
        price: 105,
        composition: "Poulet entier roti à la braise de bois de chêne découpé.",
        tags: ["Braise"]
      },
      {
        id: "gr_brochettes_kebab",
        name: "BROCHETTES KEBAB DE VIANDE HACHÉE (200g)",
        price: 65,
        composition: "Brochettes de viande de bœuf hachée finement assaisonnée de menthe, coriandre, cumin sauvage cuit à la braise.",
        tags: ["Grillade"]
      },
      {
        id: "gr_brochettes_filet",
        name: "BROCHETTES DE FILET DE POULET (200g)",
        price: 53,
        composition: "Dés tendres de filet de poulet marinés au citron jaune et épices douces dorés à la flamme.",
        tags: ["Grillade"]
      },
      {
        id: "gr_brochettes_foie",
        name: "BROCHETTES SAUCISSES DE FOIE LA FONDA (200g)",
        price: 70,
        composition: "Une spécialité rustique et parfumée de foie de bœuf mariné sauté croustillant."
      },
      {
        id: "gr_uno",
        name: "GRILLADE UNO (300g)",
        price: 90,
        composition: "Assortiment individuel de pilon de poulet, kefta de bœuf grillé, saucisse de campagne, côte d'agneau juteuse.",
        tags: ["Assortiment", "Copieux"]
      },
      {
        id: "gr_dos",
        name: "GRILLADE DOS",
        price: 170,
        composition: "Double portion d'assortiment de viandes rôties au feu.",
        tags: ["Assortiment", "Partage"]
      },
      {
        id: "gr_tres",
        name: "GRILLADE TRES",
        price: 210,
        composition: "Triple plateau de viandes grillées mixtes.",
        tags: ["Assortiment", "Partage"]
      },
      {
        id: "gr_cuatro",
        name: "GRILLADE CUATRO",
        price: 320,
        composition: "Plateau d'assortiment géant cuisiné pour 4 personnes.",
        tags: ["Assortiment", "Grande Table"]
      },
      {
        id: "gr_geante",
        name: "GRILLADE GÉANTE",
        price: 410,
        composition: "Le festin suprême de grillades mixtes à partager en grande famille.",
        tags: ["Assortiment", "Prestige"]
      }
    ]
  },
  {
    id: "drinks",
    name: "Boissons & Cocktails",
    description: "Une fraîcheur absolue: de l'eau pure minérale saine aux jus d'agrumes maison pressés à la seconde.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "dr_virgin_mojito",
        name: "VIRGIN MOJITO",
        price: 27,
        composition: "Eau gazeuse pétillante glacée, feuilles de menthe fraîches froissées, jus de citron vert pressé vert, sirop de sucre roux, et fond aromatique de Mojito.",
        tags: ["Cocktail Maison", "Frais"]
      },
      {
        id: "dr_red_mojito",
        name: "RED MOJITO",
        price: 27,
        composition: "Limonade givrée, purée concentrée de fraises rouges de saison, citron vert pressé acide, sucre roux, menthe fraîche."
      },
      {
        id: "dr_bahamas",
        name: "BAHAMAS",
        price: 27,
        composition: "Mélange exotique de jus d'ananas doux, jus d'orange ensoleillé, citron vert acidulé, filet de Grenadine et sirop de gingembre piquant.",
        tags: ["Exotique"]
      },
      {
        id: "dr_virgin_colada",
        name: "VIRGIN COLADA",
        price: 27,
        composition: "Jus d'orange frais, jus d'ananas, extrait crémeux de lait de coco, pépites de coco râpées."
      },
      {
        id: "dr_pina_passion",
        name: "PINA PASSION",
        price: 27,
        composition: "Jus d'ananas, jus d'orange pressé, sucre roux caramélisé, extrait pulpeux de fruits de la passion."
      },
      {
        id: "dr_detox",
        name: "DETOX",
        price: 27,
        composition: "Formule santé: pressée minute de concombre frais hydratant, pomme Granny Smith croquante rafraîchissante et jus d'orange pressé.",
        tags: ["Sain"]
      },
      {
        id: "dr_banane",
        name: "JUS DE BANANE",
        price: 22,
        composition: "Pressé de bananes mûres douces en crème."
      },
      {
        id: "dr_booster",
        name: "BOOSTER",
        price: 20,
        composition: "Lait entier, avocat velouté, raisins secs gonflés sucrés, amandes craquantes et dattes juteuses moulues.",
        tags: ["Énergétique", "Signature"]
      },
      {
        id: "dr_tutti_frutti",
        name: "TUTTI FRUTTI",
        price: 27,
        composition: "Un assemblage de fruits de saison frais pressés en panache lacté doux ou à l'orange acide."
      },
      {
        id: "dr_orange",
        name: "JUS D'ORANGE NATUREL",
        price: 20,
        composition: "Jus d'oranges fraîches du verger pressées à la commande.",
        tags: ["Frais"]
      },
      {
        id: "dr_betterave_orange",
        name: "JUS BETTERAVE ORANGE POMME",
        price: 20,
        composition: "La douceur de la betterave rouge mariée à l'acidité de l'orange et la pomme.",
        tags: ["Sain"]
      },
      {
        id: "dr_carottes_orange",
        name: "JUS CAROTTES ORANGES CANNELLE",
        price: 20,
        composition: "La carotte douce mixée à l'orange, rehaussée de cannelle parfumée broyée."
      },
      {
        id: "dr_concombre_pomme",
        name: "JUS CONCOMBRE POMME ORANGE",
        price: 20,
        composition: "Une fraîcheur d'herbe de concombre, pomme acide, et jus d'orange pressé."
      },
      {
        id: "dr_citron_miel",
        name: "JUS DE CITRON MIEL GINGEMBRE",
        price: 20,
        composition: "Jus de citron jaune pressé, gingembre frais râpé piquant, adouci au miel de fleurs d'oranger.",
        tags: ["Immunité"]
      },
      {
        id: "dr_gazeuse_50",
        name: "EAU GAZEUSE (50cl)",
        price: 10
      },
      {
        id: "dr_gazeuse_100",
        name: "EAU GAZEUSE (1L)",
        price: 15
      },
      {
        id: "dr_minerale_50",
        name: "EAU MINÉRALE (50cl)",
        price: 10
      },
      {
        id: "dr_minerale_150",
        name: "EAU MINÉRALE (1.5L)",
        price: 15
      },
      {
        id: "dr_soda_33",
        name: "SODA CANETTE (33cl)",
        price: 14,
        composition: "Sélection de Coca-Cola, Fanta ou Sprite froids."
      },
      {
        id: "dr_soda_25",
        name: "SODA CANETTE (25cl)",
        price: 7
      },
      {
        id: "dr_oulmes",
        name: "OULMÈS (Eau minérale naturellement gazeuse)",
        price: 13
      }
    ]
  },
  {
    id: "hot_drinks",
    name: "Boissons Chaudes",
    description: "Espressos d'assemblages aromatiques d'exception torréfiés localement et sélections de grands thés d'Orient.",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "hc_espresso_sidi",
        name: "ESPRESSO & SIDI ALI",
        price: 16,
        composition: "Un expresso serré italien de caractère servi chaud accompagné d'une petite bouteille d'eau Sidi Ali."
      },
      {
        id: "hc_allonge_americain",
        name: "ALLONGÉ AMÉRICAIN",
        price: 16,
        composition: "Expresso allongé d'eau chaude, pour une note douce mais riche."
      },
      {
        id: "hc_double_espresso",
        name: "DOUBLE ESPRESSO",
        price: 18,
        composition: "Double dose d'expresso serré pour un réveille-matin dynamisant."
      },
      {
        id: "hc_lattee_sidi",
        name: "LATTÉE & SIDI ALI",
        price: 18,
        composition: "Café latté crémeux onctueux au lait moussé, servi avec une petite eau Sidi Ali."
      },
      {
        id: "hc_nespresso",
        name: "NESPRESSO & SIDI ALI",
        price: 17,
        composition: "Sélection de capsule premium Nespresso de différentes intensités aromatiques s'accompagnant d'eau mineral."
      },
      {
        id: "hc_espresso_aromatise",
        name: "ESPRESSO AROMATISÉ",
        price: 18,
        composition: "Expresso marié au coulis gourmand de votre choix: Chocolat, Caramel, Vanille, Noisette ou Cannelle.",
        tags: ["Gourmand"]
      },
      {
        id: "hc_tisanes",
        name: "TISANES NATURE-FLEURS",
        price: 14,
        composition: "Infusion parfumée de verveine douce, fleur de camomille ou tilleul relaxant."
      },
      {
        id: "hc_the_menthe",
        name: "THÉ À LA MENTHE",
        price: 14,
        composition: "Thé vert traditionnel marocain, menthe poivrée fraîche froissée, servi sucré dans sa théière.",
        tags: ["Local", "Traditionnel", "Maison"]
      },
      {
        id: "hc_the_lipton",
        name: "THÉ NOIR LIPTON",
        price: 14,
        composition: "Sachet classique de thé noir d'Assam ou de Ceylan avec rondelle de citron jaune."
      },
      {
        id: "hc_the_dammann",
        name: "THÉ DAMMANN FRÈRES",
        price: 20,
        composition: "Sélection de grands crus de thé prestigieux de chez Dammann Frères à Paris."
      },
      {
        id: "hc_cappuccino",
        name: "CAPPUCCINO",
        price: 20,
        composition: "Espresso, lait chaud et mousse de lait fouettée épaisse saupoudrée de chocolat."
      },
      {
        id: "hc_cappuccino_viennois",
        name: "CAPPUCCINO VIENNOIS",
        price: 24,
        composition: "Expresso corsé, lait chaud s'accompagnant d'une montagne de crème chantilly et poudré de cacao."
      },
      {
        id: "hc_chocolat_ancienne",
        name: "CHOCOLAT À L'ANCIENNE",
        price: 24,
        composition: "Véritable chocolat noir fondu au chaudron de lait entier onctueux.",
        tags: ["Légendaire", "Riche"]
      },
      {
        id: "hc_chocolat_amaretto",
        name: "CIOCCOLATO AMARETTO",
        price: 24,
        composition: "Chocolat chaud épais parfumé au sirop d'amande douce d'Italie."
      },
      {
        id: "hc_chocolat_danois",
        name: "CHOCOLAT DANOIS",
        price: 24,
        composition: "Chocolat chaud au corps crémeux velouté."
      },
      {
        id: "hc_coco_choco",
        name: "COCO CHOCO",
        price: 24,
        composition: "Boisson chaude mariant la force du chocolat noir à l'exotisme mousseux du lait de coco."
      },
      {
        id: "hc_royal_caramel",
        name: "ROYAL CARAMEL",
        price: 24,
        composition: "Lait crémeux moussé chaud combiné à de l'expresso corsé, onctueux nappage de sauce caramel."
      },
      {
        id: "hc_macchiato_vanilla",
        name: "MACCHIATO VANILLA",
        price: 24,
        composition: "Lait chaud taché d'expresso, souligné de sirop de gousse de vanille."
      },
      {
        id: "hc_macchiato_noisette",
        name: "MACCHIATO NOISETTE",
        price: 24,
        composition: "Lait moussé chaud, expresso riche et sirop de noisettes grillées."
      },
      {
        id: "hc_macchiato_cioccolato",
        name: "MACCHIATO CIOCCOLATO",
        price: 24,
        composition: "Lardé de crème chantilly et de chocolat coulant, noyé d'un double espresso."
      }
    ]
  },
  {
    id: "sushi",
    name: "Sushi & Saveurs Asiatiques",
    description: "Une palette de saveurs japonaises d'une fraîcheur spectaculaire, confectionnée par notre maître sushiman.",
    icon: "Compass",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "su_nig_saumon",
        name: "NIGIRI SAUMON (2 pièces)",
        price: 30,
        composition: "Fine tranche de saumon frais délicatement déposée sur son lit de riz vinaigré.",
        tags: ["Nigiri", "Frais"]
      },
      {
        id: "su_nig_crev",
        name: "NIGIRI CREVETTE (2 pièces)",
        price: 30,
        composition: "Papillon de crevette étuvée posé sur une quenelle de riz pressé au wasabi.",
        tags: ["Nigiri"]
      },
      {
        id: "su_nig_blanc",
        name: "NIGIRI POISSON BLANC (2 pièces)",
        price: 38,
        composition: "Languette de poisson blanc de mer frotté au sel et déposé sur riz.",
        tags: ["Nigiri"]
      },
      {
        id: "su_aro_crev",
        name: "AROMAKI CREVETTES (6 pièces)",
        price: 53,
        composition: "Crevettes panées croustillantes, crème cheese crémeuse de chèvre, surimi, avocat, riz.",
        tags: ["Aromaki", "Croustillant"]
      },
      {
        id: "su_aro_saumon",
        name: "AROMAKI SAUMON (6 pièces)",
        price: 53,
        composition: "Saumon frais, surimi, avocat, fromage à tartiner délicatement enroulés.",
        tags: ["Aromaki"]
      },
      {
        id: "su_aro_valley",
        name: "AROMAKI VALLEY (6 pièces)",
        price: 55,
        composition: "La création signature d'aromaki mariant saumon, crevettes panées croustillantes, avocat fondant et riz vinaigré.",
        tags: ["Aromaki", "Signature"]
      },
      {
        id: "su_maki_concombre",
        name: "MAKI CONCOMBRE (6 pièces)",
        price: 21,
        composition: "Maki classique au cœur croquant de concombre frais.",
        tags: ["Maki", "Végétarien"]
      },
      {
        id: "su_maki_avocat",
        name: "MAKI AVOCAT (6 pièces)",
        price: 25,
        composition: "Maki enveloppé d'algue nori à l'avocat onctueux.",
        tags: ["Maki", "Végétarien"]
      },
      {
        id: "su_maki_surimi",
        name: "MAKI SURIMI (6 pièces)",
        price: 27,
        composition: "Maki classique au surimi parfumé.",
        tags: ["Maki"]
      },
      {
        id: "su_maki_crev",
        name: "MAKI CREVETTES (6 pièces)",
        price: 30,
        composition: "Crevettes cuites de l'océan enveloppées de riz.",
        tags: ["Maki"]
      },
      {
        id: "su_maki_saumon",
        name: "MAKI SAUMON (6 pièces)",
        price: 30,
        composition: "Le grand classique indémodable au saumon frais.",
        tags: ["Maki", "Populaire"]
      },
      {
        id: "su_cal_classic",
        name: "CALIFORNIA ROLLS CLASSIC (5 pièces)",
        price: 29,
        composition: "Surimi parfumé, avocat, concombre frais, roulé de sésame blanc croustillant.",
        tags: ["California"]
      },
      {
        id: "su_cal_saumon",
        name: "CALIFORNIA ROLLS SAUMON (5 pièces)",
        price: 39,
        composition: "Roulé inversé de saumon frais de Norvège de première qualité aux graines.",
        tags: ["California"]
      },
      {
        id: "su_cal_fume",
        name: "CALIFORNIA ROLLS SAUMON FUMÉ (5 pièces)",
        price: 45,
        composition: "Saumon fumé de tradition, fromage à tartiner.",
        tags: ["California"]
      },
      {
        id: "su_cal_mangue",
        name: "CALIFORNIA ROLLS CREVETTES MANGUE (5 pièces)",
        price: 45,
        composition: "Crevettes cuites, dés de mangue tropicale douce pour une explosion acidulée.",
        tags: ["California", "Exotique"]
      },
      {
        id: "su_cal_shaki",
        name: "CALIFORNIA ROLLS SHAKI YAKI (5 pièces)",
        price: 37,
        composition: "Saumon poêlé mi-cuit, mangue mûre, une pointe d'agrumes.",
        tags: ["California"]
      },
      {
        id: "su_cal_valley_roll",
        name: "CALIFORNIA LA VALLEY ROLL (5 pièces)",
        price: 65,
        composition: "Grand luxe de poisson blanc grillé croquant, sauce mangue fruitée douce, concombre frais.",
        tags: ["California", "Signature"]
      },
      {
        id: "su_pack_uno",
        name: "PACK SUSHI UNO (16 pièces)",
        price: 99,
        composition: "Assortiment découverte de 16 pièces idéal pour une personne ou à déguster à deux.",
        tags: ["Mene", "Assortiment", "Populaire"]
      },
      {
        id: "su_pack_duo",
        name: "PACK SUSHI DUO (32 pièces)",
        price: 189,
        composition: "Un merveilleux assortiment complet de 32 pièces de sushis variés.",
        tags: ["Mene", "Assortiment", "Partage"]
      },
      {
        id: "su_pack_quatro",
        name: "PACK SUSHI QUATRO (45 pièces)",
        price: 299,
        composition: "45 pièces sélectionnées pour un festin en petit comité.",
        tags: ["Mene", "Assortiment", "Généreux"]
      },
      {
        id: "su_pack_famila",
        name: "PACK SUSHI FAMILA (70 pièces)",
        price: 499,
        composition: "L'apogée ultime: 70 pièces de sushis de notre carte disposées sur une barque japonaise divine.",
        tags: ["Mene", "Assortiment", "Prestige"]
      }
    ]
  },
  {
    id: "kids_sandwiches",
    name: "Enfant & Sandwiches",
    description: "Des menus enfants amusants avec tickets Happy Land et notre gamme de sandwiches copieux accompagnés de frites.",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60",
    products: [
      {
        id: "kd_nuggets_formula",
        name: "MENU ENFANT CHICKEN NUGGETS",
        price: 55,
        composition: "Pépites croustillantes de filets de poulet + Frites dorées + Boisson saine (Eau ou Soda piquant) + 1 Ticket valide du parc d'attraction 'Happy Land' !",
        tags: ["Formule Enfant", "Pour Enfants"]
      },
      {
        id: "kd_pizza_formula",
        name: "MENU ENFANT PIZZA MARGHERITA",
        price: 55,
        composition: "Pizza Margherita miniature croustillante cuite au feu + Boisson fraîche (Eau ou Soda) + 1 Ticket offert pour le parc de manèges 'Happy Land' !",
        tags: ["Formule Enfant", "Pour Enfants"]
      },
      {
        id: "kd_sand_poulet",
        name: "SANDWICH POULET (Seul)",
        price: 29,
        extraInfo: "Disponible avec frites (+5 DH) ou en Formule complète (+26 DH)",
        composition: "Bagui de pain frais croustillant garni d'émincé de poitrine de poulet sauté et de crudités croquantes.",
        tags: ["Sandwich"]
      },
      {
        id: "kd_sand_kebab",
        name: "SANDWICH VIANDE HACHÉE KEBAB (Seul)",
        price: 33,
        extraInfo: "Disponible avec frites (+5 DH) ou en Formule complète (+26 DH)",
        composition: "Sandwich de bœuf haché façon Kebab rôti aux poivrons, oignons confits, et pointe de cumin.",
        tags: ["Sandwich"]
      },
      {
        id: "kd_sand_foie",
        name: "SANDWICH SAUCISSES DE FOIE (Seul)",
        price: 39,
        extraInfo: "Disponible avec frites (+5 DH) ou en Formule complète (+26 DH)",
        composition: "Spécialité savoureuse cuisinée au foie de boeuf de style campagnard Halal épicé.",
        tags: ["Sandwich"]
      },
      {
        id: "kd_menu_eq_poulet",
        name: "MENU ÉQUILIBRÉ POULET",
        price: 85,
        composition: "Votre sandwich au poulet accompagné de salade de saison, frites, soda et d'un dessert fondant du jour pour parfaire le tout !",
        tags: ["Formule Complète", "Menu Équilibré"]
      },
      {
        id: "kd_menu_eq_kebab",
        name: "MENU ÉQUILIBRÉ VIANDE HACHÉE KEBAB",
        price: 89,
        composition: "Sandwich Kebab copieux s'accompagnant d'une salade jardinière de verdure, frites chaudes de campagne, soda froid pétillant et d'un dessert confiseur.",
        tags: ["Formule Complète", "Menu Équilibré"]
      },
      {
        id: "kd_menu_eq_foie",
        name: "MENU ÉQUILIBRÉ SAUCISSES DE FOIE",
        price: 95,
        composition: "La formule sandwich saucisses de foie avec frites, grande salade fraîche, soda au choix et un de nos délicieux desserts sucrés.",
        tags: ["Formule Complète", "Menu Équilibré"]
      }
    ]
  }
];

// Expose categories globally for app.js
window.categories = categories;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { categories };
}
