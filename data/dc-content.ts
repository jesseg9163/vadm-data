/**
 * Per-condition content for DontSayBox + ConditionLeadMagnet.
 * Keyed by diagnostic code NUMBER (e.g., "9411") matching entry.dc in DC_CODES.
 *
 * Coverage: top ~20 highest-traffic DC pages based on visitor analytics
 * (audit ran 2026-06-26 — see Analytics → top DC paths in Neon).
 * Other ~700 DC pages render unchanged when DC_CONTENT[code] returns undefined.
 *
 * Content is drawn from existing /dbq-guides/* DontSay blocks where applicable
 * and from the schedule criteria in 38 CFR Part 4 — no invented CFR cites, no
 * regulatory claims that aren't on the books.
 */

import type { DontSayItem } from '@/components/diagnostic-codes/DontSayBox';

export const DC_CONTENT: Record<string, {
  condition: string;
  dontSay: DontSayItem[];
  magnet: { title: string; bullets: string[] };
}> = {
  '9411': { // PTSD — 38 CFR § 4.130
    condition: 'PTSD',
    dontSay: [
      { bad: "I'm doing okay most days.", why: "Reads as mild impairment. The rubric scales on occupational and social impairment — describe the bad days." },
      { bad: "I just don't go out much anymore.", why: "Sounds preferential. The 70% trigger is 'inability to establish and maintain effective relationships' — name the symptoms behind the withdrawal." },
      { bad: "I manage with medication.", why: "Reads as well-controlled. The schedule rates impairment REGARDLESS of treatment — describe the symptoms that persist." },
      { bad: "I haven't tried to hurt myself recently.", why: "Examiner notes 'no current SI/HI.' If you have past ideation, history of attempts, or persistent passive thoughts — the 70%/100% tiers require those be on the record." },
    ],
    magnet: { title: 'PTSD C&P Cheat Sheet', bullets: [
      'The 8 symptom domains examiners must rate — and what they are scoring',
      'Exact CFR phrases that map to each tier (10/30/50/70/100%)',
      'How to describe a panic attack so it actually counts as one',
    ]},
  },
  '6847': { // Sleep Apnea — 38 CFR § 4.97
    condition: 'Sleep Apnea',
    dontSay: [
      { bad: "The CPAP works great, I sleep fine now.", why: "Reads as no impairment. The 50% rating is prescribed for USE of a breathing assistance device — you don't need symptoms to be CURRENT, you need the prescription." },
      { bad: "I only use it sometimes.", why: "Reads as no medical necessity. Document continuous prescribed use — adherence data from the CPAP itself is strong evidence." },
      { bad: "It started after I left the service.", why: "Service connection becomes harder. Map symptoms back to in-service complaints (fatigue, snoring, daytime sleepiness) — buddy statements help." },
    ],
    magnet: { title: 'Sleep Apnea C&P Cheat Sheet', bullets: [
      'The CPAP prescription is the 50% trigger — exact documentation that wins',
      'Secondary service connection: which conditions presume sleep apnea',
      'What "respiratory failure" looks like on the schedule (100%)',
    ]},
  },
  '6260': { // Tinnitus
    condition: 'Tinnitus',
    dontSay: [
      { bad: "It comes and goes.", why: "Sounds like it might not be recurrent. The 10% rating requires PERSISTENT or RECURRENT — describe it as constant or daily." },
      { bad: "I had hearing protection so it can't be service-related.", why: "Service connection still applies. Documented noise exposure with your MOS is enough — protection doesn't eliminate causation." },
      { bad: "It's worse in one ear.", why: "Severity doesn't affect the rating. Tinnitus is a flat 10% regardless of one- vs two-ear or severity — only persistence matters." },
    ],
    magnet: { title: 'Tinnitus C&P Cheat Sheet', bullets: [
      'Why tinnitus is the easiest 10% to win — and the easiest to lose to a paperwork mistake',
      'MOS noise-exposure lookup: presumptive evidence from your DD-214',
      'How tinnitus chains to other secondary conditions',
    ]},
  },
  '8100': { // Migraines
    condition: 'Migraines',
    dontSay: [
      { bad: "I just take something and power through.", why: "Reads as not prostrating. The 30%/50% tiers require attacks that stop you cold — describe the lying-down-in-the-dark days." },
      { bad: "They come and go.", why: "Examiner needs a number. Quantify: 'on average X prostrating attacks per month over the last several months' is the magic phrase from the schedule." },
      { bad: "It doesn't really affect my job.", why: "Cuts the 50% trigger. The 'severe economic inadaptability' language requires you describe work missed or reduced — document it." },
    ],
    magnet: { title: 'Migraines C&P Cheat Sheet', bullets: [
      'The word "prostrating" — what it means and how to put it on the record',
      'Frequency log template — what the schedule actually requires',
      '50% vs TDIU: when migraines are unemployability rather than schedular',
    ]},
  },
  '5237': { // Lumbosacral / Cervical Strain (back)
    condition: 'Back',
    dontSay: [
      { bad: "It hurts most days but I can still work.", why: "Sounds like minimal limitation. The schedule rates on degrees of forward flexion — pain alone isn't measured, motion limitation is." },
      { bad: "I take it easy when it flares up.", why: "Reads as functional preservation. Describe what you CAN'T do during a flare — that's the §4.40 functional loss the examiner should record." },
      { bad: "It comes and goes, I just live with it.", why: "Schedule needs measurements. The examiner uses a goniometer — without specific degree readings, your rating defaults low." },
    ],
    magnet: { title: 'Back C&P Cheat Sheet', bullets: [
      'Forward flexion degrees that map to each tier (40°, 30°, 20°, ankylosis)',
      'The §4.40 / §4.45 functional loss multipliers most veterans miss',
      'Radiculopathy: separately compensable, often missed in spine claims',
    ]},
  },
  '5260': { // Knee — limitation of flexion
    condition: 'Knee',
    dontSay: [
      { bad: "I can still walk on it.", why: "Schedule rates on flexion + extension degrees + stability — not on whether you can walk. Don't preempt the measurement." },
      { bad: "I have a brace I wear sometimes.", why: "Underestimates instability. If you NEED the brace, say so — recurrent subluxation is separately compensable under DC 5257." },
      { bad: "It only locks up occasionally.", why: "Quantify the frequency. Under-codes like 5258 (dislocated cartilage with frequent locking) require describing how often." },
    ],
    magnet: { title: 'Knee C&P Cheat Sheet', bullets: [
      'The 3 separate ratings most veterans miss: flexion, extension, instability',
      'How painful motion (§4.59) raises a 0% to 10% automatically',
      'Meniscus codes 5258/5259 — when they apply on top of the others',
    ]},
  },
  '9434': { // Major Depressive Disorder
    condition: 'Depression',
    dontSay: [
      { bad: "Some days are okay.", why: "Schedule rates the OVERALL level of impairment. Describe the bad days and the duration — not the moments of relief." },
      { bad: "I have a job, so I'm functional.", why: "Occupational AND social impairment matter. Even with a job, deficiencies in work performance, relationships, mood, or thinking can satisfy higher tiers." },
      { bad: "I don't really tell people about it.", why: "If you're masking, name what you're masking. The General Rating Formula scores the impairment that's present, not just what others see." },
    ],
    magnet: { title: 'Depression / Mental Health C&P Cheat Sheet', bullets: [
      'Same rubric as PTSD — the General Rating Formula applies identically',
      'The 70% trigger: "deficiencies in most areas" — what those areas are',
      'How to separate primary depression from anxiety / PTSD secondaries',
    ]},
  },
  '6100': { // Hearing Loss
    condition: 'Hearing Loss',
    dontSay: [
      { bad: "I can hear fine in quiet rooms.", why: "Schedule uses pure-tone + Maryland CNC scores — not your subjective ability. Don't preempt the test." },
      { bad: "It only bothers me in crowds.", why: "Functional impact matters separately under §4.86 (exceptional patterns) — if certain frequencies are blown out, say so." },
    ],
    magnet: { title: 'Hearing Loss C&P Cheat Sheet', bullets: [
      'Why the Maryland CNC test is required — and what to do if it isn\'t done',
      'Table VI / Table VII — how to read your audiogram BEFORE the exam',
      '§4.86 exceptional patterns — when standard scoring undersells your loss',
    ]},
  },
  '8045': { // TBI
    condition: 'TBI',
    dontSay: [
      { bad: "I'm pretty much back to normal.", why: "Schedule rates the HIGHEST facet — even one Level 3 facet drives a 70%. Don't average across domains in your description." },
      { bad: "I just have some memory issues.", why: "Memory is one of 10 facets. Cover them all: executive function, attention, judgment, social, motor, visual, neurobehavioral, communication, consciousness, orientation." },
    ],
    magnet: { title: 'TBI C&P Cheat Sheet', bullets: [
      'The 10 facets and how each is rated 0-3 (or "total")',
      'Why ONE severe facet sets your whole rating',
      'TBI + PTSD: how to claim both without one undercutting the other',
    ]},
  },

  // ── Wave 2 (added 2026-06-26 based on top-traffic audit) ──

  '6502': { // Nasal Septum Deviation — 38 CFR § 4.97
    condition: 'Deviated Nasal Septum',
    dontSay: [
      { bad: "I can still breathe through one side.", why: "That's exactly the 10% trigger. The schedule awards 10% for 50% obstruction of BOTH passages OR complete obstruction of ONE — being able to breathe through one side doesn't disqualify you." },
      { bad: "It only bothers me when I exercise.", why: "Undersells the obstruction. The exam is about anatomical obstruction percentages — not symptoms. Make sure the examiner measures both passages." },
      { bad: "I had surgery so it's fixed.", why: "If obstruction returned after surgery, document it. Persistent post-surgical obstruction still qualifies for the 10% rating." },
    ],
    magnet: { title: 'Deviated Septum C&P Cheat Sheet', bullets: [
      'The exact 10% trigger: 50% obstruction both sides OR 100% one side',
      'Why this is binary — there is no 20% or 30% for septum alone',
      'Pair with allergic rhinitis (DC 6522) for stacked ratings',
    ]},
  },

  '7900': { // Hyperthyroidism — 38 CFR § 4.119
    condition: 'Hyperthyroidism',
    dontSay: [
      { bad: "My TSH is back in range with meds.", why: "Treatment doesn't reduce the rating. The schedule rates the symptom burden and whether continuous medication is required — both unlock the 10% floor." },
      { bad: "I had my thyroid removed so I'm fine.", why: "Surgical or radioactive iodine treatment leaves residuals that are ratable. Document fatigue, cold intolerance, weight changes, and required lifelong medication." },
      { bad: "I don't have eye symptoms.", why: "Don't preempt the exam. Graves' ophthalmopathy is rated separately under DC 6090 — flag any double vision, dryness, or proptosis." },
    ],
    magnet: { title: 'Hyperthyroidism C&P Cheat Sheet', bullets: [
      'The 30% trigger: tachycardia, tremor, increased pulse pressure together',
      'Residuals after surgery / RAI — what stays ratable',
      'Eye involvement (DC 6090): when to claim Graves\' ophthalmopathy separately',
    ]},
  },

  '6732': { // Pleurisy — 38 CFR § 4.97 (rated as restrictive lung disease)
    condition: 'Pleurisy',
    dontSay: [
      { bad: "The infection cleared up.", why: "Residuals are what's rated. Pleurisy is rated on the chronic restrictive impact — PFTs (FEV-1, FVC, DLCO) drive the percentage." },
      { bad: "I don't get short of breath at rest.", why: "The schedule uses exercise tolerance and PFT numbers, not resting breath. Push for a PFT during the C&P, not just a chest X-ray." },
    ],
    magnet: { title: 'Pleurisy / Restrictive Lung Disease Cheat Sheet', bullets: [
      'PFT numbers that map to each tier (FEV-1 %, FVC %, DLCO %)',
      'Why pleurisy is rated like other restrictive lung disease — not its own scale',
      'Secondary connections: pulmonary infections that follow service exposure',
    ]},
  },

  '9432': { // Bipolar Disorder — 38 CFR § 4.130
    condition: 'Bipolar Disorder',
    dontSay: [
      { bad: "I'm stable on my meds.", why: "Stability on meds doesn't reduce the rating. The General Rating Formula scores impairment regardless of treatment — describe what symptoms persist or what happens during episodes." },
      { bad: "I haven't had a manic episode in a year.", why: "Episode-free intervals don't erase the diagnosis. Rate on the typical impairment pattern across recent history, not the current calm." },
      { bad: "I'm functioning fine at work.", why: "Occupational AND social impairment count separately. If relationships, hygiene, or judgment suffer during cycles, those satisfy higher tiers even if employment is preserved." },
    ],
    magnet: { title: 'Bipolar C&P Cheat Sheet', bullets: [
      'Same General Rating Formula as PTSD/depression — scored on impairment, not diagnosis',
      'Why episode history matters even during euthymic periods',
      'How to document the manic side without undercutting the depressive side',
    ]},
  },

  '9433': { // Persistent Depressive Disorder (Dysthymia) — 38 CFR § 4.130
    condition: 'Persistent Depressive Disorder',
    dontSay: [
      { bad: "It's been like this so long it's just normal for me.", why: "Chronic doesn't mean mild. Persistent depressive disorder by definition is 2+ years — describe how much it has eroded baseline functioning, not just current state." },
      { bad: "I'm not as bad as someone with major depression.", why: "Don't compare. Dysthymia uses the same General Rating Formula as MDD — your tier is set by impairment, not diagnostic label." },
    ],
    magnet: { title: 'Persistent Depressive Disorder C&P Cheat Sheet', bullets: [
      'The General Rating Formula — what it scores and how to translate symptoms',
      'How chronicity (2+ years) actually argues UP, not down',
      'Stacking with anxiety, PTSD, or sleep disturbance',
    ]},
  },

  '9435': { // Unspecified Depressive Disorder — 38 CFR § 4.130
    condition: 'Unspecified Depressive Disorder',
    dontSay: [
      { bad: "They couldn't tell me exactly what type it is.", why: "The 'unspecified' label doesn't affect the rating. The same General Rating Formula applies to all DC 9434/9435 mental health conditions." },
      { bad: "I haven't been to a therapist regularly.", why: "Treatment frequency doesn't lower the rating — but unreported symptoms do. Describe what you experience, even if you haven't formalized it in therapy." },
    ],
    magnet: { title: 'Mental Health C&P Cheat Sheet', bullets: [
      'Why "unspecified" doesn\'t matter for the rating — only impairment does',
      'The 8 symptom domains examiners must score',
      'Documenting symptoms when you haven\'t had consistent care',
    ]},
  },

  '9422': { // Other Specified Somatic Symptom Disorder — 38 CFR § 4.130
    condition: 'Somatic Symptom Disorder',
    dontSay: [
      { bad: "The doctors say there's no physical cause.", why: "That's the point of the diagnosis — and it doesn't lower the rating. The General Rating Formula scores the impairment, not the underlying mechanism." },
      { bad: "I think it's all in my head.", why: "Don't undermine your own claim. Somatic symptom disorder is a recognized mental health diagnosis — describe how the symptoms affect your daily function." },
    ],
    magnet: { title: 'Somatic Symptom Disorder C&P Cheat Sheet', bullets: [
      'Why somatic conditions rate on the same formula as PTSD/depression',
      'How to document occupational and social impairment',
      'The line between physical and mental claims — and why you can have both',
    ]},
  },

  '7337': { // Pruritus Ani — 38 CFR § 4.114 (digestive)
    condition: 'Pruritus Ani',
    dontSay: [
      { bad: "It's just itching, it's not that bad.", why: "Don't minimize. The rating considers persistent symptoms and treatment burden — describe the daily impact, frequency, and any associated bleeding, fissures, or skin breakdown." },
      { bad: "I use over-the-counter cream.", why: "Document everything. Prescription treatments, dietary modifications, and any specialty referrals all support the medical-necessity record." },
    ],
    magnet: { title: 'Pruritus Ani C&P Cheat Sheet', bullets: [
      'How to document a condition with mostly subjective symptoms',
      'Secondary considerations: hemorrhoids (DC 7336), skin conditions',
      'Why frequency, persistence, and treatment burden matter most',
    ]},
  },

  '7816': { // Psoriasis — 38 CFR § 4.118
    condition: 'Psoriasis',
    dontSay: [
      { bad: "It's mostly under control with creams.", why: "BSA % drives the rating, not whether it's controlled. The 10% requires 5–20% of body surface or exposed surface — measure during an active period, not remission." },
      { bad: "I just take a pill for it.", why: "Identify whether it's a systemic therapy. Constant or near-constant systemic therapy (oral or biologic) is the 60% trigger — not just any pill." },
      { bad: "It only flares in winter.", why: "Document the worst period in the last 12 months. The schedule uses the highest BSA % during the past year as the basis." },
    ],
    magnet: { title: 'Psoriasis C&P Cheat Sheet', bullets: [
      'BSA % thresholds: 5%, 20–40%, >40% — how to measure correctly',
      'The systemic therapy ladder: topical → oral/biologic → constant use (60%)',
      'When psoriatic arthritis (DC 5009) stacks on top',
    ]},
  },

  '7715': { // Non-Hodgkin's Lymphoma — 38 CFR § 4.117
    condition: "Non-Hodgkin's Lymphoma",
    dontSay: [
      { bad: "I'm in remission, so I'm fine.", why: "100% applies during active disease and during a treatment phase. After 6 months of no treatment, the schedule transitions to residuals — claim every residual (fatigue, neuropathy, organ damage, secondary cancers)." },
      { bad: "Chemo ended a while ago.", why: "The 6-month clock from cessation of treatment matters. Residuals stay ratable — make sure they're in the record before the rating drops." },
    ],
    magnet: { title: 'Non-Hodgkin\'s Lymphoma C&P Cheat Sheet', bullets: [
      'The 100% window: active disease + treatment phase',
      'PACT Act presumptive coverage — burn-pit exposure and NHL',
      'Residuals to claim after remission: neuropathy, fatigue, organ damage',
    ]},
  },
};
