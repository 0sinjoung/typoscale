// 0. 폰트 사이즈 별 텍스트 아이템 객체 생성

// 1) 생성자 함수
function CreateFontListObj(fontSize) {
  this.fontSize = fontSize,
  this.fontStyle = 'Noto Sans KR',
  this.textMessage = 'Noto Sans KR 노토 산스'
  this.fontWeight = 'regular',
  this.letterSpace = 0
}

// 2) 변경감지 함수
CreateFontListObj.prototype.changeFontStyleObj = function(fontStyle) {
  this.fontStyle = fontStyle;
}

CreateFontListObj.prototype.changeFontWeightObj = function(fontWeight) {
  this.fontWeight = fontWeight;
}

CreateFontListObj.prototype.changeLetterSpacingObj = function(letterSpace) {
  this.letterSpace = letterSpace;
}

CreateFontListObj.prototype.changeTextMessageObj = function(message) {
  this.textMessage = message;
}

// 3) 자료구조
const fontListArr = [];


// -----------------------------------------------------


// 1. 함수

// 1) 오름차순 정렬 비교연산 함수
function compare(key) {
  return (a, b) => (a[key] > b[key]? 1 : (a[key] <b[key]? -1 : 0));
}


// 2) Create <li> HTML
function createHTMLString(array) {
  const listOl = document.querySelector('.font-preview-items');
  
  const listStringArray = array.map((item) => {
    return `
    <li class="font-preview-item" style="font-size: ${item.fontSize}px">
      <div class="font-text" style="font-family: '${item.fontStyle}', serif">
        <div class="text-p ${item.fontWeight}" style="letter-spacing: ${item.letterSpace}px">${item.textMessage}</div>
      </div>
      <div class="font-size">${item.fontSize}</div>
    </li>`
  });

  // 콤마제거
  const listString = listStringArray.join('');

  // display
  listOl.innerHTML = listString;
}


// 3) <li> initialize
const initFirstPage = function() {
  const checkboxs = document.querySelectorAll('.fscb');

  checkboxs.forEach(el => {
    if(el.checked) {
      const fontSize = el.id;
      const listItem = new CreateFontListObj(fontSize);
      fontListArr.push(listItem);
    }
  })

  // 오름차순 정렬
  fontListArr.sort(compare('fontSize'));

  // <li> HTML 생성
  createHTMLString(fontListArr);
}


// 4) Select font style
// 4-1) Open Select Box
const openSelectBox = function() {
  const optionItemsButton = document.querySelector('.selected-item-button');
  const optionItems = document.querySelector('.option-items');

  optionItemsButton.classList.toggle('open');
  optionItemsButton.querySelector('.toggle-arrow').classList.toggle('open');
  optionItems.classList.toggle('open');
}

// 4-2) Close Select Box
const closeSelectBox = function() {
  const optionItemsButton = document.querySelector('.selected-item-button');
  const optionItems = document.querySelector('.option-items');

  optionItemsButton.classList.remove('open');
  optionItemsButton.querySelector('.toggle-arrow').classList.remove('open');
  optionItems.classList.remove('open');
}

// 4-3) Change Selected Item
const changeSelectedItem = function(e) {
  const optionItem = document.querySelectorAll('.option-item');
  const selectedItem = document.querySelector('.selected-item');
  const currentSelectItem = e.target;

  selectedItem.textContent = currentSelectItem.textContent.trim();
  optionItem.forEach(el => el.classList.remove('active'));
  currentSelectItem.classList.add('active');
}

// 4-4) Change Font Style
const changeFontStyle = function(fontStyle) {
  const previewTextMessageInput = document.querySelector('.preview-input');
  let previewText = "";

  if(previewTextMessageInput.value) {
    previewText = previewTextMessageInput.value;
    previewTextMessageInput.placeholder = "";
  } else {
    switch(fontStyle) {
      case 'Noto Sans KR' :
        previewText = `${fontStyle} 노토 산스`;
        break;
      case 'Spoqa Han Sans Neo' :
        previewText = `${fontStyle} 스포카 한 산스`;
        break;
      case 'Nanum Gothic' :
        previewText = `${fontStyle} 나눔 고딕`;
        break;
      case 'Roboto' :
      case 'Open Sans' :
      case 'Lato' :
        previewText = `${fontStyle} use only english font`;
        break;
      default:
        previewText = 'Error';
        break;
    }
    previewTextMessageInput.placeholder = previewText;
  }


  fontListArr.forEach(item => {
    item.changeFontStyleObj(fontStyle);
    item.changeTextMessageObj(previewText);
  })
}

