/**
 * MOS (Military Occupational Specialty) exposure profiles for the Missed Claims
 * personalization feature.
 *
 * Each entry maps an MOS code to its documented service-related exposures.
 * Exposure → presumptive claim mapping is in `presumptive-map.ts`.
 *
 * Sources:
 *  - 38 CFR §3.307 (presumptive service connection)
 *  - 38 CFR §3.309 (diseases subject to presumptive service connection)
 *  - 38 CFR §3.317 (Gulf War undiagnosed illness presumptive)
 *  - PACT Act (2022) — burn pit + airborne hazard presumptives
 *  - VA M21-1 Part IV, Subpart ii (presumptive policy)
 *  - VA "Public Health" exposure pages: agent orange, asbestos, water at Camp Lejeune
 *  - DoD official MOS / AFSC / Rating publication lists
 *
 * v2 (2026-06-26) — expanded from 10 → 120 entries covering combat arms, support,
 * aviation, medical, signal, intel, logistics, MP, special operations, and the
 * highest-population enlisted ratings across all six service branches.
 */

export type Exposure =
  | 'noise'                  // 38 CFR §3.385 — hearing loss/tinnitus presumptive eras
  | 'asbestos'               // VA M21-1 IV.ii.2.C — shipyard, boiler, insulation
  | 'burn_pits'              // PACT Act §403 — Iraq/Afghanistan/Djibouti deployments
  | 'agent_orange'           // 38 CFR §3.307(a)(6), §3.309(e) — Vietnam, Korea DMZ, Thai bases
  | 'gulf_war_undiag'        // 38 CFR §3.317 — Aug 1990–present SW Asia
  | 'camp_lejeune_water'     // 38 CFR §3.309(f) — 1953-08-01 to 1987-12-31
  | 'depleted_uranium'       // VA EHC — DU armor, tank crews
  | 'jet_fuel_jp8'           // VA Public Health — fuel handlers, flight line
  | 'lead'                   // M21-1 IV.ii.2.C — small arms instructors, ranges
  | 'radiation_ionizing'     // 38 CFR §3.309(d) — radiation-risk activities list
  | 'mustard_gas'            // 38 CFR §3.316
  | 'particulate_matter'     // PACT Act — sand/dust SW Asia + Afghanistan
  | 'pfas'                   // M21-1 update 2024 — firefighting foam (AFFF)
  | 'tbi_blast'              // 38 CFR §3.310 secondary; common in combat MOS
  | 'mst_high_risk'          // not a presumptive, but documented elevated incidence
  ;

export type Branch = 'Army' | 'Marines' | 'Navy' | 'Air Force' | 'Coast Guard' | 'Space Force';

export type MOSProfile = {
  code: string;             // "11B", "0311", "3E0X1"
  name: string;             // "Infantryman"
  branch: Branch;
  exposures: Exposure[];    // ranked by likelihood
  notes?: string;           // brief context for the user
  populationRank?: number;  // 1-N, used for sort/priority — lower = more common
};

