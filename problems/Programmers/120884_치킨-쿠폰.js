//  프로그래머스 / 치킨 쿠폰 / 레벨 0
//  https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let serviceChickens = 0;
  const getServiceChickens = chickens => {
    if (chickens >= 10) {
      const coupons = parseInt(chickens / 10) + parseInt(chickens % 10);
      serviceChickens += parseInt(chickens / 10);
      getServiceChickens(coupons);
    }
  };
  getServiceChickens(chicken);

  return serviceChickens;
}