// 5) Preview Text
// 5-1) Change Preview Text
const changePreviewText = function(e) {
  const previewInputValue = document.querySelector('.preview-input').value;
  const previewTextItem = document.querySelectorAll('.text-p');
  previewTextItem.forEach(e => {
    e.innerText = previewInputValue;
  })
}

// 5-2) Alert 
const alertKoreanUse = function(e) {

}


// 6) Font Weight
// 6-1) Font Weight Btn Toggle
const toggleFontWeightBox = function(e) {
  const fontweightControlBox = document.querySelector('.fontweight-control-box');
  fontweightControlBox.classList.toggle('open');
  fontweightControlBox.querySelector('.toggle-arrow').classList.toggle('open');
}

// 6-2) Select Font Weight
const selectFontWeight = function(e) {
  const fontWeightBtn = document.querySelectorAll('.fontweight-list-btn');
  fontWeightBtn.forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');

  const currentWeight = e.target.parentElement.className;
  const textP = document.querySelectorAll('.text-p');
  textP.forEach(el => {
    el.className = 'text-p ' + currentWeight;
  })
}


// 7) Letter Spacing
// 7-1) Letter Spacing Btn Toggle
const toggleLetterSpacingtBox = function() {
  const letterSpacingControlBox = document.querySelector('.letterspacing-control-box');
  letterSpacingControlBox.classList.toggle('open');
  letterSpacingControlBox.querySelector('.toggle-arrow').classList.toggle('open');
}

// 7-2) change letter spacing
const changeLetterSpacing = function(e) {
  let currentLetterSpaceValue = e.target.value;
  let rangeValueText = document.querySelector('.letter-spacing-text');
  rangeValueText.innerHTML = `${currentLetterSpaceValue}px`;

  const textP = document.querySelectorAll('.text-p');
  textP.forEach(e => {
    e.style = `letter-spacing: ${currentLetterSpaceValue}px;`;
  });
}


// 8) Change Font List Properties of All array items in Current Style
const changeFontListPropertiesAllItems = function(array) {
  const currentFontStyle = document.querySelector('.selected-item').textContent;
  const currentFontWeight = document.querySelector('.fontweight-list-btn.active').parentElement.className;
  const currentLetterSpacing = document.querySelector('#letter-spacing-range').value;
  const currentTextMessageInput = document.querySelector('.preview-input');
  
  array.forEach(item => {
    // Font Style
    item.changeFontStyleObj(currentFontStyle);

    // Text Message
    if (currentTextMessageInput.value) {
      item.changeTextMessageObj(currentTextMessageInput.value);
    } else {
      item.changeTextMessageObj(currentTextMessageInput.placeholder);
    }

    // Font Weight
    item.changeFontWeightObj(currentFontWeight);

    // Letter Spacing
    item.changeLetterSpacingObj(currentLetterSpacing);
  })
}


// 9) Font Size
// 9-1) Font Size Btn Toggle
  const toggleCheckboxtBox = function() {
    const checkboxControlBox = document.querySelector('.fontsize-control-box');
    checkboxControlBox.classList.toggle('open');
    checkboxControlBox.querySelector('.toggle-arrow').classList.toggle('open');
  }

// 9-2) Checked Checkbox - Add <li>
  const addList = function(fontSize) {
    // 객체 생성
    const checkedItem = new CreateFontListObj(fontSize);

    // 배열 push
    fontListArr.push(checkedItem);

    // 오름차순 정렬
    fontListArr.sort(compare('fontSize'));

    // 현재 속성 가져오기
    changeFontListPropertiesAllItems(fontListArr);

    // <li> HTML 생성
    createHTMLString(fontListArr);
  }

// 9-3) Checked Checkbox - Remove <li>
  const removeList = function(fontSize) {
    // fontsize에 해당하는 배열 index 찾기
    const arrIndex = fontListArr.findIndex(obj => obj.fontSize === fontSize);

    // 배열에서 <li> 제거
    fontListArr.splice(arrIndex, 1);

    // 현재 속성 가져오기
    changeFontListPropertiesAllItems(fontListArr);

    // 제거된 <li> 태그 display
    createHTMLString(fontListArr);
  }

