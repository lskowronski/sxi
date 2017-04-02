var SXIUpdateHeader = function () {
    $$('.scEditorSectionCaptionExpanded').each(function (element) {
        if (jQuery(element).css('border-left-color') == 'rgb(220, 41, 30)') {
            if (!jQuery(element).hasClass('sxiSectionHeaderWithValidationErrors')) {
                jQuery(element).addClass('sxiSectionHeaderWithValidationErrors');
            }
        }
    });
}
var SXIFoundationValidationObserver = new MutationObserver(function () {
    $$('.scEditorSectionCaptionExpanded').each(function (element) {
        if (jQuery(element).css('border-left-color') == 'rgb(220, 41, 30)') {
            var message = '<div class="sxiValidationErrorMessage">__error__</div>';
            var errorMessage = '';
            if (jQuery(element).parent().find('.sxiValidationErrorMessage').length < 1) {
                jQuery('.sxiValidationErrorMessage').remove();
                jQuery('.sxiSectionHeaderWithValidationErrors').removeClass('sxiSectionHeaderWithValidationErrors');
                if (jQuery(element).attr('title') != undefined) {
                    errorMessage = jQuery(element).attr('title');
                }
                else {
                    errorMessage = 'Validation Error Occured &darr;';
                }
                jQuery(element).parent().find('td:last').prepend(message.replace('__error__', errorMessage));
            }
        }
        else {
            if (jQuery(element).parent().find('.sxiValidationErrorMessage').length == 1) {
                jQuery('.sxiValidationErrorMessage').remove();
                jQuery('.sxiSectionHeaderWithValidationErrors').removeClass('sxiSectionHeaderWithValidationErrors');
            }
        }

    });
    SXIUpdateHeader();
});
SXIFoundationValidationObserver.observe(document, { attributes: true, childList: true, characterData: true, subtree: true });
