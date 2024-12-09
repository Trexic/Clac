const mockData = {
  calculatorDisplayDataList: [
    {
      calculatorType: "Ипотека",
      sanitizedHtmlContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="material-symbols:download-sharp" data-node-id="26:186" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector" data-node-id="26:187" d="M12,16l-5,-5l1.4,-1.45l2.6,2.6v-8.15h2v8.15l2.6,-2.6l1.4,1.45zM4,20v-5h2v3h12v-3h2v5z" fill="currentColor"/>\n</g></svg>',
      sanitizedHtmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="tabler:trash" data-node-id="26:180" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_2" data-node-id="26:181" d="M4,7h16M10,11v6M14,11v6M5,7l1,12c0,0.53 0.21,1.039 0.59,1.414c0.37,0.375 0.88,0.586 1.41,0.586h8c0.53,0 1.04,-0.211 1.41,-0.586c0.38,-0.375 0.59,-0.884 0.59,-1.414l1,-12M9,7v-3c0,-0.265 0.11,-0.52 0.29,-0.707c0.19,-0.188 0.44,-0.293 0.71,-0.293h4c0.27,0 0.52,0.105 0.71,0.293c0.18,0.187 0.29,0.442 0.29,0.707v3" stroke="#164026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</g></svg>',
      htmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 1261155425" data-node-id="26:190" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_3" data-node-id="26:191" d="M12,18l4,-4l-1.4,-1.4l-1.6,1.6v-4.2h-2v4.2l-1.6,-1.6l-1.4,1.4zM5,8v11h14v-11zM5,21c-0.55,0 -1.02,-0.196 -1.41,-0.587c-0.39,-0.391 -0.59,-0.862 -0.59,-1.413v-12.475c0,-0.233 0.04,-0.458 0.11,-0.675c0.08,-0.217 0.19,-0.417 0.34,-0.6l1.25,-1.525c0.18,-0.233 0.41,-0.413 0.69,-0.538c0.27,-0.125 0.56,-0.188 0.86,-0.187h11.5c0.3,0 0.59,0.063 0.86,0.188c0.28,0.125 0.51,0.304 0.69,0.537l1.25,1.525c0.15,0.183 0.26,0.383 0.34,0.6c0.07,0.217 0.11,0.442 0.11,0.675v12.475c0,0.55 -0.2,1.021 -0.59,1.413c-0.39,0.392 -0.86,0.588 -1.41,0.587zM5.4,6h13.2l-0.85,-1h-11.5z" fill="currentColor"/>\n</g></svg>',
    },
    {
      calculatorType: "Автокредит",
      sanitizedHtmlContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="material-symbols:download-sharp_2" data-node-id="26:200" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_4" data-node-id="26:201" d="M12,16l-5,-5l1.4,-1.45l2.6,2.6v-8.15h2v8.15l2.6,-2.6l1.4,1.45zM4,20v-5h2v3h12v-3h2v5z" fill="currentColor"/>\n</g></svg>',
      sanitizedHtmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="tabler:trash_2" data-node-id="26:202" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_5" data-node-id="26:203" d="M4,7h16M10,11v6M14,11v6M5,7l1,12c0,0.53 0.21,1.039 0.59,1.414c0.37,0.375 0.88,0.586 1.41,0.586h8c0.53,0 1.04,-0.211 1.41,-0.586c0.38,-0.375 0.59,-0.884 0.59,-1.414l1,-12M9,7v-3c0,-0.265 0.11,-0.52 0.29,-0.707c0.19,-0.188 0.44,-0.293 0.71,-0.293h4c0.27,0 0.52,0.105 0.71,0.293c0.18,0.187 0.29,0.442 0.29,0.707v3" stroke="#164026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</g></svg>',
      htmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 1261155425_2" data-node-id="26:204" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_6" data-node-id="26:205" d="M12,18l4,-4l-1.4,-1.4l-1.6,1.6v-4.2h-2v4.2l-1.6,-1.6l-1.4,1.4zM5,8v11h14v-11zM5,21c-0.55,0 -1.02,-0.196 -1.41,-0.587c-0.39,-0.391 -0.59,-0.862 -0.59,-1.413v-12.475c0,-0.233 0.04,-0.458 0.11,-0.675c0.08,-0.217 0.19,-0.417 0.34,-0.6l1.25,-1.525c0.18,-0.233 0.41,-0.413 0.69,-0.538c0.27,-0.125 0.56,-0.188 0.86,-0.187h11.5c0.3,0 0.59,0.063 0.86,0.188c0.28,0.125 0.51,0.304 0.69,0.537l1.25,1.525c0.15,0.183 0.26,0.383 0.34,0.6c0.07,0.217 0.11,0.442 0.11,0.675v12.475c0,0.55 -0.2,1.021 -0.59,1.413c-0.39,0.392 -0.86,0.588 -1.41,0.587zM5.4,6h13.2l-0.85,-1h-11.5z" fill="currentColor"/>\n</g></svg>',
    },
    {
      calculatorType: "Потребительский кредит",
      sanitizedHtmlContent3:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="material-symbols:download-sharp_3" data-node-id="26:209" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_7" data-node-id="26:210" d="M12,16l-5,-5l1.4,-1.45l2.6,2.6v-8.15h2v8.15l2.6,-2.6l1.4,1.45zM4,20v-5h2v3h12v-3h2v5z" fill="currentColor"/>\n</g></svg>',
      sanitizedHtmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="tabler:trash_3" data-node-id="26:211" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_8" data-node-id="26:212" d="M4,7h16M10,11v6M14,11v6M5,7l1,12c0,0.53 0.21,1.039 0.59,1.414c0.37,0.375 0.88,0.586 1.41,0.586h8c0.53,0 1.04,-0.211 1.41,-0.586c0.38,-0.375 0.59,-0.884 0.59,-1.414l1,-12M9,7v-3c0,-0.265 0.11,-0.52 0.29,-0.707c0.19,-0.188 0.44,-0.293 0.71,-0.293h4c0.27,0 0.52,0.105 0.71,0.293c0.18,0.187 0.29,0.442 0.29,0.707v3" stroke="#164026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</g></svg>',
      htmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 1261155425_3" data-node-id="26:213" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_9" data-node-id="26:214" d="M12,18l4,-4l-1.4,-1.4l-1.6,1.6v-4.2h-2v4.2l-1.6,-1.6l-1.4,1.4zM5,8v11h14v-11zM5,21c-0.55,0 -1.02,-0.196 -1.41,-0.587c-0.39,-0.391 -0.59,-0.862 -0.59,-1.413v-12.475c0,-0.233 0.04,-0.458 0.11,-0.675c0.08,-0.217 0.19,-0.417 0.34,-0.6l1.25,-1.525c0.18,-0.233 0.41,-0.413 0.69,-0.538c0.27,-0.125 0.56,-0.188 0.86,-0.187h11.5c0.3,0 0.59,0.063 0.86,0.188c0.28,0.125 0.51,0.304 0.69,0.537l1.25,1.525c0.15,0.183 0.26,0.383 0.34,0.6c0.07,0.217 0.11,0.442 0.11,0.675v12.475c0,0.55 -0.2,1.021 -0.59,1.413c-0.39,0.392 -0.86,0.588 -1.41,0.587zM5.4,6h13.2l-0.85,-1h-11.5z" fill="currentColor"/>\n</g></svg>',
    },
  ],
};

export { mockData };
