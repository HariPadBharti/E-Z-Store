(function () {
    var app;
    window.Spaces = {
        data: new kendo.data.DataSource({
            transport: {
                read: {
                    url: "data/spaces.js",
                    type: "get",
                    dataType: "json"
                }
            },
            schema: {
                data: "spaces"
            }
        }),
        back: function () {
            app.navigate("#:back");
        },
        settings: function () {
            app.navigate("views/settings.html");
        }
    };

    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, { layout: "main-layout", transition: "fade" });
    }, false);

    window.app = app;
} ());
