# WoodWing Digital Editor - MathML sample component
Using the MathML component a user can insert scientific equations into a WoodWing Digital Article 

![MathML in action](https://github.com/WoodWing/digital-editor-mathml/blob/master/digital-editor-mathml.gif "MathML in action")

# Disclaimer 
WoodWing provides this plug-in as a sample implementation. This plug-in is provided ‘as is’ without support from WoodWing. The current status of this integration is not ready for production, it would require further development and proper QA. Usage is at your own risk.


## Installation & Configuration
* Copy the src folder to public accessible web folder
* Add the files from component-set to your component set
* Add the following your component-set localization files
"COMPONENT_MATHML_LABEL":"MathML"
* Add the following to your components-definition.json, compile the component set and upload it into your server  
```json
"components": [
        {
            "name": "mathml",
            "icon": "icons/components/mathml.svg",
            "label": { "key": "COMPONENT_MATHML_LABEL" },
            "selectionMethod":"handle",
            "showToolbar": "always",
            "properties": [
                "position",
                { "name": "mathml-data", "directiveKey": "html" }
            ]
        }    
],

"componentProperties": [
        {
            "name": "mathml-data",
            "label": "MathML",
            "control": {
                "type": "textarea",
                "inputPlaceholder": "MathML"
            },
            "dataType": "doc-html"
        }
],

"scripts": ["scripts/vendor.js", "scripts/mathml.js"]

```

## MathML Example
```
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <mi>x</mi> <mo>=</mo>
    <mrow>
        <mfrac>
            <mrow>
            <mo>&#x2212;</mo>
            <mi>b</mi>
            <mo>&#x00B1;</mo>
            <msqrt>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo>&#x2212;</mo>
                <mn>4</mn><mi>a</mi><mi>c</mi>
            </msqrt>
            </mrow>
            <mrow> <mn>2</mn><mi>a</mi> </mrow>
        </mfrac>
    </mrow>
</math>
```