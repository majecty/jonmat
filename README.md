# 존맛국회

국회의원 후원금사용내역을 기반으로 한 검증된 맛집지도 입니다.

현재는 2017년 기준 상위 6명의 데이터를 기반으로 만들어져 있습니다.

데이터를 더 채우는 방법은 가이드를 참고해주세요.
현재는 아무나 PDF를 보고 직접 구글 스프레드시트를 수정할 수 있습니다.

https://www.notion.so/Jonmat-8f61b408288d4776b45c1027ae7b4696

## TODO
- [ ] 2018년 데이터를 웹사이트에 반영
  - [x] 음식점만 추려서 구글시트에 반영
  - [ ] restaurants.json 파일 작성
  - [ ] 작성된 파일을 웹사이트에 반영
- [ ] 구글시트를 수정하면 웹사이트에 자동반영 되도록 cron/action 작성 필요
- [ ] 음식점 종류 수동입력 필요

## 프로젝트 로컬에서 실행시키기

### Python 환경 설정하기

#### virtualenv 설정

프로젝트 별로 파이썬 환경을 격리하면 예상치 못하게 라이브러리가 꼬이는 문제를 예방할 수 있습니다.

1. virtualenv를 설치합니다.

이 [링크](https://virtualenv.pypa.io/en/latest/)를 참고해서 설치합니다.

2. virtual env 환경을 만듭니다.

터미널에서 프로젝트의 루트 디렉토리로 이동하여 다음 명령어를 실행합니다.

```sh
virtualenv jonmatenv
```

3. virtualenv를 activate합니다.

virtualenv를 activate를 하면 앞으로 설치하는 모든 python 라이브러리가
jonmatenv 디렉토리에 저장됩니다.

프로젝트 루트 디렉토리에서 다음 명령어를 실행합니다.

```sh
. jonmatenv/bin/activate
```

#### 필요한 라이브러리 설치

다음 명령어를 실행하여 python 스크립트가 사용할 라이브러리들을 설치합니다.

```sh
pip3 install -r ./requirements.txt
```
