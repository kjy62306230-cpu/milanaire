# Gemini 배치 프롬프트 — 복붙 3번으로 33컷 전부

> **사용법**
> 1. 새 채팅 열기 → 비율 설정 → 배치 프롬프트 통째로 복붙
> 2. 첫 이미지 나오면 → **`next`** 만 계속 입력 (코드 라벨을 Gemini가 붙여줌)
> 3. 저장 파일명 = 코드 (`P1.jpg`) → `visionnaire-clone/assets/img/`
> 4. 톤 어긋난 컷: `redo previous one, warmer golden light, more beige` 입력
>
> 배치 A(1:1) → B(16:9) → C(4:5) 순서 추천. A만 끝나도 상품 그리드 전부 채워짐.

---

## 🅰️ 배치 A — 상품 누끼 20컷 (새 채팅, 비율 **1:1**)

```
You are my product photographer for ONE luxury Italian furniture brand catalog.
We will create a SERIES of 20 product photos. Consistency is critical.

FIXED STYLE FOR EVERY IMAGE (never change this):
- Studio product photography, photorealistic
- A single furniture piece, centered, nothing else in frame
- Seamless plain light warm-grey studio background, hex #EDEBE6, floor and wall
  blend seamlessly with no visible horizon line
- Soft diffused studio lighting, one gentle soft shadow under the object
- Warm cream / beige / bronze / dark walnut material palette
- Square 1:1 format. No text, no watermark, no props, no people

PROCESS: Generate ONE image per response, in order. Start with item 1 now.
Label each response with its code (e.g. "P1"). When I say "next", continue
with the following item in the SAME style.

THE LIST:
1) P1 — sculptural armchair made of thick knotted tubes of cream-white boucle
   teddy fabric, one chunky organic knot shape, front legs merging into backrest, front view
2) P1b — the exact same knotted boucle armchair, side profile view at 45 degrees
3) P1c — the exact same knotted boucle armchair, rear view showing the interwoven knot backrest
4) P1d — extreme close-up macro of the same cream boucle knot, fabric loops filling the frame
5) P2 — long dining table with dramatic green-and-black veined marble top and sculptural polished bronze legs
6) P3 — long low-profile modular sofa in ivory boucle, wide flat armrests, plump rounded cushions
7) P4 — luxury upholstered bed fully covered in cream fabric, tall soft rounded headboard, neat white bedding
8) P5 — narrow console table in dark burned wood with charred texture and one polished brass slab leg, wabi-sabi
9) P6 — dramatic armchair with fan-shaped backrest of tall spoon-like upholstered cream petals, round gold base, like a peacock tail
10) P7 — long art-deco sideboard with vertical fluted dark bronze ribbing and black marble top
11) P8 — sculptural table lamp with glowing translucent amber onyx shade shaped like a curved sail, dark bronze base, turned on
12) P9 — low organic kidney-shaped coffee table in smooth dark patinated bronze, thick cylindrical legs
13) P10 — puffy white boucle lounge armchair made of rounded stacked cushion layers on a slim brushed steel pedestal
14) P11 — cascading chandelier of polished brass diamond-shaped geometric pendants hanging at different heights
15) P12 — set of three sculptural ceramic vases with ridged organic vertical texture, sand cream and ivory tones
16) P13 — dining chair with curved rounded cream boucle backrest and seat on a round brushed steel pedestal
17) P14 — tall dark walnut storage cabinet with slim brass edge details and small black marble top
18) P15 — nested hand-carved dark walnut wooden bowls with visible carving marks, oiled finish
19) P16 — low round ottoman pouf in caramel-tan pleated velvet with soft croissant-like folds, crossed dark metal legs
20) P17 — small accent chair with soft rounded cream boucle backrest split like two petals, slim warm walnut legs
```

---

## 🅱️ 배치 B — 가로 대형 5컷 (새 채팅, 비율 **16:9**)

