var woocommerce_params = {
        "ajax_url": "/ambiente9/wp-admin/admin-ajax.php",
        "wc_ajax_url": "/ambiente9/?wc-ajax=%%endpoint%%",
        "i18n_password_show": "Mostrar senha",
        "i18n_password_hide": "Ocultar senha"
    };
    //# sourceURL=woocommerce-js-extra

{"dzsap_site_url":"https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/","pluginurl":"https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-content\/plugins\/dzs-zoomsounds\/audioplayer\/","dzsap_curr_user":0,"version":"6.86","view_replace_audio_shortcode":"off","ajax_url":"https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-admin\/admin-ajax.php","action_received_time_total":"send_total_time"}

(function() {
                                function formatTime(date, tz) {
                                    const parts = new Intl.DateTimeFormat("en-GB", {
                                        timeZone: tz,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: false
                                    }).formatToParts(date);

                                    const get = (type) => parts.find(p => p.type === type)?.value ?? "00";
                                    return `${get("hour")}:${get("minute")}:${get("second")}`;
                                }

                                function tick() {
                                    const now = new Date();
                                    document.querySelectorAll("#tz-grid .tz-card").forEach(card => {
                                        const tz = card.getAttribute("data-tz") || "UTC";
                                        const timeEl = card.querySelector(".tz-time");
                                        if (timeEl)
                                            timeEl.textContent = formatTime(now, tz);
                                    });
                                }

                                tick();
                                setInterval(tick, 1000);
                            })();

(function() {

                                function formatTime(date, tz) {

                                    const parts = new Intl.DateTimeFormat("en-GB", {
                                        timeZone: tz,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: false
                                    }).formatToParts(date)

                                    const get = (t) => parts.find(p => p.type === t)?.value ?? "00"

                                    return `${get("hour")}:${get("minute")}:${get("second")}`

                                }

                                function tick() {

                                    const now = new Date()

                                    document.querySelectorAll("#tz-tab-grid .tz-tab-card").forEach(card => {

                                        const tz = card.getAttribute("data-tz") || "UTC"

                                        const el = card.querySelector(".tz-tab-time")

                                        if (el)
                                            el.textContent = formatTime(now, tz)

                                    })

                                }

                                tick()

                                setInterval(tick, 1000)

                            })();

(function() {
                                    function formatTime(date, tz) {
                                        const parts = new Intl.DateTimeFormat("en-GB", {
                                            timeZone: tz,
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            hour12: false
                                        }).formatToParts(date);

                                        const get = (type) => parts.find(p => p.type === type)?.value ?? "00";
                                        return `${get("hour")}:${get("minute")}:${get("second")}`;
                                    }

                                    function tick() {
                                        const now = new Date();
                                        document.querySelectorAll("#tz-grid .tz-card").forEach(card => {
                                            const tz = card.getAttribute("data-tz") || "UTC";
                                            const timeEl = card.querySelector(".tz-time");
                                            if (timeEl)
                                                timeEl.textContent = formatTime(now, tz);
                                        });
                                    }

                                    tick();
                                    setInterval(tick, 1000);
                                })();

(function() {
                                function formatTime(date, tz) {
                                    const parts = new Intl.DateTimeFormat("en-GB", {
                                        timeZone: tz,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: false
                                    }).formatToParts(date);

                                    const get = (type) => parts.find(p => p.type === type)?.value ?? "00";
                                    return `${get("hour")}:${get("minute")}:${get("second")}`;
                                }

                                function tick() {
                                    const now = new Date();
                                    document.querySelectorAll("#tz-grid .tz-card").forEach(card => {
                                        const tz = card.getAttribute("data-tz") || "UTC";
                                        const timeEl = card.querySelector(".tz-time");
                                        if (timeEl)
                                            timeEl.textContent = formatTime(now, tz);
                                    });
                                }

                                tick();
                                setInterval(tick, 1000);
                            })();

(function() {
                                function formatTime(date, tz) {
                                    const parts = new Intl.DateTimeFormat("en-GB", {
                                        timeZone: tz,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: false
                                    }).formatToParts(date);

                                    const get = (type) => parts.find(p => p.type === type)?.value ?? "00";
                                    return `${get("hour")}:${get("minute")}:${get("second")}`;
                                }

                                function tick() {
                                    const now = new Date();
                                    document.querySelectorAll("#tz-grid .tz-card").forEach(card => {
                                        const tz = card.getAttribute("data-tz") || "UTC";
                                        const timeEl = card.querySelector(".tz-time");
                                        if (timeEl)
                                            timeEl.textContent = formatTime(now, tz);
                                    });
                                }

                                tick();
                                setInterval(tick, 1000);
                            })();

if (typeof hasAmeliaEntitiesApiCall === 'undefined' && ('' === '' && '' !== '1')) {
                                        var hasAmeliaEntitiesApiCall = true;
                                    }
                                    var ameliaShortcodeData = (typeof ameliaShortcodeData === 'undefined') ? [] : ameliaShortcodeData;
                                    ameliaShortcodeData.push(
                                    {
                                        'hasApiCall': (typeof hasAmeliaEntitiesApiCall !== 'undefined') && hasAmeliaEntitiesApiCall,
                                        'trigger': '',
                                        'trigger_type': '',
                                        'triggered_form': 'sbsNew',
                                        'in_dialog': '',
                                        'show': '',
                                        'counter': '1000',
                                        'category': '',
                                        'service': '',
                                        'employee': '',
                                        'location': '',
                                        'package': '',
                                        'layout': '1',
                                    }
                                    );

                                    var ameliaShortcodeDataTriggered = (typeof ameliaShortcodeDataTriggered === 'undefined') ? [] : ameliaShortcodeDataTriggered;
                                    if (ameliaShortcodeData[ameliaShortcodeData.length - 1].trigger !== '') {
                                        if (ameliaShortcodeDataTriggered.filter(a => a.counter === ameliaShortcodeData[ameliaShortcodeData.length - 1].counter).length === 0) {
                                            ameliaShortcodeDataTriggered.push(ameliaShortcodeData.pop());
                                        } else {
                                            ameliaShortcodeData.pop()
                                        }
                                    }
                                    if (typeof hasAmeliaEntitiesApiCall !== 'undefined' && hasAmeliaEntitiesApiCall) {
                                        hasAmeliaEntitiesApiCall = false;
                                    }

if (typeof hasAmeliaEntitiesApiCall === 'undefined' && ('' === '' && '' !== '1')) {
                                var hasAmeliaEntitiesApiCall = true;
                            }
                            var ameliaShortcodeData = (typeof ameliaShortcodeData === 'undefined') ? [] : ameliaShortcodeData;
                            ameliaShortcodeData.push(
                            {
                                'hasApiCall': (typeof hasAmeliaEntitiesApiCall !== 'undefined') && hasAmeliaEntitiesApiCall,
                                'trigger': '',
                                'trigger_type': '',
                                'triggered_form': 'sbsNew',
                                'in_dialog': '',
                                'show': '',
                                'counter': '1001',
                                'category': '',
                                'service': '',
                                'employee': '',
                                'location': '',
                                'package': '',
                                'layout': '1',
                            }
                            );

                            var ameliaShortcodeDataTriggered = (typeof ameliaShortcodeDataTriggered === 'undefined') ? [] : ameliaShortcodeDataTriggered;
                            if (ameliaShortcodeData[ameliaShortcodeData.length - 1].trigger !== '') {
                                if (ameliaShortcodeDataTriggered.filter(a => a.counter === ameliaShortcodeData[ameliaShortcodeData.length - 1].counter).length === 0) {
                                    ameliaShortcodeDataTriggered.push(ameliaShortcodeData.pop());
                                } else {
                                    ameliaShortcodeData.pop()
                                }
                            }
                            if (typeof hasAmeliaEntitiesApiCall !== 'undefined' && hasAmeliaEntitiesApiCall) {
                                hasAmeliaEntitiesApiCall = false;
                            }

if (typeof hasAmeliaEntitiesApiCall === 'undefined' && ('' === '' && '' !== '1')) {
                                var hasAmeliaEntitiesApiCall = true;
                            }
                            var ameliaShortcodeData = (typeof ameliaShortcodeData === 'undefined') ? [] : ameliaShortcodeData;
                            ameliaShortcodeData.push(
                            {
                                'hasApiCall': (typeof hasAmeliaEntitiesApiCall !== 'undefined') && hasAmeliaEntitiesApiCall,
                                'trigger': '',
                                'trigger_type': '',
                                'triggered_form': 'sbsNew',
                                'in_dialog': '',
                                'show': '',
                                'counter': '1002',
                                'category': '',
                                'service': '',
                                'employee': '',
                                'location': '',
                                'package': '',
                                'layout': '1',
                            }
                            );

                            var ameliaShortcodeDataTriggered = (typeof ameliaShortcodeDataTriggered === 'undefined') ? [] : ameliaShortcodeDataTriggered;
                            if (ameliaShortcodeData[ameliaShortcodeData.length - 1].trigger !== '') {
                                if (ameliaShortcodeDataTriggered.filter(a => a.counter === ameliaShortcodeData[ameliaShortcodeData.length - 1].counter).length === 0) {
                                    ameliaShortcodeDataTriggered.push(ameliaShortcodeData.pop());
                                } else {
                                    ameliaShortcodeData.pop()
                                }
                            }
                            if (typeof hasAmeliaEntitiesApiCall !== 'undefined' && hasAmeliaEntitiesApiCall) {
                                hasAmeliaEntitiesApiCall = false;
                            }

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/ambiente9/*"},{"not":{"href_matches":["/ambiente9/wp-*.php","/ambiente9/wp-admin/*","/ambiente9/wp-content/uploads/*","/ambiente9/wp-content/*","/ambiente9/wp-content/plugins/*","/ambiente9/wp-content/themes/hello-elementor/*","/ambiente9/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
        const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
        const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let lazyloadBackground = entry.target;
                    if (lazyloadBackground) {
                        lazyloadBackground.classList.add('e-lazyloaded');
                    }
                    lazyloadBackgroundObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '200px 0px 200px 0px'
        });
        lazyloadBackgrounds.forEach((lazyloadBackground) => {
            lazyloadBackgroundObserver.observe(lazyloadBackground);
        });
    };
    const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
    ];
    events.forEach((event) => {
        document.addEventListener(event, lazyloadRunObserver);
    });

(function() {
        var c = document.body.className;
        c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
        document.body.className = c;
    })();

var elementorFrontendConfig = {
        "environmentMode": {
            "edit": false,
            "wpPreview": false,
            "isScriptDebug": false
        },
        "i18n": {
            "shareOnFacebook": "Compartilhar no Facebook",
            "shareOnTwitter": "Compartilhar no Twitter",
            "pinIt": "Fixar",
            "download": "Baixar",
            "downloadImage": "Baixar imagem",
            "fullscreen": "Tela cheia",
            "zoom": "Zoom",
            "share": "Compartilhar",
            "playVideo": "Reproduzir v\u00eddeo",
            "previous": "Anterior",
            "next": "Pr\u00f3ximo",
            "close": "Fechar",
            "a11yCarouselPrevSlideMessage": "Slide anterior",
            "a11yCarouselNextSlideMessage": "Pr\u00f3ximo slide",
            "a11yCarouselFirstSlideMessage": "Este \u00e9 o primeiro slide",
            "a11yCarouselLastSlideMessage": "Este \u00e9 o \u00faltimo slide",
            "a11yCarouselPaginationBulletMessage": "Ir para o slide"
        },
        "is_rtl": false,
        "breakpoints": {
            "xs": 0,
            "sm": 480,
            "md": 768,
            "lg": 1201,
            "xl": 1440,
            "xxl": 1600
        },
        "responsive": {
            "breakpoints": {
                "mobile": {
                    "label": "Dispositivos m\u00f3veis no modo retrato",
                    "value": 767,
                    "default_value": 767,
                    "direction": "max",
                    "is_enabled": true
                },
                "mobile_extra": {
                    "label": "Dispositivos m\u00f3veis no modo paisagem",
                    "value": 880,
                    "default_value": 880,
                    "direction": "max",
                    "is_enabled": false
                },
                "tablet": {
                    "label": "Tablet no modo retrato",
                    "value": 1200,
                    "default_value": 1024,
                    "direction": "max",
                    "is_enabled": true
                },
                "tablet_extra": {
                    "label": "Tablet no modo paisagem",
                    "value": 1200,
                    "default_value": 1200,
                    "direction": "max",
                    "is_enabled": false
                },
                "laptop": {
                    "label": "Notebook",
                    "value": 1366,
                    "default_value": 1366,
                    "direction": "max",
                    "is_enabled": true
                },
                "widescreen": {
                    "label": "Tela ampla (widescreen)",
                    "value": 2560,
                    "default_value": 2400,
                    "direction": "min",
                    "is_enabled": false
                }
            },
            "hasCustomBreakpoints": true
        },
        "version": "3.35.4",
        "is_static": false,
        "experimentalFeatures": {
            "e_font_icon_svg": true,
            "additional_custom_breakpoints": true,
            "container": true,
            "e_optimized_markup": true,
            "theme_builder_v2": true,
            "hello-theme-header-footer": true,
            "e_pro_free_trial_popup": true,
            "nested-elements": true,
            "home_screen": true,
            "global_classes_should_enforce_capabilities": true,
            "e_variables": true,
            "cloud-library": true,
            "e_opt_in_v4_page": true,
            "e_components": true,
            "e_interactions": true,
            "e_editor_one": true,
            "import-export-customization": true,
            "mega-menu": true,
            "e_pro_variables": true
        },
        "urls": {
            "assets": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-content\/plugins\/elementor\/assets\/",
            "ajaxurl": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-admin\/admin-ajax.php",
            "uploadUrl": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-content\/uploads"
        },
        "nonces": {
            "floatingButtonsClickTracking": "592deb2bf0"
        },
        "swiperClass": "swiper",
        "settings": {
            "page": [],
            "editorPreferences": []
        },
        "kit": {
            "active_breakpoints": ["viewport_mobile", "viewport_tablet", "viewport_laptop"],
            "viewport_laptop": 1366,
            "viewport_tablet": 1200,
            "global_image_lightbox": "yes",
            "lightbox_enable_counter": "yes",
            "lightbox_enable_fullscreen": "yes",
            "lightbox_enable_zoom": "yes",
            "lightbox_enable_share": "yes",
            "lightbox_title_src": "title",
            "lightbox_description_src": "description",
            "woocommerce_notices_elements": []
        },
        "post": {
            "id": 5927,
            "title": "Chessed%20Hashem%20%E2%80%93%20A%20Consultoria%20Espiritual%20%C3%A9%20um%20reencontro%20com%20quem%20voc%C3%AA%20realmente%20%C3%A9%21",
            "excerpt": "",
            "featuredImage": false
        }
    };
    //# sourceURL=elementor-frontend-js-before

var wc_order_attribution = {
        "params": {
            "lifetime": 1.0000000000000000818030539140313095458623138256371021270751953125e-5,
            "session": 30,
            "base64": false,
            "ajaxurl": "https://projetos.voppecomunicacao.com.br/ambiente9/wp-admin/admin-ajax.php",
            "prefix": "wc_order_attribution_",
            "allowTracking": true
        },
        "fields": {
            "source_type": "current.typ",
            "referrer": "current_add.rf",
            "utm_campaign": "current.cmp",
            "utm_source": "current.src",
            "utm_medium": "current.mdm",
            "utm_content": "current.cnt",
            "utm_id": "current.id",
            "utm_term": "current.trm",
            "utm_source_platform": "current.plt",
            "utm_creative_format": "current.fmt",
            "utm_marketing_tactic": "current.tct",
            "session_entry": "current_add.ep",
            "session_start_time": "current_add.fd",
            "session_pages": "session.pgs",
            "session_count": "udata.vst",
            "user_agent": "udata.uag"
        }
    };
    //# sourceURL=wc-order-attribution-js-extra

window.gtranslateSettings = /* document.write */
    window.gtranslateSettings || {};
    window.gtranslateSettings['30969496'] = {
        "default_language": "pt",
        "languages": ["pt", "en", "iw", "es"],
        "url_structure": "none",
        "flag_style": "2d",
        "flag_size": 32,
        "wrapper_selector": "#gt-wrapper-30969496",
        "alt_flags": {
            "en": "usa",
            "pt": "brazil"
        },
        "horizontal_position": "inline",
        "flags_location": "\/ambiente9\/wp-content\/plugins\/gtranslate\/flags\/"
    };
    //# sourceURL=gt_widget_script_30969496-js-before

