from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'tmp/python'))
import pymupdf

root = Path(__file__).resolve().parents[1]
out = root / 'tmp/pdfs/rendered'
out.mkdir(exist_ok=True)
for year, subject, pages in [(2026,'a',[3,4,6,7,8,9,10,11]),(2025,'a',[1,2,3,4,5,6,7,8,9]),(2024,'a',[1,2,3,4,5,6]),(2026,'b',[3,4,5]),(2025,'b',[3,4,5]),(2024,'b',[3,4,7,8])]:
    pdf = pymupdf.open(root/f'tmp/pdfs/{year}r{year-2018:02}_fe_kamoku_{subject}_qs.pdf')
    for i in pages:
        pdf[i].get_pixmap(matrix=pymupdf.Matrix(1.3,1.3)).save(out/f'{year}-{subject}-{i+1}.png')
print(out)
