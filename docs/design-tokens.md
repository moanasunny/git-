# Design Tokens

> Figma 변수 ↔ CSS custom property 매핑 테이블.
> 소스: [멜론 디자인시스템 Figma](https://www.figma.com/design/cZV4zdCZCYVrWeHUBzJxm5/)
> Claude Code가 Figma 디자인 구현 시 이 문서를 참조합니다.

## 네이밍 규칙

- Figma `/` → CSS `-` 변환
- Primitive 토큰: `--color-*`, `--font-*`, `--spacing-*` 등 (직접 사용 자제)
- Semantic 토큰: `--surface-*`, `--text-*`, `--icon-*`, `--border-*` (컴포넌트에서 사용)
- 토큰 없는 값 → 새 변수 만들지 말고 `/* ⚠️ 누락된 토큰 */` 플래그

---

## Color Tokens

### Primitive — Primary (Melon Green)

| Figma 변수명 | CSS Custom Property   | 값        |
| ------------ | --------------------- | --------- |
| Primary/50   | `--color-primary-50`  | `#e5fdf2` |
| Primary/100  | `--color-primary-100` | `#ccfae5` |
| Primary/200  | `--color-primary-200` | `#99f2ba` |
| Primary/300  | `--color-primary-300` | `#66e690` |
| Primary/400  | `--color-primary-400` | `#33d966` |
| Primary/500  | `--color-primary-500` | `#00cd3c` |
| Primary/600  | `--color-primary-600` | `#009930` |
| Primary/700  | `--color-primary-700` | `#007a26` |
| Primary/800  | `--color-primary-800` | `#005c1c` |
| Primary/900  | `--color-primary-900` | `#003d12` |

### Primitive — Grey

| Figma 변수명 | CSS Custom Property | 값        |
| ------------ | ------------------- | --------- |
| Grey/50      | `--color-grey-50`   | `#f9f9f9` |
| Grey/100     | `--color-grey-100`  | `#f2f2f2` |
| Grey/200     | `--color-grey-200`  | `#dddddd` |
| Grey/300     | `--color-grey-300`  | `#bbbbbb` |
| Grey/400     | `--color-grey-400`  | `#999999` |
| Grey/500     | `--color-grey-500`  | `#888888` |
| Grey/600     | `--color-grey-600`  | `#666666` |
| Grey/700     | `--color-grey-700`  | `#505050` |
| Grey/800     | `--color-grey-800`  | `#333333` |
| Grey/900     | `--color-grey-900`  | `#1a1a1a` |

### Primitive — Red

| Figma 변수명 | CSS Custom Property | 값        |
| ------------ | ------------------- | --------- |
| Red/50       | `--color-red-50`    | `#fff5f5` |
| Red/100      | `--color-red-100`   | `#ffeaeb` |
| Red/200      | `--color-red-200`   | `#ffd5d6` |
| Red/300      | `--color-red-300`   | `#ffbfc1` |
| Red/400      | `--color-red-400`   | `#ffa8ab` |
| Red/500      | `--color-red-500`   | `#ff9295` |
| Red/600      | `--color-red-600`   | `#d94c5e` |
| Red/700      | `--color-red-700`   | `#aa2535` |
| Red/800      | `--color-red-800`   | `#801020` |
| Red/900      | `--color-red-900`   | `#4d0008` |

### Primitive — Green

| Figma 변수명 | CSS Custom Property | 값        |
| ------------ | ------------------- | --------- |
| Green/50     | `--color-green-50`  | `#f3f9e9` |
| Green/100    | `--color-green-100` | `#e2efc7` |
| Green/200    | `--color-green-200` | `#c4e090` |
| Green/300    | `--color-green-300` | `#add464` |
| Green/400    | `--color-green-400` | `#9cca42` |
| Green/500    | `--color-green-500` | `#8ac121` |
| Green/600    | `--color-green-600` | `#6e9a1a` |
| Green/700    | `--color-green-700` | `#537414` |
| Green/800    | `--color-green-800` | `#374d0d` |
| Green/900    | `--color-green-900` | `#1c2707` |

### Primitive — Blue

| Figma 변수명 | CSS Custom Property | 값        |
| ------------ | ------------------- | --------- |
| Blue/50      | `--color-blue-50`   | `#e6f7ff` |
| Blue/100     | `--color-blue-100`  | `#ccf0ff` |
| Blue/200     | `--color-blue-200`  | `#99e6f2` |
| Blue/300     | `--color-blue-300`  | `#66c9e8` |
| Blue/400     | `--color-blue-400`  | `#33b5e5` |
| Blue/500     | `--color-blue-500`  | `#00a1f1` |
| Blue/600     | `--color-blue-600`  | `#0078d7` |
| Blue/700     | `--color-blue-700`  | `#0058b3` |
| Blue/800     | `--color-blue-800`  | `#003a6b` |
| Blue/900     | `--color-blue-900`  | `#001a33` |

### Primitive — Yellow

| Figma 변수명 | CSS Custom Property  | 값        |
| ------------ | -------------------- | --------- |
| Yellow/50    | `--color-yellow-50`  | `#fff7d6` |
| Yellow/100   | `--color-yellow-100` | `#ffe7b8` |
| Yellow/200   | `--color-yellow-200` | `#fde9a8` |
| Yellow/300   | `--color-yellow-300` | `#fbe88b` |
| Yellow/400   | `--color-yellow-400` | `#f7d96b` |
| Yellow/500   | `--color-yellow-500` | `#f2c94c` |
| Yellow/600   | `--color-yellow-600` | `#d97700` |
| Yellow/700   | `--color-yellow-700` | `#a65a00` |
| Yellow/800   | `--color-yellow-800` | `#6b4a00` |
| Yellow/900   | `--color-yellow-900` | `#3a2a00` |

### Primitive — White / Black (opacity)

| Figma 변수명     | CSS Custom Property   | 값                      |
| ---------------- | --------------------- | ----------------------- |
| White/White 100% | `--color-white-100`   | `#ffffff`               |
| White/White 90%  | `--color-white-90`    | `rgba(255,255,255,0.9)` |
| White/White 80%  | `--color-white-80`    | `rgba(255,255,255,0.8)` |
| White/White 70%  | `--color-white-70`    | `rgba(255,255,255,0.7)` |
| White/White 60%  | `--color-white-60`    | `rgba(255,255,255,0.6)` |
| White/White 50%  | `--color-white-50`    | `rgba(255,255,255,0.5)` |
| White/White 40%  | `--color-white-40`    | `rgba(255,255,255,0.4)` |
| White/White 30%  | `--color-white-30`    | `rgba(255,255,255,0.3)` |
| White/White 20%  | `--color-white-20`    | `rgba(255,255,255,0.2)` |
| White/White 10%  | `--color-white-10`    | `rgba(255,255,255,0.1)` |
| Black/Black 100% | `--color-black-100`   | `#000000`               |
| Black/Black 90%  | `--color-black-90`    | `rgba(0,0,0,0.9)`       |
| Black/Black 80%  | `--color-black-80`    | `rgba(0,0,0,0.8)`       |
| Black/Black 70%  | `--color-black-70`    | `rgba(0,0,0,0.7)`       |
| Black/Black 60%  | `--color-black-60`    | `rgba(0,0,0,0.6)`       |
| Black/Black 50%  | `--color-black-50`    | `rgba(0,0,0,0.5)`       |
| Black/Black 40%  | `--color-black-40`    | `rgba(0,0,0,0.4)`       |
| Black/Black 30%  | `--color-black-30`    | `rgba(0,0,0,0.3)`       |
| Black/Black 20%  | `--color-black-20`    | `rgba(0,0,0,0.2)`       |
| Black/Black 10%  | `--color-black-10`    | `rgba(0,0,0,0.1)`       |
| General/900      | `--color-general-900` | `#131927`               |

---

## Semantic Color Tokens

### Surface

| Figma 변수명       | CSS Custom Property    | 참조 Primitive        |
| ------------------ | ---------------------- | --------------------- |
| Surface/white      | `--surface-white`      | `--color-white-100`   |
| Surface/black      | `--surface-black`      | `--color-black-100`   |
| Surface/grey       | `--surface-grey`       | `--color-grey-100`    |
| Surface/light grey | `--surface-light-grey` | `--color-grey-50`     |
| Surface/accent     | `--surface-accent`     | `--color-primary-500` |
| Surface/active     | `--surface-active`     | `--color-primary-600` |
| Surface/pressed    | `--surface-pressed`    | `--color-primary-700` |
| Surface/secondary  | `--surface-secondary`  | `--color-green-500`   |

### Text

| Figma 변수명                  | CSS Custom Property          | 참조 Primitive        |
| ----------------------------- | ---------------------------- | --------------------- |
| Text/primary-black            | `--text-primary-black`       | `--color-black-100`   |
| Text/primary-white            | `--text-primary-white`       | `--color-white-100`   |
| Text Color/text-primary-black | `--text-primary-dark`        | `--color-general-900` |
| Text/grey                     | `--text-grey`                | `--color-grey-600`    |
| Text/secondary-dark-grey      | `--text-secondary-dark-grey` | `--color-grey-700`    |
| Text/light-grey               | `--text-light-grey`          | `--color-grey-300`    |
| Text/disabled                 | `--text-disabled`            | `--color-grey-400`    |
| Text/secondary-white          | `--text-secondary-white`     | `--color-white-20`    |
| Text/accent                   | `--text-accent`              | `--color-primary-500` |
| Text/secondary                | `--text-secondary`           | `--color-green-500`   |
| Text/success                  | `--text-success`             | `--color-primary-500` |
| Text/info                     | `--text-info`                | `--color-blue-500`    |
| Text/text-info                | `--text-info-dark`           | `--color-blue-600`    |
| Text/warning                  | `--text-warning`             | `--color-yellow-500`  |
| Text/error                    | `--text-error`               | `--color-red-500`     |

### Icon

| Figma 변수명    | CSS Custom Property | 참조 Primitive        |
| --------------- | ------------------- | --------------------- |
| Icon/white      | `--icon-white`      | `--color-white-100`   |
| Icon/black      | `--icon-black`      | `--color-black-100`   |
| Icon/accent     | `--icon-accent`     | `--color-primary-500` |
| Icon/grey       | `--icon-grey`       | `--color-grey-600`    |
| Icon/light-grey | `--icon-light-grey` | `--color-grey-300`    |
| Icon/disabled   | `--icon-disabled`   | `--color-grey-400`    |
| Icon/secondary  | `--icon-secondary`  | `--color-green-500`   |
| Icon/success    | `--icon-success`    | `--color-primary-500` |
| Icon/info       | `--icon-info`       | `--color-blue-500`    |
| Icon/warning    | `--icon-warning`    | `--color-yellow-500`  |
| Icon/error      | `--icon-error`      | `--color-red-500`     |

### Border

| Figma 변수명     | CSS Custom Property  | 참조 Primitive        |
| ---------------- | -------------------- | --------------------- |
| Border/default   | `--border-default`   | `--color-grey-200`    |
| Border/divider   | `--border-divider`   | `--color-grey-100`    |
| Border/accent    | `--border-accent`    | `--color-primary-500` |
| Border/focused   | `--border-focused`   | `--color-primary-800` |
| Border/secondary | `--border-secondary` | `--color-green-500`   |
| Border/grey      | `--border-grey`      | `--color-grey-600`    |
| Border/disabled  | `--border-disabled`  | `--color-grey-400`    |

---

## Spacing Tokens

| Figma 변수명        | CSS Custom Property | 값     |
| ------------------- | ------------------- | ------ |
| Spacing/spacing-xxs | `--spacing-xxs`     | `4px`  |
| Spacing/spacing-xs  | `--spacing-xs`      | `8px`  |
| Spacing/spacing-sm  | `--spacing-sm`      | `12px` |
| Spacing/spacing-md  | `--spacing-md`      | `16px` |
| Spacing/spacing-lg  | `--spacing-lg`      | `20px` |
| Spacing/spacing-xl  | `--spacing-xl`      | `24px` |
| Spacing/spacing-2xl | `--spacing-2xl`     | `32px` |
| Spacing/spacing-3xl | `--spacing-3xl`     | `40px` |

## Radius Tokens

| Figma 변수명       | CSS Custom Property | 값     |
| ------------------ | ------------------- | ------ |
| Radius/radius-none | `--radius-none`     | `0px`  |
| Radius/radius-xxs  | `--radius-xxs`      | `2px`  |
| Radius/radius-xs   | `--radius-xs`       | `4px`  |
| Radius/radius-sm   | `--radius-sm`       | `8px`  |
| Radius/radius-lg   | `--radius-lg`       | `16px` |

## Shadow Tokens

| Figma 변수명         | CSS Custom Property | 값                                  |
| -------------------- | ------------------- | ----------------------------------- |
| Shadow/shadow-small  | `--shadow-small`    | `0px 2px 4px 0px rgba(0,0,0,0.05)`  |
| Shadow/shadow-medium | `--shadow-medium`   | `0px 4px 12px 0px rgba(0,0,0,0.08)` |
| Shadow/shadow-large  | `--shadow-large`    | `0px 8px 24px 0px rgba(0,0,0,0.12)` |

---

## Typography Tokens

### Primitive

| Figma 변수명       | CSS Custom Property        | 값                         |
| ------------------ | -------------------------- | -------------------------- |
| font family/Font 1 | `--font-family-pretendard` | `"Pretendard", sans-serif` |
| —                  | `--font-family-inter`      | `"Inter", sans-serif`      |
| font size/10       | `--font-size-10`           | `10px`                     |
| font size/12       | `--font-size-12`           | `12px`                     |
| font size/13       | `--font-size-13`           | `13px`                     |
| font size/15       | `--font-size-15`           | `15px`                     |
| font size/17       | `--font-size-17`           | `17px`                     |
| font weight/400    | `--font-weight-regular`    | `400`                      |
| font weight/600    | `--font-weight-semibold`   | `600`                      |
| font weight/700    | `--font-weight-bold`       | `700`                      |
| line height/14     | `--line-height-14`         | `14px`                     |
| line height/16     | `--line-height-16`         | `16px`                     |
| line height/18     | `--line-height-18`         | `18px`                     |

### Semantic (composite)

| Figma 변수명                      | CSS Properties                 | 값                             |
| --------------------------------- | ------------------------------ | ------------------------------ |
| Text Font/H1                      | `--text-h1-*`                  | Inter / 48px / 600 / 58px      |
| Text Font/H5                      | `--text-h5-*`                  | Inter / 24px / 600 / 28px      |
| Text Font/B1. Body                | `--text-body1-*`               | Inter / 16px / 400 / 24px      |
| www.melon.com/Pretendard/SemiBold | `--text-pretendard-semibold-*` | Pretendard / 13px / 600 / 16px |
| www.melon.com/Pretendard/Bold     | `--text-pretendard-bold-*`     | Pretendard / 12px / 700 / 14px |
| www.melon.com/Pretendard/Regular  | `--text-pretendard-regular-*`  | Pretendard / 12px / 400 / 14px |

---

## Claude용 규칙

1. Figma MCP가 hex 색상 반환 → 이 테이블에서 찾아서 Semantic 토큰(`--text-*`, `--surface-*` 등) 사용
2. Semantic에 없으면 Primitive(`--color-*`) 참조
3. Primitive에도 없으면 `/* ⚠️ 누락된 토큰 */` 플래그 후 보고
4. 스페이싱 숫자 반환 → `--spacing-*` 매핑 (4→xxs, 8→xs, 12→sm, 16→md, 20→lg, 24→xl, 32→2xl, 40→3xl)
5. 하드코딩된 hex / px 사용 절대 금지
