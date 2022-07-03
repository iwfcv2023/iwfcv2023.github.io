# Jekyll 일반

[Protip] Markdown 문서는 Visual Studio Code에서 1. `ctrl`(`cmd`)+`k` 조합키 2. 이후 `v` 키를 통해 렌더링하여 읽을 수 있습니다.

## 1. 기본 작동 원리
Jekyll은 저장소 내의 몇가지 폴더와 파일을 제외하고 모든 Markdown(`.md`) 파일과 HTML(`.html`) 파일을 사전에 작성된 템플릿과 합쳐 새로운 HTML 파일로 빌드해주는 소프트웨어입니다.  
관련된 내용은 [#](#)를 참조하세요.


Jekyll은 위 사항과 동시에 빌드 결과물을 내장 서버 엔진을 통해 외부에 공개하는 마이크로블로그 웹 서버 엔진이기도 합니다. 관련된 내용은 [#](#)를 참조하세요.

## 2. Jekyll의 빌드 시스템
Jekyll은 거의 모든 Markdown 파일과 HTML 파일을 사전에 정의한 규칙에 따라 빌드합니다.  

하지만 아래 폴더들은 예외입니다:
 * `_includes`
 * `_layouts`

빌드 과정은 아래와 같습니다:
1. (빌드 진입점) 각 `.md` `.html` 파일 로드, YAML 헤더 확인  
  * YAML 헤더에 관한 내용은 [#](#)에서 확인하세요.  
2. YAML 헤더의 `layout`설정을 읽어 `/_layouts`에서 해당하는 레이아웃 정의를 로드합니다.  
  * 만약 `layout: default` 라면 `/_layouts/default.html`을 로드합니다.  
3. 로드된 레이아웃에 규칙에 맞게 컨텐츠 요소를 삽입합니다.  
  1. 빌드 진입점의 컨텐츠를 레이아웃에 삽입합니다.  
  2. 필요하다면 Include(`/_includes`) 파일을 로드하여 레아이웃에 삽입합니다.  

## 2.1. SASS 빌드
Jekyll은 SASS를 CSS로 빌드할 수 있습니다. 이를 위해선 Jekyll이 빌드 대상을 인식해야 합니다. SASS는 `/_sass` 폴더 하위에 YAML 헤더가 삽입된 파일만을 대상으로 빌드됩니다.

## 3. 폴더 구조
이 저장소의 폴더는 두 가지 종류의 이름을 갖고 있습니다.  

1. `_`가 이름 앞에 붙은 폴더 (ex. `_posts`)
2. 일반 폴더

Jekyll은 페이지를 빌드하거나 서버로 동작할 때 이름 앞에 `_`가 붙은 폴더나 파일을 숨깁니다. 즉, 빌드 진입점으로 사용하지 않습니다.  

따라서 Jekyll 설정값이나 레이아웃 파일을 보관하는데 이러한 네이밍 규칙을 사용합니다.

* `_data` : 추가 데이터에 대한 데이터베이스. `site.<db명>.<데이터 키>` 형태로 로드할 수 있습니다.
  * 참조: [Jekyll 문서](https://jekyllrb-ko.github.io/docs/datafiles/)
* `_includes` : DOM 컴포넌트 요소. 이 컴포넌트를 조합하여 레이아웃이 완성됩니다.
* `_layouts` : 이 웹사이트가 가질 여러가지 레이아웃 정의입니다.
* `_posts` : 실제 포스트가 저장됩니다. 하지만 이 사이트는 블로그로 운영하기 위해 만든 것이 아니므로 "새 소식" 파트를 위해 준비되었습니다.
* `_sass` : SASS 스타일 정의 파일입니다.

`_`가 붙지 않은 폴더는 그대로 외부에 노출됩니다.
* `assets` : 웹 사이트 에셋을 저장합니다. SASS 코드의 CSS 컴파일 결과 파일이 이 폴더에 저장됩니다. 즉 `_sass` 코드가 `assets` 폴더로 공개됩니다.
* `pages` : HTML로 변환할, _포스트가 아닌_ Markdown 문서를 저장합니다. 
  * 참고: 이 폴더 아래의 Markdown 문서들은 모두 `permalink` 속성을 갖고 있으므로 `pages` 하위에 빌드 결과물이 생성되지 않습니다. 즉, 빈 `pages` 폴더가 빌드 결과로 제공되지는 않습니다.

## 3. YAML 헤더
YAML 헤더는 Jekyll이 문서를 읽어들이면서 빌드를 처리하는 과정을 지정합니다. 즉, 페이지의 설정값이자 페이지 지역 변수에 해당합니다.  
Jekyll은 이 헤더가 존재하는 파일을 빌드 진입점으로 삼습니다.  

```md
---
title: Registration
layout: default
permalink: /registration
---
```

예시:  
* `title` : 문서의 제목
* `layout` : 문서의 레이아웃
* `permalink` : `nullable` 문서의 고유 주소 (퍼마링크)
  * `permalink: /update`로 설정되어있다면 `https://domain.tld/update` 주소로 접근할 수 있습니다.

YAML 헤더 값은 모두 페이지 지역 변수로 `page.<variable>` 형식으로 호출할 수 있습니다. 즉, Jekyll 표준 변수 외에도 자체적으로 YAML 헤더 변수를 지정하여 사용할 수 있습니다.

Jekyll에서 주로 사용하는 YAML 헤더 변수는 [공식 문서를 참조하세요,](https://jekyllrb-ko.github.io/docs/variables/#%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%B3%80%EC%88%98)

자체적으로 정의한 변수 유형은 [2. 웹사이트 기능](./2-custom-definitions.md) 문서를 참조하세요.  

## 4. 외부에 공개
Jekyll을 외부에 공개하는 방법은 크게 두 가지 입니다.

### 4.1. 빌드 후 HTML 파일만 외부 웹 서버 엔진을 사용하여 공개
Jekyll은 빌드 결과물을 `/_sites` 폴더 아래에 생성합니다.  

```sh
jekyll build
```


### 4.2. Jekyll 엔진에서 즉시 공개
Jekyll 엔진에는 웹 서버가 내장되어 있습니다. 아래 명령을 사용하여 로컬에서 서버를 시작할 수 있습니다.  

```sh
jekyll serve
```

서버 URL 기본값은 [127.0.0.1:4000](http://127.0.0.1:4000)입니다.  

## 5. 기타 사항

* Markdown 문법 아래에 HTML 문법이 존재하면 두 요소 모두 정상적으로 렌더링되나, HTML 문법 아래에 Markdown 문법이 존재하면 HTML 문법으로 작성된 요소만 렌더링됩니다.
