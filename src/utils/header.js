export const getTitleFromLocation = (location) => {
  if (location === "/main" || location === "/") {
    return "서비스 선택";
  } else if (location === "/loading") {
    return "상권 분석중...";
  } else if (location === "/newBusiness") {
    return "예비창업자 서비스";
  }
};
