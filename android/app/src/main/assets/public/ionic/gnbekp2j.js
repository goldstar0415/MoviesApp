/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{d as e}from"./chunk-c311c162.js";import{b as i}from"./chunk-7f93bab0.js";class s{constructor(){this.inputId=`ion-tg-${n++}`,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()}emitStyle(){this.ionStyle.emit({"toggle-disabled":this.disabled,"toggle-checked":this.checked,"toggle-activated":this.activated})}componentWillLoad(){this.ionStyle=i(this.ionStyle),this.emitStyle()}componentDidLoad(){const t=this.nativeInput.closest("ion-item");if(t){const e=t.querySelector("ion-label");e&&(e.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",e.id))}}onDragStart(t){return this.pivotX=t.currentX,this.activated=!0,t.event.preventDefault(),!0}onDragMove(t){const i=t.currentX;o(this.checked,i-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=i,e())}onDragEnd(t){const i=t.currentX-this.pivotX;o(this.checked,i,4)&&(this.checked=!this.checked,e()),this.activated=!1,this.nativeInput.focus()}onChange(){this.checked=!this.checked}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hostData(){return{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus}}}render(){return[t("ion-gesture",{onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"toggle",passive:!1,gesturePriority:30,direction:"x",threshold:0,attachTo:"parent",disabled:this.disabled,tabIndex:-1},t("div",{class:"toggle-icon"},t("div",{class:"toggle-inner"})),t("div",{class:"toggle-cover"})),t("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:t=>this.nativeInput=t})]}static get is(){return"ion-toggle"}static get host(){return{theme:"toggle"}}static get properties(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-toggle{display:inline-block;contain:content;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-toggle ion-gesture{display:block;width:100%;height:100%;visibility:inherit}.toggle-cover{left:0;position:absolute;top:0;width:100%;height:100%;border:0;outline:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;background:0 0;cursor:pointer}ion-toggle input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;pointer-events:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}ion-toggle :focus{outline:0}.toggle-key input{border:2px solid #5e9ed6}.toggle-md{padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.toggle-md .toggle-icon{border-radius:14px;position:relative;display:block;width:100%;height:100%;background-color:rgba(var(--ion-item-md-border-color-rgb,var(--ion-item-border-color-rgb,0,0,0)),.13);-webkit-transition:background-color .3s;transition:background-color .3s;pointer-events:none}.toggle-md .toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;background-color:var(--ion-background-md-color,var(--ion-background-color,#fff));-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;will-change:transform,background-color;contain:strict}.toggle-md.toggle-checked .toggle-icon{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),.5)}.toggle-md.toggle-checked .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-md.item-toggle-disabled ion-label,.toggle-md.toggle-disabled{opacity:.3;pointer-events:none}.toggle-md.toggle-disabled ion-radio{opacity:.3}.item-md .toggle-md[slot]{margin:0;padding:12px 8px 12px 16px;cursor:pointer}.item-md .toggle-md[slot=start]{padding:12px 18px 12px 2px}.item-md.item-toggle ion-label{margin-left:0}.toggle-md-primary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.toggle-md-primary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.toggle-md-secondary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.toggle-md-secondary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.toggle-md-tertiary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.toggle-md-tertiary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.toggle-md-success.toggle-checked .toggle-icon{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.toggle-md-success.toggle-checked .toggle-inner{background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.toggle-md-warning.toggle-checked .toggle-icon{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.toggle-md-warning.toggle-checked .toggle-inner{background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.toggle-md-danger.toggle-checked .toggle-icon{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.toggle-md-danger.toggle-checked .toggle-inner{background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.toggle-md-light.toggle-checked .toggle-icon{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.toggle-md-light.toggle-checked .toggle-inner{background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.toggle-md-medium.toggle-checked .toggle-icon{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.toggle-md-medium.toggle-checked .toggle-inner{background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.toggle-md-dark.toggle-checked .toggle-icon{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.toggle-md-dark.toggle-checked .toggle-inner{background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}static get styleMode(){return"md"}}function o(t,e,i){const s="rtl"===document.dir;return t?!s&&i>e||s&&-i<e:!s&&-i<e||s&&i>e}let n=0;export{s as IonToggle};