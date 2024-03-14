# PARD 3기 웹파트 OT 과제

## 내용

자기소개 페이지를 제작한다!

## 서비스

<a href = "https://pard-3rd-web-kimkwangil.netlify.app">보러가기 </a>

## netlify로 배포하기

<a href = "https://velog.io/@rkio/Netlify-Netlify로-프론트엔드-배포하기">전체적인 FLOW</a>을 따라하면 된다!

### 단, 유의해야 할 점

: netlify 해당 프로젝트에 들어간 뒤, Site configuration -> Build & deploy => Builtd settings에 들어간다.

: 아래와 같이 설정해주되, Base directory의 경우 배포하고자 하는 페이지의 폴더 위치를 고려해야 한다. (root 디렉토리가 될 것이기에))
| Runtime | Not set |
| Base directory | pard_3rd_kimkwangil_introduce |
| Package directory | Not set |
| Build command| CI= npm run build |
| Publish directory | pard_3rd_kimkwangil_introduce/build |
| Functions directory | pard_3rd_kimkwangil_introduce/netlify/functions |
| Deploy log visibility| Logs are public |
| Build status | Active |