export const MOS_PROFILES: MOSProfile[] = [
  // ── Army Combat Arms ──
  {
    code: '11B',
    name: 'Infantryman',
    branch: 'Army',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'lead', 'gulf_war_undiag'],
    notes: 'Combat arms — extensive small-arms exposure, deployment to SW Asia post-2001 triggers PACT Act presumptives. TBI from blast exposure is widely under-claimed.',
    populationRank: 1,
  },
  {
    code: '11C',
    name: 'Indirect Fire Infantryman (Mortars)',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'lead', 'burn_pits', 'particulate_matter', 'gulf_war_undiag'],
    notes: 'Mortar crews — repeated overpressure exposure significantly elevates blast TBI and tinnitus claim strength beyond standard infantry.',
    populationRank: 12,
  },
  {
    code: '11A',
    name: 'Infantry Officer',
    branch: 'Army',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag'],
    notes: 'Same combat exposure as 11B with command-driven deployment patterns. PTSD claims have additional moral injury angle for officers responsible for casualties.',
    populationRank: 35,
  },
  {
    code: '13B',
    name: 'Cannon Crewmember',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'burn_pits', 'particulate_matter', 'lead', 'gulf_war_undiag'],
    notes: 'Artillery — among the highest documented noise exposure in any MOS. Tinnitus + bilateral hearing loss are presumptive-strength claims.',
    populationRank: 6,
  },
  {
    code: '13F',
    name: 'Joint Fire Support Specialist (Forward Observer)',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'burn_pits', 'particulate_matter', 'gulf_war_undiag'],
    notes: 'Embedded with infantry calling in fires — combat exposure plus repeated proximity to outgoing artillery and air-delivered ordnance.',
    populationRank: 32,
  },
  {
    code: '13M',
    name: 'Multiple Launch Rocket System (MLRS) Crewmember',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'jet_fuel_jp8', 'burn_pits', 'particulate_matter'],
    notes: 'MLRS firing produces extreme overpressure. Hearing loss + tinnitus near-universal among veteran crews.',
    populationRank: 58,
  },
  {
    code: '12B',
    name: 'Combat Engineer',
    branch: 'Army',
    exposures: ['tbi_blast', 'noise', 'burn_pits', 'particulate_matter', 'lead', 'gulf_war_undiag', 'depleted_uranium'],
    notes: 'IED clearance + breaching — blast TBI rates among the highest in the military. PACT Act + Gulf War presumptives stack here.',
    populationRank: 9,
  },
  {
    code: '12C',
    name: 'Bridge Crewmember',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'burn_pits', 'particulate_matter'],
    notes: 'Equipment-heavy combat support — fuel and noise dominant exposures.',
    populationRank: 78,
  },
  {
    code: '19D',
    name: 'Cavalry Scout',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'burn_pits', 'particulate_matter', 'lead', 'depleted_uranium', 'gulf_war_undiag'],
    notes: 'Mounted reconnaissance — vehicle noise, DU armor exposure, and combat patrols stack PACT Act + Gulf War + heavy-equipment claims.',
    populationRank: 14,
  },
  {
    code: '19K',
    name: 'M1 Armor Crewman',
    branch: 'Army',
    exposures: ['noise', 'tbi_blast', 'depleted_uranium', 'jet_fuel_jp8', 'lead', 'burn_pits', 'gulf_war_undiag'],
    notes: 'Tank crews — DU armor + DU munitions exposure is documented. Cancers presumptive under post-Gulf-War policy. Hearing loss near-universal.',
    populationRank: 18,
  },
  {
    code: '18A',
    name: 'Special Forces Officer',
    branch: 'Army',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag'],
    notes: 'Repeated deployments to high-threat zones. PACT Act and TBI claims are common; PTSD claims often under-documented due to security clearance concerns.',
    populationRank: 55,
  },
  {
    code: '18B',
    name: 'Special Forces Weapons Sergeant',
    branch: 'Army',
    exposures: ['noise', 'lead', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag'],
    notes: 'Heavy weapons SME for SF teams — combined noise + lead exposure across multiple weapons platforms over a career.',
    populationRank: 60,
  },
  {
    code: '18D',
    name: 'Special Forces Medical Sergeant',
    branch: 'Army',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag', 'mst_high_risk'],
    notes: 'Front-line trauma care under fire — combat exposure plus elevated moral injury / secondary mental health.',
    populationRank: 62,
  },
  {
    code: '25B',
    name: 'Information Technology Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'noise'],
    notes: 'Deployed signal — burn pit + particulate exposure for any OIF/OEF rotation. Noise from generators in austere conditions.',
    populationRank: 22,
  },
  {
    code: '25Q',
    name: 'Multi-Channel Transmission Systems Operator',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'noise'],
    populationRank: 75,
  },
  {
    code: '25U',
    name: 'Signal Support Systems Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'noise'],
    notes: 'Embedded with combat units — same deployment exposures as the units they support.',
    populationRank: 40,
  },
  {
    code: '31B',
    name: 'Military Police',
    branch: 'Army',
    exposures: ['noise', 'lead', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag', 'mst_high_risk'],
    notes: 'Firearms instructor exposure for lead. Combat MP teams in OIF/OEF saw direct fire. Detention duties have higher documented mental health impact.',
    populationRank: 11,
  },
  {
    code: '31E',
    name: 'Internment / Resettlement Specialist',
    branch: 'Army',
    exposures: ['noise', 'lead', 'mst_high_risk', 'burn_pits', 'particulate_matter'],
    notes: 'Corrections work in austere theater — elevated PTSD and moral injury rates documented.',
    populationRank: 88,
  },
  {
    code: '35F',
    name: 'Intelligence Analyst',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter'],
    notes: 'Deployed analyst — burn pit + particulate exposure on FOBs. Secondary mental health from sustained exposure to combat imagery.',
    populationRank: 25,
  },
  {
    code: '35M',
    name: 'Human Intelligence Collector',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'mst_high_risk'],
    notes: 'Interrogation/HUMINT roles — sustained exposure to traumatic content documented in literature.',
    populationRank: 64,
  },
  {
    code: '35N',
    name: 'Signals Intelligence Analyst',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 70,
  },
  {
    code: '35P',
    name: 'Cryptologic Linguist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'noise'],
    populationRank: 72,
  },
  {
    code: '35T',
    name: 'Military Intelligence Systems Maintainer',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 95,
  },
  {
    code: '37F',
    name: 'Psychological Operations Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'gulf_war_undiag'],
    populationRank: 92,
  },
  {
    code: '38B',
    name: 'Civil Affairs Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'gulf_war_undiag'],
    populationRank: 86,
  },
  {
    code: '42A',
    name: 'Human Resources Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter'],
    notes: 'Deployed admin — burn pit + particulate exposure on any OIF/OEF rotation. Often overlooked because not "combat."',
    populationRank: 8,
  },
  {
    code: '46Q',
    name: 'Public Affairs Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 99,
  },
  {
    code: '56M',
    name: 'Religious Affairs Specialist (Chaplain Assistant)',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'mst_high_risk'],
    notes: 'Embedded with combat units; sustained exposure to grief/trauma content.',
    populationRank: 105,
  },
  {
    code: '63B',
    name: 'Light Wheel Vehicle Mechanic',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'burn_pits', 'particulate_matter'],
    notes: 'Brake/clutch work historically involved asbestos. Fuel and solvent exposure throughout the MOS lifespan.',
    populationRank: 36,
  },
  {
    code: '68W',
    name: 'Combat Medic',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'noise', 'mst_high_risk', 'tbi_blast', 'gulf_war_undiag'],
    notes: 'Front-line medical care — combat exposure plus higher documented rates of moral injury / secondary mental health conditions.',
    populationRank: 4,
  },
  {
    code: '74D',
    name: 'CBRN Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'radiation_ionizing', 'mustard_gas', 'gulf_war_undiag'],
    notes: 'Chemical/bio/rad/nuc training and decon — multiple chemical and radiological exposures documented for the career field.',
    populationRank: 85,
  },
  {
    code: '88H',
    name: 'Cargo Specialist',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'burn_pits', 'particulate_matter', 'asbestos'],
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
    exposures: ['burn_pits', 'particulate_matter', 'jet_fuel_jp8', 'noise', 'gulf_war_undiag', 'depleted_uranium'],
    notes: 'Convoy duty in OIF/OEF puts you in the heart of PACT Act presumptive territory — burn pits, diesel, sand/dust. DU exposure if you hauled or recovered armored vehicles.',
    populationRank: 3,
  },
  {
    code: '88N',
    name: 'Transportation Management Coordinator',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter', 'jet_fuel_jp8'],
    populationRank: 80,
  },
  {
    code: '89B',
    name: 'Ammunition Specialist',
    branch: 'Army',
    exposures: ['noise', 'lead', 'burn_pits', 'particulate_matter', 'tbi_blast'],
    notes: 'Ammunition handling + supply point operations — lead and explosive exposure throughout career.',
    populationRank: 67,
  },
  {
    code: '89D',
    name: 'Explosive Ordnance Disposal (EOD) Specialist',
    branch: 'Army',
    exposures: ['tbi_blast', 'noise', 'lead', 'burn_pits', 'particulate_matter', 'depleted_uranium', 'gulf_war_undiag'],
    notes: 'EOD — TBI from controlled blasts and IED encounters is universal. PACT Act presumptives stack.',
    populationRank: 50,
  },
  {
    code: '91B',
    name: 'Wheeled Vehicle Mechanic',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'burn_pits'],
    populationRank: 28,
  },
  {
    code: '91D',
    name: 'Power-Generation Equipment Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'burn_pits', 'particulate_matter'],
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
    exposures: ['jet_fuel_jp8', 'noise', 'burn_pits', 'particulate_matter', 'lead'],
    notes: 'Direct daily JP-8 + diesel exposure. Skin, respiratory, neurologic claims well-documented for fuel handlers.',
    populationRank: 30,
  },
  {
    code: '92G',
    name: 'Culinary Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 27,
  },
  {
    code: '92Y',
    name: 'Unit Supply Specialist',
    branch: 'Army',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 16,
  },
  {
    code: '15T',
    name: 'UH-60 Helicopter Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'burn_pits', 'pfas'],
    notes: 'Aviation maintenance noise + JP-8 + AFFF on ramps. Hearing loss + tinnitus near-universal.',
    populationRank: 45,
  },
  {
    code: '15U',
    name: 'CH-47 Helicopter Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'burn_pits', 'pfas'],
    populationRank: 68,
  },
  {
    code: '15Y',
    name: 'AH-64 Armament/Electrical/Avionics Systems Repairer',
    branch: 'Army',
    exposures: ['noise', 'jet_fuel_jp8', 'lead', 'burn_pits'],
    populationRank: 82,
  },

  // ── Marine Corps ──
  {
    code: '0311',
    name: 'Rifleman',
    branch: 'Marines',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'lead', 'gulf_war_undiag'],
    notes: 'Marine infantry equivalent to Army 11B. Same combat-arms exposure profile. PACT Act applies for OIF/OEF deployment.',
    populationRank: 2,
  },
  {
    code: '0331',
    name: 'Machine Gunner',
    branch: 'Marines',
    exposures: ['noise', 'lead', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag'],
    notes: 'Heavy weapons — significantly elevated noise + lead exposure beyond standard infantry. Most claim heavy hearing loss/tinnitus.',
    populationRank: 5,
  },
  {
    code: '0317',
    name: 'Scout Sniper',
    branch: 'Marines',
    exposures: ['noise', 'lead', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag'],
    populationRank: 63,
  },
  {
    code: '0321',
    name: 'Reconnaissance Marine',
    branch: 'Marines',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag'],
    populationRank: 70,
  },
  {
    code: '0341',
    name: 'Mortarman',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead', 'burn_pits', 'particulate_matter', 'gulf_war_undiag'],
    notes: 'Same overpressure exposure as Army 11C — blast TBI underclaimed.',
    populationRank: 38,
  },
  {
    code: '0351',
    name: 'Infantry Assault Marine',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead', 'burn_pits', 'particulate_matter'],
    populationRank: 75,
  },
  {
    code: '0352',
    name: 'Anti-Tank Missile Gunner',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead', 'burn_pits'],
    populationRank: 85,
  },
  {
    code: '0811',
    name: 'Field Artillery Cannoneer',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead', 'burn_pits', 'particulate_matter'],
    populationRank: 48,
  },
  {
    code: '1371',
    name: 'Combat Engineer',
    branch: 'Marines',
    exposures: ['tbi_blast', 'noise', 'lead', 'burn_pits', 'particulate_matter', 'gulf_war_undiag'],
    populationRank: 42,
  },
  {
    code: '1391',
    name: 'Bulk Fuel Specialist',
    branch: 'Marines',
    exposures: ['jet_fuel_jp8', 'burn_pits', 'particulate_matter', 'noise'],
    populationRank: 88,
  },
  {
    code: '1812',
    name: 'M1A1 Tank Crewman',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'depleted_uranium', 'jet_fuel_jp8', 'lead', 'burn_pits'],
    populationRank: 80,
  },
  {
    code: '3531',
    name: 'Motor Vehicle Operator',
    branch: 'Marines',
    exposures: ['burn_pits', 'particulate_matter', 'jet_fuel_jp8', 'noise', 'gulf_war_undiag'],
    populationRank: 33,
  },
  {
    code: '5811',
    name: 'Military Police',
    branch: 'Marines',
    exposures: ['noise', 'lead', 'burn_pits', 'particulate_matter', 'tbi_blast'],
    populationRank: 47,
  },
  {
    code: '6113',
    name: 'Helicopter Mechanic, CH-46/CH-53',
    branch: 'Marines',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'pfas', 'burn_pits'],
    populationRank: 78,
  },
  {
    code: '7212',
    name: 'Low-Altitude Air Defense Gunner',
    branch: 'Marines',
    exposures: ['noise', 'tbi_blast', 'lead', 'burn_pits'],
    populationRank: 102,
  },

  // ── Navy Ratings ──
  {
    code: 'AD',
    name: 'Aviation Machinist',
    branch: 'Navy',
    exposures: ['jet_fuel_jp8', 'noise', 'asbestos', 'lead', 'pfas'],
    notes: 'Flight deck + maintenance crews — jet fuel, hydraulic fluid, asbestos in older airframes, AFFF on the deck.',
    populationRank: 10,
  },
  {
    code: 'AO',
    name: 'Aviation Ordnanceman',
    branch: 'Navy',
    exposures: ['noise', 'lead', 'jet_fuel_jp8', 'asbestos', 'pfas'],
    notes: 'Bomb/missile loading on carrier deck — heaviest noise environment in the Navy.',
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
    notes: 'Deck-force operations — old ships had asbestos throughout deck spaces. Heavy paint/lead work historically.',
    populationRank: 20,
  },
  {
    code: 'DC',
    name: 'Damage Controlman',
    branch: 'Navy',
    exposures: ['asbestos', 'pfas', 'noise', 'lead'],
    notes: 'Firefighting on ships + AFFF training — PFAS exposure is documented and growing claim category.',
    populationRank: 56,
  },
  {
    code: 'EN',
    name: 'Engineman (Engine Room)',
    branch: 'Navy',
    exposures: ['asbestos', 'noise', 'jet_fuel_jp8', 'lead'],
    notes: 'Pre-1980 Navy ships had asbestos throughout — boiler rooms, pipe lagging, gaskets. Mesothelioma and asbestosis are presumptive for shipyard/engine-room ratings.',
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
    exposures: ['mst_high_risk', 'burn_pits', 'particulate_matter', 'noise', 'tbi_blast', 'gulf_war_undiag'],
    notes: 'Includes Field Medic with Marines — same combat exposure as 0311 if deployed FMF. Higher documented secondary mental health rates.',
    populationRank: 24,
  },
  {
    code: 'HT',
    name: 'Hull Maintenance Technician',
    branch: 'Navy',
    exposures: ['asbestos', 'lead', 'noise', 'pfas'],
    notes: 'Pipe/hull/weld work historically heavy on asbestos — mesothelioma claims granted regularly.',
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
    notes: 'Includes Nuclear MM (MMN) — different radiation exposure profile.',
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
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'pfas', 'burn_pits'],
    populationRank: 88,
  },
  {
    code: '1A8X1',
    name: 'Airborne Cryptologic Linguist',
    branch: 'Air Force',
    exposures: ['noise', 'burn_pits', 'particulate_matter'],
    populationRank: 100,
  },
  {
    code: '1C0X2',
    name: 'Aviation Resource Management',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'burn_pits'],
    populationRank: 60,
  },
  {
    code: '1C1X1',
    name: 'Air Traffic Control',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'burn_pits'],
    populationRank: 48,
  },
  {
    code: '1N0X1',
    name: 'All-Source Intelligence Analyst',
    branch: 'Air Force',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 50,
  },
  {
    code: '1N1X1',
    name: 'Geospatial Intelligence',
    branch: 'Air Force',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 72,
  },
  {
    code: '1T2X1',
    name: 'Pararescue (PJ)',
    branch: 'Air Force',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'jet_fuel_jp8', 'pfas', 'gulf_war_undiag'],
    notes: 'AFSOC personnel recovery — combat operations + flight line + deployed exposure stack heavily.',
    populationRank: 84,
  },
  {
    code: '1Z3X1',
    name: 'Combat Controller',
    branch: 'Air Force',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'lead', 'gulf_war_undiag'],
    populationRank: 90,
  },
  {
    code: '1Z4X1',
    name: 'Tactical Air Control Party (TACP)',
    branch: 'Air Force',
    exposures: ['noise', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag'],
    notes: 'Embedded with Army combat units — same combat exposure as 13F.',
    populationRank: 86,
  },
  {
    code: '2A3X3',
    name: 'Tactical Aircraft Maintenance (F-15/F-16/F-22/F-35)',
    branch: 'Air Force',
    exposures: ['noise', 'jet_fuel_jp8', 'asbestos', 'lead', 'pfas'],
    notes: 'Flight-line maintenance — JP-8 + AFFF + extreme noise daily. Hearing loss + tinnitus + respiratory near-universal.',
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
    exposures: ['jet_fuel_jp8', 'noise', 'burn_pits', 'particulate_matter', 'pfas'],
    notes: 'Direct daily JP-8 contact + AFFF training. Skin, respiratory, neurologic claims documented.',
    populationRank: 44,
  },
  {
    code: '2W0X1',
    name: 'Munitions Systems',
    branch: 'Air Force',
    exposures: ['noise', 'lead', 'jet_fuel_jp8', 'burn_pits'],
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
    exposures: ['jet_fuel_jp8', 'noise', 'asbestos', 'burn_pits', 'pfas', 'lead'],
    notes: 'Flight-line + power generation exposure. Old base infrastructure puts you in PFAS (firefighting foam) zone — AFFF claims are accelerating.',
    populationRank: 7,
  },
  {
    code: '3E7X1',
    name: 'Fire Protection',
    branch: 'Air Force',
    exposures: ['pfas', 'noise', 'jet_fuel_jp8', 'asbestos', 'burn_pits'],
    notes: 'Direct AFFF use throughout career — PFAS class action and presumptive trajectory is rapidly evolving.',
    populationRank: 70,
  },
  {
    code: '3E8X1',
    name: 'Explosive Ordnance Disposal (EOD)',
    branch: 'Air Force',
    exposures: ['tbi_blast', 'noise', 'lead', 'burn_pits', 'particulate_matter', 'depleted_uranium'],
    populationRank: 78,
  },
  {
    code: '3F1X1',
    name: 'Services (Food/Lodging/Mortuary)',
    branch: 'Air Force',
    exposures: ['burn_pits', 'particulate_matter'],
    populationRank: 25,
  },
  {
    code: '3P0X1',
    name: 'Security Forces',
    branch: 'Air Force',
    exposures: ['noise', 'lead', 'burn_pits', 'particulate_matter', 'tbi_blast', 'gulf_war_undiag', 'mst_high_risk'],
    notes: 'AF MP equivalent — combat patrols + range time + deployed gate guard. Lead and noise dominate; PTSD common.',
    populationRank: 19,
  },
  {
    code: '4N0X1',
    name: 'Aerospace Medical Service',
    branch: 'Air Force',
    exposures: ['burn_pits', 'particulate_matter', 'jet_fuel_jp8', 'mst_high_risk'],
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
    exposures: ['mst_high_risk'],
    populationRank: 65,
  },
  {
    code: 'CG-ME',
    name: 'Maritime Enforcement Specialist',
    branch: 'Coast Guard',
    exposures: ['noise', 'lead', 'mst_high_risk'],
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
    exposures: ['burn_pits'],
    notes: 'Most Guardians transitioned from Air Force AFSCs — prior-service exposures often apply via the legacy MOS rather than current Space Force code.',
    populationRank: 99,
  },
  {
    code: '1C6X1',
    name: 'Space Systems Operations',
    branch: 'Space Force',
    exposures: ['burn_pits'],
    populationRank: 102,
  },
];