```
You are my interior campaign photographer for ONE luxury Italian furniture brand.
We will create a SERIES of 5 wide interior photos. Consistency is critical.

FIXED STYLE FOR EVERY IMAGE (never change this):
- Photorealistic editorial interior/architecture photography
- Warm beige, ivory, caramel and bronze palette, muted earth tones
- Golden hour or warm ambient light, soft long shadows
- Travertine, plaster, marble, boucle and wood textures
- High-end interior magazine aesthetic, medium format camera look
- Wide 16:9 landscape format. No people, no text, no watermark

PROCESS: Generate ONE image per response, in order, labeled with its code.
When I say "next", continue in the SAME style. Start with item 1 now.

THE LIST:
1) H1 — aerial three-quarter view of a modern luxury outdoor terrace at golden
   hour: large modular cream-white sofa arrangement, low sculptural marble and
   bronze coffee tables with ceramic vases, warm stone floor, palm tree
   shadows, Mediterranean villa in background
2) H2 — modern brutalist villa exterior at dusk: dramatic curved concrete
   roof, floor-to-ceiling glass walls revealing warm lit interior with cream
   sofas, lush garden and palm trees, warm glow against blue hour sky
3) L3 — dramatic dark luxury library wall filling the frame: full-height
   backlit dark wood shelving grid with books, ceramics and art objects, warm
   amber backlight, cream tufted sofa on the left, round dining table with
   cream chairs on the right, moody atmosphere
4) L4 — rich warm luxury living room: sculptural geometric wood-panel wall,
   long caramel leather sofa, metal shelving unit, cascading brass chandelier
   with diamond pendants, marble side tables, two armchairs near a bright
   window on the right, deep warm brown palette
5) L5 — sculptural luxury villa living room with curved white plaster
   architecture and a large conical fireplace hood, cream knotted boucle
   armchairs and modular cream sofa with woven textured panels, bamboo garden
   through glass wall
```

---

## 🅲 배치 C — 세로 무드 8컷 (새 채팅, 비율 **4:5** 또는 3:4)

```
You are my editorial photographer for ONE luxury Italian furniture brand.
We will create a SERIES of 8 vertical mood photos. Consistency is critical.

FIXED STYLE FOR EVERY IMAGE (never change this):
- Photorealistic editorial photography, luxury Italian furniture campaign
- Warm beige, ivory, caramel and bronze palette, muted earth tones
- Warm natural or golden hour light, soft shadows, texture-rich
- High-end interior magazine aesthetic
- Vertical 4:5 portrait format. No text, no watermark
- No people UNLESS the item explicitly asks for people

PROCESS: Generate ONE image per response, in order, labeled with its code.
When I say "next", continue in the SAME style. Start with item 1 now.

THE LIST:
1) L1 — cozy luxury bedroom corner at dusk: sculptural lamp with glowing onyx
   stone shade on a dark bronze side cabinet, upholstered bed with tall soft
   taupe headboard, intimate warm amber lighting
2) L2 — elegant dining room: round dining table with warm cream marble top
   and sculptural brushed brass base, dining chairs with curved cream boucle
   backrests, warm indirect light, linen curtains
3) L6 — luxury Mediterranean villa garden at golden hour: large cream-white
   outdoor modular sofa on a stone terrace beside a quiet swimming pool, old
   olive and palm trees, warm sunset light
4) PT1 — EXCEPTION, WITH PEOPLE + BLACK AND WHITE: editorial portrait of two
   female furniture designers in their Milan atelier, one standing near a
   vintage radiator, one seated at a worktable with fabric samples, elegant
   dark clothing, natural window light, documentary style, subtle film grain
5) E1 — editorial still life: beige wool throw blanket with one dark brown
   stripe and fringed edges draped over a green-black marble coffee table,
   a French paperback book on top, warm sunlight, textured rug below
6) E2 — close-up of a tan saddle-leather dining chair on an outdoor terrace
   rug at golden hour, blurred hillside behind, warm backlit atmosphere,
   shallow depth of field
7) X1 — moody luxury interior seen through a glass wall with soft tree
   reflections: sculptural cream lounge chair with ottoman beside a slim brass
   floor lamp, warm evening light, cinematic reflections
8) X2 — top-down view of an organic kidney-shaped dark bronze coffee table on
   a chunky woven jute rug, nested carved walnut bowls on the table, dramatic
   warm raking side light
```

---

## 저장 매핑 (다시 한번)

| 배치 | 코드 → 파일명 | 넣는 곳 |
|------|--------------|---------|
| A (20) | P1, P1b, P1c, P1d, P2~P17 → `.jpg` | `assets/img/` |
| B (5) | H1, H2, L3, L4, L5 → `.jpg` | `assets/img/` |
| C (8) | L1, L2, L6, PT1, E1, E2, X1, X2 → `.jpg` | `assets/img/` |

**33컷 전부 파일명만 맞추면 사이트 자동 반영.** 어디 들어가는지는 `이미지-배치-맵.md` 참조.
