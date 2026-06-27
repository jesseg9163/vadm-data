# vadm-data — Open VA Disability Reference Data

Open-source structured data for the U.S. Department of Veterans Affairs disability claim system.
Maintained as part of the [vadisabilitymax.com](https://vadisabilitymax.com) project — a free
suite of regulation-grounded tools for veterans navigating VA disability claims.

All data here is sourced from **public federal regulations and VA publications**:
- 38 CFR Part 3 (presumptive service connection)
- 38 CFR Part 4 (rating schedule)
- PACT Act of 2022
- VA M21-1 Adjudication Procedures Manual
- VA Public Health publications

No private VA records. No personally identifiable veteran information. Just the structured data
of *which conditions, exposures, and military occupational specialties (MOS) are connected to
which presumptive claims under federal law.*

---

## Datasets

### `data/presumptive-map.ts`

Mapping of exposure categories to the conditions VA presumes service-connected under the relevant
regulation. Covers Agent Orange, burn pits (PACT Act), Camp Lejeune contaminated water, ionizing
radiation, depleted uranium, asbestos, jet fuel / JP-8, lead, particulate matter, PFAS, and Gulf
War undiagnosed illness.

Every entry cites the underlying 38 CFR section or statutory authority.

### `data/mos-profiles.ts`

116 military occupational specialty (MOS / AFSC / Navy rating) profiles across all six service
branches (Army, Marines, Navy, Air Force, Coast Guard, Space Force). Each entry maps the MOS to:

- Documented service-related exposures
- Population rank (relative density of the MOS)
- Branch and full job name
- Brief context note

Includes the most-populated combat arms (11B, 0311, 13B), support (88M, 68W, 42A), aviation (AD,
15T, 2A3X3, 3E0X1), and specialized roles (EOD, Special Forces, AFSOC).

### `data/dc-content.ts`

Per-condition lead-magnet content for the top ~20 most-trafficked VA diagnostic codes (DC 6502
nasal septum, 7900 hyperthyroidism, 6732 pleurisy, 9411 PTSD, 6847 sleep apnea, 6260 tinnitus,
etc.). For each: a "what NOT to say" set of common veteran mistakes and the C&P exam framing
that maps to higher rating tiers.

Content drawn directly from existing /dbq-guides/* publications and the schedule criteria in 38
CFR Part 4 — no invented regulations, no fabricated cites.

---

## Use cases

- Reference for veterans research projects
- Input data for VA-disability-related tools (calculators, claim builders, decision support)
- Training data for question-answering systems focused on VA benefits
- Audit / verification of presumptive eligibility logic
- Academic research on veteran population health and claim patterns

---

## License

These data files are released under the [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/).
Attribution to vadisabilitymax.com appreciated when used.

The underlying regulatory text is **public domain** as U.S. government work. This repository's
*structuring* of that data is what is licensed.

---

## Related free tools

- [vadisabilitymax.com/missed-claims](https://vadisabilitymax.com/missed-claims) — interactive
  MOS-and-era personalizer that uses this data to surface conditions you may be missing on a claim
- [vadisabilitymax.com/dbq-guides](https://vadisabilitymax.com/dbq-guides) — 18 plain-English
  Disability Benefits Questionnaire field guides for the conditions vets file most
- [vadisabilitymax.com/nexus-letters](https://vadisabilitymax.com/nexus-letters) — anatomy of a
  strong nexus letter plus 5 free sample templates for the most-claimed secondary connections
- [vadisabilitymax.com/find-vso](https://vadisabilitymax.com/find-vso) — state-by-state directory
  of every currently VA-accredited attorney, claims agent, and VSO (pulled from the VA Office of
  General Counsel public list)

Everything on vadisabilitymax.com is free, no signup required.

---

## Contributing

PRs welcome for:
- New MOS profiles with documented exposure citations
- Presumptive-claim additions when new VA regulations are published
- Corrections to existing entries (cite the regulation in your PR description)

Please **do not** submit speculative entries — every exposure tag must be defensible by reference
to 38 CFR, the PACT Act, M21-1, or a VA Public Health publication. The bar is "could a VA rater
defend this on paper." Speculative or wishful-thinking entries get rejected.

---

## Maintainer

Built and maintained by [Jesse Gomez](https://github.com/jesseg9163), creator of
[vadisabilitymax.com](https://vadisabilitymax.com).

Not affiliated with, endorsed by, or connected to the U.S. Department of Veterans Affairs.
