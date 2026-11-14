import re,zipfile,json,html,sys
from pathlib import Path
root=Path(r'D:\SEO\Company\Master File\1. SEO Client\B. Past Clients')
files=[]
for p in root.rglob('*.docx'):
    if not re.search(r'report|reporting|traffic|gsc|wins|status|performance',p.name,re.I): continue
    files.append(p)
files.sort(key=lambda p:str(p).lower())
pat=re.compile(r'.{0,100}(?:\d[\d,.]*\s?%|\d[\d,.]*\s?(?:k|m)\b|impressions?|clicks?|organic traffic|sessions|conversions?|leads?|calls?|revenue|average position|rank(?:ing)?s?).{0,150}',re.I|re.S)
def get_text(p):
    try:
        with zipfile.ZipFile(p) as z: raw=z.read('word/document.xml').decode('utf-8','ignore')
        raw=re.sub(r'</w:p>|</w:tr>', '\\n', raw); raw=re.sub(r'<w:tab[^>]*/>', ' ', raw); raw=re.sub(r'<[^>]+>', '', raw)
        return re.sub(r'\\s+',' ',html.unescape(raw))
    except Exception:return ''
results=[]
for i,p in enumerate(files,1):
    t=get_text(p)
    if not t:continue
    keys=len(re.findall(r'impressions?|clicks?|organic traffic|sessions|conversions?|leads?|calls?|revenue|average position|ranking|growth',t,re.I))
    metric=len(re.findall(r'\d[\d,.]*\s?%|\d[\d,.]*\s?[KkMm]\b',t))
    score=keys+metric*2
    if score<5:continue
    snippets=[]
    for m in pat.finditer(t):
        s=re.sub(r'https?://\S+','[site withheld]',m.group(0).strip())
        if re.search(r'impressions?|clicks?|organic traffic|sessions|conversions?|leads?|calls?|revenue|average position|rank',s,re.I):snippets.append(s[:280])
        if len(snippets)>=3:break
    results.append((score,i,p,len(t),snippets))
results.sort(reverse=True)
Path(r'work/past_docx_paths.json').write_text(json.dumps({str(i):str(p) for i,p in enumerate(files,1)},ensure_ascii=False),encoding='utf-8')
print('Past client report docs:',len(files),'ranked:',len(results))
for score,i,p,n,sn in results[:45]:print(f'ID={i} score={score} chars={n} metrics='+' || '.join(sn))
