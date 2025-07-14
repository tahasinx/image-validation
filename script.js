UPLOADCARE_LOCALE_TRANSLATIONS = {
  // messages for widget
  errors: {
    'maxDimensions': 'This image exceeds max dimensions.',
    'maxWidth': 'This image exceeds max width.',
    'maxHeight': 'This image exceeds max height.'
  },
  // messages for dialog’s error page
};

UPLOADCARE_PUBLIC_KEY = '1814aea899668450820b';

function maxDimensions(width, height) {
  return function (fileInfo) {
    var imageInfo = fileInfo.originalImageInfo;
    if (imageInfo === null) {
      return;
    }
    var heightExceeded = height && imageInfo.height > height;
    if (width && imageInfo.width > width) {
      if (heightExceeded) {
        throw new Error('maxDimensions');
      } else {
        throw new Error('maxWidth');
      }
    }
    if (heightExceeded) {
      throw new Error('maxHeight');
    }
  };
}
$(function () {
  $('[role=uploadcare-uploader]').each(function () {
    console.log("enter");
    var input = $(this);
    if (!input.data('maxWidth') && !input.data('maxHeight')) {
      return;
    }
    console.log("init");
    var widget = uploadcare.Widget(input);
    widget.validators.push(maxDimensions(input.data('maxWidth'),
      input.data('maxHeight')));
  });
});