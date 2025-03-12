"use client";import{useFocusRing as N}from"@react-aria/focus";import{useHover as V}from"@react-aria/interactions";import i,{useCallback as w,useMemo as J,useState as $}from"react";import{useActivePress as j}from'../../hooks/use-active-press.js';import{useControllable as q}from'../../hooks/use-controllable.js';import{useDefaultValue as z}from'../../hooks/use-default-value.js';import{useDisposables as Q}from'../../hooks/use-disposables.js';import{useEvent as l}from'../../hooks/use-event.js';import{useId as Y}from'../../hooks/use-id.js';import{useDisabled as Z}from'../../internal/disabled.js';import{FormFields as ee}from'../../internal/form-fields.js';import{useProvidedId as oe}from'../../internal/id.js';import{isDisabledReactIssue7711 as te}from'../../utils/bugs.js';import{attemptSubmit as re}from'../../utils/form.js';import{forwardRefWithAs as ae,mergeProps as ne,useRender as le}from'../../utils/render.js';import{useDescribedBy as se}from'../description/description.js';import{Keys as y}from'../keyboard.js';import{useLabelledBy as ie}from'../label/label.js';let de="span";function pe(T,h){let C=Y(),k=oe(),x=Z(),{id:g=k||`headlessui-checkbox-${C}`,disabled:e=x||!1,autoFocus:s=!1,checked:E,defaultChecked:v,onChange:P,name:d,value:D,form:R,indeterminate:n=!1,tabIndex:A=0,...F}=T,r=z(v),[a,t]=q(E,P,r!=null?r:!1),K=ie(),_=se(),H=Q(),[p,c]=$(!1),u=l(()=>{c(!0),t==null||t(!a),H.nextFrame(()=>{c(!1)})}),B=l(o=>{if(te(o.currentTarget))return o.preventDefault();o.preventDefault(),u()}),I=l(o=>{o.key===y.Space?(o.preventDefault(),u()):o.key===y.Enter&&re(o.currentTarget)}),L=l(o=>o.preventDefault()),{isFocusVisible:m,focusProps:M}=N({autoFocus:s}),{isHovered:b,hoverProps:U}=V({isDisabled:e}),{pressed:f,pressProps:O}=j({disabled:e}),X=ne({ref:h,id:g,role:"checkbox","aria-checked":n?"mixed":a?"true":"false","aria-labelledby":K,"aria-describedby":_,"aria-disabled":e?!0:void 0,indeterminate:n?"true":void 0,tabIndex:e?void 0:A,onKeyUp:e?void 0:I,onKeyPress:e?void 0:L,onClick:e?void 0:B},M,U,O),G=J(()=>({checked:a,disabled:e,hover:b,focus:m,active:f,indeterminate:n,changing:p,autofocus:s}),[a,n,e,b,m,f,p,s]),S=w(()=>{if(r!==void 0)return t==null?void 0:t(r)},[t,r]),W=le();return i.createElement(i.Fragment,null,d!=null&&i.createElement(ee,{disabled:e,data:{[d]:D||"on"},overrides:{type:"checkbox",checked:a},form:R,onReset:S}),W({ourProps:X,theirProps:F,slot:G,defaultTag:de,name:"Checkbox"}))}let Fe=ae(pe);export{Fe as Checkbox};
