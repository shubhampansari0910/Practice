function coupongenerator() {
    var coupon = "EBIZ";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++) {
    coupon += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return coupon.toUpperCase();
    }
    module.exports = coupongenerator;
    