webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(126);\nexports = module.exports = __webpack_require__(4)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nbody {\\n  background-image: url(\" + escape(__webpack_require__(127)) + \");\\n}\\np {\\n  font-size: .8em;\\n}\\n.container {\\n  background-image: url(\" + escape(__webpack_require__(128)) + \");\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/elizakhachatryan/Workspace/goodreads_clone/src/src/App.vue\"],\"names\":[],\"mappings\":\";AA6BA;EACA,gDAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;EACA,gDAAA;CACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"container\\\">\\n    <app-header></app-header>\\n    <div class=\\\"row\\\">\\n      <!-- <div class=\\\"col-xs-12\\\"> -->\\n        <router-view></router-view>\\n      <!-- </div> -->\\n    </div>\\n  </div>\\n</template>\\n\\n<script>\\n  import Header from './components/Header.vue'\\n  export default {\\n    components: {\\n      appHeader: Header\\n    },\\n    created() {\\n\\n      //comment initBooks in store and comment dispatch action in App.vue. I don't have a boooks array to initate when I implement search API.\\n\\n      // this.$store.dispatch('initBooks');\\n      this.$store.dispatch('initList');\\n    }\\n  }\\n</script>\\n\\n<style>\\n\\nbody {\\n  background-image: url(\\\"assets/bookshelves.jpg\\\");\\n}\\np {\\n  font-size: .8em;\\n}\\n.container {\\n  background-image: url(\\\"assets/coarse-paper.jpg\\\");\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8wMzI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyxHQUE4QztBQUNuRSwyQkFBMkIsbUJBQU8sQ0FBQyxDQUE0QztBQUMvRTs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsV0FBVyxxQ0FBcUMsbUJBQU8sQ0FBQyxHQUEwQixRQUFRLEdBQUcsS0FBSyxvQkFBb0IsR0FBRyxjQUFjLHFDQUFxQyxtQkFBTyxDQUFDLEdBQTJCLFFBQVEsR0FBRyxVQUFVLG9IQUFvSCxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsa1dBQWtXLG1CQUFtQixnQ0FBZ0Msa0JBQWtCLGlNQUFpTSx5Q0FBeUMsT0FBTyxLQUFLLGdDQUFnQyxzREFBc0QsR0FBRyxLQUFLLG9CQUFvQixHQUFHLGNBQWMsdURBQXVELEdBQUcsK0JBQStCOztBQUVueUMiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2Fzc2V0cy9ib29rc2hlbHZlcy5qcGdcIikpICsgXCIpO1xcbn1cXG5wIHtcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYXNzZXRzL2NvYXJzZS1wYXBlci5qcGdcIikpICsgXCIpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2VsaXpha2hhY2hhdHJ5YW4vV29ya3NwYWNlL2dvb2RyZWFkc19jbG9uZS9zcmMvc3JjL0FwcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZCQTtFQUNBLGdEQUFBO0NBQ0E7QUFDQTtFQUNBLGdCQUFBO0NBQ0E7QUFDQTtFQUNBLGdEQUFBO0NBQ0FcIixcImZpbGVcIjpcIkFwcC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj4gLS0+XFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXG4gICAgICA8IS0tIDwvZGl2PiAtLT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBpbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIudnVlJ1xcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgYXBwSGVhZGVyOiBIZWFkZXJcXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG5cXG4gICAgICAvL2NvbW1lbnQgaW5pdEJvb2tzIGluIHN0b3JlIGFuZCBjb21tZW50IGRpc3BhdGNoIGFjdGlvbiBpbiBBcHAudnVlLiBJIGRvbid0IGhhdmUgYSBib29va3MgYXJyYXkgdG8gaW5pdGF0ZSB3aGVuIEkgaW1wbGVtZW50IHNlYXJjaCBBUEkuXFxuXFxuICAgICAgLy8gdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2luaXRCb29rcycpO1xcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdpbml0TGlzdCcpO1xcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJhc3NldHMvYm9va3NoZWx2ZXMuanBnXFxcIik7XFxufVxcbnAge1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYXNzZXRzL2NvYXJzZS1wYXBlci5qcGdcXFwiKTtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2JhNWJkOTBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ })

})