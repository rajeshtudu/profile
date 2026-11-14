import json,re
from pathlib import Path
root=Path(r'D:\SEO\Company\Master File\1. SEO Client\B. Past Clients')
p=Path(json.loads(Path('work/past_docx_paths.json').read_text(encoding='utf-8'))['43'])
rel=p.relative_to(root); print('path relative with client redacted:',repr(Path('[CLIENT]',*rel.parts[1:]))); print('report filename:',re.sub(re.escape(rel.parts[0]),'[CLIENT]',p.name,flags=re.I)); print('\nSibling files:')
base=next((parent for parent in p.parents if parent.parent==root),p.parent)
for x in sorted(base.rglob('*')):
 if x.is_file() and x.suffix.lower() in ('.docx','.xlsx','.pdf','.pptx'):
  name=x.name
  for part in set(rel.parts):
   if len(part)>2:name=re.sub(re.escape(part),'[CLIENT]',name,flags=re.I)
  sub=Path(*x.relative_to(base).parts[:-1])
  print(f'{sub.as_posix()} / {name}')