var localeLanguage = ["pt_BR"];
    var wpAmeliaSettings = {
        "capabilities": [],
        "additionalCapabilities": [],
        "daysOff": [],
        "general": {
            "itemsPerPage": 12,
            "appointmentsPerPage": 100,
            "eventsPerPage": 100,
            "servicesPerPage": 100,
            "customersFilterLimit": 100,
            "eventsFilterLimit": 1000,
            "calendarEmployeesPreselected": 0,
            "phoneDefaultCountryCode": "br",
            "timeSlotLength": 300,
            "serviceDurationAsSlot": false,
            "defaultAppointmentStatus": "approved",
            "gMapApiKey": "",
            "googleClientId": "",
            "googleAccessToken": "{\"access_token\":\"ya29.a0ATkoCc6GsXCtnBWRNOgayYJdFvUvH8gWyoNQNxh01jHk9KprVYdN51rcZLl5R8c2cTcQQ_VOke1V3aNTAlknnvcyfferCpzV44mLxGDL_Nz3n5iIw7Mw6_J_6oJxjwYMpE1F8no0neAKkonGgk1WvEh-0fVPOsoyeZ5WkZymAWzJOyBkJavr_k_GOy4Too3CPh3Yg3PS7gaCgYKAXASARISFQHGX2Mi1ocOqRsoUC97fVq2MJ_exQ0209\",\"expires_in\":3599,\"scope\":\"https:\\/\\/www.googleapis.com\\/auth\\/calendar.readonly https:\\/\\/www.googleapis.com\\/auth\\/calendar.events openid https:\\/\\/www.googleapis.com\\/auth\\/userinfo.email https:\\/\\/www.googleapis.com\\/auth\\/userinfo.profile\",\"token_type\":\"Bearer\",\"id_token\":\"eyJhbGciOiJSUzI1NiIsImtpZCI6IjUzMDcyNGQ0OTE3M2EzZWQ2YjRhMDBhYTYzNDQyMDMwMGQ3MmFlNWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3NjY1OTQ5MDY4MzktNW1pcDdlcGp2OW1nZ2N2bjhkcXYzbzRmdWI3aDFlM2IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NjY1OTQ5MDY4MzktNW1pcDdlcGp2OW1nZ2N2bjhkcXYzbzRmdWI3aDFlM2IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDgyODU5NDQ0NTI3MzQwNTM4NTQiLCJlbWFpbCI6Imdlc3Rhby50cmFmZWdvLnZvcHBlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWExWZmVqQWxWalBHRzFZVFY5TnFfUSIsImlhdCI6MTc3MzY5MjU0NSwiZXhwIjoxNzczNjk2MTQ1fQ.KKF9uh4sXMHXrVA-KmAD16NcqDOkt1rqJwFawFr0yF5yqyfnIxyqZbljhUOJ2mH4QVuQVhPD2viRZnCUkE7pxkQAD1Psat61neIggW29Kim8xsp_7okebj0Uhu5X8auyNJ6BmP-x3tRubvYRjAZDbtuwQXccPNXK1sEzjBDbSgit3vSCbOIh8dwj7JvAOt1q_Vx97-4BkKQxhWjbKcYRyk5g9MtDLfpxz1UWKPCstTDUQOxx_Ce6hFCFCihBGqHEJLjaWGSBwz2IDX4LdBt4ydo9P7dcurFs0nq41X9zxf6TZbBtboiMLx7OK_vxG6lOwE-iy5z5pH5uddUCl7u5sw\",\"created\":1773692545,\"refresh_token\":\"1\\/\\/06Sl_2kAVZ4aeCgYIARAAGAYSNwF-L9Irrpjm4-_xr6E4e6D69raP_C0FAmtYb-eV15gIBY6_nA8Q42WplRoZjRuZuNYy_UpsXh8\"}",
            "googleAccountData": {
                "name": "Gestor Tr\u00e1fego",
                "email": "gestao.trafego.voppe@gmail.com",
                "picture": "https://lh3.googleusercontent.com/a/ACg8ocLKt-iMm5PXDg5sxivR0EyRxpZ7UqUEFBQ4ppTYG67lWcdp9UE=s96-c"
            },
            "outlookAccessToken": "",
            "outlookAccountData": null,
            "addToCalendar": true,
            "requiredPhoneNumberField": false,
            "requiredEmailField": true,
            "numberOfDaysAvailableForBooking": 365,
            "minimumTimeRequirementPriorToBooking": 600,
            "minimumTimeRequirementPriorToCanceling": 86400,
            "minimumTimeRequirementPriorToRescheduling": 86400,
            "showClientTimeZone": false,
            "redirectUrlAfterAppointment": "",
            "customFieldsUploadsPath": "",
            "customFieldsAllowedExtensions": {
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".png": "image/png",
                ".mp3": "audio/mpeg",
                ".mpeg": "video/mpeg",
                ".mp4": "video/mp4",
                ".txt": "text/plain",
                ".csv": "text/plain",
                ".xls": "application/vnd.ms-excel",
                ".pdf": "application/pdf",
                ".doc": "application/msword",
                ".docx": "application/msword"
            },
            "runInstantPostBookingActions": false,
            "sortingPackages": "nameAsc",
            "backLink": {
                "enabled": true,
                "label": "Generated with Amelia - Appointment and Event Booking Plugin",
                "url": "https://wpamelia.com/?utm_source=lite&utm_medium=websites&utm_campaign=powerdby"
            },
            "sortingServices": "nameAsc",
            "googleRecaptcha": {
                "enabled": false,
                "invisible": true,
                "siteKey": ""
            },
            "usedLanguages": []
        },
        "googleMeet": {
            "enabled": true
        },
        "microsoftTeams": {
            "enabled": false
        },
        "googleCalendar": {
            "enabled": true,
            "googleMeetEnabled": true,
            "accessToken": "{\"access_token\":\"ya29.a0ATkoCc6GsXCtnBWRNOgayYJdFvUvH8gWyoNQNxh01jHk9KprVYdN51rcZLl5R8c2cTcQQ_VOke1V3aNTAlknnvcyfferCpzV44mLxGDL_Nz3n5iIw7Mw6_J_6oJxjwYMpE1F8no0neAKkonGgk1WvEh-0fVPOsoyeZ5WkZymAWzJOyBkJavr_k_GOy4Too3CPh3Yg3PS7gaCgYKAXASARISFQHGX2Mi1ocOqRsoUC97fVq2MJ_exQ0209\",\"expires_in\":3599,\"scope\":\"https:\\/\\/www.googleapis.com\\/auth\\/calendar.readonly https:\\/\\/www.googleapis.com\\/auth\\/calendar.events openid https:\\/\\/www.googleapis.com\\/auth\\/userinfo.email https:\\/\\/www.googleapis.com\\/auth\\/userinfo.profile\",\"token_type\":\"Bearer\",\"id_token\":\"eyJhbGciOiJSUzI1NiIsImtpZCI6IjUzMDcyNGQ0OTE3M2EzZWQ2YjRhMDBhYTYzNDQyMDMwMGQ3MmFlNWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3NjY1OTQ5MDY4MzktNW1pcDdlcGp2OW1nZ2N2bjhkcXYzbzRmdWI3aDFlM2IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NjY1OTQ5MDY4MzktNW1pcDdlcGp2OW1nZ2N2bjhkcXYzbzRmdWI3aDFlM2IuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDgyODU5NDQ0NTI3MzQwNTM4NTQiLCJlbWFpbCI6Imdlc3Rhby50cmFmZWdvLnZvcHBlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWExWZmVqQWxWalBHRzFZVFY5TnFfUSIsImlhdCI6MTc3MzY5MjU0NSwiZXhwIjoxNzczNjk2MTQ1fQ.KKF9uh4sXMHXrVA-KmAD16NcqDOkt1rqJwFawFr0yF5yqyfnIxyqZbljhUOJ2mH4QVuQVhPD2viRZnCUkE7pxkQAD1Psat61neIggW29Kim8xsp_7okebj0Uhu5X8auyNJ6BmP-x3tRubvYRjAZDbtuwQXccPNXK1sEzjBDbSgit3vSCbOIh8dwj7JvAOt1q_Vx97-4BkKQxhWjbKcYRyk5g9MtDLfpxz1UWKPCstTDUQOxx_Ce6hFCFCihBGqHEJLjaWGSBwz2IDX4LdBt4ydo9P7dcurFs0nq41X9zxf6TZbBtboiMLx7OK_vxG6lOwE-iy5z5pH5uddUCl7u5sw\",\"created\":1773692545,\"refresh_token\":\"1\\/\\/06Sl_2kAVZ4aeCgYIARAAGAYSNwF-L9Irrpjm4-_xr6E4e6D69raP_C0FAmtYb-eV15gIBY6_nA8Q42WplRoZjRuZuNYy_UpsXh8\"}"
        },
        "outlookCalendar": {
            "enabled": false,
            "microsoftTeamsEnabled": false,
            "accessToken": ""
        },
        "appleCalendar": "",
        "zoom": {
            "enabled": false
        },
        "facebookPixel": {
            "id": "",
            "tracking": {
                "appointment": [],
                "event": [],
                "package": []
            }
        },
        "googleAnalytics": {
            "id": "",
            "tracking": {
                "appointment": [],
                "event": [],
                "package": []
            }
        },
        "googleTag": {
            "id": "",
            "tracking": {
                "appointment": [],
                "event": [],
                "package": []
            }
        },
        "mailchimp": {
            "subscribeFieldVisible": false,
            "checkedByDefault": false
        },
        "lessonSpace": {
            "enabled": false
        },
        "socialLogin": {
            "googleLoginEnabled": false,
            "facebookLoginEnabled": false,
            "facebookAppId": "",
            "facebookCredentialsEnabled": false
        },
        "notifications": {
            "senderName": "",
            "replyTo": "",
            "senderEmail": "",
            "notifyCustomers": true,
            "invoiceFormat": "pdf",
            "sendAllCF": true,
            "cancelSuccessUrl": "",
            "cancelErrorUrl": "",
            "approveSuccessUrl": "",
            "approveErrorUrl": "",
            "rejectSuccessUrl": "",
            "rejectErrorUrl": "",
            "smsSignedIn": false,
            "bccEmail": "",
            "bccSms": "",
            "smsBalanceEmail": {
                "enabled": false,
                "minimum": 0,
                "email": ""
            },
            "whatsAppPhoneID": "",
            "whatsAppAccessToken": "",
            "whatsAppBusinessID": "",
            "whatsAppLanguage": "",
            "whatsAppEnabled": false
        },
        "payments": {
            "currency": "",
            "currencyCode": "BRL",
            "priceSymbolPosition": "before",
            "priceNumberOfDecimals": 2,
            "priceSeparator": 1,
            "hideCurrencySymbolFrontend": false,
            "defaultPaymentMethod": "wc",
            "onSite": false,
            "couponsCaseInsensitive": false,
            "coupons": true,
            "taxes": {
                "enabled": false,
                "excluded": true
            },
            "cart": false,
            "paymentLinks": {
                "enabled": false,
                "changeBookingStatus": false,
                "redirectUrl": "https://projetos.voppecomunicacao.com.br/ambiente9"
            },
            "payPal": {
                "enabled": false,
                "sandboxMode": false,
                "testApiClientId": "",
                "liveApiClientId": ""
            },
            "stripe": {
                "enabled": false,
                "testMode": false,
                "livePublishableKey": "",
                "testPublishableKey": "",
                "connect": {
                    "enabled": false,
                    "method": "transfer",
                    "amount": 0,
                    "type": "percentage",
                    "capabilities": ["card_payments", "transfers"]
                },
                "address": false
            },
            "wc": {
                "enabled": true,
                "productId": 214,
                "page": "cart",
                "onSiteIfFree": false
            },
            "mollie": {
                "enabled": false,
                "cancelBooking": false
            },
            "square": {
                "enabled": false,
                "countryCode": "",
                "clientLiveId": "sq0idp-TtDyGP_2RfKYpFzrDqs0lw",
                "clientTestId": "sandbox-sq0idb-Wxnxasx1NMG_ZyvM--JV4Q",
                "testMode": false,
                "accessTokenSet": false,
                "locationId": ""
            },
            "razorpay": {
                "enabled": false
            },
            "barion": {
                "enabled": false,
                "sandboxMode": false,
                "livePOSKey": "",
                "sandboxPOSKey": "",
                "payeeEmail": ""
            }
        },
        "role": "customer",
        "weekSchedule": [{
            "day": "Monday",
            "time": ["12:00", "23:00"],
            "periods": [{
                "time": ["12:00", "23:00"]
            }],
            "breaks": []
        }, {
            "day": "Tuesday",
            "time": ["12:00", "23:00"],
            "periods": [{
                "time": ["12:00", "23:00"]
            }],
            "breaks": []
        }, {
            "day": "Wednesday",
            "time": ["12:00", "23:00"],
            "periods": [{
                "time": ["12:00", "23:00"]
            }],
            "breaks": []
        }, {
            "day": "Thursday",
            "time": ["12:00", "23:00"],
            "periods": [{
                "time": ["12:00", "23:00"]
            }],
            "breaks": []
        }, {
            "day": "Friday",
            "time": ["12:00", "23:00"],
            "periods": [{
                "time": ["12:00", "23:00"]
            }],
            "breaks": []
        }, {
            "day": "Saturday",
            "time": ["12:00", "23:00"],
            "periods": [{
                "time": ["12:00", "23:00"]
            }],
            "breaks": []
        }, {
            "day": "Sunday",
            "time": ["12:00", "23:00"],
            "periods": [{
                "time": ["12:00", "23:00"]
            }],
            "breaks": []
        }],
        "wordpress": {
            "dateFormat": "F j, Y",
            "timeFormat": "g:i a",
            "startOfWeek": 1,
            "timezone": "America/Sao_Paulo",
            "locale": "pt_BR"
        },
        "labels": {
            "enabled": true
        },
        "activation": {
            "showAmeliaSurvey": true,
            "showAmeliaPromoCustomizePopup": true,
            "showActivationSettings": true,
            "stash": false,
            "disableUrlParams": true,
            "isNewInstallation": false,
            "hideUnavailableFeatures": true,
            "licence": "",
            "premiumBannerVisibility": true,
            "dismissibleBannerVisibility": true
        },
        "roles": {
            "allowAdminBookAtAnyTime": false,
            "allowAdminBookOverApp": false,
            "adminServiceDurationAsSlot": false,
            "allowConfigureSchedule": false,
            "allowConfigureDaysOff": false,
            "allowConfigureSpecialDays": false,
            "allowConfigureServices": false,
            "allowWriteAppointments": false,
            "allowWriteCustomers": false,
            "automaticallyCreateCustomer": true,
            "inspectCustomerInfo": false,
            "allowCustomerReschedule": false,
            "allowCustomerCancelPackages": true,
            "allowCustomerDeleteProfile": false,
            "allowWriteEvents": false,
            "customerCabinet": {
                "loginEnabled": true,
                "tokenValidTime": 2592000,
                "pageUrl": "",
                "googleRecaptcha": false
            },
            "providerCabinet": {
                "loginEnabled": true,
                "tokenValidTime": 2592000,
                "googleRecaptcha": false
            },
            "providerBadges": {
                "counter": 3,
                "badges": [{
                    "id": 1,
                    "content": "Most Popular",
                    "color": "#1246D6"
                }, {
                    "id": 2,
                    "content": "Top Performer",
                    "color": "#019719"
                }, {
                    "id": 3,
                    "content": "Exclusive",
                    "color": "#CCA20C"
                }]
            },
            "limitPerCustomerService": {
                "enabled": false,
                "numberOfApp": 1,
                "timeFrame": "day",
                "period": 1,
                "from": "bookingDate"
            },
            "limitPerCustomerPackage": {
                "enabled": false,
                "numberOfApp": 1,
                "timeFrame": "day",
                "period": 1
            },
            "limitPerCustomerEvent": {
                "enabled": false,
                "numberOfApp": 1,
                "timeFrame": "day",
                "period": 1,
                "from": "bookingDate"
            },
            "limitPerEmployee": {
                "enabled": false,
                "numberOfApp": 1,
                "timeFrame": "day",
                "period": 1
            }
        },
        "customization": {
            "primaryColor": "#1A84EE",
            "primaryGradient1": "#1A84EE",
            "primaryGradient2": "#0454A2",
            "textColor": "#354052",
            "textColorOnBackground": "#FFFFFF",
            "font": "Amelia Roboto",
            "fontUrl": "",
            "customFontFamily": "",
            "customFontSelected": "unselected",
            "useGenerated": false,
            "useGlobalColors": {
                "stepByStepForm": false,
                "catalogForm": false,
                "eventListForm": false,
                "eventCalendarForm": false
            },
            "globalColors": {
                "primaryColor": "#1A84EE",
                "formBackgroundColor": "#FFFFFF",
                "formTextColor": "#354052",
                "formInputColor": "#FFFFFF",
                "formInputTextColor": "#354052",
                "formDropdownColor": "#FFFFFF",
                "formDropdownTextColor": "#354052",
                "formGradientColor1": "#1A84EE",
                "formGradientColor2": "#0454A2",
                "formGradientAngle": 135,
                "formImageColor": "#1A84EE",
                "textColorOnBackground": "#FFFFFF"
            }
        },
        "customizedData": {
            "sbsNew": {
                "colors": {
                    "colorPrimary": "#1246D6",
                    "colorSuccess": "#019719",
                    "colorError": "#B4190F",
                    "colorWarning": "#CCA20C",
                    "colorInpBgr": "#FFFFFF",
                    "colorInpBorder": "#D1D5D7",
                    "colorInpText": "#1A2C37",
                    "colorInpPlaceHolder": "#808A90",
                    "colorDropBgr": "#FFFFFF",
                    "colorDropBorder": "#FFFFFF",
                    "colorDropText": "#0E1920",
                    "colorSbBgr": "#17295A",
                    "colorSbText": "#FFFFFF",
                    "colorMainBgr": "#FFFFFF",
                    "colorMainHeadingText": "#33434C",
                    "colorMainText": "#1A2C37",
                    "colorCalCell": "#265CF2",
                    "colorCalCellText": "#1246D6",
                    "colorCalCellLow": "#265CF2",
                    "colorCalCellLowText": "#1246D6",
                    "colorCalCellHigh": "#265CF2",
                    "colorCalCellHighText": "#1246D6",
                    "colorCalCellWaiting": "rgba(26, 44, 55, 0.04)",
                    "colorCalCellWaitingText": "#1A2C37",
                    "colorCalCellSelected": "#1246D6",
                    "colorCalCellSelectedText": "#FFFFFF",
                    "colorCalCellDisabled": "rgba(87, 88, 139, 0.05)",
                    "colorCalCellDisabledText": "#8C959A",
                    "colorBtnPrim": "#265CF2",
                    "colorBtnPrimText": "#FFFFFF",
                    "colorBtnSec": "#1A2C37",
                    "colorBtnSecText": "#FFFFFF"
                },
                "order": [{
                    "id": "ServiceStep"
                }, {
                    "id": "EmployeeStep"
                }, {
                    "id": "LocationStep"
                }],
                "initStep": {
                    "options": {
                        "service": {
                            "name": "Campo de entrada de servi\u00e7o",
                            "filterable": true
                        },
                        "tax": {
                            "name": "Visibilidade do IVA",
                            "visibility": true
                        },
                        "location": {
                            "name": "Campo de entrada de localiza\u00e7\u00e3o",
                            "required": false,
                            "visibility": true,
                            "filterable": true
                        },
                        "employee": {
                            "name": "Campo de entrada do funcion\u00e1rio",
                            "required": false,
                            "visibility": true,
                            "filterable": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "order": [{
                        "name": "Servi\u00e7o",
                        "id": "service"
                    }, {
                        "name": "Funcion\u00e1rio",
                        "id": "employee"
                    }, {
                        "name": "Localiza\u00e7\u00e3o",
                        "id": "location"
                    }],
                    "translations": null
                },
                "serviceStep": {
                    "options": {
                        "search": {
                            "name": "Search Input Field",
                            "visibility": true
                        },
                        "category": {
                            "name": "Category Input Field",
                            "visibility": true,
                            "filterable": true
                        },
                        "price": {
                            "name": "Pre\u00e7o do servi\u00e7o",
                            "visibility": true
                        },
                        "tax": {
                            "name": "Visibilidade do IVA",
                            "visibility": true
                        },
                        "serviceCategory": {
                            "name": "Categoria de servi\u00e7o",
                            "visibility": true
                        },
                        "serviceDuration": {
                            "name": "Dura\u00e7\u00e3o do servi\u00e7o",
                            "visibility": true
                        },
                        "serviceCapacity": {
                            "name": "Capacidade de servi\u00e7o",
                            "visibility": true
                        },
                        "serviceLocation": {
                            "name": "Localiza\u00e7\u00e3o do servi\u00e7o",
                            "visibility": true
                        },
                        "moreBtn": {
                            "name": "Learn more button",
                            "visibility": true
                        },
                        "packagesBtn": {
                            "name": "View in Package button",
                            "visibility": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "employeeStep": {
                    "options": {
                        "employee": {
                            "name": "Employee Selection",
                            "required": false,
                            "visibility": true
                        },
                        "price": {
                            "name": "Pre\u00e7o do empregado",
                            "visibility": true
                        },
                        "moreBtn": {
                            "name": "Learn more button",
                            "visibility": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "locationStep": {
                    "options": {
                        "location": {
                            "name": "Location Selection",
                            "required": false,
                            "visibility": true
                        },
                        "address": {
                            "name": "Localiza\u00e7\u00e3o Endere\u00e7o",
                            "visibility": true
                        },
                        "moreBtn": {
                            "name": "Learn more button",
                            "visibility": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "bringingAnyone": {
                    "options": {
                        "heading": {
                            "name": "Cabe\u00e7alho",
                            "visibility": true
                        },
                        "info": {
                            "name": "Informa\u00e7\u00f5es",
                            "visibility": true
                        },
                        "bringingPrice": {
                            "name": "Pricing by the number of people",
                            "visibility": true
                        },
                        "primaryButton": {
                            "name": "Tipo de bot\u00e3o prim\u00e1rio",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "secondaryButton": {
                            "name": "Tipo de bot\u00e3o secund\u00e1rio",
                            "buttonType": "text",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "packageStep": {
                    "options": {
                        "heading": {
                            "name": "Cabe\u00e7alho pop-up",
                            "visibility": true
                        },
                        "tax": {
                            "name": "Visibilidade do IVA",
                            "visibility": true
                        },
                        "primaryButton": {
                            "name": "Tipo de bot\u00e3o prim\u00e1rio",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "packageInfoStep": {
                    "options": {
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "tax": {
                            "name": "Visibilidade do IVA",
                            "visibility": true
                        }
                    },
                    "translations": null
                },
                "packageAppointmentsStep": {
                    "options": {
                        "employee": {
                            "name": "Campo de entrada do funcion\u00e1rio",
                            "required": false,
                            "visibility": true
                        },
                        "location": {
                            "name": "Campo de entrada de localiza\u00e7\u00e3o",
                            "required": false,
                            "visibility": true
                        },
                        "endTimeVisibility": {
                            "name": "Hor\u00e1rio de t\u00e9rmino do intervalo do calend\u00e1rio",
                            "visibility": true
                        },
                        "timeZoneVisibility": {
                            "name": "Fuso hor\u00e1rio do calend\u00e1rio",
                            "visibility": true
                        },
                        "busyTimeSlotsVisibility": {
                            "name": "Mostrar intervalos de tempo ocupados",
                            "visibility": false
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "packageAppointmentsListStep": {
                    "options": {
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "tax": {
                            "name": "Visibilidade do IVA",
                            "visibility": true
                        }
                    },
                    "translations": null
                },
                "extrasStep": {
                    "options": {
                        "heading": {
                            "name": "Cabe\u00e7alho Extras",
                            "visibility": true
                        },
                        "description": {
                            "name": "Descri\u00e7\u00e3o dos extras",
                            "visibility": true
                        },
                        "tax": {
                            "name": "Visibilidade do IVA",
                            "visibility": true
                        },
                        "duration": {
                            "name": "Dura\u00e7\u00e3o dos extras",
                            "visibility": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "dateTimeStep": {
                    "options": {
                        "endTimeVisibility": {
                            "name": "Hor\u00e1rio de t\u00e9rmino do intervalo do calend\u00e1rio",
                            "visibility": true
                        },
                        "timeZoneVisibility": {
                            "name": "Fuso hor\u00e1rio do calend\u00e1rio",
                            "visibility": true
                        },
                        "estimatedPricingVisibility": {
                            "name": "Show Estimated Price",
                            "visibility": false
                        },
                        "slotPricingVisibility": {
                            "name": "Show Time Slot Price",
                            "visibility": false
                        },
                        "indicatorPricingVisibility": {
                            "name": "Show Price Indicators",
                            "visibility": false
                        },
                        "peopleWaitingVisibility": {
                            "name": "Show Number of People on Waiting List",
                            "visibility": true
                        },
                        "busyTimeSlotsVisibility": {
                            "name": "Mostrar intervalos de tempo ocupados",
                            "visibility": false
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "cartStep": {
                    "options": {
                        "addToCart": {
                            "name": "Reservar outro tipo de bot\u00e3o ",
                            "buttonType": "text",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "backToCart": {
                            "name": "Tipo de bot\u00e3o Cancelar carrinho ",
                            "buttonType": "text",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "tax": {
                            "name": "Visibilidade do IVA",
                            "visibility": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "recurringPopup": {
                    "options": {
                        "content": {
                            "name": "Conte\u00fado pop-up",
                            "visibility": true
                        },
                        "primaryButton": {
                            "name": "Tipo de bot\u00e3o prim\u00e1rio",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "secondaryButton": {
                            "name": "Tipo de bot\u00e3o secund\u00e1rio",
                            "buttonType": "text",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "recurringStep": {
                    "options": {
                        "heading": {
                            "name": "Conte\u00fado do t\u00edtulo",
                            "visibility": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "recurringSummary": {
                    "options": {
                        "endTimeVisibility": {
                            "name": "Hor\u00e1rio de t\u00e9rmino do intervalo do calend\u00e1rio",
                            "visibility": true
                        },
                        "timeZoneVisibility": {
                            "name": "Fuso hor\u00e1rio do calend\u00e1rio",
                            "visibility": true
                        },
                        "estimatedPricingVisibility": {
                            "name": "Show Estimated Price",
                            "visibility": false
                        },
                        "slotPricingVisibility": {
                            "name": "Show Time Slot Price",
                            "visibility": false
                        },
                        "indicatorPricingVisibility": {
                            "name": "Show Price Indicators",
                            "visibility": false
                        },
                        "busyTimeSlotsVisibility": {
                            "name": "Mostrar intervalos de tempo ocupados",
                            "visibility": false
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "infoStep": {
                    "order": [{
                        "name": "Nome",
                        "id": "firstName"
                    }, {
                        "name": "Sobrenome",
                        "id": "lastName"
                    }, {
                        "name": "E-mail",
                        "id": "email"
                    }, {
                        "name": "Telefone",
                        "id": "phone"
                    }],
                    "options": {
                        "lastName": {
                            "name": "Campo de entrada de sobrenome",
                            "required": true,
                            "visibility": true
                        },
                        "email": {
                            "name": "Campo de entrada de e-mail",
                            "required": false,
                            "visibility": true
                        },
                        "phone": {
                            "name": "Campo de entrada do telefone",
                            "required": false,
                            "visibility": true
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "paymentStep": {
                    "options": {
                        "coupon": {
                            "name": "Campo de entrada de cupom ",
                            "required": false
                        },
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Continuar",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "congratulations": {
                    "options": {
                        "primaryFooterButton": {
                            "name": "Tipo de bot\u00e3o Concluir",
                            "buttonType": "filled",
                            "typeOptions": ["filled", "plain", "text"]
                        },
                        "secondaryFooterButton": {
                            "name": "Tipo de bot\u00e3o do painel",
                            "buttonType": "text",
                            "typeOptions": ["filled", "plain", "text"]
                        }
                    },
                    "translations": null
                },
                "sidebar": {
                    "options": {
                        "self": {
                            "name": "Visibilidade da barra lateral",
                            "visibility": true
                        },
                        "supportHeading": {
                            "name": "Cabe\u00e7alho de suporte:",
                            "visibility": true
                        },
                        "companyPhone": {
                            "name": "Telefone da empresa:",
                            "visibility": true
                        },
                        "companyEmail": {
                            "name": "E-mail da empresa:",
                            "visibility": true
                        }
                    },
                    "translations": null
                }
            },
            "fonts": {
                "fontFamily": "Amelia Roboto, sans-serif",
                "fontUrl": "",
                "customFontFamily": "",
                "customFontSelected": false
            }
        },
        "appointments": {
            "isGloballyBusySlot": false,
            "bookMultipleTimes": false,
            "allowBookingIfPending": true,
            "allowBookingIfNotMin": true,
            "openedBookingAfterMin": false,
            "cartPlaceholders": "\u003C!-- Content --\u003E\u003Cp\u003EDateTime: %appointment_date_time%\u003C/p\u003E",
            "cartPlaceholdersSms": "DateTime: %appointment_date_time%",
            "cartPlaceholdersCustomer": "\u003C!-- Content --\u003E\u003Cp\u003EDateTime: %appointment_date_time%\u003C/p\u003E",
            "cartPlaceholdersCustomerSms": "DateTime: %appointment_date_time%",
            "recurringPlaceholders": "DateTime: %appointment_date_time%",
            "recurringPlaceholdersSms": "DateTime: %appointment_date_time%",
            "recurringPlaceholdersCustomer": "DateTime: %appointment_date_time%",
            "recurringPlaceholdersCustomerSms": "DateTime: %appointment_date_time%",
            "packagePlaceholders": "DateTime: %appointment_date_time%",
            "packagePlaceholdersSms": "DateTime: %appointment_date_time%",
            "packagePlaceholdersCustomer": "DateTime: %appointment_date_time%",
            "packagePlaceholdersCustomerSms": "DateTime: %appointment_date_time%",
            "groupAppointmentPlaceholder": "Name: %customer_full_name%",
            "groupEventPlaceholder": "Name: %customer_full_name%",
            "groupAppointmentPlaceholderSms": "Name: %customer_full_name%",
            "groupEventPlaceholderSms": "Name: %customer_full_name%",
            "translations": {
                "cartPlaceholdersCustomer": null,
                "cartPlaceholdersCustomerSms": null,
                "recurringPlaceholdersCustomer": null,
                "recurringPlaceholdersCustomerSms": null,
                "packagePlaceholdersCustomer": null,
                "packagePlaceholdersCustomerSms": null,
                "groupAppointmentPlaceholder": "Name: %customer_full_name%",
                "groupEventPlaceholder": "Name: %customer_full_name%",
                "groupAppointmentPlaceholderSms": "Name: %customer_full_name%",
                "groupEventPlaceholderSms": "Name: %customer_full_name%"
            },
            "waitingListEvents": {
                "enabled": false,
                "addingMethod": "Manually"
            },
            "qrCodeEvents": {
                "enabled": false
            },
            "waitingListAppointments": {
                "enabled": false,
                "redirectUrlDenied": ""
            },
            "pastDaysEvents": 0,
            "employeeSelection": "random",
            "bringingAnyoneLogic": "additional"
        },
        "slotDateConstraints": {
            "minDate": "2026-03-16 17:32:38",
            "maxDate": "2027-03-16 17:22:38"
        },
        "company": {
            "email": null,
            "phone": ""
        },
        "pageColumnSettings": {
            "customersPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": false
            }, {
                "prop": "name",
                "visible": true,
                "width": 320,
                "label": "name",
                "sortable": true,
                "required": true
            }, {
                "prop": "phone",
                "visible": true,
                "width": 160,
                "label": "phone",
                "sortable": false
            }, {
                "prop": "email",
                "visible": true,
                "width": 240,
                "label": "email",
                "sortable": false
            }, {
                "prop": "note",
                "visible": true,
                "width": 80,
                "label": "note",
                "sortable": false
            }, {
                "prop": "lastBooking",
                "visible": true,
                "width": 240,
                "label": "last_booking",
                "sortable": false
            }, {
                "prop": "totalBookings",
                "visible": true,
                "width": 160,
                "label": "total_bookings",
                "sortable": false
            }, {
                "prop": "wordPressUser",
                "visible": true,
                "width": 240,
                "label": "wp_user",
                "sortable": false
            }],
            "employeesPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": false
            }, {
                "prop": "name",
                "visible": true,
                "width": 320,
                "label": "name",
                "sortable": true,
                "required": true
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }, {
                "prop": "availability",
                "visible": true,
                "width": 160,
                "label": "red_availability",
                "sortable": false
            }, {
                "prop": "phone",
                "visible": true,
                "width": 160,
                "label": "phone",
                "sortable": false
            }, {
                "prop": "email",
                "visible": true,
                "width": 240,
                "label": "email",
                "sortable": false
            }, {
                "prop": "actions",
                "visible": true,
                "width": 240,
                "label": "red_actions",
                "sortable": false
            }],
            "locationsPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": false
            }, {
                "prop": "name",
                "visible": true,
                "width": 320,
                "label": "name",
                "sortable": true,
                "required": true
            }, {
                "prop": "address",
                "visible": true,
                "width": 320,
                "label": "address",
                "sortable": false
            }, {
                "prop": "phone",
                "visible": true,
                "width": 160,
                "label": "phone",
                "sortable": false
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }],
            "bookingsAppointmentsPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": true
            }, {
                "prop": "date",
                "visible": true,
                "width": 160,
                "label": "date",
                "sortable": false,
                "required": true
            }, {
                "prop": "time",
                "visible": true,
                "width": 160,
                "label": "time",
                "sortable": false,
                "required": true
            }, {
                "prop": "customer",
                "visible": true,
                "width": 320,
                "label": "customer",
                "sortable": true,
                "required": true
            }, {
                "prop": "service",
                "visible": true,
                "width": 240,
                "label": "service",
                "sortable": true,
                "required": true
            }, {
                "prop": "type",
                "visible": true,
                "width": 160,
                "label": "type",
                "sortable": false
            }, {
                "prop": "status",
                "visible": true,
                "width": 200,
                "label": "status",
                "sortable": false
            }, {
                "prop": "employee",
                "visible": true,
                "width": 320,
                "label": "employee",
                "sortable": false
            }, {
                "prop": "location",
                "visible": true,
                "width": 240,
                "label": "location",
                "sortable": false
            }, {
                "prop": "duration",
                "visible": false,
                "width": 160,
                "label": "duration",
                "sortable": false
            }, {
                "prop": "customerEmail",
                "visible": false,
                "width": 240,
                "label": "customer_email",
                "sortable": false
            }, {
                "prop": "customerPhone",
                "visible": false,
                "width": 240,
                "label": "customer_phone",
                "sortable": false
            }, {
                "prop": "booked",
                "visible": false,
                "width": 80,
                "label": "booked",
                "sortable": false
            }, {
                "prop": "note",
                "visible": false,
                "width": 80,
                "label": "note",
                "sortable": false
            }, {
                "prop": "paidPrice",
                "visible": false,
                "width": 160,
                "label": "paid",
                "sortable": false
            }, {
                "prop": "payment",
                "visible": false,
                "width": 160,
                "label": "payment",
                "sortable": false
            }, {
                "prop": "totalPrice",
                "visible": false,
                "width": 160,
                "label": "total_price",
                "sortable": false
            }, {
                "prop": "hostLink",
                "visible": false,
                "width": 160,
                "label": "red_host_link",
                "sortable": false
            }, {
                "prop": "joinLink",
                "visible": false,
                "width": 200,
                "label": "red_join_link",
                "sortable": false
            }, {
                "prop": "bookingSource",
                "visible": false,
                "width": 64,
                "label": "red_booking_source",
                "sortable": false,
                "showLabel": false
            }],
            "bookingsPackagesPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": true
            }, {
                "prop": "date",
                "visible": true,
                "width": 160,
                "label": "package_date_purchased",
                "sortable": true
            }, {
                "prop": "customer",
                "visible": true,
                "width": 320,
                "label": "customer",
                "sortable": true,
                "required": true
            }, {
                "prop": "package",
                "visible": true,
                "width": 320,
                "label": "package",
                "sortable": true,
                "required": true
            }, {
                "prop": "status",
                "visible": true,
                "width": 200,
                "label": "status",
                "sortable": false
            }, {
                "prop": "appointments",
                "visible": true,
                "width": 160,
                "label": "appointments",
                "sortable": false
            }, {
                "prop": "employees",
                "visible": true,
                "width": 320,
                "label": "employees",
                "sortable": false
            }, {
                "prop": "expirationDate",
                "visible": false,
                "width": 240,
                "label": "expiration_date",
                "sortable": false
            }, {
                "prop": "price",
                "visible": false,
                "width": 160,
                "label": "price",
                "sortable": false
            }, {
                "prop": "paymentStatus",
                "visible": false,
                "width": 200,
                "label": "payment_status",
                "sortable": false
            }],
            "bookingsEventsPage": [{
                "prop": "code",
                "visible": true,
                "width": 120,
                "label": "code",
                "sortable": false
            }, {
                "prop": "date",
                "visible": true,
                "width": 160,
                "label": "date",
                "sortable": false
            }, {
                "prop": "time",
                "visible": true,
                "width": 160,
                "label": "time",
                "sortable": false
            }, {
                "prop": "attendee",
                "visible": true,
                "width": 240,
                "label": "attendee",
                "sortable": true,
                "required": true
            }, {
                "prop": "event",
                "visible": true,
                "width": 320,
                "label": "event",
                "sortable": true,
                "required": true
            }, {
                "prop": "status",
                "visible": true,
                "width": 200,
                "label": "status",
                "sortable": false
            }, {
                "prop": "spots",
                "visible": true,
                "width": 80,
                "label": "red_booked",
                "sortable": false
            }, {
                "prop": "organizer",
                "visible": false,
                "width": 240,
                "label": "event_organizer",
                "sortable": false
            }, {
                "prop": "staff",
                "visible": false,
                "width": 240,
                "label": "event_staff",
                "sortable": false
            }, {
                "prop": "price",
                "visible": false,
                "width": 160,
                "label": "price",
                "sortable": false
            }, {
                "prop": "paymentStatus",
                "visible": false,
                "width": 200,
                "label": "payment_status",
                "sortable": false
            }],
            "eventsPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": true
            }, {
                "prop": "dateTime",
                "visible": true,
                "width": 240,
                "label": "date_time",
                "sortable": true,
                "required": true
            }, {
                "prop": "name",
                "visible": true,
                "width": 320,
                "label": "name",
                "sortable": true,
                "required": true
            }, {
                "prop": "status",
                "visible": true,
                "width": 200,
                "label": "status",
                "sortable": false
            }, {
                "prop": "spots",
                "visible": true,
                "width": 80,
                "label": "red_booked",
                "sortable": false
            }, {
                "prop": "organizer",
                "visible": true,
                "width": 240,
                "label": "event_organizer",
                "sortable": false
            }, {
                "prop": "staff",
                "visible": true,
                "width": 240,
                "label": "event_staff",
                "sortable": false
            }, {
                "prop": "recurring",
                "visible": true,
                "width": 120,
                "label": "recurring",
                "sortable": false
            }, {
                "prop": "waitingList",
                "visible": true,
                "width": 200,
                "label": "waiting_list",
                "sortable": false
            }, {
                "prop": "bookingOpens",
                "visible": true,
                "width": 240,
                "label": "red_booking_opens",
                "sortable": true
            }, {
                "prop": "bookingCloses",
                "visible": true,
                "width": 240,
                "label": "red_booking_closes",
                "sortable": true
            }, {
                "prop": "visibility",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }],
            "catalogServicesPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": true
            }, {
                "prop": "service",
                "visible": true,
                "width": 320,
                "label": "service",
                "sortable": true,
                "required": true
            }, {
                "prop": "duration",
                "visible": true,
                "width": 160,
                "label": "duration",
                "sortable": true
            }, {
                "prop": "price",
                "visible": true,
                "width": 160,
                "label": "price",
                "sortable": true
            }, {
                "prop": "employees",
                "visible": true,
                "width": 320,
                "label": "employees",
                "sortable": false
            }, {
                "prop": "visibility",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }],
            "catalogPackagesPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": true
            }, {
                "prop": "name",
                "visible": true,
                "width": 320,
                "label": "name",
                "sortable": true,
                "required": true
            }, {
                "prop": "services",
                "visible": true,
                "width": 200,
                "label": "services",
                "sortable": true
            }, {
                "prop": "price",
                "visible": true,
                "width": 160,
                "label": "price",
                "sortable": true
            }, {
                "prop": "duration",
                "visible": true,
                "width": 160,
                "label": "duration",
                "sortable": false
            }, {
                "prop": "employees",
                "visible": true,
                "width": 320,
                "label": "employees",
                "sortable": false
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }],
            "catalogResourcesPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": true
            }, {
                "prop": "name",
                "visible": true,
                "width": 320,
                "label": "name",
                "sortable": true,
                "required": true
            }, {
                "prop": "quantity",
                "visible": true,
                "width": 160,
                "label": "quantity",
                "sortable": true
            }, {
                "prop": "services",
                "visible": true,
                "width": 320,
                "label": "services",
                "sortable": false
            }, {
                "prop": "locations",
                "visible": true,
                "width": 320,
                "label": "locations",
                "sortable": false
            }, {
                "prop": "employees",
                "visible": true,
                "width": 320,
                "label": "employees",
                "sortable": false
            }, {
                "prop": "type",
                "visible": true,
                "width": 200,
                "label": "type",
                "sortable": false
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }],
            "financePaymentsPage": [{
                "prop": "id",
                "visible": true,
                "width": 80,
                "label": "id",
                "sortable": true
            }, {
                "prop": "dateTime",
                "visible": true,
                "width": 160,
                "label": "payment_date",
                "sortable": true
            }, {
                "prop": "customer",
                "visible": true,
                "width": 240,
                "label": "customer",
                "sortable": false,
                "required": true
            }, {
                "prop": "employees",
                "visible": true,
                "width": 240,
                "label": "employees",
                "sortable": false
            }, {
                "prop": "booking",
                "visible": true,
                "width": 320,
                "label": "booking",
                "sortable": false
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "status",
                "sortable": true
            }, {
                "prop": "amount",
                "visible": true,
                "width": 160,
                "label": "amount",
                "sortable": false,
                "required": true
            }, {
                "prop": "payment_method",
                "visible": true,
                "width": 160,
                "label": "payment_method",
                "sortable": false
            }, {
                "prop": "location",
                "visible": true,
                "width": 320,
                "label": "location",
                "sortable": false
            }],
            "financeCouponsPage": [{
                "prop": "code",
                "visible": true,
                "width": 120,
                "label": "code",
                "sortable": false,
                "required": true
            }, {
                "prop": "discount",
                "visible": true,
                "width": 120,
                "label": "discount_amount",
                "sortable": true,
                "required": true
            }, {
                "prop": "deduction",
                "visible": true,
                "width": 120,
                "label": "deduction",
                "sortable": true
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }, {
                "prop": "start_date",
                "visible": true,
                "width": 240,
                "label": "start_date",
                "sortable": false
            }, {
                "prop": "expiration_date",
                "visible": true,
                "width": 240,
                "label": "expiration_date",
                "sortable": false
            }, {
                "prop": "service",
                "visible": true,
                "width": 320,
                "label": "services",
                "sortable": false
            }, {
                "prop": "event",
                "visible": true,
                "width": 320,
                "label": "events",
                "sortable": false
            }, {
                "prop": "package",
                "visible": true,
                "width": 320,
                "label": "packages",
                "sortable": false
            }, {
                "prop": "usage_limit",
                "visible": false,
                "width": 120,
                "label": "usage_limit",
                "sortable": false
            }, {
                "prop": "limit_per_customer",
                "visible": false,
                "width": 120,
                "label": "red_limit_per_customer",
                "sortable": false
            }, {
                "prop": "times_used",
                "visible": false,
                "width": 120,
                "label": "times_used",
                "sortable": true
            }],
            "financeTaxesPage": [{
                "prop": "name",
                "visible": true,
                "width": 240,
                "label": "name",
                "sortable": true,
                "required": true
            }, {
                "prop": "type",
                "visible": true,
                "width": 120,
                "label": "type",
                "sortable": true
            }, {
                "prop": "rate",
                "visible": true,
                "width": 80,
                "label": "rate",
                "required": true
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "visibility",
                "sortable": false
            }, {
                "prop": "service",
                "visible": true,
                "width": 320,
                "label": "services",
                "sortable": false
            }, {
                "prop": "event",
                "visible": true,
                "width": 320,
                "label": "events",
                "sortable": false
            }, {
                "prop": "package",
                "visible": true,
                "width": 320,
                "label": "packages",
                "sortable": false
            }, {
                "prop": "extra",
                "visible": true,
                "width": 320,
                "label": "extras",
                "sortable": false
            }],
            "financeInvoicesPage": [{
                "prop": "invoiceNumber",
                "visible": true,
                "width": 160,
                "label": "red_invoice_number",
                "sortable": true,
                "required": true
            }, {
                "prop": "customer",
                "visible": true,
                "width": 240,
                "label": "customer",
                "sortable": false,
                "required": true
            }, {
                "prop": "dateTime",
                "visible": true,
                "width": 160,
                "label": "red_invoice_date",
                "sortable": true
            }, {
                "prop": "employees",
                "visible": true,
                "width": 240,
                "label": "employees",
                "sortable": false
            }, {
                "prop": "booking",
                "visible": true,
                "width": 320,
                "label": "booking",
                "sortable": false
            }, {
                "prop": "status",
                "visible": true,
                "width": 160,
                "label": "status",
                "sortable": true
            }, {
                "prop": "amount",
                "visible": true,
                "width": 160,
                "label": "total",
                "sortable": false
            }]
        },
        "featuresIntegrations": {
            "googleCalendar": {
                "enabled": true
            },
            "appleCalendar": {
                "enabled": false
            },
            "outlookCalendar": {
                "enabled": false
            },
            "zoom": {
                "enabled": false
            },
            "webhooks": {
                "enabled": true
            },
            "facebookPixel": {
                "enabled": false
            },
            "googleAnalytics": {
                "enabled": false
            },
            "lessonSpace": {
                "enabled": false
            },
            "recaptcha": {
                "enabled": false
            },
            "mollie": {
                "enabled": false
            },
            "wc": {
                "enabled": true
            },
            "payPal": {
                "enabled": false
            },
            "stripe": {
                "enabled": false
            },
            "razorpay": {
                "enabled": false
            },
            "square": {
                "enabled": false
            },
            "barion": {
                "enabled": false
            },
            "packages": {
                "enabled": false
            },
            "resources": {
                "enabled": false
            },
            "customFields": {
                "enabled": true
            },
            "coupons": {
                "enabled": true
            },
            "customNotifications": {
                "enabled": true
            },
            "tax": {
                "enabled": false
            },
            "invoices": {
                "enabled": true
            },
            "whatsapp": {
                "enabled": false
            },
            "recurringEvents": {
                "enabled": true
            },
            "tickets": {
                "enabled": true
            },
            "waitingList": {
                "enabled": false
            },
            "waitingListAppointments": {
                "enabled": false
            },
            "customPricing": {
                "enabled": true
            },
            "recurringAppointments": {
                "enabled": true
            },
            "extras": {
                "enabled": true
            },
            "cart": {
                "enabled": false
            },
            "timezones": {
                "enabled": true
            },
            "depositPayment": {
                "enabled": true
            },
            "noShowTag": {
                "enabled": true
            },
            "apis": {
                "enabled": false
            },
            "buddyboss": {
                "enabled": true
            },
            "employeeBadge": {
                "enabled": true
            },
            "mailchimp": {
                "enabled": false
            },
            "googleSocialLogin": {
                "enabled": false
            },
            "facebookSocialLogin": {
                "enabled": false
            },
            "eTickets": {
                "enabled": false
            }
        }
    };
    var wpAmeliaLabels = {
        "no_results_found": "Nenhum resultado encontrado...",
        "add_coupon": "Adicionar cupom",
        "amount_fixed": "Valor fixo",
        "amount_percentage": "Percentagem",
        "and": "e",
        "apple_calendar": "Calend\u00e1rio Google",
        "apple_calendar_personal": "Calend\u00e1rio Apple (Pessoal)",
        "apple_calendar_select": "Escolher Calend\u00e1rio da Apple",
        "apple_calendar_placeholder": "Selecione o calend\u00e1rio",
        "apple_icloud_id": "Endere\u00e7o de email",
        "apple_app_specific_password": "Senha espec\u00edfica do aplicativo iCloud",
        "apple_disconnect": "Desconectar",
        "apple_connect": "Conectar ao Calend\u00e1rio da Apple",
        "apple_connect_employee_calendar": "Conectar ao seu Calend\u00e1rio da Apple pessoal",
        "no_package_services": "Parece que n\u00e3o h\u00e1 servi\u00e7os dispon\u00edveis ou vis\u00edveis atribu\u00eddos aos pacotes neste momento.",
        "all_slots_selected": "Todos os slots est\u00e3o selecionados",
        "appointment": "Agendamento",
        "appointments": "Agendamentos",
        "appointment_info": "Informa\u00e7\u00f5es sobre o agendamento",
        "appointment_waiting_list_notify_message": "N\u00f3s o notificaremos se uma vaga surgir.",
        "at": "no",
        "barion": "Barion",
        "book": "Livro",
        "booking_completed_email": "Um e-mail com detalhes da sua reserva foi enviado para voc\u00ea.",
        "booking_completed_pending": "Obrigado! Sua reserva foi conclu\u00edda e agora est\u00e1 pendente de confirma\u00e7\u00e3o.",
        "client_time_colon": "Hor\u00e1rio do cliente:",
        "cart_info": "Resumo",
        "close": "Fechar",
        "closed": "Fechado",
        "expired": "Expirado",
        "customer_blocked": "N\u00e3o foi poss\u00edvel desativar o plugin. Tente novamente mais tarde.",
        "coupon_invalid": "Este cupom n\u00e3o \u00e9 mais v\u00e1lido",
        "coupon_expired": "Este cupom expirou",
        "coupon_missing": "Por favor insira o cupom",
        "coupon_send_text": "Voc\u00ea pode usar este cupom para a pr\u00f3xima reserva:",
        "coupon_unknown": "O cupom que voc\u00ea inseriu n\u00e3o \u00e9 v\u00e1lido",
        "coupon_used": "Cupom usado",
        "credit_card": "Cart\u00e3o de cr\u00e9dito",
        "mollie": "Moleque",
        "credit_or_debit_card_colon": "Cart\u00e3o de cr\u00e9dito ou d\u00e9bito:",
        "custom_fields": "Campos personalizados",
        "customer": "Cliente",
        "customer_already_booked": "O cliente j\u00e1 agendou esta consulta",
        "date": "Data",
        "discount_amount_colon": "Desconto",
        "email_not_sent_error": "Infelizmente ocorreu um erro no servidor e seu e-mail n\u00e3o foi enviado.",
        "email_placeholder": "exemplo@mail.com",
        "email_required": "O campo de e-mail \u00e9 obrigat\u00f3rio",
        "employee": "employee",
        "employees": "employees",
        "locations": "localiza\u00e7\u00f5es",
        "event_booking_unavailable": "A reserva do evento n\u00e3o est\u00e1 dispon\u00edvel",
        "extras_costs_colon": "Custo dos extras:",
        "file_upload": "Solte o arquivo aqui ou clique para fazer upload",
        "file_upload_error": "Por favor, carregue o arquivo",
        "forbidden_file_upload": "Este arquivo est\u00e1 proibido para upload",
        "outlook_calendar": "Calend\u00e1rio do Outlook",
        "incomplete_cvc": "O c\u00f3digo de seguran\u00e7a do seu cart\u00e3o est\u00e1 incompleto",
        "incomplete_expiry": "A data de validade do seu cart\u00e3o est\u00e1 incompleta",
        "incomplete_number": "O n\u00famero do seu cart\u00e3o est\u00e1 incompleto",
        "incomplete_zip": "Seu c\u00f3digo postal est\u00e1 incompleto",
        "invalid_expiry_year_past": "O ano de validade do seu cart\u00e3o j\u00e1 passou",
        "invalid_number": "O n\u00famero do seu cart\u00e3o \u00e9 inv\u00e1lido",
        "location": "Localiza\u00e7\u00e3o",
        "location_colon": "Localiza\u00e7\u00e3o:",
        "maximum_capacity_reached": "A capacidade m\u00e1xima foi atingida",
        "name": "Nome",
        "no": "N\u00e3o",
        "number_of_additional_persons": "N\u00famero de pessoas adicionais:",
        "on_line": "On-line",
        "opened": "Aberto",
        "out_of": "fora de",
        "package": "Pacote",
        "package_info": "Pacote",
        "packages": "Pacotes",
        "paid": "Pago",
        "partially_paid": "Parcialmente pago",
        "paid_deposit": "Dep\u00f3sito pago",
        "paid_remaining_amount": "Valor restante pago",
        "pay_pal": "PayPal",
        "payment_address_error": "Por favor, preencha seu endere\u00e7o.",
        "payment_error": "Desculpe, houve um erro ao processar seu pagamento. Tente novamente mais tarde.",
        "payment_error_default": "Erro de pagamento",
        "payment_link_error": "Desculpe, houve um erro ao criar um link de pagamento. Tente novamente mais tarde.",
        "payment_method_colon": "M\u00e9todo de pagamento:",
        "payment_type_colon": "Tipo de pagamento:",
        "payment_btn_stripe": "Listra",
        "payment_btn_mollie": "On-line",
        "persons": "pessoas",
        "people_waiting": "pessoas esperando",
        "person_waiting": "pessoa esperando",
        "phone": "Telefone",
        "please_wait": "Por favor, aguarde",
        "razorpay": "Razorpay",
        "recaptcha_error": "Por favor, confirme que voc\u00ea n\u00e3o \u00e9 um rob\u00f4",
        "recaptcha_invalid_error": "Verifica\u00e7\u00e3o expirada. Tente novamente.",
        "required_field": "Este campo \u00e9 obrigat\u00f3rio",
        "services": "services",
        "select_date": "Selecione a data",
        "stripe": "Listra",
        "subtotal_colon": "Subtotal:",
        "text_mode": "Modo de texto",
        "html_mode": "Modo HTML",
        "time": "Hor\u00e1rio",
        "time_slot_unavailable_plural": "Os hor\u00e1rios n\u00e3o est\u00e3o dispon\u00edveis",
        "package_booking_unavailable": "A reserva n\u00e3o est\u00e1 dispon\u00edvel ",
        "waiting_for_payment": "Aguardando pagamento",
        "wc": "On-line",
        "wc_appointment_is_removed": "O compromisso \u00e9 removido do carrinho.",
        "wc_appointment_remove": "On-line",
        "wc_error": "Desculpe, ocorreu um erro ao adicionar a reserva ao carrinho do WooCommerce.",
        "wc_product_name": "Agendamento",
        "zoom_join": "Participe da reuni\u00e3o do Zoom",
        "zoom_start": "Iniciar reuni\u00e3o do Zoom",
        "your_position_on_waiting_list": "Voc\u00ea est\u00e1 na lista de espera na posi\u00e7\u00e3o",
        "google_meet_join": "Participe da reuni\u00e3o do Google",
        "microsoft_teams_join": "Participe com o Google Meet",
        "day": "Dia",
        "days": "Dias",
        "waiting_list_notify_message": "N\u00f3s o notificaremos se uma vaga surgir e sua reserva for aprovada.",
        "waiting_list_empty": "A lista de espera est\u00e1 vazia",
        "week": "Semana",
        "weeks": "Semanas",
        "month": "M\u00eas",
        "months": "Meses",
        "year": "Ano",
        "years": "Anos",
        "week_days": "Per\u00edodo de data do evento",
        "custom_days": "Data espec\u00edfica",
        "add_to_calendar": "Adicionar ao calend\u00e1rio",
        "amount": "Quantia",
        "all_services": "Todos os servi\u00e7os",
        "all_locations": "Todos os locais",
        "no_services_employees": "It seems like there are no employees or services created, or no  employees are assigned to the service, at this moment.",
        "add_services_employees": "If you are the admin of this page, see how to",
        "add_services_url": "Add services",
        "add_employees_url": "employees.",
        "back": "Voltar",
        "base_price_colon": "Pre\u00e7o base:",
        "booking_completed_approved": "Obrigado! Sua reserva foi conclu\u00edda.",
        "bookings_limit_reached": "M\u00e1ximo de reservas atingido",
        "cancel": "Cancelar",
        "canceled": "Cancelado",
        "capacity_colon": "Capacidade:",
        "content_mode_tooltip": "N\u00e3o use a op\u00e7\u00e3o Modo de texto se voc\u00ea j\u00e1 tiver c\u00f3digo HTML na descri\u00e7\u00e3o, pois quando essa op\u00e7\u00e3o estiver habilitada, as tags HTML existentes poder\u00e3o ser perdidas.",
        "enable_google_meet": "Habilitar o Google Meet",
        "enable_microsoft_teams": "Habilitar tag de no-show",
        "full": "Completo",
        "upcoming": "Por vir",
        "confirm": "Confirmar",
        "congratulations": "Parab\u00e9ns",
        "customer_already_booked_app": "Voc\u00ea j\u00e1 agendou este compromisso",
        "customer_already_booked_ev": "Voc\u00ea j\u00e1 reservou este evento",
        "date_colon": "Data:",
        "duration_colon": "Dura\u00e7\u00e3o:",
        "email_colon": "E-mail:",
        "email_exist_error": "O e-mail j\u00e1 existe com um nome diferente. Por favor, verifique seu nome.",
        "employee_limit_reached": "O limite di\u00e1rio de agendamentos do funcion\u00e1rio foi atingido. Selecione outra data ou funcion\u00e1rio.",
        "enter_email_warning": "Por favor insira o e-mail",
        "enter_first_name_warning": "Por favor, insira seu nome",
        "enter_last_name_warning": "Por favor, insira o sobrenome",
        "enter_phone_warning": "Por favor, insira o n\u00famero de telefone",
        "enter_valid_email_warning": "Por favor, insira um endere\u00e7o de e-mail v\u00e1lido",
        "enter_valid_phone_warning": "Por favor, insira um n\u00famero de telefone v\u00e1lido.",
        "event_info": "Informa\u00e7\u00f5es do evento",
        "finish_appointment": "Terminar",
        "first_name_colon": "Nome:",
        "h": "h",
        "last_name_colon": "Sobrenome:",
        "licence_start_description": "Dispon\u00edvel a partir da licen\u00e7a Starter ",
        "licence_basic_description": "Dispon\u00edvel na licen\u00e7a Standard ",
        "licence_pro_description": "Dispon\u00edvel na licen\u00e7a Pro ",
        "licence_dev_description": "Dispon\u00edvel na licen\u00e7a Elite",
        "licence_button_text": "Atualizar",
        "min": "min",
        "on_site": "No local",
        "payment_btn_on_site": "No local",
        "oops": "Oops...",
        "payment_btn_square": "Quadrado",
        "open": "Abrir",
        "phone_colon": "Telefone:",
        "phone_exist_error": "O telefone j\u00e1 existe com nome diferente. Por favor, verifique seu nome.",
        "price_colon": "Pre\u00e7o:",
        "service": "service",
        "select_calendar": "Selecione o calend\u00e1rio",
        "services_lower": "servi\u00e7os",
        "square": "Quadrado",
        "time_colon": "Hora local:",
        "time_slot_unavailable": "O intervalo de tempo n\u00e3o est\u00e1 dispon\u00edvel",
        "total_cost_colon": "Custo total:",
        "total_number_of_persons": "N\u00famero total de pessoas:",
        "view": "Visualizar",
        "select": "Selecione",
        "free": "Livre",
        "add_appointment": "Adicionar agendamento",
        "add_extra": "Adicionar extra",
        "add_people": "N\u00famero de pessoas que ir\u00e3o com voc\u00ea.",
        "add_people_total": "O n\u00famero total de pessoas para a reserva.",
        "any": "Qualquer",
        "any_employee": "Qualquer funcion\u00e1rio",
        "auto_fill_your_details": "Preencha seus dados automaticamente usando:",
        "book_appointment": "Agendar consulta",
        "bringing_anyone_with_you": "Vai levar algu\u00e9m com voc\u00ea?",
        "card_number_colon": "N\u00famero do cart\u00e3o",
        "coupons_used": "Limite de cupom atingido",
        "coupons_used_description": "O n\u00famero de consultas com cupom aplicado \u00e9",
        "disable_popup_blocker": "O Bloqueador de Pop-ups est\u00e1 habilitado! Para adicionar seu compromisso ao seu calend\u00e1rio, permita pop-ups e adicione este site \u00e0 sua lista de exce\u00e7\u00f5es.",
        "employee_information": "Informa\u00e7\u00f5es do funcion\u00e1rio",
        "employee_information_package": "Informa\u00e7\u00f5es do funcion\u00e1rio",
        "expires_after": "Expira ap\u00f3s",
        "expires_day": "dia ",
        "expires_days": "dias ",
        "expires_week": "semana",
        "expires_weeks": "semanas",
        "expires_month": "m\u00eas",
        "expires_months": "meses",
        "expires_at": "Expira em",
        "expires_date_colon": "Data de validade",
        "extras_available": "Extras dispon\u00edveis",
        "extra_colon": "Extra:",
        "extra_error": "Selecione o extra:",
        "full_amount_consent": "Quero pagar o valor total",
        "group_booking_message": "Ao reservar este hor\u00e1rio, voc\u00ea estar\u00e1 reservando um compromisso em cima de um compromisso de grupo existente!",
        "includes_colon": "inclui:",
        "min_req_extras_colon": "Extras m\u00ednimos necess\u00e1rios:",
        "multiple_locations": "V\u00e1rios locais",
        "or_enter_details_below": "Detalhes do evento do grupo",
        "package_available": "Dispon\u00edvel em pacote",
        "package_list_overview": "Vis\u00e3o geral",
        "package_discount_text": "Salvar",
        "package_book_service": "Todos os servi\u00e7os s\u00e3o reservados separadamente.",
        "package_book_service_2": "Este pacote tem",
        "package_book_duration": "O pacote tem tempo limitado para",
        "package_book_expire": "V\u00e1lido at\u00e9:",
        "package_book_multiple": "V\u00e1rios pacotes comprados.",
        "package_book_first_pack_apps": "Os compromissos do primeiro pacote expiram em:",
        "package_book_expiration": "Dura\u00e7\u00e3o:",
        "package_book_unlimited": "Ilimitado",
        "package_next_service": "Pr\u00f3ximo servi\u00e7o",
        "package_min_book": "\u00e9 necess\u00e1rio agendar uma consulta agora.",
        "package_min_book_plural": "\u00e9 necess\u00e1rio agendar as consultas/agendamentos agora.",
        "payment_protected_policy": "Pagamento protegido por pol\u00edtica e fornecido por",
        "payment_or_pay_with_card": "Ou pague com cart\u00e3o",
        "payment_type_deposit_only": "Somente dep\u00f3sito",
        "payment_type_full_amount": "Valor total",
        "payment_wc_mollie_sentence": "Voc\u00ea ser\u00e1 redirecionado para a finaliza\u00e7\u00e3o do pagamento.",
        "payment_canceled": "Payment was canceled.",
        "person_upper": "Pessoa",
        "persons_upper": "Pessoas",
        "plus_more": "+mais ",
        "price_changed_message": "Essa mudan\u00e7a levar\u00e1 a um aumento de pre\u00e7o para certas reservas. Voc\u00ea quer que links de pagamento sejam criados?",
        "qty_colon": "Quantidade:",
        "recurring": "Recorrente",
        "recurring_costs_colon": "Compromissos recorrentes:",
        "recurring_appointments": "Compromissos recorrentes",
        "recurring_edit": "Voc\u00ea pode editar ou excluir cada compromisso",
        "recurring_sub_message1": "Alguns dos slots desejados est\u00e3o ocupados. Em vez disso, oferecemos os slots de tempo mais pr\u00f3ximos.",
        "recurring_sub_message2": "N\u00famero de intervalos de tempo ajustados:",
        "recurring_active": "Repita este compromisso",
        "recurring_type_daily": "Di\u00e1rio",
        "recurring_type_weekly": "Semanalmente",
        "recurring_type_monthly": "Mensal",
        "recurring_repeat": "Repita:",
        "recurring_every": "Todo:",
        "recurring_until": "At\u00e9:",
        "recurring_every_text": "Todo",
        "recurring_from_text": "de",
        "recurring_until_text": "at\u00e9",
        "recurring_on": "Sobre:",
        "recurring_each": "Cada:",
        "recurring_substring_on": "sobre",
        "recurring_times": "Hor\u00e1rio(s):",
        "recurring_date_specific": "Data espec\u00edfica",
        "recurring_date_first": "Primeiro",
        "recurring_date_second": "Segundo",
        "recurring_date_third": "Terceiro",
        "recurring_date_fourth": "Quarto",
        "recurring_date_fifth": "Quinto",
        "recurring_date_last": "Durar",
        "recurring_confirm_delete": "Voc\u00ea quer apagar este compromisso?",
        "recurring_changed_message": "A lista de seus compromissos mudou. D\u00ea mais uma olhada e continue clicando no bot\u00e3o Salvar.",
        "remaining_amount_colon": "Valor restante:",
        "repeat_appointment": "Repetir Compromisso",
        "repeat_appointment_quest": "Voc\u00ea quer repetir este compromisso?",
        "select_this_employee": "Selecione este funcion\u00e1rio",
        "select_this_employee_package": "Selecione este funcion\u00e1rio",
        "subscribe_to_mailing_list": "Inscreva-se na nossa lista de e-mails",
        "upload_file_here": "Carregar arquivo aqui",
        "without_expiration": "Sem expira\u00e7\u00e3o",
        "select_location": "Selecione a localiza\u00e7\u00e3o",
        "employee_colon": "Funcion\u00e1rio",
        "select_employee": "Selecione Funcion\u00e1rio",
        "please_select_employee": "Selecione o funcion\u00e1rio",
        "please_select_location": "Por favor selecione a localiza\u00e7\u00e3o",
        "dropdown_empty": "Nenhum dado correspondente",
        "bringing_anyone": "Vai levar algu\u00e9m com voc\u00ea?",
        "bringing_anyone_title": "Vai levar algu\u00e9m com voc\u00ea?",
        "bringing_price": "Precifica\u00e7\u00e3o pelo n\u00famero de pessoas",
        "bringing_people": "Pessoas adicionais",
        "bringing_people_total": "Total de pessoas",
        "bringing_yes": "Sim",
        "bringing_no": "N\u00e3o",
        "package_selection": "Sele\u00e7\u00e3o de Pacotes",
        "package_heading": "Ol\u00e1, existem pacotes especiais com esse servi\u00e7o, confira!",
        "discount_save": "Salvar",
        "separator_or": "Ou",
        "continue_without_package": "Pular pacotes e continuar com o servi\u00e7o selecionado",
        "extras": "Extras",
        "extras_card_open": "Saber mais",
        "extras_card_close": "Esconder",
        "date_time_slots_selected": "Todos os slots est\u00e3o selecionados",
        "cart_step": "Carrinho ",
        "cart_add_button": "Reserve outro ",
        "cart_view_button": "Ver carrinho",
        "cart_title": "You can find below the appointments you selected for booking. If you want to book more, click on the button below.",
        "recurring_step": "Compromisso recorrente",
        "recurrence": "Recorr\u00eancia",
        "recurrence_choosing_time": "Escolha o hor\u00e1rio em que deseja repetir a consulta",
        "repeat_every": "Repita cada",
        "recurrence_day": "dia ",
        "recurrence_week": "semana",
        "recurrence_month": "m\u00eas",
        "recurrence_days": "dias ",
        "recurrence_weeks": "semanas",
        "recurrence_months": "meses",
        "recurrence_repeat_on": "Repita em",
        "recurrence_specific_date": "Data espec\u00edfica",
        "recurrence_first": "Primeiro",
        "recurrence_second": "Segundo",
        "recurrence_third": "Terceiro",
        "recurrence_fourth": "Quarto",
        "recurring_fifth": "Quinto",
        "recurrence_last": "Durar",
        "recurrence_ends": "Termina",
        "recurrence_choose_ends": "Escolha quando a repeti\u00e7\u00e3o termina",
        "recurrence_on": "No dia",
        "recurrence_each": "On the same day each month",
        "recurrence_select_date": "Selecione a data",
        "recurrence_after": "Depois",
        "occurrences": "Ocorr\u00eancias",
        "appointment_repeats": "Compromisso Recorrente",
        "recurrence_every": "Todo",
        "repeats_on": "sobre",
        "repeats_at": "no",
        "repeats_from": "de",
        "ends_after": "Termina depois",
        "ends_on": "Termina em",
        "recurring_summary": "Resumo recorrente",
        "recurring_unavailable_slots": "Hor\u00e1rios indispon\u00edveis",
        "recurring_alert_content": "os hor\u00e1rios que voc\u00ea selecionou est\u00e3o ocupados. Em vez disso, oferecemos os hor\u00e1rios mais pr\u00f3ximos.",
        "recurring_chose_date": "Escolha a data e a hora",
        "recurring_delete": "Excluir",
        "number_of_recurrences": "N\u00famero de recorr\u00eancias:",
        "recurring_slots_selected": "Todos os slots est\u00e3o selecionados",
        "package_info_step": "Pacote",
        "package_info_discount": "Salvar",
        "package_info_includes": "inclui",
        "package_info_employees": "Funcion\u00e1rios",
        "package_appointment_step": "Agendamentos",
        "package_appointment_required": "N\u00famero de consultas necess\u00e1rias para reserva",
        "package_appointment_remaining": "O restante dos compromissos pode ser agendado posteriormente no painel Clientes.",
        "package_appointment_employee": "Funcion\u00e1rio",
        "package_select_employee": "Selecione Funcion\u00e1rio",
        "package_appointment_location": "Localiza\u00e7\u00e3o",
        "package_select_location": "Selecione a localiza\u00e7\u00e3o",
        "package_appointments": "Agendamentos",
        "package_appointments_date": "Data e Hora",
        "package_appointments_select": "Selecione",
        "package_appointments_selected": "Selecionado",
        "package_appointments_add_more": "Adicionar mais agendamentos",
        "package_appointments_slots_selected": "Todos os slots est\u00e3o selecionados",
        "package_booking_overview": "Vis\u00e3o geral da reserva",
        "package_overview_all_selected": "Todos os agendamentos est\u00e3o selecionados",
        "package_overview_selected_later": "Todos os agendamentos ser\u00e3o selecionados posteriormente",
        "package_overview_info": "Informa\u00e7\u00f5es sobre agendamento",
        "package_overview_date": "Data",
        "package_overview_time": "Hor\u00e1rio",
        "package_overview_employee": "Funcion\u00e1rio",
        "package_overview_location": "Localiza\u00e7\u00e3o",
        "coupon": "Cupom ",
        "coupon_mandatory": "O campo de cupom \u00e9 obrigat\u00f3rio",
        "add_coupon_btn": "Adicionar",
        "summary_services_subtotal": "Subtotal do servi\u00e7o",
        "summary_persons": "pessoas",
        "summary_recurrence": "Recorr\u00eancia",
        "summary_recurrences": "Recorr\u00eancias",
        "summary_extras": "Extras",
        "summary_extras_subtotal": "Subtotal de extras",
        "summary_package": "Pacote",
        "summary_event_subtotal": "Subtotal do Evento",
        "paying_now": "Pagando agora",
        "paying_later": "Pagar depois",
        "congrats_total_amount": "Montante total",
        "congrats_package": "Pacote",
        "congrats_location": "Localiza\u00e7\u00e3o",
        "congrats_panel": "Painel do cliente",
        "congrats_cart": "Total de servi\u00e7os reservados",
        "whatsapp_opt_in_text": "Ao inserir seu n\u00famero de telefone voc\u00ea concorda em receber mensagens via WhatsApp",
        "total_tax_colon": "CUBA",
        "incl_tax": "Incluindo IVA",
        "location_information": "Descri\u00e7\u00e3o do local",
        "any_location": "Qualquer local",
        "continue": "Continuar",
        "email_address_colon": "Endere\u00e7o de email",
        "get_in_touch": "Entre em contato",
        "collapse_menu": "Recolher menu",
        "payment_onsite_sentence": "O pagamento ser\u00e1 feito no local.",
        "phone_number_colon": "N\u00famero de telefone",
        "pick_date_and_time_colon": "Selecione a data e a hora:",
        "please_select": "Por favor selecione",
        "summary": "Resumo",
        "total_amount_colon": "Montante total:",
        "your_name_colon": "Seu nome",
        "service_selection": "Sele\u00e7\u00e3o de servi\u00e7os",
        "employee_selection": "L\u00f3gica de sele\u00e7\u00e3o de funcion\u00e1rios",
        "location_selection": "Descri\u00e7\u00e3o do local",
        "service_colon": "Servi\u00e7o",
        "please_select_service": "Selecione o servi\u00e7o",
        "dropdown_category_heading": "Categoria",
        "dropdown_items_heading": "Servi\u00e7o",
        "date_time": "Data & Hora",
        "info_step": "Suas informa\u00e7\u00f5es",
        "enter_first_name": "Digite seu nome",
        "enter_last_name": "Digite o sobrenome",
        "enter_email": "Digite o e-mail",
        "enter_phone": "Digite o telefone",
        "payment_step": "Pagamentos",
        "summary_services": "Servi\u00e7os",
        "summary_person": "pessoa",
        "summary_event": "Evento",
        "appointment_id": "ID do agendamento",
        "event_id": "ID do evento",
        "congrats_payment": "Pagamento",
        "congrats_date": "Data",
        "congrats_time": "Hora local",
        "congrats_service": "Servi\u00e7o",
        "congrats_employee": "Funcion\u00e1rio",
        "show_more": "Mostrar mais",
        "show_less": "Mostrar menos",
        "learn_more": "Saber mais",
        "view_in_package": "Ver mais pacotes",
        "service_information": "Localiza\u00e7\u00e3o do servi\u00e7o",
        "allow_customers_to_pay_total": "Marque esta op\u00e7\u00e3o se voc\u00ea quiser que seus\u003Cbr\u003E clientes tenham a op\u00e7\u00e3o de escolher\u003Cbr\u003E se eles pagar\u00e3o um valor total\u003Cbr\u003E ou apenas um dep\u00f3sito. Se desmarcada,\u003Cbr\u003E os clientes ter\u00e3o apenas dep\u00f3sito\u003Cbr\u003E como op\u00e7\u00e3o de pagamento.",
        "deposit_by_the_number_of_people": "Marque esta op\u00e7\u00e3o se quiser que o valor do dep\u00f3sito seja multiplicado pelo n\u00famero de pessoas que os clientes adicionam na se\u00e7\u00e3o \"Trazendo algu\u00e9m com voc\u00ea\".",
        "allow_total_amount": "Permitir que os clientes paguem o valor total da consulta",
        "allow_total_event_amount": "Permitir que os clientes paguem o valor total do evento",
        "deposit": "Dep\u00f3sito",
        "pay_now": "Pague agora",
        "pay_later": "Deixado para pagar",
        "deposit_amount": "Valor do dep\u00f3sito",
        "deposit_enabled": "Pagamento por dep\u00f3sito",
        "deposit_payment": "Tipo de dep\u00f3sito",
        "deposit_payment_tooltip": "O dep\u00f3sito percentual ser\u00e1 calculado sobre o pre\u00e7o total da reserva e o valor fixo pode ser multiplicado pelo n\u00famero de pessoas ou permanecer fixo no pre\u00e7o total da reserva.",
        "deposit_info": "O restante do valor total ser\u00e1 pago no local.",
        "deposit_per_person": "Multiplique o valor do dep\u00f3sito pelo n\u00famero de pessoas em uma reserva",
        "custom_pricing_enabled": "Pre\u00e7os personalizados",
        "pricing_by_date_enabled": "Pre\u00e7os por intervalo de datas",
        "pricing": "Pre\u00e7os",
        "event_date_range": "Intervalo de datas",
        "booking_appointment": "Agendamento de consulta",
        "buffer_time": "Intervalo",
        "description_colon": "Descri\u00e7\u00e3o:",
        "maximum_quantity_colon": "Quantidade m\u00e1xima:",
        "filter_employee": "Filtrar por funcion\u00e1rio",
        "filter_location": "Filtrar por Localiza\u00e7\u00e3o",
        "filter_packages": "Pacotes",
        "filter_services": "Servi\u00e7os",
        "view_employees": "Ver funcion\u00e1rios",
        "save": "Salvar",
        "in_package": "No Pacote",
        "about_package": "Sobre o pacote",
        "service_available_in_package": "Este servi\u00e7o est\u00e1 dispon\u00edvel em um pacote",
        "more_packages": "Ver mais pacotes",
        "less_packages": "Ver menos pacotes",
        "package_includes": "O pacote inclui",
        "employee_info": "Informa\u00e7\u00f5es do funcion\u00e1rio",
        "book_service": "Reserve este servi\u00e7o",
        "book_package": "Pacote de livros",
        "tab_employees": "Funcion\u00e1rios",
        "categories": "Categorias",
        "category_colon": "Categoria:",
        "description": "Descri\u00e7\u00e3o",
        "info": "Informa\u00e7\u00f5es",
        "view_more": "Ver mais",
        "view_all": "Ver tudo",
        "filter_input": "Procurar",
        "book_now": "Reserve agora",
        "about_service": "Sobre o servi\u00e7o",
        "view_all_photos": "Ver todas as fotos",
        "back_btn": "Volte",
        "heading_service": "Servi\u00e7o",
        "heading_services": "Servi\u00e7os",
        "no_search_data": "Nenhum resultado",
        "filter_all": "Todos",
        "appointment_date_colon": "Data do compromisso:",
        "enter_appointment_date": "Por favor, insira a data da consulta...",
        "from": "De",
        "name_asc": "Nome Ascendente",
        "name_desc": "Nome Descendente",
        "next": "Pr\u00f3ximo",
        "of": "de",
        "price_asc": "Pre\u00e7o Ascendente",
        "price_desc": "Pre\u00e7o Descendente",
        "refine_search": "Por favor, refine seus crit\u00e9rios de pesquisa",
        "results": "resultados",
        "search": "Procurar...",
        "search_filters": "Filtros de pesquisa",
        "search_results": "Resultados da pesquisa",
        "select_appointment_time": "Selecione o hor\u00e1rio do compromisso",
        "select_extras": "Selecione os extras que voc\u00ea gostaria",
        "showing": "Mostrando",
        "time_range_colon": "Intervalo de tempo:",
        "to_lower": "para",
        "to_upper": "Para",
        "add_ticket_category": "Adicionar categoria de pre\u00e7os",
        "apply_to_all": "Aplique isso a todos os eventos recorrentes",
        "custom_pricing_warning": "Os pontos de pre\u00e7os personalizados substituir\u00e3o o valor m\u00e1ximo permitido dos pontos.",
        "custom_pricing_adjustment": "Ajustes de pre\u00e7os personalizados/regulares n\u00e3o s\u00e3o permitidos para eventos com participantes confirmados.",
        "custom_pricing_date_warning": "Defina o per\u00edodo do evento primeiro para habilitar a precifica\u00e7\u00e3o por intervalo de datas.",
        "event": "Evento",
        "events": "Eventos",
        "event_about": "Sobre este evento",
        "event_add_date_range": "Adicionar intervalo de datas",
        "event_free": "Livre",
        "event_book_now": "Reserve agora ",
        "ev_spot": "Ver",
        "ev_spots": "Manchas",
        "ev_no_spots": "N\u00e3o h\u00e1 mais vagas",
        "event_book_persons": "N\u00famero de pessoas",
        "event_book_tickets": "N\u00famero de bilhetes",
        "event_date_range_warning": "Intervalos de datas n\u00e3o definidos usar\u00e3o o pre\u00e7o padr\u00e3o da categoria do ingresso.",
        "event_pick_min_date": "Mostrar a partir da data",
        "event_type": "Tipo de evento",
        "event_status": "Status do evento",
        "event_employee": "Funcion\u00e1rio de Eventos",
        "event_today": "Hoje",
        "event_upcoming_events": "Pr\u00f3ximos eventos",
        "event_spot": "lugar deixado",
        "event_spots_left": "manchas deixadas",
        "event_spots": "Manchas",
        "event_no_spots": "N\u00e3o h\u00e1 mais vagas",
        "event_day": "Dia",
        "event_organizer": "Organizador",
        "event_organizer_tooltip": "Aqui voc\u00ea pode se designar como organizador do evento Google/Outlook.\u003Cbr\u003E Caso contr\u00e1rio, voc\u00ea ser\u00e1 designado como funcion\u00e1rio e adicionado como convidado no evento",
        "event_schedule": "Agendar:",
        "event_hosted_by": "Hospedado por:",
        "event_many_people": "Quantas pessoas vir\u00e3o?",
        "event_upcoming_empty": "N\u00e3o h\u00e1 eventos futuros para este per\u00edodo",
        "event_ticket_name": "Nome do bilhete",
        "event_ticket": "Ingresso",
        "event_tickets": "Ingressos",
        "event_tickets_context": "Selecione o n\u00famero de ingressos que deseja reservar para cada tipo de ingresso",
        "event_ticket_types": "Tipos de Bilhetes",
        "event_select_tickets": "Selecionar ingressos",
        "join_waiting_list": "Entrar na lista de espera",
        "waiting_list": "Lista de espera",
        "event_page": "P\u00e1gina",
        "event_calendar": "Calend\u00e1rio",
        "event_begins": "Come\u00e7a",
        "about": "Sobre",
        "event_tickets_left": "ingressos restantes",
        "event_ticket_left": "bilhete restante",
        "evt_empty_message": "N\u00e3o h\u00e1 eventos futuros para este per\u00edodo",
        "waiting": "Aguardando",
        "event_book_event": "Evento de livro",
        "event_book": "Reserve este evento",
        "event_capacity": "Capacidade:",
        "event_filters": "Filtros",
        "event_start": "In\u00edcio do evento",
        "event_end": "Fim do evento",
        "event_at": "no",
        "event_close": "Fechar",
        "event_congrats": "Parab\u00e9ns",
        "event_payment": "Pagamento",
        "event_customer_info": "Suas informa\u00e7\u00f5es",
        "event_about_list": "Sobre o Evento",
        "events_available": "Eventos dispon\u00edveis",
        "event_available": "Evento dispon\u00edvel",
        "event_search": "Pesquisar Eventos",
        "event_slot_left": "espa\u00e7o restante",
        "event_slots_left": "vagas restantes",
        "event_learn_more": "Saiba mais",
        "event_read_more": "Ler mais",
        "event_timetable": "Hor\u00e1rio",
        "event_bringing": "Para quantos participantes voc\u00ea deseja reservar o evento?",
        "event_show_less": "Mostrar menos",
        "event_show_more": "Mostrar mais",
        "event_location": "Localiza\u00e7\u00e3o do evento",
        "no_events": "Nenhum resultado encontrado...",
        "add_customer": "Adicionar cliente",
        "add_date": "Adicionar data",
        "add_day_off": "Adicionar dia de folga",
        "add_day_off_placeholder": "Insira o nome do feriado ou dia de folga",
        "add_period": "Adicionar per\u00edodo",
        "add_break": "Adicionar quebra",
        "add_special_day": "Adicionar dia especial",
        "apply_to_all_days": "Aplicar para todos os dias",
        "booking_added_success": "Reserva adicionada com sucesso",
        "apple_calendar_tooltip": "Aqui voc\u00ea pode conectar o funcion\u00e1rio ao Apple Calendar,\u003Cbr/\u003Eassim que a reserva for agendada, ela ser\u00e1\u003Cbr/\u003Eautomaticamente adicionada ao calend\u00e1rio do funcion\u00e1rio.",
        "apple_calendar_employee_tooltip": "Aqui, voc\u00ea pode conectar seu Apple Calendar pessoal,\u003Cbr/\u003Eassim que a reserva for agendada,\u003Cbr/\u003Eela ser\u00e1 automaticamente adicionada ao calend\u00e1rio de sua escolha.",
        "apple_calendar_overridden_by_employee": "Substitu\u00eddo pelo funcion\u00e1rio",
        "apple_calendar_disconnect_employee": "Desconectar Funcion\u00e1rio",
        "appointment_canceled": "Agendamento Cancelado",
        "appointment_change_time": "Para reagendar seu compromisso, selecione uma data e hora dispon\u00edveis no calend\u00e1rio e clique em Confirmar.",
        "appointment_deleted": "O compromisso foi exclu\u00eddo",
        "appointment_rescheduled": "O compromisso foi remarcado",
        "appointment_saved": "O compromisso foi salvo",
        "appointment_booked": "Consulta marcada",
        "appointments_booked": "Consultas agendadas",
        "appointments_to_book": "Consultas para marcar",
        "approved": "Aprovado",
        "assigned_services": "Servi\u00e7os Atribu\u00eddos",
        "attendees": "Participantes",
        "away": "Ausente",
        "booking_closes": "Reservas encerradas",
        "booking_opens": "Reservas abertas",
        "booking_reschedule_exception": "O compromisso n\u00e3o pode ser remarcado",
        "break": "No intervalo",
        "break_hours": "Horas de intervalo",
        "breaks": "Pausas",
        "busy": "Ocupado",
        "cancel_appointment": "Cancelar Compromisso",
        "cancel_event": "Cancelar Evento",
        "cancel_following": "Cancelar seguindo",
        "cancel_package": "Cancelar pacote",
        "capacity": "Capacidade",
        "category": "Categoria",
        "change_group_status": "Alterar status do grupo",
        "change_password": "Alterar a senha",
        "choose_a_group_service": "Escolha um servi\u00e7o de grupo",
        "choose_appointment_date": "Por favor, escolha a data do compromisso",
        "choose_appointment_time": "Por favor, escolha o hor\u00e1rio da consulta",
        "company_days_off": "Dias de folga da empresa",
        "confirm_cancel": "Tem certeza de que deseja cancelar este evento?",
        "confirm_cancel_appointment": "Tem certeza de que deseja cancelar este compromisso?",
        "confirm_cancel_event": "Tem certeza de que deseja cancelar sua participa\u00e7\u00e3o?",
        "confirm_cancel_following": "Voc\u00ea deseja cancelar os seguintes eventos?",
        "confirm_cancel_package": "Deseja cancelar esta compra?",
        "confirm_delete": "Tem certeza de que deseja excluir este evento?",
        "confirm_delete_appointment": "Tem certeza de que deseja excluir este compromisso?",
        "confirm_delete_attendee": "Tem certeza de que deseja excluir o participante selecionado?",
        "confirm_delete_attendees": "Tem certeza de que deseja excluir os participantes selecionados?",
        "confirm_delete_following": "Voc\u00ea deseja excluir os seguintes eventos cancelados?",
        "confirm_duplicate_appointment": "Tem certeza de que deseja duplicar este compromisso?",
        "confirm_duplicate_event": "Tem certeza de que deseja duplicar este evento?",
        "confirm_open": "Tem certeza de que deseja abrir este evento?",
        "confirm_open_following": "Voc\u00ea quer abrir os seguintes eventos?",
        "confirm_save_following": "Voc\u00ea deseja atualizar os eventos seguintes?",
        "confirm_save_following_2": "Os ingressos para eventos com participantes n\u00e3o ser\u00e3o atualizados",
        "confirm_save_conflict": "H\u00e1 um evento no Calend\u00e1rio do Google/Outlook que se sobrep\u00f5e a este para um funcion\u00e1rio espec\u00edfico. Tem certeza de que deseja criar outro?",
        "create_new": "Criar novo",
        "customer_profile": "Perfil do cliente",
        "customers": "Clientes",
        "customers_singular_plural": "Cliente(s)",
        "customers_tooltip": "Indica o n\u00famero de clientes novos e recorrentes\u003Cbr/\u003Epara o intervalo de datas selecionado.",
        "customize": "Personalizar",
        "date_of_birth": "Data de nascimento",
        "enter_date_of_birth": "Insira a data de nascimento",
        "enter_date_of_birth_warning": "Por favor, insira a data de nascimento",
        "day1": "1 dia",
        "day_off_name": "Nome do dia de folga",
        "dayoff": "Folga",
        "days2": "2 dias",
        "days3": "3 dias",
        "days4": "4 dias",
        "days5": "5 dias",
        "days6": "6 dias",
        "days_off": "Dias de folga",
        "days_off_add": "Adicionar dia de folga",
        "days_off_date_warning": "Por favor insira a data",
        "days_off_name_warning": "Por favor insira o nome",
        "days_off_repeat_yearly": "Repetir anualmente",
        "delete": "Excluir",
        "delete_following": "Excluir o seguinte",
        "delete_profile": "Excluir perfil",
        "delete_profile_confirm": "Excluir perfil",
        "delete_profile_description": "Tem certeza de que deseja excluir seu perfil? Voc\u00ea perder\u00e1 o acesso a todas as suas reservas e ao painel do cliente.",
        "details": "Detalhes",
        "disabled": "Desabilitado",
        "discount_amount": "Desconto",
        "download_invoice": "Baixar .csv",
        "download_invoice_pdf": "Baixar .csv",
        "download_invoice_xml": "Baixar .csv",
        "pdf": "PDF",
        "xml": "XML",
        "duration": "Dura\u00e7\u00e3o",
        "edit": "Editar",
        "edit_appointment": "Editar Agendamento",
        "edit_customer": "Editar cliente",
        "edit_event": "Editar Evento",
        "email": "E-mail",
        "employee_days_off": "Dias de folga dos funcion\u00e1rios",
        "enter_address": "Digite o endere\u00e7o",
        "enter_employee_icloud_id": "Insira o ID do iCloud do Calend\u00e1rio Apple",
        "enter_employee_app_specific_pass": "Insira a senha espec\u00edfica do aplicativo do Calend\u00e1rio Apple",
        "enter_event_name": "Insira o nome do evento",
        "enter_event_name_warning": "Por favor insira o nome",
        "enter_location_warning": "Por favor selecione a localiza\u00e7\u00e3o",
        "error": "Erro",
        "event_add_attendee": "Adicionar participante",
        "event_attendee_deleted": "Os participantes foram exclu\u00eddos",
        "event_attendee_not_deleted": "Os participantes n\u00e3o foram exclu\u00eddos",
        "event_attendee_remove": "Remover participante",
        "event_attendee_saved": "O participante foi salvo",
        "event_edit_attendees": "Editar Participantes",
        "event_aggregated_price": "O pre\u00e7o ser\u00e1 multiplicado pelo n\u00famero de pessoas/vagas",
        "event_attendees": "Participantes",
        "event_attendees_deleted": "Os participantes foram exclu\u00eddos",
        "event_attendees_not_deleted": "Os participantes n\u00e3o foram exclu\u00eddos",
        "event_book_more_than_once": "Permitir que o mesmo cliente fa\u00e7a reservas mais de uma vez",
        "event_attendees_search": "Encontre participantes",
        "event_booking_closes_after": "As reservas fecham quando o evento come\u00e7a",
        "event_booking_closes_on": "Fecha em:",
        "event_booking_closes_apply": "Se esta op\u00e7\u00e3o n\u00e3o estiver marcada, o plugin calcular\u00e1 o tempo \u003Cbr\u003E para fechar a reserva com base no tempo selecionado para o primeiro evento",
        "event_booking_opens_apply": "Se esta op\u00e7\u00e3o n\u00e3o estiver marcada, o plugin calcular\u00e1 o tempo \u003Cbr\u003E para abrir a reserva com base no tempo selecionado para o primeiro evento",
        "event_booking_opens_now": "As reservas abrem imediatamente",
        "event_booking_opens_on": "Estreia em:",
        "event_bringing_anyone": "Permitir trazer mais pessoas",
        "event_cancel": "Cancelar Evento",
        "event_canceled": "O evento foi cancelado",
        "event_close_after_min": "Fechar evento ap\u00f3s atingir determinado m\u00ednimo",
        "event_close_min_total": "M\u00ednimo de participantes",
        "event_close_min_bookings": "M\u00ednimo de reservas",
        "event_close_min_total_tt": "Uma vaga equivale a um participante.",
        "event_close_min_bookings_tt": "Uma reserva pode ter v\u00e1rios participantes/vagas.",
        "event_close_minimum": "Definir m\u00ednimo",
        "event_colors": "Cores do evento:",
        "event_colors_custom": "Cor personalizada",
        "event_colors_preset": "Cores predefinidas",
        "event_custom_address": "Endere\u00e7o personalizado",
        "event_delete": "Excluir Evento",
        "event_deleted": "O evento foi exclu\u00eddo",
        "event_details": "Detalhes",
        "event_duplicate": "Duplicado",
        "event_edit_attendee": "Editar Participante",
        "event_gallery": "Galeria de eventos:",
        "event_max_capacity": "M\u00e1ximo de vagas permitidas",
        "event_name": "Nome:",
        "event_open": "Evento aberto",
        "event_opened": "O evento foi aberto",
        "event_period_dates": "Datas:",
        "event_period_time": "Hor\u00e1rio:",
        "event_recurring_enabled": "Este \u00e9 um evento recorrente",
        "event_recurring_check": "Mostrar eventos recorrentes",
        "event_recurring_period": "Repetir Evento",
        "event_recurring_until": "At\u00e9 quando?",
        "event_saved": "O evento foi salvo",
        "event_select_address": "Selecione o endere\u00e7o",
        "event_show_on_site": "Mostrar evento no local",
        "events_show_waiting_list_booking_full": "Mostrar lista de espera ap\u00f3s a reserva estar completa",
        "event_staff": "Funcion\u00e1rios",
        "event_status_changed": "O status da reserva foi alterado para",
        "event_tags": "Etiquetas",
        "event_tags_create": "Nenhuma tag. Crie uma nova.",
        "event_tags_select_or_create": "Selecionar ou criar tag",
        "events_dropdown": "Evento",
        "export": "Exportar",
        "export_tooltip_attendees": "Voc\u00ea pode usar esta op\u00e7\u00e3o para exportar os participantes em um arquivo CSV\u003Cbr/\u003Epara o evento selecionado.",
        "general": "Geral",
        "google_calendar": "Calend\u00e1rio Google",
        "google_calendar_tooltip": "Conecte seu Google Agenda aqui para que, assim que o compromisso for agendado, ele possa ser adicionado ao seu Google Agenda automaticamente.",
        "google_sign_in": "Entrar com o Google",
        "google_sign_out": "Sair do Google",
        "h1": "1h",
        "h10": "10h",
        "h11": "11h",
        "h12": "12h",
        "h1min30": "1h 30min",
        "h2": "2h",
        "h3": "3h",
        "h4": "4h",
        "h6": "6h",
        "h8": "8h",
        "h9": "9h",
        "invalid_credentials": "E-mail ou senha incorretos",
        "integrations_settings": "Integra\u00e7\u00f5es",
        "lesson_space": "Espa\u00e7o da Aula",
        "lesson_space_join": "Junte-se ao espa\u00e7o",
        "lesson_space_link": "Link do Lesson Space",
        "lesson_space_links": "Links do Lesson Space",
        "lesson_space_new_space": "Novo Espa\u00e7o",
        "limit_extra_people": "Limitar o n\u00famero adicional de pessoas",
        "limit_extra_people_set": "Definir Limite",
        "limit_extra_people_tooltip": "Limite o n\u00famero de pessoas que um cliente pode adicionar durante a reserva",
        "linked": "Ligado",
        "loader_message": "Por favor, aguarde",
        "locations_dropdown": "Localiza\u00e7\u00e3o",
        "login": "Conecte-se",
        "login_email_placeholder": "Insira seu e-mail",
        "login_password_placeholder": "Digite sua senha",
        "logout": "Sair",
        "mandatory_service_remove_fail_all": "Voc\u00ea \u00e9 o \u00fanico provedor em",
        "mandatory_service_remove_fail": "Voc\u00ea \u00e9 o \u00fanico provedor deste servi\u00e7o",
        "maximum_capacity": "Capacidade M\u00e1x.",
        "min1": "1min",
        "min10": "10min",
        "min12": "12min",
        "min15": "15min",
        "min2": "2min",
        "min20": "20min",
        "min30": "30min",
        "min45": "45min",
        "min5": "5min",
        "minimum_capacity": "Capacidade m\u00ednima",
        "minimum_time_before_canceling": "Tempo m\u00ednimo necess\u00e1rio antes do cancelamento",
        "minimum_time_before_canceling_tooltip": "Defina o tempo antes do compromisso em que os clientes\u003Cbr/\u003En\u00e3o poder\u00e3o cancelar o compromisso.",
        "months3": "3 meses",
        "months6": "6 meses",
        "multiple_emails": "V\u00e1rios e-mails",
        "my_profile": "Meu Perfil",
        "new_appointment": "Novo Agendamento",
        "new_event": "Novo Evento",
        "no_attendees_yet": "Ainda n\u00e3o h\u00e1 participantes...",
        "no_special_days_yet": "Ainda n\u00e3o h\u00e1 participantes...",
        "no_days_off_yet": "Ainda n\u00e3o h\u00e1 participantes...",
        "no_selected_extras_requirements": "Selecione cliente, funcion\u00e1rio e servi\u00e7o",
        "no_selected_slot_requirements": "Selecione a data e a hora",
        "no-show": "Falta",
        "note": "Observa\u00e7\u00e3o",
        "note_internal": "Nota (apenas interno)",
        "notify_attendees": "Notificar o(s) participante(s)",
        "notify_attendees_tooltip": "Marque esta caixa de sele\u00e7\u00e3o se quiser que seus participantes\u003Cbr/\u003Erecebam um e-mail sobre as informa\u00e7\u00f5es atualizadas do evento.",
        "notify_customers": "Notificar o(s) cliente(s)",
        "notify_customers_tooltip": "Marque esta caixa de sele\u00e7\u00e3o se quiser que seu cliente\u003Cbr/\u003Ereceba um e-mail sobre o compromisso agendado.",
        "once_off": "F\u00e9rias",
        "open_following": "Abrir seguindo",
        "package_back_to_appointments": "Voltar para agendamentos",
        "package_back_to_packages": "Voltar para pacotes",
        "package_total_appointments_service": "Consultas neste servi\u00e7o",
        "package_total_appointments": "Consultas/Agendamentos neste pacote",
        "package_left_appointments": "vagas de agendamento restantes para serem reservadas",
        "package_purchase_canceled": "A compra foi cancelada",
        "package_book_next_appointment": "Marque a pr\u00f3xima consulta",
        "package_cancel_success": "Pacote cancelado",
        "package_continue_booking": "Continuar reservando",
        "package_booked_appointments": "Consultas agendadas",
        "package_deal": "Esta reserva faz parte de um pacote",
        "package_service_info": "Informa\u00e7\u00f5es de servi\u00e7o",
        "package_price": "Pre\u00e7o do pacote",
        "packages_dropdown": "Pacote",
        "partially_refunded": "Parcialmente reembolsado",
        "password_has_been_changed": "A senha foi alterada",
        "password_is_set": "A senha est\u00e1 definida",
        "passwords_do_not_match": "As senhas n\u00e3o correspondem",
        "payment": "Pagamento",
        "pay": "Pagar",
        "payment_method": "M\u00e9todo de pagamento",
        "payment_status": "Status do pagamento",
        "payment_links": "Habilitar pagamento por link",
        "payment_links_enable": "Permitir pagamento via Link de Pagamento",
        "payment_links_enable_tooltip": "Se esta op\u00e7\u00e3o estiver habilitada, os clientes poder\u00e3o pagar por meio de notifica\u00e7\u00f5es por e-mail ou pelo painel do cliente.",
        "payment_links_change_status": "Atualizar status da reserva automaticamente",
        "payment_links_change_status_tooltip": "Atualizar status da reserva para aprovado ap\u00f3s pagamento bem-sucedido do link",
        "payment_links_redirect": "Redirecionar URL ap\u00f3s o pagamento",
        "payment_links_redirect_tooltip": "O cliente ser\u00e1 redirecionado para esta URL assim que o pagamento do link for processado.",
        "payment_links_warning": "Observa\u00e7\u00e3o: para que esta op\u00e7\u00e3o funcione, voc\u00ea precisa adicionar novos marcadores de posi\u00e7\u00e3o de link de pagamento aos modelos de mensagem",
        "payments": "Pagamentos",
        "pending": "Pendente",
        "period_location_filter1_tooltip": "Selecione um local espec\u00edfico para este per\u00edodo.",
        "period_location_filter2_tooltip": "Selecione um local espec\u00edfico para cada per\u00edodo.",
        "period_services_filter": "Aplicado para todos os servi\u00e7os atribu\u00eddos",
        "period_services_filter1_tooltip": "Selecione apenas servi\u00e7os espec\u00edficos para este per\u00edodo.\u003Cbr/\u003ESe nenhum servi\u00e7o for selecionado, todos os servi\u00e7os atribu\u00eddos a este funcion\u00e1rio\u003Cbr/\u003Eestar\u00e3o dispon\u00edveis para reserva neste per\u00edodo.",
        "period_services_filter2_tooltip": "Selecione servi\u00e7os espec\u00edficos para cada per\u00edodo.",
        "periods": "Per\u00edodos",
        "pick_a_date_or_range": "Selecione uma data ou intervalo",
        "pick_a_year": "Escolha um ano",
        "preview_invoice": "Pr\u00e9-visualiza\u00e7\u00e3o",
        "price": "Pre\u00e7o",
        "price_per_spot": "Pre\u00e7o por Spot",
        "profile_deleted": "Perfil deletado",
        "profile_saved": "O perfil foi atualizado",
        "providers_dropdown": "Funcion\u00e1rio",
        "provider_profile": "Perfil do Funcion\u00e1rio",
        "purchased": "Comprado",
        "re_type_required": "Por favor, digite a nova senha novamente",
        "recovery_email_sent": "E-mail com link de acesso foi enviado",
        "recurring_active_tooltip": "Marque esta op\u00e7\u00e3o se quiser criar compromissos recorrentes",
        "recurring_type_yearly": "Anual",
        "recurring_list": "Lista de compromissos de pacotes",
        "recurring_settings": "Mostrar eventos recorrentes",
        "redirect_url_after_appointment": "Redirecionar URL ap\u00f3s a reserva",
        "redirect_url_after_appointment_tooltip": "O cliente ser\u00e1 redirecionado para esta URL assim que agendar o compromisso.",
        "redirect_url_after_app_or_package_tt": "O cliente ser\u00e1 redirecionado para esta URL assim que agendar o compromisso ou pacote.",
        "refunded": "Reembolsado",
        "rejected": "Rejeitado",
        "repeat_every_year": "Repete todos os anos",
        "reschedule": "Reprogramar",
        "duplicate": "Duplicado",
        "save_changes": "Salvar altera\u00e7\u00f5es",
        "save_single": "N\u00e3o, s\u00f3 esse",
        "save_special_day": "Salve o dia especial",
        "schedule": "Agendamento",
        "select_customer_warning": "Selecione pelo menos um cliente",
        "select_single_customer_warning": "Selecione o cliente",
        "select_customers": "Selecione Cliente(s)",
        "select_date_warning": "Por favor selecione a data",
        "select_cycle_warning": "Selecione o per\u00edodo de repeti\u00e7\u00e3o",
        "select_interval_warning": "Selecione o intervalo de repeti\u00e7\u00e3o",
        "select_employee_warning": "Selecione o funcion\u00e1rio",
        "select_coupon": "Selecione o cupom",
        "select_max_customer_count_warning": "O n\u00famero m\u00e1ximo de lugares \u00e9",
        "select_repeat_period": "Selecione Repetir Per\u00edodo",
        "select_repeat_interval": "Selecione o intervalo de repeti\u00e7\u00e3o",
        "select_service_category": "Selecione a categoria de servi\u00e7o",
        "select_service_warning": "Selecione o servi\u00e7o",
        "select_time": "Selecione o hor\u00e1rio",
        "select_time_warning": "Por favor selecione o hor\u00e1rio",
        "selected_customers": "Clientes selecionados",
        "service_category": "Categoria de servi\u00e7o",
        "services_dropdown": "Servi\u00e7o",
        "service_no_extras": "Este servi\u00e7o n\u00e3o tem extras",
        "service_price": "Pre\u00e7o do servi\u00e7o",
        "service_provider_remove_fail": "Voc\u00ea tem compromissos para este servi\u00e7o",
        "service_provider_remove_fail_all": "Voc\u00ea tem compromissos para",
        "settings": "Configura\u00e7\u00f5es",
        "special_day_date_warning": "Por favor insira a data",
        "special_day_end_time_warning": "Por favor, insira o hor\u00e1rio de t\u00e9rmino",
        "special_day_start_time_warning": "Por favor, insira a hora de in\u00edcio",
        "special_days": "Dias especiais",
        "special_days_reflect_services": "Refletir sobre",
        "spots": "Manchas",
        "status": "Status",
        "disconnect": "Desconectar",
        "stripe_connect": "Stripe Connect",
        "stripe_preview": "Painel",
        "stripe_onboard": "A bordo",
        "stripe_account_standard": "Conta Padr\u00e3o",
        "stripe_account_express": "Conta Expressa",
        "success": "Sucesso",
        "today": "Hoje",
        "tomorrow": "Amanh\u00e3",
        "total": "Total",
        "total_price": "Pre\u00e7o total",
        "created_on": "Criado em",
        "update_following": "Atualiza\u00e7\u00e3o a seguir",
        "user_profile": "Perfil do usu\u00e1rio",
        "week1": "1 semana",
        "weekday_friday": "Sexta-feira",
        "weekday_monday": "Segunda-feira",
        "weekday_saturday": "S\u00e1bado",
        "weekday_sunday": "Domingo",
        "weekday_thursday": "Quinta-feira",
        "weekday_tuesday": "Ter\u00e7a-feira",
        "weekday_wednesday": "Quarta-feira",
        "weeks2": "2 semanas",
        "weeks3": "3 semanas",
        "weeks4": "4 semanas",
        "wc_product": "Selecione o produto WooCommerce",
        "wc_product_tooltip": "Aqui voc\u00ea pode escolher o produto que ser\u00e1 usado para integra\u00e7\u00e3o com o WooCommerce.",
        "wc_service": "Servi\u00e7o WooCommerce",
        "work_hours": "Horas de trabalho",
        "working_hours": "Horas de trabalho",
        "timezone": "Fuso hor\u00e1rio",
        "yes": "Sim",
        "outlook_sign_in": "Entrar com o Outlook",
        "outlook_sign_out": "Sair do Outlook",
        "outlook_calendar_tooltip": "Aqui voc\u00ea pode conectar o funcion\u00e1rio ao Calend\u00e1rio do Outlook,\u003Cbr/\u003Eassim, quando o compromisso for agendado, ele ser\u00e1\u003Cbr/\u003Eadicionado automaticamente ao calend\u00e1rio do funcion\u00e1rio.",
        "zoom": "Zoom",
        "zoom_click_to_join": "Participe da reuni\u00e3o do Zoom",
        "zoom_click_to_start": "Iniciar reuni\u00e3o do Zoom",
        "zoom_join_link": "Link de entrada no Zoom (participantes)",
        "zoom_link": "Link do Zoom",
        "zoom_links": "Links do Zoom",
        "zoom_start_link": "Link de in\u00edcio do Zoom (Host)",
        "zoom_user": "Usu\u00e1rio do Zoom",
        "zoom_user_placeholder": "Selecione o usu\u00e1rio do Zoom",
        "zoom_user_tooltip": "Aqui voc\u00ea pode selecionar Usu\u00e1rio do Zoom,\u003Cbr/\u003Eassim, assim que o compromisso for agendado,\u003Cbr/\u003Ea reuni\u00e3o do Zoom ser\u00e1 criada automaticamente.",
        "wc_order": "Ordem",
        "tax": "Imposto",
        "due": "Devido",
        "google_meet_link": "Link do Google Meet",
        "microsoft_teams_link": "Link do Microsoft Teams",
        "personal_info": "Informa\u00e7\u00f5es Pessoais",
        "password_tab": "Senha",
        "profile_data_success": "Dados do perfil atualizados com sucesso",
        "password_success": "Senha alterada com sucesso",
        "menu_title": "Menu",
        "log_out": "Sair",
        "toggle_sidebar": "Alternar barra lateral",
        "filters": "Filtros",
        "package_deal_expire_in": "Este pacote ir\u00e1 expirar em",
        "appointments_deal_expire": "agende consultas antes que a oferta expire!",
        "pay_now_btn": "Pague agora",
        "no_app_found": "Nenhum compromisso encontrado",
        "have_no_app": "Voc\u00ea n\u00e3o tem nenhum compromisso",
        "no_pack_found": "Nenhum pacote encontrado",
        "have_no_pack": "Voc\u00ea n\u00e3o tem nenhum pacote",
        "no_evt_found": "Nenhum evento encontrado",
        "have_no_evt": "Voc\u00ea n\u00e3o tem nenhum evento",
        "notification_language": "Idioma de notifica\u00e7\u00e3o",
        "language": "Linguagem",
        "select_wp_user": "Selecione ou crie um novo",
        "wp_user": "Usu\u00e1rio WordPress",
        "female": "Feminino",
        "male": "Masculino",
        "gender": "G\u00eanero",
        "start_date": "Hora de in\u00edcio",
        "end_date": "Data do evento",
        "start_time": "Hora de in\u00edcio",
        "end_time": "Encerramento",
        "delete_period": "Selecione Repetir Per\u00edodo",
        "new_customer": "Novo cliente",
        "appointment_status_changed": "O status do agendamento foi alterado para",
        "booking_not_found": "Bot\u00e3o de reserva de evento ",
        "booking_not_paid": "Pre\u00e7o da reserva",
        "booking_canceled": "Reserva cancelada",
        "ticket_not_valid_for_date": "O ingresso n\u00e3o pode ser escaneado para esta data",
        "ticket_already_scanned": "O pacote foi salvo",
        "group_ticket_already_scanned": "O servi\u00e7o foi salvo",
        "all_already_scanned": "Todos os ingressos j\u00e1 foram escaneados",
        "ticket_not_found": "Ingresso n\u00e3o encontrado",
        "ticket_is_valid": "Ingressos",
        "e_tickets": "Ingressos",
        "scan_e_ticket": "Selecionar ingressos",
        "e_ticket_scanner": "Nome do bilhete",
        "ticket_id": "Ticket",
        "ticket_name": "Nome do bilhete",
        "booking_id": "Reserva",
        "attendees_allowed": "C\u00f3digo do participante",
        "torch_off": "Lanterna desligada",
        "torch_on": "Lanterna ligada",
        "switch_camera": "Trocar c\u00e2mera",
        "start_scanner": "Hora de in\u00edcio",
        "stop_scanner": "Parar Scanner",
        "enter_ticket_manually": "Insira manualmente os detalhes do E-Ticket",
        "enter_ticket_code": "Ingressos para eventos",
        "enter_booking_id": "Insira o ID da empresa",
        "validate_ticket": "Selecionador de data",
        "camera_error_1": "Permiss\u00e3o para a c\u00e2mera negada. Por favor, permita o acesso \u00e0 c\u00e2mera e tente novamente.",
        "camera_error_2": "Nenhuma c\u00e2mera encontrada neste dispositivo.",
        "camera_error_3": "C\u00e2mera n\u00e3o \u00e9 suportada por este navegador.",
        "checked_in": "Check-in realizado",
        "ticket_not_valid": "Ingresso inv\u00e1lido",
        "available": "Dispon\u00edvel",
        "booking_cancel_exception": "A reserva n\u00e3o pode ser cancelada",
        "generate_payment_links": "Gerar links de pagamento",
        "generate_payment_links_tooltip": "Marque esta caixa para gerar um link de pagamento.\u003Cbr\u003E Para inclu\u00ed-lo na notifica\u00e7\u00e3o, adicione o espa\u00e7o reservado para o link de pagamento.",
        "no_results": "N\u00e3o h\u00e1 resultados...",
        "select_customer": "Selecione o cliente",
        "select_service": "Selecione o servi\u00e7o",
        "subtotal": "Subtotal",
        "access_link_send": "Enviar Link de Acesso",
        "access_link_send_description": "Insira o endere\u00e7o de e-mail da sua conta e enviaremos um link de acesso para sua caixa de entrada.",
        "access_link_send_check": "Verifique seu e-mail ",
        "access_link_send_click": "Clique no link de ativa\u00e7\u00e3o no e-mail que enviamos para",
        "access_link_send_inbox": "N\u00e3o recebeu o e-mail? Verifique seu filtro de spam ou",
        "access_link_send_retry": "tente um e-mail diferente",
        "enter_credentials": "Insira suas credenciais para acessar sua conta.",
        "email_or_username": "E-mail ou nome de usu\u00e1rio",
        "enter_email_or_username_warning": "Por favor, insira o e-mail ou nome de usu\u00e1rio",
        "enter_password_warning": "Por favor, digite a senha",
        "forgot_password": "Esqueceu sua senha?",
        "forgot_your_password": "Esqueceu sua senha?",
        "reset_password": "Redefinir senha",
        "curr_password_colon": "Senha atual ",
        "curr_password_required": "N\u00e3o corresponde \u00e0 sua senha atual",
        "new_password_set": "Definir senha",
        "new_password_set_action": "Definir senha",
        "new_password_set_description": "Insira, e digite novamente sua nova senha para continuar",
        "new_password_colon": "Nova Senha",
        "new_password_colon_retype": "Digite a nova senha novamente",
        "new_password_required": "Por favor, insira uma nova senha",
        "new_password_length": "A senha deve ter mais de 3 caracteres",
        "new_password_changed": "Senha atualizada!",
        "new_password_changed_description": "Sua senha foi alterada com sucesso. Use sua nova senha para efetuar login.",
        "passwords_not_match": "As senhas n\u00e3o correspondem",
        "password": "Senha",
        "send": "Enviar",
        "sign_in": "Entrar",
        "welcome_back": "Bem vindo(a) de volta"
    };
    var wpAmeliaTimeZone = ["America/Sao_Paulo"];
    var wpAmeliaUrls = {
        "wpAmeliaUseUploadsAmeliaPath": "1",
        "wpAmeliaPluginURL": "/ambiente9/wp-content/plugins/ameliabooking/",
        "wpAmeliaPluginAjaxURL": "/ambiente9/wp-admin/admin-ajax.php?action=wpamelia_api&call="
    };
    //# sourceURL=amelia_booking_script_index-js-extra

wp.i18n.setLocaleData({
        'text direction\u0004ltr': ['ltr']
    });
    //# sourceURL=wp-i18n-js-after

var ElementorProFrontendConfig = {
        "ajaxurl": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-admin\/admin-ajax.php",
        "nonce": "fa6e3ce567",
        "urls": {
            "assets": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-content\/plugins\/elementor-pro\/assets\/",
            "rest": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-json\/"
        },
        "settings": {
            "lazy_load_background_images": true
        },
        "popup": {
            "hasPopUps": false
        },
        "shareButtonsNetworks": {
            "facebook": {
                "title": "Facebook",
                "has_counter": true
            },
            "twitter": {
                "title": "Twitter"
            },
            "linkedin": {
                "title": "LinkedIn",
                "has_counter": true
            },
            "pinterest": {
                "title": "Pinterest",
                "has_counter": true
            },
            "reddit": {
                "title": "Reddit",
                "has_counter": true
            },
            "vk": {
                "title": "VK",
                "has_counter": true
            },
            "odnoklassniki": {
                "title": "OK",
                "has_counter": true
            },
            "tumblr": {
                "title": "Tumblr"
            },
            "digg": {
                "title": "Digg"
            },
            "skype": {
                "title": "Skype"
            },
            "stumbleupon": {
                "title": "StumbleUpon",
                "has_counter": true
            },
            "mix": {
                "title": "Mix"
            },
            "telegram": {
                "title": "Telegram"
            },
            "pocket": {
                "title": "Pocket",
                "has_counter": true
            },
            "xing": {
                "title": "XING",
                "has_counter": true
            },
            "whatsapp": {
                "title": "WhatsApp"
            },
            "email": {
                "title": "Email"
            },
            "print": {
                "title": "Print"
            },
            "x-twitter": {
                "title": "X"
            },
            "threads": {
                "title": "Threads"
            }
        },
        "woocommerce": {
            "menu_cart": {
                "cart_page_url": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/carrinho\/",
                "checkout_page_url": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/finalizar-compra\/",
                "fragments_nonce": "ce8b3d536f"
            }
        },
        "facebook_sdk": {
            "lang": "pt_BR",
            "app_id": ""
        },
        "lottie": {
            "defaultAnimationUrl": "https:\/\/projetos.voppecomunicacao.com.br\/ambiente9\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"
        }
    };
    //# sourceURL=elementor-pro-frontend-js-before

{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://projetos.voppecomunicacao.com.br/ambiente9/wp-includes/js/wp-emoji-release.min.js?ver=6.9.4"}}

/*! This file is auto-generated */
    const a = JSON.parse(document.getElementById("wp-emoji-settings").textContent),
        o = (window._wpemojiSettings = a, "wpEmojiSettingsSupports"),
        s = ["flag", "emoji"];
    function i(e) {
        try {
            var t = {
                supportTests: e,
                timestamp: (new Date).valueOf()
            };
            sessionStorage.setItem(o, JSON.stringify(t))
        } catch (e) {}
    }
    function c(e, t, n) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(t, 0, 0);
        t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data);
        e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0);
        const a = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data);
        return t.every((e, t) => e === a[t])
    }
    function p(e, t) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(t, 0, 0);
        var n = e.getImageData(16, 16, 1, 1);
        for (let e = 0; e < n.data.length; e++)
            if (0 !== n.data[e])
                return !1;
        return !0
    }
    function u(e, t, n, a) {
        switch (t) {
        case "flag":
            return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\udde8\ud83c\uddf6", "\ud83c\udde8\u200b\ud83c\uddf6") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
        case "emoji":
            return !a(e, "\ud83e\u1fac8")
        }
        return !1
    }
    function f(e, t, n, a) {
        let r;
        const o = (r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : document.createElement("canvas")).getContext("2d", {
                willReadFrequently: !0
            }),
            s = (o.textBaseline = "top", o.font = "600 32px Arial", {});
        return e.forEach(e => {
            s[e] = t(o, e, n, a)
        }), s
    }
    function r(e) {
        var t = document.createElement("script");
        t.src = e,
        t.defer = !0,
        document.head.appendChild(t)
    }
    a.supports = {
        everything: !0,
        everythingExceptFlag: !0
    },
    new Promise(t => {
        let n = function() {
            try {
                var e = JSON.parse(sessionStorage.getItem(o));
                if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests)
                    return e.supportTests
            } catch (e) {}
            return null
        }();
        if (!n) {
            if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob)
                try {
                    var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), c.toString(), p.toString()].join(",") + "));",
                        a = new Blob([e], {
                            type: "text/javascript"
                        });
                    const r = new Worker(URL.createObjectURL(a), {
                        name: "wpTestEmojiSupports"
                    });
                    return void (r.onmessage = e => {
                        i(n = e.data),
                        r.terminate(),
                        t(n)
                    })
                } catch (e) {}
            i(n = f(s, u, c, p))
        }
        t(n)
    }).then(e => {
        for (const n in e)
            a.supports[n] = e[n],
            a.supports.everything = a.supports.everything && a.supports[n],
            "flag" !== n && (a.supports.everythingExceptFlag = a.supports.everythingExceptFlag && a.supports[n]);
        var t;
        a.supports.everythingExceptFlag = a.supports.everythingExceptFlag && !a.supports.flag,
        a.supports.everything || ((t = a.source || {}).concatemoji ? r(t.concatemoji) : t.wpemoji && t.twemoji && (r(t.twemoji), r(t.wpemoji)))
    });
    //# sourceURL=https://projetos.voppecomunicacao.com.br/ambiente9/wp-includes/js/wp-emoji-loader.min.js
