(function(){
    // Load the MathJax library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js';
    document.head.append(script)

    
    document.readyState === 'complete' ? onLoad() : window.addEventListener('load', onLoad);

    function onLoad() {
        // Perform MathJax typesetting when a MATH element is added
        // Note that loading the library performs a one time parse of all elements.
        // So for the editor we need to manually call MathJax.typeset() to parse the elements.
        const observer = new MutationObserver(function(mutationsList) {
            for (const mutation of mutationsList) {
                for (const addedNode of Array.from(mutation.addedNodes)) {
                    if (addedNode.nodeType !== Node.ELEMENT_NODE) {
                        continue;
                    }
                    // Already processed by mathjax
                    if (['MJX-CONTAINER'].includes(addedNode.tagName.toUpperCase())) {
                        continue;
                    }
                    if(addedNode.tagName.toUpperCase() === 'MATH' || addedNode.querySelector('math')) {
                        MathJax.typeset();
                    }
                };
            };
        });
        
        observer.observe(document.body, { subtree: true, childList: true });
    }

})();