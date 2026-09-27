export const business = {
  name: 'Parkway Fabrications',
  phone: '0114 242 2733',
  phoneHref: 'tel:+441142422733',
  email: 'sales@parkwayfabrications.co.uk',
  address: ['4 Colwall Street', 'Sheffield', 'S9 3WP', 'United Kingdom']
};

const shared = {
  assurance: 'Capacity, tolerances, materials and acceptance are confirmed against the supplied drawing and Parkway’s written quotation—not assumed from a generic capability table.'
};

export const services = {
  '/laser-cutting/': {
    slug: 'laser-cutting', eyebrow: 'Precision profiling', title: 'Laser Cutting Sheffield', shortTitle: 'Laser cutting',
    description: 'Drawing-led sheet metal laser cutting in Sheffield, with CNC folding, welding and fabrication available as one connected production route.',
    intro: 'Send a drawing with material, thickness and quantity. Parkway can review the geometry, nesting considerations and any downstream operations before quoting a manufacturing route.',
    imageKey: 'fibre-laser-cutting', imageLabel: 'Approved Parkway fibre laser cutting photography',
    stages: ['Drawing and CAD review', 'Material and nesting plan', 'Laser profiling', 'Part identification and inspection', 'Folding, welding or dispatch'],
    procurement: [
      ['A quote-ready drawing', 'Supply a dimensioned PDF alongside DXF, DWG, STEP or STP data where available. Identify critical features rather than leaving every dimension implicit.'],
      ['A complete requirement', 'State material grade, thickness, quantity, finish, required date and whether parts continue into folding, welding or assembly.'],
      ['A repeatable route', 'For repeat batches, agree revision control, part identification, packaging and the features that need inspection before production.']
    ],
    applications: ['Flat profiles and blanks', 'Folded component kits', 'Brackets, plates and panels', 'Parts for welded assemblies', 'One-off and prototype enquiries', 'Repeat-production enquiries'],
    faq: [
      ['What information should I send for a laser cutting quote?', 'A dimensioned drawing, material grade, thickness, quantity, required date and downstream operations provide the strongest basis for review.'],
      ['Can Parkway work on one-offs, prototypes and repeat batches?', 'All three enquiry types can be submitted. Feasibility, commercial fit and current capacity are confirmed during quotation.'],
      ['Can laser-cut parts be folded or welded?', 'Yes. Ask Parkway to assess CNC folding, welding and fabrication within the same manufacturing route.'],
      ['Which drawing formats can I upload?', 'The secure enquiry form accepts DXF, DWG, STEP, STP, PDF, SVG, JPG and PNG. Parkway will confirm whether the supplied information is sufficient for manufacture.'],
      ['What laser thicknesses and tolerances are available?', 'These details remain intentionally unpublished until Parkway verifies material-specific limits and inspection criteria. Send the drawing for a project-specific response.']
    ], ...shared
  },
  '/metal-fabrication/': {
    slug: 'metal-fabrication', eyebrow: 'Integrated manufacture', title: 'Metal Fabrication Sheffield', shortTitle: 'Metal fabrication',
    description: 'Bespoke metal fabrication in Sheffield, planned around drawings and a joined-up route from profile to finished assembly.',
    intro: 'Parkway supports requirements where profiling, forming and welding must work together. Interfaces, access, handling, finish and inspection are considered before fabrication begins.',
    imageKey: 'bespoke-fabrication', imageLabel: 'Approved Parkway fabrication and assembly photography',
    stages: ['Scope and drawing review', 'Cutting and preparation', 'CNC forming', 'Fit-up and welding', 'Inspection, finish and dispatch'],
    procurement: [['Define the assembly', 'Identify interfaces, datum points, critical dimensions and any parts supplied by others.'], ['Specify the finish', 'Describe visual, corrosion and handling requirements; Parkway will confirm available finishing routes.'], ['Control revisions', 'Provide a drawing revision and make changes explicit before manufacture.']],
    applications: ['Frames and supports', 'Guards and enclosures', 'Brackets and assemblies', 'Plant components', 'Project-specific metalwork'],
    faq: [['Do you manufacture bespoke fabrications?', 'Yes. Bespoke solutions are manufactured around project requirements; send drawings and a specification for review.'], ['Can Parkway coordinate multiple processes?', 'Enquiries can combine profiling, CNC folding, welding and fabrication, subject to technical review.'], ['Which materials can be fabricated?', 'Material suitability is project-specific and must be confirmed against the drawing and intended use.']], ...shared
  },
  '/cnc-folding/': {
    slug: 'cnc-folding', eyebrow: 'Controlled forming', title: 'CNC Folding Sheffield', shortTitle: 'CNC folding',
    description: 'Sheet metal folding and press-brake forming in Sheffield, coordinated with laser-cut profiles and subsequent fabrication.',
    intro: 'Fold geometry, tooling access, bend allowance, grain direction, material and quantity influence the route. Parkway reviews those factors before manufacture.',
    imageKey: 'cnc-folding', imageLabel: 'Approved Parkway CNC press-brake photography',
    stages: ['Drawing review', 'Bend sequence planning', 'Tooling and setup', 'CNC forming', 'Dimensional check'],
    procurement: [['Show the formed part', 'Provide bend angles, inside radii, key dimensions and tolerances on the finished geometry.'], ['Identify cosmetic faces', 'Call out faces where tooling marks or handling need specific consideration.'], ['Plan downstream work', 'Explain whether folded parts will be welded, assembled, coated or supplied as components.']],
    applications: ['Folded brackets', 'Panels and covers', 'Trays and channels', 'Enclosure components', 'Fabrication subcomponents'],
    faq: [['What should a folding drawing show?', 'Include material, thickness, bend angles, key dimensions and tolerances. A flat pattern and formed model can both be useful.'], ['Can folded parts proceed to welding?', 'Yes. Welding and broader fabrication can be discussed within the same quotation.'], ['What is Parkway’s press-brake capacity?', 'Capacity figures require client verification and are therefore confirmed project by project.']], ...shared
  },
  '/welding/': {
    slug: 'welding', eyebrow: 'Fabrication and assembly', title: 'Welding Services Sheffield', shortTitle: 'Welding',
    description: 'Welding and fabrication in Sheffield for components and assemblies produced to approved drawings and project-specific requirements.',
    intro: 'Joint design, material, preparation, access, distortion control, finish and inspection requirements should be agreed before manufacture.',
    imageKey: 'welding', imageLabel: 'Approved Parkway welding photography with correct PPE',
    stages: ['Technical and joint review', 'Preparation', 'Fit-up and restraint', 'Welding', 'Inspection and finishing'],
    procurement: [['Define the joint', 'Show weld locations, sizes and any surfaces that must remain clear.'], ['State acceptance needs', 'Identify inspection, appearance or documentation requirements during enquiry.'], ['Consider the complete assembly', 'Provide mating components and datums so fit-up can be assessed before welding.']],
    applications: ['Fabricated assemblies', 'Frames and supports', 'Folded and welded components', 'Repair or replacement enquiries subject to review'],
    faq: [['Which welding process is appropriate?', 'That depends on material, joint, access, appearance and application. Parkway will review the project before confirming a route.'], ['Can you work from CAD files?', 'Upload the available drawings or models with your enquiry so suitability can be assessed.'], ['Which welding codes or qualifications apply?', 'No code or qualification claim is published until documentary verification is complete. State the project requirement when enquiring.']], ...shared
  },
  '/perforated-metal/': {
    slug: 'perforated-metal', eyebrow: 'Patterned sheet solutions', title: 'Perforated Metal Sheffield', shortTitle: 'Perforated metal',
    description: 'Perforated sheet and fabricated perforated components specified around aperture, pitch, margins, material and end use.',
    intro: 'Perforation is a functional specification. Open area, ligament, blank margins, hole orientation and subsequent forming can affect performance and manufacturability.',
    imageKey: 'perforated-metal', imageLabel: 'Approved Parkway perforated sheet detail photography',
    stages: ['Duty and pattern review', 'Aperture and margin planning', 'Sheet processing', 'Forming', 'Fabrication or dispatch'],
    procurement: [['Describe the pattern', 'State hole shape and size, pitch, orientation, margins and any zones that must remain blank.'], ['Explain the duty', 'Screening, guarding, airflow and appearance create different priorities.'], ['Include secondary work', 'Show bends, fixing holes, seams, frames and finish on the complete component.']],
    applications: ['Industrial screens', 'Guards and ventilation panels', 'Machine components', 'Formed perforated parts', 'Replacement panels'],
    faq: [['Which perforation details are needed?', 'State aperture shape and size, pitch, orientation, margins, material, thickness, overall dimensions and quantity.'], ['Can perforated sheet be folded?', 'It may be possible depending on pattern, blank margins and geometry; submit the complete drawing for review.'], ['How is open area confirmed?', 'Provide the functional requirement and pattern. Parkway can confirm what can be assessed during quotation.']], ...shared
  },
  '/granulator-screens/': {
    slug: 'granulator-screens', eyebrow: 'Specialist replacement components', title: 'Granulator Screens', shortTitle: 'Granulator screens',
    description: 'Replacement and custom granulator screen enquiries assessed around machine fit, curvature, aperture pattern, material and operating duty.',
    intro: 'A granulator screen is not simply perforated sheet. Curvature, mounting details, hole pattern, edge condition, wear and machine compatibility must be captured from a controlled drawing or sample specification.',
    imageKey: 'granulator-screens', imageLabel: 'Approved Parkway granulator screen product photography',
    stages: ['Identify machine and duty', 'Capture geometry and interfaces', 'Confirm aperture pattern', 'Form and fabricate', 'Dimensional check before dispatch'],
    procurement: [['Identify the machine', 'Supply manufacturer, model and screen position, while recognising that machines may have variants or modifications.'], ['Measure the complete screen', 'Record length, width, thickness, curvature, fixing details, edge profiles and any reinforced areas.'], ['Define the screening result', 'State aperture shape, size, pitch and orientation, material being processed and the issue with the current component.'], ['Control replacement risk', 'Photographs help identification but should not replace an approved drawing or agreed sample where fit is critical.']],
    applications: ['Replacement granulator screens', 'Custom granulator screens', 'Recycling screens', 'Shredder screen enquiries', 'Curved perforated components', 'Industrial perforated screens'],
    faq: [['What is needed to quote a replacement granulator screen?', 'Provide a controlled drawing where possible, plus machine make and model, dimensions, material, thickness, aperture pattern, quantity and clear photographs.'], ['Can Parkway work from an existing screen?', 'Send details first. Parkway will advise whether a drawing, measurements or access to a representative sample is required.'], ['Are granulator and shredder screens interchangeable?', 'No assumption should be made. Machine interface, curvature, aperture and duty must be reviewed for the specific component.'], ['Can aperture size be changed?', 'A change can affect output and machine behaviour. Provide the required duty and obtain any machine-manufacturer approval needed before manufacture.'], ['Which material gives the best wear life?', 'Material choice depends on duty and remains subject to Parkway’s verified capability and the machine requirement.']], ...shared
  },
  '/bespoke-fabrication/': {
    slug: 'bespoke-fabrication', eyebrow: 'Made to project requirements', title: 'Bespoke Metal Fabrication Sheffield', shortTitle: 'Bespoke fabrication',
    description: 'Custom metalwork in Sheffield developed from buyer-supplied drawings, with connected cutting, folding and welding services.',
    intro: 'Bespoke work starts with a controlled brief. Parkway reviews geometry, materials, quantities, interfaces, finish and delivery needs before proposing the sequence.',
    imageKey: 'bespoke-fabrication', imageLabel: 'Approved Parkway bespoke fabrication photography',
    stages: ['Brief and drawing', 'Manufacturing review', 'Cut and form', 'Fabricate and inspect', 'Finish and delivery'],
    procurement: [['Define function and interfaces', 'Explain what the fabrication must do and how it connects to surrounding equipment or structures.'], ['Separate critical from indicative', 'Identify the dimensions, surfaces and features that govern fit or performance.'], ['Supply an approval basis', 'Use controlled drawings and agree what constitutes acceptance before manufacture.']],
    applications: ['Custom brackets and supports', 'Guards and enclosures', 'Fabricated assemblies', 'Replacement components', 'Drawing-led industrial metalwork'],
    faq: [['Can you help with one-off work?', 'One-off, prototype and repeat requirements can be submitted for review; acceptance depends on scope and capacity.'], ['Which materials are available?', 'Material suitability is project-specific. Contact Parkway to discuss specialist materials and requirements.'], ['Can one enquiry include cutting, folding and welding?', 'Yes. Supply the complete assembly information so the connected route can be reviewed.']], ...shared
  }
};
