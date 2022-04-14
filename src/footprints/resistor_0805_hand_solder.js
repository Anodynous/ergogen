//  Resistor 0805 2012Metric Pad1.20x1.40mm HandSolder

module.exports = {
    nets: {
        from: undefined,
        to: undefined
      },
      params: {
        class: 'Resistor',
      },
    body: p => {
        return `    
        (module "R_0805_2012Metric_Pad1.20x1.40mm_HandSolder" (layer F.Cu) (tedit 0)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (descr "Resistor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal with elongated pad for handsoldering. (Body size source: IPC-SM-782 page 72, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
        (tags "resistor handsolder")
        (attr smd)
        (fp_text reference "${p.ref}" (at 0 -1.65 ${p.rot}) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "R_0805" (at 0 1.65 ${p.rot}) (layer "F.Fab") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))


        ${''/* silk layer */}
        (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (layer "F.SilkS") (width 0.12) (tstamp 48271d98-12d9-4f33-af9f-2d7831085097))
        (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (layer "F.SilkS") (width 0.12) (tstamp d034902c-e5b7-4c79-bf4e-2234fd7562ae))
        (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (layer "F.CrtYd") (width 0.05) (tstamp 2682e825-0d85-467f-aecf-eb3fab925831))
        (fp_line (start 1.85 0.95) (end -1.85 0.95) (layer "F.CrtYd") (width 0.05) (tstamp 49a5eb84-1cdf-4972-a826-169f72a58314))
        (fp_line (start -1.85 0.95) (end -1.85 -0.95) (layer "F.CrtYd") (width 0.05) (tstamp bb3b7d94-9d6d-4731-99fd-aafb11e8ce69))
        (fp_line (start 1.85 -0.95) (end 1.85 0.95) (layer "F.CrtYd") (width 0.05) (tstamp fa83aaae-a6ae-4d28-9a0c-5c24aa106cda))
        (fp_line (start -1 0.625) (end -1 -0.625) (layer "F.Fab") (width 0.1) (tstamp 8a128ae7-eb37-424e-8c0e-2536ba19e311))
        (fp_line (start 1 -0.625) (end 1 0.625) (layer "F.Fab") (width 0.1) (tstamp a7969011-0845-48e1-9690-b137beca65d7))
        (fp_line (start -1 -0.625) (end 1 -0.625) (layer "F.Fab") (width 0.1) (tstamp f97d0d99-13fa-4988-85ec-df5e924cab3a))
        (fp_line (start 1 0.625) (end -1 0.625) (layer "F.Fab") (width 0.1) (tstamp fe9d62b8-c669-40f7-9f74-a73c83a94bab))

        ${''/* pins */}
        (pad "1" smd roundrect (at -1 0 ${p.rot}) (size 1.2 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.208333) ${p.net.from.str})
        (pad "2" smd roundrect (at 1 0 ${p.rot}) (size 1.2 1.4) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.208333) ${p.net.to.str})
        )
        `
    }
}
    
