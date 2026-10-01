"""Imagen para compartir (og:image) 1200x630 en el estilo del hero.

    python3 scripts/og/make_og.py   ->  public/og.jpg

Usa los helpers de ../Anuncios/ads.py (mismo fondo, marco de iPhone y logo
que los anuncios) y la captura real de Inicio.
"""
import os, sys
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
sys.path.insert(0, '/Users/carlosordaz/Desktop/mydiess/Anuncios')
import ads  # noqa: E402

W, H = 1200, 630
img = ads.background(W, H, [
    (900, 300, 620, 0.55, ads.PINK),
    (120, -40, 520, 0.35, (155, 63, 134)),
]).convert('RGBA')

d = ImageDraw.Draw(img)
x = 72
ads.lockup(img, x, 70, 64)

lines = ['Su historia de amor,', 'en un solo lugar.']
f, s = ads.fit(lines, 600, 72)
d.text((x, 190), lines[0], font=f, fill=(255, 255, 255))
d.text((x, 190 + int(s * 1.1)), lines[1], font=f, fill=ads.PINK_L)

sub = ads.font(28, 'Medium')
d.text((x, 214 + int(s * 2.35)), 'La app para parejas: recuerdos, notas de\namor, aniversarios y más.',
       font=sub, fill=(255, 255, 255, 190), spacing=10)
ads.chip(img, x, 500, 'Gratis en App Store', 26)

dev = ads.phone(os.path.join(ROOT, 'public/screens/home.webp'), 300).rotate(4, expand=True, resample=Image.BICUBIC)
ads.drop(img, dev, (790, 70))

cp = Image.open(os.path.join(HERE, 'couple.png')).convert('RGBA')
cp = cp.crop(cp.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox())
cw = 330; cp = cp.resize((cw, int(cp.height * cw / cp.width)), Image.LANCZOS)
ads.drop(img, cp, (640, H - cp.height - 18), blur=20, opacity=110)

img.convert('RGB').save(os.path.join(ROOT, 'public/og.jpg'), quality=88, optimize=True)
print('public/og.jpg')
