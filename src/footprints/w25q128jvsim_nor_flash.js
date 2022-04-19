//  W25Q128JVSIM NOR Flash Module
//  SOIC-8_5.23x5.23mm_P1.27mm

module.exports = {
    nets: {
        GND: 'GND',
        HLD: undefined,
        VCC: undefined,
        CS: undefined,
        DO: undefined,
        WP: undefined,
        DI: undefined,
        CLK: undefined,
      },
      params: {
        class: 'NOR_Flash',
        side: 'F'
      },
    body: p => {
        return `    
        (module "SOIC-8_5.23x5.23mm_P1.27mm" (layer ${p.param.side}.Cu) (tedit 0)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (descr "SOIC, 8 Pin (http://www.winbond.com/resource-files/w25q32jv%20revg%2003272018%20plus.pdf#page=68), generated with kicad-footprint-generator ipc_gullwing_generator.py")
        (tags "SOIC SO")

        (fp_text reference "${p.ref}" (at 0 -3.56 ${p.rot}) (layer "${p.param.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "W25Q128JVSIM NOR Flash" (at 0 3.56 ${p.rot}) (layer "${p.param.side}.Fab") hide (effects (font (size 1 1) (thickness 0.15))))

        ${''/* silk layer */}
        (fp_line (start -2.725 2.725) (end -2.725 2.465) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp 00138a61-23f0-45f3-9f28-2bbd8494a1fc))
        (fp_line (start -2.725 -2.465) (end -4.4 -2.465) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp 0ad895a6-0c83-484a-8b80-3635647eb60a))
        (fp_line (start 0 -2.725) (end -2.725 -2.725) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp 0ef6c909-3192-40ee-a6d7-49ae09a79a2d))
        (fp_line (start -2.725 -2.725) (end -2.725 -2.465) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp 1faa07e6-bd78-437e-b4e2-cd00c2b8018d))
        (fp_line (start 2.725 2.725) (end 2.725 2.465) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp 3a26b0fd-8ddd-4bb6-8f59-5d8caaf547d2))
        (fp_line (start 0 2.725) (end 2.725 2.725) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp 599161f8-efef-47ec-8f3f-69142e759f9f))
        (fp_line (start 0 2.725) (end -2.725 2.725) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp 7563e6d6-e180-4d92-9939-ff14aba164c5))
        (fp_line (start 2.725 -2.725) (end 2.725 -2.465) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp bd45a508-6e93-4f9b-948f-0868d234cca2))
        (fp_line (start 0 -2.725) (end 2.725 -2.725) (layer "${p.param.side}.SilkS") (width 0.12) (tstamp e0b94375-2281-4987-b4d4-78e8e535972c))
        (fp_line (start 4.65 -2.86) (end -4.65 -2.86) (layer "${p.param.side}.CrtYd") (width 0.05) (tstamp 15719beb-6925-433d-810a-8c40136a730d))
        (fp_line (start 4.65 2.86) (end 4.65 -2.86) (layer "${p.param.side}.CrtYd") (width 0.05) (tstamp 343b8478-4e57-4c34-a00f-f6c76028fbb0))
        (fp_line (start -4.65 2.86) (end 4.65 2.86) (layer "${p.param.side}.CrtYd") (width 0.05) (tstamp 48c8ef75-8bc0-4249-b6fc-f564812177b5))
        (fp_line (start -4.65 -2.86) (end -4.65 2.86) (layer "${p.param.side}.CrtYd") (width 0.05) (tstamp d364a3b0-54fd-4659-8dce-a730d0a819b4))
        (fp_line (start -2.615 2.615) (end -2.615 -1.615) (layer "${p.param.side}.Fab") (width 0.1) (tstamp 02b4b413-8363-4d1b-994e-188513d8ddc7))
        (fp_line (start 2.615 -2.615) (end 2.615 2.615) (layer "${p.param.side}.Fab") (width 0.1) (tstamp 0de79bc8-6e35-4f27-a959-67075a5c995d))
        (fp_line (start -1.615 -2.615) (end 2.615 -2.615) (layer "${p.param.side}.Fab") (width 0.1) (tstamp 6d79fd42-415e-413e-9d9a-317a78780624))
        (fp_line (start -2.615 -1.615) (end -1.615 -2.615) (layer "${p.param.side}.Fab") (width 0.1) (tstamp a9e3aef9-f101-4095-bdca-1439a0a3a462))
        (fp_line (start 2.615 2.615) (end -2.615 2.615) (layer "${p.param.side}.Fab") (width 0.1) (tstamp f6066510-5931-4b5c-bd2e-aa73c2658e09))

        ${''/* pins */}
        (pad "1" smd roundrect (at -3.6 -1.905 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.CS.str})
        (pad "2" smd roundrect (at -3.6 -0.635 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.DO.str})
        (pad "3" smd roundrect (at -3.6 0.635 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.WP.str})
        (pad "4" smd roundrect (at -3.6 1.905 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.GND.str})
        (pad "5" smd roundrect (at 3.6 1.905 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.DI.str})
        (pad "6" smd roundrect (at 3.6 0.635 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.CLK.str})
        (pad "7" smd roundrect (at 3.6 -0.635 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.HLD.str})
        (pad "8" smd roundrect (at 3.6 -1.905 ${p.rot}) (size 1.6 0.6) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.VCC.str})
        )
        `
    }
}
    
