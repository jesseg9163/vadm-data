/**
 * MOS (Military Occupational Specialty) exposure profiles for the Missed Claims
 * personalization feature.
 *
 * Each entry maps an occupation code to possible duty-related exposure leads.
 * These tags are research prompts, not official VA exposure findings, medical
 * causation opinions, or presumptions based on occupation alone. Individual
 * service locations, dates, duties, records, diagnoses, and nexus evidence matter.
 * Location- and deployment-dependent tags are not assigned from MOS alone.
 *
 * Sources:
 *  - 38 CFR §3.307 (presumptive service connection)
 *  - 38 CFR §3.309 (diseases subject to presumptive service connection)
 *  - 38 CFR §3.317 (Gulf War undiagnosed illness presumptive)
 *  - PACT Act (2022) — burn pit + airborne hazard presumptives
 *  - VA "Public Health" exposure pages: agent orange, asbestos, water at Camp Lejeune
 *  - DoD official MOS / AFSC / Rating publication lists
 *
 * v2 (2026-06-26) — expanded from 10 → 120 entries covering combat arms, support,
 * aviation, medical, signal, intel, logistics, MP, special operations, and the
 * highest-population enlisted ratings across all six service branches.
 */

export type Exposure =
  | 'noise'                  // possible hazardous-noise duty lead; not an MOS presumption
  | 'asbestos'               // possible shipyard, boiler, or insulation duty lead
  | 'burn_pits'              // qualifying location and dates must be verified
  | 'agent_orange'           // 38 CFR §3.307(a)(6), §3.309(e) — Vietnam, Korea DMZ, Thai bases
  | 'gulf_war_undiag'        // 38 CFR §3.317 — Aug 1990–present SW Asia
  | 'camp_lejeune_water'     // 38 CFR §3.309(f) — 1953-08-01 to 1987-12-31
  | 'depleted_uranium'       // possible exposure lead; individual evidence required
  | 'jet_fuel_jp8'           // possible fuel-handling or flight-line duty lead
  | 'lead'                   // possible range or small-arms duty lead
  | 'radiation_ionizing'     // §3.309(d) requires a defined radiation-risk activity
  | 'mustard_gas'            // 38 CFR §3.316
  | 'particulate_matter'     // PACT Act — sand/dust SW Asia + Afghanistan
  | 'pfas'                   // possible AFFF/PFAS exposure lead; no blanket presumption asserted
  | 'tbi_blast'              // blast-risk lead; not a TBI diagnosis or nexus
  | 'mst_high_risk'          // sensitive screening lead; never proof that an assault occurred
  ;

export type Branch = 'Army' | 'Marines' | 'Navy' | 'Air Force' | 'Coast Guard' | 'Space Force';

export type MOSProfile = {
  code: string;             // "11B", "0311", "3E0X1"
  name: string;             // "Infantryman"
  branch: Branch;
  exposures: Exposure[];    // possible leads only; order is not an evidence-strength score
  populationRank?: number;  // internal display priority, not official force population data
};

