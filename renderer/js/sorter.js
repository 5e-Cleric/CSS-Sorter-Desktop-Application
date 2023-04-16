
function formatValue(string) {
  let resultstring = "";
  const valuetypes = [
    "rgb",
    "rgba",
    "hsl",
    "hsla",
    "hwb",
    "lab",
    "lch",
    "oklab",
    "oklch",
  ];
  for (let i = 0; i < valuetypes.length; i++) {
    const type = valuetypes[i];
    if (string.includes(type)) {
      break;
    }
  }
  return resultstring;
}

function sort() {
  const input = document.getElementById("codeinput").value;
  const output = document.getElementById("codeoutput");
  const order = document.getElementById("order").value;
  var propertieslist = [
    "--*",
    "-webkit-line-clamp",
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "animation",
    "animation-delay",
    "animation-delay-end",
    "animation-delay-start",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "azimuth",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "baseline-source",
    "block-ellipsis",
    "block-size",
    "block-step",
    "block-step-align",
    "block-step-insert",
    "block-step-round",
    "block-step-size",
    "bookmark-label",
    "bookmark-level",
    "bookmark-state",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-boundary",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "box-snap",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret",
    "caret-color",
    "caret-shape",
    "chains",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-adjust",
    "color-interpolation-filters",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "continue",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "elevation",
    "empty-cells",
    "fill",
    "fill-break",
    "fill-color",
    "fill-image",
    "fill-opacity",
    "fill-origin",
    "fill-position",
    "fill-repeat",
    "fill-rule",
    "fill-size",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "float-defer",
    "float-offset",
    "float-reference",
    "flood-color",
    "flood-opacity",
    "flow",
    "flow-from",
    "flow-into",
    "font",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "footnote-display",
    "footnote-policy",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphenate-limit-last",
    "hyphenate-limit-lines",
    "hyphenate-limit-zone",
    "hyphens",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "initial-letter",
    "initial-letter-align",
    "initial-letter-wrap",
    "inline-size",
    "inline-sizing",
    "input-security",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "leading-trim",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-clamp",
    "line-grid",
    "line-height",
    "line-height-step",
    "line-padding",
    "line-snap",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-break",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-knockout-left",
    "marker-knockout-right",
    "marker-mid",
    "marker-pattern",
    "marker-segment",
    "marker-side",
    "marker-start",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-lines",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-intrinsic-sizing",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-left",
    "nav-right",
    "nav-up",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pitch",
    "pitch-range",
    "place-content",
    "place-items",
    "place-self",
    "play-during",
    "pointer-events",
    "position",
    "print-color-adjust",
    "property-name",
    "quotes",
    "region-fragment",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "richness",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-merge",
    "ruby-overhang",
    "ruby-position",
    "running",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-inside",
    "shape-margin",
    "shape-outside",
    "spatial-navigation-action",
    "spatial-navigation-contain",
    "spatial-navigation-function",
    "speak",
    "speak-as",
    "speak-header",
    "speak-numeral",
    "speak-punctuation",
    "speech-rate",
    "stress",
    "string-set",
    "stroke",
    "stroke-align",
    "stroke-alignment",
    "stroke-break",
    "stroke-color",
    "stroke-dash-corner",
    "stroke-dash-justify",
    "stroke-dashadjust",
    "stroke-dasharray",
    "stroke-dashcorner",
    "stroke-dashoffset",
    "stroke-image",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-origin",
    "stroke-position",
    "stroke-repeat",
    "stroke-size",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-box",
    "text-decoration-skip-ink",
    "text-decoration-skip-inset",
    "text-decoration-skip-self",
    "text-decoration-skip-spaces",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-decoration-trim",
    "text-edge",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-skip",
    "text-emphasis-style",
    "text-group-align",
    "text-indent",
    "text-justify",
  ];

  var myorder = [
    "position",
    "top",
    "bottom",
    "right",
    "left",
    "float",
    "clear",
    "z-index",
    "background",
    "background-attachment",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "box-shadow",
    "opacity",
    "visibility",
    "clip",
    "content",
    "display",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "order",
    "justify-content",
    "align-content",
    "align-items",
    "align-self",
    "vertical-align",
    "overflow",
    "overflow-x",
    "overflow-y",
    "box-sizing",
    "max-height",
    "max-width",
    "height",
    "width",
    "min-height",
    "min-width",
    "aspect-ratio",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-boundary",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-break",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "resize",
    "direction",
    "color",
    "font",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-box",
    "text-decoration-skip-ink",
    "text-decoration-skip-inset",
    "text-decoration-skip-self",
    "text-decoration-skip-spaces",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-decoration-trim",
    "text-edge",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-skip",
    "text-emphasis-style",
    "text-group-align",
    "text-indent",
    "text-justify",
    "letter-spacing",
    "line-height",
    "word-break",
    "word-spacing",
    "word-wrap",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "transform",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "backface-visibility",
    "perspective",
    "perspective-origin",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "table-layout",
    "empty-cells",
    "caption-side",
    "white-space",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "counter-increment",
    "counter-reset",
    "cursor",
    "quotes",
    "tab-size",
  ];
  let inputWithoutAtRules;
  let atRules = [];
  let cleaninput;

  function separateLayers() {
    // Regular expression to match @layer rules and their content
    const layerRuleRegex = /@layer\s+(?<name>[\w-]+)(\s+(?<media>.+?))?\s*\{(?<content>(?:[^{}]*\{[^{}]*\})*[^{}]*?)\}/gs;

    // Array to store the extracted layer rules
    const layerRules = [];

    // Extract all @layer rules and their content and store them in the array
    input.replace(layerRuleRegex, (match, name, media, content) => {
      layerRules.push({ name: name, media: media || "", content: content });
    });

    // Log the extracted layer rules to the console
    console.log(layerRules);

  }

  if (input.search(/@layer\s+(?<name>[\w-]+)(\s+(?<media>.+?))?\s*\{(?<content>(?:[^{}]*\{[^{}]*\})*[^{}]*?)\}/gs) !== -1) {
    separateLayers();
  }



  function extractAtRules() {

    // Regular expression to match all the at-rules
    const atRuleRegex = /@(?:import[^;\n]+;|[^{]*\{[^{}]*\})/g;

    // Remove all the at-rules from the CSS code and store them in the array
    inputWithoutAtRules = input.replace(atRuleRegex, (match) => {
      atRules.push(match);
      return "";
    });
  }
  if(input.search(/@(?:import[^;\n]+;|[^{]*\{[^{}]*\})/g) !== -1) {
    extractAtRules();
    console.log(atRules);
    cleaninput = inputWithoutAtRules.replace(/[\n\r]/g, ""); /* Gets rid of jumplines */
  } else { 
    console.log("There are no At rules")
    cleaninput = input.replace(/[\n\r]/g, ""); /* Gets rid of jumplines */
  }
  
  
  



  let rulescount = cleaninput.split("}"); /*Separates all Rules of code */

  /*Each section is divided in functions that format each thing, and a compiler to add the code back together at the end. */

  let allRules = [];

  for (let i = 0; i < rulescount.length; i++) {
    const eachRule = rulescount[i];

    let divided = eachRule.trim().split("{");
    if (divided.toString().trim() !== "") {
      let declarations = divided[1].trim().split(";");
      let selector = divided[0].trim();

      let thisRule = [selector, []];

      for (let j = 0; j < declarations.length; j++) {
        const eachProp = declarations[j];
        if (eachProp.trim() !== "") {
          const property = eachProp.split(":")[0].trim();
          const value = eachProp.split(":")[1].trim();
          thisRule[1].push([property, value]);
        }
      }
      allRules.push(thisRule);
    }
  }

  function result() {
    let formatedtext = "";

    function printAtRules(){

    };

    printAtRules();

    allRules.forEach((rule) => {
      let selector = rule[0];
      let declarations = rule[1];

      formatedtext += selector + " {\n";


      function declarationSorter(declarations, order) {
        let sorted = [];
      
        switch (order) {
          case "alpha":
            sorted = declarations.sort();
            break;
          case "type":
            sorted = declarations.sort(function (a, b) {
              const first = a[0];
              const second = b[0];
              if (
                (first.includes("--") && !second.includes("--")) ||
                (first.includes("--") && second.includes("--"))
              ) {
                return -1;
              }
              if (!first.includes("--") && second.includes("--")) {
                return 1;
              }
              if (!first.includes("--") && !second.includes("--")) {
                return myorder.indexOf(first) - myorder.indexOf(second);
              }
            });
      
            break;
          case "lengthdesc":
            sorted = declarations.sort(function (a, b) {
              let alength = a[0].length + a[1].length;
              let blength = b[0].length + b[1].length;
              return blength - alength;
            });
            break;
          case "lengthasc":
            sorted = declarations.sort(function (a, b) {
              let alength = a[0].length + a[1].length;
              let blength = b[0].length + b[1].length;
              return alength - blength;
            });
            break;
          default:
            sorted = declarations;
            break;
        }
      }

      declarationSorter(declarations, order);

      declarations.forEach((declaration) => {
        let property = declaration[0];
        let value = declaration[1];
        if (property.startsWith('--')) {
            islastvar = 1;
        }
        

        formatedtext += "    " + property + ": " + value + ";\n";
      });

      formatedtext += "}\n\n";
    });

    return formatedtext;
  }

  //console.log(result());

  output.value = result();



}
