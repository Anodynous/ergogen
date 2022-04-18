// Through Hole Pad with Break-off Trace
// Nets
//		from: the net this breakoff pad should be connected to
//		to: the net this hole should be connected to
// Parameters
//        class: the class of the footprint
//        hole_size: the size of drill hole
//        pad_size: the size of pad

module.exports = {
    nets: {
        from: undefined,
        to: undefined
      },
    params: {
        class: 'THT_PAD_BO',
        hole_size: 1.3,
        pad_size: 1.6,
    },
    body: p => {
        return `
        (module ThroughHolePadBreakOff (layer F.Cu) (tedit 0)
        ${p.at /* parametric position */}   

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 1.4 unlocked) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value THT-"${p.param.hole_size}"mm (at 0 -1.4 unlocked) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pad and hole */}
        (pad "1" thru_hole rect (at 0 0) (size ${p.param.pad_size} ${p.param.pad_size}) (drill ${p.param.hole_size}) (layers *.Cu *.Mask) (zone_connect 0) ${p.net.from.str})

        ${'' /* trace to connect to breakoff */}
        (pad "" smd custom (at 0 -1.27 ${p.rot}) (size 0.25 1) (layers "F.Cu")
        (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp 047860bb-1798-4332-b92d-ddfe70a38d88))

        ${'' /* breakoff connected pad */}
        (pad "" smd custom (at 0 -1.778 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
        (clearance 0.1) (zone_connect 0) 
        (options (clearance outline) (anchor rect))
        (primitives
        (gr_poly (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
            ) (width 0) (fill yes))
        ) (tstamp c99bdb57-f390-4eeb-beb2-385de790e057))

        ${'' /* breakoff unconnected pad */}
        (pad "" smd custom (at 0 -2.794 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
              (xy 0.6 0)
              (xy -0.6 0)
              (xy -0.6 -1)
              (xy 0 -0.4)
              (xy 0.6 -1)
            ) (width 0) (fill yes))
        ) (tstamp 169673a7-b234-4e96-a376-4edecd11c13d) ${p.net.to.str})
        )
    `
    }
}