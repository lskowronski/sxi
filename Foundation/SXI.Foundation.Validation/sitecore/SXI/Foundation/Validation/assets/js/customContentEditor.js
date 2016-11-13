var SXIUpdateHeader = function () {
    jQuery('.sxiValidationErrorMessage').each(function () {
        var sectionHeader = jQuery(this).parentsUntil('table.scEditorSectionPanel').parent();
        if (!jQuery(sectionHeader).prev('div').hasClass('sxiSectionHeaderWithValidationErrors')) {
            jQuery(sectionHeader).prev('div').addClass('sxiSectionHeaderWithValidationErrors');
        }
    });
}
var SXIFoundationValidationObserver = new MutationObserver(function () {
    $$('.scEditorFieldMarkerBarCellRed').each(function (element) {
        var message = '<div class="sxiValidationErrorMessage">__error__</div>';
        if (jQuery(element).parent().find('.sxiValidationErrorMessage').length < 1) {
            jQuery('.sxiValidationErrorMessage').remove();
            jQuery('.sxiSectionHeaderWithValidationErrors').removeClass('sxiSectionHeaderWithValidationErrors');
            jQuery(element).parent().find('td:last').prepend(message.replace('__error__', jQuery(element).attr('title')));
        }
    });
    $$('.scEditorFieldMarkerBarCell').each(function (element) {
        if (jQuery(element).parent().find('.sxiValidationErrorMessage').length == 1) {
            jQuery('.sxiValidationErrorMessage').remove();
            jQuery('.sxiSectionHeaderWithValidationErrors').removeClass('sxiSectionHeaderWithValidationErrors');
        }
    });
    SXIUpdateHeader();
});
SXIFoundationValidationObserver.observe(document, { attributes: true, childList: true, characterData: true, subtree: true });