export const MOS_PROFILES: MOSProfile[] = [
  // ── Army Combat Arms ──
  {
    code: '11B',
    name: 'Infantryman',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 1,
  },
  {
    code: '11C',
    name: 'Indirect Fire Infantryman (Mortars)',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 12,
  },
  {
    code: '11A',
    name: 'Infantry Officer',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 35,
  },
  {
    code: '13B',
    name: 'Cannon Crewmember',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 6,
  },
  {
    code: '13F',
    name: 'Joint Fire Support Specialist (Forward Observer)',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 32,
  },
  {
    code: '13M',
    name: 'Multiple Launch Rocket System (MLRS) Crewmember',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'jet_fuel_jp8'],
    populationRank: 58,
  },
  {
    code: '12B',
    name: 'Combat Engineer',
    branch: 'Army',
    exposures: ['tbi_blast', 'noise', 'lead', 'depleted_uranium'],
    populationRank: 9,
  },
  {
    code: '12C',
    name: 'Bridge Crewmember',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8'],
    populationRank: 78,
  },
  {
    code: '19D',
    name: 'Cavalry Scout',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'lead', 'depleted_uranium'],
    populationRank: 14,
  },
  {
    code: '19K',
    name: 'M1 Armor Crewman',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'depleted_uranium', 'jet_fuel_jp8', 'lead'],
    populationRank: 18,
  },
  {
    code: '18A',
    name: 'Special Forces Officer',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 55,
  },
  {
    code: '18B',
    name: 'Special Forces Weapons Sergeant',
    branch: 'Army',
    exposures: ['noise', 'lead', 'tbi_blast'],
    populationRank: 60,
  },
  {
    code: '18D',
    name: 'Special Forces Medical Sergeant',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 62,
  },
  {
    code: '25B',
    name: 'Information Technology Specialist',
    branch: 'Army',
    exposures: ['noise'],
    populationRank: 22,
  },
  {
    code: '25Q',
    name: 'Multi-Channel Transmission Systems Operator',
    branch: 'Army',
    exposures: ['noise'],
    populationRank: 75,
  },
  {
    code: '25U',
    name: 'Signal Support Systems Specialist',
    branch: 'Army',
    exposures: ['noise'],
    populationRank: 40,
  },
  {
    code: '31B',
    name: 'Military Police',
    branch: 'Army',
    exposures: ['noise', 'lead', 'tbi_blast'],
    populationRank: 11,
  },
  {
    code: '31E',
    name: 'Internment / Resettlement Specialist',
    branch: 'Army',
    exposures: ['noise', 'lead'],
    populationRank: 88,
  },
  {
    code: '35F',
    name: 'Intelligence Analyst',
    branch: 'Army',
    exposures: [],
    populationRank: 25,
  },
  {
    code: '35M',
    name: 'Human Intelligence Collector',
    branch: 'Army',
    exposures: [],
    populationRank: 64,
  },
  {
    code: '35N',
    name: 'Signals Intelligence Analyst',
    branch: 'Army',
    exposures: [],
    populationRank: 70,
  },
  {
    code: '35P',
    name: 'Cryptologic Linguist',
    branch: 'Army',
    exposures: ['noise'],
    populationRank: 72,
  },
  {
    code: '35T',
    name: 'Military Intelligence Systems Maintainer',
    branch: 'Army',
    exposures: [],
    populationRank: 95,
  },
  {
    code: '37F',
    name: 'Psychological Operations Specialist',
    branch: 'Army',
    exposures: [],
    populationRank: 92,
  },
  {
    code: '38B',
    name: 'Civil Affairs Specialist',
    branch: 'Army',
    exposures: [],
    populationRank: 86,
  },
  {
    code: '42A',
    name: 'Human Resources Specialist',
    branch: 'Army',
    exposures: [],
    populationRank: 8,
  },
  {
    code: '46Q',
    name: 'Public Affairs Specialist',
    branch: 'Army',
    exposures: [],
    populationRank: 99,
  },
  {
    code: '56M',
    name: 'Religious Affairs Specialist (Chaplain Assistant)',
    branch: 'Army',
    exposures: [],
    populationRank: 105,
  },
  {
    code: '63B',
    name: 'Light Wheel Vehicle Mechanic',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead'],
    populationRank: 36,
  },
  {
    code: '68W',
    name: 'Combat Medic',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 4,
  },
  {
    code: '74D',
    name: 'CBRN Specialist',
    branch: 'Army',
    exposures: ['radiation_ionizing', 'mustard_gas'],
    populationRank: 85,
  },
  {
    code: '88H',
    name: 'Cargo Specialist',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos'],
    populationRank: 65,
  },
  {
    code: '88K',
    name: 'Watercraft Operator',
    branch: 'Army',
    exposures: ['noise', 'asbestos', 'jet_fuel_jp8'],
    populationRank: 110,
  },
  {
    code: '88M',
    name: 'Motor Transport Operator',
    branch: 'Army',
    exposures: ['jet_fuel_jp8', 'noise', 'depleted_uranium'],
    populationRank: 3,
  },
  {
    code: '88N',
    name: 'Transportation Management Coordinator',
    branch: 'Army',
    exposures: ['jet_fuel_jp8'],
    populationRank: 80,
  },
  {
    code: '89B',
    name: 'Ammunition Specialist',
    branch: 'Army',
    exposures: ['noise', 'lead', 'tbi_blast'],
    populationRank: 67,
  },
  {
    code: '89D',
    name: 'Explosive Ordnance Disposal (EOD) Specialist',
    branch: 'Army',
    exposures: ['tbi_blast', 'noise', 'lead', 'depleted_uranium'],
    populationRank: 50,
  },
  {
    code: '91B',
    name: 'Wheeled Vehicle Mechanic',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead'],
    populationRank: 28,
  },
  {
    code: '91D',
    name: 'Power-Generation Equipment Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8'],
    populationRank: 90,
  },
  {
    code: '91M',
    name: 'Bradley Fighting Vehicle System Maintainer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'depleted_uranium', 'lead'],
    populationRank: 100,
  },
  {
    code: '92F',
    name: 'Petroleum Supply Specialist',
    branch: 'Army',
    exposures: ['jet_fuel_jp8', 'noise', 'lead'],
    populationRank: 30,
  },
  {
    code: '92G',
    name: 'Culinary Specialist',
    branch: 'Army',
    exposures: [],
    populationRank: 27,
  },
  {
    code: '92Y',
    name: 'Unit Supply Specialist',
    branch: 'Army',
    exposures: [],
    populationRank: 16,
  },
  {
    code: '15T',
    name: 'UH-60 Helicopter Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'pfas'],
    populationRank: 45,
  },
  {
    code: '15U',
    name: 'CH-47 Helicopter Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'pfas'],
    populationRank: 68,
  },
  {
    code: '15Y',
    name: 'AH-64 Armament/Electrical/Avionics Systems Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'lead'],
    populationRank: 82,
  },

  // ── Marine Corps ──
  {
    code: '0311',
    name: 'Rifleman',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 2,
  },
  {
    code: '0331',
    name: 'Machine Gunner',
    branch: 'Marines',
    exposures: ['noise', 'lead', 'tbi_blast'],
    populationRank: 5,
  },
  {
    code: '0317',
    name: 'Scout Sniper',
    branch: 'Marines',
    exposures: ['noise', 'lead', 'tbi_blast'],
    populationRank: 63,
  },
  {
    code: '0321',
    name: 'Reconnaissance Marine',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 70,
  },
  {
    code: '0341',
    name: 'Mortarman',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 38,
  },
  {
    code: '0351',
    name: 'Infantry Assault Marine',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 75,
  },
  {
    code: '0352',
    name: 'Anti-Tank Missile Gunner',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 85,
  },
  {
    code: '0811',
    name: 'Field Artillery Cannoneer',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 48,
  },
  {
    code: '1371',
    name: 'Combat Engineer',
    branch: 'Marines',
    exposures: ['tbi_blast', 'noise', 'lead'],
    populationRank: 42,
  },
  {
    code: '1391',
    name: 'Bulk Fuel Specialist',
    branch: 'Marines',
    exposures: ['jet_fuel_jp8', 'noise'],
    populationRank: 88,
  },
  {
    code: '1812',
    name: 'M1A1 Tank Crewman',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'depleted_uranium', 'jet_fuel_jp8', 'lead'],
    populationRank: 80,
  },
  {
    code: '3531',
    name: 'Motor Vehicle Operator',
    branch: 'Marines',
    exposures: ['jet_fuel_jp8', 'noise'],
    populationRank: 33,
  },
  {
    code: '5811',
    name: 'Military Police',
    branch: 'Marines',
    exposures: ['noise', 'lead', 'tbi_blast'],
    populationRank: 47,
  },
  {
    code: '6113',
    name: 'Helicopter Mechanic, CH-46/CH-53',
    branch: 'Marines',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'pfas'],
    populationRank: 78,
  },
  {
    code: '7212',
    name: 'Low-Altitude Air Defense Gunner',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 102,
  },

  // ── Navy Ratings ──
  {
    code: 'AD',
    name: 'Aviation Machinist',
    branch: 'Navy',
    exposures: ['jet_fuel_jp8', 'noise', 'asbestos', 'lead', 'pfas'],
    populationRank: 10,
  },
  {
    code: 'AO',
    name: 'Aviation Ordnanceman',
    branch: 'Navy',
    exposures: ['noise', 'lead', 'jet_fuel_jp8', 'asbestos', 'pfas'],
    populationRank: 43,
  },
  {
    code: 'AT',
    name: 'Aviation Electronics Technician',
    branch: 'Navy',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'radiation_ionizing'],
    populationRank: 52,
  },
  {
    code: 'BM',
    name: 'Boatswain\'s Mate',
    branch: 'Navy',
    exposures: ['asbestos', 'noise', 'jet_fuel_jp8', 'lead', 'pfas'],
    populationRank: 20,
  },
  {
    code: 'DC',
    name: 'Damage Controlman',
    branch: 'Navy',
    exposures: ['asbestos', 'pfas', 'noise', 'lead'],
    populationRank: 56,
  },
  {
    code: 'EN',
    name: 'Engineman (Engine Room)',
    branch: 'Navy',
    exposures: ['asbestos', 'noise', 'jet_fuel_jp8', 'lead'],
    populationRank: 17,
  },
  {
    code: 'ET',
    name: 'Electronics Technician',
    branch: 'Navy',
    exposures: ['asbestos', 'noise', 'radiation_ionizing'],
    populationRank: 38,
  },
  {
    code: 'FC',
    name: 'Fire Controlman',
    branch: 'Navy',
    exposures: ['noise', 'asbestos', 'radiation_ionizing'],
    populationRank: 70,
  },
  {
    code: 'GM',
    name: 'Gunner\'s Mate',
    branch: 'Navy',
    exposures: ['noise', 'lead', 'asbestos'],
    populationRank: 65,
  },
  {
    code: 'HM',
    name: 'Hospital Corpsman',
    branch: 'Navy',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 24,
  },
  {
    code: 'HT',
    name: 'Hull Maintenance Technician',
    branch: 'Navy',
    exposures: ['asbestos', 'lead', 'noise', 'pfas'],
    populationRank: 60,
  },
  {
    code: 'IT',
    name: 'Information Systems Technician',
    branch: 'Navy',
    exposures: ['asbestos', 'noise'],
    populationRank: 34,
  },
  {
    code: 'MM',
    name: 'Machinist\'s Mate',
    branch: 'Navy',
    exposures: ['asbestos', 'noise', 'jet_fuel_jp8', 'radiation_ionizing'],
    populationRank: 26,
  },
  {
    code: 'MN',
    name: 'Mineman',
    branch: 'Navy',
    exposures: ['noise', 'asbestos', 'lead'],
    populationRank: 110,
  },
  {
    code: 'OS',
    name: 'Operations Specialist',
    branch: 'Navy',
    exposures: ['asbestos', 'noise', 'radiation_ionizing'],
    populationRank: 45,
  },
  {
    code: 'QM',
    name: 'Quartermaster',
    branch: 'Navy',
    exposures: ['asbestos', 'noise'],
    populationRank: 75,
  },
  {
    code: 'ST',
    name: 'Sonar Technician',
    branch: 'Navy',
    exposures: ['noise', 'asbestos', 'radiation_ionizing'],
    populationRank: 82,
  },
  {
    code: 'YN',
    name: 'Yeoman',
    branch: 'Navy',
    exposures: ['asbestos'],
    populationRank: 37,
  },
  {
    code: 'CTI',
    name: 'Cryptologic Technician Interpretive',
    branch: 'Navy',
    exposures: ['asbestos'],
    populationRank: 92,
  },
  {
    code: 'CTR',
    name: 'Cryptologic Technician Collection',
    branch: 'Navy',
    exposures: ['asbestos'],
    populationRank: 95,
  },

  // ── Air Force AFSC ──
  {
    code: '1A2X1',
    name: 'Aircraft Loadmaster',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'pfas'],
    populationRank: 88,
  },
  {
    code: '1A8X1',
    name: 'Airborne Cryptologic Linguist',
    branch: 'Air Force',
    exposures: ['noise'],
    populationRank: 100,
  },
  {
    code: '1C0X2',
    name: 'Aviation Resource Management',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8'],
    populationRank: 60,
  },
  {
    code: '1C1X1',
    name: 'Air Traffic Control',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8'],
    populationRank: 48,
  },
  {
    code: '1N0X1',
    name: 'All-Source Intelligence Analyst',
    branch: 'Air Force',
    exposures: [],
    populationRank: 50,
  },
  {
    code: '1N1X1',
    name: 'Geospatial Intelligence',
    branch: 'Air Force',
    exposures: [],
    populationRank: 72,
  },
  {
    code: '1T2X1',
    name: 'Pararescue (PJ)',
    branch: 'Air Force',
    exposures: ['noise', 'tbi_blast', 'jet_fuel_jp8', 'pfas'],
    populationRank: 84,
  },
  {
    code: '1Z3X1',
    name: 'Combat Controller',
    branch: 'Air Force',
    exposures: ['noise', 'tbi_blast', 'lead'],
    populationRank: 90,
  },
  {
    code: '1Z4X1',
    name: 'Tactical Air Control Party (TACP)',
    branch: 'Air Force',
    exposures: ['noise', 'tbi_blast'],
    populationRank: 86,
  },
  {
    code: '2A3X3',
    name: 'Tactical Aircraft Maintenance (F-15/F-16/F-22/F-35)',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'pfas'],
    populationRank: 30,
  },
  {
    code: '2A5X1',
    name: 'Airlift Aircraft Maintenance (C-17/C-130)',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'pfas'],
    populationRank: 55,
  },
  {
    code: '2A6X1',
    name: 'Aerospace Propulsion (Jet Engines)',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead'],
    populationRank: 62,
  },
  {
    code: '2A6X2',
    name: 'Aerospace Ground Equipment',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'pfas'],
    populationRank: 75,
  },
  {
    code: '2F0X1',
    name: 'Fuels (POL)',
    branch: 'Air Force',
    exposures: ['jet_fuel_jp8', 'noise', 'pfas'],
    populationRank: 44,
  },
  {
    code: '2W0X1',
    name: 'Munitions Systems',
    branch: 'Air Force',
    exposures: ['noise', 'lead', 'jet_fuel_jp8'],
    populationRank: 80,
  },
  {
    code: '2W1X1',
    name: 'Aircraft Armament Systems',
    branch: 'Air Force',
    exposures: ['noise', 'lead', 'jet_fuel_jp8'],
    populationRank: 95,
  },
  {
    code: '3E0X1',
    name: 'Electrical Systems / Power Production',
    branch: 'Air Force',
    exposures: ['jet_fuel_jp8', 'noise', 'asbestos', 'pfas', 'lead'],
    populationRank: 7,
  },
  {
    code: '3E7X1',
    name: 'Fire Protection',
    branch: 'Air Force',
    exposures: ['pfas', 'noise', 'jet_fuel_jp8', 'asbestos'],
    populationRank: 70,
  },
  {
    code: '3E8X1',
    name: 'Explosive Ordnance Disposal (EOD)',
    branch: 'Air Force',
    exposures: ['tbi_blast', 'noise', 'lead', 'depleted_uranium'],
    populationRank: 78,
  },
  {
    code: '3F1X1',
    name: 'Services (Food/Lodging/Mortuary)',
    branch: 'Air Force',
    exposures: [],
    populationRank: 25,
  },
  {
    code: '3P0X1',
    name: 'Security Forces',
    branch: 'Air Force',
    exposures: ['noise', 'lead', 'tbi_blast'],
    populationRank: 19,
  },
  {
    code: '4N0X1',
    name: 'Aerospace Medical Service',
    branch: 'Air Force',
    exposures: ['jet_fuel_jp8'],
    populationRank: 33,
  },

  // ── Coast Guard ──
  {
    code: 'CG-BM',
    name: 'Boatswain\'s Mate',
    branch: 'Coast Guard',
    exposures: ['asbestos', 'noise', 'pfas'],
    populationRank: 50,
  },
  {
    code: 'CG-MK',
    name: 'Machinery Technician',
    branch: 'Coast Guard',
    exposures: ['asbestos', 'noise', 'jet_fuel_jp8'],
    populationRank: 55,
  },
  {
    code: 'CG-AET',
    name: 'Avionics Electrical Technician',
    branch: 'Coast Guard',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos'],
    populationRank: 90,
  },
  {
    code: 'CG-AMT',
    name: 'Aviation Maintenance Technician',
    branch: 'Coast Guard',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'pfas'],
    populationRank: 85,
  },
  {
    code: 'CG-AST',
    name: 'Aviation Survival Technician (Rescue Swimmer)',
    branch: 'Coast Guard',
    exposures: ['noise', 'jet_fuel_jp8'],
    populationRank: 105,
  },
  {
    code: 'CG-DC',
    name: 'Damage Controlman',
    branch: 'Coast Guard',
    exposures: ['asbestos', 'pfas', 'noise'],
    populationRank: 95,
  },
  {
    code: 'CG-ET',
    name: 'Electronics Technician',
    branch: 'Coast Guard',
    exposures: ['asbestos', 'noise'],
    populationRank: 80,
  },
  {
    code: 'CG-GM',
    name: 'Gunner\'s Mate',
    branch: 'Coast Guard',
    exposures: ['noise', 'lead'],
    populationRank: 108,
  },
  {
    code: 'CG-HS',
    name: 'Health Services Technician',
    branch: 'Coast Guard',
    exposures: [],
    populationRank: 65,
  },
  {
    code: 'CG-ME',
    name: 'Maritime Enforcement Specialist',
    branch: 'Coast Guard',
    exposures: ['noise', 'lead'],
    populationRank: 88,
  },
  {
    code: 'CG-OS',
    name: 'Operations Specialist',
    branch: 'Coast Guard',
    exposures: ['asbestos', 'noise'],
    populationRank: 92,
  },

  // ── Space Force (Guardian) ──
  {
    code: '5C0X1',
    name: 'Command and Control Operations',
    branch: 'Space Force',
    exposures: [],
    populationRank: 99,
  },
  {
    code: '1C6X1',
    name: 'Space Systems Operations',
    branch: 'Space Force',
    exposures: [],
    populationRank: 102,
  },
];
// Screening tags only. Each underlying authority's exact location, date,
// duration, diagnosis, manifestation, and rebuttal rules must be checked.
export type ServiceEraTag =
  | 'vietnam_1962_1975'      // Agent Orange
  | 'thailand_1962_1976'     // Agent Orange (specific bases)
  | 'korea_dmz_1968_1971'    // Agent Orange
  | 'gulf_war_1990_present'  // Gulf War / SW Asia undiagnosed illness + PACT
  | 'oif_oef_2001_present'   // PACT Act burn pits
  | 'camp_lejeune_1953_1987' // §3.309(f) — contaminated water
  | 'desert_storm_1990_1991' // narrower window of Gulf War 1
  | 'atomic_test_1945_1962'  // §3.309(d) radiation-risk activities
  ;

