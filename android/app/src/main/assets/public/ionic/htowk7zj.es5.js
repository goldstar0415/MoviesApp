/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("htowk7zj",["exports","./chunk-4dee52e3.js","./chunk-0f94cb1c.js"],function(e,t,n){var o=window.Ionic.h,i=function(){function e(){this.didBlurAfterEdit=!1,this.autocapitalize="none",this.autocomplete="off",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.value=""}return e.prototype.debounceChanged=function(){this.ionChange=t.debounceEvent(this.ionChange,this.debounce)},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.valueChanged=function(){var e=this.el.querySelector("textarea"),t=this.value;e.value!==t&&(e.value=t),this.ionChange.emit({value:t})},e.prototype.componentDidLoad=function(){this.ionStyle=t.deferEvent(this.ionStyle),this.debounceChanged(),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({textarea:!0,input:!0,"input-disabled":this.disabled,"input-has-value":this.hasValue(),"input-has-focus":this.hasFocus()})},e.prototype.clearTextInput=function(){this.value=""},e.prototype.onInput=function(e){this.value=e.target&&e.target.value||"",this.emitStyle(),this.ionInput.emit(e)},e.prototype.onFocus=function(){this.focusChange(),this.emitStyle(),this.ionFocus.emit()},e.prototype.onBlur=function(){this.focusChange(),this.emitStyle(),this.ionBlur.emit()},e.prototype.onKeyDown=function(){this.checkClearOnEdit()},e.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)},e.prototype.focusChange=function(){this.clearOnEdit&&!this.hasFocus()&&this.hasValue()&&(this.didBlurAfterEdit=!0)},e.prototype.hasFocus=function(){return this.el&&this.el.querySelector(":focus")===this.el.querySelector("textarea")},e.prototype.hasValue=function(){return""!==this.value},e.prototype.render=function(){var e=n.createThemedClasses(this.mode,this.color,"native-textarea");return o("textarea",{autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,class:e,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.onKeyDown.bind(this)},this.value)},Object.defineProperty(e,"is",{get:function(){return"ion-textarea"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"textarea"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autocapitalize:{type:String,attr:"autocapitalize"},autocomplete:{type:String,attr:"autocomplete"},autofocus:{type:Boolean,attr:"autofocus"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},cols:{type:Number,attr:"cols"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},maxlength:{type:Number,attr:"maxlength"},minlength:{type:Number,attr:"minlength"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},rows:{type:Number,attr:"rows"},spellcheck:{type:Boolean,attr:"spellcheck"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},wrap:{type:String,attr:"wrap"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-textarea{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.item-input ion-textarea{position:static}.item.item-textarea{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.native-textarea{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:92%;width:calc(100% - 10px);border:0;font-size:inherit;background:0 0}.native-textarea:active,.native-textarea:focus{outline:0}.native-textarea[disabled]{opacity:.4}.platform-mobile .native-textarea{resize:none}.item-input-has-focus a,.item-input-has-focus button,.item-input-has-focus textarea{pointer-events:auto}.textarea-cover{left:0;top:0;position:absolute;width:100%;height:100%}.textarea[disabled] .textarea-cover{pointer-events:none}.native-textarea-ios{margin:11px 8px 11px 0;padding:0;width:calc(100% - 8px);font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;font-size:inherit}.native-textarea-ios::-moz-placeholder{color:var(--ion-placeholder-text-ios-color,var(--ion-placeholder-text-color,#999))}.native-textarea-ios:-ms-input-placeholder{color:var(--ion-placeholder-text-ios-color,var(--ion-placeholder-text-color,#999))}.native-textarea-ios::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-ios-color,var(--ion-placeholder-text-color,#999))}.item-ios.item-label-floating .native-textarea,.item-ios.item-label-stacked .native-textarea{margin-left:0;margin-top:8px;margin-bottom:8px;width:calc(100% - 8px)}.item-ios.item-label-floating .label-ios+.input+.cloned-input,.item-ios.item-label-stacked .label-ios+.input+.cloned-input{margin-left:0}.label-ios+.input+.cloned-input,.label-ios+ion-textarea .native-textarea{margin-left:16px;width:calc(100% - (16px / 2) - 16px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();e.IonTextarea=i,Object.defineProperty(e,"__esModule",{value:!0})});