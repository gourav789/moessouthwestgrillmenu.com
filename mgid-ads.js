/* ============================================================
   MGID AD INJECTION
   - In-content widget (2078813) after the 2nd, 5th and 7th
     paragraphs of the article.
   - In-article widget (2078818) directly before the footer.
   Works on every current page and any future post that
   includes this script and uses the same page template.
============================================================ */
(function () {
    "use strict";

    var IN_CONTENT_WIDGET_ID = "2078813";
    var BEFORE_FOOTER_WIDGET_ID = "2078818";
    var PARAGRAPH_POSITIONS = [2, 5, 7]; // insert AFTER these paragraph numbers
    var MGID_LOADER_SRC = "https://jsc.mgid.com/site/1110609.js";

    // Ensure the mgid loader library is present in the <head>.
    // Runs immediately so the library starts loading as early as possible,
    // and auto-covers any future post that only includes this script.
    function ensureMgidLoader() {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src && scripts[i].src.indexOf("jsc.mgid.com/site/1110609.js") !== -1) {
                return; // already present, don't duplicate
            }
        }
        var loader = document.createElement("script");
        loader.src = MGID_LOADER_SRC;
        loader.async = true;
        (document.head || document.getElementsByTagName("head")[0] || document.documentElement).appendChild(loader);
    }

    ensureMgidLoader();

    function buildWidget(widgetId) {
        var wrap = document.createElement("div");
        wrap.className = "mgid-ad-slot";
        wrap.style.cssText =
            "margin:32px auto;text-align:center;max-width:100%;clear:both;";

        var widget = document.createElement("div");
        widget.setAttribute("data-type", "_mgwidget");
        widget.setAttribute("data-widget-id", widgetId);

        wrap.appendChild(widget);
        return wrap;
    }

    function getContentParagraphs() {
        var container = document.querySelector(".container");
        if (!container) return [];

        // Prefer the main body paragraphs (direct children of sections).
        var paras = Array.prototype.slice.call(
            container.querySelectorAll("section > p")
        );

        // Fallback to any paragraph inside the content container.
        if (paras.length < PARAGRAPH_POSITIONS.length) {
            paras = Array.prototype.slice.call(container.querySelectorAll("p"));
        }
        return paras;
    }

    function insertInContentAds() {
        var paras = getContentParagraphs();
        if (!paras.length) return;

        PARAGRAPH_POSITIONS.forEach(function (pos) {
            var target = paras[pos - 1];
            if (target && target.parentNode) {
                target.parentNode.insertBefore(
                    buildWidget(IN_CONTENT_WIDGET_ID),
                    target.nextSibling
                );
            }
        });
    }

    function insertBeforeFooterAd() {
        var footer =
            document.querySelector(".restaurant-footer") ||
            document.querySelector("footer");
        if (footer && footer.parentNode) {
            footer.parentNode.insertBefore(
                buildWidget(BEFORE_FOOTER_WIDGET_ID),
                footer
            );
        }
    }

    function loadMgid() {
        (function (w, q) {
            w[q] = w[q] || [];
            w[q].push(["_mgc.load"]);
        })(window, "_mgq");
    }

    function init() {
        insertInContentAds();
        insertBeforeFooterAd();
        loadMgid();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
