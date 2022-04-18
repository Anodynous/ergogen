// MountingHole_2.2mm_M2_Pad_Via
//      Hole diameter: 2.2mm
//      Pad diameter: 3.7mm

module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'HOLE',
    },
    body: p => `
    (module "MountingHole_2.2mm_M2_Pad_Via" (version 20210722) (generator pcbnew) (layer "F.Cu")
      (tedit 56DDB9C7)
      ${p.at /* parametric position */} 
    
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide} 
        (effects (font (size 1 1) (thickness 0.15)))
        (tstamp b68bb25c-687d-44b1-b966-dad4cac66b35)
      )
    
      (fp_circle (center 0 0) (end 2 0) (layer "F.CrtYd") (width 0.05) (fill none) (tstamp 6d774796-4b1f-4927-8ee9-a8502a0b349c))
      (pad "1" thru_hole circle (at 0 0 22) (size 3.7 3.7) (drill 2.2) (layers *.Cu *.Mask) (tstamp 49c93173-ef1a-4350-b84b-dd2fcca35d74))
    )`
} 