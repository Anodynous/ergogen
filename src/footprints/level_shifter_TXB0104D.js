//  Voltage level translator TXB0104D


module.exports = {
    nets: {
        VCCA: 'VCCA',
        A1: 'A1',
        A2: 'A2',
        A3: 'A3',
        A4: 'A4',
        NC1: 'NC1',
        GND: 'GND',
        VCCB: 'VCCB',
        B1: 'B1',
        B2: 'B2',
        B3: 'B3',
        B4: 'B4',
        NC2: 'NC2',
        OE: 'OE'
      },
      params: {
        class: 'VoltageLevelShifter',
        side: 'F'
      },
    body: p => {
        return `    
        (module "TXB0104D" (layer ${p.param.side}.Cu) (tedit 0)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (descr "Texas Instruments 4-Bit Bi-directional V-Level Translator TXB0104D, SOIC-14, SMD/SMT")
        (tags "TXB0104D")
        (attr smd)
        (fp_text reference "${p.ref}" (at 0 -1.65 ${p.rot}) (layer "${p.param.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "TXB0104D" (at 0 1.65 ${p.rot}) (layer "${p.param.side}.Fab") hide (effects (font (size 1 1) (thickness 0.15))))


        ${''/* silk layer */}
        (fp_line (start -2.1209 4.4958) (end 2.1209 4.4958) (layer "${p.param.side}.SilkS") (width 0.12))
        (fp_line (start 2.1209 -4.4958) (end -2.1209 -4.4958) (layer "${p.param.side}.SilkS") (width 0.12))
        (fp_poly (pts
            (xy -3.656 -4.001)
            (xy -3.656 -3.62)
            (xy -3.91 -3.62)
            (xy -3.91 -4.001)
          ) (layer "${p.param.side}.SilkS") (width 0.1) (fill solid))

        ${''/* courtyard and fab */}
        (fp_line (start 3.702799 -4.343) (end 3.702799 4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start 2.2479 -4.343) (end 3.702799 -4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start 2.2479 4.6228) (end -2.2479 4.6228) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start -3.702799 -4.343) (end -2.2479 -4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start 2.2479 -4.6228) (end 2.2479 -4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start -2.2479 4.6228) (end -2.2479 4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start -2.2479 -4.6228) (end 2.2479 -4.6228) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start 3.702799 4.343) (end 2.2479 4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start -3.702799 4.343) (end -3.702799 -4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start -2.2479 -4.343) (end -2.2479 -4.6228) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start 2.2479 4.343) (end 2.2479 4.6228) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start -3.702799 4.343) (end -2.2479 4.343) (layer "${p.param.side}.CrtYd") (width 0.05))
        (fp_line (start 1.9939 4.3688) (end 1.9939 -4.3688) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 4.064) (end -1.9939 4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 1.524) (end 3.0988 1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 -0.254) (end -3.0988 0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 0.254) (end 3.0988 0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 3.556) (end 1.9939 3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 -4.064) (end -3.0988 -3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -0.254) (end -3.0988 -0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 4.3688) (end 1.9939 4.3688) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 4.064) (end 3.0988 3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 1.524) (end 3.0988 1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 1.016) (end 1.9939 1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -1.524) (end -3.0988 -1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 -2.286) (end 3.0988 -2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 -1.016) (end -1.9939 -1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -1.016) (end 3.0988 -1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 4.064) (end 3.0988 4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 -2.794) (end -3.0988 -2.286) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 -4.064) (end 1.9939 -4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 1.016) (end -3.0988 1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -4.3688) (end -1.9939 -4.3688) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 1.524) (end -1.9939 1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 -2.794) (end 1.9939 -2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 -3.556) (end -1.9939 -3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -2.794) (end 1.9939 -2.286) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 -1.016) (end 3.0988 -1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -4.064) (end 1.9939 -3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -4.3688) (end -1.9939 4.3688) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -3.556) (end -1.9939 -4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 0.254) (end 3.0988 -0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -3.556) (end 3.0988 -3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 -1.524) (end 1.9939 -1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -2.286) (end 3.0988 -2.286) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 2.794) (end 3.0988 2.286) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -1.016) (end -1.9939 -1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 2.794) (end 3.0988 2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 2.286) (end -3.0988 2.286) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 4.064) (end -1.9939 3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 -3.556) (end 3.0988 -4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 2.286) (end -3.0988 2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -4.064) (end -3.0988 -4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 2.794) (end -1.9939 2.286) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 1.016) (end -3.0988 1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -2.794) (end -3.0988 -2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 0.254) (end -1.9939 0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 3.556) (end 1.9939 4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 3.556) (end -3.0988 4.064) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 3.556) (end -3.0988 3.556) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -1.524) (end 1.9939 -1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 -0.254) (end 1.9939 -0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 2.794) (end -1.9939 2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 2.286) (end 1.9939 2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 1.9939 -0.254) (end 1.9939 0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 0.254) (end -1.9939 -0.254) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -1.9939 -2.286) (end -1.9939 -2.794) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 -2.286) (end -1.9939 -2.286) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 1.524) (end -1.9939 1.524) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start -3.0988 -1.524) (end -3.0988 -1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 1.016) (end 1.9939 1.016) (layer "${p.param.side}.Fab") (width 0.1))
        (fp_line (start 3.0988 2.286) (end 1.9939 2.286) (layer "${p.param.side}.Fab") (width 0.1))


        ${''/* pads */}
        (pad "A1" smd rect (at -2.4638 -2.54 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.A1.str})
        (pad "A2" smd rect (at -2.4638 -1.27 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.A2.str})
        (pad "A3" smd rect (at -2.4638 0 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.A3.str})
        (pad "A4" smd rect (at -2.4638 1.27 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.A4.str})
        (pad "B1" smd rect (at 2.4638 -2.54 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.B1.str})
        (pad "B2" smd rect (at 2.4638 -1.27 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.B2.str})
        (pad "B3" smd rect (at 2.4638 0 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.B3.str})
        (pad "B4" smd rect (at 2.4638 1.27 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.B4.str})
        (pad "GND" smd rect (at -2.4638 3.81 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.GND.str})
        (pad "NC1" smd rect (at 2.4638 2.54 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.NC1.str})
        (pad "NC2" smd rect (at -2.4638 2.54 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.NC2.str})
        (pad "OE" smd rect (at 2.4638 3.81 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.OE.str})
        (pad "VCCA" smd rect (at -2.4638 -3.81 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.VCCA.str})
        (pad "VCCB" smd rect (at 2.4638 -3.81 ${p.rot}) (size 1.969999 0.558) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.VCCB.str})
        )
        `
    }
}
    
