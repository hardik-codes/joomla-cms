/**
 * @copyright  Copyright (C) 2005 - 2019 Open Source Matters, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */
/**
 * Ajax call to get the update status of Joomla
 */
((window, document, Joomla) => {
  'use strict';

  const checkForJoomlaUpdates = () => {
    if (Joomla.getOptions('js-extensions-update')) {
      const options = Joomla.getOptions('js-joomla-update');

      const update = (type, text) => {
        const link = document.getElementById('plg_quickicon_joomlaupdate');
        const linkSpans = [].slice.call(link.querySelectorAll('span.j-links-link'));
        if (link) {
          link.classList.add(type);
        }

        if (linkSpans.length) {
          linkSpans.forEach((span) => {
            span.innerHTML = text;
          });
        }
      };

      Joomla.request({
        url: options.ajaxUrl,
        method: 'GET',
        data: '',
        perform: true,
        onSuccess: (response) => {
          const updateInfoList = JSON.parse(response);

          if (Array.isArray(updateInfoList)) {
            if (updateInfoList.length === 0) {
              // No updates
              update('success', Joomla.Text._('PLG_QUICKICON_JOOMLAUPDATE_UPTODATE'));
            } else {
              const updateInfo = updateInfoList.shift();

              if (updateInfo.version !== options.version) {
                const messages = {
                  warning: [
                    `<div class="message-alert">
  ${Joomla.Text._('PLG_QUICKICON_JOOMLAUPDATE_UPDATEFOUND_MESSAGE').replace('%s', `<span class="badge badge-danger"> \u200E ${updateInfo.version}</span>`)}
  <button type="button" class="btn btn-sm btn-primary" onclick="document.location='${options.url}'">
    ${Joomla.Text._('PLG_QUICKICON_JOOMLAUPDATE_UPDATEFOUND_BUTTON')}
  </button>
</div>`,
                  ],
                };

                // Render the message
                Joomla.renderMessages(messages);

                // Scroll to page top
                window.scrollTo(0, 0);

                update('warning', Joomla.Text._('PLG_QUICKICON_JOOMLAUPDATE_UPDATEFOUND').replace('%s', `<span class="badge badge-light"> \u200E ${updateInfo.version}</span>`));
              } else {
                update('success', Joomla.Text._('PLG_QUICKICON_JOOMLAUPDATE_UPTODATE'));
              }
            }
          } else {
            // An error occurred
            update('danger', Joomla.Text._('PLG_QUICKICON_JOOMLAUPDATE_ERROR'));
          }
        },
        onError: () => {
          // An error occurred
          update('danger', Joomla.Text._('PLG_QUICKICON_JOOMLAUPDATE_ERROR'));
        },
      });
    }
  };

  const onBoot = () => {
    if (!Joomla
      || typeof Joomla.getOptions !== 'function'
      || !Joomla.getOptions('js-joomla-update')) {
      throw new Error('Script is not properly initialised');
    }

    setTimeout(checkForJoomlaUpdates, 2000);

    // Cleanup
    document.removeEventListener('DOMContentLoaded', onBoot);
  };

  // Initialize
  document.addEventListener('DOMContentLoaded', onBoot);
})(window, document, Joomla);
