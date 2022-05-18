function initApplication() {
  var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // console.log(mutation)
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                // element added to DOM
                [].some.call(mutation.addedNodes, function(el) {
                    if (el.classList && el.classList.contains('tasksMilestones-inner')) {
                      var width_raw = $(el).find('div.progressBar-bar-line').attr('style');
                      if(width_raw) {
                        const regex = /width: [\d]+%/g;
                        const width = width_raw.match(regex)[0].replace('width: ', '').replace('%', '');
                        // $(el).text('hello');
                        $(el).prepend(`
                          <div class="progress" style="height: 20px; font-size: 12px">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ` + width + `%" aria-valuenow="` + width + `" aria-valuemin="0" aria-valuemax="100">
                            `+ width + '%' + `
                            </div>
                          </div>`);
                        }

                    }
                });
            }
        });
    });

    var config = {
      attributes: false,
      characterData: false,
      childList: true,
      subtree: true,
      attributeOldValue: false,
      characterDataOldValue: false
    };

    observer.observe(document.body, config);

}

initApplication();
