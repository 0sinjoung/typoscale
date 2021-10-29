# Typographic Scale Project

![all-color-crop](https://user-images.githubusercontent.com/89737184/139376364-84fe0c8e-1bcd-4af3-a605-7048a946a5ad.png)

<br/>
<br/>

# Typographic Scale
- Personal project
- Term : about 2 weeks
- Tools : HTML5, CSS3, Vanila JavaScript ES6
- Links : https://0sinjoung.github.io/typoscale/

<br/>
<br/>

## 프로젝트 소개
### 아이디어

<br/>
개인 포트폴리오 사이트를 제작하려는 단계에서 디자인 툴 없이 바로 작업을 시작하려니 폰트 사이즈를 결정하는 데에서 막연함을 느꼈습니다.

와이어 프레임을 그린 이후 폰트 사이즈를 결정하는 단계에서 도움이 될 만한 사이트가 필요하여 제작하게 되었습니다.

<br/>

### 사용 대상

1. 디자이너 없이 사이트를 만들어야 하는 개발자
2. 브라우저에서 폰트별 사이즈를 실제로 확인하고 싶은 디자이너와 개발자
3. 대중적으로 쓰이는 웹폰트 6종을 다양한 기기에서 미리 테스트 해보고 싶은 디자이너

<br/>

### 간략한 소개

개인 포트폴리오 사이트를 만들며, 모바일과 브라우저에서 사용할 폰트 사이즈를 결정하는 과정에서 막연함을 느꼈습니다. 앞으로 만들 프로젝트들에 디자인 툴 없이 바로 제작에 들어가거나 참고할 수 있도록 필요한 기능을 넣은 폰트 사이즈 테스트 사이트를 제작하게 되었습니다.

편집 디자인과 달리 웹 디자인에서는 타이포그래피 스케일에 맞춰 폰트 사이즈를 정하는 일련의 규칙성이 있다는 것을 알게 되었습니다. 이를 적용한다면 디자인을 모르는 사람이어도 폰트 사이즈를 선별하는 일이 한결 수월해집니다.

디자인에 대해 잘 모르는 사람이라도 타이포그래피 스케일에 맞춰 약간의 규칙을 준수하면 기존보다 더 아름답고 정돈된 사이트를 제작할 수 있을 것입니다. 

영문폰트와 한글폰트는 같은 폰트 사이즈여도 시각적으로 보았을때 영문폰트는 더 작게, 한글 폰트는 더 크게 느껴집니다. 

폰트 사이즈를 스케일에 맞춰 선별해 놓음으로써 브라우저 위에서 폰트 사이즈를 간단하게 비교하고 테스트해 볼 수 있습니다.

<br/>
<br/>

## 주요 기능
### 웹 타이포그래피 스케일

![typographic-scale](https://user-images.githubusercontent.com/89737184/139375628-c919598a-7ffe-4496-87ee-e9cb65350565.png)

디자이너가 아닐 경우 폰트 사이즈를 결정하는 것은 막연한 숙제같이 느껴질 수 있습니다. 

웹 디자인의 경우 통상적으로 적용하는 폰트 사이즈가 정해져 있습니다. 일반적인 브라우저의 기본 폰트 사이즈인 16px을 기준으로 얼마나 줄이거나 늘여야 할지 모르겠을 때 타이포그래픽 스케일은 좋은 견본이 됩니다. 

12px 보다 작은 경우는 -1px, 12px~18px까지는 2px, 18px~24px까지는 3px, 24px 이후로는 4px 배수로 늘이면 알맞습니다. 

참고 : 스케치 핸드북, 크리스티안 크래머 저 [https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=157839562](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=157839562)

이미지 출저 : [https://vanseodesign.com/typographic-scale-3/](https://vanseodesign.com/typographic-scale-3/) 

국문으로 잘 정리된 곳 : [http://styleguide.co.kr/content/typo/font-size.php](http://styleguide.co.kr/content/typo/font-size.php)

<br/>

### 웹 폰트 선택 Select font style

<img width="700" alt="스크린샷_2021-10-29_오전_1 19 02" src="https://user-images.githubusercontent.com/89737184/139375705-16171c00-9729-47fb-bffb-3ea2471daf83.png">

1. 웹폰트는 가장 많이 사용되는 산세리프체(고딕 폰트)로만 선정하였습니다. 총 6종을 선택하였습니다. 3종은 국문, 3종은 영문입니다.

<img width="700" alt="스크린샷_2021-10-29_오전_1 20 56" src="https://user-images.githubusercontent.com/89737184/139375769-3a2ebf69-fe67-4aa8-a68c-62a554e4e53a.png">

2. 영문을 선택할 경우 Preview Text 라벨 요소 옆에 영문 사용 경고문구가 표시됩니다. 국문을 쓸 경우 지원하지 않는 폰트이기 때문에 세리프체로 표시됩니다.

<img width="700" alt="스크린샷_2021-10-29_오전_1 21 21" src="https://user-images.githubusercontent.com/89737184/139375811-879c2dd6-50c2-4ce5-ad42-0db204a3db23.png">

3. input 요소에 사용자가 입력하지 않았을 경우 폰트를 선택하면 리스트의 텍스트는 폰트 이름을 명시하는 기본 안내 문구를 표시합니다 .

<br/>

### Preview Text - input 데이터 연동

1. 사용자가 데이터를 입력하면 keyup event가 호출됩니다.
2. 폰트 리스트를 순회하며 Node.innerText 속성의 값을 데이터로 파싱합니다.
3. **사용자가 입력한 데이터 값은 Select font style 폰트 스타일을 바꾸거나 Font sizes 체크박스로 폰트 리스트 요소를 추가하여도 유지됩니다.**

<br/>

### FontList 객체 클래스

```javascript
// 1) Class
class FontList {
  constructor(fontSize) {
    this.fontSize = fontSize,
    this.fontStyle = 'Noto Sans KR',
    this.textMessage = 'Noto Sans KR 노토 산스'
    this.fontWeight = 'regular',
    this.letterSpace = 0
  }

  changeFontStyle(fontStyle) {
    this.fontStyle = fontStyle;
  }

  changeFontWeight(fontWeight) {
    this.fontWeight = fontWeight;
  }

  changeLetterSpacing(letterSpace) {
    this.letterSpace = letterSpace;
  }

  changeTextMessage(message) {
    this.textMessage = message;
  }
}

// 2) 자료구조
const fontListArr = [];
```

1. fontListArr는 FontList 인스턴스 상태를 관리합니다. 초기화 생성 및 리스트를 추가, 삭제할 수 있습니다

<img width="700" alt="스크린샷_2021-10-29_오후_12 07 46" src="https://user-images.githubusercontent.com/89737184/139375892-81163ffb-fbfb-4728-a353-6eff7e9f0f01.png">

2. **FontList의 생성**
    1. **Font sizes** 체크박스와 연동됩니다
    2. Font sizes 체크박스가 클릭되면 해당 폰트 사이즈를 갖는 인스턴스가 생성되고, 사용자가 적용한 Select font style, Preview Text, 스타일 값(font weight, letter spacing) 데이터가 반영되어 상태관리 됩니다. 
    3. 이때 fontListArr 리스트는 폰트 사이즈를 기준으로 오름차순 정렬을 보장합니다.

<br/>

### 스타일 요소 변경시 레이아웃 - font weight, letter spacing

1. 순수한 스타일 요소인 font weight과 letter spacing은 사용자가 값을 변경할 경우 레이아웃이 일어납니다. 
2. 스타일 요소가 fontListArr 상태관리에 추가되어 되는 것은 리스트의 생성, 삭제의 경우 입니다.

<br/>

### Dark mode

![mobile-mo](https://user-images.githubusercontent.com/89737184/139375991-5ea49170-c9a5-42af-b134-cb7274dbd57a.png)

![mobile-d-mo](https://user-images.githubusercontent.com/89737184/139376015-c4b9b893-71de-4656-ab10-493382926fce.png)

1. 어두운 배경의 밝은 폰트는 일반 배경의 어두운 폰트보다 축소되어 보입니다. Dark mode 토글 버튼으로 비교하여 확인해볼 수 있습니다. 
2. 더불어 같은 px 사이즈의 폰트여도 영문과 한글 폰트의 실제 시각적 사이즈는 다르게 보입니다. 영문과 국문을 혼용하는 경우 같은 사이즈로 보여야 한다면 영문을 1-2px 키워야 국문과 시각적으로 같아 보입니다
