(function () {

    'use strict';

    var __dirname = '../..';

    require.config({
        waitSeconds: 200,
        paths: {
            'text': __dirname + '/lib/vendor/require-text/text',
            'jquery': __dirname + '/lib/vendor/jquery-2.0.3.min',
            'bootstrap': __dirname + '/lib/vendor/bootstrap-3.3.6-dist/js/bootstrap.min',
            'bootstrap-switch': __dirname + '/lib/vendor/bootstrap-switch/dist/js/bootstrap-switch.min',
            'handlebars': __dirname + '/lib/vendor/handlebars/handlebars',
            'radio': __dirname + '/lib/vendor/radio/radio',
            'cytoscape': __dirname + '/lib/vendor/cytoscape/build/cytoscape-unstable',
            'cytoscapeQtip': __dirname + '/lib/vendor/qtip/cytoscape-qtip',
            'cytoscapeUndo': __dirname + '/lib/vendor/cytoscape-undo-redo/cytoscape-undo-redo',
            'qtip': __dirname + '/lib/vendor/qtip/qtip.min',
            'dagre': __dirname + '/lib/vendor/cytoscape/lib/dagre',
            'voronoi': __dirname + '/lib/vendor/cytoscape/lib/rhill-voronoi-core',
            'foograph': __dirname + '/lib/vendor/cytoscape/lib/foograph',
            'arbor': __dirname + '/lib/vendor/cytoscape/lib/arbor',
            'cola': __dirname + '/lib/vendor/cytoscape/lib/cola.v3.min',
            'springy': __dirname + '/lib/vendor/cytoscape/lib/springy',
            'moment': __dirname + '/lib/vendor/moment/moment',
            'daterangepicker': __dirname + '/lib/vendor/daterangepicker/daterangepicker',
            'scrollTo': __dirname + '/lib/vendor/scroll-to/scroll-to',
            'custom-scrollbar': __dirname + '/lib/vendor/custom-scrollbar/custom-scrollbar.min',
            'toastr': __dirname + '/lib/vendor/toastr/toastr.min',
            'codeMirror': __dirname + '/lib/vendor/code-mirror',
            'flip': __dirname + '/lib/vendor/jquery-flip/jquery-flip.min',
            'countdown': __dirname + '/lib/vendor/jquery.countdown/jquery.countdown.min',
            'moment-tmz': __dirname + '/lib/vendor/moment/moment-tmz',
            'slick': __dirname + '/lib/vendor/slick/slick'
        },
        shim: {
            'bootstrap': {
                deps: ['jquery']
            },
            'bootstrap-switch': {
                deps: ['jquery', 'bootstrap']
            },
            'qtip': {
                deps: ['jquery']
            },
            'cytoscape': {
                deps: ['jquery']
            },
            'cytoscapeQtip': {
                deps: ['jquery', 'cytoscape']
            },
            'cytoscapeUndo': {
                deps: ['jquery', 'cytoscape']
            },
            'dagre': {
                deps: ['jquery', 'cytoscape']
            },
            'arbor': {
                deps: ['jquery', 'cytoscape']
            },
            'cola': {
                deps: ['jquery', 'cytoscape']
            },
            'springy': {
                deps: ['jquery', 'cytoscape']
            },
            'moment': {
                deps: ['jquery']
            },
            'daterangepicker': {
                deps: ['jquery', 'moment']
            },
            'scrollTo': {
                deps: ['jquery']
            },
            'custom-scrollbar': {
                deps: ['jquery']
            },
            'toastr': {
                deps: ['jquery']
            },
            'flip': {
                deps: ['jquery']
            },
            'countdown': {
                deps: ['jquery']
            },
            'moment-tmz': {
                deps: ['jquery', 'moment']
            },
            'slick': {
                deps: ['jquery']
            }
        }
    });

    require([
        'app',
        'jquery',
        'bootstrap',
        'bootstrap-switch',
        'cytoscape',
        'qtip',
        'cytoscapeQtip',
        'cytoscapeUndo',
        'dagre',
        'arbor',
        'cola',
        'springy',
        'moment',
        'daterangepicker',
        'scrollTo',
        'custom-scrollbar',
        'toastr',
        'flip',
        'countdown',
        'moment-tmz',
        'slick'
        ],
        function(App, $) {
            App.initialize();
    });

}());
