export const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: 'MONO 001 Lounge Chair',
    slug: 'mono-001-lounge-chair',
    sku: 'MNO-001',
    object_number: 'NO. 001',
    category: 'chairs',
    collection: 'The Form Study',
    tagline: 'A study in perfect balance.',
    short_description: 'Sculptural lounge chair carved from solid American black walnut with a cantilevered saddle leather seat shell.',
    long_description: 'Object No. 001 embodies the essence of MONO OBJECTS. Proportioned to hold commanding visual authority from every angle, its continuous steam-bent silhouette is counterbalanced by a solid bronze three-point ground pedestal.',
    price: 3450.00,
    currency: 'USD',
    availability: 'made_to_order',
    featured: true,
    display_order: 1,
    images: {
      primary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85',
      hero: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1800&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
      ],
      turntable_360: Array.from({ length: 24 }, (_, i) =>
        `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80&rot=${i * 15}`
      )
    },
    model_3d: {
      type: 'glb',
      glb_url: '/models/mono_001_chair.glb',
      scale: 1.0,
      initialRotation: [0, 0.4, 0],
      cameraPosition: [0, 1.2, 3.8]
    },
    dimensions: { width: 84, height: 76, depth: 88, seatHeight: 39, unit: 'cm' },
    specifications: {
      'Timber': 'FSC® Appalachian Black Walnut',
      'Upholstery': 'Tuscan Full-Grain Vegetable-Tanned Saddle Leather',
      'Pedestal': 'Machined Cast Bronze with Antique Oxidation',
      'Origin': 'Handcrafted in Copenhagen',
      'Warranty': '25-Year Structural Frame Warranty'
    },
    features: [
      'Sculptural continuous steam-bent timber backrest',
      'Floating cantilevered leather seat pan with concealed dampening springs',
      'Three-point architectural cast-bronze pedestal',
      'Individual curatorial serial engraving on undercarriage'
    ],
    storytelling: {
      explodedViewEnabled: true,
      cameraPresets: [
        { name: 'Silhouette Frontal', pos: [0, 1.0, 3.5] },
        { name: 'Side Ergonomics', pos: [-3.0, 0.8, 1.2] },
        { name: 'Backrest Joinery', pos: [1.2, 1.4, -2.2] },
        { name: 'Exploded Architecture', pos: [2.2, 1.6, 3.2] }
      ]
    },
    variants: [
      { id: 1, name: 'American Black Walnut', color_name: 'Walnut', color_hex: '#634735', material: 'Solid Walnut', finish: 'Organic Hardwax Oil' },
      { id: 2, name: 'Fumed White Oak', color_name: 'Smoked Oak', color_hex: '#A8A7A4', material: 'Fumed Oak', finish: 'Matte UV Seal' },
      { id: 3, name: 'Oxide Carbon Stained Ash', color_name: 'Carbon', color_hex: '#171717', material: 'Stained Ash', finish: 'Open Pore' }
    ],
    components: [
      { id: 1, component_name: 'Steam-Bent Walnut Back Shell', component_key: 'backrest', material: 'Solid Walnut', mesh_name: 'mesh_backrest', exploded_offset_x: 0, exploded_offset_y: 0.55, exploded_offset_z: -0.45, description: 'Laminated curved outer shell crafted from 9 plies of Appalachian black walnut.' },
      { id: 2, component_name: 'Tuscan Saddle Leather Cushion', component_key: 'seat_cushion', material: 'Aniline Saddle Leather', mesh_name: 'mesh_cushion', exploded_offset_x: 0, exploded_offset_y: 0.35, exploded_offset_z: 0.15, description: 'Dual-density high resilience foam core wrapped in virgin duck down.' },
      { id: 3, component_name: 'Molded Plywood Sub-Pan', component_key: 'seat_pan', material: 'European Birch Plywood', mesh_name: 'mesh_seat_pan', exploded_offset_x: 0, exploded_offset_y: 0.05, exploded_offset_z: 0, description: 'Structural load-bearing pan featuring concealed spring clips.' },
      { id: 4, component_name: 'Machined Cast-Bronze Pedestal', component_key: 'pedestal', material: 'Cast Bronze Alloy', mesh_name: 'mesh_pedestal', exploded_offset_x: 0, exploded_offset_y: -0.5, exploded_offset_z: 0, description: 'Counterbalanced three-point ground contact base with integrated 360-degree silent bearing raceway.' }
    ]
  },
  {
    id: 2,
    name: 'MONO 002 Accent Chair',
    slug: 'mono-002-accent-chair',
    sku: 'MNO-002',
    object_number: 'NO. 002',
    category: 'chairs',
    collection: 'The Form Study',
    tagline: 'Angular discipline meets tactile rest.',
    short_description: 'Low-slung minimalist occasional chair featuring geometric fumed oak framing and Italian loop-pile virgin wool bouclé.',
    long_description: 'Object No. 002 challenges symmetry through disciplined angular planes. Designed to sit effortlessly in gallery reception spaces or private libraries.',
    price: 2750.00,
    currency: 'USD',
    availability: 'in_stock',
    featured: true,
    display_order: 2,
    images: {
      primary: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=85',
      hero: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1800&q=85',
      gallery: [],
      turntable_360: Array.from({ length: 24 }, (_, i) =>
        `https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80&rot=${i * 15}`
      )
    },
    dimensions: { width: 78, height: 72, depth: 82, seatHeight: 41, unit: 'cm' },
    specifications: {
      'Timber': 'Fumed French White Oak',
      'Upholstery': 'Virgin Wool Bouclé (92% wool, 8% polyamide)',
      'Origin': 'Atelier Craftsmanship, Denmark'
    },
    features: ['Geometric joinery without exposed screws', 'Dual-density high resilience foam', 'Removable cushion jacket'],
    variants: [
      { id: 4, name: 'Chalk Wool Bouclé', color_name: 'Chalk', color_hex: '#E8E6E1', material: 'Bouclé' },
      { id: 5, name: 'Obsidian Wool Bouclé', color_name: 'Carbon', color_hex: '#171717', material: 'Bouclé' }
    ]
  },
  {
    id: 3,
    name: 'MONO 003 Minimalist Dining Chair',
    slug: 'mono-003-dining-chair',
    sku: 'MNO-003',
    object_number: 'NO. 003',
    category: 'chairs',
    collection: 'The Form Study',
    tagline: 'Featherweight silhouette, ergonomic spine.',
    short_description: 'Stackable architectural dining chair with curved plywood back and concealed magnetic felt glides.',
    long_description: 'Featherweight visual clarity. Object No. 003 combines structural lightness with generous spinal curvature.',
    price: 920.00,
    currency: 'USD',
    availability: 'made_to_order',
    featured: false,
    display_order: 3,
    images: {
      primary: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1600&q=85',
      hero: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1800&q=85',
      gallery: [],
      turntable_360: []
    },
    dimensions: { width: 52, height: 79, depth: 54, seatHeight: 45, unit: 'cm' },
    specifications: { 'Timber': 'Solid European Beech', 'Finish': 'Organic Matte Hardwax' }
  },
  {
    id: 4,
    name: 'MONO 004 Monolithic Dining Table',
    slug: 'mono-004-dining-table',
    sku: 'MNO-004',
    object_number: 'NO. 004',
    category: 'tables',
    collection: 'The Monolithic Series',
    tagline: 'Made for the moments between.',
    short_description: 'Sculptural solid walnut dining table featuring twin columnar pedestals and bookmatched quarter-sawn grain.',
    long_description: 'Object No. 004 anchors expansive architectural dining spaces. Built with 50mm solid Appalachian walnut slabs hand-buffed with vegetable oils.',
    price: 5800.00,
    currency: 'USD',
    availability: 'made_to_order',
    featured: true,
    display_order: 4,
    images: {
      primary: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=85',
      hero: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1800&q=85',
      gallery: [],
      turntable_360: Array.from({ length: 24 }, (_, i) =>
        `https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80&rot=${i * 15}`
      )
    },
    dimensions: { width: 260, height: 75, depth: 105, unit: 'cm' },
    specifications: { 'Timber': 'Solid Appalachian Black Walnut', 'Pedestals': 'Twin Architectural Cylinders', 'Seats': '10 Guests' }
  },
  {
    id: 5,
    name: 'MONO 005 Sanctuary Platform Bed',
    slug: 'mono-005-sanctuary-bed',
    sku: 'MNO-005',
    object_number: 'NO. 005',
    category: 'beds',
    collection: 'The Monolithic Series',
    tagline: 'Quiet horizon for domestic restoration.',
    short_description: 'Low-slung floating platform bed framed in quarter-sawn white oak with integrated floating travertine bedside ledges.',
    long_description: 'Object No. 005 reframes the bedroom as an architectural sanctuary. Featuring acoustic wool interior cushioning and concealed wire channels.',
    price: 5100.00,
    currency: 'USD',
    availability: 'made_to_order',
    featured: true,
    display_order: 5,
    images: {
      primary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85',
      hero: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1800&q=85'
    },
    dimensions: { width: 224, height: 82, depth: 232, unit: 'cm' },
    specifications: { 'Wood': 'European White Oak', 'Ledges': 'Honed Navona Travertine', 'Fabric': 'Belgian Washed Linen' }
  },
  {
    id: 6,
    name: 'MONO 006 Linear Storage Credenza',
    slug: 'mono-006-linear-credenza',
    sku: 'MNO-006',
    object_number: 'NO. 006',
    category: 'storage',
    collection: 'The Monolithic Series',
    tagline: 'Disciplined planar storage.',
    short_description: 'Four-bay minimalist credenza with touch-latch acoustic fluted timber doors and continuous shadow-gap base.',
    long_description: 'Pure horizontal lineation. Object No. 006 conceals audio components, records, and collectible glassware with seamless magnetic closures.',
    price: 4200.00,
    currency: 'USD',
    availability: 'made_to_order',
    featured: true,
    display_order: 6,
    images: {
      primary: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=85',
      hero: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1800&q=85'
    },
    dimensions: { width: 210, height: 68, depth: 50, unit: 'cm' },
    specifications: { 'Timber': 'Fumed Oak and Brushed Oxide Steel', 'Hardware': 'Blum Tip-On Magnetic Latches' }
  }
];

