function taumBday(b, w, bc, wc, z) {
    if (bc + z < wc) {
        return b * bc + w * (bc + z);
    } else if (wc + z < bc) {
        return w * wc + b * (wc + z);
    } else {
        return b * bc + w * wc;
    }
}
