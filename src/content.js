export const business = {
  name: 'Parkway Fabrications',
  phone: '0114 242 2733',
  phoneHref: 'tel:+441142422733',
  email: 'sales@parkwayfabrications.co.uk',
  address: ['4 Colwall Street', 'Sheffield', 'S9 3WP', 'United Kingdom']
};

export const services = {
  '/laser-cutting/': {
    eyebrow: 'Precision profiling', title: 'Laser Cutting Sheffield',
    description: 'Fibre laser cutting for accurately profiled sheet-metal components, with folding, welding and fabrication available as a connected production route.',
    intro: 'Send Parkway your drawing and project requirements. The team can assess the component, material, quantity and downstream operations before quoting a suitable manufacturing route.',
    stages: ['Drawing review', 'Material planning', 'Laser profiling', 'Inspection', 'Folding or fabrication'],
    faq: [['What information should I send?', 'A dimensioned drawing, material, thickness, quantity and required date provide the best basis for an accurate quotation.'], ['Can laser-cut parts be folded or welded?', 'Yes. Parkway can discuss downstream CNC folding, welding and fabrication as part of the same enquiry.'], ['Which drawing formats can I upload?', 'The secure enquiry form accepts DXF, DWG, STEP, STP, PDF, SVG, JPG and PNG files. Parkway will confirm whether the supplied file is suitable for manufacture.']]
  },
  '/metal-fabrication/': {
    eyebrow: 'Integrated manufacture', title: 'Metal Fabrication Sheffield',
    description: 'Bespoke metal fabrication built around project drawings, practical manufacturing decisions and a joined-up route from profile to finished assembly.',
    intro: 'Parkway supports fabrication requirements where laser cutting, forming and welding need to work together. Scope, materials and finishing requirements are reviewed project by project.',
    stages: ['Scope review', 'Profiling', 'Forming', 'Welding and assembly', 'Finish and dispatch'],
    faq: [['Do you manufacture bespoke fabrications?', 'Yes. Bespoke solutions are manufactured around project requirements; send a drawing or specification for review.'], ['Can Parkway manage multiple processes?', 'Enquiries can combine profiling, CNC folding, welding and fabrication, subject to technical review.']]
  },
  '/cnc-folding/': {
    eyebrow: 'Controlled forming', title: 'CNC Folding Sheffield',
    description: 'Accurate sheet-metal folding and press-brake forming coordinated with laser-cut profiles and subsequent fabrication.',
    intro: 'Fold geometry, tooling access, bend allowance, material and quantity all influence the production route. Parkway reviews these details before manufacture.',
    stages: ['Drawing review', 'Bend planning', 'Tooling setup', 'CNC forming', 'Dimensional check'],
    faq: [['What should a folding drawing show?', 'Include material, thickness, bend angles, key dimensions and tolerances. A flat pattern and formed model can both be useful.'], ['Can folded parts proceed to welding?', 'Yes, welding and wider fabrication can be discussed within the same quotation.']]
  },
  '/welding/': {
    eyebrow: 'Fabrication and assembly', title: 'Welding Services Sheffield',
    description: 'Welding and fabrication for components and assemblies produced around approved drawings and project-specific requirements.',
    intro: 'Joint design, material, access, finish and inspection requirements should be agreed before manufacture. Contact Parkway to discuss specialist materials and requirements.',
    stages: ['Technical review', 'Preparation', 'Fit-up', 'Welding', 'Inspection and finishing'],
    faq: [['Which welding process is appropriate?', 'That depends on the material, joint, finish and application. Parkway will review the project details before confirming a route.'], ['Can you work from my CAD files?', 'Upload the available drawings or models with your enquiry so suitability can be assessed.']]
  },
  '/perforated-metal/': {
    eyebrow: 'Patterned sheet solutions', title: 'Perforated Metal Sheffield',
    description: 'Perforated sheet and fabricated perforated components specified around aperture, pitch, open area, material and end use.',
    intro: 'Perforation is a functional specification. Share the aperture pattern, sheet size, material, quantity and any forming or fabrication needed after profiling.',
    stages: ['Specification review', 'Pattern planning', 'Sheet processing', 'Forming', 'Fabrication'],
    faq: [['Which perforation details are needed?', 'State hole shape and size, pitch, margins, material, thickness, overall dimensions and quantity.'], ['Can perforated sheet be formed?', 'Forming may be possible depending on pattern and geometry; submit the full requirement for review.']]
  },
  '/granulator-screens/': {
    eyebrow: 'Specialist replacement components', title: 'Granulator Screens',
    description: 'Replacement and custom granulator screen enquiries assessed against machine fit, aperture pattern, material and operating requirements.',
    intro: 'A granulator screen is not simply a perforated sheet. Curvature, mounting details, hole pattern, edge condition and machine compatibility all need to be captured from a drawing or sample specification.',
    stages: ['Identify machine and duty', 'Capture geometry', 'Confirm perforation', 'Form and fabricate', 'Check before dispatch'],
    faq: [['What is needed to quote a replacement screen?', 'Provide a drawing where possible, plus machine make/model, dimensions, material, thickness, aperture pattern, quantity and clear photographs.'], ['Can you copy an existing screen?', 'Send details of the existing part first. Parkway will advise what information or sample access is required.'], ['Do you offer shredder screens?', 'Submit the machine and component specification for technical review rather than assuming interchangeability.']]
  },
  '/bespoke-fabrication/': {
    eyebrow: 'Made to project requirements', title: 'Bespoke Metal Fabrication Sheffield',
    description: 'Custom metalwork developed from buyer-supplied drawings and specifications, with connected cutting, folding and welding services.',
    intro: 'Bespoke work starts with a clear brief. Parkway reviews geometry, materials, quantities, interfaces and finish before proposing the manufacturing sequence.',
    stages: ['Brief and drawing', 'Manufacturing review', 'Cut and form', 'Fabricate', 'Finish and delivery'],
    faq: [['Can you help with one-off work?', 'One-off, prototype and repeat requirements can be submitted for review; acceptance depends on scope and capacity.'], ['Which materials are available?', 'Material suitability is project-specific. Contact Parkway to discuss specialist materials and requirements.']]
  }
};
