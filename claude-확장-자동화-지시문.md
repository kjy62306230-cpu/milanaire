# Claude 확장프로그램용 — Gemini 자동 생성 지시문

> 아래 지시문 **전체를 통째로 복사**해서 Claude in Chrome 입력창에 붙여넣기.
> (모드: "묻지 않고 실행" 권장. Gemini 이미지 만들기 화면이 열려 있는 상태에서 시작)

---

```
너는 지금 gemini.google.com 의 "이미지 만들기(Nano Banana)" 화면을 조작해서
럭셔리 이탈리아 가구 브랜드 웹사이트용 이미지 33장을 자동 생성하는 작업을 한다.

## 전체 프로세스 (배치 3개, 각각 새 채팅)

각 배치마다:
1. 새 채팅을 연다
2. 아래 배치 프롬프트를 입력창에 붙여넣고 전송한다
3. 이미지 생성이 완전히 끝날 때까지 기다린다 (생성 중엔 절대 다음 입력 금지)
4. 이미지가 나오면 즉시 그 이미지를 다운로드한다 (다운로드 버튼 클릭)
5. "next" 를 전송한다
6. 배치의 리스트가 끝날 때까지 3~5를 반복한다
7. 배치가 끝나면 다음 배치로 (새 채팅)

## 품질 관리 규칙
- 생성된 이미지에 텍스트/워터마크/사람(PT1 제외)이 보이면:
  "redo the previous image, remove any text and people, same style" 전송 후 재다운로드
- 배치 A에서 배경이 흰색이나 어두운 색으로 나오면:
  "redo with the seamless light warm-grey #EDEBE6 studio background, exactly like the first image" 전송
- 같은 컷 재시도는 최대 2번까지만. 2번 실패하면 그냥 다음으로 넘어가고 실패 목록에 기록
- Gemini가 리스트를 무시하고 여러 장을 한 번에 만들면, 순서대로 전부 다운로드하고 이어간다

## 완료 보고 (매우 중요)
모든 배치가 끝나면 다음을 정리해서 보고한다:
1. 다운로드한 순서대로 → 코드 매핑 리스트 (예: 1번째 다운로드 = P1, 2번째 = P1b ...)
2. 실패했거나 재시도한 컷 목록
이 로그는 파일명 일괄 변경에 사용되므로 다운로드 순서를 정확히 기록할 것.

---

## 배치 A 프롬프트 (새 채팅 #1 — 상품 누끼 20장)

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
Label each response with its code. When I say "next", continue with the
following item in the SAME style.

THE LIST:
1) P1 - sculptural armchair made of thick knotted tubes of cream-white boucle teddy fabric, one chunky organic knot shape, front legs merging into backrest, front view
2) P1b - the exact same knotted boucle armchair, side profile view at 45 degrees
3) P1c - the exact same knotted boucle armchair, rear view showing the interwoven knot backrest
4) P1d - extreme close-up macro of the same cream boucle knot, fabric loops filling the frame
5) P2 - long dining table with dramatic green-and-black veined marble top and sculptural polished bronze legs
6) P3 - long low-profile modular sofa in ivory boucle, wide flat armrests, plump rounded cushions
7) P4 - luxury upholstered bed fully covered in cream fabric, tall soft rounded headboard, neat white bedding
8) P5 - narrow console table in dark burned wood with charred texture and one polished brass slab leg, wabi-sabi
9) P6 - dramatic armchair with fan-shaped backrest of tall spoon-like upholstered cream petals, round gold base, like a peacock tail
10) P7 - long art-deco sideboard with vertical fluted dark bronze ribbing and black marble top
11) P8 - sculptural table lamp with glowing translucent amber onyx shade shaped like a curved sail, dark bronze base, turned on
12) P9 - low organic kidney-shaped coffee table in smooth dark patinated bronze, thick cylindrical legs
13) P10 - puffy white boucle lounge armchair made of rounded stacked cushion layers on a slim brushed steel pedestal
14) P11 - cascading chandelier of polished brass diamond-shaped geometric pendants hanging at different heights
15) P12 - set of three sculptural ceramic vases with ridged organic vertical texture, sand cream and ivory tones
16) P13 - dining chair with curved rounded cream boucle backrest and seat on a round brushed steel pedestal
17) P14 - tall dark walnut storage cabinet with slim brass edge details and small black marble top
18) P15 - nested hand-carved dark walnut wooden bowls with visible carving marks, oiled finish
19) P16 - low round ottoman pouf in caramel-tan pleated velvet with soft croissant-like folds, crossed dark metal legs
20) P17 - small accent chair with soft rounded cream boucle backrest split like two petals, slim warm walnut legs

---

## 배치 B 프롬프트 (새 채팅 #2 — 가로 인테리어 5장)

You are my interior campaign photographer for ONE luxury Italian furniture
brand. We will create a SERIES of 5 wide interior photos. Consistency is critical.

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
1) H1 - aerial three-quarter view of a modern luxury outdoor terrace at golden hour: large modular cream-white sofa arrangement, low sculptural marble and bronze coffee tables with ceramic vases, warm stone floor, palm tree shadows, Mediterranean villa in background
2) H2 - modern brutalist villa exterior at dusk: dramatic curved concrete roof, floor-to-ceiling glass walls revealing warm lit interior with cream sofas, lush garden and palm trees, warm glow against blue hour sky
3) L3 - dramatic dark luxury library wall filling the frame: full-height backlit dark wood shelving grid with books, ceramics and art objects, warm amber backlight, cream tufted sofa on the left, round dining table with cream chairs on the right, moody atmosphere
4) L4 - rich warm luxury living room: sculptural geometric wood-panel wall, long caramel leather sofa, metal shelving unit, cascading brass chandelier with diamond pendants, marble side tables, two armchairs near a bright window on the right, deep warm brown palette
5) L5 - sculptural luxury villa living room with curved white plaster architecture and a large conical fireplace hood, cream knotted boucle armchairs and modular cream sofa with woven textured panels, bamboo garden through glass wall

---

## 배치 C 프롬프트 (새 채팅 #3 — 세로 무드 8장)

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
1) L1 - cozy luxury bedroom corner at dusk: sculptural lamp with glowing onyx stone shade on a dark bronze side cabinet, upholstered bed with tall soft taupe headboard, intimate warm amber lighting
2) L2 - elegant dining room: round dining table with warm cream marble top and sculptural brushed brass base, dining chairs with curved cream boucle backrests, warm indirect light, linen curtains
3) L6 - luxury Mediterranean villa garden at golden hour: large cream-white outdoor modular sofa on a stone terrace beside a quiet swimming pool, old olive and palm trees, warm sunset light
4) PT1 - EXCEPTION WITH PEOPLE, BLACK AND WHITE: editorial portrait of two female furniture designers in their Milan atelier, one standing near a vintage radiator, one seated at a worktable with fabric samples, elegant dark clothing, natural window light, documentary style, subtle film grain
5) E1 - editorial still life: beige wool throw blanket with one dark brown stripe and fringed edges draped over a green-black marble coffee table, a French paperback book on top, warm sunlight, textured rug below
6) E2 - close-up of a tan saddle-leather dining chair on an outdoor terrace rug at golden hour, blurred hillside behind, warm backlit atmosphere, shallow depth of field
7) X1 - moody luxury interior seen through a glass wall with soft tree reflections: sculptural cream lounge chair with ottoman beside a slim brass floor lamp, warm evening light, cinematic reflections
8) X2 - top-down view of an organic kidney-shaped dark bronze coffee table on a chunky woven jute rug, nested carved walnut bowls on the table, dramatic warm raking side light

---

이제 배치 A부터 시작해라.
```

---

## 끝난 후 (J님이 할 일 딱 1개)

확장 Claude가 보고한 **"다운로드 순서 → 코드" 로그**를 Cowork의 저(Claude)에게 붙여넣어 주세요.
제가 PowerShell로 다운로드 폴더에서 시간순 정렬 → 코드명으로 일괄 리네임 → `assets/img/`로 이동까지 자동 처리합니다.