// `presumptiveFamily` is retained as a compatibility key. It identifies which
// rules to screen; it does not establish that the veteran qualifies.
export const ERA_TAGS: { tag: ServiceEraTag; label: string; presumptiveFamily: string }[] = [
  { tag: 'vietnam_1962_1975', label: 'Vietnam-era service — verify qualifying location and dates', presumptiveFamily: 'agent_orange' },
  { tag: 'thailand_1962_1976', label: 'Thailand service — verify qualifying base, duty, and dates', presumptiveFamily: 'agent_orange' },
  { tag: 'korea_dmz_1968_1971', label: 'Korean DMZ service — verify unit, location, and dates', presumptiveFamily: 'agent_orange' },
  { tag: 'gulf_war_1990_present', label: 'Southwest Asia service — verify § 3.317 or § 3.320 eligibility', presumptiveFamily: 'gulf_war_undiag' },
  { tag: 'oif_oef_2001_present', label: 'OIF/OEF service — verify qualifying location and dates', presumptiveFamily: 'burn_pits' },
  { tag: 'camp_lejeune_1953_1987', label: 'Camp Lejeune — verify at least 30 qualifying days and exact dates', presumptiveFamily: 'camp_lejeune_water' },
  { tag: 'desert_storm_1990_1991', label: 'Desert Storm service — verify qualifying Southwest Asia service', presumptiveFamily: 'gulf_war_undiag' },
  { tag: 'atomic_test_1945_1962', label: 'Possible radiation-risk activity — verify under § 3.309(d)(3)', presumptiveFamily: 'radiation_ionizing' },
];
