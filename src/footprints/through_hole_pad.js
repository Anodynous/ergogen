// Through Hole Pad
// Nets
//		net: the net this pad should be connected to
// Parameters
//        class: the class of the footprint
//        hole_size: the size of drill hole
//        pad_size: the size of pad

module.exports = {
    nets: {
      net: undefined
    },
    params: {
        class: 'THT_PAD',
        hole_size: 1.3,
        pad_size: 1.6,
    },
    body: p => {
        return `
        (module ThroughHolePad (layer F.Cu) (tedit 0)
        ${p.at /* parametric position */}   

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 1.4 unlocked) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value THT-"${p.param.hole_size}"mm (at 0 -1.4 unlocked) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pad and hole */}
        (pad "1" thru_hole rect (at 0 0) (size ${p.param.pad_size} ${p.param.pad_size}) (drill ${p.param.hole_size}) (layers *.Cu *.Mask) (zone_connect 2) ${p.net.net.str})
        )
    `
    }
}