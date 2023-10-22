function removeNav_Boxes() {
    jQuery("#box-home ul").filter(function () {
        return jQuery(this).children("li").length <= 3
    }).length && (window.innerWidth > tabletSize ? jQuery(".controle-boxes").hide() : jQuery(".controle-boxes").show())
}
jQuery.noConflict()(function (e) {
    jQuery(document).ready(function () {
          
       jQuery(".image-popup").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "mfp-img-mobile",
            image: { 
                verticalFit: !0
            }
        }), jQuery(".modal-ajax-mg").magnificPopup({
            type: "ajax",
            alignTop: !0,
            overflowY: "scroll"
        }), jQuery("#ir-para-sigpos").bind("click", function () {
            jQuery("#form-sigpos").submit()
        });
        var o = e("#searchtoggl i"),
            r = e(".searchbar");
        e("#searchtoggl").on("click", function (e) {
            e.preventDefault(), r.is(":visible") ? o.removeClass("fa-search-minus").addClass("fa-search") : o.removeClass("fa-search").addClass("fa-search-minus"), r.slideToggle(400, function () {})
        })
    })
});
var tabletSize = "768";
jQuery(window).on("resize", function () {
    window.innerWidth > tabletSize && jQuery(".navbar-collapse").collapse("hide"), removeNav_Boxes()
});