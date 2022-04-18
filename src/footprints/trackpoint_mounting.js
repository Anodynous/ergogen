// Mounting point for TrackPoint DS0046 SK8707 
//

module.exports = {
    nets: {
        net: undefined
    },
    body: p => {
        return `    
        (module TrackPoint_DS0046_SK8707 (layer F.Cu) (tedit 0)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 -2.4 unlocked) (layer "F.SilkS")  ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "TrackPoint DS0046 SK8707" (at 0 2.4 unlocked) (layer "F.Fab") hide (effects (font (size 1 1) (thickness 0.15))))

        ${''/* silk layer */}
        (fp_line (start 11.5 0) (end 11.5 -7.55) (layer Dwgs.User) (width 0.12))
        (fp_line (start -11.55 -7.55) (end 11.5 -7.55) (layer Dwgs.User) (width 0.12))
        (fp_line (start 11.5 0) (end 11.5 4.8) (layer Dwgs.User) (width 0.12))
        (fp_line (start -6.6 11.8) (end -6.6 -7.55) (layer Dwgs.User) (width 0.12))
        (fp_line (start 6.6 11.8) (end 6.6 -7.55) (layer Dwgs.User) (width 0.12))
        (fp_line (start -11.5 0) (end -11.5 4.8) (layer Dwgs.User) (width 0.12))
        (fp_line (start -11.5 4.8) (end 11.5 4.8) (layer Dwgs.User) (width 0.12))
        (fp_line (start -11.5 0) (end 11.5 0) (layer Dwgs.User) (width 0.12))
        (fp_line (start 6.6 11.8) (end -6.6 11.8) (layer Dwgs.User) (width 0.12))
        (fp_line (start -11.5 0) (end -11.5 -7.55) (layer Dwgs.User) (width 0.12))

        ${''/* mounting holes, M2 */}
        (pad "1" thru_hole circle (at 9.5 0) (size 2.3 2.3) (drill 2) (layers *.Cu *.Mask))
        (pad "1" thru_hole circle (at -9.5 0) (size 2.3 2.3) (drill 2) (layers *.Cu *.Mask))
        
        ${''/* trackpoint nub clearing hole, M7*/}
        (pad "2" thru_hole circle (at 0 0) (size 7.3 7.3) (drill 7) (layers *.Cu *.Mask))
        )
    `
    }
}
    
