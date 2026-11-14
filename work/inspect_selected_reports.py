import json,re,zipfile,xml.etree.ElementTree as ET
from pathlib import Path
root=Path(r'D:\SEO\Company\Master File\1. SEO Client\B. Past Clients')
ids=[37,43,80,86,92,119,126]
paths=json.loads(Path('work/past_docx_paths.json').read_text(encoding='utf-8'))
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
for i in ids:
 p=Path(paths[str(i)]); rel=p.relative_to(root); project=rel.parts[0]
 with zipfile.ZipFile(p) as z: xml=ET.fromstring(z.read('word/document.xml'))
 lines=[]
 for para in xml.findall('.//w:p',ns):
  s=''.join(t.text or '' for t in para.findall('.//w:t',ns)).strip()
  if s:
   s=re.sub(r'https?://\S+','[site link]',s)
   s=s.replace(project,'[anonymized project]').replace(p.stem,'[report title]')
   if re.search(r'\d|click|impress|traffic|rank|organic|call|direction|sales|revenue|position|user|session|growth|comparison|month|year|source|work|optimization',s,re.I): lines.append(s)
 print(f'\n== REPORT ID {i} ({len(lines)} evidence lines) ==')
 for line in lines[:45]: print(line[:350])
