"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.css");

var _default = {
  name: 'atom-range',
  data: function data() {
    return {
      startX: 0,
      pre_move: 0,
      anim_move: 0,
      active_move: 0,
      isAction: false
    };
  },
  props: {
    value: {
      type: Number
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    isIndicator: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#108ee9'
    },
    isLight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    shadowStyle: function shadowStyle() {
      if (this.isLight) return "0 0 10px ".concat(this.color);else return "0 0 3px ".concat(this.color);
    }
  },
  mounted: function mounted() {
    if (this.value < this.min) this.value = this.min;else if (this.value > this.max) this.value = this.max;
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'atom-range',
      class: {
        'active': this.isIndicator && this.isAction
      }
    }, [h('div', {
      staticClass: 'range-default-line'
    }), h('div', {
      staticClass: 'range-active-line',
      style: {
        width: "".concat(this.active_move, "%"),
        background: this.color
      }
    }), h('div', {
      staticClass: 'active-slider',
      style: {
        left: "".concat(this.anim_move, "%"),
        background: this.color,
        'box-shadow': this.shadowStyle
      },
      on: {
        touchstart: function touchstart() {
          _this.startX = event.targetTouches[0].pageX;
          _this.isAction = true;
        },
        touchmove: function touchmove() {
          event.preventDefault();
          var moveX = event.changedTouches[0].pageX - _this.startX;
          _this.anim_move = moveX / event.currentTarget.parentNode.offsetWidth * 100 + _this.pre_move;
          if (_this.anim_move < 0) _this.anim_move = 0;else if (_this.anim_move > 100) _this.anim_move = 100;
          _this.active_move = _this.anim_move.toFixed(0);
        },
        touchend: function touchend() {
          _this.pre_move = Number(_this.active_move);
          _this.isAction = false;

          _this.$emit('input', Number((_this.min + _this.active_move * 1e-2 * (_this.max - _this.min)).toFixed(0)));
        }
      }
    }), h('div', {
      staticClass: 'range-indicator',
      style: {
        left: "".concat(this.active_move, "%")
      }
    }, [h('div', {
      staticClass: 'indicator-content'
    }, Number((this.min + this.active_move * 1e-2 * (this.max - this.min)).toFixed(0)))])]);
  }
};
exports.default = _default;