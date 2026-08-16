/**
 * Exposure and service-history issue-spotting map.
 *
 * IMPORTANT: an MOS or exposure tag is not proof of exposure, diagnosis, nexus,
 * service connection, or rating. "Presumptive" means only that the cited authority
 * may supply a presumption after every qualifying requirement is satisfied.
 *
 * Authority review: 2026-08-15.
 */

import type { Exposure } from './mos-profiles';

export type ClaimClassification =
  | 'presumptive'
  | 'direct'
  | 'secondary'
  | 'exposure_lead'
  | 'possible_theory';

export type ClaimTheory = {
  condition: string;
  classification: ClaimClassification;
  authority: string;
  requirements: string;
  dcCode?: string;
  conditionPagePath?: string;
};

const directEvidenceRule =
  'Requires evidence of a current disability and an individual connection to service; the tag alone is not proof.';

export const EXPOSURE_CLAIM_THEORIES: Record<Exposure, ClaimTheory[]> = {
  noise: [{
    condition: 'Tinnitus or hearing loss',
    classification: 'possible_theory',
    authority: '38 CFR §§ 3.303, 3.385; 38 CFR §§ 4.85, 4.87',
    requirements: 'MOS or duty history may help document noise exposure, but neither condition is presumed from MOS alone. Diagnosis and nexus evidence remain case-specific.',
  }],
  asbestos: [{
    condition: 'Respiratory disease potentially associated with an individually documented asbestos exposure',
    classification: 'exposure_lead',
    authority: '38 CFR § 3.303',
    requirements: directEvidenceRule,
  }],
  burn_pits: [
    {
      condition: 'Asthma, rhinitis, or sinusitis',
      classification: 'presumptive',
      authority: '38 CFR § 3.320(a)',
      requirements: 'Requires a listed diagnosis and a qualifying period and location of service under § 3.320(a)(5), subject to the exceptions in § 3.320(b).',
    },
    {
      condition: 'Rare respiratory cancer listed in § 3.320(a)(3)',
      classification: 'presumptive',
      authority: '38 CFR § 3.320(a)(3)',
      requirements: 'Only the cancers specifically listed in the regulation qualify under this provision; qualifying service and the § 3.320(b) exceptions still apply.',
    },
  ],
  agent_orange: [{
    condition: 'Disease specifically listed in 38 CFR § 3.309(e)',
    classification: 'presumptive',
    authority: '38 CFR §§ 3.307(a)(6), 3.309(e)',
    requirements: 'Requires qualifying herbicide exposure or qualifying service and a listed disease; manifestation and rebuttal rules must also be checked.',
  }],
  gulf_war_undiag: [{
    condition: 'Qualifying chronic disability, including an undiagnosed illness or qualifying medically unexplained chronic multisymptom illness',
    classification: 'presumptive',
    authority: '38 CFR § 3.317',
    requirements: 'Requires Persian Gulf veteran status, objective indications, chronicity, timing, and the other requirements and exceptions in § 3.317.',
  }],
  camp_lejeune_water: [{
    condition: 'Disease specifically listed in 38 CFR § 3.309(f)',
    classification: 'presumptive',
    authority: '38 CFR §§ 3.307(a)(7), 3.309(f)',
    requirements: 'Requires at least 30 days of qualifying Camp Lejeune service between August 1, 1953, and December 31, 1987, plus a listed disease and applicable rebuttal rules.',
  }],
  depleted_uranium: [{
    condition: 'Disability potentially associated with an individually documented depleted-uranium exposure',
    classification: 'exposure_lead',
    authority: '38 CFR § 3.303',
    requirements: directEvidenceRule,
  }],
  jet_fuel_jp8: [{
    condition: 'Disability potentially associated with an individually documented fuel exposure',
    classification: 'exposure_lead',
    authority: '38 CFR § 3.303',
    requirements: directEvidenceRule,
  }],
  lead: [{
    condition: 'Disability potentially associated with an individually documented lead exposure',
    classification: 'exposure_lead',
    authority: '38 CFR § 3.303',
    requirements: directEvidenceRule,
  }],
  radiation_ionizing: [{
    condition: 'Disease specifically listed for a radiation-exposed veteran',
    classification: 'presumptive',
    authority: '38 CFR § 3.309(d)',
    requirements: 'Requires a listed disease and participation in a defined radiation-risk activity; occupational exposure by itself does not automatically satisfy § 3.309(d).',
  }],
  mustard_gas: [{
    condition: 'Condition specifically listed following qualifying full-body exposure',
    classification: 'presumptive',
    authority: '38 CFR § 3.316',
    requirements: 'Requires the qualifying exposure type and a disease listed for that exposure, subject to the regulation’s exceptions.',
  }],
  particulate_matter: [{
    condition: 'Disease specifically listed in 38 CFR § 3.320(a)(2) or (3)',
    classification: 'presumptive',
    authority: '38 CFR § 3.320',
    requirements: 'Requires qualifying service and a listed disease, subject to the exceptions in § 3.320(b).',
  }],
  pfas: [{
    condition: 'Disability potentially associated with an individually documented PFAS or AFFF exposure',
    classification: 'exposure_lead',
    authority: '38 CFR § 3.303',
    requirements: 'No blanket VA disability presumption is asserted here. Exposure, diagnosis, and medical relationship require individual evidence.',
  }],
  tbi_blast: [
    {
      condition: 'TBI residuals',
      classification: 'direct',
      authority: '38 CFR § 3.303; 38 CFR § 4.124a, DC 8045',
      requirements: 'Requires competent evidence of TBI and current residuals connected to service; a blast-risk occupation is not a diagnosis or nexus.',
      dcCode: '8045',
      conditionPagePath: '/conditions/neurological/tbi',
    },
    {
      condition: 'Condition claimed as secondary to an established service-connected TBI',
      classification: 'secondary',
      authority: '38 CFR § 3.310',
      requirements: 'Requires an established primary disability and competent evidence satisfying § 3.310; only the specific § 3.310(d) TBI presumptions apply automatically when their requirements are met.',
    },
  ],
  mst_high_risk: [{
    condition: 'PTSD based on an in-service personal assault',
    classification: 'direct',
    authority: '38 CFR § 3.304(f)(5)',
    requirements: 'The regulation permits evidence from sources other than service records and evidence of behavior changes. An occupational tag does not establish that an assault occurred.',
    dcCode: '9411',
    conditionPagePath: '/conditions/mental-health/ptsd',
  }],
};

/**
 * @deprecated Use EXPOSURE_CLAIM_THEORIES and inspect each entry's classification.
 * This alias remains temporarily for consumers of the original public data shape.
 */
export const EXPOSURE_PRESUMPTIVES = EXPOSURE_CLAIM_THEORIES;