// 9-4) Click Checkbox
  const selectFontSize = function(e) {
    const checkedCondition = e.target.checked;
    const currentCheckedFontSize = e.target.getAttribute('id');

    // c-1) 리스트 추가
    if(checkedCondition) {
      addList(currentCheckedFontSize);
    } 
    
    // c-2) 리스트 제거
    else if(!checkedCondition) {
      removeList(currentCheckedFontSize);
    }
  }


// 10) Dark Mode
  const darkmode = function(e) {
    const onoffCheckbox = document.querySelector('#onoff-toggle');
    const onoffText = document.querySelector('.onoff-text');

    if(!onoffCheckbox.checked) {
      onoffText.innerHTML = 'On';
    } else {
      onoffText.innerHTML = 'Off';
    }
  }



// 11) Side Navigation
// 11-1) show sidenav
  const showSidenav = function(e) {
    const sideNav = document.querySelector('.sidenav');
    const sideNavBtn = document.querySelector('.detail-controls-button');
    const contentsContainer = document.querySelector('.contents-container');
    const windowWidth = window.innerWidth;
    sideNav.classList.add('active');
    sideNavBtn.classList.add('display-none');
    
    if(windowWidth > 769) {
      contentsContainer.classList.add('active');
      
    } else {
      contentsContainer.classList.add('filter-blur');
    }
  }

// 11-2) hide sidenav
  const hideSidenav = function(e) {
    const sideNav = document.querySelector('.sidenav');
    const sideNavBtn = document.querySelector('.detail-controls-button');
    const contentsContainer = document.querySelector('.contents-container');
    const windowWidth = window.innerWidth;

    sideNav.classList.remove('active');
    sideNavBtn.classList.remove('display-none');

    if(windowWidth > 769) {
      contentsContainer.classList.remove('active');
  
    } else {
      contentsContainer.classList.remove('filter-blur');
    }
  }
  // 11-3) mobile size -> window size
  const changeWindowSizeMoToWindow = function(e) {
    const contentsContainer = document.querySelector('.contents-container');
    const currentInnerWidth = e.currentTarget.innerWidth;

    if(currentInnerWidth > 769 && contentsContainer.className.includes('filter-blur')) {
      contentsContainer.classList.remove('filter-blur');
      contentsContainer.classList.add('active');
    }
  }


// -----------------------------------------------------


// 2. Event Listener

// 1) Click Event
document.addEventListener('click', e => {

  // a. Font Style
  // a-1)toggle
  if(e.target.closest('.selected-item-button')) {
    openSelectBox();
  } else {
    closeSelectBox();
  }
  // a-2)select/change font style
  if(e.target.matches('.option-item')) {
    const fontStyle = e.target.textContent.trim();
    changeSelectedItem(e);
    changeFontStyle(fontStyle);
    createHTMLString(fontListArr); 
  }


  // b. Font weight
  // b-1)toggle
  if(e.target.closest('.fontweight-control-box > button')) {
    toggleFontWeightBox();
  }
  // b-2)select font weight
  if(e.target.closest('.fontweight-lists li')) {
    selectFontWeight(e);
  }


  // c. Letter spacing toggle
  if(e.target.closest('.letterspacing-control-box > button')) {
    toggleLetterSpacingtBox();
  }


  // d. Font Sizes
  // d-1)toggle
  if(e.target.closest('.fontsize-control-box > button')) {
    toggleCheckboxtBox();
  }
  // d-2)select font size
  if(e.target.matches('.fscb')) {
    selectFontSize(e);
  }


  // e. Dark mode toggle
  if(e.target.closest('.onoff-toggle-label')) {
    darkmode();
  }


  // f. sidenav 
  //  f-1) sidenav show
  if(e.target.closest('.detail-controls-button')) {
    showSidenav();
  } 
  // f-2) sidenav hide
  if(e.target.closest('.sidenav-close-button')) {
    hideSidenav();
  }
})

// 2) Key Event - Preview Text Input-text 감지
document.querySelector('.preview-input').addEventListener('keyup', changePreviewText);


// 3) Change Event - Letter spacing Input-range 감지
document.querySelector('#letter-spacing-range').addEventListener('change', e => changeLetterSpacing(e));


// 4) Resize Event - sidenav 
window.addEventListener('resize', e => changeWindowSizeMoToWindow(e));



// -----------------------------------------------

// 3. 사이트 로드하자마자 fontsize list 생성
const windowRoadInit = (function() {
  initFirstPage()
})();

