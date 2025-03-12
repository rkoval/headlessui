"use client";import{useFocusRing as E}from"@react-aria/focus";import{useHover as v}from"@react-aria/interactions";import{useMemo as A}from"react";import{useActivePress as g}from'../../hooks/use-active-press.js';import{useId as _}from'../../hooks/use-id.js';import{useDisabled as R}from'../../internal/disabled.js';import{useProvidedId as D}from'../../internal/id.js';import{forwardRefWithAs as F,mergeProps as L,useRender as C}from'../../utils/render.js';import{useDescribedBy as x}from'../description/description.js';import{useLabelledBy as h}from'../label/label.js';let H="select";function B(a,i){let p=_(),d=D(),n=R(),{id:c=d||`headlessui-select-${p}`,disabled:e=n||!1,invalid:t=!1,autoFocus:o=!1,...f}=a,m=h(),u=x(),{isFocusVisible:r,focusProps:T}=E({autoFocus:o}),{isHovered:l,hoverProps:b}=v({isDisabled:e}),{pressed:s,pressProps:y}=g({disabled:e}),P=L({ref:i,id:c,"aria-labelledby":m,"aria-describedby":u,"aria-invalid":t?"true":void 0,disabled:e||void 0,autoFocus:o},T,b,y),S=A(()=>({disabled:e,invalid:t,hover:l,focus:r,active:s,autofocus:o}),[e,t,l,r,s,o]);return C()({ourProps:P,theirProps:f,slot:S,defaultTag:H,name:"Select"})}let j=F(B);export{j as Select};
