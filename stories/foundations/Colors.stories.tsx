import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const paletteSteps = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'] as const
const palettes: Record<string, string[]> = {
  Crimson: ['#400C19', '#5A1123', '#73162E', '#A72042', '#E72757', '#E16181', '#E98CA3', '#F1B6C5', '#F5CCD6', '#F9E1E7'],
  'Selection Blue': ['#042C4E', '#06406F', '#07518D', '#0A72C7', '#1B92F3', '#55AEF6', '#86C5F9', '#B6DCFB', '#CFE8FC', '#E7F3FE'],
  Grey: ['#000000', '#272727', '#343434', '#4E4E4E', '#686868', '#828282', '#9B9B9B', '#DADADA', '#F3F3F3', '#FFFFFF'],
  Orange: ['#48260A', '#703B0F', '#8D4307', '#C75F0A', '#F37C1B', '#F69E55', '#F9BA86', '#FBD5B6', '#F9E4D2', '#FEF1E7'],
  Yellow: ['#454E04', '#636F06', '#7D8D07', '#B1C70A', '#D1E727', '#E3F655', '#EBF986', '#F3FBB6', '#F7FCCF', '#FAFCE9'],
  Teal: ['#044E3E', '#066F59', '#078D70', '#0AC79E', '#1BF3C4', '#55F6D3', '#86F9E0', '#B6FBEC', '#CFFCF3', '#E7FEF9'],
  Green: ['#044E0D', '#066F12', '#078D17', '#0AC720', '#1BF334', '#55F668', '#86F993', '#B6FBBE', '#CFFCD4', '#E7FEE9'],
  Blue: ['#04144E', '#061D6F', '#07248D', '#0A33C7', '#1B4AF3', '#5578F6', '#869FF9', '#B6C5FB', '#CFD8FC', '#E7ECFE'],
  Red: ['#4E0414', '#6F061D', '#8D0724', '#C70A33', '#F31B4A', '#F65578', '#F9869F', '#FBB6C5', '#FCCFD8', '#FEE7EC'],
}
const semantic = [
  {name:'Brand primary', token:'--surface-brand-primary', value:'#E72757', usage:'Primary brand moments and high-priority actions.'},
  {name:'Brand subtle', token:'--surface-brand-primary-subtle', value:'#F9E1E7', usage:'Soft brand-tinted backgrounds and selected containers.'},
  {name:'Brand secondary', token:'--surface-brand-secondary', value:'#1B92F3', usage:'Secondary emphasis and selected states.'},
  {name:'Error', token:'--surface-error', value:'#C70A33', usage:'Error indicators; pair with clear text, not color alone.'},
  {name:'Error subtle', token:'--surface-error-subtle', value:'#FCCFD8', usage:'Soft error surfaces and inline feedback backgrounds.'},
  {name:'Success', token:'--surface-success', value:'#0AC720', usage:'Success state color; validate contrast before using for text.'},
  {name:'Success subtle', token:'--surface-success-subtle', value:'#E7FEE9', usage:'Low-emphasis success surfaces.'},
  {name:'Warning', token:'--surface-warning', value:'#D1E727', usage:'Warning emphasis; use a dark foreground for readability.'},
  {name:'Neutral surface', token:'--surface-grey-subtle', value:'#F3F3F3', usage:'Quiet container fills and grouped content.'},
]
function copy(value: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard) void navigator.clipboard.writeText(value)
}
function ColorFoundations() {
  return <div style={{width:'100%',maxWidth:1080,color:'#19191F',fontFamily:'var(--font-family-primary)',display:'grid',gap:34}}>
    <header style={{padding:'28px 0 26px',borderBottom:'1px solid #E8E8ED'}}>
      <div style={{fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:'#A72042',fontWeight:600,marginBottom:12}}>Foundations / Color</div>
      <h1 style={{fontSize:36,lineHeight:1.12,letterSpacing:'-.04em',marginBottom:12}}>Color with a clear purpose.</h1>
      <p style={{fontSize:15,lineHeight:1.7,color:'#666675',maxWidth:720}}>Datum's color system combines expressive brand colors with neutral structure and semantic status colors. Start with a role, then choose a shade that supports the task and remains legible in context.</p>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:20}}>
        <span style={{padding:'7px 10px',borderRadius:99,background:'#F9E1E7',color:'#73162E',fontSize:12}}>9 palettes</span>
        <span style={{padding:'7px 10px',borderRadius:99,background:'#E7F3FE',color:'#06406F',fontSize:12}}>10 steps each</span>
        <span style={{padding:'7px 10px',borderRadius:99,background:'#F3F3F3',color:'#343434',fontSize:12}}>Click a swatch to copy HEX</span>
      </div>
    </header>
    <section>
      <h2 style={{fontSize:22,letterSpacing:'-.025em',marginBottom:8}}>01 — Color principles</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:12}}>
        {[['Build hierarchy','Reserve the strongest brand color for key actions. Let neutral text and surfaces carry most of the interface.'],['Use meaning consistently','Use semantic success, warning, and error roles consistently across forms, feedback, and status indicators.'],['Check the pair, not the swatch','Contrast depends on both foreground and background. Validate real combinations and never communicate status through color alone.']].map(([title,body])=><article key={title} style={{border:'1px solid #E8E8ED',borderRadius:12,padding:16,background:'#FFFFFF'}}><h3 style={{fontSize:14,marginBottom:8}}>{title}</h3><p style={{fontSize:13,lineHeight:1.65,color:'#666675'}}>{body}</p></article>)}
      </div>
    </section>
    <section>
      <h2 style={{fontSize:22,letterSpacing:'-.025em',marginBottom:8}}>02 — Primitive palettes</h2>
      <p style={{fontSize:14,lineHeight:1.65,color:'#666675',marginBottom:20}}>Shade labels run from 900 (deepest) to 50 (lightest). Click any swatch to copy its HEX value. These are the current palette values from Datum's source stylesheet.</p>
      <div style={{display:'grid',gap:24}}>
        {Object.entries(palettes).map(([name,colors])=><div key={name} style={{border:'1px solid #E8E8ED',borderRadius:12,padding:16,background:'#FFFFFF'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12,marginBottom:14}}><h3 style={{fontSize:15}}>{name}</h3><span style={{fontSize:11,color:'#858593'}}>10 tokens</span></div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,minmax(0,1fr))',gap:10}}>
            {colors.map((color,index)=><div key={color} style={{minWidth:0}}>
              <button onClick={()=>copy(color)} title={`Copy ${color}`} aria-label={`Copy ${name} ${paletteSteps[index]} color ${color}`} style={{display:'block',width:'100%',height:58,borderRadius:7,border:'1px solid rgba(25,25,31,.1)',background:color,cursor:'copy'}} />
              <div style={{fontSize:10,color:'#666675',marginTop:7,fontFamily:'var(--font-family-mono)'}}>{paletteSteps[index]}</div>
              <div style={{fontSize:10,color:'#19191F',marginTop:3,fontFamily:'var(--font-family-mono)',overflowWrap:'anywhere'}}>{color}</div>
            </div>)}
          </div>
        </div>)}
      </div>
    </section>
    <section>
      <h2 style={{fontSize:22,letterSpacing:'-.025em',marginBottom:8}}>03 — Semantic color roles</h2>
      <p style={{fontSize:14,lineHeight:1.65,color:'#666675',marginBottom:16}}>Semantic tokens describe why a color is used. Prefer them in product UI over a hard-coded primitive value.</p>
      <div style={{display:'grid',gap:8}}>
        {semantic.map(item=><div key={item.token} style={{display:'grid',gridTemplateColumns:'48px minmax(130px,1fr) minmax(150px,1.1fr) minmax(180px,1.5fr)',gap:12,alignItems:'center',border:'1px solid #E8E8ED',borderRadius:10,padding:10,background:'#FFFFFF'}}>
          <div style={{height:38,borderRadius:6,background:item.value,border:'1px solid rgba(25,25,31,.08)'}}/>
          <div><div style={{fontSize:12,fontWeight:600}}>{item.name}</div><div style={{fontSize:10,color:'#666675',fontFamily:'var(--font-family-mono)',marginTop:4}}>{item.value}</div></div>
          <code style={{fontSize:10,color:'#A72042',overflowWrap:'anywhere'}}>{item.token}</code>
          <p style={{fontSize:12,lineHeight:1.5,color:'#666675'}}>{item.usage}</p>
        </div>)}
      </div>
    </section>
    <section>
      <h2 style={{fontSize:22,letterSpacing:'-.025em',marginBottom:8}}>04 — In context</h2>
      <p style={{fontSize:14,lineHeight:1.65,color:'#666675',marginBottom:16}}>A quick example of brand emphasis, neutral structure, and status feedback working together.</p>
      <div style={{border:'1px solid #E8E8ED',borderRadius:14,padding:20,background:'#FFFFFF',display:'grid',gap:18}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}><div><div style={{fontSize:11,color:'#666675',marginBottom:5}}>PROJECT / OVERVIEW</div><h3 style={{fontSize:20}}>Workspace settings</h3></div><button onClick={()=>{}} style={{background:'#E72757',color:'#FFFFFF',border:0,borderRadius:8,padding:'10px 14px',fontWeight:600,fontSize:12}}>Save changes</button></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:10}}>{[['Active members','24','#E7F3FE','#06406F'],['Invitations sent','3','#F9E1E7','#73162E'],['Sync status','Healthy','#E7FEE9','#044E0D']].map(([label,value,bg,fg])=><div key={label} style={{padding:14,border:'1px solid #E8E8ED',borderRadius:10,background:'#FFFFFF'}}><div style={{fontSize:12,color:'#666675'}}>{label}</div><div style={{fontSize:22,fontWeight:600,marginTop:8}}>{value}</div><span style={{display:'inline-block',marginTop:10,padding:'4px 7px',borderRadius:5,background:bg,color:fg,fontSize:10,fontWeight:600}}>{label==='Sync status'?'SUCCESS':'OVERVIEW'}</span></div>)}</div>
      </div>
    </section>
    <section>
      <h2 style={{fontSize:22,letterSpacing:'-.025em',marginBottom:8}}>05 — Accessibility checklist</h2>
      <div style={{border:'1px solid #E8E8ED',borderRadius:12,overflow:'hidden',background:'#FFFFFF'}}>
        {['Meet WCAG contrast guidance: 4.5:1 for normal text and 3:1 for large text.','Do not assume brand crimson, bright green, or yellow works as text on white; verify each combination.','Pair color with labels, icons, or supporting copy to communicate status.','Provide visible focus indicators and test hover, focus, disabled, and error states.'].map((item,i)=><div key={item} style={{display:'flex',gap:12,padding:14,borderBottom:i===3?'none':'1px solid #E8E8ED',fontSize:13,lineHeight:1.6,color:'#343434'}}><span style={{color:'#A72042',fontWeight:700}}>{String(i+1).padStart(2,'0')}</span>{item}</div>)}
      </div>
      <p style={{fontSize:12,color:'#666675',lineHeight:1.6,marginTop:10}}>Contrast ratios are intentionally not listed as verified results here; calculate them for the exact foreground/background pair used in the interface.</p>
    </section>
    <section style={{borderTop:'1px solid #E8E8ED',paddingTop:22}}>
      <h2 style={{fontSize:22,letterSpacing:'-.025em',marginBottom:8}}>06 — Developer reference</h2>
      <p style={{fontSize:14,lineHeight:1.65,color:'#666675',marginBottom:12}}>Use the existing CSS custom properties to keep implementation aligned with the design source.</p>
      <pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere',background:'#F3F3F3',border:'1px solid #E8E8ED',borderRadius:10,padding:16,color:'#343434',lineHeight:1.7}}>{`.primary-action {\n  background: var(--surface-brand-primary);\n  color: var(--text-white);\n}\n\n.selected-surface {\n  background: var(--surface-brand-primary-subtle);\n}\n\n.error-message {\n  color: var(--text-error);\n}`}</pre>
      <p style={{fontSize:12,color:'#666675',marginTop:10}}>Source of truth: <code>app/globals.css</code>. Primitive palette values are preserved.</p>
    </section>
  </div>
}
const meta = { title: 'Datum/Foundations/Colors', component: ColorFoundations, parameters: { layout: 'padded', backgrounds: { default: 'Datum paper' } }, tags: ['autodocs'] } satisfies Meta<typeof ColorFoundations>
export default meta
type Story = StoryObj<typeof meta>
export const ColorSystem: Story = {}
