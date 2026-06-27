/**
 * Exposure → presumptive claims map.
 *
 * For each exposure type, lists the conditions VA presumes service-connected
 * under 38 CFR (or PACT Act / specific legislation). Each presumptive entry
 * cites the regulation so users can verify.
 *
 * NOT a complete list — covers the most-commonly-missed conditions per exposure.
 * "Missed claims" tool surfaces these; the existing condition pages handle full detail.
 */

import type { Exposure } from './mos-profiles';

export type PresumptiveClaim = {
  condition: string;            // human-readable condition name
  dcCode?: string;              // diagnostic code if there's a clean mapping
  cfrCite: string;              // the regulation that makes it presumptive
  notes?: string;               // why it's frequently missed
  conditionPagePath?: string;   // optional link to existing /conditions/<path>
};

export const EXPOSURE_PRESUMPTIVES: Record<Exposure, PresumptiveClaim[]> = {
  noise: [
    { condition: 'Tinnitus', dcCode: '6260', cfrCite: '38 CFR § 4.87 + §3.385',
      notes: 'Flat 10% — easiest VA claim to win and the most commonly missed if vet doesn\'t realize it\'s ratable.',
      conditionPagePath: '/conditions/neurological/tinnitus' },
    { condition: 'Sensorineural Hearing Loss', dcCode: '6100', cfrCite: '38 CFR § 4.85 + §3.385',
      notes: 'Even mild bilateral loss often rates 0% but service-connected status enables secondary tinnitus and protects against future degradation.' },
  ],
  asbestos: [
    { condition: 'Mesothelioma', cfrCite: 'VA M21-1 IV.ii.2.C',
      notes: 'Long latency (20-40yr). Even decades after service, asbestos-exposed MOS = strong nexus.' },
    { condition: 'Asbestosis', cfrCite: 'VA M21-1 IV.ii.2.C' },
    { condition: 'Lung cancer (asbestos-related)', cfrCite: 'VA M21-1 IV.ii.2.C',
      notes: 'Smoking history doesn\'t bar the claim if asbestos exposure documented.' },
    { condition: 'Pleural plaques', cfrCite: 'VA M21-1 IV.ii.2.C' },
  ],
  burn_pits: [
    { condition: 'Asthma diagnosed after service', dcCode: '6602', cfrCite: 'PACT Act §403 / 38 CFR §3.320',
      notes: 'PACT Act made this presumptive for SW Asia / Afghanistan deployments. Massively under-claimed pre-2022.',
      conditionPagePath: '/conditions/respiratory/asthma' },
    { condition: 'Chronic rhinitis / sinusitis', cfrCite: 'PACT Act §403',
      notes: '"Constrictive bronchiolitis" and chronic rhinitis are both on the PACT Act list.',
      conditionPagePath: '/conditions/respiratory/rhinitis' },
    { condition: 'Constrictive bronchiolitis', cfrCite: 'PACT Act §403' },
    { condition: 'Pulmonary hypertension', cfrCite: 'PACT Act §403' },
    { condition: 'Glioblastoma + select brain cancers', cfrCite: 'PACT Act §403' },
    { condition: 'Lymphomas of any type', cfrCite: 'PACT Act §403' },
  ],
  agent_orange: [
    { condition: 'Type 2 Diabetes Mellitus', dcCode: '7913', cfrCite: '38 CFR §3.309(e)',
      notes: 'Among the most-claimed and most-granted AO presumptives.',
      conditionPagePath: '/conditions/endocrine/diabetes' },
    { condition: 'Ischemic Heart Disease', cfrCite: '38 CFR §3.309(e)' },
    { condition: 'Parkinson\'s Disease', cfrCite: '38 CFR §3.309(e)' },
    { condition: 'Prostate cancer', cfrCite: '38 CFR §3.309(e)' },
    { condition: 'Multiple myeloma', cfrCite: '38 CFR §3.309(e)' },
    { condition: 'Hypertension', dcCode: '7101', cfrCite: 'PACT Act §406 (added 2022)',
      notes: 'New as of 2022 — many older Vietnam vets haven\'t re-filed since the addition.',
      conditionPagePath: '/conditions/cardiovascular/hypertension' },
  ],
  gulf_war_undiag: [
    { condition: 'Chronic Fatigue Syndrome', cfrCite: '38 CFR §3.317(a)(2)(i)(B)(1)' },
    { condition: 'Fibromyalgia', cfrCite: '38 CFR §3.317(a)(2)(i)(B)(2)' },
    { condition: 'IBS / functional GI disorder', dcCode: '7319', cfrCite: '38 CFR §3.317(a)(2)(i)(B)(3)',
      conditionPagePath: '/conditions/digestive/ibs' },
    { condition: 'Undiagnosed muscle / joint pain', cfrCite: '38 CFR §3.317(a)(2)(ii)',
      notes: 'Use §3.317 when conventional diagnostics return no clear etiology.' },
    { condition: 'Undiagnosed sleep disturbances', cfrCite: '38 CFR §3.317(a)(2)(ii)' },
    { condition: 'Undiagnosed neurological symptoms', cfrCite: '38 CFR §3.317(a)(2)(ii)' },
  ],
  camp_lejeune_water: [
    { condition: 'Kidney cancer', cfrCite: '38 CFR §3.309(f)' },
    { condition: 'Liver cancer', cfrCite: '38 CFR §3.309(f)' },
    { condition: 'Non-Hodgkin lymphoma', cfrCite: '38 CFR §3.309(f)' },
    { condition: 'Adult leukemia', cfrCite: '38 CFR §3.309(f)' },
    { condition: 'Multiple myeloma', cfrCite: '38 CFR §3.309(f)' },
    { condition: 'Parkinson\'s Disease', cfrCite: '38 CFR §3.309(f)' },
    { condition: 'Aplastic anemia / MDS', cfrCite: '38 CFR §3.309(f)' },
    { condition: 'Bladder cancer', cfrCite: '38 CFR §3.309(f)' },
  ],
  depleted_uranium: [
    { condition: 'Kidney dysfunction', cfrCite: 'VA EHC + VHA Directive 2007-051',
      notes: 'Vets in OIF tank crews / vehicle recovery may not realize DU exposure was tracked. Request DU surveillance records.' },
    { condition: 'Respiratory cancers (DU-correlated)', cfrCite: 'PACT Act §403 (overlaps with burn pits)' },
  ],
  jet_fuel_jp8: [
    { condition: 'Respiratory conditions (PACT)', cfrCite: 'PACT Act §403' },
    { condition: 'Chronic dermatitis', dcCode: '7806', cfrCite: 'M21-1 IV.ii.2.C' },
    { condition: 'Liver / kidney symptoms', cfrCite: 'VA Public Health JP-8 page' },
  ],
  lead: [
    { condition: 'Hypertension', dcCode: '7101', cfrCite: 'M21-1 IV.ii.2.C',
      notes: 'Chronic lead exposure (small arms instructors, indoor ranges) maps to hypertension.',
      conditionPagePath: '/conditions/cardiovascular/hypertension' },
    { condition: 'Kidney dysfunction', cfrCite: 'M21-1 IV.ii.2.C' },
    { condition: 'Peripheral neuropathy', cfrCite: 'M21-1 IV.ii.2.C' },
  ],
  radiation_ionizing: [
    { condition: 'Most cancers (broad presumption)', cfrCite: '38 CFR §3.309(d)',
      notes: 'Radiation-Risk Activities list at §3.309(d)(3) — atomic test participation, occupation of Hiroshima/Nagasaki, nuclear weapons handling.' },
  ],
  mustard_gas: [
    { condition: 'Respiratory cancers, skin cancer, leukemia', cfrCite: '38 CFR §3.316',
      notes: 'WWII-era mustard gas testing — small but real population.' },
  ],
  particulate_matter: [
    { condition: 'Same list as burn_pits — overlapping PACT Act coverage', cfrCite: 'PACT Act §403' },
  ],
  pfas: [
    { condition: 'Testicular cancer', cfrCite: 'M21-1 update 2024 — AFFF / PFAS exposure' },
    { condition: 'Kidney cancer', cfrCite: 'M21-1 update 2024' },
    { condition: 'Thyroid disease', cfrCite: 'M21-1 update 2024' },
    { condition: 'Ulcerative colitis', cfrCite: 'M21-1 update 2024' },
  ],
  tbi_blast: [
    { condition: 'TBI residuals', dcCode: '8045', cfrCite: '38 CFR §4.124a',
      notes: 'Combat / blast exposure makes nexus straightforward — most missed because veterans don\'t realize sub-concussive blast counts.',
      conditionPagePath: '/conditions/neurological/tbi' },
    { condition: 'PTSD secondary to TBI', dcCode: '9411', cfrCite: '38 CFR §3.310',
      conditionPagePath: '/conditions/mental-health/ptsd' },
    { condition: 'Migraines secondary to TBI', dcCode: '8100', cfrCite: '38 CFR §3.310',
      conditionPagePath: '/conditions/neurological/migraines' },
  ],
  mst_high_risk: [
    { condition: 'PTSD secondary to MST', dcCode: '9411', cfrCite: '38 CFR §3.304(f)(5)',
      notes: 'MST cases use relaxed evidentiary standard. Front-line and isolated-MOS settings have higher documented incidence.',
      conditionPagePath: '/conditions/mental-health/ptsd' },
  ],
};
