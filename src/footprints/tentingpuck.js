module.exports = {
  nets: {},
  params: {
    reverseSilks: false,
    showSilks: true,
    centerHole: false,
    northHole: true,
    westHole: true,
    southHole: true,
    eastHole: true,
  },
  body: (p) => {
    let wordParts;
    if (p.param.reverseSilks) {
      wordParts = ["puck", "tenting"];
    } else {
      wordParts = ["tenting", "puck"];
    }

    return `
(module "Tenting Puck" (layer F.Cu) (tedit 5F09F7E8)
  ${p.at /* parametric position */}

  (fp_text reference "${p.ref}" (at 7.6835 1.4605) (layer F.Fab)
    ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )
  
  ${
    !p.param.centerHole
      ? ""
      : `(pad "" thru_hole circle (at 0 0 ${p.rot}) (size 6.8 6.8) (drill 6.2) (layers *.Cu *.Mask))`
  }
  ${
    !p.param.northHole
      ? ""
      : "(pad 1 thru_hole circle (at 0 -19.05 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
  ${
    !p.param.eastHole
      ? ""
      : "(pad 1 thru_hole circle (at 19.05  0 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
  ${
    !p.param.southHole
      ? ""
      : "(pad 1 thru_hole circle (at 0  19.05 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
  ${
    !p.param.westHole
      ? ""
      : "(pad 1 thru_hole circle (at -19.05 0 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
  ${
    !p.param.showSilks
      ? ""
      : `(fp_text value "Tenting Puck" (at 8.0645 -2.8575) (layer F.Fab)

      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_circle (center 0 0) (end 20.55 0) (layer B.CrtYd) (width 0.55))
    (fp_line (start -1.6 19.05) (end -1.6 -19.05) (layer F.CrtYd) (width 0.2))
    (fp_line (start 1.6 19.05) (end 1.6 -19.05) (layer F.CrtYd) (width 0.2))
    (fp_line (start 17.6 10) (end 17.6 -10) (layer F.CrtYd) (width 0.2))
    (fp_line (start -17.6 10) (end -17.6 -10) (layer F.CrtYd) (width 0.2))
    (fp_arc (start 0 0) (end 2.8575 -20.32) (angle 11.96501412) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -2.8575 -20.32) (angle -11.96501674) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 2.8575 20.32) (angle -11.96501412) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -2.8575 20.32) (angle 11.96501128) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 20.32 -2.8575) (angle -11.96500792) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 20.32 2.8575) (angle 11.96501054) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -20.32 2.8575) (angle -11.96501412) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -20.32 -2.8575) (angle 11.96501674) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -2.8575 -20.32) (angle -11.96501054) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 2.8575 -20.32) (angle 11.96501937) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 20.32 -2.8575) (angle -11.96501674) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 20.32 2.8575) (angle 11.96501674) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 2.8575 20.32) (angle -11.96500792) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -2.8575 20.32) (angle 11.96500792) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -20.32 2.8575) (angle -11.96501054) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end -20.32 -2.8575) (angle 11.96500434) (layer B.SilkS) (width 0.2))
    (fp_text user ${wordParts[0]} (at -0.1905 6.858 ${p.rot + 90}) (layer F.SilkS)
      (effects (font (size 1 1) (thickness 0.1)))
    )
    (fp_text user ${wordParts[1]} (at -0.254 -6.0325 ${
        p.rot + 90
      }) (layer F.SilkS)
      (effects (font (size 1 1) (thickness 0.1)))
    )
    (fp_text user ${wordParts[0]} (at -0.254 -6.9215 ${
        p.rot + 90
      }) (layer B.SilkS)
      (effects (font (size 1 1) (thickness 0.1)) (justify mirror))
    )
    (fp_text user ${wordParts[1]} (at -0.1905 6.0325 ${
        p.rot + 90
      } unlocked) (layer B.SilkS)
      (effects (font (size 1 1) (thickness 0.1)) (justify mirror))
    )
    (fp_arc (start 0 0) (end 0 10.795) (angle 6) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 0 10.795) (angle -6) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 0 -10.795) (angle -6) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 0 -10.795) (angle 6) (layer F.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 0 10.795) (angle -6) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 0 -10.795) (angle 6) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 0 -10.795) (angle -6) (layer B.SilkS) (width 0.2))
    (fp_arc (start 0 0) (end 0 10.795) (angle 6) (layer B.SilkS) (width 0.2))
    (fp_poly (pts (xy -1.626755 14.081867) (xy -0.823809 13.279167) (xy -0.535441 13.282261) (xy -0.247073 13.285354)
      (xy -1.094297 14.145491) (xy -1.212222 14.265214) (xy -1.327021 14.381763) (xy -1.437475 14.493903)
      (xy -1.542367 14.600396) (xy -1.640479 14.700007) (xy -1.730594 14.7915) (xy -1.811493 14.873637)
      (xy -1.88196 14.945182) (xy -1.940776 15.0049) (xy -1.986723 15.051554) (xy -2.018584 15.083907)
      (xy -2.032365 15.097903) (xy -2.123209 15.190179) (xy -2.123209 12.448309) (xy -1.626755 12.448309)
      (xy -1.626755 14.081867)) (layer F.SilkS) (width 0.01))
    (fp_poly (pts (xy -0.819975 14.488398) (xy -0.797272 14.511261) (xy -0.762793 14.546792) (xy -0.718524 14.592884)
      (xy -0.666457 14.64743) (xy -0.608578 14.708324) (xy -0.546879 14.773459) (xy -0.483346 14.840729)
      (xy -0.419971 14.908027) (xy -0.358741 14.973246) (xy -0.301645 15.034281) (xy -0.250673 15.089024)
      (xy -0.207813 15.135369) (xy -0.175055 15.171209) (xy -0.154387 15.194438) (xy -0.152094 15.197129)
      (xy -0.123793 15.230764) (xy -0.743807 15.230764) (xy -0.917157 15.054695) (xy -0.970899 14.999952)
      (xy -1.021182 14.948439) (xy -1.064998 14.903259) (xy -1.099344 14.867513) (xy -1.121212 14.844304)
      (xy -1.124389 14.840812) (xy -1.158271 14.802997) (xy -0.997236 14.641653) (xy -0.947523 14.592198)
      (xy -0.903299 14.548873) (xy -0.867152 14.51416) (xy -0.84167 14.49054) (xy -0.829441 14.480492)
      (xy -0.82891 14.480309) (xy -0.819975 14.488398)) (layer F.SilkS) (width 0.01))
    (fp_poly (pts (xy 0.578279 12.94765) (xy 0.578471 13.05189) (xy 0.57896 13.148635) (xy 0.57971 13.235521)
      (xy 0.580686 13.310183) (xy 0.581855 13.370258) (xy 0.583182 13.413381) (xy 0.584631 13.437188)
      (xy 0.585539 13.441218) (xy 0.59797 13.434904) (xy 0.622816 13.418561) (xy 0.64695 13.401359)
      (xy 0.761647 13.330637) (xy 0.883863 13.281533) (xy 1.014246 13.253857) (xy 1.153447 13.247419)
      (xy 1.171259 13.248087) (xy 1.260894 13.254639) (xy 1.337377 13.266576) (xy 1.409029 13.286068)
      (xy 1.484167 13.315285) (xy 1.554018 13.347924) (xy 1.681951 13.423217) (xy 1.794871 13.515197)
      (xy 1.891765 13.622186) (xy 1.971623 13.742511) (xy 2.033433 13.874496) (xy 2.076185 14.016465)
      (xy 2.098866 14.166744) (xy 2.102427 14.256414) (xy 2.092136 14.408892) (xy 2.06078 14.553456)
      (xy 2.007635 14.692692) (xy 1.95038 14.799611) (xy 1.864668 14.919904) (xy 1.763055 15.024753)
      (xy 1.647722 15.113075) (xy 1.520847 15.183789) (xy 1.384611 15.235812) (xy 1.241192 15.268065)
      (xy 1.092771 15.279464) (xy 0.992525 15.274981) (xy 0.847917 15.2501) (xy 0.707349 15.203825)
      (xy 0.574176 15.137846) (xy 0.451756 15.053849) (xy 0.343444 14.953523) (xy 0.33505 14.944357)
      (xy 0.253919 14.840237) (xy 0.184227 14.722055) (xy 0.129061 14.596192) (xy 0.091508 14.469032)
      (xy 0.082639 14.422582) (xy 0.080026 14.394187) (xy 0.077681 14.344115) (xy 0.076212 14.293781)
      (xy 0.57255 14.293781) (xy 0.583122 14.39133) (xy 0.613554 14.485349) (xy 0.642208 14.539494)
      (xy 0.709142 14.627777) (xy 0.788623 14.698654) (xy 0.878055 14.751147) (xy 0.974841 14.784279)
      (xy 1.076382 14.797073) (xy 1.180083 14.788552) (xy 1.25291 14.769264) (xy 1.295907 14.753178)
      (xy 1.336812 14.735818) (xy 1.352979 14.728042) (xy 1.398265 14.697038) (xy 1.447588 14.650844)
      (xy 1.495645 14.595388) (xy 1.53713 14.536594) (xy 1.558618 14.498267) (xy 1.578799 14.454021)
      (xy 1.591444 14.415413) (xy 1.598801 14.373121) (xy 1.603119 14.317818) (xy 1.603401 14.312528)
      (xy 1.600033 14.205283) (xy 1.577177 14.107391) (xy 1.533525 14.013968) (xy 1.515755 13.985439)
      (xy 1.451213 13.907535) (xy 1.372396 13.845365) (xy 1.28276 13.799869) (xy 1.185761 13.771991)
      (xy 1.084857 13.762671) (xy 0.983505 13.772853) (xy 0.885159 13.803478) (xy 0.871156 13.809764)
      (xy 0.783204 13.862713) (xy 0.709214 13.930927) (xy 0.650171 14.011273) (xy 0.607058 14.10062)
      (xy 0.580856 14.195833) (xy 0.57255 14.293781) (xy 0.076212 14.293781) (xy 0.075628 14.273778)
      (xy 0.073889 14.184589) (xy 0.072486 14.07796) (xy 0.071442 13.955304) (xy 0.070778 13.818032)
      (xy 0.070517 13.667558) (xy 0.070514 13.655822) (xy 0.070427 12.964108) (xy 0.578131 12.454082)
      (xy 0.578279 12.94765)) (layer F.SilkS) (width 0.01))
    (fp_poly (pts (xy 0.777718 14.524575) (xy 0.755015 14.547438) (xy 0.720536 14.582969) (xy 0.676267 14.629061)
      (xy 0.6242 14.683607) (xy 0.566321 14.744501) (xy 0.504622 14.809636) (xy 0.441089 14.876906)
      (xy 0.377714 14.944204) (xy 0.316484 15.009423) (xy 0.259388 15.070458) (xy 0.208416 15.125201)
      (xy 0.165556 15.171546) (xy 0.132798 15.207386) (xy 0.11213 15.230615) (xy 0.109837 15.233306)
      (xy 0.081536 15.266941) (xy 0.70155 15.266941) (xy 0.8749 15.090872) (xy 0.928642 15.036129)
      (xy 0.978925 14.984616) (xy 1.022741 14.939436) (xy 1.057087 14.90369) (xy 1.078955 14.880481)
      (xy 1.082132 14.876989) (xy 1.116014 14.839174) (xy 0.954979 14.67783) (xy 0.905266 14.628375)
      (xy 0.861042 14.58505) (xy 0.824895 14.550337) (xy 0.799413 14.526717) (xy 0.787184 14.516669)
      (xy 0.786653 14.516486) (xy 0.777718 14.524575)) (layer B.SilkS) (width 0.01))
    (fp_poly (pts (xy -0.620536 12.983827) (xy -0.620728 13.088067) (xy -0.621217 13.184812) (xy -0.621967 13.271698)
      (xy -0.622943 13.34636) (xy -0.624112 13.406435) (xy -0.625439 13.449558) (xy -0.626888 13.473365)
      (xy -0.627796 13.477395) (xy -0.640227 13.471081) (xy -0.665073 13.454738) (xy -0.689207 13.437536)
      (xy -0.803904 13.366814) (xy -0.92612 13.31771) (xy -1.056503 13.290034) (xy -1.195704 13.283596)
      (xy -1.213516 13.284264) (xy -1.303151 13.290816) (xy -1.379634 13.302753) (xy -1.451286 13.322245)
      (xy -1.526424 13.351462) (xy -1.596275 13.384101) (xy -1.724208 13.459394) (xy -1.837128 13.551374)
      (xy -1.934022 13.658363) (xy -2.01388 13.778688) (xy -2.07569 13.910673) (xy -2.118442 14.052642)
      (xy -2.141123 14.202921) (xy -2.144684 14.292591) (xy -2.134393 14.445069) (xy -2.103037 14.589633)
      (xy -2.049892 14.728869) (xy -1.992637 14.835788) (xy -1.906925 14.956081) (xy -1.805312 15.06093)
      (xy -1.689979 15.149252) (xy -1.563104 15.219966) (xy -1.426868 15.271989) (xy -1.283449 15.304242)
      (xy -1.135028 15.315641) (xy -1.034782 15.311158) (xy -0.890174 15.286277) (xy -0.749606 15.240002)
      (xy -0.616433 15.174023) (xy -0.494013 15.090026) (xy -0.385701 14.9897) (xy -0.377307 14.980534)
      (xy -0.296176 14.876414) (xy -0.226484 14.758232) (xy -0.171318 14.632369) (xy -0.133765 14.505209)
      (xy -0.124896 14.458759) (xy -0.122283 14.430364) (xy -0.119938 14.380292) (xy -0.118469 14.329958)
      (xy -0.614807 14.329958) (xy -0.625379 14.427507) (xy -0.655811 14.521526) (xy -0.684465 14.575671)
      (xy -0.751399 14.663954) (xy -0.83088 14.734831) (xy -0.920312 14.787324) (xy -1.017098 14.820456)
      (xy -1.118639 14.83325) (xy -1.22234 14.824729) (xy -1.295167 14.805441) (xy -1.338164 14.789355)
      (xy -1.379069 14.771995) (xy -1.395236 14.764219) (xy -1.440522 14.733215) (xy -1.489845 14.687021)
      (xy -1.537902 14.631565) (xy -1.579387 14.572771) (xy -1.600875 14.534444) (xy -1.621056 14.490198)
      (xy -1.633701 14.45159) (xy -1.641058 14.409298) (xy -1.645376 14.353995) (xy -1.645658 14.348705)
      (xy -1.64229 14.24146) (xy -1.619434 14.143568) (xy -1.575782 14.050145) (xy -1.558012 14.021616)
      (xy -1.49347 13.943712) (xy -1.414653 13.881542) (xy -1.325017 13.836046) (xy -1.228018 13.808168)
      (xy -1.127114 13.798848) (xy -1.025762 13.80903) (xy -0.927416 13.839655) (xy -0.913413 13.845941)
      (xy -0.825461 13.89889) (xy -0.751471 13.967104) (xy -0.692428 14.04745) (xy -0.649315 14.136797)
      (xy -0.623113 14.23201) (xy -0.614807 14.329958) (xy -0.118469 14.329958) (xy -0.117885 14.309955)
      (xy -0.116146 14.220766) (xy -0.114743 14.114137) (xy -0.113699 13.991481) (xy -0.113035 13.854209)
      (xy -0.112774 13.703735) (xy -0.112771 13.691999) (xy -0.112684 13.000285) (xy -0.620388 12.490259)
      (xy -0.620536 12.983827)) (layer B.SilkS) (width 0.01))
    (fp_poly (pts (xy 1.584498 14.118044) (xy 0.781552 13.315344) (xy 0.493184 13.318438) (xy 0.204816 13.321531)
      (xy 1.05204 14.181668) (xy 1.169965 14.301391) (xy 1.284764 14.41794) (xy 1.395218 14.53008)
      (xy 1.50011 14.636573) (xy 1.598222 14.736184) (xy 1.688337 14.827677) (xy 1.769236 14.909814)
      (xy 1.839703 14.981359) (xy 1.898519 15.041077) (xy 1.944466 15.087731) (xy 1.976327 15.120084)
      (xy 1.990108 15.13408) (xy 2.080952 15.226356) (xy 2.080952 12.484486) (xy 1.584498 12.484486)
      (xy 1.584498 14.118044)) (layer B.SilkS) (width 0.01)) `
  }
)
    `;
  },
};
