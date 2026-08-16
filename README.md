# vadm-data — Open VA Disability Reference Data

Open-source structured reference data for educational projects concerning U.S. Department of
Veterans Affairs disability benefits. This repository is maintained as part of
[VA Disability Max](https://www.vadisabilitymax.com), an independent educational resource that is
not affiliated with, endorsed by, or connected to the Department of Veterans Affairs.

The underlying authorities are public federal laws, regulations, and VA publications. The
repository contains no veteran records, account information, medical records, or other personally
identifiable information.

> **Important:** An occupational code, duty description, deployment, or possible exposure is only
> a research lead. It does not establish an exposure, diagnosis, nexus, disability rating, or
> entitlement to benefits. A condition is labeled **presumptive** only when the cited authority
> creates a presumption and the authority's service, location, date, diagnosis, manifestation, and
> other requirements still must be satisfied.

**Authority review:** August 15, 2026. Always re-check the current official source before relying
on these files because eligibility rules and rating criteria can change.

## Datasets

### `data/presumptive-map.ts`

Classifies selected condition/exposure relationships as one of:

- `presumptive` — a cited authority may create a presumption when all qualifying requirements are met;
- `direct` — the ordinary evidence-based service-connection framework applies;
- `secondary` — competent evidence must connect the condition to an established service-connected disability;
- `exposure_lead` — a prompt to investigate and document an individual exposure; or
- `possible_theory` — an educational issue-spotting lead that requires supporting evidence.

The file is deliberately not a complete catalog. Primary authorities include
[38 CFR § 3.303](https://www.ecfr.gov/current/title-38/chapter-I/part-3/section-3.303),
[§ 3.309](https://www.ecfr.gov/current/title-38/chapter-I/part-3/section-3.309),
[§ 3.310](https://www.ecfr.gov/current/title-38/chapter-I/part-3/section-3.310),
[§ 3.316](https://www.ecfr.gov/current/title-38/chapter-I/part-3/section-3.316),
[§ 3.317](https://www.ecfr.gov/current/title-38/chapter-I/part-3/section-3.317), and
[§ 3.320](https://www.ecfr.gov/current/title-38/chapter-I/part-3/section-3.320).

### `data/mos-profiles.ts`

Military occupational specialty, AFSC, rating, and branch entries used to suggest topics a
veteran may want to investigate. The exposure tags describe possible duty-related leads only.
They are not an official VA exposure finding, a medical-causation opinion, or a presumption based
on MOS alone. The `populationRank` field is an internal display-priority value, not official force
population data. Location- and deployment-dependent categories are intentionally not inferred from
an MOS profile; the veteran's actual service history must be screened separately.

### Removed unsafe coaching content

The former `data/dc-content.ts` file was removed in August 2026. It mixed rating criteria with
"what not to say," outcome-oriented wording, and unsupported shortcuts. VADM does not encourage
symptom scripting or exaggeration. Veterans should describe their history, symptoms, frequency,
severity, and functional effects completely and truthfully.

## Use cases

- Educational reference and research
- Audit of classification and citation logic
- Starting point for independently verified veteran-benefits tools
- Contributions that add current primary-source citations

Do not use this repository as a substitute for current regulations, medical evidence, or help
from a VA-accredited representative.

## License

The data files are released under the [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/).
The underlying U.S. government regulatory text is public domain; the original selection and
structuring in this repository is licensed under CC BY 4.0.

## VA Disability Max access

Public condition guides remain free. Personalized workspace features, Claim Coach, and packet
exports may require a paid plan. Current access terms and pricing are listed on the
[VADM pricing page](https://www.vadisabilitymax.com/pricing).

## Contributing

Pull requests are welcome for corrections and additions supported by current primary authority.
Every proposed presumption must identify the exact statute or regulation and every eligibility
condition. Do not submit speculative medical-causation claims, outcome promises, symptom scripts,
or an MOS-to-condition association presented as proof.

## Maintainer

Built and maintained by [Jesse Gomez](https://github.com/jesseg9163), creator of
[VA Disability Max](https://www.vadisabilitymax.com).

Educational information only; not an official VA decision or accredited representation.
