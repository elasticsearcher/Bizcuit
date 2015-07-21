/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * Latvian Translations
 * initial translation by salix 17 April 2007
 * updated and modified from en by Juris Vecvanags (2014)
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.defaultDateFormat = "d.m.Y";
        Ext.Date.monthNames = ["Janv�?ris", "Febru�?ris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };

        Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20ac',     // Euro
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.lv.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.lv.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} iezīmētu rindu"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.lv.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Iel�?dē..."
});

Ext.define("Ext.locale.lv.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Šodiena",
    minText: "'Šis datums ir maz�?ks par minim�?lo datumu",
    maxText: "Šis datums ir liel�?ks par maksim�?lo datumu",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'N�?kamais mēnesis (Control+pa labi)',
    prevText: 'Iepriekšējais mēnesis (Control+pa kreisi)',
    monthYearText: 'Mēneša izvēle (Control+uz augšu/uz leju lai p�?rslēgtu gadus)',
    todayTip: "{0} (Atstarpe)",
    format: "d.m.Y",
    startDay: 1
});

Ext.define("Ext.locale.lv.picker.Month", {
    override: "Ext.picker.Month",
    okText: "Labi",
    cancelText: "Atcelt"
});

Ext.define("Ext.locale.lv.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Lapa",
    afterPageText: "no {0}",
    firstText: "Pirm�? lapa",
    prevText: "iepriekšēj�? lapa",
    nextText: "N�?kam�? lapa",
    lastText: "Pēdēj�? lapa",
    refreshText: "Atjaunot",
    displayMsg: "Kop�? {2} ieraksti. R�?du ierakstus no {0} līdz {1}",
    emptyMsg: 'Nav datu'
});

Ext.define("Ext.locale.lv.form.Basic", {
    override: "Ext.form.Basic",
    waitTitle: "Lūdzu gaidiet..."
});

Ext.define("Ext.locale.lv.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Aizvert šo cilni"
});

Ext.define("Ext.locale.lv.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Vērtība šaj�? lauk�? nav pareiza"
});

Ext.define("Ext.locale.lv.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Lauka minim�?lais garums ir {0}",
    maxLengthText: "Lauka maksim�?lais garums ir {0}",
    blankText: "Šis lauks ir oblig�?ts",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.lv.form.field.Number", {
    override: "Ext.form.field.Number",
    decimalPrecision: 2,
    minText: "Lauka minim�?l�? vērtība ir {0}",
    maxText: "Lauka maksim�?l�? vērtība ir{0}",
    nanText: "{0} nav skaitlis"
});

Ext.define("Ext.locale.lv.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Atspējots",
    disabledDatesText: "Atspējots",
    minText: "Datumam šaj�? lauk�? j�?būt liel�?kam k�? {0}",
    maxText: "Datumam šaj�? lauk�? j�?būt maz�?kam k�? {0}",
    invalidText: "{0} ir nepareizi noformēts datums. Datuma form�?ts: {1}",
    format: "d.m.Y",
    altFormats: "d/m/Y|d/m/y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.lv.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Iel�?dē..."
    });
});

Ext.define("Ext.locale.lv.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Šis lauks paredzēts e-pasta adresei form�?t�? "lietot�?js@domēns.lv"',
    urlText: ' Šis lauks paredžets URL form�?t�? "http:/' + '/www.paraugs.lv"',
    alphaText: 'Šis lauks drīkst saturēt tikai burtus un _ zīmi',
    alphanumText: 'Šis lauks drīkst saturēt tikai burtus, ciparus un _ zīmi'
});

Ext.define("Ext.locale.lv.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Please enter the URL for the link:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Trekns (Ctrl+B)',
                text: 'P�?rveidot iezīmēto tekstu treknrakst�?.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Kursīvs (Ctrl+I)',
                text: 'P�?rveidot iezīmēto tekstu slīprakst�?.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Pasvītrot (Ctrl+U)',
                text: 'Pasvītrot iezīmēto tekstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Palielin�?t tekstu',
                text: 'Palielin�?t rakstzīmju izmēru.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Samazin�?t tekstu',
                text: 'Samazin�?t rakstzīmju izmēru.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Fona kr�?sa',
                text: 'Mainīt iezīmēt�? teskta fona kr�?su.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Rakstzīmju kr�?sa',
                text: 'Mainīt iezīmēt�? teskta kr�?su.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Centrēt pa kreisi',
                text: 'Centrēt tekstu pa kreisi.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Centrēt pa vidu',
                text: 'Centrēt pa vidu',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Centrēt pa labi',
                text: 'Centrēt tekstu pa labi.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Saraksts',
                text: 'S�?kt sarakstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Numurēts saraksts',
                text: 'S�?kt numurētu sarakstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hipersaite',
                text: 'P�?rveidot iezīmēto tekstu par hipersaiti',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Rediģēt pirmkodu',
                text: 'P�?rslēgt uz pirmkoda rediģēšanas režīmu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.lv.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "K�?rtot pieaugoš�? secīb�?",
    sortDescText: "K�?rtot dilstoš�? secīb�?",
    lockText: "Noslēgt kolonnu",
    unlockText: "Atslēgt kolonnu",
    columnsText: "Kolonnas"
});

Ext.define("Ext.locale.lv.grid.DateColumn", {
    override: "Ext.grid.DateColumn",
    format: 'd.m.Y'
});

Ext.define("Ext.locale.lv.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(Tukšs)',
    groupByText: 'Grupēt izmantojot šo lauku',
    showGroupsText: 'R�?dīt grup�?s'
});

Ext.define("Ext.locale.lv.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Nosaukums",
    valueText: "Vērtība",
    dateFormat: "j.m.Y",
    trueText: "true",
    falseText: "false"
});

Ext.define("Ext.locale.lv.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "Vērtībai šaj�? lauk�? jabūt pēc pl. {0}",
    maxText: "Vērtībai šaj�? lauk�? jabūt vien�?dai vai maz�?kai par pl. {0}",
    invalidText: "{0} ir nekorekts laiks",
    format: "H:i",
    altFormats: "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
});

Ext.define("Ext.locale.lv.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "Iezvēlaties vismaz vienu variantu no šis grupas"
});

Ext.define("Ext.locale.lv.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "Iezvēlaties vienu variantu no šis grupas"
});

Ext.define("Ext.locale.lv.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "Labi",
        cancel: "Atcelt",
        yes: "J�?",
        no: "Nē"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.lv.Component", {
    override: "Ext.Component"
});