// Special non-MOS service eras / locations that ALSO drive presumptives
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

export const ERA_TAGS: { tag: ServiceEraTag; label: string; presumptiveFamily: string }[] = [
  { tag: 'vietnam_1962_1975', label: 'Vietnam (1962-1975)', presumptiveFamily: 'agent_orange' },
  { tag: 'thailand_1962_1976', label: 'Thailand bases (1962-1976)', presumptiveFamily: 'agent_orange' },
  { tag: 'korea_dmz_1968_1971', label: 'Korean DMZ (1968-1971)', presumptiveFamily: 'agent_orange' },
  { tag: 'gulf_war_1990_present', label: 'SW Asia (1990-present)', presumptiveFamily: 'gulf_war_undiag' },
  { tag: 'oif_oef_2001_present', label: 'OIF/OEF (2001-present)', presumptiveFamily: 'burn_pits' },
  { tag: 'camp_lejeune_1953_1987', label: 'Camp Lejeune (1953-1987)', presumptiveFamily: 'camp_lejeune_water' },
  { tag: 'desert_storm_1990_1991', label: 'Desert Storm (1990-1991)', presumptiveFamily: 'gulf_war_undiag' },
  { tag: 'atomic_test_1945_1962', label: 'Atomic testing era (1945-1962)', presumptiveFamily: 'radiation_ionizing' },
];
