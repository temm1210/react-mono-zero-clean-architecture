# 프로젝트 전체에서 사용하는 component

## 목표

1. `TDD` 진행
2. `OOP` 적용

## 컴포넌트

- `Slider` : range slider bar component
- `Sticky` : `position:sticky`를 `position:relative, fixed, absolute`를 사용하여 구현한 component
  - 상위 컴포넌트에서는 필수적이고 공통적인 로직만 담당하고 `mode(top, bottom)`에 따라 다른 로직은 하위 컴포넌트에서는 `useimperativehandle` hook을 사용하여 상세로직 구현 
- `Portal` : 특정 `element에 portal`해주는 component
- `Modal` : modal dialog component
- `form` : `form`을 쉽게 사용하게 해주는 package
