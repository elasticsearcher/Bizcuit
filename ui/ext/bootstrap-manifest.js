var Ext = Ext || { }; Ext.manifest = {
  "paths": {
    "Ext": "src",
    "Ext.AbstractManager": "packages/sencha-core/src/AbstractManager.js",
    "Ext.Ajax": "packages/sencha-core/src/Ajax.js",
    "Ext.AnimationQueue": "packages/sencha-core/src/AnimationQueue.js",
    "Ext.ComponentManager": "packages/sencha-core/src/ComponentManager.js",
    "Ext.ComponentQuery": "packages/sencha-core/src/ComponentQuery.js",
    "Ext.Evented": "packages/sencha-core/src/Evented.js",
    "Ext.Factory": "packages/sencha-core/src/mixin/Factoryable.js",
    "Ext.GlobalEvents": "packages/sencha-core/src/GlobalEvents.js",
    "Ext.JSON": "packages/sencha-core/src/JSON.js",
    "Ext.Mixin": "packages/sencha-core/src/class/Mixin.js",
    "Ext.Msg": "src/window/MessageBox.js",
    "Ext.String.format": "packages/sencha-core/src/Template.js",
    "Ext.TaskQueue": "packages/sencha-core/src/TaskQueue.js",
    "Ext.Template": "packages/sencha-core/src/Template.js",
    "Ext.Widget": "packages/sencha-core/src/Widget.js",
    "Ext.XTemplate": "packages/sencha-core/src/XTemplate.js",
    "Ext.app": "packages/sencha-core/src/app",
    "Ext.app.bindinspector": "src/app/bindinspector",
    "Ext.data": "packages/sencha-core/src/data",
    "Ext.direct": "packages/sencha-core/src/direct",
    "Ext.dom": "packages/sencha-core/src/dom",
    "Ext.dom.ButtonElement": "src/dom/ButtonElement.js",
    "Ext.dom.Layer": "src/dom/Layer.js",
    "Ext.event": "packages/sencha-core/src/event",
    "Ext.event.publisher.MouseEnterLeave": "src/event/publisher/MouseEnterLeave.js",
    "Ext.fx.Animation": "packages/sencha-core/src/fx/Animation.js",
    "Ext.fx.Runner": "packages/sencha-core/src/fx/Runner.js",
    "Ext.fx.State": "packages/sencha-core/src/fx/State.js",
    "Ext.fx.animation": "packages/sencha-core/src/fx/animation",
    "Ext.fx.easing": "packages/sencha-core/src/fx/easing",
    "Ext.fx.layout": "packages/sencha-core/src/fx/layout",
    "Ext.fx.runner": "packages/sencha-core/src/fx/runner",
    "Ext.mixin": "packages/sencha-core/src/mixin",
    "Ext.overrides": "overrides",
    "Ext.overrides.util.Positionable": "overrides/Positionable.js",
    "Ext.perf": "packages/sencha-core/src/perf",
    "Ext.plugin.Abstract": "packages/sencha-core/src/plugin/Abstract.js",
    "Ext.plugin.LazyItems": "packages/sencha-core/src/plugin/LazyItems.js",
    "Ext.scroll": "packages/sencha-core/src/scroll",
    "Ext.util": "packages/sencha-core/src/util",
    "Ext.util.Animate": "src/util/Animate.js",
    "Ext.util.CSS": "src/util/CSS.js",
    "Ext.util.ClickRepeater": "src/util/ClickRepeater.js",
    "Ext.util.ComponentDragger": "src/util/ComponentDragger.js",
    "Ext.util.Cookies": "src/util/Cookies.js",
    "Ext.util.ElementContainer": "src/util/ElementContainer.js",
    "Ext.util.Floating": "src/util/Floating.js",
    "Ext.util.Focusable": "src/util/Focusable.js",
    "Ext.util.FocusableContainer": "src/util/FocusableContainer.js",
    "Ext.util.Format.format": "packages/sencha-core/src/Template.js",
    "Ext.util.KeyMap": "src/util/KeyMap.js",
    "Ext.util.KeyNav": "src/util/KeyNav.js",
    "Ext.util.Memento": "src/util/Memento.js",
    "Ext.util.ProtoElement": "src/util/ProtoElement.js",
    "Ext.util.Queue": "src/util/Queue.js",
    "Ext.util.Renderable": "src/util/Renderable.js",
    "Ext.util.StoreHolder": "src/util/StoreHolder.js"
  },
  "loadOrder": [
    {
      "path": "packages/sencha-core/src/class/Mixin.js",
      "requires": [],
      "uses": [],
      "idx": 0
    },
    {
      "path": "packages/sencha-core/src/util/DelayedTask.js",
      "requires": [],
      "uses": [
        77
      ],
      "idx": 1
    },
    {
      "path": "packages/sencha-core/src/util/Event.js",
      "requires": [
        1
      ],
      "uses": [],
      "idx": 2
    },
    {
      "path": "packages/sencha-core/src/mixin/Identifiable.js",
      "requires": [],
      "uses": [],
      "idx": 3
    },
    {
      "path": "packages/sencha-core/src/mixin/Observable.js",
      "requires": [
        0,
        2,
        3
      ],
      "uses": [
        50
      ],
      "idx": 4
    },
    {
      "path": "packages/sencha-core/src/util/HashMap.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 5
    },
    {
      "path": "packages/sencha-core/src/AbstractManager.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 6
    },
    {
      "path": "packages/sencha-core/src/data/flash/BinaryXhr.js",
      "requires": [],
      "uses": [
        77
      ],
      "idx": 7
    },
    {
      "path": "packages/sencha-core/src/data/Connection.js",
      "requires": [
        4,
        7
      ],
      "uses": [
        48,
        77
      ],
      "idx": 8
    },
    {
      "path": "packages/sencha-core/src/Ajax.js",
      "requires": [
        8
      ],
      "uses": [],
      "idx": 9
    },
    {
      "path": "packages/sencha-core/src/AnimationQueue.js",
      "requires": [],
      "uses": [],
      "idx": 10
    },
    {
      "path": "packages/sencha-core/src/ComponentManager.js",
      "requires": [],
      "uses": [
        27,
        48
      ],
      "idx": 11
    },
    {
      "path": "packages/sencha-core/src/util/Operators.js",
      "requires": [],
      "uses": [],
      "idx": 12
    },
    {
      "path": "packages/sencha-core/src/util/LruCache.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 13
    },
    {
      "path": "packages/sencha-core/src/ComponentQuery.js",
      "requires": [
        11,
        12,
        13
      ],
      "uses": [
        81
      ],
      "idx": 14
    },
    {
      "path": "packages/sencha-core/src/Evented.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 15
    },
    {
      "path": "packages/sencha-core/src/util/Positionable.js",
      "requires": [
        17
      ],
      "uses": [
        25,
        48
      ],
      "idx": 16
    },
    {
      "path": "overrides/Positionable.js",
      "requires": [],
      "uses": [],
      "idx": 17
    },
    {
      "path": "packages/sencha-core/src/dom/UnderlayPool.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 18
    },
    {
      "path": "packages/sencha-core/src/dom/Underlay.js",
      "requires": [
        18
      ],
      "uses": [],
      "idx": 19
    },
    {
      "path": "packages/sencha-core/src/dom/Shadow.js",
      "requires": [
        19
      ],
      "uses": [],
      "idx": 20
    },
    {
      "path": "packages/sencha-core/src/dom/Shim.js",
      "requires": [
        19
      ],
      "uses": [],
      "idx": 21
    },
    {
      "path": "packages/sencha-core/src/dom/ElementEvent.js",
      "requires": [
        2
      ],
      "uses": [
        30
      ],
      "idx": 22
    },
    {
      "path": "packages/sencha-core/src/event/publisher/Publisher.js",
      "requires": [],
      "uses": [],
      "idx": 23
    },
    {
      "path": "packages/sencha-core/src/util/Offset.js",
      "requires": [],
      "uses": [],
      "idx": 24
    },
    {
      "path": "packages/sencha-core/src/util/Region.js",
      "requires": [
        24
      ],
      "uses": [],
      "idx": 25
    },
    {
      "path": "packages/sencha-core/src/util/Point.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 26
    },
    {
      "path": "packages/sencha-core/src/event/Event.js",
      "requires": [
        26,
        28
      ],
      "uses": [],
      "idx": 27
    },
    {
      "path": "overrides/event/Event.js",
      "requires": [],
      "uses": [
        77
      ],
      "idx": 28
    },
    {
      "path": "src/rtl/event/Event.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 29
    },
    {
      "path": "packages/sencha-core/src/event/publisher/Dom.js",
      "requires": [
        23,
        27,
        31
      ],
      "uses": [
        77
      ],
      "idx": 30
    },
    {
      "path": "overrides/event/publisher/Dom.js",
      "requires": [],
      "uses": [],
      "idx": 31
    },
    {
      "path": "packages/sencha-core/src/event/publisher/Gesture.js",
      "requires": [
        10,
        26,
        30,
        33
      ],
      "uses": [
        27,
        48,
        267,
        268,
        269,
        270,
        271,
        272,
        273,
        274,
        275,
        276,
        277,
        278
      ],
      "idx": 32
    },
    {
      "path": "overrides/event/publisher/Gesture.js",
      "requires": [],
      "uses": [
        27
      ],
      "idx": 33
    },
    {
      "path": "packages/sencha-core/src/event/publisher/Focus.js",
      "requires": [
        30
      ],
      "uses": [
        27,
        48,
        77
      ],
      "idx": 34
    },
    {
      "path": "packages/sencha-core/src/mixin/Templatable.js",
      "requires": [
        0
      ],
      "uses": [
        48
      ],
      "idx": 35
    },
    {
      "path": "packages/sencha-core/src/TaskQueue.js",
      "requires": [
        10
      ],
      "uses": [],
      "idx": 36
    },
    {
      "path": "packages/sencha-core/src/util/sizemonitor/Abstract.js",
      "requires": [
        35,
        36
      ],
      "uses": [],
      "idx": 37
    },
    {
      "path": "packages/sencha-core/src/util/sizemonitor/Default.js",
      "requires": [
        37
      ],
      "uses": [],
      "idx": 38
    },
    {
      "path": "packages/sencha-core/src/util/sizemonitor/Scroll.js",
      "requires": [
        37
      ],
      "uses": [
        36
      ],
      "idx": 39
    },
    {
      "path": "packages/sencha-core/src/util/sizemonitor/OverflowChange.js",
      "requires": [
        37
      ],
      "uses": [
        36
      ],
      "idx": 40
    },
    {
      "path": "packages/sencha-core/src/util/SizeMonitor.js",
      "requires": [
        38,
        39,
        40
      ],
      "uses": [],
      "idx": 41
    },
    {
      "path": "packages/sencha-core/src/event/publisher/ElementSize.js",
      "requires": [
        23,
        41
      ],
      "uses": [
        36
      ],
      "idx": 42
    },
    {
      "path": "packages/sencha-core/src/util/paintmonitor/Abstract.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 43
    },
    {
      "path": "packages/sencha-core/src/util/paintmonitor/CssAnimation.js",
      "requires": [
        43
      ],
      "uses": [],
      "idx": 44
    },
    {
      "path": "packages/sencha-core/src/util/paintmonitor/OverflowChange.js",
      "requires": [
        43
      ],
      "uses": [],
      "idx": 45
    },
    {
      "path": "packages/sencha-core/src/util/PaintMonitor.js",
      "requires": [
        44,
        45
      ],
      "uses": [],
      "idx": 46
    },
    {
      "path": "packages/sencha-core/src/event/publisher/ElementPaint.js",
      "requires": [
        23,
        36,
        46
      ],
      "uses": [],
      "idx": 47
    },
    {
      "path": "packages/sencha-core/src/dom/Element.js",
      "requires": [
        4,
        16,
        20,
        21,
        22,
        30,
        32,
        34,
        42,
        47,
        75
      ],
      "uses": [
        23,
        25,
        73,
        74,
        77,
        81,
        92,
        238,
        288,
        290
      ],
      "idx": 48
    },
    {
      "path": "packages/sencha-core/src/util/Filter.js",
      "requires": [],
      "uses": [],
      "idx": 49
    },
    {
      "path": "packages/sencha-core/src/util/Observable.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 50
    },
    {
      "path": "packages/sencha-core/src/util/AbstractMixedCollection.js",
      "requires": [
        49,
        50
      ],
      "uses": [],
      "idx": 51
    },
    {
      "path": "packages/sencha-core/src/util/Sorter.js",
      "requires": [],
      "uses": [],
      "idx": 52
    },
    {
      "path": "packages/sencha-core/src/util/Sortable.js",
      "requires": [
        52
      ],
      "uses": [
        54
      ],
      "idx": 53
    },
    {
      "path": "packages/sencha-core/src/util/MixedCollection.js",
      "requires": [
        51,
        53
      ],
      "uses": [],
      "idx": 54
    },
    {
      "path": "packages/sencha-core/src/util/TaskRunner.js",
      "requires": [],
      "uses": [
        77
      ],
      "idx": 55
    },
    {
      "path": "src/fx/target/Target.js",
      "requires": [],
      "uses": [],
      "idx": 56
    },
    {
      "path": "src/fx/target/Element.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 57
    },
    {
      "path": "src/fx/target/ElementCSS.js",
      "requires": [
        57
      ],
      "uses": [],
      "idx": 58
    },
    {
      "path": "src/fx/target/CompositeElement.js",
      "requires": [
        57
      ],
      "uses": [],
      "idx": 59
    },
    {
      "path": "src/fx/target/CompositeElementCSS.js",
      "requires": [
        58,
        59
      ],
      "uses": [],
      "idx": 60
    },
    {
      "path": "src/fx/target/Sprite.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 61
    },
    {
      "path": "src/fx/target/CompositeSprite.js",
      "requires": [
        61
      ],
      "uses": [],
      "idx": 62
    },
    {
      "path": "src/fx/target/Component.js",
      "requires": [
        56
      ],
      "uses": [
        77
      ],
      "idx": 63
    },
    {
      "path": "src/fx/Queue.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 64
    },
    {
      "path": "src/fx/Manager.js",
      "requires": [
        54,
        55,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64
      ],
      "uses": [],
      "idx": 65
    },
    {
      "path": "src/fx/Animator.js",
      "requires": [
        50,
        65
      ],
      "uses": [
        71
      ],
      "idx": 66
    },
    {
      "path": "src/fx/CubicBezier.js",
      "requires": [],
      "uses": [],
      "idx": 67
    },
    {
      "path": "src/fx/Easing.js",
      "requires": [
        67
      ],
      "uses": [],
      "idx": 68
    },
    {
      "path": "src/fx/DrawPath.js",
      "requires": [],
      "uses": [],
      "idx": 69
    },
    {
      "path": "src/fx/PropertyHandler.js",
      "requires": [
        69
      ],
      "uses": [],
      "idx": 70
    },
    {
      "path": "src/fx/Anim.js",
      "requires": [
        50,
        65,
        66,
        67,
        68,
        70
      ],
      "uses": [],
      "idx": 71
    },
    {
      "path": "src/util/Animate.js",
      "requires": [
        65,
        71
      ],
      "uses": [],
      "idx": 72
    },
    {
      "path": "packages/sencha-core/src/dom/Fly.js",
      "requires": [
        48
      ],
      "uses": [],
      "idx": 73
    },
    {
      "path": "packages/sencha-core/src/dom/CompositeElementLite.js",
      "requires": [
        73
      ],
      "uses": [
        48
      ],
      "idx": 74
    },
    {
      "path": "overrides/dom/Element.js",
      "requires": [
        48,
        72,
        74
      ],
      "uses": [
        65,
        66,
        71,
        73,
        81,
        238,
        267,
        329,
        367,
        373,
        375,
        420,
        492
      ],
      "idx": 75
    },
    {
      "path": "src/rtl/dom/Element.js",
      "requires": [
        74
      ],
      "uses": [
        48
      ],
      "idx": 76
    },
    {
      "path": "packages/sencha-core/src/GlobalEvents.js",
      "requires": [
        4,
        48,
        78
      ],
      "uses": [],
      "idx": 77
    },
    {
      "path": "overrides/GlobalEvents.js",
      "requires": [],
      "uses": [],
      "idx": 78
    },
    {
      "path": "packages/sencha-core/src/JSON.js",
      "requires": [],
      "uses": [],
      "idx": 79
    },
    {
      "path": "packages/sencha-core/src/util/Format.js",
      "requires": [],
      "uses": [
        81,
        238
      ],
      "idx": 80
    },
    {
      "path": "packages/sencha-core/src/Template.js",
      "requires": [
        80
      ],
      "uses": [
        238
      ],
      "idx": 81
    },
    {
      "path": "packages/sencha-core/src/mixin/Inheritable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 82
    },
    {
      "path": "packages/sencha-core/src/mixin/Bindable.js",
      "requires": [],
      "uses": [
        93
      ],
      "idx": 83
    },
    {
      "path": "packages/sencha-core/src/Widget.js",
      "requires": [
        15,
        48,
        82,
        83,
        85
      ],
      "uses": [
        11,
        14
      ],
      "idx": 84
    },
    {
      "path": "overrides/Widget.js",
      "requires": [],
      "uses": [
        48,
        123,
        345
      ],
      "idx": 85
    },
    {
      "path": "packages/sencha-core/src/util/XTemplateParser.js",
      "requires": [],
      "uses": [],
      "idx": 86
    },
    {
      "path": "packages/sencha-core/src/util/XTemplateCompiler.js",
      "requires": [
        86
      ],
      "uses": [],
      "idx": 87
    },
    {
      "path": "packages/sencha-core/src/XTemplate.js",
      "requires": [
        81,
        87
      ],
      "uses": [],
      "idx": 88
    },
    {
      "path": "packages/sencha-core/src/app/EventDomain.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 89
    },
    {
      "path": "packages/sencha-core/src/app/domain/Component.js",
      "requires": [
        84,
        89,
        126
      ],
      "uses": [],
      "idx": 90
    },
    {
      "path": "src/util/ProtoElement.js",
      "requires": [],
      "uses": [
        48,
        238
      ],
      "idx": 91
    },
    {
      "path": "packages/sencha-core/src/dom/CompositeElement.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 92
    },
    {
      "path": "packages/sencha-core/src/mixin/Factoryable.js",
      "requires": [],
      "uses": [],
      "idx": 93
    },
    {
      "path": "packages/sencha-core/src/scroll/Scroller.js",
      "requires": [
        15,
        93
      ],
      "uses": [
        77,
        111,
        113
      ],
      "idx": 94
    },
    {
      "path": "src/rtl/scroll/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 95
    },
    {
      "path": "packages/sencha-core/src/fx/easing/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 96
    },
    {
      "path": "packages/sencha-core/src/fx/easing/Momentum.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 97
    },
    {
      "path": "packages/sencha-core/src/fx/easing/Bounce.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 98
    },
    {
      "path": "packages/sencha-core/src/fx/easing/BoundMomentum.js",
      "requires": [
        96,
        97,
        98
      ],
      "uses": [],
      "idx": 99
    },
    {
      "path": "packages/sencha-core/src/fx/easing/Linear.js",
      "requires": [
        96
      ],
      "uses": [],
      "idx": 100
    },
    {
      "path": "packages/sencha-core/src/fx/easing/EaseOut.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 101
    },
    {
      "path": "packages/sencha-core/src/util/translatable/Abstract.js",
      "requires": [
        15,
        100
      ],
      "uses": [
        10
      ],
      "idx": 102
    },
    {
      "path": "packages/sencha-core/src/util/translatable/Dom.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 103
    },
    {
      "path": "packages/sencha-core/src/util/translatable/CssTransform.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 104
    },
    {
      "path": "packages/sencha-core/src/util/translatable/ScrollPosition.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 105
    },
    {
      "path": "packages/sencha-core/src/util/translatable/ScrollParent.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 106
    },
    {
      "path": "packages/sencha-core/src/util/translatable/CssPosition.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 107
    },
    {
      "path": "packages/sencha-core/src/util/Translatable.js",
      "requires": [
        104,
        105,
        106,
        107
      ],
      "uses": [],
      "idx": 108
    },
    {
      "path": "packages/sencha-core/src/scroll/Indicator.js",
      "requires": [
        84
      ],
      "uses": [],
      "idx": 109
    },
    {
      "path": "src/rtl/scroll/Indicator.js",
      "requires": [],
      "uses": [],
      "idx": 110
    },
    {
      "path": "packages/sencha-core/src/scroll/TouchScroller.js",
      "requires": [
        77,
        94,
        99,
        101,
        108,
        109
      ],
      "uses": [],
      "idx": 111
    },
    {
      "path": "src/rtl/scroll/TouchScroller.js",
      "requires": [],
      "uses": [],
      "idx": 112
    },
    {
      "path": "packages/sencha-core/src/scroll/DomScroller.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 113
    },
    {
      "path": "src/rtl/scroll/DomScroller.js",
      "requires": [],
      "uses": [],
      "idx": 114
    },
    {
      "path": "src/util/Floating.js",
      "requires": [],
      "uses": [
        11,
        77,
        335
      ],
      "idx": 115
    },
    {
      "path": "src/util/ElementContainer.js",
      "requires": [],
      "uses": [],
      "idx": 116
    },
    {
      "path": "src/util/Renderable.js",
      "requires": [
        48
      ],
      "uses": [
        88,
        123,
        238
      ],
      "idx": 117
    },
    {
      "path": "src/rtl/util/Renderable.js",
      "requires": [],
      "uses": [],
      "idx": 118
    },
    {
      "path": "src/state/Provider.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 119
    },
    {
      "path": "src/state/Manager.js",
      "requires": [
        119
      ],
      "uses": [],
      "idx": 120
    },
    {
      "path": "src/state/Stateful.js",
      "requires": [
        120
      ],
      "uses": [
        55
      ],
      "idx": 121
    },
    {
      "path": "src/util/Focusable.js",
      "requires": [
        1
      ],
      "uses": [
        14,
        48,
        123
      ],
      "idx": 122
    },
    {
      "path": "src/Component.js",
      "requires": [
        11,
        14,
        16,
        50,
        72,
        77,
        82,
        83,
        91,
        92,
        94,
        111,
        113,
        115,
        116,
        117,
        121,
        122
      ],
      "uses": [
        1,
        17,
        28,
        31,
        33,
        48,
        65,
        75,
        78,
        85,
        88,
        126,
        190,
        203,
        238,
        239,
        319,
        330,
        331,
        332,
        335,
        343,
        345,
        459,
        606,
        618,
        624
      ],
      "idx": 123
    },
    {
      "path": "src/layout/container/border/Region.js",
      "requires": [],
      "uses": [],
      "idx": 124
    },
    {
      "path": "src/rtl/Component.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 125
    },
    {
      "path": "overrides/app/domain/Component.js",
      "requires": [
        123
      ],
      "uses": [],
      "idx": 126
    },
    {
      "path": "packages/sencha-core/src/app/EventBus.js",
      "requires": [
        90
      ],
      "uses": [
        89
      ],
      "idx": 127
    },
    {
      "path": "packages/sencha-core/src/app/domain/Global.js",
      "requires": [
        77,
        89
      ],
      "uses": [],
      "idx": 128
    },
    {
      "path": "packages/sencha-core/src/app/BaseController.js",
      "requires": [
        4,
        127,
        128
      ],
      "uses": [
        185,
        186,
        217
      ],
      "idx": 129
    },
    {
      "path": "packages/sencha-core/src/app/Util.js",
      "requires": [],
      "uses": [],
      "idx": 130
    },
    {
      "path": "packages/sencha-core/src/util/CollectionKey.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 131
    },
    {
      "path": "packages/sencha-core/src/util/Grouper.js",
      "requires": [
        52
      ],
      "uses": [],
      "idx": 132
    },
    {
      "path": "packages/sencha-core/src/util/Collection.js",
      "requires": [
        4,
        49,
        52,
        131,
        132
      ],
      "uses": [
        175,
        176,
        177
      ],
      "idx": 133
    },
    {
      "path": "packages/sencha-core/src/util/ObjectTemplate.js",
      "requires": [
        88
      ],
      "uses": [],
      "idx": 134
    },
    {
      "path": "packages/sencha-core/src/data/schema/Role.js",
      "requires": [],
      "uses": [
        93
      ],
      "idx": 135
    },
    {
      "path": "packages/sencha-core/src/data/schema/Association.js",
      "requires": [
        135
      ],
      "uses": [],
      "idx": 136
    },
    {
      "path": "packages/sencha-core/src/data/schema/OneToOne.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 137
    },
    {
      "path": "packages/sencha-core/src/data/schema/ManyToOne.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 138
    },
    {
      "path": "packages/sencha-core/src/data/schema/ManyToMany.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 139
    },
    {
      "path": "packages/sencha-core/src/util/Inflector.js",
      "requires": [],
      "uses": [],
      "idx": 140
    },
    {
      "path": "packages/sencha-core/src/data/schema/Namer.js",
      "requires": [
        93,
        140
      ],
      "uses": [],
      "idx": 141
    },
    {
      "path": "packages/sencha-core/src/data/schema/Schema.js",
      "requires": [
        93,
        134,
        137,
        138,
        139,
        141
      ],
      "uses": [],
      "idx": 142
    },
    {
      "path": "packages/sencha-core/src/data/AbstractStore.js",
      "requires": [
        4,
        49,
        93,
        133,
        142
      ],
      "uses": [
        181
      ],
      "idx": 143
    },
    {
      "path": "packages/sencha-core/src/data/Error.js",
      "requires": [],
      "uses": [],
      "idx": 144
    },
    {
      "path": "packages/sencha-core/src/data/ErrorCollection.js",
      "requires": [
        54,
        144
      ],
      "uses": [
        153
      ],
      "idx": 145
    },
    {
      "path": "packages/sencha-core/src/data/operation/Operation.js",
      "requires": [],
      "uses": [],
      "idx": 146
    },
    {
      "path": "packages/sencha-core/src/data/operation/Create.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 147
    },
    {
      "path": "packages/sencha-core/src/data/operation/Destroy.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 148
    },
    {
      "path": "packages/sencha-core/src/data/operation/Read.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 149
    },
    {
      "path": "packages/sencha-core/src/data/operation/Update.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 150
    },
    {
      "path": "packages/sencha-core/src/data/SortTypes.js",
      "requires": [],
      "uses": [],
      "idx": 151
    },
    {
      "path": "packages/sencha-core/src/data/validator/Validator.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 152
    },
    {
      "path": "packages/sencha-core/src/data/field/Field.js",
      "requires": [
        93,
        151,
        152
      ],
      "uses": [],
      "idx": 153
    },
    {
      "path": "packages/sencha-core/src/data/field/Boolean.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 154
    },
    {
      "path": "packages/sencha-core/src/data/field/Date.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 155
    },
    {
      "path": "packages/sencha-core/src/data/field/Integer.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 156
    },
    {
      "path": "packages/sencha-core/src/data/field/Number.js",
      "requires": [
        156
      ],
      "uses": [],
      "idx": 157
    },
    {
      "path": "packages/sencha-core/src/data/field/String.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 158
    },
    {
      "path": "packages/sencha-core/src/data/identifier/Generator.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 159
    },
    {
      "path": "packages/sencha-core/src/data/identifier/Sequential.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 160
    },
    {
      "path": "packages/sencha-core/src/data/Model.js",
      "requires": [
        142,
        145,
        146,
        147,
        148,
        149,
        150,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        160
      ],
      "uses": [
        93,
        163,
        237
      ],
      "idx": 161
    },
    {
      "path": "packages/sencha-core/src/data/ResultSet.js",
      "requires": [],
      "uses": [],
      "idx": 162
    },
    {
      "path": "packages/sencha-core/src/data/reader/Reader.js",
      "requires": [
        4,
        13,
        88,
        93,
        162
      ],
      "uses": [
        142
      ],
      "idx": 163
    },
    {
      "path": "packages/sencha-core/src/data/writer/Writer.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 164
    },
    {
      "path": "packages/sencha-core/src/data/proxy/Proxy.js",
      "requires": [
        4,
        93,
        142,
        163,
        164
      ],
      "uses": [
        146,
        147,
        148,
        149,
        150,
        161,
        196
      ],
      "idx": 165
    },
    {
      "path": "packages/sencha-core/src/data/proxy/Client.js",
      "requires": [
        165
      ],
      "uses": [],
      "idx": 166
    },
    {
      "path": "packages/sencha-core/src/data/proxy/Memory.js",
      "requires": [
        166
      ],
      "uses": [
        49,
        53
      ],
      "idx": 167
    },
    {
      "path": "packages/sencha-core/src/data/ProxyStore.js",
      "requires": [
        143,
        146,
        147,
        148,
        149,
        150,
        161,
        165,
        167
      ],
      "uses": [
        1,
        142
      ],
      "idx": 168
    },
    {
      "path": "packages/sencha-core/src/data/LocalStore.js",
      "requires": [
        0
      ],
      "uses": [
        133
      ],
      "idx": 169
    },
    {
      "path": "packages/sencha-core/src/data/proxy/Server.js",
      "requires": [
        165
      ],
      "uses": [
        81,
        232
      ],
      "idx": 170
    },
    {
      "path": "packages/sencha-core/src/data/proxy/Ajax.js",
      "requires": [
        9,
        170
      ],
      "uses": [],
      "idx": 171
    },
    {
      "path": "packages/sencha-core/src/data/reader/Json.js",
      "requires": [
        79,
        163
      ],
      "uses": [],
      "idx": 172
    },
    {
      "path": "packages/sencha-core/src/data/writer/Json.js",
      "requires": [
        164
      ],
      "uses": [],
      "idx": 173
    },
    {
      "path": "packages/sencha-core/src/util/Group.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 174
    },
    {
      "path": "packages/sencha-core/src/util/SorterCollection.js",
      "requires": [
        52,
        133
      ],
      "uses": [],
      "idx": 175
    },
    {
      "path": "packages/sencha-core/src/util/FilterCollection.js",
      "requires": [
        49,
        133
      ],
      "uses": [],
      "idx": 176
    },
    {
      "path": "packages/sencha-core/src/util/GroupCollection.js",
      "requires": [
        133,
        174,
        175,
        176
      ],
      "uses": [],
      "idx": 177
    },
    {
      "path": "packages/sencha-core/src/data/Store.js",
      "requires": [
        1,
        161,
        168,
        169,
        171,
        172,
        173,
        177
      ],
      "uses": [
        132,
        181,
        222
      ],
      "idx": 178
    },
    {
      "path": "packages/sencha-core/src/data/reader/Array.js",
      "requires": [
        172
      ],
      "uses": [],
      "idx": 179
    },
    {
      "path": "packages/sencha-core/src/data/ArrayStore.js",
      "requires": [
        167,
        178,
        179
      ],
      "uses": [],
      "idx": 180
    },
    {
      "path": "packages/sencha-core/src/data/StoreManager.js",
      "requires": [
        54,
        180
      ],
      "uses": [
        93,
        167,
        173,
        178,
        179
      ],
      "idx": 181
    },
    {
      "path": "packages/sencha-core/src/app/domain/Store.js",
      "requires": [
        89,
        143
      ],
      "uses": [],
      "idx": 182
    },
    {
      "path": "packages/sencha-core/src/app/route/Queue.js",
      "requires": [],
      "uses": [
        54
      ],
      "idx": 183
    },
    {
      "path": "packages/sencha-core/src/app/route/Route.js",
      "requires": [],
      "uses": [
        81
      ],
      "idx": 184
    },
    {
      "path": "packages/sencha-core/src/util/History.js",
      "requires": [
        50
      ],
      "uses": [
        326
      ],
      "idx": 185
    },
    {
      "path": "packages/sencha-core/src/app/route/Router.js",
      "requires": [
        183,
        184,
        185
      ],
      "uses": [],
      "idx": 186
    },
    {
      "path": "packages/sencha-core/src/app/Controller.js",
      "requires": [
        11,
        90,
        129,
        130,
        181,
        182,
        186
      ],
      "uses": [
        14,
        142
      ],
      "idx": 187
    },
    {
      "path": "packages/sencha-core/src/app/Application.js",
      "requires": [
        54,
        185,
        187,
        189,
        190
      ],
      "uses": [
        186
      ],
      "idx": 188
    },
    {
      "path": "packages/sencha-core/overrides/app/Application.js",
      "requires": [],
      "uses": [
        188
      ],
      "idx": 189
    },
    {
      "path": "overrides/app/Application.js",
      "requires": [],
      "uses": [
        187,
        464
      ],
      "idx": 190
    },
    {
      "path": "packages/sencha-core/src/app/Profile.js",
      "requires": [
        4
      ],
      "uses": [
        187
      ],
      "idx": 191
    },
    {
      "path": "packages/sencha-core/src/app/domain/View.js",
      "requires": [
        89
      ],
      "uses": [],
      "idx": 192
    },
    {
      "path": "packages/sencha-core/src/app/ViewController.js",
      "requires": [
        93,
        129,
        192
      ],
      "uses": [],
      "idx": 193
    },
    {
      "path": "packages/sencha-core/src/util/Bag.js",
      "requires": [],
      "uses": [],
      "idx": 194
    },
    {
      "path": "packages/sencha-core/src/util/Scheduler.js",
      "requires": [
        4,
        194
      ],
      "uses": [
        77
      ],
      "idx": 195
    },
    {
      "path": "packages/sencha-core/src/data/Batch.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 196
    },
    {
      "path": "packages/sencha-core/src/data/matrix/Slice.js",
      "requires": [],
      "uses": [],
      "idx": 197
    },
    {
      "path": "packages/sencha-core/src/data/matrix/Side.js",
      "requires": [
        197
      ],
      "uses": [],
      "idx": 198
    },
    {
      "path": "packages/sencha-core/src/data/matrix/Matrix.js",
      "requires": [
        198
      ],
      "uses": [],
      "idx": 199
    },
    {
      "path": "packages/sencha-core/src/data/session/ChangesVisitor.js",
      "requires": [],
      "uses": [],
      "idx": 200
    },
    {
      "path": "packages/sencha-core/src/data/session/ChildChangesVisitor.js",
      "requires": [
        200
      ],
      "uses": [],
      "idx": 201
    },
    {
      "path": "packages/sencha-core/src/data/session/BatchVisitor.js",
      "requires": [],
      "uses": [
        196
      ],
      "idx": 202
    },
    {
      "path": "packages/sencha-core/src/data/Session.js",
      "requires": [
        142,
        196,
        199,
        200,
        201,
        202
      ],
      "uses": [],
      "idx": 203
    },
    {
      "path": "packages/sencha-core/src/util/Schedulable.js",
      "requires": [],
      "uses": [],
      "idx": 204
    },
    {
      "path": "packages/sencha-core/src/app/bind/BaseBinding.js",
      "requires": [
        204
      ],
      "uses": [],
      "idx": 205
    },
    {
      "path": "packages/sencha-core/src/app/bind/Binding.js",
      "requires": [
        205
      ],
      "uses": [],
      "idx": 206
    },
    {
      "path": "packages/sencha-core/src/app/bind/AbstractStub.js",
      "requires": [
        204,
        206
      ],
      "uses": [],
      "idx": 207
    },
    {
      "path": "packages/sencha-core/src/app/bind/Stub.js",
      "requires": [
        206,
        207
      ],
      "uses": [
        212
      ],
      "idx": 208
    },
    {
      "path": "packages/sencha-core/src/app/bind/LinkStub.js",
      "requires": [
        208
      ],
      "uses": [],
      "idx": 209
    },
    {
      "path": "packages/sencha-core/src/app/bind/RootStub.js",
      "requires": [
        207,
        208,
        209
      ],
      "uses": [],
      "idx": 210
    },
    {
      "path": "packages/sencha-core/src/app/bind/Multi.js",
      "requires": [
        205
      ],
      "uses": [],
      "idx": 211
    },
    {
      "path": "packages/sencha-core/src/app/bind/Formula.js",
      "requires": [
        13,
        204
      ],
      "uses": [],
      "idx": 212
    },
    {
      "path": "packages/sencha-core/src/app/bind/Template.js",
      "requires": [
        80
      ],
      "uses": [],
      "idx": 213
    },
    {
      "path": "packages/sencha-core/src/app/bind/TemplateBinding.js",
      "requires": [
        205,
        211,
        213
      ],
      "uses": [],
      "idx": 214
    },
    {
      "path": "packages/sencha-core/src/data/ChainedStore.js",
      "requires": [
        143,
        169
      ],
      "uses": [
        81,
        181
      ],
      "idx": 215
    },
    {
      "path": "packages/sencha-core/src/app/ViewModel.js",
      "requires": [
        3,
        93,
        195,
        203,
        209,
        210,
        211,
        212,
        214,
        215
      ],
      "uses": [
        1,
        142
      ],
      "idx": 216
    },
    {
      "path": "packages/sencha-core/src/app/domain/Controller.js",
      "requires": [
        89,
        187
      ],
      "uses": [
        129
      ],
      "idx": 217
    },
    {
      "path": "packages/sencha-core/src/direct/Manager.js",
      "requires": [
        4,
        54
      ],
      "uses": [
        81
      ],
      "idx": 218
    },
    {
      "path": "packages/sencha-core/src/direct/Provider.js",
      "requires": [
        50,
        218
      ],
      "uses": [],
      "idx": 219
    },
    {
      "path": "packages/sencha-core/src/app/domain/Direct.js",
      "requires": [
        89,
        219
      ],
      "uses": [],
      "idx": 220
    },
    {
      "path": "packages/sencha-core/src/data/PageMap.js",
      "requires": [
        13
      ],
      "uses": [],
      "idx": 221
    },
    {
      "path": "packages/sencha-core/src/data/BufferedStore.js",
      "requires": [
        49,
        52,
        132,
        168,
        221
      ],
      "uses": [
        175,
        176,
        177
      ],
      "idx": 222
    },
    {
      "path": "packages/sencha-core/src/data/proxy/Direct.js",
      "requires": [
        170,
        218
      ],
      "uses": [],
      "idx": 223
    },
    {
      "path": "packages/sencha-core/src/data/DirectStore.js",
      "requires": [
        178,
        223
      ],
      "uses": [],
      "idx": 224
    },
    {
      "path": "packages/sencha-core/src/data/JsonP.js",
      "requires": [],
      "uses": [
        77
      ],
      "idx": 225
    },
    {
      "path": "packages/sencha-core/src/data/proxy/JsonP.js",
      "requires": [
        170,
        225
      ],
      "uses": [],
      "idx": 226
    },
    {
      "path": "packages/sencha-core/src/data/JsonPStore.js",
      "requires": [
        172,
        178,
        226
      ],
      "uses": [],
      "idx": 227
    },
    {
      "path": "packages/sencha-core/src/data/JsonStore.js",
      "requires": [
        171,
        172,
        173,
        178
      ],
      "uses": [],
      "idx": 228
    },
    {
      "path": "packages/sencha-core/src/data/ModelManager.js",
      "requires": [
        142
      ],
      "uses": [
        161
      ],
      "idx": 229
    },
    {
      "path": "packages/sencha-core/src/data/NodeInterface.js",
      "requires": [
        4,
        154,
        156,
        158,
        173
      ],
      "uses": [
        142
      ],
      "idx": 230
    },
    {
      "path": "packages/sencha-core/src/data/NodeStore.js",
      "requires": [
        178,
        230
      ],
      "uses": [
        161
      ],
      "idx": 231
    },
    {
      "path": "packages/sencha-core/src/data/Request.js",
      "requires": [],
      "uses": [],
      "idx": 232
    },
    {
      "path": "packages/sencha-core/src/mixin/Queryable.js",
      "requires": [],
      "uses": [
        14
      ],
      "idx": 233
    },
    {
      "path": "packages/sencha-core/src/data/TreeModel.js",
      "requires": [
        161,
        230,
        233
      ],
      "uses": [],
      "idx": 234
    },
    {
      "path": "packages/sencha-core/src/data/TreeStore.js",
      "requires": [
        52,
        230,
        231,
        234
      ],
      "uses": [],
      "idx": 235
    },
    {
      "path": "packages/sencha-core/src/data/Types.js",
      "requires": [
        151
      ],
      "uses": [],
      "idx": 236
    },
    {
      "path": "packages/sencha-core/src/data/Validation.js",
      "requires": [
        161
      ],
      "uses": [],
      "idx": 237
    },
    {
      "path": "packages/sencha-core/src/dom/Helper.js",
      "requires": [
        239
      ],
      "uses": [
        81
      ],
      "idx": 238
    },
    {
      "path": "overrides/dom/Helper.js",
      "requires": [],
      "uses": [],
      "idx": 239
    },
    {
      "path": "packages/sencha-core/src/dom/Query.js",
      "requires": [
        12,
        238
      ],
      "uses": [
        13
      ],
      "idx": 240
    },
    {
      "path": "packages/sencha-core/src/data/reader/Xml.js",
      "requires": [
        163,
        240
      ],
      "uses": [],
      "idx": 241
    },
    {
      "path": "packages/sencha-core/src/data/writer/Xml.js",
      "requires": [
        164
      ],
      "uses": [],
      "idx": 242
    },
    {
      "path": "packages/sencha-core/src/data/XmlStore.js",
      "requires": [
        171,
        178,
        241,
        242
      ],
      "uses": [],
      "idx": 243
    },
    {
      "path": "packages/sencha-core/src/data/identifier/Negative.js",
      "requires": [
        160
      ],
      "uses": [],
      "idx": 244
    },
    {
      "path": "packages/sencha-core/src/data/identifier/Uuid.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 245
    },
    {
      "path": "packages/sencha-core/src/data/proxy/WebStorage.js",
      "requires": [
        160,
        166
      ],
      "uses": [
        52,
        81,
        162
      ],
      "idx": 246
    },
    {
      "path": "packages/sencha-core/src/data/proxy/LocalStorage.js",
      "requires": [
        246
      ],
      "uses": [],
      "idx": 247
    },
    {
      "path": "packages/sencha-core/src/data/proxy/Rest.js",
      "requires": [
        171
      ],
      "uses": [],
      "idx": 248
    },
    {
      "path": "packages/sencha-core/src/data/proxy/SessionStorage.js",
      "requires": [
        246
      ],
      "uses": [],
      "idx": 249
    },
    {
      "path": "packages/sencha-core/src/data/validator/Bound.js",
      "requires": [
        152
      ],
      "uses": [
        81
      ],
      "idx": 250
    },
    {
      "path": "packages/sencha-core/src/data/validator/Format.js",
      "requires": [
        152
      ],
      "uses": [],
      "idx": 251
    },
    {
      "path": "packages/sencha-core/src/data/validator/Email.js",
      "requires": [
        251
      ],
      "uses": [],
      "idx": 252
    },
    {
      "path": "packages/sencha-core/src/data/validator/List.js",
      "requires": [
        152
      ],
      "uses": [],
      "idx": 253
    },
    {
      "path": "packages/sencha-core/src/data/validator/Exclusion.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 254
    },
    {
      "path": "packages/sencha-core/src/data/validator/Inclusion.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 255
    },
    {
      "path": "packages/sencha-core/src/data/validator/Length.js",
      "requires": [
        250
      ],
      "uses": [],
      "idx": 256
    },
    {
      "path": "packages/sencha-core/src/data/validator/Presence.js",
      "requires": [
        152
      ],
      "uses": [],
      "idx": 257
    },
    {
      "path": "packages/sencha-core/src/data/validator/Range.js",
      "requires": [
        250
      ],
      "uses": [],
      "idx": 258
    },
    {
      "path": "packages/sencha-core/src/direct/Event.js",
      "requires": [],
      "uses": [],
      "idx": 259
    },
    {
      "path": "packages/sencha-core/src/direct/RemotingEvent.js",
      "requires": [
        259
      ],
      "uses": [
        218
      ],
      "idx": 260
    },
    {
      "path": "packages/sencha-core/src/direct/ExceptionEvent.js",
      "requires": [
        260
      ],
      "uses": [],
      "idx": 261
    },
    {
      "path": "packages/sencha-core/src/direct/JsonProvider.js",
      "requires": [
        219
      ],
      "uses": [
        218,
        261
      ],
      "idx": 262
    },
    {
      "path": "packages/sencha-core/src/direct/PollingProvider.js",
      "requires": [
        9,
        55,
        261,
        262
      ],
      "uses": [
        218,
        326
      ],
      "idx": 263
    },
    {
      "path": "packages/sencha-core/src/direct/RemotingMethod.js",
      "requires": [],
      "uses": [],
      "idx": 264
    },
    {
      "path": "packages/sencha-core/src/direct/Transaction.js",
      "requires": [],
      "uses": [],
      "idx": 265
    },
    {
      "path": "packages/sencha-core/src/direct/RemotingProvider.js",
      "requires": [
        1,
        54,
        218,
        262,
        264,
        265
      ],
      "uses": [
        9,
        79,
        261
      ],
      "idx": 266
    },
    {
      "path": "packages/sencha-core/src/dom/GarbageCollector.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 267
    },
    {
      "path": "packages/sencha-core/src/event/gesture/Recognizer.js",
      "requires": [
        3,
        32
      ],
      "uses": [],
      "idx": 268
    },
    {
      "path": "packages/sencha-core/src/event/gesture/SingleTouch.js",
      "requires": [
        268
      ],
      "uses": [],
      "idx": 269
    },
    {
      "path": "packages/sencha-core/src/event/gesture/DoubleTap.js",
      "requires": [
        269
      ],
      "uses": [],
      "idx": 270
    },
    {
      "path": "packages/sencha-core/src/event/gesture/Drag.js",
      "requires": [
        269
      ],
      "uses": [],
      "idx": 271
    },
    {
      "path": "packages/sencha-core/src/event/gesture/Swipe.js",
      "requires": [
        269
      ],
      "uses": [],
      "idx": 272
    },
    {
      "path": "packages/sencha-core/src/event/gesture/EdgeSwipe.js",
      "requires": [
        272
      ],
      "uses": [
        48
      ],
      "idx": 273
    },
    {
      "path": "packages/sencha-core/src/event/gesture/LongPress.js",
      "requires": [
        269
      ],
      "uses": [],
      "idx": 274
    },
    {
      "path": "packages/sencha-core/src/event/gesture/MultiTouch.js",
      "requires": [
        268
      ],
      "uses": [],
      "idx": 275
    },
    {
      "path": "packages/sencha-core/src/event/gesture/Pinch.js",
      "requires": [
        275
      ],
      "uses": [],
      "idx": 276
    },
    {
      "path": "packages/sencha-core/src/event/gesture/Rotate.js",
      "requires": [
        275
      ],
      "uses": [],
      "idx": 277
    },
    {
      "path": "packages/sencha-core/src/event/gesture/Tap.js",
      "requires": [
        269
      ],
      "uses": [],
      "idx": 278
    },
    {
      "path": "packages/sencha-core/src/fx/State.js",
      "requires": [],
      "uses": [],
      "idx": 279
    },
    {
      "path": "packages/sencha-core/src/fx/animation/Abstract.js",
      "requires": [
        15,
        279
      ],
      "uses": [],
      "idx": 280
    },
    {
      "path": "packages/sencha-core/src/fx/animation/Slide.js",
      "requires": [
        280
      ],
      "uses": [],
      "idx": 281
    },
    {
      "path": "packages/sencha-core/src/fx/animation/SlideOut.js",
      "requires": [
        281
      ],
      "uses": [],
      "idx": 282
    },
    {
      "path": "packages/sencha-core/src/fx/animation/Fade.js",
      "requires": [
        280
      ],
      "uses": [],
      "idx": 283
    },
    {
      "path": "packages/sencha-core/src/fx/animation/FadeOut.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 284
    },
    {
      "path": "packages/sencha-core/src/fx/animation/Flip.js",
      "requires": [
        280
      ],
      "uses": [],
      "idx": 285
    },
    {
      "path": "packages/sencha-core/src/fx/animation/Pop.js",
      "requires": [
        280
      ],
      "uses": [],
      "idx": 286
    },
    {
      "path": "packages/sencha-core/src/fx/animation/PopOut.js",
      "requires": [
        286
      ],
      "uses": [],
      "idx": 287
    },
    {
      "path": "packages/sencha-core/src/fx/Animation.js",
      "requires": [
        281,
        282,
        283,
        284,
        285,
        286,
        287
      ],
      "uses": [
        280
      ],
      "idx": 288
    },
    {
      "path": "packages/sencha-core/src/fx/runner/Css.js",
      "requires": [
        15,
        288
      ],
      "uses": [],
      "idx": 289
    },
    {
      "path": "packages/sencha-core/src/fx/runner/CssTransition.js",
      "requires": [
        10,
        289
      ],
      "uses": [
        288
      ],
      "idx": 290
    },
    {
      "path": "packages/sencha-core/src/fx/Runner.js",
      "requires": [
        290
      ],
      "uses": [],
      "idx": 291
    },
    {
      "path": "packages/sencha-core/src/fx/animation/Cube.js",
      "requires": [
        280
      ],
      "uses": [],
      "idx": 292
    },
    {
      "path": "packages/sencha-core/src/fx/animation/Wipe.js",
      "requires": [
        288
      ],
      "uses": [],
      "idx": 293
    },
    {
      "path": "packages/sencha-core/src/fx/animation/WipeOut.js",
      "requires": [
        293
      ],
      "uses": [],
      "idx": 294
    },
    {
      "path": "packages/sencha-core/src/fx/easing/EaseIn.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 295
    },
    {
      "path": "packages/sencha-core/src/fx/easing/Easing.js",
      "requires": [
        100
      ],
      "uses": [],
      "idx": 296
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Abstract.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 297
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Style.js",
      "requires": [
        288,
        297
      ],
      "uses": [
        290
      ],
      "idx": 298
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Slide.js",
      "requires": [
        298
      ],
      "uses": [],
      "idx": 299
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Cover.js",
      "requires": [
        298
      ],
      "uses": [],
      "idx": 300
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Reveal.js",
      "requires": [
        298
      ],
      "uses": [],
      "idx": 301
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Fade.js",
      "requires": [
        298
      ],
      "uses": [],
      "idx": 302
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Flip.js",
      "requires": [
        298
      ],
      "uses": [],
      "idx": 303
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Pop.js",
      "requires": [
        298
      ],
      "uses": [],
      "idx": 304
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Scroll.js",
      "requires": [
        100,
        297
      ],
      "uses": [
        10
      ],
      "idx": 305
    },
    {
      "path": "packages/sencha-core/src/fx/layout/Card.js",
      "requires": [
        299,
        300,
        301,
        302,
        303,
        304,
        305
      ],
      "uses": [
        297
      ],
      "idx": 306
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/Cube.js",
      "requires": [
        298
      ],
      "uses": [],
      "idx": 307
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/ScrollCover.js",
      "requires": [
        305
      ],
      "uses": [],
      "idx": 308
    },
    {
      "path": "packages/sencha-core/src/fx/layout/card/ScrollReveal.js",
      "requires": [
        305
      ],
      "uses": [],
      "idx": 309
    },
    {
      "path": "packages/sencha-core/src/fx/runner/CssAnimation.js",
      "requires": [
        289
      ],
      "uses": [
        288
      ],
      "idx": 310
    },
    {
      "path": "packages/sencha-core/src/mixin/Hookable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 311
    },
    {
      "path": "packages/sencha-core/src/mixin/Mashup.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 312
    },
    {
      "path": "packages/sencha-core/src/mixin/Responsive.js",
      "requires": [
        0,
        77
      ],
      "uses": [
        48
      ],
      "idx": 313
    },
    {
      "path": "packages/sencha-core/src/mixin/Selectable.js",
      "requires": [
        0
      ],
      "uses": [
        54
      ],
      "idx": 314
    },
    {
      "path": "packages/sencha-core/src/mixin/Traversable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 315
    },
    {
      "path": "packages/sencha-core/src/perf/Accumulator.js",
      "requires": [
        88
      ],
      "uses": [],
      "idx": 316
    },
    {
      "path": "packages/sencha-core/src/perf/Monitor.js",
      "requires": [
        316
      ],
      "uses": [],
      "idx": 317
    },
    {
      "path": "packages/sencha-core/src/plugin/Abstract.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 318
    },
    {
      "path": "overrides/plugin/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 319
    },
    {
      "path": "packages/sencha-core/src/plugin/LazyItems.js",
      "requires": [
        318
      ],
      "uses": [],
      "idx": 320
    },
    {
      "path": "packages/sencha-core/src/util/Base64.js",
      "requires": [],
      "uses": [],
      "idx": 321
    },
    {
      "path": "packages/sencha-core/src/util/DelimitedValue.js",
      "requires": [],
      "uses": [],
      "idx": 322
    },
    {
      "path": "packages/sencha-core/src/util/CSV.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 323
    },
    {
      "path": "packages/sencha-core/src/util/LocalStorage.js",
      "requires": [],
      "uses": [],
      "idx": 324
    },
    {
      "path": "packages/sencha-core/src/util/TSV.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 325
    },
    {
      "path": "packages/sencha-core/src/util/TaskManager.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 326
    },
    {
      "path": "packages/sencha-core/src/util/TextMetrics.js",
      "requires": [
        48
      ],
      "uses": [],
      "idx": 327
    },
    {
      "path": "src/Action.js",
      "requires": [],
      "uses": [],
      "idx": 328
    },
    {
      "path": "src/ElementLoader.js",
      "requires": [
        50
      ],
      "uses": [
        8,
        9
      ],
      "idx": 329
    },
    {
      "path": "src/ComponentLoader.js",
      "requires": [
        329
      ],
      "uses": [],
      "idx": 330
    },
    {
      "path": "src/layout/SizeModel.js",
      "requires": [],
      "uses": [],
      "idx": 331
    },
    {
      "path": "src/layout/Layout.js",
      "requires": [
        88,
        93,
        331
      ],
      "uses": [
        606
      ],
      "idx": 332
    },
    {
      "path": "src/layout/container/Container.js",
      "requires": [
        88,
        116,
        332
      ],
      "uses": [
        238
      ],
      "idx": 333
    },
    {
      "path": "src/layout/container/Auto.js",
      "requires": [
        333
      ],
      "uses": [
        88
      ],
      "idx": 334
    },
    {
      "path": "src/ZIndexManager.js",
      "requires": [
        77,
        175,
        176
      ],
      "uses": [
        48,
        133
      ],
      "idx": 335
    },
    {
      "path": "src/container/Container.js",
      "requires": [
        54,
        123,
        233,
        334,
        335
      ],
      "uses": [
        11,
        14,
        51,
        93
      ],
      "idx": 336
    },
    {
      "path": "src/layout/container/Editor.js",
      "requires": [
        333
      ],
      "uses": [],
      "idx": 337
    },
    {
      "path": "src/Editor.js",
      "requires": [
        336,
        337
      ],
      "uses": [
        1,
        11
      ],
      "idx": 338
    },
    {
      "path": "src/EventManager.js",
      "requires": [],
      "uses": [
        77
      ],
      "idx": 339
    },
    {
      "path": "src/FocusManager.js",
      "requires": [],
      "uses": [],
      "idx": 340
    },
    {
      "path": "src/Img.js",
      "requires": [
        123
      ],
      "uses": [],
      "idx": 341
    },
    {
      "path": "src/util/StoreHolder.js",
      "requires": [
        181
      ],
      "uses": [],
      "idx": 342
    },
    {
      "path": "src/LoadMask.js",
      "requires": [
        123,
        342
      ],
      "uses": [
        77,
        181
      ],
      "idx": 343
    },
    {
      "path": "src/layout/component/Component.js",
      "requires": [
        332
      ],
      "uses": [],
      "idx": 344
    },
    {
      "path": "src/layout/component/Auto.js",
      "requires": [
        344
      ],
      "uses": [],
      "idx": 345
    },
    {
      "path": "src/layout/component/ProgressBar.js",
      "requires": [
        345
      ],
      "uses": [],
      "idx": 346
    },
    {
      "path": "src/ProgressBar.js",
      "requires": [
        81,
        92,
        123,
        326,
        346
      ],
      "uses": [
        71,
        88
      ],
      "idx": 347
    },
    {
      "path": "src/ProgressBarWidget.js",
      "requires": [
        84,
        347
      ],
      "uses": [
        88
      ],
      "idx": 348
    },
    {
      "path": "src/panel/Bar.js",
      "requires": [
        336
      ],
      "uses": [],
      "idx": 349
    },
    {
      "path": "src/rtl/panel/Bar.js",
      "requires": [],
      "uses": [],
      "idx": 350
    },
    {
      "path": "src/panel/Title.js",
      "requires": [
        123
      ],
      "uses": [],
      "idx": 351
    },
    {
      "path": "src/rtl/panel/Title.js",
      "requires": [],
      "uses": [],
      "idx": 352
    },
    {
      "path": "src/panel/Tool.js",
      "requires": [
        123
      ],
      "uses": [
        464
      ],
      "idx": 353
    },
    {
      "path": "src/panel/Header.js",
      "requires": [
        203,
        345,
        349,
        351,
        353
      ],
      "uses": [
        11
      ],
      "idx": 354
    },
    {
      "path": "src/layout/container/boxOverflow/None.js",
      "requires": [
        93
      ],
      "uses": [],
      "idx": 355
    },
    {
      "path": "src/util/ClickRepeater.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 356
    },
    {
      "path": "src/layout/container/boxOverflow/Scroller.js",
      "requires": [
        4,
        48,
        355,
        356
      ],
      "uses": [],
      "idx": 357
    },
    {
      "path": "src/rtl/layout/container/boxOverflow/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 358
    },
    {
      "path": "src/dd/DragDropManager.js",
      "requires": [
        25
      ],
      "uses": [
        420,
        464
      ],
      "idx": 359
    },
    {
      "path": "src/resizer/Splitter.js",
      "requires": [
        88,
        123
      ],
      "uses": [
        482
      ],
      "idx": 360
    },
    {
      "path": "src/layout/container/Box.js",
      "requires": [
        80,
        333,
        355,
        357,
        359,
        360
      ],
      "uses": [
        93,
        203,
        331,
        345
      ],
      "idx": 361
    },
    {
      "path": "src/rtl/layout/container/Box.js",
      "requires": [],
      "uses": [],
      "idx": 362
    },
    {
      "path": "src/layout/container/HBox.js",
      "requires": [
        361
      ],
      "uses": [],
      "idx": 363
    },
    {
      "path": "src/rtl/layout/container/HBox.js",
      "requires": [],
      "uses": [],
      "idx": 364
    },
    {
      "path": "src/layout/container/VBox.js",
      "requires": [
        361
      ],
      "uses": [],
      "idx": 365
    },
    {
      "path": "src/rtl/layout/container/VBox.js",
      "requires": [],
      "uses": [],
      "idx": 366
    },
    {
      "path": "src/util/KeyMap.js",
      "requires": [],
      "uses": [],
      "idx": 367
    },
    {
      "path": "src/util/KeyNav.js",
      "requires": [
        367
      ],
      "uses": [],
      "idx": 368
    },
    {
      "path": "src/util/FocusableContainer.js",
      "requires": [
        0,
        368
      ],
      "uses": [
        123
      ],
      "idx": 369
    },
    {
      "path": "src/rtl/util/FocusableContainer.js",
      "requires": [],
      "uses": [],
      "idx": 370
    },
    {
      "path": "src/toolbar/Toolbar.js",
      "requires": [
        203,
        336,
        345,
        363,
        365,
        369
      ],
      "uses": [
        519,
        537,
        650
      ],
      "idx": 371
    },
    {
      "path": "src/dd/DragDrop.js",
      "requires": [
        359
      ],
      "uses": [
        48
      ],
      "idx": 372
    },
    {
      "path": "src/dd/DD.js",
      "requires": [
        359,
        372
      ],
      "uses": [
        48
      ],
      "idx": 373
    },
    {
      "path": "src/rtl/dd/DD.js",
      "requires": [],
      "uses": [],
      "idx": 374
    },
    {
      "path": "src/dd/DDProxy.js",
      "requires": [
        373
      ],
      "uses": [
        359
      ],
      "idx": 375
    },
    {
      "path": "src/dd/StatusProxy.js",
      "requires": [
        123
      ],
      "uses": [],
      "idx": 376
    },
    {
      "path": "src/dd/DragSource.js",
      "requires": [
        359,
        375,
        376
      ],
      "uses": [
        203,
        345
      ],
      "idx": 377
    },
    {
      "path": "src/panel/Proxy.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 378
    },
    {
      "path": "src/panel/DD.js",
      "requires": [
        377,
        378
      ],
      "uses": [],
      "idx": 379
    },
    {
      "path": "src/layout/component/Dock.js",
      "requires": [
        344
      ],
      "uses": [
        14,
        48,
        331
      ],
      "idx": 380
    },
    {
      "path": "src/rtl/layout/component/Dock.js",
      "requires": [],
      "uses": [
        380
      ],
      "idx": 381
    },
    {
      "path": "src/util/Memento.js",
      "requires": [],
      "uses": [],
      "idx": 382
    },
    {
      "path": "src/container/DockingContainer.js",
      "requires": [
        48,
        54
      ],
      "uses": [
        14,
        51,
        238
      ],
      "idx": 383
    },
    {
      "path": "src/panel/Panel.js",
      "requires": [
        48,
        54,
        71,
        88,
        336,
        354,
        367,
        371,
        379,
        380,
        382,
        383
      ],
      "uses": [
        1,
        91,
        92,
        123,
        203,
        334,
        345,
        353,
        459,
        538
      ],
      "idx": 384
    },
    {
      "path": "src/rtl/panel/Panel.js",
      "requires": [],
      "uses": [],
      "idx": 385
    },
    {
      "path": "src/form/Labelable.js",
      "requires": [
        0,
        75,
        88
      ],
      "uses": [
        48,
        463
      ],
      "idx": 386
    },
    {
      "path": "src/rtl/form/Labelable.js",
      "requires": [],
      "uses": [],
      "idx": 387
    },
    {
      "path": "src/form/field/Field.js",
      "requires": [],
      "uses": [],
      "idx": 388
    },
    {
      "path": "src/form/field/Base.js",
      "requires": [
        1,
        88,
        123,
        386,
        388
      ],
      "uses": [
        238
      ],
      "idx": 389
    },
    {
      "path": "src/form/field/Display.js",
      "requires": [
        80,
        88,
        389
      ],
      "uses": [],
      "idx": 390
    },
    {
      "path": "src/layout/container/Fit.js",
      "requires": [
        333
      ],
      "uses": [],
      "idx": 391
    },
    {
      "path": "src/panel/Table.js",
      "requires": [
        384,
        391
      ],
      "uses": [
        1,
        181,
        238,
        411,
        427,
        433,
        583,
        584,
        625,
        626
      ],
      "idx": 392
    },
    {
      "path": "src/selection/Model.js",
      "requires": [
        4,
        93,
        342
      ],
      "uses": [
        133
      ],
      "idx": 393
    },
    {
      "path": "src/selection/DataViewModel.js",
      "requires": [
        368,
        393
      ],
      "uses": [],
      "idx": 394
    },
    {
      "path": "src/view/NavigationModel.js",
      "requires": [
        50,
        93
      ],
      "uses": [
        368
      ],
      "idx": 395
    },
    {
      "path": "src/rtl/view/NavigationModel.js",
      "requires": [],
      "uses": [],
      "idx": 396
    },
    {
      "path": "src/view/AbstractView.js",
      "requires": [
        74,
        123,
        342,
        343,
        394,
        395
      ],
      "uses": [
        10,
        81,
        88,
        93,
        181,
        238,
        326
      ],
      "idx": 397
    },
    {
      "path": "src/view/View.js",
      "requires": [
        397
      ],
      "uses": [],
      "idx": 398
    },
    {
      "path": "src/grid/CellContext.js",
      "requires": [],
      "uses": [],
      "idx": 399
    },
    {
      "path": "src/view/TableLayout.js",
      "requires": [
        345
      ],
      "uses": [],
      "idx": 400
    },
    {
      "path": "src/grid/locking/RowSynchronizer.js",
      "requires": [],
      "uses": [],
      "idx": 401
    },
    {
      "path": "src/view/NodeCache.js",
      "requires": [
        74
      ],
      "uses": [
        48,
        73
      ],
      "idx": 402
    },
    {
      "path": "src/view/Table.js",
      "requires": [
        1,
        54,
        398,
        399,
        400,
        401,
        402
      ],
      "uses": [
        73,
        88,
        93,
        123,
        161,
        427
      ],
      "idx": 403
    },
    {
      "path": "src/rtl/view/Table.js",
      "requires": [],
      "uses": [],
      "idx": 404
    },
    {
      "path": "src/grid/Panel.js",
      "requires": [
        392,
        403
      ],
      "uses": [],
      "idx": 405
    },
    {
      "path": "src/form/CheckboxManager.js",
      "requires": [
        54
      ],
      "uses": [],
      "idx": 406
    },
    {
      "path": "src/form/field/Checkbox.js",
      "requires": [
        88,
        389,
        406
      ],
      "uses": [],
      "idx": 407
    },
    {
      "path": "src/app/bindinspector/Util.js",
      "requires": [],
      "uses": [
        81
      ],
      "idx": 408
    },
    {
      "path": "src/app/bindinspector/ComponentDetail.js",
      "requires": [
        123,
        203,
        336,
        345,
        363,
        365,
        384,
        390,
        405,
        407,
        408
      ],
      "uses": [
        81,
        371,
        380,
        391,
        448,
        456,
        538,
        650
      ],
      "idx": 409
    },
    {
      "path": "src/tree/View.js",
      "requires": [
        403
      ],
      "uses": [
        48,
        88
      ],
      "idx": 410
    },
    {
      "path": "src/selection/RowModel.js",
      "requires": [
        394,
        399
      ],
      "uses": [],
      "idx": 411
    },
    {
      "path": "src/selection/TreeModel.js",
      "requires": [
        411
      ],
      "uses": [],
      "idx": 412
    },
    {
      "path": "src/grid/ColumnLayout.js",
      "requires": [
        363,
        392
      ],
      "uses": [],
      "idx": 413
    },
    {
      "path": "src/rtl/grid/ColumnLayout.js",
      "requires": [],
      "uses": [],
      "idx": 414
    },
    {
      "path": "src/dd/DragTracker.js",
      "requires": [
        50
      ],
      "uses": [
        25,
        368
      ],
      "idx": 415
    },
    {
      "path": "src/grid/plugin/HeaderResizer.js",
      "requires": [
        25,
        318,
        415
      ],
      "uses": [
        429
      ],
      "idx": 416
    },
    {
      "path": "src/rtl/grid/plugin/HeaderResizer.js",
      "requires": [],
      "uses": [],
      "idx": 417
    },
    {
      "path": "src/dd/DragZone.js",
      "requires": [
        377
      ],
      "uses": [
        421,
        423
      ],
      "idx": 418
    },
    {
      "path": "src/grid/header/DragZone.js",
      "requires": [
        418
      ],
      "uses": [],
      "idx": 419
    },
    {
      "path": "src/dd/DDTarget.js",
      "requires": [
        372
      ],
      "uses": [],
      "idx": 420
    },
    {
      "path": "src/dd/ScrollManager.js",
      "requires": [
        359
      ],
      "uses": [],
      "idx": 421
    },
    {
      "path": "src/dd/DropTarget.js",
      "requires": [
        420,
        421
      ],
      "uses": [],
      "idx": 422
    },
    {
      "path": "src/dd/Registry.js",
      "requires": [],
      "uses": [],
      "idx": 423
    },
    {
      "path": "src/dd/DropZone.js",
      "requires": [
        422,
        423
      ],
      "uses": [
        359
      ],
      "idx": 424
    },
    {
      "path": "src/grid/header/DropZone.js",
      "requires": [
        424
      ],
      "uses": [
        359
      ],
      "idx": 425
    },
    {
      "path": "src/grid/plugin/HeaderReorderer.js",
      "requires": [
        318,
        419,
        425
      ],
      "uses": [],
      "idx": 426
    },
    {
      "path": "src/grid/header/Container.js",
      "requires": [
        336,
        368,
        369,
        413,
        416,
        426
      ],
      "uses": [
        1,
        123,
        203,
        345,
        357,
        365,
        380,
        429,
        547,
        569,
        570,
        571
      ],
      "idx": 427
    },
    {
      "path": "src/grid/ColumnComponentLayout.js",
      "requires": [
        345
      ],
      "uses": [],
      "idx": 428
    },
    {
      "path": "src/grid/column/Column.js",
      "requires": [
        213,
        413,
        427,
        428
      ],
      "uses": [
        80,
        416
      ],
      "idx": 429
    },
    {
      "path": "src/rtl/grid/column/Column.js",
      "requires": [],
      "uses": [],
      "idx": 430
    },
    {
      "path": "src/tree/Column.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 431
    },
    {
      "path": "src/rtl/tree/Column.js",
      "requires": [],
      "uses": [],
      "idx": 432
    },
    {
      "path": "src/grid/NavigationModel.js",
      "requires": [
        395
      ],
      "uses": [
        27,
        73,
        123,
        368,
        399
      ],
      "idx": 433
    },
    {
      "path": "src/rtl/grid/NavigationModel.js",
      "requires": [],
      "uses": [],
      "idx": 434
    },
    {
      "path": "src/tree/NavigationModel.js",
      "requires": [
        433
      ],
      "uses": [
        27
      ],
      "idx": 435
    },
    {
      "path": "src/tree/Panel.js",
      "requires": [
        235,
        392,
        410,
        412,
        431,
        435
      ],
      "uses": [
        181,
        203,
        334,
        428
      ],
      "idx": 436
    },
    {
      "path": "src/form/field/VTypes.js",
      "requires": [],
      "uses": [],
      "idx": 437
    },
    {
      "path": "src/form/trigger/Trigger.js",
      "requires": [
        93,
        356
      ],
      "uses": [
        48,
        88
      ],
      "idx": 438
    },
    {
      "path": "src/form/field/Text.js",
      "requires": [
        327,
        389,
        437,
        438
      ],
      "uses": [
        80,
        81,
        92
      ],
      "idx": 439
    },
    {
      "path": "src/app/bindinspector/ComponentList.js",
      "requires": [
        436,
        439
      ],
      "uses": [
        14,
        203,
        334,
        345,
        371,
        380,
        408,
        428,
        431,
        448,
        462,
        538,
        650
      ],
      "idx": 440
    },
    {
      "path": "src/resizer/BorderSplitter.js",
      "requires": [
        360
      ],
      "uses": [
        619
      ],
      "idx": 441
    },
    {
      "path": "src/layout/container/Border.js",
      "requires": [
        71,
        124,
        333,
        441
      ],
      "uses": [
        80,
        203,
        345
      ],
      "idx": 442
    },
    {
      "path": "src/rtl/layout/container/Border.js",
      "requires": [],
      "uses": [],
      "idx": 443
    },
    {
      "path": "src/layout/container/Card.js",
      "requires": [
        391
      ],
      "uses": [
        48
      ],
      "idx": 444
    },
    {
      "path": "src/dom/ButtonElement.js",
      "requires": [
        48
      ],
      "uses": [],
      "idx": 445
    },
    {
      "path": "src/button/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 446
    },
    {
      "path": "src/menu/Manager.js",
      "requires": [],
      "uses": [
        11,
        571
      ],
      "idx": 447
    },
    {
      "path": "src/button/Button.js",
      "requires": [
        123,
        233,
        327,
        356,
        367,
        445,
        446,
        447
      ],
      "uses": [
        27,
        464
      ],
      "idx": 448
    },
    {
      "path": "src/rtl/button/Button.js",
      "requires": [],
      "uses": [],
      "idx": 449
    },
    {
      "path": "src/tab/Tab.js",
      "requires": [
        368,
        448
      ],
      "uses": [],
      "idx": 450
    },
    {
      "path": "src/layout/component/Body.js",
      "requires": [
        345
      ],
      "uses": [],
      "idx": 451
    },
    {
      "path": "src/tab/Bar.js",
      "requires": [
        26,
        349,
        369,
        450,
        451
      ],
      "uses": [
        25
      ],
      "idx": 452
    },
    {
      "path": "src/rtl/tab/Bar.js",
      "requires": [],
      "uses": [],
      "idx": 453
    },
    {
      "path": "src/tab/Panel.js",
      "requires": [
        384,
        444,
        452
      ],
      "uses": [
        203,
        345,
        450
      ],
      "idx": 454
    },
    {
      "path": "src/app/bindinspector/Environment.js",
      "requires": [
        133
      ],
      "uses": [
        11,
        498
      ],
      "idx": 455
    },
    {
      "path": "src/app/bindinspector/ViewModelDetail.js",
      "requires": [
        436
      ],
      "uses": [
        81,
        203,
        334,
        408,
        428,
        431
      ],
      "idx": 456
    },
    {
      "path": "src/app/bindinspector/noconflict/BaseModel.js",
      "requires": [
        161
      ],
      "uses": [],
      "idx": 457
    },
    {
      "path": "src/app/bindinspector/Container.js",
      "requires": [
        123,
        203,
        336,
        345,
        363,
        408,
        409,
        440,
        442,
        454,
        455,
        456,
        457
      ],
      "uses": [
        142,
        334,
        380,
        384,
        391,
        452
      ],
      "idx": 458
    },
    {
      "path": "src/util/ComponentDragger.js",
      "requires": [
        415
      ],
      "uses": [
        25,
        48
      ],
      "idx": 459
    },
    {
      "path": "src/window/Window.js",
      "requires": [
        25,
        384,
        459
      ],
      "uses": [],
      "idx": 460
    },
    {
      "path": "src/tip/Tip.js",
      "requires": [
        384
      ],
      "uses": [
        123
      ],
      "idx": 461
    },
    {
      "path": "src/tip/ToolTip.js",
      "requires": [
        461
      ],
      "uses": [
        48
      ],
      "idx": 462
    },
    {
      "path": "src/tip/QuickTip.js",
      "requires": [
        462
      ],
      "uses": [],
      "idx": 463
    },
    {
      "path": "src/tip/QuickTipManager.js",
      "requires": [
        463
      ],
      "uses": [],
      "idx": 464
    },
    {
      "path": "src/rtl/tip/QuickTipManager.js",
      "requires": [],
      "uses": [],
      "idx": 465
    },
    {
      "path": "src/app/bindinspector/Inspector.js",
      "requires": [
        391,
        458,
        460,
        464
      ],
      "uses": [
        203,
        345,
        442,
        455
      ],
      "idx": 466
    },
    {
      "path": "src/button/Split.js",
      "requires": [
        448
      ],
      "uses": [],
      "idx": 467
    },
    {
      "path": "src/button/Cycle.js",
      "requires": [
        467
      ],
      "uses": [],
      "idx": 468
    },
    {
      "path": "src/button/Segmented.js",
      "requires": [
        336,
        448
      ],
      "uses": [],
      "idx": 469
    },
    {
      "path": "src/rtl/button/Segmented.js",
      "requires": [],
      "uses": [],
      "idx": 470
    },
    {
      "path": "src/layout/container/Table.js",
      "requires": [
        333
      ],
      "uses": [],
      "idx": 471
    },
    {
      "path": "src/container/ButtonGroup.js",
      "requires": [
        384,
        471
      ],
      "uses": [],
      "idx": 472
    },
    {
      "path": "src/container/Monitor.js",
      "requires": [],
      "uses": [
        54
      ],
      "idx": 473
    },
    {
      "path": "src/plugin/Responsive.js",
      "requires": [
        313
      ],
      "uses": [],
      "idx": 474
    },
    {
      "path": "src/plugin/Viewport.js",
      "requires": [
        474
      ],
      "uses": [
        48,
        123,
        331
      ],
      "idx": 475
    },
    {
      "path": "src/container/Viewport.js",
      "requires": [
        313,
        336,
        475
      ],
      "uses": [],
      "idx": 476
    },
    {
      "path": "src/layout/container/Anchor.js",
      "requires": [
        334
      ],
      "uses": [],
      "idx": 477
    },
    {
      "path": "src/dashboard/Panel.js",
      "requires": [
        384
      ],
      "uses": [
        11
      ],
      "idx": 478
    },
    {
      "path": "src/dashboard/Column.js",
      "requires": [
        336,
        477,
        478
      ],
      "uses": [],
      "idx": 479
    },
    {
      "path": "src/layout/container/Column.js",
      "requires": [
        334
      ],
      "uses": [],
      "idx": 480
    },
    {
      "path": "src/rtl/layout/container/Column.js",
      "requires": [],
      "uses": [],
      "idx": 481
    },
    {
      "path": "src/resizer/SplitterTracker.js",
      "requires": [
        25,
        415
      ],
      "uses": [
        48,
        100
      ],
      "idx": 482
    },
    {
      "path": "src/rtl/resizer/SplitterTracker.js",
      "requires": [],
      "uses": [],
      "idx": 483
    },
    {
      "path": "src/layout/container/ColumnSplitterTracker.js",
      "requires": [
        482
      ],
      "uses": [],
      "idx": 484
    },
    {
      "path": "src/layout/container/ColumnSplitter.js",
      "requires": [
        360,
        484
      ],
      "uses": [],
      "idx": 485
    },
    {
      "path": "src/layout/container/Dashboard.js",
      "requires": [
        480,
        485
      ],
      "uses": [
        203,
        345
      ],
      "idx": 486
    },
    {
      "path": "src/dashboard/DropZone.js",
      "requires": [
        422
      ],
      "uses": [],
      "idx": 487
    },
    {
      "path": "src/dashboard/Part.js",
      "requires": [
        3,
        93,
        134
      ],
      "uses": [],
      "idx": 488
    },
    {
      "path": "src/dashboard/Dashboard.js",
      "requires": [
        384,
        479,
        486,
        487,
        488
      ],
      "uses": [
        93,
        120,
        133
      ],
      "idx": 489
    },
    {
      "path": "src/dom/Layer.js",
      "requires": [
        48
      ],
      "uses": [
        238
      ],
      "idx": 490
    },
    {
      "path": "src/enums.js",
      "requires": [],
      "uses": [],
      "idx": 491
    },
    {
      "path": "src/event/publisher/MouseEnterLeave.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 492
    },
    {
      "path": "src/flash/Component.js",
      "requires": [
        123
      ],
      "uses": [],
      "idx": 493
    },
    {
      "path": "src/form/action/Action.js",
      "requires": [],
      "uses": [],
      "idx": 494
    },
    {
      "path": "src/form/action/Load.js",
      "requires": [
        8,
        494
      ],
      "uses": [
        9
      ],
      "idx": 495
    },
    {
      "path": "src/form/action/Submit.js",
      "requires": [
        494
      ],
      "uses": [
        9,
        238
      ],
      "idx": 496
    },
    {
      "path": "src/form/field/TextArea.js",
      "requires": [
        1,
        88,
        439
      ],
      "uses": [
        80,
        327
      ],
      "idx": 497
    },
    {
      "path": "src/window/MessageBox.js",
      "requires": [
        347,
        363,
        371,
        439,
        448,
        460,
        477,
        497
      ],
      "uses": [
        123,
        203,
        336,
        345,
        346,
        538
      ],
      "idx": 498
    },
    {
      "path": "src/form/Basic.js",
      "requires": [
        1,
        50,
        54,
        145,
        495,
        496,
        498
      ],
      "uses": [
        473
      ],
      "idx": 499
    },
    {
      "path": "src/form/FieldAncestor.js",
      "requires": [
        0,
        473
      ],
      "uses": [],
      "idx": 500
    },
    {
      "path": "src/layout/component/field/FieldContainer.js",
      "requires": [
        345
      ],
      "uses": [],
      "idx": 501
    },
    {
      "path": "src/form/FieldContainer.js",
      "requires": [
        336,
        386,
        500,
        501
      ],
      "uses": [],
      "idx": 502
    },
    {
      "path": "src/layout/container/CheckboxGroup.js",
      "requires": [
        333
      ],
      "uses": [
        238
      ],
      "idx": 503
    },
    {
      "path": "src/form/CheckboxGroup.js",
      "requires": [
        388,
        389,
        407,
        502,
        503
      ],
      "uses": [],
      "idx": 504
    },
    {
      "path": "src/form/FieldSet.js",
      "requires": [
        336,
        500
      ],
      "uses": [
        48,
        91,
        123,
        203,
        238,
        333,
        345,
        353,
        407,
        477,
        608
      ],
      "idx": 505
    },
    {
      "path": "src/form/Label.js",
      "requires": [
        80,
        123
      ],
      "uses": [],
      "idx": 506
    },
    {
      "path": "src/form/Panel.js",
      "requires": [
        55,
        384,
        499,
        500
      ],
      "uses": [],
      "idx": 507
    },
    {
      "path": "src/form/RadioManager.js",
      "requires": [
        54
      ],
      "uses": [],
      "idx": 508
    },
    {
      "path": "src/form/field/Radio.js",
      "requires": [
        407,
        508
      ],
      "uses": [],
      "idx": 509
    },
    {
      "path": "src/form/RadioGroup.js",
      "requires": [
        369,
        504,
        509
      ],
      "uses": [
        508
      ],
      "idx": 510
    },
    {
      "path": "src/form/action/DirectAction.js",
      "requires": [
        0
      ],
      "uses": [
        218
      ],
      "idx": 511
    },
    {
      "path": "src/form/action/DirectLoad.js",
      "requires": [
        218,
        495,
        511
      ],
      "uses": [],
      "idx": 512
    },
    {
      "path": "src/form/action/DirectSubmit.js",
      "requires": [
        218,
        496,
        511
      ],
      "uses": [],
      "idx": 513
    },
    {
      "path": "src/form/action/StandardSubmit.js",
      "requires": [
        496
      ],
      "uses": [],
      "idx": 514
    },
    {
      "path": "src/form/field/Picker.js",
      "requires": [
        368,
        439
      ],
      "uses": [],
      "idx": 515
    },
    {
      "path": "src/view/BoundListKeyNav.js",
      "requires": [
        395
      ],
      "uses": [
        27,
        368
      ],
      "idx": 516
    },
    {
      "path": "src/layout/component/BoundList.js",
      "requires": [
        345
      ],
      "uses": [],
      "idx": 517
    },
    {
      "path": "src/toolbar/Item.js",
      "requires": [
        123,
        371
      ],
      "uses": [],
      "idx": 518
    },
    {
      "path": "src/toolbar/TextItem.js",
      "requires": [
        88,
        371,
        518
      ],
      "uses": [],
      "idx": 519
    },
    {
      "path": "src/form/trigger/Spinner.js",
      "requires": [
        438
      ],
      "uses": [],
      "idx": 520
    },
    {
      "path": "src/form/field/Spinner.js",
      "requires": [
        368,
        439,
        520
      ],
      "uses": [],
      "idx": 521
    },
    {
      "path": "src/form/field/Number.js",
      "requires": [
        521
      ],
      "uses": [
        80,
        81
      ],
      "idx": 522
    },
    {
      "path": "src/toolbar/Paging.js",
      "requires": [
        342,
        371,
        519,
        522
      ],
      "uses": [
        81,
        203,
        345,
        520
      ],
      "idx": 523
    },
    {
      "path": "src/view/BoundList.js",
      "requires": [
        48,
        233,
        398,
        516,
        517,
        523
      ],
      "uses": [
        88,
        203,
        345,
        538
      ],
      "idx": 524
    },
    {
      "path": "src/form/field/ComboBox.js",
      "requires": [
        1,
        181,
        342,
        515,
        524
      ],
      "uses": [
        27,
        48,
        49,
        88,
        133,
        161,
        176,
        203,
        238,
        394,
        516,
        517
      ],
      "idx": 525
    },
    {
      "path": "src/picker/Month.js",
      "requires": [
        88,
        123,
        356,
        448
      ],
      "uses": [
        203,
        345
      ],
      "idx": 526
    },
    {
      "path": "src/picker/Date.js",
      "requires": [
        65,
        88,
        123,
        356,
        368,
        448,
        467,
        526
      ],
      "uses": [
        81,
        203,
        238,
        345
      ],
      "idx": 527
    },
    {
      "path": "src/form/field/Date.js",
      "requires": [
        515,
        527
      ],
      "uses": [
        81,
        203,
        345
      ],
      "idx": 528
    },
    {
      "path": "src/form/field/FileButton.js",
      "requires": [
        448
      ],
      "uses": [
        123
      ],
      "idx": 529
    },
    {
      "path": "src/rtl/form/field/FileButton.js",
      "requires": [],
      "uses": [],
      "idx": 530
    },
    {
      "path": "src/form/trigger/Component.js",
      "requires": [
        438
      ],
      "uses": [],
      "idx": 531
    },
    {
      "path": "src/form/field/File.js",
      "requires": [
        439,
        529,
        531
      ],
      "uses": [
        203,
        345
      ],
      "idx": 532
    },
    {
      "path": "src/rtl/form/field/File.js",
      "requires": [],
      "uses": [],
      "idx": 533
    },
    {
      "path": "src/form/field/Hidden.js",
      "requires": [
        389
      ],
      "uses": [],
      "idx": 534
    },
    {
      "path": "src/picker/Color.js",
      "requires": [
        88,
        123
      ],
      "uses": [],
      "idx": 535
    },
    {
      "path": "src/layout/component/field/HtmlEditor.js",
      "requires": [
        501
      ],
      "uses": [],
      "idx": 536
    },
    {
      "path": "src/toolbar/Separator.js",
      "requires": [
        371,
        518
      ],
      "uses": [],
      "idx": 537
    },
    {
      "path": "src/layout/container/boxOverflow/Menu.js",
      "requires": [
        355,
        448,
        537
      ],
      "uses": [
        203,
        345,
        357,
        365,
        380,
        571,
        650
      ],
      "idx": 538
    },
    {
      "path": "src/rtl/layout/container/boxOverflow/Menu.js",
      "requires": [],
      "uses": [],
      "idx": 539
    },
    {
      "path": "src/form/field/HtmlEditor.js",
      "requires": [
        80,
        326,
        365,
        371,
        388,
        464,
        502,
        518,
        535,
        536,
        538
      ],
      "uses": [
        1,
        81,
        123,
        203,
        238,
        345,
        357,
        380,
        571
      ],
      "idx": 540
    },
    {
      "path": "src/form/field/Tag.js",
      "requires": [
        178,
        215,
        393,
        525
      ],
      "uses": [
        49,
        88
      ],
      "idx": 541
    },
    {
      "path": "src/picker/Time.js",
      "requires": [
        178,
        524
      ],
      "uses": [
        49
      ],
      "idx": 542
    },
    {
      "path": "src/form/field/Time.js",
      "requires": [
        516,
        525,
        528,
        542
      ],
      "uses": [
        81,
        88,
        203,
        394,
        517
      ],
      "idx": 543
    },
    {
      "path": "src/form/field/Trigger.js",
      "requires": [
        238,
        356,
        439
      ],
      "uses": [],
      "idx": 544
    },
    {
      "path": "src/grid/CellEditor.js",
      "requires": [
        338
      ],
      "uses": [],
      "idx": 545
    },
    {
      "path": "src/rtl/grid/CellEditor.js",
      "requires": [],
      "uses": [],
      "idx": 546
    },
    {
      "path": "src/grid/ColumnManager.js",
      "requires": [],
      "uses": [],
      "idx": 547
    },
    {
      "path": "src/grid/RowEditorButtons.js",
      "requires": [
        336
      ],
      "uses": [
        203,
        345,
        384,
        448
      ],
      "idx": 548
    },
    {
      "path": "src/grid/RowEditor.js",
      "requires": [
        368,
        462,
        507,
        548
      ],
      "uses": [
        48,
        77,
        203,
        334,
        336,
        345,
        380,
        390
      ],
      "idx": 549
    },
    {
      "path": "src/grid/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 550
    },
    {
      "path": "src/view/DropZone.js",
      "requires": [
        424
      ],
      "uses": [
        123,
        203,
        345
      ],
      "idx": 551
    },
    {
      "path": "src/grid/ViewDropZone.js",
      "requires": [
        551
      ],
      "uses": [],
      "idx": 552
    },
    {
      "path": "src/grid/column/Action.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 553
    },
    {
      "path": "src/grid/column/Boolean.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 554
    },
    {
      "path": "src/grid/column/Check.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 555
    },
    {
      "path": "src/grid/column/Date.js",
      "requires": [
        429
      ],
      "uses": [
        80
      ],
      "idx": 556
    },
    {
      "path": "src/grid/column/Number.js",
      "requires": [
        80,
        429
      ],
      "uses": [],
      "idx": 557
    },
    {
      "path": "src/grid/column/RowNumberer.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 558
    },
    {
      "path": "src/grid/column/Template.js",
      "requires": [
        88,
        429
      ],
      "uses": [
        555
      ],
      "idx": 559
    },
    {
      "path": "src/grid/column/Widget.js",
      "requires": [
        429
      ],
      "uses": [],
      "idx": 560
    },
    {
      "path": "src/grid/feature/Feature.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 561
    },
    {
      "path": "src/grid/feature/AbstractSummary.js",
      "requires": [
        561
      ],
      "uses": [],
      "idx": 562
    },
    {
      "path": "src/grid/feature/GroupStore.js",
      "requires": [
        50
      ],
      "uses": [
        133
      ],
      "idx": 563
    },
    {
      "path": "src/grid/feature/Grouping.js",
      "requires": [
        561,
        562,
        563
      ],
      "uses": [
        88,
        161,
        427
      ],
      "idx": 564
    },
    {
      "path": "src/grid/feature/GroupingSummary.js",
      "requires": [
        564
      ],
      "uses": [],
      "idx": 565
    },
    {
      "path": "src/grid/feature/RowBody.js",
      "requires": [
        561
      ],
      "uses": [
        88
      ],
      "idx": 566
    },
    {
      "path": "src/grid/feature/Summary.js",
      "requires": [
        562
      ],
      "uses": [
        88,
        123,
        161,
        203,
        345
      ],
      "idx": 567
    },
    {
      "path": "src/menu/Item.js",
      "requires": [
        123,
        233
      ],
      "uses": [
        447,
        464
      ],
      "idx": 568
    },
    {
      "path": "src/menu/CheckItem.js",
      "requires": [
        568
      ],
      "uses": [
        447
      ],
      "idx": 569
    },
    {
      "path": "src/menu/Separator.js",
      "requires": [
        568
      ],
      "uses": [],
      "idx": 570
    },
    {
      "path": "src/menu/Menu.js",
      "requires": [
        365,
        369,
        384,
        447,
        568,
        569,
        570
      ],
      "uses": [
        11,
        48,
        203,
        345
      ],
      "idx": 571
    },
    {
      "path": "src/grid/filters/filter/Base.js",
      "requires": [
        93,
        203,
        357,
        365,
        380,
        571
      ],
      "uses": [
        1,
        49
      ],
      "idx": 572
    },
    {
      "path": "src/grid/filters/filter/SingleFilter.js",
      "requires": [
        572
      ],
      "uses": [],
      "idx": 573
    },
    {
      "path": "src/grid/filters/filter/Boolean.js",
      "requires": [
        573
      ],
      "uses": [],
      "idx": 574
    },
    {
      "path": "src/grid/filters/filter/TriFilter.js",
      "requires": [
        572
      ],
      "uses": [],
      "idx": 575
    },
    {
      "path": "src/grid/filters/filter/Date.js",
      "requires": [
        203,
        345,
        569,
        575
      ],
      "uses": [
        527,
        571
      ],
      "idx": 576
    },
    {
      "path": "src/grid/filters/filter/List.js",
      "requires": [
        573
      ],
      "uses": [
        178,
        181
      ],
      "idx": 577
    },
    {
      "path": "src/grid/filters/filter/Number.js",
      "requires": [
        203,
        345,
        520,
        575
      ],
      "uses": [
        522
      ],
      "idx": 578
    },
    {
      "path": "src/grid/filters/filter/String.js",
      "requires": [
        203,
        345,
        439,
        573
      ],
      "uses": [],
      "idx": 579
    },
    {
      "path": "src/grid/filters/Filters.js",
      "requires": [
        318,
        342,
        572,
        573,
        574,
        575,
        576,
        577,
        578,
        579
      ],
      "uses": [
        93
      ],
      "idx": 580
    },
    {
      "path": "src/grid/locking/HeaderContainer.js",
      "requires": [
        427,
        547
      ],
      "uses": [],
      "idx": 581
    },
    {
      "path": "src/grid/locking/View.js",
      "requires": [
        50,
        122,
        123,
        342,
        397,
        403
      ],
      "uses": [
        11,
        343,
        433,
        435
      ],
      "idx": 582
    },
    {
      "path": "src/grid/locking/Lockable.js",
      "requires": [
        123,
        403,
        427,
        581,
        582
      ],
      "uses": [
        1,
        181,
        203,
        334,
        345,
        360,
        361
      ],
      "idx": 583
    },
    {
      "path": "src/grid/plugin/BufferedRenderer.js",
      "requires": [
        318
      ],
      "uses": [
        1,
        401
      ],
      "idx": 584
    },
    {
      "path": "src/grid/plugin/Editing.js",
      "requires": [
        50,
        318,
        368,
        389,
        403,
        429
      ],
      "uses": [
        11,
        203,
        345,
        399
      ],
      "idx": 585
    },
    {
      "path": "src/grid/plugin/CellEditing.js",
      "requires": [
        1,
        545,
        585
      ],
      "uses": [
        54,
        203,
        337,
        345
      ],
      "idx": 586
    },
    {
      "path": "src/plugin/AbstractClipboard.js",
      "requires": [
        318,
        367
      ],
      "uses": [
        48
      ],
      "idx": 587
    },
    {
      "path": "src/grid/plugin/Clipboard.js",
      "requires": [
        80,
        325,
        587
      ],
      "uses": [
        399
      ],
      "idx": 588
    },
    {
      "path": "src/grid/plugin/DragDrop.js",
      "requires": [
        318
      ],
      "uses": [
        552,
        652
      ],
      "idx": 589
    },
    {
      "path": "src/grid/plugin/RowEditing.js",
      "requires": [
        549,
        585
      ],
      "uses": [],
      "idx": 590
    },
    {
      "path": "src/rtl/grid/plugin/RowEditing.js",
      "requires": [],
      "uses": [],
      "idx": 591
    },
    {
      "path": "src/grid/plugin/RowExpander.js",
      "requires": [
        318,
        566
      ],
      "uses": [
        88,
        429
      ],
      "idx": 592
    },
    {
      "path": "src/grid/property/Grid.js",
      "requires": [
        405
      ],
      "uses": [
        11,
        88,
        161,
        203,
        337,
        345,
        389,
        403,
        439,
        520,
        522,
        525,
        528,
        545,
        586,
        594,
        597
      ],
      "idx": 593
    },
    {
      "path": "src/grid/property/HeaderContainer.js",
      "requires": [
        80,
        427
      ],
      "uses": [],
      "idx": 594
    },
    {
      "path": "src/grid/property/Property.js",
      "requires": [
        161
      ],
      "uses": [],
      "idx": 595
    },
    {
      "path": "src/grid/property/Reader.js",
      "requires": [
        163
      ],
      "uses": [
        162
      ],
      "idx": 596
    },
    {
      "path": "src/grid/property/Store.js",
      "requires": [
        167,
        178,
        595,
        596
      ],
      "uses": [
        173
      ],
      "idx": 597
    },
    {
      "path": "src/grid/selection/Selection.js",
      "requires": [],
      "uses": [],
      "idx": 598
    },
    {
      "path": "src/grid/selection/Cells.js",
      "requires": [
        598
      ],
      "uses": [
        399
      ],
      "idx": 599
    },
    {
      "path": "src/grid/selection/Columns.js",
      "requires": [
        598
      ],
      "uses": [
        399
      ],
      "idx": 600
    },
    {
      "path": "src/grid/selection/Rows.js",
      "requires": [
        133,
        598
      ],
      "uses": [
        399
      ],
      "idx": 601
    },
    {
      "path": "src/grid/selection/SpreadsheetModel.js",
      "requires": [
        393,
        558,
        598,
        599,
        600,
        601
      ],
      "uses": [
        203,
        334,
        399,
        421,
        428
      ],
      "idx": 602
    },
    {
      "path": "src/util/Queue.js",
      "requires": [],
      "uses": [],
      "idx": 603
    },
    {
      "path": "src/layout/ContextItem.js",
      "requires": [],
      "uses": [
        54,
        65,
        71,
        331
      ],
      "idx": 604
    },
    {
      "path": "src/rtl/layout/ContextItem.js",
      "requires": [],
      "uses": [],
      "idx": 605
    },
    {
      "path": "src/layout/Context.js",
      "requires": [
        65,
        71,
        317,
        332,
        603,
        604
      ],
      "uses": [],
      "idx": 606
    },
    {
      "path": "src/layout/SizePolicy.js",
      "requires": [],
      "uses": [],
      "idx": 607
    },
    {
      "path": "src/layout/component/FieldSet.js",
      "requires": [
        451
      ],
      "uses": [],
      "idx": 608
    },
    {
      "path": "src/layout/container/Absolute.js",
      "requires": [
        477
      ],
      "uses": [],
      "idx": 609
    },
    {
      "path": "src/rtl/layout/container/Absolute.js",
      "requires": [],
      "uses": [],
      "idx": 610
    },
    {
      "path": "src/layout/container/Accordion.js",
      "requires": [
        365
      ],
      "uses": [],
      "idx": 611
    },
    {
      "path": "src/layout/container/Center.js",
      "requires": [
        391
      ],
      "uses": [],
      "idx": 612
    },
    {
      "path": "src/layout/container/Form.js",
      "requires": [
        334
      ],
      "uses": [],
      "idx": 613
    },
    {
      "path": "src/layout/container/SegmentedButton.js",
      "requires": [
        333
      ],
      "uses": [],
      "idx": 614
    },
    {
      "path": "src/menu/ColorPicker.js",
      "requires": [
        535,
        571
      ],
      "uses": [
        203,
        345,
        447
      ],
      "idx": 615
    },
    {
      "path": "src/menu/DatePicker.js",
      "requires": [
        527,
        571
      ],
      "uses": [
        203,
        345,
        447
      ],
      "idx": 616
    },
    {
      "path": "src/panel/Pinnable.js",
      "requires": [
        0
      ],
      "uses": [
        203,
        345,
        353
      ],
      "idx": 617
    },
    {
      "path": "src/plugin/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 618
    },
    {
      "path": "src/resizer/BorderSplitterTracker.js",
      "requires": [
        25,
        482
      ],
      "uses": [],
      "idx": 619
    },
    {
      "path": "src/rtl/resizer/BorderSplitterTracker.js",
      "requires": [],
      "uses": [],
      "idx": 620
    },
    {
      "path": "src/resizer/Handle.js",
      "requires": [
        123
      ],
      "uses": [],
      "idx": 621
    },
    {
      "path": "src/resizer/ResizeTracker.js",
      "requires": [
        415
      ],
      "uses": [],
      "idx": 622
    },
    {
      "path": "src/rtl/resizer/ResizeTracker.js",
      "requires": [],
      "uses": [],
      "idx": 623
    },
    {
      "path": "src/resizer/Resizer.js",
      "requires": [
        50
      ],
      "uses": [
        48,
        81,
        123,
        238,
        622
      ],
      "idx": 624
    },
    {
      "path": "src/selection/CellModel.js",
      "requires": [
        394,
        399
      ],
      "uses": [],
      "idx": 625
    },
    {
      "path": "src/selection/CheckboxModel.js",
      "requires": [
        411
      ],
      "uses": [
        203,
        334,
        399,
        428,
        429
      ],
      "idx": 626
    },
    {
      "path": "src/slider/Thumb.js",
      "requires": [
        80,
        415
      ],
      "uses": [
        71
      ],
      "idx": 627
    },
    {
      "path": "src/slider/Tip.js",
      "requires": [
        461
      ],
      "uses": [],
      "idx": 628
    },
    {
      "path": "src/slider/Multi.js",
      "requires": [
        80,
        81,
        389,
        627,
        628
      ],
      "uses": [
        238
      ],
      "idx": 629
    },
    {
      "path": "src/rtl/slider/Multi.js",
      "requires": [],
      "uses": [],
      "idx": 630
    },
    {
      "path": "src/slider/Single.js",
      "requires": [
        629
      ],
      "uses": [],
      "idx": 631
    },
    {
      "path": "src/slider/Widget.js",
      "requires": [
        84,
        629
      ],
      "uses": [
        71,
        80
      ],
      "idx": 632
    },
    {
      "path": "src/sparkline/Shape.js",
      "requires": [],
      "uses": [],
      "idx": 633
    },
    {
      "path": "src/sparkline/CanvasBase.js",
      "requires": [
        633
      ],
      "uses": [],
      "idx": 634
    },
    {
      "path": "src/sparkline/CanvasCanvas.js",
      "requires": [
        634
      ],
      "uses": [],
      "idx": 635
    },
    {
      "path": "src/sparkline/VmlCanvas.js",
      "requires": [
        634
      ],
      "uses": [],
      "idx": 636
    },
    {
      "path": "src/sparkline/Base.js",
      "requires": [
        84,
        88,
        203,
        334,
        380,
        462,
        635,
        636
      ],
      "uses": [],
      "idx": 637
    },
    {
      "path": "src/sparkline/BarBase.js",
      "requires": [
        637
      ],
      "uses": [],
      "idx": 638
    },
    {
      "path": "src/sparkline/RangeMap.js",
      "requires": [],
      "uses": [],
      "idx": 639
    },
    {
      "path": "src/sparkline/Bar.js",
      "requires": [
        88,
        638,
        639
      ],
      "uses": [],
      "idx": 640
    },
    {
      "path": "src/sparkline/Box.js",
      "requires": [
        88,
        637
      ],
      "uses": [],
      "idx": 641
    },
    {
      "path": "src/sparkline/Bullet.js",
      "requires": [
        88,
        637
      ],
      "uses": [],
      "idx": 642
    },
    {
      "path": "src/sparkline/Discrete.js",
      "requires": [
        88,
        638
      ],
      "uses": [],
      "idx": 643
    },
    {
      "path": "src/sparkline/Line.js",
      "requires": [
        88,
        637,
        639
      ],
      "uses": [],
      "idx": 644
    },
    {
      "path": "src/sparkline/Pie.js",
      "requires": [
        88,
        637
      ],
      "uses": [],
      "idx": 645
    },
    {
      "path": "src/sparkline/TriState.js",
      "requires": [
        88,
        638,
        639
      ],
      "uses": [],
      "idx": 646
    },
    {
      "path": "src/state/CookieProvider.js",
      "requires": [
        119
      ],
      "uses": [],
      "idx": 647
    },
    {
      "path": "src/state/LocalStorageProvider.js",
      "requires": [
        119,
        324
      ],
      "uses": [],
      "idx": 648
    },
    {
      "path": "src/toolbar/Breadcrumb.js",
      "requires": [
        235,
        336,
        369,
        467
      ],
      "uses": [
        181
      ],
      "idx": 649
    },
    {
      "path": "src/toolbar/Fill.js",
      "requires": [
        123,
        371
      ],
      "uses": [],
      "idx": 650
    },
    {
      "path": "src/toolbar/Spacer.js",
      "requires": [
        123,
        371
      ],
      "uses": [],
      "idx": 651
    },
    {
      "path": "src/view/DragZone.js",
      "requires": [
        418
      ],
      "uses": [
        81
      ],
      "idx": 652
    },
    {
      "path": "src/tree/ViewDragZone.js",
      "requires": [
        652
      ],
      "uses": [
        81
      ],
      "idx": 653
    },
    {
      "path": "src/tree/ViewDropZone.js",
      "requires": [
        551
      ],
      "uses": [],
      "idx": 654
    },
    {
      "path": "src/tree/plugin/TreeViewDragDrop.js",
      "requires": [
        318
      ],
      "uses": [
        653,
        654
      ],
      "idx": 655
    },
    {
      "path": "src/util/CSS.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 656
    },
    {
      "path": "src/util/Cookies.js",
      "requires": [],
      "uses": [],
      "idx": 657
    },
    {
      "path": "src/view/MultiSelectorSearch.js",
      "requires": [
        384
      ],
      "uses": [
        49,
        181,
        203,
        345,
        380,
        391,
        405,
        439
      ],
      "idx": 658
    },
    {
      "path": "src/view/MultiSelector.js",
      "requires": [
        203,
        380,
        391,
        405,
        658
      ],
      "uses": [],
      "idx": 659
    },
    {
      "path": "src/window/Toast.js",
      "requires": [
        460
      ],
      "uses": [
        1
      ],
      "idx": 660
    }
  ],
  "classes": {
    "Ext.AbstractManager": {
      "idx": 6,
      "alias": [],
      "alternates": []
    },
    "Ext.Action": {
      "idx": 328,
      "alias": [],
      "alternates": []
    },
    "Ext.Ajax": {
      "idx": 9,
      "alias": [],
      "alternates": []
    },
    "Ext.AnimationQueue": {
      "idx": 10,
      "alias": [],
      "alternates": []
    },
    "Ext.Component": {
      "idx": 123,
      "alias": [
        "widget.box",
        "widget.component"
      ],
      "alternates": [
        "Ext.AbstractComponent"
      ]
    },
    "Ext.ComponentLoader": {
      "idx": 330,
      "alias": [],
      "alternates": []
    },
    "Ext.ComponentManager": {
      "idx": 11,
      "alias": [],
      "alternates": [
        "Ext.ComponentMgr"
      ]
    },
    "Ext.ComponentQuery": {
      "idx": 14,
      "alias": [],
      "alternates": []
    },
    "Ext.Editor": {
      "idx": 338,
      "alias": [
        "widget.editor"
      ],
      "alternates": []
    },
    "Ext.ElementLoader": {
      "idx": 329,
      "alias": [],
      "alternates": []
    },
    "Ext.EventManager": {
      "idx": 339,
      "alias": [],
      "alternates": []
    },
    "Ext.Evented": {
      "idx": 15,
      "alias": [],
      "alternates": [
        "Ext.EventedBase"
      ]
    },
    "Ext.FocusManager": {
      "idx": 340,
      "alias": [],
      "alternates": [
        "Ext.FocusMgr"
      ]
    },
    "Ext.GlobalEvents": {
      "idx": 77,
      "alias": [],
      "alternates": [
        "Ext.globalEvents"
      ]
    },
    "Ext.Img": {
      "idx": 341,
      "alias": [
        "widget.image",
        "widget.imagecomponent"
      ],
      "alternates": []
    },
    "Ext.LoadMask": {
      "idx": 343,
      "alias": [
        "widget.loadmask"
      ],
      "alternates": []
    },
    "Ext.Mixin": {
      "idx": 0,
      "alias": [],
      "alternates": []
    },
    "Ext.ProgressBar": {
      "idx": 347,
      "alias": [
        "widget.progressbar"
      ],
      "alternates": []
    },
    "Ext.ProgressBarWidget": {
      "idx": 348,
      "alias": [
        "widget.progressbarwidget"
      ],
      "alternates": []
    },
    "Ext.TaskQueue": {
      "idx": 36,
      "alias": [],
      "alternates": []
    },
    "Ext.Template": {
      "idx": 81,
      "alias": [],
      "alternates": []
    },
    "Ext.Widget": {
      "idx": 84,
      "alias": [
        "widget.widget"
      ],
      "alternates": []
    },
    "Ext.XTemplate": {
      "idx": 88,
      "alias": [],
      "alternates": []
    },
    "Ext.ZIndexManager": {
      "idx": 335,
      "alias": [],
      "alternates": [
        "Ext.WindowGroup"
      ]
    },
    "Ext.app.Application": {
      "idx": 188,
      "alias": [],
      "alternates": []
    },
    "Ext.app.BaseController": {
      "idx": 129,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Controller": {
      "idx": 187,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventBus": {
      "idx": 127,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventDomain": {
      "idx": 89,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Profile": {
      "idx": 191,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Util": {
      "idx": 130,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewController": {
      "idx": 193,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewModel": {
      "idx": 216,
      "alias": [
        "viewmodel.default"
      ],
      "alternates": []
    },
    "Ext.app.bind.AbstractStub": {
      "idx": 207,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.BaseBinding": {
      "idx": 205,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Binding": {
      "idx": 206,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Formula": {
      "idx": 212,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.LinkStub": {
      "idx": 209,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Multi": {
      "idx": 211,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.RootStub": {
      "idx": 210,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Stub": {
      "idx": 208,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Template": {
      "idx": 213,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.TemplateBinding": {
      "idx": 214,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentDetail": {
      "idx": 409,
      "alias": [
        "widget.bindinspector-componentdetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentList": {
      "idx": 440,
      "alias": [
        "widget.bindinspector-componentlist"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Container": {
      "idx": 458,
      "alias": [
        "widget.bindinspector-container"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Environment": {
      "idx": 455,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Inspector": {
      "idx": 466,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Util": {
      "idx": 408,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ViewModelDetail": {
      "idx": 456,
      "alias": [
        "widget.bindinspector-viewmodeldetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.noconflict.BaseModel": {
      "idx": 457,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Component": {
      "idx": 90,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Controller": {
      "idx": 217,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Direct": {
      "idx": 220,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Global": {
      "idx": 128,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Store": {
      "idx": 182,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.View": {
      "idx": 192,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Queue": {
      "idx": 183,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Route": {
      "idx": 184,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Router": {
      "idx": 186,
      "alias": [],
      "alternates": []
    },
    "Ext.button.Button": {
      "idx": 448,
      "alias": [
        "widget.button"
      ],
      "alternates": [
        "Ext.Button"
      ]
    },
    "Ext.button.Cycle": {
      "idx": 468,
      "alias": [
        "widget.cycle"
      ],
      "alternates": [
        "Ext.CycleButton"
      ]
    },
    "Ext.button.Manager": {
      "idx": 446,
      "alias": [],
      "alternates": [
        "Ext.ButtonToggleManager"
      ]
    },
    "Ext.button.Segmented": {
      "idx": 469,
      "alias": [
        "widget.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.button.Split": {
      "idx": 467,
      "alias": [
        "widget.splitbutton"
      ],
      "alternates": [
        "Ext.SplitButton"
      ]
    },
    "Ext.container.ButtonGroup": {
      "idx": 472,
      "alias": [
        "widget.buttongroup"
      ],
      "alternates": [
        "Ext.ButtonGroup"
      ]
    },
    "Ext.container.Container": {
      "idx": 336,
      "alias": [
        "widget.container"
      ],
      "alternates": [
        "Ext.Container",
        "Ext.AbstractContainer"
      ]
    },
    "Ext.container.DockingContainer": {
      "idx": 383,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Monitor": {
      "idx": 473,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Viewport": {
      "idx": 476,
      "alias": [
        "widget.viewport"
      ],
      "alternates": [
        "Ext.Viewport"
      ]
    },
    "Ext.dashboard.Column": {
      "idx": 479,
      "alias": [
        "widget.dashboard-column"
      ],
      "alternates": []
    },
    "Ext.dashboard.Dashboard": {
      "idx": 489,
      "alias": [
        "widget.dashboard"
      ],
      "alternates": []
    },
    "Ext.dashboard.DropZone": {
      "idx": 487,
      "alias": [],
      "alternates": []
    },
    "Ext.dashboard.Panel": {
      "idx": 478,
      "alias": [
        "widget.dashboard-panel"
      ],
      "alternates": []
    },
    "Ext.dashboard.Part": {
      "idx": 488,
      "alias": [
        "part.part"
      ],
      "alternates": []
    },
    "Ext.data.AbstractStore": {
      "idx": 143,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ArrayStore": {
      "idx": 180,
      "alias": [
        "store.array"
      ],
      "alternates": [
        "Ext.data.SimpleStore"
      ]
    },
    "Ext.data.Batch": {
      "idx": 196,
      "alias": [],
      "alternates": []
    },
    "Ext.data.BufferedStore": {
      "idx": 222,
      "alias": [
        "store.buffered"
      ],
      "alternates": []
    },
    "Ext.data.ChainedStore": {
      "idx": 215,
      "alias": [
        "store.chained"
      ],
      "alternates": []
    },
    "Ext.data.Connection": {
      "idx": 8,
      "alias": [],
      "alternates": []
    },
    "Ext.data.DirectStore": {
      "idx": 224,
      "alias": [
        "store.direct"
      ],
      "alternates": []
    },
    "Ext.data.Error": {
      "idx": 144,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ErrorCollection": {
      "idx": 145,
      "alias": [],
      "alternates": [
        "Ext.data.Errors"
      ]
    },
    "Ext.data.JsonP": {
      "idx": 225,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonPStore": {
      "idx": 227,
      "alias": [
        "store.jsonp"
      ],
      "alternates": []
    },
    "Ext.data.JsonStore": {
      "idx": 228,
      "alias": [
        "store.json"
      ],
      "alternates": []
    },
    "Ext.data.LocalStore": {
      "idx": 169,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Model": {
      "idx": 161,
      "alias": [],
      "alternates": [
        "Ext.data.Record"
      ]
    },
    "Ext.data.ModelManager": {
      "idx": 229,
      "alias": [],
      "alternates": [
        "Ext.ModelMgr"
      ]
    },
    "Ext.data.NodeInterface": {
      "idx": 230,
      "alias": [],
      "alternates": []
    },
    "Ext.data.NodeStore": {
      "idx": 231,
      "alias": [
        "store.node"
      ],
      "alternates": []
    },
    "Ext.data.PageMap": {
      "idx": 221,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ProxyStore": {
      "idx": 168,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Request": {
      "idx": 232,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ResultSet": {
      "idx": 162,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Session": {
      "idx": 203,
      "alias": [],
      "alternates": []
    },
    "Ext.data.SortTypes": {
      "idx": 151,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Store": {
      "idx": 178,
      "alias": [
        "store.store"
      ],
      "alternates": []
    },
    "Ext.data.StoreManager": {
      "idx": 181,
      "alias": [],
      "alternates": [
        "Ext.StoreMgr",
        "Ext.data.StoreMgr",
        "Ext.StoreManager"
      ]
    },
    "Ext.data.TreeModel": {
      "idx": 234,
      "alias": [],
      "alternates": []
    },
    "Ext.data.TreeStore": {
      "idx": 235,
      "alias": [
        "store.tree"
      ],
      "alternates": []
    },
    "Ext.data.Types": {
      "idx": 236,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Validation": {
      "idx": 237,
      "alias": [],
      "alternates": []
    },
    "Ext.data.XmlStore": {
      "idx": 243,
      "alias": [
        "store.xml"
      ],
      "alternates": []
    },
    "Ext.data.field.Boolean": {
      "idx": 154,
      "alias": [
        "data.field.bool",
        "data.field.boolean"
      ],
      "alternates": []
    },
    "Ext.data.field.Date": {
      "idx": 155,
      "alias": [
        "data.field.date"
      ],
      "alternates": []
    },
    "Ext.data.field.Field": {
      "idx": 153,
      "alias": [
        "data.field.auto"
      ],
      "alternates": [
        "Ext.data.Field"
      ]
    },
    "Ext.data.field.Integer": {
      "idx": 156,
      "alias": [
        "data.field.int",
        "data.field.integer"
      ],
      "alternates": []
    },
    "Ext.data.field.Number": {
      "idx": 157,
      "alias": [
        "data.field.float",
        "data.field.number"
      ],
      "alternates": []
    },
    "Ext.data.field.String": {
      "idx": 158,
      "alias": [
        "data.field.string"
      ],
      "alternates": []
    },
    "Ext.data.flash.BinaryXhr": {
      "idx": 7,
      "alias": [],
      "alternates": []
    },
    "Ext.data.identifier.Generator": {
      "idx": 159,
      "alias": [
        "data.identifier.default"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Negative": {
      "idx": 244,
      "alias": [
        "data.identifier.negative"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Sequential": {
      "idx": 160,
      "alias": [
        "data.identifier.sequential"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Uuid": {
      "idx": 245,
      "alias": [
        "data.identifier.uuid"
      ],
      "alternates": []
    },
    "Ext.data.matrix.Matrix": {
      "idx": 199,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Side": {
      "idx": 198,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Slice": {
      "idx": 197,
      "alias": [],
      "alternates": []
    },
    "Ext.data.operation.Create": {
      "idx": 147,
      "alias": [
        "data.operation.create"
      ],
      "alternates": []
    },
    "Ext.data.operation.Destroy": {
      "idx": 148,
      "alias": [
        "data.operation.destroy"
      ],
      "alternates": []
    },
    "Ext.data.operation.Operation": {
      "idx": 146,
      "alias": [],
      "alternates": [
        "Ext.data.Operation"
      ]
    },
    "Ext.data.operation.Read": {
      "idx": 149,
      "alias": [
        "data.operation.read"
      ],
      "alternates": []
    },
    "Ext.data.operation.Update": {
      "idx": 150,
      "alias": [
        "data.operation.update"
      ],
      "alternates": []
    },
    "Ext.data.proxy.Ajax": {
      "idx": 171,
      "alias": [
        "proxy.ajax"
      ],
      "alternates": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
      ]
    },
    "Ext.data.proxy.Client": {
      "idx": 166,
      "alias": [],
      "alternates": [
        "Ext.data.ClientProxy"
      ]
    },
    "Ext.data.proxy.Direct": {
      "idx": 223,
      "alias": [
        "proxy.direct"
      ],
      "alternates": [
        "Ext.data.DirectProxy"
      ]
    },
    "Ext.data.proxy.JsonP": {
      "idx": 226,
      "alias": [
        "proxy.jsonp",
        "proxy.scripttag"
      ],
      "alternates": [
        "Ext.data.ScriptTagProxy"
      ]
    },
    "Ext.data.proxy.LocalStorage": {
      "idx": 247,
      "alias": [
        "proxy.localstorage"
      ],
      "alternates": [
        "Ext.data.LocalStorageProxy"
      ]
    },
    "Ext.data.proxy.Memory": {
      "idx": 167,
      "alias": [
        "proxy.memory"
      ],
      "alternates": [
        "Ext.data.MemoryProxy"
      ]
    },
    "Ext.data.proxy.Proxy": {
      "idx": 165,
      "alias": [
        "proxy.proxy"
      ],
      "alternates": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
      ]
    },
    "Ext.data.proxy.Rest": {
      "idx": 248,
      "alias": [
        "proxy.rest"
      ],
      "alternates": [
        "Ext.data.RestProxy"
      ]
    },
    "Ext.data.proxy.Server": {
      "idx": 170,
      "alias": [
        "proxy.server"
      ],
      "alternates": [
        "Ext.data.ServerProxy"
      ]
    },
    "Ext.data.proxy.SessionStorage": {
      "idx": 249,
      "alias": [
        "proxy.sessionstorage"
      ],
      "alternates": [
        "Ext.data.SessionStorageProxy"
      ]
    },
    "Ext.data.proxy.WebStorage": {
      "idx": 246,
      "alias": [],
      "alternates": [
        "Ext.data.WebStorageProxy"
      ]
    },
    "Ext.data.reader.Array": {
      "idx": 179,
      "alias": [
        "reader.array"
      ],
      "alternates": [
        "Ext.data.ArrayReader"
      ]
    },
    "Ext.data.reader.Json": {
      "idx": 172,
      "alias": [
        "reader.json"
      ],
      "alternates": [
        "Ext.data.JsonReader"
      ]
    },
    "Ext.data.reader.Reader": {
      "idx": 163,
      "alias": [
        "reader.base"
      ],
      "alternates": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
      ]
    },
    "Ext.data.reader.Xml": {
      "idx": 241,
      "alias": [
        "reader.xml"
      ],
      "alternates": [
        "Ext.data.XmlReader"
      ]
    },
    "Ext.data.schema.Association": {
      "idx": 136,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToMany": {
      "idx": 139,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToOne": {
      "idx": 138,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Namer": {
      "idx": 141,
      "alias": [
        "namer.default"
      ],
      "alternates": []
    },
    "Ext.data.schema.OneToOne": {
      "idx": 137,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Role": {
      "idx": 135,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Schema": {
      "idx": 142,
      "alias": [
        "schema.default"
      ],
      "alternates": []
    },
    "Ext.data.session.BatchVisitor": {
      "idx": 202,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChangesVisitor": {
      "idx": 200,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChildChangesVisitor": {
      "idx": 201,
      "alias": [],
      "alternates": []
    },
    "Ext.data.validator.Bound": {
      "idx": 250,
      "alias": [
        "data.validator.bound"
      ],
      "alternates": []
    },
    "Ext.data.validator.Email": {
      "idx": 252,
      "alias": [
        "data.validator.email"
      ],
      "alternates": []
    },
    "Ext.data.validator.Exclusion": {
      "idx": 254,
      "alias": [
        "data.validator.exclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Format": {
      "idx": 251,
      "alias": [
        "data.validator.format"
      ],
      "alternates": []
    },
    "Ext.data.validator.Inclusion": {
      "idx": 255,
      "alias": [
        "data.validator.inclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Length": {
      "idx": 256,
      "alias": [
        "data.validator.length"
      ],
      "alternates": []
    },
    "Ext.data.validator.List": {
      "idx": 253,
      "alias": [
        "data.validator.list"
      ],
      "alternates": []
    },
    "Ext.data.validator.Presence": {
      "idx": 257,
      "alias": [
        "data.validator.presence"
      ],
      "alternates": []
    },
    "Ext.data.validator.Range": {
      "idx": 258,
      "alias": [
        "data.validator.range"
      ],
      "alternates": []
    },
    "Ext.data.validator.Validator": {
      "idx": 152,
      "alias": [
        "data.validator.base"
      ],
      "alternates": []
    },
    "Ext.data.writer.Json": {
      "idx": 173,
      "alias": [
        "writer.json"
      ],
      "alternates": [
        "Ext.data.JsonWriter"
      ]
    },
    "Ext.data.writer.Writer": {
      "idx": 164,
      "alias": [
        "writer.base"
      ],
      "alternates": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
      ]
    },
    "Ext.data.writer.Xml": {
      "idx": 242,
      "alias": [
        "writer.xml"
      ],
      "alternates": [
        "Ext.data.XmlWriter"
      ]
    },
    "Ext.dd.DD": {
      "idx": 373,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDProxy": {
      "idx": 375,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDTarget": {
      "idx": 420,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDrop": {
      "idx": 372,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDropManager": {
      "idx": 359,
      "alias": [],
      "alternates": [
        "Ext.dd.DragDropMgr",
        "Ext.dd.DDM"
      ]
    },
    "Ext.dd.DragSource": {
      "idx": 377,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragTracker": {
      "idx": 415,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragZone": {
      "idx": 418,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropTarget": {
      "idx": 422,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropZone": {
      "idx": 424,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.Registry": {
      "idx": 423,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.ScrollManager": {
      "idx": 421,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.StatusProxy": {
      "idx": 376,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.Event": {
      "idx": 259,
      "alias": [
        "direct.event"
      ],
      "alternates": []
    },
    "Ext.direct.ExceptionEvent": {
      "idx": 261,
      "alias": [
        "direct.exception"
      ],
      "alternates": []
    },
    "Ext.direct.JsonProvider": {
      "idx": 262,
      "alias": [
        "direct.jsonprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Manager": {
      "idx": 218,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.PollingProvider": {
      "idx": 263,
      "alias": [
        "direct.pollingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Provider": {
      "idx": 219,
      "alias": [
        "direct.provider"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingEvent": {
      "idx": 260,
      "alias": [
        "direct.rpc"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingMethod": {
      "idx": 264,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.RemotingProvider": {
      "idx": 266,
      "alias": [
        "direct.remotingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Transaction": {
      "idx": 265,
      "alias": [
        "direct.transaction"
      ],
      "alternates": [
        "Ext.Direct.Transaction"
      ]
    },
    "Ext.dom.ButtonElement": {
      "idx": 445,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.CompositeElement": {
      "idx": 92,
      "alias": [],
      "alternates": [
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.CompositeElementLite": {
      "idx": 74,
      "alias": [],
      "alternates": [
        "Ext.CompositeElementLite"
      ]
    },
    "Ext.dom.Element": {
      "idx": 48,
      "alias": [],
      "alternates": [
        "Ext.Element"
      ]
    },
    "Ext.dom.ElementEvent": {
      "idx": 22,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Fly": {
      "idx": 73,
      "alias": [],
      "alternates": [
        "Ext.dom.Element.Fly"
      ]
    },
    "Ext.dom.GarbageCollector": {
      "idx": 267,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Helper": {
      "idx": 238,
      "alias": [],
      "alternates": [
        "Ext.DomHelper",
        "Ext.core.DomHelper"
      ]
    },
    "Ext.dom.Layer": {
      "idx": 490,
      "alias": [],
      "alternates": [
        "Ext.Layer"
      ]
    },
    "Ext.dom.Query": {
      "idx": 240,
      "alias": [],
      "alternates": [
        "Ext.core.DomQuery",
        "Ext.DomQuery"
      ]
    },
    "Ext.dom.Shadow": {
      "idx": 20,
      "alias": [],
      "alternates": [
        "Ext.Shadow"
      ]
    },
    "Ext.dom.Shim": {
      "idx": 21,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Underlay": {
      "idx": 19,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.UnderlayPool": {
      "idx": 18,
      "alias": [],
      "alternates": []
    },
    "Ext.event.Event": {
      "idx": 27,
      "alias": [],
      "alternates": [
        "Ext.EventObjectImpl"
      ]
    },
    "Ext.event.gesture.DoubleTap": {
      "idx": 270,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Drag": {
      "idx": 271,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.EdgeSwipe": {
      "idx": 273,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.LongPress": {
      "idx": 274,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.MultiTouch": {
      "idx": 275,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Pinch": {
      "idx": 276,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Recognizer": {
      "idx": 268,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Rotate": {
      "idx": 277,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.SingleTouch": {
      "idx": 269,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Swipe": {
      "idx": 272,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Tap": {
      "idx": 278,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Dom": {
      "idx": 30,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementPaint": {
      "idx": 47,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementSize": {
      "idx": 42,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Focus": {
      "idx": 34,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Gesture": {
      "idx": 32,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.MouseEnterLeave": {
      "idx": 492,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Publisher": {
      "idx": 23,
      "alias": [],
      "alternates": []
    },
    "Ext.flash.Component": {
      "idx": 493,
      "alias": [
        "widget.flash"
      ],
      "alternates": [
        "Ext.FlashComponent"
      ]
    },
    "Ext.form.Basic": {
      "idx": 499,
      "alias": [],
      "alternates": [
        "Ext.form.BasicForm"
      ]
    },
    "Ext.form.CheckboxGroup": {
      "idx": 504,
      "alias": [
        "widget.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.form.CheckboxManager": {
      "idx": 406,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldAncestor": {
      "idx": 500,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldContainer": {
      "idx": 502,
      "alias": [
        "widget.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.form.FieldSet": {
      "idx": 505,
      "alias": [
        "widget.fieldset"
      ],
      "alternates": []
    },
    "Ext.form.Label": {
      "idx": 506,
      "alias": [
        "widget.label"
      ],
      "alternates": []
    },
    "Ext.form.Labelable": {
      "idx": 386,
      "alias": [],
      "alternates": []
    },
    "Ext.form.Panel": {
      "idx": 507,
      "alias": [
        "widget.form"
      ],
      "alternates": [
        "Ext.FormPanel",
        "Ext.form.FormPanel"
      ]
    },
    "Ext.form.RadioGroup": {
      "idx": 510,
      "alias": [
        "widget.radiogroup"
      ],
      "alternates": []
    },
    "Ext.form.RadioManager": {
      "idx": 508,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.Action": {
      "idx": 494,
      "alias": [],
      "alternates": [
        "Ext.form.Action"
      ]
    },
    "Ext.form.action.DirectAction": {
      "idx": 511,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.DirectLoad": {
      "idx": 512,
      "alias": [
        "formaction.directload"
      ],
      "alternates": [
        "Ext.form.Action.DirectLoad"
      ]
    },
    "Ext.form.action.DirectSubmit": {
      "idx": 513,
      "alias": [
        "formaction.directsubmit"
      ],
      "alternates": [
        "Ext.form.Action.DirectSubmit"
      ]
    },
    "Ext.form.action.Load": {
      "idx": 495,
      "alias": [
        "formaction.load"
      ],
      "alternates": [
        "Ext.form.Action.Load"
      ]
    },
    "Ext.form.action.StandardSubmit": {
      "idx": 514,
      "alias": [
        "formaction.standardsubmit"
      ],
      "alternates": []
    },
    "Ext.form.action.Submit": {
      "idx": 496,
      "alias": [
        "formaction.submit"
      ],
      "alternates": [
        "Ext.form.Action.Submit"
      ]
    },
    "Ext.form.field.Base": {
      "idx": 389,
      "alias": [
        "widget.field"
      ],
      "alternates": [
        "Ext.form.Field",
        "Ext.form.BaseField"
      ]
    },
    "Ext.form.field.Checkbox": {
      "idx": 407,
      "alias": [
        "widget.checkbox",
        "widget.checkboxfield"
      ],
      "alternates": [
        "Ext.form.Checkbox"
      ]
    },
    "Ext.form.field.ComboBox": {
      "idx": 525,
      "alias": [
        "widget.combo",
        "widget.combobox"
      ],
      "alternates": [
        "Ext.form.ComboBox"
      ]
    },
    "Ext.form.field.Date": {
      "idx": 528,
      "alias": [
        "widget.datefield"
      ],
      "alternates": [
        "Ext.form.DateField",
        "Ext.form.Date"
      ]
    },
    "Ext.form.field.Display": {
      "idx": 390,
      "alias": [
        "widget.displayfield"
      ],
      "alternates": [
        "Ext.form.DisplayField",
        "Ext.form.Display"
      ]
    },
    "Ext.form.field.Field": {
      "idx": 388,
      "alias": [],
      "alternates": []
    },
    "Ext.form.field.File": {
      "idx": 532,
      "alias": [
        "widget.filefield",
        "widget.fileuploadfield"
      ],
      "alternates": [
        "Ext.form.FileUploadField",
        "Ext.ux.form.FileUploadField",
        "Ext.form.File"
      ]
    },
    "Ext.form.field.FileButton": {
      "idx": 529,
      "alias": [
        "widget.filebutton"
      ],
      "alternates": []
    },
    "Ext.form.field.Hidden": {
      "idx": 534,
      "alias": [
        "widget.hidden",
        "widget.hiddenfield"
      ],
      "alternates": [
        "Ext.form.Hidden"
      ]
    },
    "Ext.form.field.HtmlEditor": {
      "idx": 540,
      "alias": [
        "widget.htmleditor"
      ],
      "alternates": [
        "Ext.form.HtmlEditor"
      ]
    },
    "Ext.form.field.Number": {
      "idx": 522,
      "alias": [
        "widget.numberfield"
      ],
      "alternates": [
        "Ext.form.NumberField",
        "Ext.form.Number"
      ]
    },
    "Ext.form.field.Picker": {
      "idx": 515,
      "alias": [
        "widget.pickerfield"
      ],
      "alternates": [
        "Ext.form.Picker"
      ]
    },
    "Ext.form.field.Radio": {
      "idx": 509,
      "alias": [
        "widget.radio",
        "widget.radiofield"
      ],
      "alternates": [
        "Ext.form.Radio"
      ]
    },
    "Ext.form.field.Spinner": {
      "idx": 521,
      "alias": [
        "widget.spinnerfield"
      ],
      "alternates": [
        "Ext.form.Spinner"
      ]
    },
    "Ext.form.field.Tag": {
      "idx": 541,
      "alias": [
        "widget.tagfield"
      ],
      "alternates": []
    },
    "Ext.form.field.Text": {
      "idx": 439,
      "alias": [
        "widget.textfield"
      ],
      "alternates": [
        "Ext.form.TextField",
        "Ext.form.Text"
      ]
    },
    "Ext.form.field.TextArea": {
      "idx": 497,
      "alias": [
        "widget.textarea",
        "widget.textareafield"
      ],
      "alternates": [
        "Ext.form.TextArea"
      ]
    },
    "Ext.form.field.Time": {
      "idx": 543,
      "alias": [
        "widget.timefield"
      ],
      "alternates": [
        "Ext.form.TimeField",
        "Ext.form.Time"
      ]
    },
    "Ext.form.field.Trigger": {
      "idx": 544,
      "alias": [
        "widget.trigger",
        "widget.triggerfield"
      ],
      "alternates": [
        "Ext.form.TriggerField",
        "Ext.form.TwinTriggerField",
        "Ext.form.Trigger"
      ]
    },
    "Ext.form.field.VTypes": {
      "idx": 437,
      "alias": [],
      "alternates": [
        "Ext.form.VTypes"
      ]
    },
    "Ext.form.trigger.Component": {
      "idx": 531,
      "alias": [
        "trigger.component"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Spinner": {
      "idx": 520,
      "alias": [
        "trigger.spinner"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Trigger": {
      "idx": 438,
      "alias": [
        "trigger.trigger"
      ],
      "alternates": []
    },
    "Ext.fx.Anim": {
      "idx": 71,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animation": {
      "idx": 288,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animator": {
      "idx": 66,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.CubicBezier": {
      "idx": 67,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.DrawPath": {
      "idx": 69,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Easing": {
      "idx": 68,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Manager": {
      "idx": 65,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.PropertyHandler": {
      "idx": 70,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Queue": {
      "idx": 64,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Runner": {
      "idx": 291,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.State": {
      "idx": 279,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Abstract": {
      "idx": 280,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Cube": {
      "idx": 292,
      "alias": [
        "animation.cube"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Fade": {
      "idx": 283,
      "alias": [
        "animation.fade",
        "animation.fadeIn"
      ],
      "alternates": [
        "Ext.fx.animation.FadeIn"
      ]
    },
    "Ext.fx.animation.FadeOut": {
      "idx": 284,
      "alias": [
        "animation.fadeOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Flip": {
      "idx": 285,
      "alias": [
        "animation.flip"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Pop": {
      "idx": 286,
      "alias": [
        "animation.pop",
        "animation.popIn"
      ],
      "alternates": [
        "Ext.fx.animation.PopIn"
      ]
    },
    "Ext.fx.animation.PopOut": {
      "idx": 287,
      "alias": [
        "animation.popOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Slide": {
      "idx": 281,
      "alias": [
        "animation.slide",
        "animation.slideIn"
      ],
      "alternates": [
        "Ext.fx.animation.SlideIn"
      ]
    },
    "Ext.fx.animation.SlideOut": {
      "idx": 282,
      "alias": [
        "animation.slideOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Wipe": {
      "idx": 293,
      "alias": [],
      "alternates": [
        "Ext.fx.animation.WipeIn"
      ]
    },
    "Ext.fx.animation.WipeOut": {
      "idx": 294,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Abstract": {
      "idx": 96,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Bounce": {
      "idx": 98,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.BoundMomentum": {
      "idx": 99,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.EaseIn": {
      "idx": 295,
      "alias": [
        "easing.ease-in"
      ],
      "alternates": []
    },
    "Ext.fx.easing.EaseOut": {
      "idx": 101,
      "alias": [
        "easing.ease-out"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Easing": {
      "idx": 296,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Linear": {
      "idx": 100,
      "alias": [
        "easing.linear"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Momentum": {
      "idx": 97,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.Card": {
      "idx": 306,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Abstract": {
      "idx": 297,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Cover": {
      "idx": 300,
      "alias": [
        "fx.layout.card.cover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Cube": {
      "idx": 307,
      "alias": [
        "fx.layout.card.cube"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Fade": {
      "idx": 302,
      "alias": [
        "fx.layout.card.fade"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Flip": {
      "idx": 303,
      "alias": [
        "fx.layout.card.flip"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Pop": {
      "idx": 304,
      "alias": [
        "fx.layout.card.pop"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Reveal": {
      "idx": 301,
      "alias": [
        "fx.layout.card.reveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Scroll": {
      "idx": 305,
      "alias": [
        "fx.layout.card.scroll"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollCover": {
      "idx": 308,
      "alias": [
        "fx.layout.card.scrollcover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollReveal": {
      "idx": 309,
      "alias": [
        "fx.layout.card.scrollreveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Slide": {
      "idx": 299,
      "alias": [
        "fx.layout.card.slide"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Style": {
      "idx": 298,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.Css": {
      "idx": 289,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssAnimation": {
      "idx": 310,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssTransition": {
      "idx": 290,
      "alias": [],
      "alternates": [
        "Ext.Animator"
      ]
    },
    "Ext.fx.target.Component": {
      "idx": 63,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElement": {
      "idx": 59,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElementCSS": {
      "idx": 60,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeSprite": {
      "idx": 62,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Element": {
      "idx": 57,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.ElementCSS": {
      "idx": 58,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Sprite": {
      "idx": 61,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Target": {
      "idx": 56,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellContext": {
      "idx": 399,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellEditor": {
      "idx": 545,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ColumnComponentLayout": {
      "idx": 428,
      "alias": [
        "layout.columncomponent"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnLayout": {
      "idx": 413,
      "alias": [
        "layout.gridcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnManager": {
      "idx": 547,
      "alias": [],
      "alternates": [
        "Ext.grid.ColumnModel"
      ]
    },
    "Ext.grid.NavigationModel": {
      "idx": 433,
      "alias": [
        "view.navigation.grid"
      ],
      "alternates": []
    },
    "Ext.grid.Panel": {
      "idx": 405,
      "alias": [
        "widget.grid",
        "widget.gridpanel"
      ],
      "alternates": [
        "Ext.list.ListView",
        "Ext.ListView",
        "Ext.grid.GridPanel"
      ]
    },
    "Ext.grid.RowEditor": {
      "idx": 549,
      "alias": [
        "widget.roweditor"
      ],
      "alternates": []
    },
    "Ext.grid.RowEditorButtons": {
      "idx": 548,
      "alias": [
        "widget.roweditorbuttons"
      ],
      "alternates": []
    },
    "Ext.grid.Scroller": {
      "idx": 550,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ViewDropZone": {
      "idx": 552,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.column.Action": {
      "idx": 553,
      "alias": [
        "widget.actioncolumn"
      ],
      "alternates": [
        "Ext.grid.ActionColumn"
      ]
    },
    "Ext.grid.column.Boolean": {
      "idx": 554,
      "alias": [
        "widget.booleancolumn"
      ],
      "alternates": [
        "Ext.grid.BooleanColumn"
      ]
    },
    "Ext.grid.column.Check": {
      "idx": 555,
      "alias": [
        "widget.checkcolumn"
      ],
      "alternates": [
        "Ext.ux.CheckColumn",
        "Ext.grid.column.CheckColumn"
      ]
    },
    "Ext.grid.column.Column": {
      "idx": 429,
      "alias": [
        "widget.gridcolumn"
      ],
      "alternates": [
        "Ext.grid.Column"
      ]
    },
    "Ext.grid.column.Date": {
      "idx": 556,
      "alias": [
        "widget.datecolumn"
      ],
      "alternates": [
        "Ext.grid.DateColumn"
      ]
    },
    "Ext.grid.column.Number": {
      "idx": 557,
      "alias": [
        "widget.numbercolumn"
      ],
      "alternates": [
        "Ext.grid.NumberColumn"
      ]
    },
    "Ext.grid.column.RowNumberer": {
      "idx": 558,
      "alias": [
        "widget.rownumberer"
      ],
      "alternates": [
        "Ext.grid.RowNumberer"
      ]
    },
    "Ext.grid.column.Template": {
      "idx": 559,
      "alias": [
        "widget.templatecolumn"
      ],
      "alternates": [
        "Ext.grid.TemplateColumn"
      ]
    },
    "Ext.grid.column.Widget": {
      "idx": 560,
      "alias": [
        "widget.widgetcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.feature.AbstractSummary": {
      "idx": 562,
      "alias": [
        "feature.abstractsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Feature": {
      "idx": 561,
      "alias": [
        "feature.feature"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupStore": {
      "idx": 563,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.feature.Grouping": {
      "idx": 564,
      "alias": [
        "feature.grouping"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupingSummary": {
      "idx": 565,
      "alias": [
        "feature.groupingsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.RowBody": {
      "idx": 566,
      "alias": [
        "feature.rowbody"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Summary": {
      "idx": 567,
      "alias": [
        "feature.summary"
      ],
      "alternates": []
    },
    "Ext.grid.filters.Filters": {
      "idx": 580,
      "alias": [
        "plugin.gridfilters"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Base": {
      "idx": 572,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.Boolean": {
      "idx": 574,
      "alias": [
        "grid.filter.boolean"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Date": {
      "idx": 576,
      "alias": [
        "grid.filter.date"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.List": {
      "idx": 577,
      "alias": [
        "grid.filter.list"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Number": {
      "idx": 578,
      "alias": [
        "grid.filter.number",
        "grid.filter.numeric"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.SingleFilter": {
      "idx": 573,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.String": {
      "idx": 579,
      "alias": [
        "grid.filter.string"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.TriFilter": {
      "idx": 575,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.Container": {
      "idx": 427,
      "alias": [
        "widget.headercontainer"
      ],
      "alternates": []
    },
    "Ext.grid.header.DragZone": {
      "idx": 419,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.DropZone": {
      "idx": 425,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.HeaderContainer": {
      "idx": 581,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.Lockable": {
      "idx": 583,
      "alias": [],
      "alternates": [
        "Ext.grid.Lockable"
      ]
    },
    "Ext.grid.locking.RowSynchronizer": {
      "idx": 401,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.View": {
      "idx": 582,
      "alias": [],
      "alternates": [
        "Ext.grid.LockingView"
      ]
    },
    "Ext.grid.plugin.BufferedRenderer": {
      "idx": 584,
      "alias": [
        "plugin.bufferedrenderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.CellEditing": {
      "idx": 586,
      "alias": [
        "plugin.cellediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Clipboard": {
      "idx": 588,
      "alias": [
        "plugin.clipboard"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.DragDrop": {
      "idx": 589,
      "alias": [
        "plugin.gridviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Editing": {
      "idx": 585,
      "alias": [
        "editing.editing"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderReorderer": {
      "idx": 426,
      "alias": [
        "plugin.gridheaderreorderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderResizer": {
      "idx": 416,
      "alias": [
        "plugin.gridheaderresizer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowEditing": {
      "idx": 590,
      "alias": [
        "plugin.rowediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowExpander": {
      "idx": 592,
      "alias": [
        "plugin.rowexpander"
      ],
      "alternates": []
    },
    "Ext.grid.property.Grid": {
      "idx": 593,
      "alias": [
        "widget.propertygrid"
      ],
      "alternates": [
        "Ext.grid.PropertyGrid"
      ]
    },
    "Ext.grid.property.HeaderContainer": {
      "idx": 594,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyColumnModel"
      ]
    },
    "Ext.grid.property.Property": {
      "idx": 595,
      "alias": [],
      "alternates": [
        "Ext.PropGridProperty"
      ]
    },
    "Ext.grid.property.Reader": {
      "idx": 596,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.property.Store": {
      "idx": 597,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyStore"
      ]
    },
    "Ext.grid.selection.Cells": {
      "idx": 599,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Columns": {
      "idx": 600,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Rows": {
      "idx": 601,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Selection": {
      "idx": 598,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.SpreadsheetModel": {
      "idx": 602,
      "alias": [
        "selection.spreadsheet"
      ],
      "alternates": []
    },
    "Ext.layout.Context": {
      "idx": 606,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.ContextItem": {
      "idx": 604,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Layout": {
      "idx": 332,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.SizeModel": {
      "idx": 331,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Auto": {
      "idx": 345,
      "alias": [
        "layout.autocomponent"
      ],
      "alternates": []
    },
    "Ext.layout.component.Body": {
      "idx": 451,
      "alias": [
        "layout.body"
      ],
      "alternates": []
    },
    "Ext.layout.component.BoundList": {
      "idx": 517,
      "alias": [
        "layout.boundlist"
      ],
      "alternates": []
    },
    "Ext.layout.component.Component": {
      "idx": 344,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Dock": {
      "idx": 380,
      "alias": [
        "layout.dock"
      ],
      "alternates": [
        "Ext.layout.component.AbstractDock"
      ]
    },
    "Ext.layout.component.FieldSet": {
      "idx": 608,
      "alias": [
        "layout.fieldset"
      ],
      "alternates": []
    },
    "Ext.layout.component.ProgressBar": {
      "idx": 346,
      "alias": [
        "layout.progressbar"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.FieldContainer": {
      "idx": 501,
      "alias": [
        "layout.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.HtmlEditor": {
      "idx": 536,
      "alias": [
        "layout.htmleditor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Absolute": {
      "idx": 609,
      "alias": [
        "layout.absolute"
      ],
      "alternates": [
        "Ext.layout.AbsoluteLayout"
      ]
    },
    "Ext.layout.container.Accordion": {
      "idx": 611,
      "alias": [
        "layout.accordion"
      ],
      "alternates": [
        "Ext.layout.AccordionLayout"
      ]
    },
    "Ext.layout.container.Anchor": {
      "idx": 477,
      "alias": [
        "layout.anchor"
      ],
      "alternates": [
        "Ext.layout.AnchorLayout"
      ]
    },
    "Ext.layout.container.Auto": {
      "idx": 334,
      "alias": [
        "layout.auto",
        "layout.autocontainer"
      ],
      "alternates": []
    },
    "Ext.layout.container.Border": {
      "idx": 442,
      "alias": [
        "layout.border"
      ],
      "alternates": [
        "Ext.layout.BorderLayout"
      ]
    },
    "Ext.layout.container.Box": {
      "idx": 361,
      "alias": [
        "layout.box"
      ],
      "alternates": [
        "Ext.layout.BoxLayout"
      ]
    },
    "Ext.layout.container.Card": {
      "idx": 444,
      "alias": [
        "layout.card"
      ],
      "alternates": [
        "Ext.layout.CardLayout"
      ]
    },
    "Ext.layout.container.Center": {
      "idx": 612,
      "alias": [
        "layout.center",
        "layout.ux.center"
      ],
      "alternates": [
        "Ext.ux.layout.Center"
      ]
    },
    "Ext.layout.container.CheckboxGroup": {
      "idx": 503,
      "alias": [
        "layout.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.layout.container.Column": {
      "idx": 480,
      "alias": [
        "layout.column"
      ],
      "alternates": [
        "Ext.layout.ColumnLayout"
      ]
    },
    "Ext.layout.container.ColumnSplitter": {
      "idx": 485,
      "alias": [
        "widget.columnsplitter"
      ],
      "alternates": []
    },
    "Ext.layout.container.ColumnSplitterTracker": {
      "idx": 484,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.Container": {
      "idx": 333,
      "alias": [
        "layout.container"
      ],
      "alternates": [
        "Ext.layout.ContainerLayout"
      ]
    },
    "Ext.layout.container.Dashboard": {
      "idx": 486,
      "alias": [
        "layout.dashboard"
      ],
      "alternates": []
    },
    "Ext.layout.container.Editor": {
      "idx": 337,
      "alias": [
        "layout.editor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Fit": {
      "idx": 391,
      "alias": [
        "layout.fit"
      ],
      "alternates": [
        "Ext.layout.FitLayout"
      ]
    },
    "Ext.layout.container.Form": {
      "idx": 613,
      "alias": [
        "layout.form"
      ],
      "alternates": [
        "Ext.layout.FormLayout"
      ]
    },
    "Ext.layout.container.HBox": {
      "idx": 363,
      "alias": [
        "layout.hbox"
      ],
      "alternates": [
        "Ext.layout.HBoxLayout"
      ]
    },
    "Ext.layout.container.SegmentedButton": {
      "idx": 614,
      "alias": [
        "layout.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.layout.container.Table": {
      "idx": 471,
      "alias": [
        "layout.table"
      ],
      "alternates": [
        "Ext.layout.TableLayout"
      ]
    },
    "Ext.layout.container.VBox": {
      "idx": 365,
      "alias": [
        "layout.vbox"
      ],
      "alternates": [
        "Ext.layout.VBoxLayout"
      ]
    },
    "Ext.layout.container.border.Region": {
      "idx": 124,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.boxOverflow.Menu": {
      "idx": 538,
      "alias": [
        "box.overflow.Menu",
        "box.overflow.menu"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Menu"
      ]
    },
    "Ext.layout.container.boxOverflow.None": {
      "idx": 355,
      "alias": [
        "box.overflow.None",
        "box.overflow.none"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.None"
      ]
    },
    "Ext.layout.container.boxOverflow.Scroller": {
      "idx": 357,
      "alias": [
        "box.overflow.Scroller",
        "box.overflow.scroller"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Scroller"
      ]
    },
    "Ext.menu.CheckItem": {
      "idx": 569,
      "alias": [
        "widget.menucheckitem"
      ],
      "alternates": []
    },
    "Ext.menu.ColorPicker": {
      "idx": 615,
      "alias": [
        "widget.colormenu"
      ],
      "alternates": []
    },
    "Ext.menu.DatePicker": {
      "idx": 616,
      "alias": [
        "widget.datemenu"
      ],
      "alternates": []
    },
    "Ext.menu.Item": {
      "idx": 568,
      "alias": [
        "widget.menuitem"
      ],
      "alternates": [
        "Ext.menu.TextItem"
      ]
    },
    "Ext.menu.Manager": {
      "idx": 447,
      "alias": [],
      "alternates": [
        "Ext.menu.MenuMgr"
      ]
    },
    "Ext.menu.Menu": {
      "idx": 571,
      "alias": [
        "widget.menu"
      ],
      "alternates": []
    },
    "Ext.menu.Separator": {
      "idx": 570,
      "alias": [
        "widget.menuseparator"
      ],
      "alternates": []
    },
    "Ext.mixin.Bindable": {
      "idx": 83,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Factoryable": {
      "idx": 93,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Hookable": {
      "idx": 311,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Identifiable": {
      "idx": 3,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Inheritable": {
      "idx": 82,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Mashup": {
      "idx": 312,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Observable": {
      "idx": 4,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Queryable": {
      "idx": 233,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Responsive": {
      "idx": 313,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Selectable": {
      "idx": 314,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Templatable": {
      "idx": 35,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Traversable": {
      "idx": 315,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.GlobalEvents": {
      "idx": 78,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.Widget": {
      "idx": 85,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.Application": {
      "idx": 190,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.domain.Component": {
      "idx": 126,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Element": {
      "idx": 75,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Helper": {
      "idx": 239,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.Event": {
      "idx": 28,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Dom": {
      "idx": 31,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Gesture": {
      "idx": 33,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.plugin.Abstract": {
      "idx": 319,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.util.Positionable": {
      "idx": 17,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Bar": {
      "idx": 349,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.DD": {
      "idx": 379,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Header": {
      "idx": 354,
      "alias": [
        "widget.header"
      ],
      "alternates": []
    },
    "Ext.panel.Panel": {
      "idx": 384,
      "alias": [
        "widget.panel"
      ],
      "alternates": [
        "Ext.Panel"
      ]
    },
    "Ext.panel.Pinnable": {
      "idx": 617,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Proxy": {
      "idx": 378,
      "alias": [],
      "alternates": [
        "Ext.dd.PanelProxy"
      ]
    },
    "Ext.panel.Table": {
      "idx": 392,
      "alias": [
        "widget.tablepanel"
      ],
      "alternates": []
    },
    "Ext.panel.Title": {
      "idx": 351,
      "alias": [
        "widget.title"
      ],
      "alternates": []
    },
    "Ext.panel.Tool": {
      "idx": 353,
      "alias": [
        "widget.tool"
      ],
      "alternates": []
    },
    "Ext.perf.Accumulator": {
      "idx": 316,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Monitor": {
      "idx": 317,
      "alias": [],
      "alternates": [
        "Ext.Perf"
      ]
    },
    "Ext.picker.Color": {
      "idx": 535,
      "alias": [
        "widget.colorpicker"
      ],
      "alternates": [
        "Ext.ColorPalette"
      ]
    },
    "Ext.picker.Date": {
      "idx": 527,
      "alias": [
        "widget.datepicker"
      ],
      "alternates": [
        "Ext.DatePicker"
      ]
    },
    "Ext.picker.Month": {
      "idx": 526,
      "alias": [
        "widget.monthpicker"
      ],
      "alternates": [
        "Ext.MonthPicker"
      ]
    },
    "Ext.picker.Time": {
      "idx": 542,
      "alias": [
        "widget.timepicker"
      ],
      "alternates": []
    },
    "Ext.plugin.Abstract": {
      "idx": 318,
      "alias": [],
      "alternates": [
        "Ext.AbstractPlugin"
      ]
    },
    "Ext.plugin.AbstractClipboard": {
      "idx": 587,
      "alias": [],
      "alternates": []
    },
    "Ext.plugin.LazyItems": {
      "idx": 320,
      "alias": [
        "plugin.lazyitems"
      ],
      "alternates": []
    },
    "Ext.plugin.Manager": {
      "idx": 618,
      "alias": [],
      "alternates": [
        "Ext.PluginManager",
        "Ext.PluginMgr"
      ]
    },
    "Ext.plugin.Responsive": {
      "idx": 474,
      "alias": [
        "plugin.responsive"
      ],
      "alternates": []
    },
    "Ext.plugin.Viewport": {
      "idx": 475,
      "alias": [
        "plugin.viewport"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitter": {
      "idx": 441,
      "alias": [
        "widget.bordersplitter"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitterTracker": {
      "idx": 619,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Handle": {
      "idx": 621,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.ResizeTracker": {
      "idx": 622,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Resizer": {
      "idx": 624,
      "alias": [],
      "alternates": [
        "Ext.Resizable"
      ]
    },
    "Ext.resizer.Splitter": {
      "idx": 360,
      "alias": [
        "widget.splitter"
      ],
      "alternates": []
    },
    "Ext.resizer.SplitterTracker": {
      "idx": 482,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.Component": {
      "idx": 125,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.button.Button": {
      "idx": 449,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.button.Segmented": {
      "idx": 470,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dd.DD": {
      "idx": 374,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dom.Element": {
      "idx": 76,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.event.Event": {
      "idx": 29,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.Labelable": {
      "idx": 387,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.File": {
      "idx": 533,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.FileButton": {
      "idx": 530,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.CellEditor": {
      "idx": 546,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.ColumnLayout": {
      "idx": 414,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.NavigationModel": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.column.Column": {
      "idx": 430,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.HeaderResizer": {
      "idx": 417,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.RowEditing": {
      "idx": 591,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.ContextItem": {
      "idx": 605,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.component.Dock": {
      "idx": 381,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Absolute": {
      "idx": 610,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Border": {
      "idx": 443,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Box": {
      "idx": 362,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Column": {
      "idx": 481,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.HBox": {
      "idx": 364,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.VBox": {
      "idx": 366,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Menu": {
      "idx": 539,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Scroller": {
      "idx": 358,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Bar": {
      "idx": 350,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Panel": {
      "idx": 385,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Title": {
      "idx": 352,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.BorderSplitterTracker": {
      "idx": 620,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.ResizeTracker": {
      "idx": 623,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.SplitterTracker": {
      "idx": 483,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.DomScroller": {
      "idx": 114,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Indicator": {
      "idx": 110,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Scroller": {
      "idx": 95,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.TouchScroller": {
      "idx": 112,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.slider.Multi": {
      "idx": 630,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tab.Bar": {
      "idx": 453,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tip.QuickTipManager": {
      "idx": 465,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tree.Column": {
      "idx": 432,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.FocusableContainer": {
      "idx": 370,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.Renderable": {
      "idx": 118,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.view.NavigationModel": {
      "idx": 396,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.view.Table": {
      "idx": 404,
      "alias": [],
      "alternates": []
    },
    "Ext.scroll.DomScroller": {
      "idx": 113,
      "alias": [
        "scroller.dom"
      ],
      "alternates": []
    },
    "Ext.scroll.Indicator": {
      "idx": 109,
      "alias": [
        "widget.scrollindicator"
      ],
      "alternates": []
    },
    "Ext.scroll.Scroller": {
      "idx": 94,
      "alias": [
        "scroller.scroller"
      ],
      "alternates": []
    },
    "Ext.scroll.TouchScroller": {
      "idx": 111,
      "alias": [
        "scroller.touch"
      ],
      "alternates": []
    },
    "Ext.selection.CellModel": {
      "idx": 625,
      "alias": [
        "selection.cellmodel"
      ],
      "alternates": []
    },
    "Ext.selection.CheckboxModel": {
      "idx": 626,
      "alias": [
        "selection.checkboxmodel"
      ],
      "alternates": []
    },
    "Ext.selection.DataViewModel": {
      "idx": 394,
      "alias": [
        "selection.dataviewmodel"
      ],
      "alternates": []
    },
    "Ext.selection.Model": {
      "idx": 393,
      "alias": [
        "selection.abstract"
      ],
      "alternates": [
        "Ext.AbstractSelectionModel"
      ]
    },
    "Ext.selection.RowModel": {
      "idx": 411,
      "alias": [
        "selection.rowmodel"
      ],
      "alternates": []
    },
    "Ext.selection.TreeModel": {
      "idx": 412,
      "alias": [
        "selection.treemodel"
      ],
      "alternates": []
    },
    "Ext.slider.Multi": {
      "idx": 629,
      "alias": [
        "widget.multislider"
      ],
      "alternates": [
        "Ext.slider.MultiSlider"
      ]
    },
    "Ext.slider.Single": {
      "idx": 631,
      "alias": [
        "widget.slider",
        "widget.sliderfield"
      ],
      "alternates": [
        "Ext.Slider",
        "Ext.form.SliderField",
        "Ext.slider.SingleSlider",
        "Ext.slider.Slider"
      ]
    },
    "Ext.slider.Thumb": {
      "idx": 627,
      "alias": [],
      "alternates": []
    },
    "Ext.slider.Tip": {
      "idx": 628,
      "alias": [
        "widget.slidertip"
      ],
      "alternates": []
    },
    "Ext.slider.Widget": {
      "idx": 632,
      "alias": [
        "widget.sliderwidget"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bar": {
      "idx": 640,
      "alias": [
        "widget.sparklinebar"
      ],
      "alternates": []
    },
    "Ext.sparkline.BarBase": {
      "idx": 638,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Base": {
      "idx": 637,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Box": {
      "idx": 641,
      "alias": [
        "widget.sparklinebox"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bullet": {
      "idx": 642,
      "alias": [
        "widget.sparklinebullet"
      ],
      "alternates": []
    },
    "Ext.sparkline.CanvasBase": {
      "idx": 634,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.CanvasCanvas": {
      "idx": 635,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Discrete": {
      "idx": 643,
      "alias": [
        "widget.sparklinediscrete"
      ],
      "alternates": []
    },
    "Ext.sparkline.Line": {
      "idx": 644,
      "alias": [
        "widget.sparklineline"
      ],
      "alternates": []
    },
    "Ext.sparkline.Pie": {
      "idx": 645,
      "alias": [
        "widget.sparklinepie"
      ],
      "alternates": []
    },
    "Ext.sparkline.RangeMap": {
      "idx": 639,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Shape": {
      "idx": 633,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.TriState": {
      "idx": 646,
      "alias": [
        "widget.sparklinetristate"
      ],
      "alternates": []
    },
    "Ext.sparkline.VmlCanvas": {
      "idx": 636,
      "alias": [],
      "alternates": []
    },
    "Ext.state.CookieProvider": {
      "idx": 647,
      "alias": [],
      "alternates": []
    },
    "Ext.state.LocalStorageProvider": {
      "idx": 648,
      "alias": [
        "state.localstorage"
      ],
      "alternates": []
    },
    "Ext.state.Manager": {
      "idx": 120,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Provider": {
      "idx": 119,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Stateful": {
      "idx": 121,
      "alias": [],
      "alternates": []
    },
    "Ext.tab.Bar": {
      "idx": 452,
      "alias": [
        "widget.tabbar"
      ],
      "alternates": []
    },
    "Ext.tab.Panel": {
      "idx": 454,
      "alias": [
        "widget.tabpanel"
      ],
      "alternates": [
        "Ext.TabPanel"
      ]
    },
    "Ext.tab.Tab": {
      "idx": 450,
      "alias": [
        "widget.tab"
      ],
      "alternates": []
    },
    "Ext.tip.QuickTip": {
      "idx": 463,
      "alias": [
        "widget.quicktip"
      ],
      "alternates": [
        "Ext.QuickTip"
      ]
    },
    "Ext.tip.QuickTipManager": {
      "idx": 464,
      "alias": [],
      "alternates": [
        "Ext.QuickTips"
      ]
    },
    "Ext.tip.Tip": {
      "idx": 461,
      "alias": [
        "widget.tip"
      ],
      "alternates": [
        "Ext.Tip"
      ]
    },
    "Ext.tip.ToolTip": {
      "idx": 462,
      "alias": [
        "widget.tooltip"
      ],
      "alternates": [
        "Ext.ToolTip"
      ]
    },
    "Ext.toolbar.Breadcrumb": {
      "idx": 649,
      "alias": [
        "widget.breadcrumb"
      ],
      "alternates": []
    },
    "Ext.toolbar.Fill": {
      "idx": 650,
      "alias": [
        "widget.tbfill"
      ],
      "alternates": [
        "Ext.Toolbar.Fill"
      ]
    },
    "Ext.toolbar.Item": {
      "idx": 518,
      "alias": [
        "widget.tbitem"
      ],
      "alternates": [
        "Ext.Toolbar.Item"
      ]
    },
    "Ext.toolbar.Paging": {
      "idx": 523,
      "alias": [
        "widget.pagingtoolbar"
      ],
      "alternates": [
        "Ext.PagingToolbar"
      ]
    },
    "Ext.toolbar.Separator": {
      "idx": 537,
      "alias": [
        "widget.tbseparator"
      ],
      "alternates": [
        "Ext.Toolbar.Separator"
      ]
    },
    "Ext.toolbar.Spacer": {
      "idx": 651,
      "alias": [
        "widget.tbspacer"
      ],
      "alternates": [
        "Ext.Toolbar.Spacer"
      ]
    },
    "Ext.toolbar.TextItem": {
      "idx": 519,
      "alias": [
        "widget.tbtext"
      ],
      "alternates": [
        "Ext.Toolbar.TextItem"
      ]
    },
    "Ext.toolbar.Toolbar": {
      "idx": 371,
      "alias": [
        "widget.toolbar"
      ],
      "alternates": [
        "Ext.Toolbar"
      ]
    },
    "Ext.tree.Column": {
      "idx": 431,
      "alias": [
        "widget.treecolumn"
      ],
      "alternates": []
    },
    "Ext.tree.NavigationModel": {
      "idx": 435,
      "alias": [
        "view.navigation.tree"
      ],
      "alternates": []
    },
    "Ext.tree.Panel": {
      "idx": 436,
      "alias": [
        "widget.treepanel"
      ],
      "alternates": [
        "Ext.tree.TreePanel",
        "Ext.TreePanel"
      ]
    },
    "Ext.tree.View": {
      "idx": 410,
      "alias": [
        "widget.treeview"
      ],
      "alternates": []
    },
    "Ext.tree.ViewDragZone": {
      "idx": 653,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.ViewDropZone": {
      "idx": 654,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.plugin.TreeViewDragDrop": {
      "idx": 655,
      "alias": [
        "plugin.treeviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.util.AbstractMixedCollection": {
      "idx": 51,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Animate": {
      "idx": 72,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Bag": {
      "idx": 194,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Base64": {
      "idx": 321,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSS": {
      "idx": 656,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSV": {
      "idx": 323,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ClickRepeater": {
      "idx": 356,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Collection": {
      "idx": 133,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CollectionKey": {
      "idx": 131,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ComponentDragger": {
      "idx": 459,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Cookies": {
      "idx": 657,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelimitedValue": {
      "idx": 322,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ElementContainer": {
      "idx": 116,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Event": {
      "idx": 2,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Filter": {
      "idx": 49,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FilterCollection": {
      "idx": 176,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Floating": {
      "idx": 115,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Focusable": {
      "idx": 122,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FocusableContainer": {
      "idx": 369,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Format": {
      "idx": 80,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Group": {
      "idx": 174,
      "alias": [],
      "alternates": []
    },
    "Ext.util.GroupCollection": {
      "idx": 177,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Grouper": {
      "idx": 132,
      "alias": [],
      "alternates": []
    },
    "Ext.util.HashMap": {
      "idx": 5,
      "alias": [],
      "alternates": []
    },
    "Ext.util.History": {
      "idx": 185,
      "alias": [],
      "alternates": [
        "Ext.History"
      ]
    },
    "Ext.util.Inflector": {
      "idx": 140,
      "alias": [],
      "alternates": []
    },
    "Ext.util.KeyMap": {
      "idx": 367,
      "alias": [],
      "alternates": [
        "Ext.KeyMap"
      ]
    },
    "Ext.util.KeyNav": {
      "idx": 368,
      "alias": [],
      "alternates": [
        "Ext.KeyNav"
      ]
    },
    "Ext.util.LocalStorage": {
      "idx": 324,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LruCache": {
      "idx": 13,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Memento": {
      "idx": 382,
      "alias": [],
      "alternates": []
    },
    "Ext.util.MixedCollection": {
      "idx": 54,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ObjectTemplate": {
      "idx": 134,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Observable": {
      "idx": 50,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Offset": {
      "idx": 24,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PaintMonitor": {
      "idx": 46,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Point": {
      "idx": 26,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable": {
      "idx": 16,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ProtoElement": {
      "idx": 91,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Queue": {
      "idx": 603,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Region": {
      "idx": 25,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Renderable": {
      "idx": 117,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Schedulable": {
      "idx": 204,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Scheduler": {
      "idx": 195,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SizeMonitor": {
      "idx": 41,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sortable": {
      "idx": 53,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sorter": {
      "idx": 52,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SorterCollection": {
      "idx": 175,
      "alias": [],
      "alternates": []
    },
    "Ext.util.StoreHolder": {
      "idx": 342,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TSV": {
      "idx": 325,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TaskManager": {
      "idx": 326,
      "alias": [],
      "alternates": [
        "Ext.TaskManager"
      ]
    },
    "Ext.util.TaskRunner": {
      "idx": 55,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TextMetrics": {
      "idx": 327,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Translatable": {
      "idx": 108,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateCompiler": {
      "idx": 87,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateParser": {
      "idx": 86,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.Abstract": {
      "idx": 43,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.CssAnimation": {
      "idx": 44,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.OverflowChange": {
      "idx": 45,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Abstract": {
      "idx": 37,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Default": {
      "idx": 38,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.OverflowChange": {
      "idx": 40,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Scroll": {
      "idx": 39,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Abstract": {
      "idx": 102,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssPosition": {
      "idx": 107,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssTransform": {
      "idx": 104,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Dom": {
      "idx": 103,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollParent": {
      "idx": 106,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollPosition": {
      "idx": 105,
      "alias": [],
      "alternates": []
    },
    "Ext.view.AbstractView": {
      "idx": 397,
      "alias": [],
      "alternates": []
    },
    "Ext.view.BoundList": {
      "idx": 524,
      "alias": [
        "widget.boundlist"
      ],
      "alternates": [
        "Ext.BoundList"
      ]
    },
    "Ext.view.BoundListKeyNav": {
      "idx": 516,
      "alias": [
        "view.navigation.boundlist"
      ],
      "alternates": []
    },
    "Ext.view.DragZone": {
      "idx": 652,
      "alias": [],
      "alternates": []
    },
    "Ext.view.DropZone": {
      "idx": 551,
      "alias": [],
      "alternates": []
    },
    "Ext.view.MultiSelector": {
      "idx": 659,
      "alias": [
        "widget.multiselector"
      ],
      "alternates": []
    },
    "Ext.view.MultiSelectorSearch": {
      "idx": 658,
      "alias": [
        "widget.multiselector-search"
      ],
      "alternates": []
    },
    "Ext.view.NavigationModel": {
      "idx": 395,
      "alias": [
        "view.navigation.default"
      ],
      "alternates": []
    },
    "Ext.view.NodeCache": {
      "idx": 402,
      "alias": [],
      "alternates": []
    },
    "Ext.view.Table": {
      "idx": 403,
      "alias": [
        "widget.gridview",
        "widget.tableview"
      ],
      "alternates": [
        "Ext.grid.View"
      ]
    },
    "Ext.view.TableLayout": {
      "idx": 400,
      "alias": [
        "layout.tableview"
      ],
      "alternates": []
    },
    "Ext.view.View": {
      "idx": 398,
      "alias": [
        "widget.dataview"
      ],
      "alternates": [
        "Ext.DataView"
      ]
    },
    "Ext.window.MessageBox": {
      "idx": 498,
      "alias": [
        "widget.messagebox"
      ],
      "alternates": []
    },
    "Ext.window.Toast": {
      "idx": 660,
      "alias": [
        "widget.toast"
      ],
      "alternates": []
    },
    "Ext.window.Window": {
      "idx": 460,
      "alias": [
        "widget.window"
      ],
      "alternates": [
        "Ext.Window"
      ]
    }
  },
  "packages": {
    "ext": {
      "creator": "Sencha",
      "output": "${package.dir}/build",
      "requires": [
        "sencha-core",
        "ext"
      ],
      "type": "framework",
      "version": "5.1.1.451"
    },
    "sencha-core": {
      "creator": "Sencha",
      "output": "${package.dir}/build",
      "requires": [],
      "slicer": {
        "js": []
      },
      "type": "code",
      "version": "5.0.0"
    }
  },
  "bootRelative": true
};
