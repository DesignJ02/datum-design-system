import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const tokens = [
  { group: 'Typography', name: '--font-size-display', value: '64px', preview: 'Display text' },
  { group: 'Typography', name: '--font-size-h1', value: '56px', preview: 'Heading one' },
  { group: 'Typography', name: '--font-size-h2', value: '48px', preview: 'Heading two' },
  { group: 'Typography', name: '--font-size-h3', value: '40px', preview: 'Heading three' },
  { group: 'Typography', name: '--font-size-h4', value: '36px', preview: 'Heading four' },
  { group: 'Typography', name: '--font-size-body-lg', value: '24px', preview: 'Large body' },
  { group: 'Typography', name: '--font-size-body-base', value: '20px', preview: 'Base body' },
  { group: 'Typography', name: '--font-size-body-sm', value: '16px', preview: 'Small body' },
  { group: 'Typography', name: '--font-size-label-lg', value: '14px', preview: 'Large label' },
  { group: 'Typography', name: '--font-size-label-sm', value: '12px', preview: 'Small label' },
  { group: 'Spacing', name: '--space-2', value: '2px', preview: 'Micro gap' },
  { group: 'Spacing', name: '--space-4', value: '4px', preview: 'Tight gap' },
  { group: 'Spacing', name: '--space-8', value: '8px', preview: 'Compact gap' },
  { group: 'Spacing', name: '--space-12', value: '12px', preview: 'Small gap' },
  { group: 'Spacing', name: '--space-16', value: '16px', preview: 'Base gap' },
  { group: 'Spacing', name: '--space-20', value: '20px', preview: 'Comfortable gap' },
  { group: 'Spacing', name: '--space-28', value: '28px', preview: 'Section gap' },
  { group: 'Spacing', name: '--space-44', value: '44px', preview: 'Large gap' },
  { group: 'Spacing', name: '--space-48', value: '48px', preview: 'XL gap' },
  { group: 'Spacing', name: '--space-56', value: '56px', preview: 'XXL gap' },
  { group: 'Radius', name: '--radius-2', value: '2px', preview: 'Subtle' },
  { group: 'Radius', name: '--radius-4', value: '4px', preview: 'Compact' },
  { group: 'Radius', name: '--radius-8', value: '8px', preview: 'Default' },
  { group: 'Radius', name: '--radius-12', value: '12px', preview: 'Soft' },
  { group: 'Radius', name: '--radius-16', value: '16px', preview: 'Card' },
  { group: 'Radius', name: '--radius-24', value: '24px', preview: 'Large' },
  { group: 'Radius', name: '--radius-full', value: '9999px', preview: 'Pill' },
  { group: 'Elevation', name: '--shadow-sm', value: '0 2px 4px rgba(0,0,0,.08)', preview: 'Small shadow' },
  { group: 'Elevation', name: '--shadow-md', value: '0 4px 8px rgba(0,0,0,.10)', preview: 'Medium shadow' },
  { group: 'Elevation', name: '--shadow-lg', value: '0 8px 16px rgba(0,0,0,.12)', preview: 'Large shadow' },
  { group: 'Elevation', name: '--shadow-xl', value: '0 12px 20px rgba(0,0,0,.14)', preview: 'Overlay shadow' },
  { group: 'Elevation', name: '--shadow-2xl', value: '0 16px 48px rgba(0,0,0,.18)', preview: 'High elevation' },
]
function TokenReference() {
  const groups = [...new Set(tokens.map(token => token.group))]
  return <div style={{width:'100%',maxWidth:1000,color:'#19191F',fontFamily:'var(--font-family-primary)',display:'grid',gap:28}}>
    <header style={{padding:'20px 0 24px',borderBottom:'1px solid #E8E8ED'}}>
      <div style={{fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:'#A72042',fontWeight:600,marginBottom:10}}>Foundations / Tokens</div>
      <h1 style={{fontSize:34,lineHeight:1.15,letterSpacing:'-.04em',marginBottom:10}}>A shared language for interface decisions.</h1>
      <p style={{fontSize:14,lineHeight:1.7,color:'#666675',maxWidth:680}}>Browse the key typography, spacing, radius, and elevation values currently defined in Datum. These examples are a quick reference; the CSS variables remain the source of truth.</p>
    </header>
    {groups.map(group=><section key={group}>
      <h2 style={{fontSize:20,marginBottom:12}}>{group}</h2>
      <div style={{display:'grid',gap:8}}>
        {tokens.filter(token=>token.group===group).map(token=><div key={token.name} style={{display:'grid',gridTemplateColumns:'minmax(160px,1.1fr) minmax(150px,1fr) minmax(150px,1fr)',gap:12,alignItems:'center',border:'1px solid #E8E8ED',borderRadius:10,padding:12,background:'#FFFFFF'}}>
          <span style={{fontSize:11,color:'#A72042',fontFamily:'var(--font-family-mono)',overflowWrap:'anywhere'}}>{token.name}</span>
          <span style={{fontSize:11,color:'#666675',fontFamily:'var(--font-family-mono)',overflowWrap:'anywhere'}}>{token.value}</span>
          <div style={{display:'flex',alignItems:'center',gap:10,minWidth:0}}>
            {group==='Spacing'&&<span style={{height:8,width:Math.max(2,Number.parseInt(token.value,10)),maxWidth:56,background:'#E72757',borderRadius:2,flexShrink:0}}/>}
            {group==='Radius'&&<span style={{height:30,width:42,background:'#F9E1E7',border:'1px solid #E72757',borderRadius:token.value,flexShrink:0}}/>}
            {group==='Elevation'&&<span style={{height:30,width:42,background:'#FFFFFF',borderRadius:6,boxShadow:token.value,flexShrink:0,border:'1px solid #F3F3F3'}}/>}
            <span style={{fontSize:group==='Typography'?Math.min(18,Math.max(12,Number.parseInt(token.value,10)/2.5)):12,color:'#343434',overflowWrap:'anywhere'}}>{token.preview}</span>
          </div>
        </div>)}
      </div>
    </section>)}
  </div>
}
const meta = { title: 'Datum/Foundations/Tokens', component: TokenReference, parameters: { layout: 'padded' }, tags: ['autodocs'] } satisfies Meta<typeof TokenReference>
export default meta
type Story = StoryObj<typeof meta>
export const Reference: Story = {}
