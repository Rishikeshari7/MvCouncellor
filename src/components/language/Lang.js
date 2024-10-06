
'use client'
import { useEffect,useRef,useState} from "react";
 function GoogleTranslate() {
    useEffect(() => {
      const addGoogleTranslate = () => {
        // Check if the script is already added to prevent duplicates
        if (!document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
          const script = document.createElement('script');
          script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          script.async = true;
          document.body.appendChild(script);
        }
  
        // Initialize Google Translate
        window.googleTranslateElementInit = () => {
          if (!document.getElementById('google_translate_element_initialized')) {
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,hi',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            }, 'google_translate_element');
  
            // Mark it initialized by adding an element
            const initFlag = document.createElement('div');
            initFlag.id = 'google_translate_element_initialized';
            document.body.appendChild(initFlag);
          }
        };
      };
  
      addGoogleTranslate();
    }, []);
    return <div id="google_translate_element" className=
    '  flex bg-custom-gradient3 mt-1 md:mt-[3px] mb-3 pl-[0px] pt-[0px] text-center justify-center items-center rounded-sm  text-[5px] w-[45px]' >
       
    </div>;
  }
  export default GoogleTranslate