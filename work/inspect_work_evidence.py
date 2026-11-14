import json,re,zipfile,xml.etree.ElementTree as ET
from pathlib import Path
root=Path(r'D:\SEO\Company\Master File\1. SEO Client\B. Past Clients')
paths=json.loads(Path('work/past_docx_paths.json').read_text(encoding='utf-8'))
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
for i in [80,81,37,43]:
 p=Path(paths[str(i)]); rel=p.relative_to(root); project=rel.parts[0]
 with zipfile.ZipFile(p) as z: xml=ET.fromstring(z.read('word/document.xml'))
 lines=[]
 for para in xml.findall('.//w:p',ns):
  s=''.join(t.text or '' for t in para.findall('.//w:t',ns)).strip()
  if not s:continue
  s=re.sub(r'https?://\S+','[site link]',s)
  s=re.sub(re.escape(project),'[client]',s,flags=re.I)
  if re.search(r'project|work|implemented|optimization|optimized|seo|keyword|content|link|schema|local|profile|shopify|traffic|organic|sales|revenue|business|plan|gsc|date|result|report|click|impression|call|direction',s,re.I): lines.append(s)
 print(f'\n== SOURCE {i} ({p.suffix}, {len(lines)} lines) ==')
 for s in lines[:55]:print(s[:300])
 print('RELATED FOLDER:',Path('[CLIENT]',*rel.parts[1:-1]))
