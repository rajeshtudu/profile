from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
out=Path('work'); out.mkdir(exist_ok=True)
W,H=1200,900
paper='#F4F0E8'; ink='#28231F'; muted='#887F75'; orange='#D96547'; line='#D9D1C5'; white='#FFFDF8'; pale='#E9E2D7'
fontdir=Path(r'C:\Windows\Fonts')
def font(name,size):
    for candidate in (fontdir/name, Path(r'C:\Windows\Fonts')/name.replace('.ttf','.TTF')):
        if candidate.exists(): return ImageFont.truetype(str(candidate),size)
    return ImageFont.load_default()
mono=font('consola.ttf',22); mono_small=font('consola.ttf',17); sans=font('segoeui.ttf',24); sans_small=font('segoeui.ttf',19); bold=font('segoeuib.ttf',25); serif=font('georgiab.ttf',61); metric=font('georgiab.ttf',56); title_small=font('segoeui.ttf',26)
def base(label,title,subtitle):
    im=Image.new('RGB',(W,H),paper); d=ImageDraw.Draw(im)
    d.rectangle((28,28,W-28,H-28),outline=ink,width=2)
    d.rectangle((54,54,65,H-54),fill=orange)
    d.text((96,76),label.upper(),font=mono,fill=orange)
    d.text((96,131),title,font=serif,fill=ink)
    d.text((98,213),subtitle,font=sans,fill=muted)
    d.line((96,278,W-96,278),fill=line,width=2)
    return im,d
im,d=base('Anonymized case note  /  01','Ecommerce SEO','Search visibility and organic sales · Shopify project')
cards=[('42K','GSC CLICKS','+31.84% vs previous period'),('1.22M','GSC IMPRESSIONS','+113.06% vs previous period'),('£64.1K','ORGANIC SALES','+45% vs previous period')]
lefts=[96,464,832]
for i,(value,label,note) in enumerate(cards):
    x=lefts[i]; y=350; w=336; h=323
    d.rounded_rectangle((x,y,x+w,y+h),radius=12,fill=ink)
    d.rectangle((x,y,x+9,y+h),fill=orange if i==0 else ('#D9A67B' if i==1 else '#98A482'))
    d.text((x+28,y+35),f'0{i+1}',font=mono_small,fill='#B6ADA3')
    d.text((x+28,y+91),value,font=metric,fill=white)
    d.text((x+28,y+181),label,font=mono_small,fill='#F09072')
    d.line((x+28,y+221,x+w-28,y+221),fill='#514842',width=1)
    d.text((x+28,y+245),note,font=sans_small,fill='#D6CEC3')
d.text((96,742),'JUN 2024 — JAN 2025',font=mono,fill=ink)
d.text((96,786),'SOURCE: ARCHIVED GOOGLE SEARCH CONSOLE + SALES REPORTS',font=mono_small,fill=muted)
d.text((96,829),'Period comparisons are report totals, not single-action attribution.',font=sans_small,fill=muted)
im.save(out/'shopify-seo-case.png',quality=95)
im,d=base('Anonymized case note  /  02','Local SEO','Google Business Profile interactions · local retail campaign')
d.rounded_rectangle((96,350,1104,690),radius=14,fill=ink)
d.text((130,387),'MAY 2025  /  PARTIAL MONTH',font=mono,fill='#F09072')
d.line((600,443,600,648),fill='#514842',width=2)
# Two balanced metric panels
for x,value,label in [(145,'162','PROFILE CALLS'),(650,'984','PROFILE WEBSITE CLICKS')]:
    d.text((x,465),value,font=font('georgiab.ttf',92),fill=white)
    d.text((x,576),label,font=mono,fill='#F09072')
d.text((145,625),'May 1–26 reporting window',font=sans_small,fill='#D6CEC3')
d.text((96,742),'DEC 2024 — MAY 2025',font=mono,fill=ink)
d.text((96,786),'SOURCE: ARCHIVED GOOGLE BUSINESS PROFILE REPORT',font=mono_small,fill=muted)
d.text((96,829),'Profile interactions are reported counts, not website sessions.',font=sans_small,fill=muted)
im.save(out/'local-seo-case.png',quality=95)
print('Created anonymized case graphics:', *(str(out/p) for p in ['shopify-seo-case.png','local-seo-case.png']))