export const FALLBACK_MATERIALS = [
  { id: 1, name: 'American Black Walnut', slug: 'walnut', material_type: 'Walnut', color_hex: '#634735', description: 'Deep chocolate tones with warm caramel figuring, finished with hand-rubbed organic vegetable wax.' },
  { id: 2, name: 'Fumed European Oak', slug: 'fumed-oak', material_type: 'Oak', color_hex: '#A8A7A4', description: 'Treated with controlled ammonia vaporization to darken natural heartwood tannins permanently.' },
  { id: 3, name: 'Tuscan Saddle Leather', slug: 'saddle-leather', material_type: 'Leather', color_hex: '#A14F39', description: 'Full-grain Italian bull hides tanned with chestnut and mimosa extracts; breathes and develops rich amber patina.' },
  { id: 4, name: 'Virgin Wool Bouclé', slug: 'wool-boucle', material_type: 'Boucle', color_hex: '#E8E6E1', description: 'Heavyweight tactile loop-pile yarn milled in Northern Italy, offering cloud-like acoustic dampening.' },
  { id: 5, name: 'Belgian Washed Linen', slug: 'belgian-linen', material_type: 'Linen', color_hex: '#D9D6D0', description: 'Natural slub flax stone-washed for soft hand feel and high thermal regulation across seasons.' },
  { id: 6, name: 'Patinated Oxide Bronze', slug: 'oxide-bronze', material_type: 'Metal', color_hex: '#524136', description: 'Solid machined architectural brass chemically oxidized with liver of sulfur to reveal golden edge burnishing.' }
];

export const FALLBACK_COLLECTIONS = [
  { id: 1, name: 'The Form Study', slug: 'the-form-study', description: 'A rigorous exploration of sculptural silhouette, reductive curvature, and cantilevered balance.', hero_image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85' },
  { id: 2, name: 'The Monolithic Series', slug: 'monolithic-series', description: 'Single-material architectural solids proportioned for unhurried presence and quiet dignity.', hero_image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=85' },
  { id: 3, name: 'The Tactile Archive', slug: 'tactile-archive', description: 'Living hides, Belgian flax, and organic vegetable-waxed European timbers.', hero_image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85' }
];
