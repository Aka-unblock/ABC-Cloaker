var page = new ABC({
        type: "blank",
        url: "https://example.com",
      });

      page.setType("" + document.getElementById("urltype").value);

      page.setUrl("" + document.getElementById("site").value);

      console.log(page.getCode());
      page.open();
    }
    class ABC {
      constructor(config = {}) {
        this.type = config.type || "blank";
        this.url = config.url || "about:blank";
      }
      setType(type) {
        if (!type) return;
        this.type = type;
      }
      setUrl(url) {
        if (!url) return;
        this.url = url;
      }
      getCode() {
        return (
          `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
          this.url +
          `"></iframe>`
        );
      }

      open() {
        if (this.type == "blank") {
          try {
            var page = window.open();
            page.document.body.innerHTML =
              `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
              this.url +
              `"></iframe>`;
          } catch {}
        } else if (this.type == "Blank") {
          try {
            var page = window.open();
            page.document.body.innerHTML =
              `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
              this.url +
              `"></iframe>`;
          } catch {}
        } else if (this.type == "blob") {
          try {
            var page = new Blob(
              [
                `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
                  this.url +
                  `"></iframe>`,
              ],
              { type: "text/html" }
            );
            window.open(URL.createObjectURL(page));
          } catch {}
        } else if (this.type == "Blob") {
          try {
            var page = new Blob(
              [
                `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
                  this.url +
                  `"></iframe>`,
              ],
              { type: "text/html" }
            );
            window.open(URL.createObjectURL(page));
          } catch {}
        } else if (this.type == "overwrite") {
          try {
            document.body.innerHTML =
              `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
              this.url +
              `"></iframe>`;
          } catch {}
        } else if (this.type == "Overwrite") {
          try {
            document.body.innerHTML =
              `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` +
              this.url +
              `"></iframe>`;
          } catch {}
        }
      }
