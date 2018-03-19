$(document).ready(function() {

    var app = app || { };

    (function(){

        app.controller = {
            init: function(){
                app.router.init();
                app.animations.loadPage();
                app.events.init();
                
            },

        },

        app.vars = {
            currentPage: 0,
            prevPage: 0,
            defaultPage: "#creationsPage",
            menuOpen:0,
            preventClose:0,
        },
        
        app.animations = {
            loadPage: function(){

                if ($(window).width() >= 0 && $(window).width() < 1200 ) {

                    $("header").css({
                        "-webkit-transform":"translate(0)",
                        "transform":"translate(0)",
                        "opacity":"1",
                        "background":"rgba(240,198,71,1)"
                    });

                    $("header h1").css({
                        "-webkit-transform":"translate(0)",
                        "transform":"translate(0)",
                        "opacity":"1",
                    });

                };

                if ($(window).width() >= 1200) {

                    $("header").css({
                        "-webkit-transform":"translate(0)",
                        "transform":"translate(0)",
                        "opacity":"1",
                        "background":"rgba(240,198,71,1)"
                    });

                    $("header h1").css({
                        "-webkit-transform":"translate(0)",
                        "transform":"translate(0)",
                        "opacity":"1",
                    });

                };

                $("body>img#background").css({
                    "opacity":"0.3",
                });

                

                $("article>h1").css({
                    "-webkit-transform":"translateY(0)",
                    "transform":"translateY(0)",
                });

                $("article>h1").css({
                    "opacity":"1",
                });

                $("nav").css({
                    "opacity":"1",
                    "-webkit-transition":"all 0.7s ease 0.9s",
                    "transition":"all 0.7s ease 0.9s",
                });

                $("article>p").css({
                    "-webkit-transform":"translateY(0)",
                    "transform":"translateY(0)",
                    "opacity":"1",
                });

                this.afterLoad();
            },

            afterLoad: function(){
                $("section:not("+app.vars.currentPage+")").css({
                    "-webkit-transform":"translateX(20em)",
                    "transform":"translateX(20em)",
                });

                $("article>h1").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                    
                    if(app.vars.currentPage == "#creationsPage"){
                        $("img.creationImage").unveil(0, function() {
                            $(this).load(function() { this.style.opacity = 1; });
                        });
                    }
                });

            },

            closePage: function(page){
                $(page).css({
                    "-webkit-transform":"translateX(-5em)",
                    "transform":"translateX(-5em)",
                    "opacity":"0",
                    "z-index":"-2",
                });

                setTimeout(function(){
                   $(page).css({
                    "-webkit-transition":"all 0s ease",
                    "transition":"all 0s ease",
                    "-webkit-transform":"translateX(20em)",
                    "transform":"translateX(20em)",
                }); 

                    setTimeout(function(){
                       $(page).css({
                        "-webkit-transition":"all 1s ease",
                        "transition":"all 1s ease",
                        "display":"none",
                    }); 
                    },1);
                },1000);

            },

            openPage: function(page){
                $(page).css({
                    "display":"block",
                });

                setTimeout(function(){
                    $(page).css({
                        "display":"block",
                        "-webkit-transform":"translateX(0em)",
                        "transform":"translateX(0em)",
                        "opacity":"1",
                        "z-index":"0",
                    }); 
                },1);

            },

            switchPage: function(pageClose,pageOpen){
                this.closePage(pageClose);
                this.openPage(pageOpen);

                if(app.vars.currentPage == "#creationsPage"){
                    $("img.creationImage").unveil(0, function() {
                        $(this).load(function() { this.style.opacity = 1; });
                    });
                }
            },

            openMenu: function(){
                $("html, body").animate({ scrollTop: $('html').offset().top }, 500);

                $("nav").css({
                    "height":"18em",
                    "-webkit-transition":"all 0.7s ease 0s",
                    "transition":"all 0.7s ease 0s",
                });

                $("nav ul").css({
                    "-webkit-transform":"scale(1,1) translate(1.5em,0em)",
                    "transform":"scale(1,1) translate(1.5em,0em)",
                    "-webkit-transition":"all 0.5s ease 0.2s",
                    "transition":"all 0.5s ease 0.2s",
                });

                $(".menuFade").css({
                    "z-index":"1",
                    "opacity":"0.7",
                    "-webkit-transition":"opacity 1s ease, z-index 0.1s ease",
                    "transition":"opacity 1s ease, z-index 0.1s ease",
                });

                $("body").css({
                    "overflow-y":"hidden",
                });

                
                app.vars.menuOpen = 1;

            },

            CloseMenu: function(){
                if ($(window).width() >= 0 && $(window).width() < 1000 ) {
                    $("nav").css({
                        "height":"0em",
                        "-webkit-transition":"all 0.7s ease 0.2s",
                        "transition":"all 0.7s ease 0.2s",
                    });

                    $("nav ul").css({
                        "transform":"scale(0,0) translate(1.5em,0em)",
                        "-webkit-transform":"scale(0,0) translate(1.5em,0em)",
                        "-webkit-transition":"all 0.5s ease 0s",
                        "transition":"all 0.5s ease 0s",
                    });

                    $(".menuFade").css({
                        "z-index":"-1",
                        "opacity":"0",
                        "-webkit-transition":"opacity 1s ease, z-index 0.1s ease 1s",
                        "transition":"opacity 1s ease, z-index 0.1s ease 1s",
                    });

                }

                $("body").css({
                    "overflow-y":"auto",
                });

                app.vars.menuOpen = 0;
            },

            openItemInfo: function(item){
                console.log(item);

                $("html, body").animate({ scrollTop: $("section#creationsPage article ul li" + item + " h2").offset().top }, 500);

                $("section#creationsPage article ul li" + item + " div.itemInfo").css({
                    "max-height":"140em",
                    "-webkit-transition":"all 1s ease 0s",
                    "transition":"all 1s ease 0s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo p").css({
                    "-webkit-transform":"scale(1,1)",
                    "transform":"scale(1,1)",
                    "-webkit-transition":"all 1s ease 0.3s",
                    "transition":"all 1s ease 0.3s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo h2").css({
                    "-webkit-transform":"scale(1,1)",
                    "transform":"scale(1,1)",
                    "-webkit-transition":"all 0.4s ease 0.3s",
                    "transition":"all 0.4s ease 0.3s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo>img").css({
                    "-webkit-transform":"scale(1,1)",
                    "transform":"scale(1,1)",
                    "-webkit-transition":"all 1s ease 0.3s",
                    "transition":"all 1s ease 0.3s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo>video").css({
                    "-webkit-transform":"scale(1,1)",
                    "transform":"scale(1,1)",
                    "-webkit-transition":"all 1s ease 0.3s",
                    "transition":"all 1s ease 0.3s",
                });


                document.querySelector("section#creationsPage article ul li" + item + " div.itemInfo").setAttribute("open", "1");
            },

            closeItemInfo: function(item){
                console.log(item);
                $("section#creationsPage article ul li" + item + " div.itemInfo").css({
                    "max-height":"0em",
                    "-webkit-transition":"all 1s ease 0.3s",
                    "transition":"all 1s ease 0.3s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo p").css({
                    "-webkit-transform":"scale(0,0)",
                    "transform":"scale(0,0)",
                    "-webkit-transition":"all 0.4s ease 0s",
                    "transition":"all 0.7s ease 0s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo h2").css({
                    "-webkit-transform":"scale(1,0)",
                    "transform":"scale(1,0)",
                    "-webkit-transition":"all 0.4s ease 0s",
                    "transition":"all 0.7s ease 0s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo>img").css({
                    "-webkit-transform":"scale(0,0)",
                    "transform":"scale(0,0)",
                    "-webkit-transition":"all 0.4s ease 0s",
                    "transition":"all 0.7s ease 0s",
                });

                $("section#creationsPage article ul li" + item + " div.itemInfo>video").css({
                    "-webkit-transform":"scale(0,0)",
                    "transform":"scale(0,0)",
                    "-webkit-transition":"all 0.4s ease 0s",
                    "transition":"all 0.7s ease 0s",
                });

                document.querySelector("section#creationsPage article ul li" + item + " div.itemInfo").setAttribute("open", "0");
            }
        },

        app.events = {

            init: function(){
                this.menu();
                this.items();
            },
            
            menu: function(){
                $(".menuButton").click(function() {
                    if(app.vars.menuOpen == 0){
                        app.animations.openMenu();
                    } else {
                        app.animations.CloseMenu();
                    }
                });

                $(".menuFade").click(function() {
                    app.animations.CloseMenu();
                });

                $("nav ul li").click(function() {
                    app.animations.CloseMenu();
                });
            },

            items: function(){

                $('.item').click(function(){
                    var clickedID = "#"+this.id;
                    console.log(clickedID);
                    console.log(document.querySelector("section#creationsPage article ul li" + clickedID + " div.itemInfo").getAttribute("open"));

                    $( ".item h2" ).hover(
                        function() {
                            app.vars.preventClose=1;
                        }, function() {
                            app.vars.preventClose=0
                        }
                    );

                    $( ".item .itemInfo" ).hover(
                        function() {
                            app.vars.preventClose=1;
                        }, function() {
                            app.vars.preventClose=0
                        }
                    );


                    if(document.querySelector("section#creationsPage article ul li" + clickedID + " div.itemInfo").getAttribute("open") == "0"){
                        if(app.vars.currentPage == "#creationsPage"){
                            if (app.vars.preventClose !=1){
                                app.animations.openItemInfo(clickedID);
                            }
                        }
                    } else if(document.querySelector("section#creationsPage article ul li" + clickedID + " div.itemInfo").getAttribute("open") == "1"){
                        if(app.vars.currentPage == "#creationsPage"){
                            if (app.vars.preventClose !=1){
                                app.animations.closeItemInfo(clickedID);
                            }
                        }
                    }
                });

            },


        },

        app.router = {
        init: function(){
            routie({

                ':page': function(page) {
                    app.vars.prevPage = app.vars.currentPage;
                    app.vars.currentPage = "#"+page+"Page";
                    console.log(app.vars.currentPage);
                    console.log(app.vars.prevPage);

                    if (app.vars.prevPage != app.vars.currentPage) {
                        app.animations.switchPage(app.vars.prevPage,app.vars.currentPage);
                    };
                },

                'creations/:page': function(page) {
                    console.log("Zo doe je die ding");
                    // app.vars.currentPage = app.vars.defaultPage;
                    // app.animations.openPage(app.vars.defaultPage); 
                    
                    
                },

                '': function() {
                    //console.log(app.vars.prevPage);
                    app.vars.currentPage = app.vars.defaultPage;
                    app.animations.openPage(app.vars.defaultPage); 
                    
                    
                }
            });
        }
    };

        app.controller.init();
    }());

});