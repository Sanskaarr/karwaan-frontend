// components/InstagramWidget.tsx
'use client'
import React, { useEffect } from 'react';

const InstagramWidget: React.FC = () => {
  useEffect(() => {
    // EmbedSocial script
    (function(d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://embedsocial.com/cdn/ht.js';
      // Narrow down the type to HTMLScriptElement
      const scriptElement = js as HTMLScriptElement;
      // Accessing src property safely
      const scriptSrc = scriptElement.src;
      d.getElementsByTagName('head')[0].appendChild(js);
    })(document, 'script', 'EmbedSocialHashtagScript');
  }, []);

  return (
    <div className="embedsocial-hashtag" data-ref="218878fa5b19ed9f8638b94316c7dcb2edf5c752">
    </div>
  );
};

export default InstagramWidget;
