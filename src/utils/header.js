export const getTitleFromLocation = (location) => {
  if (location === "/main" || location === "/") {
    return "서비스 선택";
  } else if (location === "/loader") {
    return "상권 분석중...";
  } else if (location === "/newBusiness") {
    return "예비창업자 서비스";
  } else if (location === "/checklist") {
    return "체크리스트 가상창업";
  } else if (location === "/analyze") {
    return "상권정보";
  } else if (location === "/newmap") {
    return "지도 기반 창업";
  }
};
