// SKRHACE010 with elongated pads for easier hand soldering
// Nets
//		the nets this component should be connected to

module.exports = {
    nets: {
        P1: undefined,
        CLICK: undefined,
        P3: undefined,
        P4: undefined,
        COMMON: undefined,
        P6: undefined,
    },
    body: p => `
        (module SKRHACE010_hand_solder (layer F.Cu) (tedit 591DBFB0)
        ${p.at /* parametric position */}   
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 1.4) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value SKRHACE010_hand_solder (at 0 -1.4) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* via */}
        (fp_line (start 3.75 -3.75) (end 1.25 -3.75) (layer "F.SilkS") (width 0.2) (tstamp 304b7353-447b-4ff6-85bf-aa07628089d2))
        (fp_line (start 3.75 -3.75) (end 3.75 -2.2) (layer "F.SilkS") (width 0.2) (tstamp 4f02a828-acc4-4bd0-bed3-0eb3161a9427))
        (fp_line (start 3.75 3.75) (end 3.75 2.2) (layer "F.SilkS") (width 0.2) (tstamp 5e57427e-6497-4e72-9cee-528ed39f40d0))
        (fp_line (start -3.75 3.75) (end -1.25 3.75) (layer "F.SilkS") (width 0.2) (tstamp 6c939a71-e72e-4a2b-a238-3afe84eb078f))
        (fp_line (start -3.75 3.75) (end -3.75 2.2) (layer "F.SilkS") (width 0.2) (tstamp 9f6d45f8-770c-44b4-9e7b-d8a714ed946d))
        (fp_line (start 3.75 3.75) (end 1.25 3.75) (layer "F.SilkS") (width 0.2) (tstamp a320dd98-ab33-4ac8-98c2-dbdafb4d36de))
        (fp_line (start -3.75 -3.75) (end -3.75 -2.2) (layer "F.SilkS") (width 0.2) (tstamp cd8d145a-d1ff-4fe0-b9d0-07f67ff3af2c))
        (fp_line (start -3.75 -3.75) (end -1.25 -3.75) (layer "F.SilkS") (width 0.2) (tstamp e33a9f2a-3ddf-448f-8a1d-bf3f834cbe9f))
        (fp_circle (center -4.898 -2.116) (end -4.898 -2.04363) (layer "F.SilkS") (width 0.2) (fill none) (tstamp 34ee3268-a4e0-4280-8687-0414f7d9a221))
        (fp_line (start -3.75 3.75) (end -3.75 -3.75) (layer "F.Fab") (width 0.2) (tstamp 91b57045-f024-4dec-83f8-ace2a4d53ce7))
        (fp_line (start -3.75 -3.75) (end 3.75 -3.75) (layer "F.Fab") (width 0.2) (tstamp ab8a37ef-d730-468e-a2ae-d5732dd7a6c9))
        (fp_line (start 3.75 3.75) (end -3.75 3.75) (layer "F.Fab") (width 0.2) (tstamp d85379aa-43c8-4b90-b45f-d19c25dc3e4a))
        (fp_line (start 3.75 -3.75) (end 3.75 3.75) (layer "F.Fab") (width 0.2) (tstamp ed1cc218-54e2-4253-b1aa-2ddc2a459f4e))
        (pad "1" smd rect (at -3.75 -1.425 ${p.rot + 90}) (size 1 1.7) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.P1.str})
        (pad "2" smd rect (at -3.75 0 ${p.rot + 90}) (size 1 1.7) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.CLICK.str})
        (pad "3" smd rect (at -3.75 1.425 ${p.rot + 90}) (size 1 1.7) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.P3.str})
        (pad "4" smd rect (at 3.75 -1.425 ${p.rot + 90}) (size 1 1.7) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.P4.str})
        (pad "5" smd rect (at 3.75 0 ${p.rot + 90}) (size 1 1.7) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.COMMON.str})
        (pad "6" smd rect (at 3.75 1.425 ${p.rot + 90}) (size 1 1.7) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.P6.str})
        (pad "7" smd rect (at 0 4.05 ${p.rot + 90}) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 1a5f2597-305d-4da6-8ef9-54f0d9d1a056))
        (pad "8" smd rect (at 0 -4.05 ${p.rot + 90}) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 4698392b-4351-4ca4-baff-1ca42d0f5086))
         )
    `
}