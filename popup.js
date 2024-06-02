  document.getElementById('openCurrentTabUrl').addEventListener('click', function() {
      const predefinedUrl = "https://freedium.cfd/"; // Change this to your predefined URL

      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          const currentTabUrl = tabs[0].url;
          const newUrl = predefinedUrl + currentTabUrl;

          chrome.tabs.create({ url: newUrl });
      });
  });