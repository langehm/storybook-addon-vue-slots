import{d as D,o as _,b as y,e as V,n as k}from"./vue.esm-bundler-6KJkvJdK.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v=D({__name:"Card",props:{variant:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:{click:r=>r},setup(r){return(C,B)=>(_(),y("article",{class:k(["app-card",{variant:r.variant,disabled:r.disabled}])},[V(C.$slots,"default",{},void 0,!0)],2))}}),S=h(v,[["__scopeId","data-v-892d43d6"]]);v.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/storybook-addon-vue-slots/storybook-addon-vue-slots/.storybook/Card.vue"]};const E={title:"Components/Card",component:S,tags:["autodocs"],argTypes:{variant:{description:"Should variant colour be applied?"},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"Basic unit of organization inside content"}},slots:{default:{template:"{{ args.default }}",description:"Content inside of the card"}}},args:{disabled:!1,variant:!1}},a={args:{}},e={args:{default:"Variant Card",variant:!0},parameters:{docs:{description:{story:"Use variant to emphasize content inside of it."}}}},s={args:{...a.args,default:"Disabled Card",disabled:!0}},t={args:{...e.args,default:"Variant Disabled Card",disabled:!0}};var o,n,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    default: "Variant Card",
    variant: true
  },
  parameters: {
    docs: {
      description: {
        story: "Use variant to emphasize content inside of it."
      }
    }
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    default: "Disabled Card",
    disabled: true
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,b,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Variant.args,
    default: "Variant Disabled Card",
    disabled: true
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const I=["Default","Variant","DefaultDisabled","VariantDisabled"];export{a as Default,s as DefaultDisabled,e as Variant,t as VariantDisabled,I as __namedExportsOrder,E as default};
